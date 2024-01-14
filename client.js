const io = require("socket.io-client");
const socketService = require("./utility/socket");

const Client = () => {
  const socket = io("http://localhost:8765");
  const interval = 10;
  const socketConnection = new socketService(socket, interval);
  socketConnection.connectSocket();
};

Client();
