const express = require("express");
const cors = require("cors");
const { randomUUID } = require("crypto");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", async (req, res) => {
  const id = randomUUID();
  const { title } = req.body;
  posts[id] = { id, title };
  try {
    await axios.post("http://event-bus-srv:4005/events", {
      type: "PostCreated",
      data: {
        id,
        title,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
  res.status(201).send(posts[id]);
});

app.post("/events", (req, res) => {
  console.log("[Posts] Received event", req.body.type);
  res.send({});
});

app.listen(4000, () =>
  console.log("[Posts-service] Listening on port 4000...")
);
