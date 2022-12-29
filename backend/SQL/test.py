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

    #database.perform_insert("clients",['first_name','last_name','date_of_birth','sex'],['John','Smith', '2022-12-24', 'Male'])
    database.perform_select("clients",["*"])