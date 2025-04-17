const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes
// const apiRoutes = require("./routes/api");
// app.use("/api", apiRoutes);

// Route mặc định
const data = {
  message: "Game Server API",
  status: 200,
};
app.post("/api/server-game", (req, res) => {
  console.log("req.body", req.body);
  res.send(data);
});

app.get("", (req, res) => {
  return res.send("Hello World!");
});

// Lắng nghe cổng
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
