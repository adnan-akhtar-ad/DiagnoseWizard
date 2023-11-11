from flask import Flask,request, url_for, redirect, render_template
import pickle
import numpy as np
import json
app = Flask(__name__)

diabetes_model=pickle.load(open('./Ml Models/diabetes.pkl','rb'))


    

@app.route('/')
def hello_world():
    return render_template("../diagnoseWizard/src/Pages/DiagnosesPage.jsx")


@app.route('/diagnose_Diabetes',methods=['POST','GET'])
def predict():
    data=request.get_json();
    int_features=[value for value in data.values() ]
    final=[np.array(int_features)]
    print(int_features)
    prediction=diabetes_model.predict_proba(final)
    output='{0:.{1}f}'.format(prediction[0][1], 2)
    return output

if __name__ == '__main__':
    app.run(debug=True)