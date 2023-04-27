import os
from JSON.json_interaction import JSON_Interaction
from SQL.sql_interaction import SQL_Interaction
from PDF.pdf_interaction import PDF_Interaction
from flask import Flask, request, jsonify
from datetime import datetime, timedelta, timezone
from flask_jwt_extended import create_access_token, set_access_cookies, get_jwt, get_jwt_identity, unset_jwt_cookies, jwt_required, JWTManager
from flask_cors import CORS
import json

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
    data = request.json
    #print(data)
    insert_message = True
    
    try: 

        pdf_creator = PDF_Interaction()
        result = pdf_creator.create_initial_pdf(data)
        if not result["success"]:
           return jsonify({"error": "PDF creation unsuccessful"}), 400

        insert_message = insert_initial(data)
        if insert_message != True:
            return jsonify({"error": "Database insertion was not successful"}), 400
        
        
        json_creator = JSON_Interaction()
        result = json_creator.create_initial_json(data)
        if result[1] == 200:
            return jsonify({"message": "Initial Evaluation was processed successfully!"}), 200
        else:
            return jsonify({"error": "JSON creation unsuccessful"}), 400

    except Exception as e:
        return jsonify({"error": str(e)}), 500



   


    
    
    


    """


    response_body = jsonify({
        "msg:" "Initial Evaluation Form saved successfully!"
    }), 200

    except:
    response_body = jsonify({
        "msg": "Errors while saving the Initial Evaluation Form"
    }), 401

    return response_body

   
"""




    
    

    
    
    
    
    
def insert_initial(data):

    insertion = True

    try: 
        
        table = "clients"
        params = [
            "first_name",
            "last_name",
            "date_of_birth",
            "sex"
        ]

        values = [
            data['allValues']['name'].split()[0],
            ' '.join(data['allValues']['name'].split()[1:]),
            data['allValues']['dob'],
            data['allValues']['sex']
        ]
        
        client_id = database.perform_insert(table,params,values)
        
        
        
        table = "vitals"
        params = [
                "blood_pressure",
                "heart_rate",
                "oxygen",
                "respiratory_rate",
                "pain_assessment"
            ]
        values = [
            data['allValues']['blood_pressure'],
            data['allValues']['heart_rate'],
            data['allValues']['oxygen'],
            data['allValues']['respiratory_rate'],
            data['allValues']['pain_assessment']
        ]

        vitals = database.perform_insert(table,params,values)

        
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
            data['allValues']['eat_init'],
            data['allValues']['groom_init'],
            data['allValues']['bath_init'],
            data['allValues']['upper_init'],
            data['allValues']['lower_init'],
            data['allValues']['toilet_init'],
            data['allValues']['toilet_transfer_init'],
            data['allValues']['shower_transfer_init'],
            data['allValues']['tub_transfer_init']

        ]
        init_fim = database.perform_insert(table, params, values)

        table = 'goal_fim_scores'
        values = [
            data['allValues']['eat_goal'],
            data['allValues']['groom_goal'],
            data['allValues']['bath_goal'],
            data['allValues']['upper_goal'],
            data['allValues']['lower_goal'],
            data['allValues']['toilet_goal'],
            data['allValues']['toilet_transfer_goal'],
            data['allValues']['shower_transfer_goal'],
            data['allValues']['tub_transfer_goal']
        ]
        
        goal_fim= database.perform_insert(table,params, values)

        table = "fim_evaluation"
        params = [
            "initial_fim_id",
            "goal_fim_id"
        ]
        values = [
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
            data['allValues']['rue_shoulder_ev_rom'],
            data['allValues']['rue_shoulder_flex_rom'],
            data['allValues']['rue_shoulder_ext_rom'],
            data['allValues']['rue_shoulder_abd_rom'],
            data['allValues']['rue_hor_abd_rom'],
            data['allValues']['rue_hor_add_rom'],
            data['allValues']['rue_intern_rot_rom'],
            data['allValues']['rue_extern_rot_rom'],
            data['allValues']['rue_elbow_flex_rom'],
            data['allValues']['rue_elbow_ext_rom'],
            data['allValues']['rue_fore_pro_rom'],
            data['allValues']['rue_fore_sup_rom'],
            data['allValues']['rue_wrist_flex_rom'],
            data['allValues']['rue_wrist_ext_rom']
        ]

        right_rom = database.perform_insert(table,params,values)

        table = "right_mmt"
        
        values = [

            data['allValues']['rue_shoulder_ev_mmt'],
            data['allValues']['rue_shoulder_flex_mmt'],
            data['allValues']['rue_shoulder_ext_mmt'],
            data['allValues']['rue_shoulder_abd_mmt'],
            data['allValues']['rue_hor_abd_mmt'],
            data['allValues']['rue_hor_add_mmt'],
            data['allValues']['rue_intern_rot_mmt'],
            data['allValues']['rue_extern_rot_mmt'],
            data['allValues']['rue_elbow_flex_mmt'],
            data['allValues']['rue_elbow_ext_mmt'],
            data['allValues']['rue_fore_pro_mmt'],
            data['allValues']['rue_fore_sup_mmt'],
            data['allValues']['rue_wrist_flex_mmt'],
            data['allValues']['rue_wrist_ext_mmt']
        ]
            
        right_mmt = database.perform_insert(table, params,values)

        table = "left_rom"

        values = [
            data['allValues']['lue_shoulder_ev_rom'],
            data['allValues']['lue_shoulder_flex_rom'],
            data['allValues']['lue_shoulder_ext_rom'],
            data['allValues']['lue_shoulder_abd_rom'],
            data['allValues']['lue_hor_abd_rom'],
            data['allValues']['lue_hor_add_rom'],
            data['allValues']['lue_intern_rot_rom'],
            data['allValues']['lue_extern_rot_rom'],
            data['allValues']['lue_elbow_flex_rom'],
            data['allValues']['lue_elbow_ext_rom'],
            data['allValues']['lue_fore_pro_rom'],
            data['allValues']['lue_fore_sup_rom'],
            data['allValues']['lue_wrist_flex_rom'],
            data['allValues']['lue_wrist_ext_rom']
        ]

        left_rom = database.perform_insert(table, params, values)

        table = "left_mmt"

        values = [
            data['allValues']['lue_shoulder_ev_mmt'],
            data['allValues']['lue_shoulder_flex_mmt'],
            data['allValues']['lue_shoulder_ext_mmt'],
            data['allValues']['lue_shoulder_abd_mmt'],
            data['allValues']['lue_hor_abd_mmt'],
            data['allValues']['lue_hor_add_mmt'],
            data['allValues']['lue_intern_rot_mmt'],
            data['allValues']['lue_extern_rot_mmt'],
            data['allValues']['lue_elbow_flex_mmt'],
            data['allValues']['lue_elbow_ext_mmt'],
            data['allValues']['lue_fore_pro_mmt'],
            data['allValues']['lue_fore_sup_mmt'],
            data['allValues']['lue_wrist_flex_mmt'],
            data['allValues']['lue_wrist_ext_mmt']
        ]

        left_mmt = database.perform_insert(table,params,values)

        table = 'right_upper_extremities'
        params = [
            "right_rom_id",
            "right_mmt_id",
            "grip_strength",
            "lateral_pinch",
            "tripod_pinch",
            "tip_pinch",
            "light_touch",
            "sharp_dull",
            "temperature",
            "proprioception",
            "stereognosis",
            "nine_hole_peg_test",
            "edema",
            "pain"
        ]

        values= [
            right_rom['last_id'],
            right_mmt['last_id'],
            data['allValues']['rue_grip_str'],
            data['allValues']['rue_lat_pinch'],
            data['allValues']['rue_tri_pinch'],
            data['allValues']['rue_tip_pinch'],
            data['allValues']['rue_light_touch'],
            data['allValues']['rue_sh_du'],
            data['allValues']['rue_temp'],
            data['allValues']['rue_prop'],
            data['allValues']['rue_ster'],
            data['allValues']['rue_peg'],
            data['allValues']['rue_edema'],
            data['allValues']['rue_pain']
        ]

        right_UE = database.perform_insert(table,params,values)

        table = "left_upper_extremities"
        params = [
            "left_rom_id",
            "left_mmt_id",
            "grip_strength",
            "lateral_pinch",
            "tripod_pinch",
            "tip_pinch",
            "light_touch",
            "sharp_dull",
            "temperature",
            "proprioception",
            "stereognosis",
            "nine_hole_peg_test",
            "edema",
            "pain"

        ]
        
        values = [
            left_rom['last_id'],
            left_mmt['last_id'],
            data['allValues']['lue_grip_str'],
            data['allValues']['lue_lat_pinch'],
            data['allValues']['lue_tri_pinch'],
            data['allValues']['lue_tip_pinch'],
            data['allValues']['lue_light_touch'],
            data['allValues']['lue_sh_du'],
            data['allValues']['lue_temp'],
            data['allValues']['lue_prop'],
            data['allValues']['lue_ster'],
            data['allValues']['lue_peg'],
            data['allValues']['lue_edema'],
            data['allValues']['lue_pain']
        ]

        left_UE = database.perform_insert(table,params,values)

        table = 'upper_extremities'
        params = [
                "right_ue_id",
                "left_ue_id",
                "hand_dominance"
        ]

        values = [
            right_UE['last_id'],
            left_UE['last_id'],
            data['allValues']['hand_dom']
        ]

        ue = database.perform_insert(table,params,values)
        
        table1 = "users"
        col = ["user_id","email_address","first_name","last_name"]
        cond_col = "email_address"
        select_cond = f"\"{user_email}\""
        select = database.perform_select(table1,col,cond_col,select_cond)
        user_id = select[0][0]
        
             
        
        
        
        print("No issues w userid")
        
        
        
        table = "initial_evaluation"

        params = [
        
            
            "medical_record_id",
            "user_id",
            "client_id",
            "fim_id",
            "ue_id",
            "vital_id",
            "billing_code_id",
            "date_of_evaluation",
            "diagnosis",
            "medical_history",
            "prior_function",
            "prior_situation",
            "hearing",
            "vision",
            "a_o",
            "memory_cognition",
            "mmse_score",
            "current_transfer",
            "adl",
            "other_observations",
            "assessment",
            "discharge_recommendation",
            "equipment_needs",
            "justification_of_services",
            "patient_goals",
            "length_of_stay",
            "long_term_goal",
            "short_term_goal",
            "therapist_signature",
            "date_of_signature",
            "billable_time"
            


        ]

        
        values = [
           
            data['allValues']['med_num'],
            user_id,
            client_id['last_id'],
            fim_eval['last_id'],
            ue['last_id'],
            vitals['last_id'],
            data['allValues']['billing'],
            data['allValues']['date'],
            data['allValues']['diagnosis'],
            data['allValues']['med_hx'],
            data['allValues']['prior_lev'],
            data['allValues']['prior_liv'],
            data['allValues']['hearing'],
            data['allValues']['visual_perception'],
            data['allValues']['AO'],
            data['allValues']['memory'],
            data['allValues']['mmse'],
            data['allValues']['current_transfer'],
            data['allValues']['ADL'],
            data['allValues']['observations'],
            data['allValues']['init_assess'],
            data['allValues']['dis_rec'],
            data['allValues']['equip_needs'],
            data['allValues']['justification'],
            data['allValues']['patient_goals'],
            data['allValues']['est_len'],
            data['allValues']['overall_goals'],
            data['allValues']['short_term_goals'],
            data['allValues']['signature'],
            data['allValues']['date_of_sig'],
            data['allValues']['units']




        ]

        

        print("bout to insert")
        
        init_eval = database.perform_insert(table,params,values)
        
        
        
        return insertion
    except:
        insertion = False
        print("insertion not okay")
        return insertion




