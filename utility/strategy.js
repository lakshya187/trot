// the strategy will recive price values, with intervals so that the values are only calcualted after the interval.
// It will calculate moving averages and VWAP for multiple time periods

class Strategies {
  constructor(cache) {
    this.cache = cache;
  }
  Strategy_1 = (currentIndex) => {
    const intervalValueHash = {};
    const INTERVALS = [5, 8, 10];
    INTERVALS.forEach((interval) => {
      if (!intervalValueHash[interval]) {
        intervalValueHash[interval] = { prices: [] };
      }
      if (currentIndex >= interval) {
      }
      let dataToGetIndex = currentIndex - interval;
      const timePeriodPrices = [];
      while (dataToGetIndex < currentIndex) {
        if (dataToGetIndex >= 0) {
          const previousDataPoint = this.cache.get(dataToGetIndex);
          if (previousDataPoint) timePeriodPrices.push(previousDataPoint);
        }
        dataToGetIndex++;
      }
      intervalValueHash[interval] = timePeriodPrices;
    });
    console.log(intervalValueHash);
  };
}

module.exports = Strategies;
