const express = require("express");
const logger = require("./middleware/logEvents");
const path = require("path");
const cors = require("cors");
const PORT = 3600;
const app = express();

// urlcoded to  process your data so form data
app.use(express.urlencoded({ extended: false }));

// build-in middleware for json
app.use(express.json());
// serve static files
app.use(express.static(path.join(__dirname, "public")));

app.use("/", require("./routes/home/root"));

app.use("/signin", require("./routes/routes"));

app.use("/employees", require("./routes/employees"));

//custom middleware  logger
app.use(logger);

//Cross Origin Resource Sharing
app.use(cors());

// app.get("/", (req, res) => {
//   // res.sendFile("./views/index.html", { root: __dirname });
//   res.sendFile(path.join(__dirname, "views", "index.html"));
// });

app.listen(PORT, () => {
  console.log(`Server running on port  ${PORT}) `);
});

// // ! use to logEvents

// const logEvents = require("./logEvents.js");

// const EventEmitter = require("events");

// class MyEmitter extends EventEmitter {}

// // initialize object

// const myEmitter = new MyEmitter();

// // add listeners for to log  event

// myEmitter.on("log", (mgs) => {
//   logEvents(mgs);
// });

// setTimeout(() => {
//   myEmitter.emit("log", "Log event emitted!");
// }, 2000);
// // ? use to package  date-fns

// const { format } = require("date-fns");

// console.log(format(new Date(), "yyyy-MM-dd\tHH:mm:ss"));

// // !  unique id

// const { v4: uuid } = require("uuid");

// console.log(uuid());

// console.log(uuid());
