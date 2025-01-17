from flask import Flask, request, jsonify
import pandas as pd
import joblib
import numpy as np
import os


# Initialize Flask app
app = Flask(__name__)

# Load pre-trained models and encoders
model = joblib.load('Disease10 (2).pkl')
encoder = joblib.load('mlb_encoder (3).pkl')
Yencoder2 = joblib.load('Yencoder8 (3).pkl')

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

def preprocess_input(age, days_of_symptoms, symptoms):
    age_bin = pd.cut([age], bins=10, labels=False)[0]
    days_bin = pd.cut([days_of_symptoms], bins=10, labels=False)[0]

    input_list = [0] * len(defsymptoms)
    for symptom in symptoms:
        if symptom in defsymptoms:
            input_list[defsymptoms.index(symptom)] = 1
        else:
            print(f"Warning: Symptom '{symptom}' not found in predefined list.")
    
    input_list = np.array([input_list])
    return age_bin, days_bin, input_list

def predict(symptoms, age, days_of_symptoms):
    age_bin, days_bin, symptoms_encoded = preprocess_input(age, days_of_symptoms, symptoms)
    prediction = model.predict([np.array([age_bin]), np.array([days_bin]), symptoms_encoded])

    # Get top 2 predicted diseases and their probabilities
    top_2_indices = np.argsort(prediction[0])[-2:][::-1]
    top_2_diseases = Yencoder2.inverse_transform(top_2_indices)
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

        # Validate inputs
        if not all([age, days_of_symptoms, symptoms]):
            return jsonify({"error": "Invalid input. Please provide age, days_of_symptoms, and symptoms."}), 400

        # Predict
        result = predict(symptoms, age, days_of_symptoms)
        return jsonify({"predictions": result})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Run the app
if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))  
    app.run(debug=True, host='0.0.0.0', port=port)