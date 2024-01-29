const io = require("socket.io-client");
const socketService = require("./utility/socket");

const WebSocket = require("ws");
const ws = new WebSocket("wss://api.tiingo.com/iex");

const Client = () => {
  const socket = io("http://localhost:8765");
  const interval = 10;
  const socketConnection = new socketService(socket, interval);
  socketConnection.connectSocket();
};

Client();
// const socket = io("https://api.tiingo.com/crypto");
//   const subscribe = {
//     eventName: "subscribe",
//     authorization: "43a0f9fe4db8d017135fe4999307aced4d808d80",
//     eventData: {
//       thresholdLevel: 5,
//     },
//   };
//   ws.on("open", () => {
//     console.log("connected to the server");
//     ws.send(JSON.stringify(subscribe));
//   });
//   ws.on("message", (data) => {
//     console.log(data.toString());
//   });
