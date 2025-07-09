function add(numbers) {
  if (!numbers) return 0;

  let delimiter = ",";
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = parts[0].substring(2);
    numbers = parts.slice(1).join("\n");
  }

  numbers = numbers.replace(/\n/g, delimiter);
  const numArray = numbers.split(delimiter).map(Number);

  const negatives = numArray.filter((n) => n < 0);

  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
  }

  return numArray.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };
