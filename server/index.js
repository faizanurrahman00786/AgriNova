const express = require("express");
const app = express();
   
require("dotenv").config();
const port = process.env.PORT || 4000;
 
app.use(express.json());

const cookieParser = require("cookie-parser");
app.use(cookieParser());
 
const fileUpload = require("express-fileupload");
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
}
));

const cors = require("cors");
app.use(cors({
    origin:process.env.HOST,
    credentials: true,
}));

const dbConnect = require("./config/database");
 dbConnect();

const cloudinaryConnect = require("./config/cloudinary");
 cloudinaryConnect();

const user = require("./routes/user");
const profile = require("./routes/profile");
const product = require("./routes/product");
const msp = require("./routes/msp");
const order = require("./routes/order");
const cropDis = require("./routes/cropDis");
// const payment = require("./routes/payment");

app.use("/api/auth", user);
app.use("/api/profile", profile);
app.use("/api/product", product);
app.use("/api/order", order);
app.use("/api/msp", msp);
app.use("/api/cropds", cropDis);
// app.use("/api/payment", payment);

app.listen(port, () =>
    console.log(`Server is running at port no ${port}`)); 

app.get("/", function (req, res) {
    res.send("<h2>HomePage</h2>");
});


