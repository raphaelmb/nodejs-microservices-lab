const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

const events = [];

app.post("/events", async (req, res) => {
  const event = req.body;
  events.push(event);
  try {
    await axios.post("http://post-service:4000/events", event);
  } catch (error) {
    console.log(error.message);
  }
  try {
    await axios.post("http://comments-service:4001/events", event);
  } catch (error) {
    console.log(error.message);
  }
  try {
    await axios.post("http://query-service:4002/events", event);
  } catch (error) {
    console.log(error.message);
  }
  try {
    await axios.post("http://moderation-service:4003/events", event);
  } catch (error) {
    console.log(error.message);
  }

  res.send({ status: "OK" });
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(4005, console.log("[Event-bus] Listening on port 4005..."));
