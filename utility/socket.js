const Strategies = require("./strategy");
const TTLCache = require("./cache");

class Socket {
  constructor(socket) {
    this.socket = socket;
    this.cache = new TTLCache();
    this.strategies = new Strategies(this.cache);
  }
  connectSocket = () => {
    let counter = 0;
    this.socket.on("connect", () => {
      console.log("connected to the server");
      this.socket.on("csvData", (data) => {
        this.cache.set(counter, data);
        const intervals = [5];
        this.strategies.Strategy_1(counter);
        counter++;
      });
    });
  };
}

module.exports = Socket;
