class Helpers {
  calculateAverage = (...nums) => {
    if (nums) {
      return (
        nums.reduce(
          (accumulator, currentValue) => (accumulator += currentValue),
          0
        ) / nums.length
      );
    } else {
      return -1;
    }
  };
  calculateMultiplier = (n) => {
    return 2 / (n - 1);
  };
  sum = (...nums) => {
    if (nums) {
      return nums.reduce((acc, current) => (acc += current), 0);
    }
  };
}

module.exports = Helpers;
