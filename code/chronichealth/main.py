from flask import Flask, request, jsonify
import joblib
import pandas as pd

# Load the trained model (make sure to replace 'model.pkl' with the actual filename)
model = joblib.load('model_compressed (3).pkl')

app = Flask(__name__)

# Define the prediction function
def predict(input_data):
    input_df = pd.DataFrame([input_data])
    prediction = model.predict(input_df)
    val = prediction[0]
    if val == 1:
        return "High chances of Chronic Disease"
    else:
        return "Low chances of Chronic Disease"

# Define an endpoint for predictions
@app.route('/predict2', methods=['POST'])
def predict_endpoint():
    data = request.json
    # Ensure the input data is valid
    if not isinstance(data, dict):
        return jsonify({'error': 'Invalid input data format'}), 400

    try:
        prediction = predict(data)
        return jsonify({'prediction': prediction})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Define a GET endpoint to check the status
@app.route('/status', methods=['GET'])
def status():
    return jsonify({'status': 'OK'}), 200

if __name__ == '__main__':
    app.run(debug=True)
