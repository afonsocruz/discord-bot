const numberConverter = (number, round) => {
  return parseFloat(Math.round(number * 100) / 100).toFixed(round);
};

module.exports = numberConverter;
