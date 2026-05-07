

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


// Problem Four

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = {
  id: 1,
  name: "John Doe",
  age: 21,
};

const problemFour = getProperty(user, "name");
console.log(problemFour)


// Problem Five

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book) {
  return {
    ...book,
    isRead: true,
  };
}

const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

const problemFive =  toggleReadStatus(myBook);
console.log(problemFive)


// Problem Six

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student("Alice", 20, "A");
const problemSix = student.getDetails();
console.log(problemSix)


// Problem Seven

function getIntersection(arr1: number[], arr2: number[]): number[] {
  return arr1.filter((num) => arr2.includes(num));
}

const problemSeven = getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
console.log(problemSeven)
