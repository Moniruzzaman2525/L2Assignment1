

// Problem One

function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 === 0);
}

const problemOne = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
console.log(problemOne)


// Problem Two

function reverseString(input: string): string {
  return input.split("").reverse().join("");
}

const problemTwo =  reverseString("typescript");
console.log(problemTwo)