@app.route("/check_valid_medical_number", methods=['POST'])
def check_num():
    data = request.json
    try:
        response = database.perform_select("initial_evaluation",["medical_record_id"])
        key_value = (data['med_num']),
        if key_value in response:
            message = {
                "msg": "Not Valid"
            },200
        else:
            message = {
                "msg": "Valid"
            },200
        return message
    except:
        return {
            "msg": "Error"
        }, 400


#pass JSON object in same format as method for create_initial_pdf in PDF/pdf_interaction.py
@app.route("/submit_progress", methods=['POST'])
#@jwt_required()
def submit_progress_eval():
    data = request.json

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
        select_condition = f"\"{user_email}\""
        #select_condition = f"\"{data['email']}\""
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
            "therapist_signature",
            "date_of_signature",
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
            data['therapistSignature'],
            data['date'],
            data['units']
        ]
        progress_id = database.perform_insert(table, params, values)
        data['record_number'] = progress_id['last_id']
        

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
        "json_conversion": json_conversion,
        "pdf_conversion": pdf_conversion,
        "sql_conversion": sql_conversion
    }),200

#maybe try to protect this endpoint?
@app.route("/sign_up", methods=["POST"])
def create_account():
    first = request.json.get("first_name", None)
    last = request.json.get("last_name", None)
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    contraindications = request.json.get("contraindications", None)


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
