// This is a time to live based cache.

class TTLCache {
  constructor(timeToExpire = 0) {
    this.cache = new Map();
    this.timeToExpire = timeToExpire || null;
  }

  set = (key, value) => {
    const cacheObj = {
      value,
      expire:
        !this.timeToExpire ||
        setTimeout(() => this.cache.delete(key), this.timeToExpire),
    };
    this.cache.set(key, cacheObj);
  };
  get = (key) => {
    return this.cache.get(key)?.value;
  };
  getEntireCache = () => {
    const values = this.cache;
    return values;
  };
}

module.exports = TTLCache;
