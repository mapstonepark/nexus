import clientPromise from "../../lib/mongodb";


export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("user");
 
        const movies = await db
            .collection("users")
            .limit(10)
            .toArray();
 
        res.json(movies);
    } catch (e) {
        console.error(e);
    }
 };
  