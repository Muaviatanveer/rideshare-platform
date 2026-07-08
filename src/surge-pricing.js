// Surge pricing logic
const calculateSurgePrice = (basePrice, surgeMultiplier) => {
  return basePrice * surgeMultiplier;
};

module.exports = { calculateSurgePrice };