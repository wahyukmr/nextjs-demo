import { MongoClient } from "mongodb";

export async function mongoClientDatabase() {
    const client = await MongoClient.connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.gn6lijv.mongodb.net/${process.env.DB_COLLECTION}?retryWrites=true&w=majority`
    );

    const dataBase = client.db();
    const meetupCollection = dataBase.collection("meetups");
    return {
        collection: meetupCollection,
        client,
    };
}

export default async function handler(req, res) {
    if (req.method === "POST") {
        const requestData = req.body;
        const { collection, client } = await mongoClientDatabase();

        const meetupCollection = collection;
        await meetupCollection.insertOne(requestData);

        client.close();

        res.status(201).json({ message: "Meetup inserted!" });
    }
}
