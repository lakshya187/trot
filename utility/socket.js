const DataStore = require("./dataStore");
const TechnicalIndicators = require("./technicalIndicators");

class Socket {
  constructor(socket, interval) {
    this.socket = socket;
    this.INTERVAL = interval;
    this.dataStore = new DataStore();
    this.technicalIndicators = new TechnicalIndicators();
  }
  connectSocket = () => {
    let counter = 0;
    let currentTrade = "";
    let previousValue = 0;
    let balance = 0;
    this.socket.on("connect", () => {
      console.log("connected to the server");
      this.socket.on("csvData", (data) => {
        let dataToGetIndex = counter - this.INTERVAL;
        this.dataStore.setPricesInCache(data["Close"], counter);

        // dataStore.calculateAndSetMovingAverage(data, counter);
        const pricesToCheck = new Array();
        while (dataToGetIndex <= counter) {
          if (dataToGetIndex >= 0) {
            const previousAverage = this.dataStore.cache.get(dataToGetIndex);
            pricesToCheck.push(+previousAverage);
          }
          dataToGetIndex++;
        }

        const SMA = this.technicalIndicators.simpleMovingAverage(pricesToCheck);
        const emaMultiplier = this.technicalIndicators.calculateMultiplier(
          this.INTERVAL
        );
        const EMA = this.technicalIndicators.exponentialMovingAverage(
          data["Close"],
          SMA,
          emaMultiplier
        );

        // const VWAP = this.technicalIndicators.exponentialMovingAverage()

        const currentPrice = parseInt(data["Close"]);
        if (currentPrice > EMA) {
          // currentTrade = "buy";
          console.log(`Buy because ${currentPrice} is greater than ${EMA}`);
          // balance += previousValue - currentPrice;
          // previousValue = currentPrice;
        } else {
          console.log(`sell because ${currentPrice} is less than ${EMA}`);
        }

        counter++;
        // console.log(balance);
        // socket.emit("dataRecived", { message: "data recived" });
      });
    });
  };
}

module.exports = Socket;
