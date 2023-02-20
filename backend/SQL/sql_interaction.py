import sqlite3
from sqlite3 import Error

class SQL_Interaction:
    
    def __init__(self, db_file):
        self.db_file = db_file
        self.conn = None

    def create_connection(self):
        #Create a database connection to a SQLite database
        
        try:
            self.conn = sqlite3.connect(self.db_file)
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
  
            #Billing Codes Table    
            cursor.execute('''
            CREATE TABLE billing_codes(
                billing_code_id INTEGER PRIMARY KEY,
                description_of_service TEXT NOT NULL
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
                first_name TEXT NOT NULL,
                last_name TEXT NOT NULL,
                date_of_birth DATE NOT NULL,
                sex TEXT NOT NULL 
            )''')

            #Initial FIM Scores Table
            cursor.execute('''
            CREATE TABLE initial_fim_scores(
                initial_fim_id INTEGER PRIMARY KEY AUTOINCREMENT,
                eating INTEGER NOT NULL,
                grooming INTEGER NOT NULL,
                bathing INTEGER NOT NULL,
                upper_body_dressing INTEGER NOT NULL,
                lower_body_dressing INTEGER NOT NULL,
                toileting INTEGER NOT NULL,
                toilet_transfer INTEGER NOT NULL,
                shower_transfer INTEGER NOT NULL,
                tub_transfer INTEGER NOT NULL
            )''')

            #Goal FIM Scores Table
            cursor.execute('''
            CREATE TABLE goal_fim_scores(
                goal_fim_id INTEGER PRIMARY KEY AUTOINCREMENT,
                eating INTEGER NOT NULL,
                grooming INTEGER NOT NULL,
                bathing INTEGER NOT NULL,
                upper_body_dressing INTEGER NOT NULL,
                lower_body_dressing INTEGER NOT NULL,
                toileting INTEGER NOT NULL,
                toilet_transfer INTEGER NOT NULL,
                shower_transfer INTEGER NOT NULL,
                tub_transfer INTEGER NOT NULL
            )''')

            #FIM Evaluation Table
            cursor.execute('''
            CREATE TABLE fim_evaluation(
                fim_evaluation_id INTEGER PRIMARY KEY AUTOINCREMENT,
                initial_fim_id INTEGER NOT NULL,
                goal_fim_id INTEGER NOT NULL,
                FOREIGN KEY (initial_fim_id) REFERENCES initial_fim_scores (initial_fim_id),
                FOREIGN KEY (goal_fim_id) REFERENCES goal_fim_scores (goal_fim_id)
            )''')


            #Discharge FIM Scores
            cursor.execute('''
            CREATE TABLE discharge_fim_scores(
                discharge_fim_id INTEGER PRIMARY KEY AUTOINCREMENT,
                fim_evaluation_id INTEGER NOT NULL,
                eating INTEGER NOT NULL,
                grooming INTEGER NOT NULL,
                bathing INTEGER NOT NULL,
                upper_body_dressing INTEGER NOT NULL,
                lower_body_dressing INTEGER NOT NULL,
                toileting INTEGER NOT NULL,
                toilet_transfer INTEGER NOT NULL,
                shower_transfer INTEGER NOT NULL,
                tub_transfer INTEGER NOT NULL,
                FOREIGN KEY (fim_evaluation_id) REFERENCES fim_evaluation (fim_evaluation_id)
            )''')
            #Right ROM Table
            cursor.execute('''
            CREATE TABLE right_rom(
                right_rom_id INTEGER PRIMARY KEY AUTOINCREMENT,
                shoulder_elevation INTEGER NOT NULL,
                shoulder_flexion INTEGER NOT NULL,
                shoulder_extension INTEGER NOT NULL,
                shoulder_abduction INTEGER NOT NULL,
                horizontal_abduction INTEGER NOT NULL,
                horizontal_adduction INTEGER NOT NULL,
                internal_rotation INTEGER NOT NULL,
                external_rotation INTEGER NOT NULL,
                elbow_flexion INTEGER NOT NULL,
                elbow_extension INTEGER NOT NULL,
                forearm_pronation INTEGER NOT NULL,
                forearm_supination INTEGER NOT NULL,
                wrist_flexion INTEGER NOT NULL,
                wrist_extension INTEGER NOT NULL
            )''')

            #Right MMT Table
            cursor.execute('''
            CREATE TABLE right_mmt(
                right_mmt_id INTEGER PRIMARY KEY AUTOINCREMENT,
                shoulder_elevation INTEGER NOT NULL,
                shoulder_flexion INTEGER NOT NULL,
                shoulder_extension INTEGER NOT NULL,
                shoulder_abduction INTEGER NOT NULL,
                horizontal_abduction INTEGER NOT NULL,
                horizontal_adduction INTEGER NOT NULL,
                internal_rotation INTEGER NOT NULL,
                external_rotation INTEGER NOT NULL,
                elbow_flexion INTEGER NOT NULL,
                elbow_extension INTEGER NOT NULL,
                forearm_pronation INTEGER NOT NULL,
                forearm_supination INTEGER NOT NULL,
                wrist_flexion INTEGER NOT NULL,
                wrist_extension INTEGER NOT NULL
            )''')

            #Right Upper Extremities Table
            cursor.execute('''
            CREATE TABLE right_upper_extremities(
                right_ue_id INTEGER PRIMARY KEY AUTOINCREMENT,
                right_rom_id INTEGER NOT NULL,
                right_mmt_id INTEGER NOT NULL,
                grip_strength INTEGER NOT NULL,
                lateral_pinch INTEGER NOT NULL,
                tripod_pinch INTEGER NOT NULL,
                tip_pinch INTEGER NOT NULL,
                light_touch INTEGER NOT NULL,
                sharp_dull INTEGER NOT NULL,
                temperature INTEGER NOT NULL,
                proprioception INTEGER NOT NULL,
                stereognosis INTEGER NOT NULL,
                nine_hole_peg_test INTEGER NOT NULL,
                edema INTEGER NOT NULL,
                pain INTEGER NOT NULL,
                FOREIGN KEY (right_rom_id) REFERENCES right_rom (right_rom_id),
                FOREIGN KEY (right_mmt_id) REFERENCES right_mmt (right_mmt_id)
            )''')

            #Left ROM Table
            cursor.execute('''
            CREATE TABLE left_rom(
                left_rom_id INTEGER PRIMARY KEY AUTOINCREMENT,
                shoulder_elevation INTEGER NOT NULL,
                shoulder_flexion INTEGER NOT NULL,
                shoulder_extension INTEGER NOT NULL,
                shoulder_abduction INTEGER NOT NULL,
                horizontal_abduction INTEGER NOT NULL,
                horizontal_adduction INTEGER NOT NULL,
                internal_rotation INTEGER NOT NULL,
                external_rotation INTEGER NOT NULL,
                elbow_flexion INTEGER NOT NULL,
                elbow_extension INTEGER NOT NULL,
                forearm_pronation INTEGER NOT NULL,
                forearm_supination INTEGER NOT NULL,
                wrist_flexion INTEGER NOT NULL,
                wrist_extension INTEGER NOT NULL
            )''')

            #Left MMT Table
            cursor.execute('''
            CREATE TABLE left_mmt(
                left_mmt_id INTEGER PRIMARY KEY AUTOINCREMENT,
                shoulder_elevation INTEGER NOT NULL,
                shoulder_flexion INTEGER NOT NULL,
                shoulder_extension INTEGER NOT NULL,
                shoulder_abduction INTEGER NOT NULL,
                horizontal_abduction INTEGER NOT NULL,
                horizontal_adduction INTEGER NOT NULL,
                internal_rotation INTEGER NOT NULL,
                external_rotation INTEGER NOT NULL,
                elbow_flexion INTEGER NOT NULL,
                elbow_extension INTEGER NOT NULL,
                forearm_pronation INTEGER NOT NULL,
                forearm_supination INTEGER NOT NULL,
                wrist_flexion INTEGER NOT NULL,
                wrist_extension INTEGER NOT NULL
            )''')

            #Left Upper Extremities Table
            cursor.execute('''
            CREATE TABLE left_upper_extremities(
                left_ue_id INTEGER PRIMARY KEY AUTOINCREMENT,
                left_rom_id INTEGER NOT NULL,
                left_mmt_id INTEGER NOT NULL,
                grip_strength INTEGER NOT NULL,
                lateral_pinch INTEGER NOT NULL,
                tripod_pinch INTEGER NOT NULL,
                tip_pinch INTEGER NOT NULL,
                light_touch INTEGER NOT NULL,
                sharp_dull INTEGER NOT NULL,
                temperature INTEGER NOT NULL,
                proprioception INTEGER NOT NULL,
                stereognosis INTEGER NOT NULL,
                nine_hole_peg_test INTEGER NOT NULL,
                edema INTEGER NOT NULL,
                pain INTEGER NOT NULL,
                FOREIGN KEY (left_rom_id) REFERENCES left_rom (left_rom_id),
                FOREIGN KEY (left_mmt_id) REFERENCES left_mmt (left_mmt_id)
            )''')

            #Upper Extremities Table
            cursor.execute('''
            CREATE TABLE upper_extremities(
                ue_id INTEGER PRIMARY KEY AUTOINCREMENT,
                right_ue_id INTEGER NOT NULL,
                left_ue_id INTEGER NOT NULL,
                hand_dominance TEXT NOT NULL,
                FOREIGN KEY (right_ue_id) REFERENCES right_upper_extremities (right_ue_id),
                FOREIGN KEY (left_ue_id) REFERENCES left_upper_extremities (left_ue_id)
            )''')

            #Initial Evaluation Table
            cursor.execute('''
            CREATE TABLE initial_evaluation(
                medical_record_id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id INTEGER NOT NULL,
                client_id INTEGER NOT NULL,
                fim_id INTEGER NOT NULL,
                ue_id INTEGER NOT NULL,
                billing_code_id INTEGER NOT NULL,
                date_of_evaluation DATE NOT NULL,
                diagnosis TEXT NOT NULL,
                medical_history TEXT NOT NULL,
                prior_function TEXT NOT NULL,
                prior_situation TEXT NOT NULL,
                hearing TEXT NOT NULL, 
                vision TEXT NOT NULL,
                a_o TEXT NOT NULL,
                memory_cognition TEXT NOT NULL,
                follows_commands TEXT NOT NULL,
                mmse_score TEXT NOT NULL,
                current_transfer TEXT NOT NULL,
                other_observations TEXT NOT NULL,
                assessment TEXT NOT NULL,
                discharge_recommendation TEXT NOT NULL,
                equipment_needs TEXT NOT NULL,
                patient_goals TEXT NOT NULL,
                length_of_stay TEXT NOT NULL,
                long_term_goal TEXT NOT NULL,
                short_term_goal TEXT NOT NULL,
                therapist_signature TEXT NOT NULL,
                FOREIGN KEY (user_id) REFERENCES users (user_id),
                FOREIGN KEY (client_id) REFERENCES clients (client_id),
                FOREIGN KEY (fim_id) REFERENCES fim_evaluation (fim_evaluation_id),
                FOREIGN KEY (ue_id) REFERENCES upper_extremities (ue_id),
                FOREIGN KEY (billing_code_id) REFERENCES billing_codes (billing_code_id)
            )''')

            #Discharge Evaluation Table
            cursor.execute('''
            CREATE TABLE discharge_evaluation(
                medical_record_id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id INTEGER NOT NULL,
                initial_medical_record_id INTEGER NOT NULL,
                discharge_fim_id INTEGER NOT NULL,
                billing_code_id INTEGER NOT NULL,
                date_of_evaluation DATE NOT NULL,
                diagnosis TEXT NOT NULL,
                medical_history TEXT NOT NULL,
                prior_function TEXT NOT NULL,
                prior_situation TEXT NOT NULL,
                hearing TEXT NOT NULL, 
                vision TEXT NOT NULL,
                a_o TEXT NOT NULL,
                memory_cognition TEXT NOT NULL,
                follows_commands TEXT NOT NULL,
                mmse_score TEXT NOT NULL,
                discharge_transfer TEXT NOT NULL,
                other_observations TEXT NOT NULL,
                discharge_assessment TEXT NOT NULL,
                discharge_recommendation TEXT NOT NULL,
                equipment_needs TEXT NOT NULL,
                patient_goals TEXT NOT NULL,
                course_of_rehab TEXT NOT NULL,
                client_education TEXT NOT NULL,
                discharge_referrals TEXT NOT NULL,
                therapist_signature TEXT NOT NULL,
                FOREIGN KEY (user_id) REFERENCES users (user_id),
                FOREIGN KEY (initial_medical_record_id) REFERENCES initial_evaluation (medical_record_id),
                FOREIGN KEY (discharge_fim_id) REFERENCES discharge_fim_scores (discharge_fim_id),
                FOREIGN KEY (billing_code_id) REFERENCES billing_codes (billing_code_id)
            )''')

            cursor.execute('''
            CREATE TABLE progress_note(
                progress_id INTEGER PRIMARY KEY AUTOINCREMENT,
                client_id INTEGER NOT NULL,
                user_id INTEGER NOT NULL,
                billing_code_id INTEGER NOT NULL,
                diagnosis TEXT NOT NULL,
                precautions TEXT NOT NULL,
                contraindications TEXT NOT NULL,
                summary_of_service TEXT NOT NULL,
                current_client_performance TEXT NOT NULL,
                plan_recommnedations TEXT NOT NULL,
                FOREIGN KEY (client_id) REFERENCES clients (client_id),
                FOREIGN KEY (user_id) REFERENCES users (user_id),
                FOREIGN KEY (billing_code_id) REFERENCES billing_codes (billing_code_id)
            )''')

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
                self.conn.commit()
        except Error as e:
            print(e)

    def perform_select(self, table, select_columns, select_conditions=None):
        try:
            cursor = self.conn.cursor()
            columns = ','.join(select_columns)
            if(select_conditions == None):
                query = f"SELECT {columns} FROM {table}"
            cursor.execute(query)
            rows = cursor.fetchall()

            for row in rows:
                print(row)

        
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
            if(columns != values):
                print("Error. Unequal amount of columns and values")
            else:
                cursor = self.conn.cursor()
                
                query = f"UPDATE {table} SET"
                for i in range(len(columns)):
                    if(i == len(columns) - 1):
                        query += f" {columns[i]} = ?,"
                    else:
                        query += f" {columns[i]} = ?"
                query += f" WHERE {key_column} = ?"
                
                values.append(key_value)
                values = tuple(values)
                cursor.execute(query, values)
        except Error as e:
            print(e)