require("dotenv").config("./env");
var express = require("express");
var cookieParser = require("cookie-parser");
var cors = require("cors");
const serverless = require("serverless-http");

const connectDB = require("./DB/DB");

const webAppRouter = require("./routes/router.js");

connectDB();
var app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api", webAppRouter);

app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://www.jettradelogistics.in/"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use((req, res, next) => {
  if (req.headers["x-forwarded-proto"] !== "https") {
    return res.redirect("https://" + req.headers.host + req.url);
  }
  next();
});

app.use(
  cors({
    origin: ["https://www.jettradelogistics.in"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(function (err, req, res, next) {
  const messageArray = err.message.split("::");
  if (messageArray.length > 1) {
    res.status(Number(messageArray[0])).json({
      status: false,
      response_code: messageArray[1],
      message: messageArray[2],
    });
  } else {
    res
      .status(500)
      .json({ status: false, response_code: 500, message: messageArray[0] });
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

exports.test = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from Lambda!" }),
  };
};

module.exports.handler = serverless(app);
