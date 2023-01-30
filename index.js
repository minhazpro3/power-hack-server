const express = require("express");
const cors = require("cors");
const { connectToServer } = require("./utils/dbConnection");
const useRouter = require("./routes/billing.route");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

connectToServer((err) => {
  if (!err) {
    app.listen(port, () => {
      console.log("HEY connected database", port);
    });
  } else {
    console.log("You have to  sure connect!!");
  }
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", useRouter);

app.all("*", (req, res) => {
  res.send(" Route in not found");
});
