const mongoose = require("mongoose");
const express = require("express");
const { default: cruise } = require("./schema/cruiseSchema");

const app = express();

mongoose.connect(
  "mongodb+srv://yug:9826112003@cluster0.1lluo.mongodb.net/?retryWrites=true&w=majority"
);
mongoose.set("strictQuery", true);

app.use(express.json());
const port = 3000;

app.post("/cruise/create",async (req, res) => {
    const cruise = await Cruise.create(req.body);
    res.status(200).json(cruise);
});
app.delete("/cruise/delete", async (req, res) => {
  const cruise = await Cruise.findByIdAndDelete(req.body.id);
  res.status(200).json(cruise);
});
app.put("/cruise/update", async(req, res) => {
    const cruise = await Cruise.findByIdAndUpdate(req.body.id,req.body);
    res.status(200).json(cruise);
});
// Review
app.post("/review/create",async (req, res) => {
    const cruise = await Cruise.create(req.body);
    res.status(200).json(cruise);
});
app.delete("/review/delete", async (req, res) => {
  const cruise = await Cruise.findByIdAndDelete(req.body.id);
  res.status(200).json(cruise);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
