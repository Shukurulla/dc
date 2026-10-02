import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Docker ishlayapti!",
  });
});

app.listen(5000, () => {
  console.log("Server: 5000");
});
