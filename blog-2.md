# How OOP Pillars Help Manage Large TypeScript Codebases

Object-Oriented Programming (OOP) is built on four core pillars. Together, they help you write code that is easier to read, scale, and maintain — especially in large TypeScript projects.

---

## The 4 Pillars of OOP

### 1. Encapsulation — hide complexity and mutability

Encapsulation restricts direct access to internal state using the `private` modifier, so only the class itself can modify sensitive data.

```ts
class BankAccount {
  private balance = 0;

  deposit(amount: number) {
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }
}
```

> Child classes and outside code cannot access `balance` directly — they must go through the defined methods.

---

### 2. Inheritance — reuse core logic across classes

Inheritance allows child classes to extend a parent class, inheriting its properties and methods without rewriting them.

```ts
class Person {
  constructor(public name: string) {}
}

class Student extends Person {
  constructor(
    name: string,
    public grade: string,
  ) {
    super(name);
  }
}
```

> All instances of `Student` automatically have access to `name` from `Person`.

---

### 3. Abstraction — expose only what is needed

Abstraction hides unnecessary implementation details. You expose only what the caller needs, not how it works internally.

```ts
abstract class Payment {
  abstract pay(amount: number): void;
}
```

> Concrete classes that extend `Payment` must implement `pay()` — callers only need to know the method exists, not how it works.

---

### 4. Polymorphism — same interface, different behavior

Different classes can implement the same method and behave differently, allowing flexible and interchangeable usage.

```ts
class CardPayment {
  pay(amount: number) {
    console.log("Paid by card");
  }
}

class CashPayment {
  pay(amount: number) {
    console.log("Paid by cash");
  }
}
```

> Both classes share the same `pay()` interface but produce different behavior — the caller does not need to know which one it is dealing with.

---

## In Real Applications

In large TypeScript projects, each pillar plays a distinct role:

- **Encapsulation** prevents bugs and accidental data mutation.
- **Abstraction** reduces complexity and cognitive load.
- **Inheritance** avoids code duplication and repetition.
- **Polymorphism** makes systems flexible and easy to extend.

---

## Mental Model

| Pillar | Analogy |
|---|---|
| Encapsulation | Private rooms inside a house |
| Abstraction | A TV remote — you press buttons without knowing the circuit |
| Inheritance | A child inheriting traits from a parent |
| Polymorphism | One remote that works with different devices |

---

## Summary

OOP is not about writing more classes. It is about making code easier to read, write, scale, and maintain — and the four pillars are the tools that make that possible.
