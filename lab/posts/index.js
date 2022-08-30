const express = require("express");
const { randomUUID } = require("crypto");

const app = express();
app.use(express.json());

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", (req, res) => {
  const id = randomUUID();
  const { title } = req.body;
  posts[id] = { id, title };
  res.status(201).send(posts[id]);
});

app.listen(4000, () => console.log("Listening on port 4000..."));
