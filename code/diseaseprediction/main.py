from flask import Flask, request, jsonify
import pandas as pd
import joblib

app = Flask(__name__)

# Load the trained model and the list of symptom columns
mlp_model = joblib.load('modeldisease.pkl')
X_train_columns = pd.read_csv('X_train_columns.csv')['columns'].tolist()

def predict_disease(input_symptoms):
    # Create a binary vector for input symptoms
    input_vector = [1 if symptom in input_symptoms else 0 for symptom in X_train_columns]
    input_vector = pd.DataFrame([input_vector], columns=X_train_columns)
    
    # Predict the disease
    predicted_disease = mlp_model.predict(input_vector)[0]
    
    return predicted_disease

# Define the API route for predictions
@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        input_symptoms = data.get('symptoms', [])
        
        if not input_symptoms:
            return jsonify({'error': 'No symptoms provided'}), 400
        
        # Get the prediction
        predicted_disease = predict_disease(input_symptoms)
        
        return jsonify({'predicted_disease': predicted_disease})
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Define the API route for status check
@app.route('/status', methods=['GET'])
def status():
    return jsonify({'status': 'OK'}), 200

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)
