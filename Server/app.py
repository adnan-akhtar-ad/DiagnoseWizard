from flask import Flask, request, jsonify
import pickle
import numpy as np

app = Flask(__name__)

# ML Models
diabetes_model = pickle.load(open('./Ml Models/diabetes.pkl', 'rb'))

# Enable CORS for the /diagnose_Diabetes route
@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:5173')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    response.headers.add('Access-Control-Allow-Methods', 'POST')
    response.headers.add('Access-Control-Allow-Credentials', 'true')
    return response

# Handle preflight requests
@app.route('/diagnose_Diabetes', methods=['OPTIONS'])
def options():
    response = jsonify({'message': 'CORS preflight request successful'})
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    response.headers.add('Access-Control-Allow-Methods', 'POST')
    return response

@app.route('/diagnose_Diabetes', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        int_features = [value for value in data.values()]
        final = [np.array(int_features)]
        prediction = diabetes_model.predict_proba(final)
        output = '{0:.{1}f}'.format(prediction[0][1], 2)
        return jsonify({'status':'success','probability': output})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
