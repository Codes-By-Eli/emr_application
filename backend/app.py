from flask import Flask
from flask_cors import CORS
from flask import request #handle parsing POST information
app = Flask(__name__)
CORS(app)

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
    app.run(debug=True)