const express = require("express");
const router = express.Router();
const { MongoClient, ObjectId } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

router.get("/", async (req, res) => {
  let dbArray = null;
  try {
    await client.connect();
    dbArray = await client
      .db("namesDB")
      .collection("name_Item")
      .find()
      .toArray();
  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }
  res.render("index", { namesArray: dbArray, noOfNames: dbArray.length });
});

router.post("/", async (req, res) => {
  const names = req.body;
  try {
    await client.connect();
    await client.db("namesDB").collection("name_Item").insertOne(names);
  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }
  res.redirect("/");
});

router.post("/delete", async (req, res) => {
  const id = req.body.id;
  try {
    await client.connect();
    await client
      .db("namesDB")
      .collection("name_Item")
      .deleteOne({ _id: new ObjectId(id) });
  } catch (e) {
    console.log(e);
  } finally {
    client.close();
  }
  res.redirect("/");
});

router.post('/edit', async (req, res) => {
  let id = req.body.id;
  let firstName = req.body.f_name_edit;
  let lastName = req.body.l_name_edit;
  try {
    await client.connect();
    await client.db('namesDB').collection('name_Item').updateOne({_id: new ObjectId(id)},{ $set: {f_name: firstName, l_name: lastName}})
    
  } catch(e) {
    console.log(e)
  } finally {
    await client.connect();
  }
  res.redirect('/');
})

module.exports = router;
