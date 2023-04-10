import json

class JSON_Interaction:
    def __init__(self):
        pass
    
    def create_initial_json(self, info):
        try:
            with open("initial.json", "w") as outfile:
                json.dump(info,outfile,indent=4)
        except:
            pass

    def create_progress_json(self, info):
        try:
            pass
        except:
            pass

    def create_discharge_json(self, info):
        try:
            pass
        except:
            pass