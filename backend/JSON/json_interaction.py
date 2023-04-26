import json
import pathlib

class JSON_Interaction:
    def __init__(self):
        pass
    
    def create_initial_json(self, info):
        try:
            file_name = pathlib.Path.home() / "Downloads" / f"initial_{info['record_number']}_{info['client_name'].strip()}.json"
            with open(file_name, "w") as outfile:
                json.dump(info,outfile,indent=4)
            print("Successfully created the json file of the Initial Evaluation!")
        except:
            print("Error creating the json file of the Initial Evaluation!")

    def create_progress_json(self, info):
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