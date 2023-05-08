import sqlite3
from sqlite3 import Error

class SQL_Interaction:
    
    def __init__(self, db_file):
        self.db_file = db_file
        self.conn = None

    def create_connection(self):
        #Create a database connection to a SQLite database
        
        try:
            self.conn = sqlite3.connect(self.db_file, check_same_thread=False)
            print(sqlite3.version)
        except Error as e:
            print(e)

    def close_connection(self):
        try:
            self.conn.close()
            print("Connection has been closed")
        except Error as e:
            print(e)

    def create_tables(self):
        try:
            cursor = self.conn.cursor()

            #Vitals Table
            cursor.execute('''
            CREATE TABLE vitals(
                vital_id INTEGER PRIMARY KEY,
                blood_pressure TEXT,
                heart_rate INTEGER,
                oxygen INTEGER,
                respiratory_rate INTEGER,
                pain_assessment TEXT
            )''')

            #Billing Codes Table
            cursor.execute('''
            CREATE TABLE billing_codes(
                billing_code_id INTEGER PRIMARY KEY,
                description_of_service TEXT
            )''')


            #Users Table
            cursor.execute('''
            CREATE TABLE users(
                user_id INTEGER PRIMARY KEY AUTOINCREMENT,
                first_name TEXT NOT NULL,
                last_name TEXT NOT NULL,
                email_address TEXT NOT NULL UNIQUE,
                password TEXT NOT NULL
            )''')

            #Clients Table
            cursor.execute('''
            CREATE TABLE clients(
                client_id INTEGER PRIMARY KEY AUTOINCREMENT,
                first_name TEXT,
                last_name TEXT,
                date_of_birth TEXT,
                sex TEXT 
            )''')

            #Initial FIM Scores Table
            cursor.execute('''
            CREATE TABLE initial_fim_scores(
                initial_fim_id INTEGER PRIMARY KEY AUTOINCREMENT,
                eating INTEGER,
                grooming INTEGER,
                bathing INTEGER,
                upper_body_dressing INTEGER,
                lower_body_dressing INTEGER,
                toileting INTEGER,
                toilet_transfer INTEGER,
                shower_transfer INTEGER,
                tub_transfer INTEGER
            )''')

            #Goal FIM Scores Table
            cursor.execute('''
            CREATE TABLE goal_fim_scores(
                goal_fim_id INTEGER PRIMARY KEY AUTOINCREMENT,
                eating INTEGER,
                grooming INTEGER,
                bathing INTEGER,
                upper_body_dressing INTEGER,
                lower_body_dressing INTEGER,
                toileting INTEGER,
                toilet_transfer INTEGER,
                shower_transfer INTEGER,
                tub_transfer INTEGER
            )''')

            #FIM Evaluation Table
            cursor.execute('''
            CREATE TABLE fim_evaluation(
                fim_evaluation_id INTEGER PRIMARY KEY AUTOINCREMENT,
                initial_fim_id INTEGER,
                goal_fim_id INTEGER,
                FOREIGN KEY (initial_fim_id) REFERENCES initial_fim_scores (initial_fim_id),
                FOREIGN KEY (goal_fim_id) REFERENCES goal_fim_scores (goal_fim_id)
            )''')


            #Discharge FIM Scores
            cursor.execute('''
            CREATE TABLE discharge_fim_scores(
                discharge_fim_id INTEGER PRIMARY KEY AUTOINCREMENT,
                fim_evaluation_id INTEGER,
                eating INTEGER,
                grooming INTEGER,
                bathing INTEGER,
                upper_body_dressing INTEGER,
                lower_body_dressing INTEGER,
                toileting INTEGER,
                toilet_transfer INTEGER,
                shower_transfer INTEGER,
                tub_transfer INTEGER,
                FOREIGN KEY (fim_evaluation_id) REFERENCES fim_evaluation (fim_evaluation_id)
            )''')
            #Right ROM Table
            cursor.execute('''
            CREATE TABLE right_rom(
                right_rom_id INTEGER PRIMARY KEY AUTOINCREMENT,
                shoulder_elevation INTEGER,
                shoulder_flexion INTEGER,
                shoulder_extension INTEGER,
                shoulder_abduction INTEGER,
                horizontal_abduction INTEGER,
                horizontal_adduction INTEGER,
                internal_rotation INTEGER,
                external_rotation INTEGER,
                elbow_flexion INTEGER,
                elbow_extension INTEGER,
                forearm_pronation INTEGER,
                forearm_supination INTEGER,
                wrist_flexion INTEGER,
                wrist_extension INTEGER
            )''')

            #Right MMT Table
            cursor.execute('''
            CREATE TABLE right_mmt(
                right_mmt_id INTEGER PRIMARY KEY AUTOINCREMENT,
                shoulder_elevation INTEGER,
                shoulder_flexion INTEGER,
                shoulder_extension INTEGER,
                shoulder_abduction INTEGER,
                horizontal_abduction INTEGER,
                horizontal_adduction INTEGER,
                internal_rotation INTEGER,
                external_rotation INTEGER,
                elbow_flexion INTEGER,
                elbow_extension INTEGER,
                forearm_pronation INTEGER,
                forearm_supination INTEGER,
                wrist_flexion INTEGER,
                wrist_extension INTEGER
            )''')

            #Right Upper Extremities Table
            cursor.execute('''
            CREATE TABLE right_upper_extremities(
                right_ue_id INTEGER PRIMARY KEY AUTOINCREMENT,
                right_rom_id INTEGER,
                right_mmt_id INTEGER,
                grip_strength INTEGER,
                lateral_pinch INTEGER,
                tripod_pinch INTEGER,
                tip_pinch INTEGER,
                light_touch INTEGER,
                sharp_dull INTEGER,
                temperature INTEGER,
                proprioception INTEGER,
                stereognosis INTEGER,
                nine_hole_peg_test INTEGER,
                edema INTEGER,
                pain INTEGER,
                FOREIGN KEY (right_rom_id) REFERENCES right_rom (right_rom_id),
                FOREIGN KEY (right_mmt_id) REFERENCES right_mmt (right_mmt_id)
            )''')

            #Left ROM Table
            cursor.execute('''
            CREATE TABLE left_rom(
                left_rom_id INTEGER PRIMARY KEY AUTOINCREMENT,
                shoulder_elevation INTEGER,
                shoulder_flexion INTEGER,
                shoulder_extension INTEGER,
                shoulder_abduction INTEGER,
                horizontal_abduction INTEGER,
                horizontal_adduction INTEGER,
                internal_rotation INTEGER,
                external_rotation INTEGER,
                elbow_flexion INTEGER,
                elbow_extension INTEGER,
                forearm_pronation INTEGER,
                forearm_supination INTEGER,
                wrist_flexion INTEGER,
                wrist_extension INTEGER
            )''')

            #Left MMT Table
            cursor.execute('''
            CREATE TABLE left_mmt(
                left_mmt_id INTEGER PRIMARY KEY AUTOINCREMENT,
                shoulder_elevation INTEGER,
                shoulder_flexion INTEGER,
                shoulder_extension INTEGER,
                shoulder_abduction INTEGER,
                horizontal_abduction INTEGER,
                horizontal_adduction INTEGER,
                internal_rotation INTEGER,
                external_rotation INTEGER,
                elbow_flexion INTEGER,
                elbow_extension INTEGER,
                forearm_pronation INTEGER,
                forearm_supination INTEGER,
                wrist_flexion INTEGER,
                wrist_extension INTEGER
            )''')

            #Left Upper Extremities Table
            cursor.execute('''
            CREATE TABLE left_upper_extremities(
                left_ue_id INTEGER PRIMARY KEY AUTOINCREMENT,
                left_rom_id INTEGER,
                left_mmt_id INTEGER,
                grip_strength INTEGER,
                lateral_pinch INTEGER,
                tripod_pinch INTEGER,
                tip_pinch INTEGER,
                light_touch INTEGER,
                sharp_dull INTEGER,
                temperature INTEGER,
                proprioception INTEGER,
                stereognosis INTEGER,
                nine_hole_peg_test INTEGER,
                edema INTEGER,
                pain INTEGER,
                FOREIGN KEY (left_rom_id) REFERENCES left_rom (left_rom_id),
                FOREIGN KEY (left_mmt_id) REFERENCES left_mmt (left_mmt_id)
            )''')

            #Upper Extremities Table
            cursor.execute('''
            CREATE TABLE upper_extremities(
                ue_id INTEGER PRIMARY KEY AUTOINCREMENT,
                right_ue_id INTEGER,
                left_ue_id INTEGER,
                hand_dominance TEXT,
                FOREIGN KEY (right_ue_id) REFERENCES right_upper_extremities (right_ue_id),
                FOREIGN KEY (left_ue_id) REFERENCES left_upper_extremities (left_ue_id)
            )''')

            #Initial Evaluation Table
            cursor.execute('''
            CREATE TABLE initial_evaluation(
                medical_record_id TEXT PRIMARY KEY,
                user_id INTEGER,
                client_id INTEGER,
                fim_id INTEGER,
                ue_id INTEGER,
                vital_id INTEGER,
                billing_code_id INTEGER,
                date_of_evaluation TEXT,
                diagnosis TEXT,
                medical_history TEXT,
                prior_function TEXT,
                prior_situation TEXT,
                hearing TEXT, 
                vision TEXT,
                a_o TEXT,
                memory_cognition TEXT,
                mmse_score TEXT,
                current_transfer TEXT,
                adl TEXT,
                other_observations TEXT,
                assessment TEXT,
                discharge_recommendation TEXT,
                equipment_needs TEXT,
                justification_of_services TEXT,
                patient_goals TEXT,
                length_of_stay TEXT,
                long_term_goal TEXT,
                short_term_goal TEXT,
                therapist_signature TEXT,
                date_of_signature TEXT,
                billable_time INTEGER, 
                FOREIGN KEY (user_id) REFERENCES users (user_id),
                FOREIGN KEY (client_id) REFERENCES clients (client_id),
                FOREIGN KEY (fim_id) REFERENCES fim_evaluation (fim_evaluation_id),
                FOREIGN KEY (ue_id) REFERENCES upper_extremities (ue_id),
                FOREIGN KEY (vital_id) REFERENCES vitals (vital_id),
                FOREIGN KEY (billing_code_id) REFERENCES billing_codes (billing_code_id)
            )''')

            #Discharge Evaluation Table
            cursor.execute('''
            CREATE TABLE discharge_evaluation(
                medical_record_id TEXT PRIMARY KEY,
                user_id INTEGER,
                initial_medical_record_id INTEGER,
                discharge_fim_id INTEGER,
                vital_id INTEGER,
                billing_code_id INTEGER,
                date_of_evaluation TEXT,
                diagnosis TEXT,
                medical_history TEXT,
                prior_function TEXT,
                prior_situation TEXT,
                hearing TEXT, 
                vision TEXT,
                a_o TEXT,
                memory_cognition TEXT,
                mmse_score TEXT,
                discharge_transfer TEXT,
                other_observations TEXT,
                discharge_assessment TEXT,
                discharge_recommendation TEXT,
                equipment_needs TEXT,
                patient_goals TEXT,
                course_of_rehab TEXT,
                client_education TEXT,
                discharge_referrals TEXT,
                therapist_signature TEXT,
                date_of_signature TEXT,
                billable_time INTEGER,
                FOREIGN KEY (user_id) REFERENCES users (user_id),
                FOREIGN KEY (initial_medical_record_id) REFERENCES initial_evaluation (medical_record_id),
                FOREIGN KEY (discharge_fim_id) REFERENCES discharge_fim_scores (discharge_fim_id),
                FOREIGN KEY (vital_id) REFERENCES vitals (vital_id),
                FOREIGN KEY (billing_code_id) REFERENCES billing_codes (billing_code_id)
            )''')

            cursor.execute('''
            CREATE TABLE progress_note(
                progress_id TEXT PRIMARY KEY,
                client_id INTEGER,
                user_id INTEGER,
                billing_code_id INTEGER,
                diagnosis TEXT,
                precautions TEXT,
                contraindications TEXT,
                summary_of_service TEXT,
                current_client_performance TEXT,
                plan_recommnedations TEXT,
                therapist_signature TEXT,
                date_of_signature TEXT,
                billable_time INTEGER,
                FOREIGN KEY (client_id) REFERENCES clients (client_id),
                FOREIGN KEY (user_id) REFERENCES users (user_id),
                FOREIGN KEY (billing_code_id) REFERENCES billing_codes (billing_code_id)
            )''')

            #Insert the billing codes into the table
            self.perform_insert("billing_codes", ["billing_code_id"], [97165])
            self.perform_insert("billing_codes", ["billing_code_id"], [97166])
            self.perform_insert("billing_codes", ["billing_code_id"], [97167])
            self.perform_insert("billing_codes", ["billing_code_id"], [97168])
            self.perform_insert("billing_codes", ["billing_code_id"], [97110])
            self.perform_insert("billing_codes", ["billing_code_id"], [97112])
            self.perform_insert("billing_codes", ["billing_code_id"], [97129])
            self.perform_insert("billing_codes", ["billing_code_id"], [97150])
            self.perform_insert("billing_codes", ["billing_code_id"], [97530])
            self.perform_insert("billing_codes", ["billing_code_id"], [97533])
            self.perform_insert("billing_codes", ["billing_code_id"], [97535])
            self.perform_insert("billing_codes", ["billing_code_id"], [97537])
            self.perform_insert("billing_codes", ["billing_code_id"], [97542])


            print("Tables created successfully!")
            self.conn.commit()
        except Error as e:
            print(e)

    '''
    params:
        self: pass object itself
        table: string, 
        insert_parameters: list,
        insert_values: list
    '''
    def perform_insert(self, table, insert_parameters, insert_values):
        try:
            
          
            if(len(insert_parameters) != len(insert_values)):
                print(f"Parameters and Values do not equal!\nParameters: {len(insert_parameters)} Values: {len(insert_values)}")
            else:
                cursor = self.conn.cursor()
                amount = []
                for i in range(len(insert_parameters)):
                    amount.append('?')
                placeholder = ','.join(amount)
                params = ','.join(insert_parameters)

                values = tuple(insert_values)
                query = f"INSERT INTO {table} ({params}) VALUES ({placeholder})"
                print(f"Query: {query}")
                print(f"Values: {values}")
                cursor.execute(query,values)
                latest_insert = cursor.lastrowid
                self.conn.commit()

                response = {
                    "msg": "success",
                    "last_id": latest_insert
                }
                
                return response
        except Error as e:
            print(e)
            response = {
                "msg": e
            }
            return response

    def perform_select(self, table, select_columns, condition_column = None, select_conditions=None):
        try:
            cursor = self.conn.cursor()
            columns = ','.join(select_columns)
            if(select_conditions == None or condition_column == None):
                query = f"SELECT {columns} FROM {table}"
            else:
                query = f"SELECT {columns} FROM {table} WHERE {condition_column} = {select_conditions}"
            print(query)
            cursor.execute(query)
            rows = cursor.fetchall()

            for row in rows:
                print(row)

            return rows
        except Error as e:
            print(e)

    '''
    params:
        self -
        table -
        column_parameters: list of tuples
    '''
    def perform_update(self, table, columns, values, key_column, key_value):
        try:
            if(len(columns) != len(values)):
                print("Error. Unequal amount of columns and values")
                print(f"Columns: {columns} Length: {len(columns)}")
                print(f"Values: {values} Length: {len(values)}")
            else:
                cursor = self.conn.cursor()
                
                query = f"UPDATE {table} SET"
                for i in range(len(columns)):
                    if(i != len(columns) - 1):
                        query += f" {columns[i]} = ?,"
                    else:
                        query += f" {columns[i]} = ?"
                query += f" WHERE {key_column} = ?"
                #print(f"Query: {query}")
                values.append(key_value)
                values = tuple(values)
                print(f"Query: {query}")
                cursor.execute(query, values)
                print("successful query")
                self.conn.commit()
        except Error as e:
            print(e)