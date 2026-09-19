// for() to add each number
function sumFor(numbers: number[]): number {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

// while() to add each number
function sumWhile(numbers: number[]): number {
  let sum = 0;
  let i = 0;

  while (i < numbers.length) {
    sum += numbers[i];
    i++;
  }

  return sum;
}

// recursive function calls itself on the remaining number
function sumRecursion(numbers: number[]): number {
  if (numbers.length === 0) {
    return 0;
  }

  return numbers[0] + sumRecursion(numbers.slice(1));
}

// reduce() to combine numbers into a single value
function sumTheFunctionalWay(numbers: number[]): number {
  return numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
}

// test the functions
console.log(sumFor([1, 2, 3, 4])); // output: 10
console.log(sumWhile([1, 2, 3, 4])); // output: 10
console.log(sumRecursion([1, 2, 3, 4])); // output: 10
console.log(sumTheFunctionalWay([1, 2, 3, 4])); // output: 10
