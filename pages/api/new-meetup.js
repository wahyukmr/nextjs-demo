import { MongoClient } from "mongodb";

export async function mongoDataBase(environment) {
    const client = await MongoClient.connect(environment);
    const dataBase = client.db();
    const meetupCollection = dataBase.collection("meetups");

    return {
        client,
        collection: meetupCollection,
    };
}

export default async function handler(req, res) {
    if (req.method === "POST") {
        const requestData = req.body;
        const { client, collection } = await mongoDataBase(
            `${process.env.NEXT_PUBLIC_URL}`
        );

        await collection.insertOne(requestData);
        client.close();

        res.status(201).json({ message: "Meetup inserted!" });
    }
}
