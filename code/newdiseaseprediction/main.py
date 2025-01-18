from flask import Flask, request, jsonify
import pandas as pd
import numpy as np
import onnxruntime as ort 
import joblib
import os

# Initialize Flask app
app = Flask(__name__)

# Load pre-trained models and encoders
onnx_model_path = 'model.onnx'
encoder_path = 'mlb_encoder (3).pkl'
y_encoder_path = 'Yencoder8 (3).pkl'

# Load ONNX model
onnx_session = ort.InferenceSession(onnx_model_path)

# Load encoders
encoder = joblib.load(encoder_path)
Yencoder2 = joblib.load(y_encoder_path)

# Define symptom list
defsymptoms = ['abdominal_pain', 'acidity', 'anxiety', 'blackheads', 'bloody_stool',
               'blurred_and_distorted_vision', 'breathlessness', 'chest_pain',
               'chills', 'constipation', 'continuous_feel_of_urine',
               'continuous_sneezing', 'cough', 'dischromic _patches', 'dizziness',
               'fatigue', 'foul_smell_of urine', 'headache', 'high_fever',
               'hip_joint_pain', 'indigestion', 'irregular_sugar_level',
               'irritation_in_anus', 'joint_pain', 'knee_pain',
               'lack_of_concentration', 'lethargy', 'loss_of_appetite', 'mood_swings',
               'movement_stiffness', 'nausea', 'neck_pain', 'nodal_skin_eruptions',
               'pain_in_anal_region', 'passage_of_gases', 'pus_filled_pimples',
               'restlessness', 'shivering', 'skin_peeling', 'skin_rash',
               'small_dents_in_nails', 'sweating', 'swelling_joints', 'vomiting',
               'watering_from_eyes', 'No Symptom', 'itching']

# Preprocessing function
def preprocess_input(age, days_of_symptoms, symptoms):
    # Bin age and days_of_symptoms
    age_bin = pd.cut([age], bins=range(0, 101, 10), labels=False)[0]  # Age bins: 0-10, 10-20, etc.
    days_bin = pd.cut([days_of_symptoms], bins=range(0, 101, 10), labels=False)[0]

    # One-hot encode symptoms
    input_list = [0] * len(defsymptoms)
    for symptom in symptoms:
        if symptom in defsymptoms:
            input_list[defsymptoms.index(symptom)] = 1
        else:
            print(f"Warning: Symptom '{symptom}' not found in predefined list.")
    
    input_list = np.array([input_list], dtype=np.float32)
    return age_bin, days_bin, input_list

# Prediction function
def predict(symptoms, age, days_of_symptoms):
    # Preprocess inputs
    age_bin, days_bin, symptoms_encoded = preprocess_input(age, days_of_symptoms, symptoms)

    # Prepare inputs for the ONNX model
    print(Yencoder2.classes_)


    inputs = {
    "input_1": np.array([[age_bin]], dtype=np.float32),  # Reshape to 2D
    "input_2": np.array([[days_bin]], dtype=np.float32),
    "input_3": symptoms_encoded
}

    # Run ONNX model inference
    prediction = onnx_session.run(None, inputs)[0]

    # Get top 2 predicted diseases and their probabilities
    top_2_indices = np.argsort(prediction[0])[-2:][::-1]
    top_2_diseases = Yencoder2.inverse_transform(np.array(top_2_indices).reshape(-1, 1))
    top_2_probabilities = prediction[0][top_2_indices]

    result = [{"disease": top_2_diseases[i], "probability": float(top_2_probabilities[i])} for i in range(2)]
    return result

# Define API route
@app.route('/predict', methods=['POST'])
def predict_disease():
    try:
        # Get input data
        data = request.json
        age = data.get('age')
        days_of_symptoms = data.get('days_of_symptoms')
        symptoms = data.get('symptoms')

        print(age)
        print(days_of_symptoms)
        print(symptoms)

        # Validate inputs
        if not isinstance(age, (int, float)) or not isinstance(days_of_symptoms, (int, float)) or not isinstance(symptoms, list):
            return jsonify({"error": "Invalid input. Please provide valid age (number), days_of_symptoms (number), and symptoms (list)."}), 400

        # Predict
        result = predict(symptoms, age, days_of_symptoms)
        return jsonify({"predictions": result})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/status', methods=['GET'])
def status():
    return jsonify({'status': 'OK'}), 200

@app.route("/")
def home():
    return "Service is up and running!", 200

# Run the app
if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))  
    app.run(debug=True, host='0.0.0.0', port=port)
