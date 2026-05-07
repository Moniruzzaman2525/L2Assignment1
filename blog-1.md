# How Generics Enable Reusable, Strictly-Typed Code in TypeScript

If you have written TypeScript code enough times, you have probably faced the issue where you want your code to be reusable but also stay strictly typed. This is where **generic types** come in.

---

## The Core Problem

Without generics, you are left with two bad options:

1. Write separate functions for each type you need to handle.
2. Use `any` and lose type safety entirely.

```ts
function identity(value: any) {
  return value; // type information is lost
}
```

---

## Using Generics

Generics let you capture the type at the call site and reuse it safely throughout the function.

```ts
function identity<T>(value: T): T {
  return value; // T is inferred and preserved
}
```

---

## The Power of Generics

### 1. Reusability without duplication
One function works for all types — no copy-pasting needed.

### 2. Type safety stays intact
No need for `any`. Types are inferred and enforced automatically — no guessing required.

### 3. Stability in real projects
Widely used in APIs, hooks, utilities, and helpers across large codebases for its reliability and predictability.

A practical example — accessing object properties with full type safety:

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// Only valid keys are allowed — invalid keys cause a compile error
// The return type is always exactly correct
```

---

## Mental Model

Think of generics like placeholders — similar to function arguments, but for types.

> *"I don't know what the type is yet, but I can keep it safe and consistent throughout."*

---

## Summary

Generics let you write flexible, safe, and reusable code all at once — which is exactly what real-world TypeScript needs. Instead of choosing between flexibility and type safety, you get both.
