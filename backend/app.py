import os

from JSON.json_interaction import JSON_Interaction


from SQL.sql_interaction import SQL_Interaction
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
@jwt_required
def submit_initial():
    #replace pass with the code you would like to use
    data = request.json
    
        

    

    table = "Clients"
    params = [
        "first_name",
        "last_name",
        "date_of_birth",
        "sex"
        
    
    ]

    values = [
        data['name'].split()[0], ' '.join(data['name'].split()[1:]),
        data['dob'],
        data['sex']
    ]
    client_id = database.perform_insert(table, params, values)


    
    table = "initial_fim_scores"
    params = [
        "eating",
        "grooming",
        "bathing",
        "upper_body_dressing",
        "lower_body_dressing",
        "toileting",
        "toilet_transfer",
        "shower_transfer",
        "tub_transfer"
    ]
    values = [
        data['eat_init'],
        data['groom_init'],
        data['bath_init'],
        data['upper_init'],
        data['lower_init'],
        data['toilet_init'],
        data['toilet_transfer_init'],
        data['shower_transfer_init'],
        data['tub_transfer_init']

    ]
    init_fim = database.perform_insert(table, params, values)

    table = 'goal_fim_scores'
    values = [
        data['eat_goal'],
        data['groom_goal'],
        data['bath_goal'],
        data['upper_goal'],
        data['lower_goal'],
        data['toilet_goal'],
        data['toilet_transfer_goal'],
        data['shower_transfer_goal'],
        data['tub_transfer_goal']
    ]
    
    goal_fim= database.perform_insert(table,params, values)

    table = "fim_evaluation"
    params [
        init_fim['last_id'],
        goal_fim['last_id']

    ]
    fim_eval = database.perform_insert(table, params, values)
    

    table = 'right_rom'
    params = [
        "shoulder_elevation",
        "shoulder_flexion",
        "shoulder_extension",
        "shoulder_abduction",
        "horizontal_abduction",
        "horizontal_adduction",
        "internal_rotation",
        "external_rotation",
        "elbow_flexion",
        "elbow_extension",
        "forearm_pronation",
        "forearm_supination",
        "wrist_flexion",
        "wrist_extension"
    ]

    values = [
        data['rue_shoulder_ev_rom'],
        data['rue_shoulder_flex_rom'],
        data['rue_shoulder_ext_rom'],
        data['rue_shoulder_abd_rom'],
        data['rue_hor_abd_rom'],
        data['rue_hor_add_rom'],
        data['rue_intern_rot_rom'],
        data['rue_extern_rot_rom'],
        data['rue_elbow_flex_rom'],
        data['rue_elbow_ext_rom'],
        data['rue_fore_pro_rom'],
        data['rue_fore_sup_rom'],
        data['rue_wrist_flex_rom'],
        data['rue_wrist_ext_rom']
    ]

    right_rom = database.perform_insert(table,params,values)

    table = "right_mmt"
    
    values = [

        data['rue_shoulder_ev_mmt'],
        data['rue_shoulder_flex_mmt'],
        data['rue_shoulder_ext_mmt'],
        data['rue_shoulder_abd_mmt'],
        data['rue_hor_abd_mmt'],
        data['rue_hor_add_mmt'],
        data['rue_intern_rot_mmt'],
        data['rue_extern_rot_mmt'],
        data['rue_elbow_flex_mmt'],
        data['rue_elbow_ext_mmt'],
        data['rue_fore_pro_mmt'],
        data['rue_fore_sup_mmt'],
        data['rue_wrist_flex_mmt'],
        data['rue_wrist_ext_mmt']
    ]
        
    right_mmt = database.perform_insert(table, params,values)

    table = "left_rom"

    values = [
        data['lue_shoulder_ev_rom'],
        data['lue_shoulder_flex_rom'],
        data['lue_shoulder_ext_rom'],
        data['lue_shoulder_abd_rom'],
        data['lue_hor_abd_rom'],
        data['lue_hor_add_rom'],
        data['lue_intern_rot_rom'],
        data['lue_extern_rot_rom'],
        data['lue_elbow_flex_rom'],
        data['lue_elbow_ext_rom'],
        data['lue_fore_pro_rom'],
        data['lue_fore_sup_rom'],
        data['lue_wrist_flex_rom'],
        data['lue_wrist_ext_rom']
    ]

    left_rom = database.perform_insert(table, params, values)

    table = "left_mmt"

    values = [
        data['lue_shoulder_ev_mmt'],
        data['lue_shoulder_flex_mmt'],
        data['lue_shoulder_ext_mmt'],
        data['lue_shoulder_abd_mmt'],
        data['lue_hor_abd_mmt'],
        data['lue_hor_add_mmt'],
        data['lue_intern_rot_mmt'],
        data['lue_extern_rot_mmt'],
        data['lue_elbow_flex_mmt'],
        data['lue_elbow_ext_mmt'],
        data['lue_fore_pro_mmt'],
        data['lue_fore_sup_mmt'],
        data['lue_wrist_flex_mmt'],
        data['lue_wrist_ext_mmt']
    ]

    left_mmt = database.perform_insert(table,params,values)

    table = ''



    
    

    
    
    
    
    
  
    





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
    app.run()