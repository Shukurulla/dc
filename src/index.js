import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Docker ishlayapti!",
  });
});

app.listen(7000, () => {
  console.log("Server: 7000");
});
