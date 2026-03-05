import pandas as pd

def load_dataset():

    df = pd.read_csv("updated_dataset.csv")

    df["text"] = (
        df["scheme_name"] + " " +
        df["category"] + " " +
        df["description"] + " " +
        df["eligibility"] + " " +
        df["benefits"]
    )

    df["label"] = df["category"]

    return df

if __name__ == "__main__":
    df = load_dataset()
    print(df.head())
