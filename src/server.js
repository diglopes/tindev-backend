if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", error => console.log(error));
db.on("open", () => console.log(">> Database connected"));

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(">> Server running");
});
