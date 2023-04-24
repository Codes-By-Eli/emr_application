import os

from SQL.sql_interaction import SQL_Interaction
from PDF.pdf_interaction import PDF_Interaction
from JSON.json_interaction import JSON_Interaction
from flask import Flask, request, jsonify
from datetime import datetime, timedelta, timezone
from flask_jwt_extended import create_access_token, set_access_cookies, get_jwt, get_jwt_identity, unset_jwt_cookies, jwt_required, JWTManager
from flask_cors import CORS

app = Flask(__name__)

app.config["JWT_SECRET_KEY"] = "this-has-to-be-put-in-env-variable"
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)

jwt = JWTManager(app)
CORS(app)

user_email = ""

@app.after_request
def refresh_expiring_jwts(response):
    try:
        exp_timestamp = get_jwt()["exp"]
        now = datetime.now(timezone.utc)
        target_timestamp = datetime.timestamp(now + timedelta(minutes=30))
        if target_timestamp > exp_timestamp:
            access_token = create_access_token(identity=get_jwt_identity())
            set_access_cookies(response, access_token)
        return response
    except (RuntimeError, KeyError):
        # Case where there is not a valid JWT. Just return the original response
        return response


#Christian code here pls
@app.route("/submit_initial", methods=["POST"])
def submit_initial():
    #replace pass with the code you would like to use
    pass

#maybe try to protect this endpoint?
@app.route("/sign_up", methods=["POST"])
def create_account():
    first = request.json.get("first_name", None)
    last = request.json.get("last_name", None)
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    table = "users"
    params = ["first_name", "last_name", "email_address", "password"]
    values = [first, last, email, password]
    insertion = database.perform_insert(table, params, values)
    
    if insertion['msg'] != "success":
        response = {
            "msg": "Error creating new user"
        }, 400
    else:
        response = {
            "msg": "User successfully created"
        }, 200
    
    return response

@app.route("/token", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    
    table = "users"
    columns = ["email_address","password"]
    condition_column = "email_address"
    select_condition = f"\"{email}\""
    selection = database.perform_select(table, columns, condition_column, select_condition)
    if selection == []:
        return {
            "msg": "No account is tied to that email address on this machine"
        }, 401
    if len(selection) > 1:
        return{
            "msg": "Invalid username or password."
        }, 401
    if email != selection[0][0] or password != selection[0][1]:
        return {
            "msg": "Wrong email or password."
        }, 401

    global user_email
    user_email = email
    access_token = create_access_token(identity=email)
    response = jsonify({
        "access_token": access_token
    }), 200
    return response

@app.route("/logout", methods=["POST"])
def logout():
    response = jsonify({
        "msg": "logout successful"
    })
    unset_jwt_cookies(response)
    return response

@app.route("/profile")
@jwt_required()
def my_profile():
    table = "users"
    columns = ["user_id","email_address","first_name", "last_name"]
    condition_column = "email_address"
    select_condition = f"\"{user_email}\""
    selection = database.perform_select(table, columns, condition_column, select_condition)
    print(user_email)
    print(selection)
    response_body = jsonify({
        "id": selection[0][0],
        "email": selection[0][1],
        "first": selection[0][2],
        "last": selection[0][3]
    }), 200
    return response_body

#pass JSON object in same format as method for create_initial_pdf in PDF/pdf_interaction.py
@app.route("/submit_initial", methods=['POST'])
@jwt_required()
def submit_init_eval():
    data = request.json

    try:
        #make method call to insert into database here
        
        
        pdf_creator.create_initial_pdf(data)

        #make method call to save json data as an object

        response_body = jsonify({
            "msg": "Successfully saved the Initial Evaluation Form"
        }), 200
    except:
        response_body = jsonify({
            "msg": "Errors while saving the Initial Evaluation Form"
        }), 401
    return response_body

#pass JSON object in same format as method for create_discharge_pdf in PDF/pdf_interaction.py
@app.route("/submit_discharge", methods=['POST'])
@jwt_required()
def submit_disc_eval():
    data = request.json
    try:
        #make method call to insert into database here
        
        
        pdf_creator.create_discharge_pdf(data)

        #make method call to save json data as an object

        response_body = jsonify({
            "msg": "Successfully saved the Discharge Evaluation Form"
        }), 200
    except:
        response_body = jsonify({
            "msg": "Errors while saving the Discharge Evaluation Form"
        }), 401
    return response_body

#pass JSON object in same format as method for create_initial_pdf in PDF/pdf_interaction.py
@app.route("/submit_progress", methods=['POST'])
#@jwt_required()
def submit_progress_eval():
    data = request.json
    #data['record_number'] = "5"

    json_conversion = True
    sql_conversion = True
    pdf_conversion = True

    try: 
        table = "clients"
        params = [
            "first_name",
            "last_name",
            "date_of_birth",
            "sex"
        ]
        values = [
            data['name'].split()[0],
            ' '.join(data['name'].split()[1:]),
            data['DOB'],
            data['sex']
        ]
        client_id = database.perform_insert(table, params, values)
        
        table = "users"
        columns = ["user_id","email_address","first_name", "last_name"]
        condition_column = "email_address"
        #select_condition = f"\"{user_email}\""
        select_condition = f"\"{data['email']}\""
        selection = database.perform_select(table, columns, condition_column, select_condition)
        print(user_email)
        print(selection)
        user_id = selection[0][0]
        

        table = "progress_note"
        params = [
            "client_id",
            "user_id",
            "billing_code_id",
            "diagnosis",
            "precautions",
            "contraindications",
            "summary_of_service",
            "current_client_performance",
            "plan_recommnedations",
            "billable_time"
        ]
        values = [
            client_id['last_id'],
            user_id,
            data['billingCodes'],
            data['diagnosis'],
            data["precautions"],
            data["contraindications"],
            data["summaryOfServices"],
            data["clientPerformance"],
            data["planOrReccomendations"],
            data['units']
        ]
        progress_id = database.perform_insert(table, params, values)
        


    except:
        sql_conversion = False
    
    try:
        json_creator.create_progress_json(data)
    except:
        json_conversion = False
    try:
        pdf_message = pdf_creator.create_progress_pdf(data)
    except:
        pdf_conversion = False

    return jsonify({
        "json_conversion": data['diagnosis'],
        "pdf_conversion": data["precautions"],
        "sql_conversion": data["contraindications"]
    }),200


@app.route('/testGET', methods=['GET'])
def testGet():
    return {
        "message": "Hello World"
        }

@app.route('/testPOST', methods = ['POST'])
def testPost():
    data = request.json
    print(data)
    return(data)

if __name__ == '__main__':
    if(os.path.exists("./backend/SQL/emr_database.db")):
        database = SQL_Interaction("./backend/SQL/emr_database.db")
        database.create_connection()
        print("Connecting to an existing database..")

    else:
        database = SQL_Interaction("./backend/SQL/emr_database.db")
        database.create_connection()
        database.create_tables()
        print("Database had to be created..")
    pdf_creator = PDF_Interaction()
    json_creator = JSON_Interaction()
    app.run()