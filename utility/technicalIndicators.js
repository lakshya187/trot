// Class to calculate Technical indicator values.

const Helpers = require("./helpers");

class TechnicalIndicators extends Helpers {
  constructor() {
    super();
  }
  /*
The SMA is used as the previous EMA  in the formula. 
EMA = (current or close price * multiplier) + [EMA previous * (1- multiplier)].
Multiplier = 2/(N-1), 
N is the number of days for which the EMA is to be calculated. 
SMA = (P1 + P2 + P3 + …… PN)/N
 */
  exponentialMovingAverage = (currentPrice, sma, multiplier) => {
    return +currentPrice * multiplier + sma * (1 - multiplier);
  };

  simpleMovingAverage = (rawValueArr) => {
    return this.calculateAverage(...rawValueArr);
  };

  /*
VWAP = price * volume / volume
  */
  volumeWeighedtedMovingAverage = (price, volume) => {
    return (price * volume) / volume;
  };
}

module.exports = TechnicalIndicators;
