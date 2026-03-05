import faiss
import numpy as np
from sentence_transformers import SentenceTransformer
import pandas as pd

df = pd.read_csv("schemes_dataset.csv")

model = SentenceTransformer("all-MiniLM-L6-v2")

embeddings = model.encode(df["description"].tolist())

dimension = embeddings.shape[1]

index = faiss.IndexFlatL2(dimension)

index.add(np.array(embeddings))

def search(query):

    q = model.encode([query])

    D, I = index.search(np.array(q), 3)

    return df.iloc[I[0]]
