import { connect } from "../mongodb/connect";

const findDocumentTest = async () => {
  let connection, cursor;
  try {
    connection = await connect();
    const db = await connection.db("ch12-2");
    const personsCollection = db.collection("persons");
    const addressesCollection = db.collection("address");

    cursor = personsCollection.find({ name: "Jack" });
    const foundPersons = await cursor.toArray();
    console.log(foundPersons);

    cursor = addressesCollection.find({});
    const foundAddress = await cursor.toArray();
    console.log(foundAddress);
  } catch (e) {
    console.log(e.message);
  } finally {
    connection.close();
  }
};

findDocumentTest();
