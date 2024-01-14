const TTLCache = require("./cache");
const Helpers = require("./helpers");

class DataStore extends Helpers {
  constructor() {
    super();
    this.cache = new TTLCache();
  }
  setPricesInCache = (dataSet, index) => {
    this.cache.set(index, dataSet);
  };
}

module.exports = DataStore;
