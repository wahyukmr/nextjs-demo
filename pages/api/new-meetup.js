import { MongoClient } from "mongodb";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const requestData = req.body;

        const url = process.env.NEXT_PUBLIC_URL;
        const client = await MongoClient.connect(url);
        const dataBase = client.db();
        const meetupCollection = dataBase.collection("meetups");
        await meetupCollection.insertOne(requestData);

        client.close();

        res.status(201).json({ message: "Meetup inserted!" });
    }
}
