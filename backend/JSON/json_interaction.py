import json
import pathlib
import traceback
import os

class JSON_Interaction:
    def __init__(self):
        pass
    
  
    
    def create_initial_json(self, info):
        try:
            med_num = info['allValues']['med_num']
            name = info['allValues']['name'].strip()
        except KeyError as e:
            return f"Missing key: {e}", 400

        file_name = pathlib.Path.home() / "Downloads" / f"initial_{med_num}_{name}.json"
        info_str = json.dumps(info)
        
        try:
            with open(file_name, "w") as outfile:
                outfile.write(info_str)
        except Exception as e:
            return f"Error creating the json file of the Initial Evaluation: {str(e)}", 500
        
        return "Initial Evaluation JSON file created successfully", 200

    def create_progress_json(self, info):
        home_path = os.path.expanduser("~")
        print(home_path)
        try:
            file_name = pathlib.Path.home() / "Downloads" / f"progress_{info['record_number']}_{info['name'].strip()}.json"
            with open(file_name, "w") as outfile:
                json.dump(info,outfile,indent=4)
            print("Successfully created the json file of the Progress Note Evaluation!")
        except:
            print("Error creating the json file of the Progress Note Evaluation!")

    def create_discharge_json(self, info):
        try:
            file_name = pathlib.Path.home() / "Downloads" / f"discharge_{info['record_number']}_{info['client_name'].strip()}.json"
            with open(file_name, "w") as outfile:
                json.dump(info,outfile,indent=4)
            print("Successfully created the json file of the Discharge Evaluation!")
        except:
            print("Error creating the json file of the Discharge Evaluation!")