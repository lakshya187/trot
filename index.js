const fs = require("fs");
const csvParser = require("csv-parser");
const express = require("express");

const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
// const server = http.createServer()
// const io = socketIo();
const fileName = "RELIANCE.csv";
const numberOfTimesToEmit = 10;
io.on("connection", (socket) => {
  console.log("client connected");
  const csvStream = fs
    .createReadStream(`./testData/${fileName}`)
    .pipe(csvParser());

  csvStream.on("data", (row) => {
    // console.log("data");
    socket.emit("csvData", row);
  });

  socket.on("dataRecived", (msg) => {
    console.log(msg);
  });
  csvStream.on("end", () => {
    console.log("file streaming finished");
  });
  // socket.disconnect(true);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    csvStream.destroy();
  });
});

const PORT = 8765;

http.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
