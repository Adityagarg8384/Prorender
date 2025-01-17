import pandas as pd
import joblib

# Load the trained model and the list of symptoms (columns of X_train)
mlp_model = joblib.load('modeldisease.pkl')  
X_train_columns = pd.read_csv('X_train_columns.csv')['columns'].tolist()

def predict_disease(input_symptoms):
    # Create a binary vector for input symptoms
    input_vector = [1 if symptom in input_symptoms else 0 for symptom in X_train_columns]
    input_vector = pd.DataFrame([input_vector], columns=X_train_columns)
    
    # Predict the disease
    predicted_disease = mlp_model.predict(input_vector)[0]
    
    return predicted_disease

# Example usage
if __name__ == '__main__':
    # Simulate user input (replace with actual symptoms)
    input_symptoms = ["shortness of breath", "asthenia", "vertigo", "sweat", "nausea", "pain chest", "rale"]

    # Check if symptoms are provided
    if not input_symptoms:
        print('No symptoms provided')
    else:
        # Get the prediction
        predicted_disease = predict_disease(input_symptoms)
        print(f'Predicted Disease: {predicted_disease}')
