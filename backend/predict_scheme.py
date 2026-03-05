import joblib
from preprocessing import clean_text
from features import get_vectorizer

vectorizer = get_vectorizer()

def predict(query, model):

    query = clean_text(query)

    vec = vectorizer.transform([query])

    prediction = model.predict(vec)

    return prediction[0]
