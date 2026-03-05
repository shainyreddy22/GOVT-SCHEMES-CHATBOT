from sklearn.cluster import KMeans
from features import get_vectorizer
from load_dataset import load_dataset

df = load_dataset()

vectorizer = get_vectorizer()

X = vectorizer.fit_transform(df["text"])

kmeans = KMeans(n_clusters=5)

kmeans.fit(X)

df["cluster"] = kmeans.labels_

print(df[["scheme_name","cluster"]])
