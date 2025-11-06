// Sample exchange rates
const exchangeRates = {
  usd: {
    eur: 0.92,
    gbp: 0.79,
    jpy: 148.5,
    inr: 83.12,
  },
  eur: {
    usd: 1.09,
    gbp: 0.86,
    jpy: 161.84,
    inr: 90.45,
  },
  gbp: {
    usd: 1.27,
    eur: 1.17,
    jpy: 188.65,
    inr: 105.22,
  },
  jpy: {
    usd: 0.0067,
    eur: 0.0062,
    gbp: 0.0053,
    inr: 0.56,
  },
  inr: {
    usd: 0.012,
    eur: 0.011,
    gbp: 0.0095,
    jpy: 1.79,
  },
};

// A function declaration to check if currency exists in our rates
function isValidCurrency(currency) {
  return currency in exchangeRates;
}
// A function expression to convert from one currency to another
const convertCurrency = function (amount, fromCurrency, toCurrency) {

   // Validate currencies
  if (!isValidCurrency(fromCurrency)) {
    return "Invalid source currency";
  }
  if (!isValidCurrency(toCurrency)) {
    return "Invalid target currency";
  }

  // If same currency, return original amount
  if (fromCurrency === toCurrency) {
    return amount;
  }

  // Do the conversion
  const rate = exchangeRates[fromCurrency][toCurrency];
  const result = amount * rate;
  return result;
};
// DO NOT MODIFY THE CODE BELOW THIS LINE
try {
  console.log("Converting 100 usd to inr:", convertCurrency(100, "usd", "inr"));
  console.log("Converting 50 eur to inr:", convertCurrency(50, "eur", "inr"));
  console.log(
    "Converting 10000 inr to eur:",
    convertCurrency(10000, "inr", "eur")
  );
  console.log(
    "Converting 5000 inr to jpy:",
    convertCurrency(5000, "inr", "jpy")
  );
  console.log("Converting 100 xyz to eur:", convertCurrency(100, "xyz", "eur"));
} catch {
  console.log("Please read the instructions carefully and try again");
}
