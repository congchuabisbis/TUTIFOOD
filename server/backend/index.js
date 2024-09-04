const express = require("express");
const app = express();
const port = 4000;
const mongoDB = require("./db");
const createUserRouter = require("./Routers/CreateUser");
const cors = require("cors");
const displayData = require("./Routers/DisplayData");
const orderData = require("./Routers/OrderData")

//Định dạng để lưu người dùng
app.use(cors());

//Kết nối với db
mongoDB();

app.get("/", (req, res) => {
  res.json("Hello World!");
});

app.use(express.json());
// Sử dụng router 
app.use("/api", createUserRouter);
app.use("/api", displayData);
app.use("/api", orderData);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});