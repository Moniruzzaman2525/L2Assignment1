

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


// Problem Three

type StringOrNumber = string | number;

function checkType(input: StringOrNumber): "String" | "Number" {
  return typeof input === "string" ? "String" : "Number";
}

const problemThree1 =  checkType("Hello");
console.log(problemThree1)

const problemThree2 = checkType(42);
console.log(problemThree2)
