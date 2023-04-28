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

    #response = database.perform_insert("clients",['first_name','last_name','date_of_birth','sex'],['John','Smith', '2022-12-24', 'Male'])
    #print(f"Response: {response['last_id']}")
    """ response = database.perform_select("users",["user_id"])
    key_value = (3,)
    if key_value in response:
        print("It is in there")
    else:
        print("It is not") """

    table = "users"
    columns = ["user_id"]
    condition_column = "email_address"
    select_condition = "ewilliams2@"
    selection = database.perform_select(table, columns, condition_column)
    
    print(f"Result: {selection[0][0]}")