from flask import Flask, request, jsonify
import pickle
import numpy as np
import cv2

app = Flask(__name__)


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


#Diabetes controller

@app.route('/diagnose_Diabetes', methods=['POST'])
def diagnose_Diabetes():
    try:
        diabetes_model = pickle.load(open('./Ml Models/diabetes.pkl', 'rb'))
        data = request.get_json()
        int_features = [value for value in data.values()]
        final = [np.array(int_features)]
        prediction = diabetes_model.predict_proba(final)
        output = '{0:.{1}f}'.format(prediction[0][1], 2)
        return jsonify({'status':'success','probability': output})
    except Exception as e:
        return jsonify({'status':'failed','error': str(e)})



#Thyroid controller

@app.route('/diagnose_Thyroid', methods=['POST'])
def diagnose_Thyroid():
    try:
        thyroid_model=pickle.load(open('./Ml Models/thyroid_model.pkl', 'rb'))
        data = request.get_json()
        int_features = [value for value in data.values()]
        final = [np.array(int_features)]
        prediction = thyroid_model.predict_proba(final)
        output = '{0:.{1}f}'.format(prediction[0][1], 2)
        return jsonify({'status':'success','probability': output})
    except Exception as e:
        return jsonify({'error': str(e)})

#Diagnose Controller

@app.route('/diagnose_Breast_Cancer', methods=['POST'])
def diagnose_Breast_Cancer():
    try:
        Breast_Cancer_model=pickle.load(open('Ml Models/Breast_Cancer_Model.pkl', 'rb'))
        data = request.get_json()
        int_features = [value for value in data.values()]
        final = [np.array(int_features)]
        prediction = Breast_Cancer_model.predict_proba(final)
        output = '{0:.{1}f}'.format(prediction[0][1], 2)
        return jsonify({'status':'success','probability': output})
    except Exception as e:
        return jsonify({'error': str(e)})        

#Pneumonia Controller

@app.route('/diagnose_Pneumonia', methods=['POST'])
def diagnose_Pneumonia():
    try:
        if 'image' not in request.files:
            return jsonify({'error': 'No file part'})
        pneumonia_model=pickle.load(open('./Ml Models/pneumonia_model.pkl', 'rb'))    
        image = request.files['image'].read()
        nparr = np.frombuffer(image, np.uint8)
        image = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
        image = cv2.resize(image, (150, 150))
        image = np.expand_dims(image, axis=0)
        prediction = pneumonia_model.predict(image)
        output = '{0:.{1}f}'.format(prediction[0][1], 2)
        # print(output)
        return jsonify({'status':'success','probability': output})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
