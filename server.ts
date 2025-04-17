const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const apiRouter = express.Router();
app.use("/api", apiRouter);

apiRouter.get("", (req, res) => {
  return res.send("Hello World!");
});

apiRouter.get("/coop_game/gameInfo", (req, res) => {
  const response = {
    status: "success",
    data: {
      username: "ntdat2110",
      roleId: "1304332",
      level: 15,
      serverId: 1,
      vipLevel: 3,
    },
  };

  res.json(response);
});

apiRouter.post("/coop_game/callback_game", (req, res) => {
  const response = {
    status: "success",
    message: "Topup confirmed",
    data: {
      walletBalance: 120000,
      reward: "50 gems",
    },
  };

  res.json(response);
});

apiRouter.get("/coop_game/support", (req, res) => {
  res.json({
    status: "success",
    message: "Yêu cầu hỗ trợ đã được ghi nhận",
    data: {
      ticketId: "123456",
      estimatedReplyTime: "24h",
    },
  });
});

apiRouter.use("/thumbnail", express.static("thumbnail"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/api`);
});
