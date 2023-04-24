import os

from sql_interaction import SQL_Interaction

if __name__ == "__main__":
    if(os.path.exists("./backend/SQL/emr_database.db")):
        database = SQL_Interaction("./backend/SQL/emr_database.db")
        database.create_connection()
        print("Connecting to an existing database..")
    else:
        database = SQL_Interaction("./backend/SQL/emr_database.db")
        database.create_connection()
        database.create_tables()
        print("Database had to be created..")

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
            #client_id['last_id'],
            #user_id,
            #data['billingCodes'],
            5,
            5,
            5,
            "jail",
            "jail",
            "jail",
            "jail",
            "jail",
            "jail",
            "jail"
          
          
        ]
    progress_id = database.perform_insert(table, params, values)
