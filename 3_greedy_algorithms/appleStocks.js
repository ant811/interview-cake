function getMaxProfit(stockPrices) {
  if (stockPrices.length < 2) {
    throw new Error('Two or more prices required');
  }

  let min = stockPrices[0];
  let result;
  for (let i = 1; i < stockPrices.length; i++) {
    if (i === 1) {
      result = stockPrices[i] - min;
    } else {
      result = Math.max(result, stockPrices[i] - min);
    }

    min = Math.min(min, stockPrices[i]);
  }

  return result;
}

// Time complexity: O(n)
// Space complexity: O(1)

module.exports = { getMaxProfit };
