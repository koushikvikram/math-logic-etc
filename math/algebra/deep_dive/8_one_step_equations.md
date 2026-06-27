# Chapter 8 – One-Step Equations

## Table of Contents

- [Chapter 8 – One-Step Equations](#chapter-8--one-step-equations)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Learning Objectives](#learning-objectives)
- [1. Big Picture](#1-big-picture)
- [2. Why This Exists](#2-why-this-exists)
- [3. First Principles](#3-first-principles)
- [4. Core Definitions \& Rules](#4-core-definitions--rules)
  - [Addition Equation](#addition-equation)
  - [Subtraction Equation](#subtraction-equation)
  - [Multiplication Equation](#multiplication-equation)
  - [Division Equation](#division-equation)
  - [Verification](#verification)
- [5. Intuition](#5-intuition)
- [6. Engineering Insight](#6-engineering-insight)
- [7. Step-by-Step Method](#7-step-by-step-method)
  - [Step 1](#step-1)
  - [Step 2](#step-2)
  - [Step 3](#step-3)
  - [Step 4](#step-4)
  - [Step 5](#step-5)
- [8. Worked Examples](#8-worked-examples)
  - [🟢 Beginner](#-beginner)
  - [🟢 Beginner](#-beginner-1)
  - [🟡 Intermediate](#-intermediate)
  - [🟡 Intermediate](#-intermediate-1)
  - [🔴 Advanced](#-advanced)
- [9. Real-World Examples](#9-real-world-examples)
- [10. Common Mistakes](#10-common-mistakes)
  - [Mistake 1](#mistake-1)
  - [Mistake 2](#mistake-2)
  - [Mistake 3](#mistake-3)
  - [Mistake 4](#mistake-4)
  - [Mistake 5](#mistake-5)
- [11. Pattern Recognition](#11-pattern-recognition)
  - [Type 1: Addition Equation](#type-1-addition-equation)
  - [Type 2: Subtraction Equation](#type-2-subtraction-equation)
  - [Type 3: Multiplication Equation](#type-3-multiplication-equation)
  - [Type 4: Division Equation](#type-4-division-equation)
  - [Type 5: Negative Coefficients](#type-5-negative-coefficients)
  - [Decision Tree](#decision-tree)
- [12. Memory Hooks](#12-memory-hooks)
  - [Hook 1](#hook-1)
  - [Hook 2](#hook-2)
  - [Hook 3](#hook-3)
  - [Hook 4](#hook-4)
  - [Hook 5](#hook-5)
- [13. Practice Problems](#13-practice-problems)
  - [🟢 Easy](#-easy)
    - [Problem 1](#problem-1)
    - [Problem 2](#problem-2)
    - [Problem 3](#problem-3)
  - [🟡 Medium](#-medium)
    - [Problem 4](#problem-4)
    - [Problem 5](#problem-5)
    - [Problem 6](#problem-6)
  - [🔴 Hard](#-hard)
    - [Problem 7](#problem-7)
    - [Problem 8](#problem-8)
    - [Problem 9](#problem-9)
  - [⭐ Challenge](#-challenge)
  - [Solutions](#solutions)
    - [Problem 1](#problem-1-1)
    - [Problem 2](#problem-2-1)
    - [Problem 3](#problem-3-1)
    - [Problem 4](#problem-4-1)
    - [Problem 5](#problem-5-1)
    - [Problem 6](#problem-6-1)
    - [Problem 7](#problem-7-1)
    - [Problem 8](#problem-8-1)
    - [Problem 9](#problem-9-1)
    - [Challenge Solution](#challenge-solution)
- [14. Real Interview / Industry Problems](#14-real-interview--industry-problems)
  - [AI / Machine Learning](#ai--machine-learning)
  - [MLOps](#mlops)
  - [DevOps / Platform Engineering](#devops--platform-engineering)
  - [Investing](#investing)
  - [Space](#space)
- [15. Historical Insight](#15-historical-insight)
- [16. Connections](#16-connections)
- [17. Summary](#17-summary)
- [18. Why This Topic Matters Later](#18-why-this-topic-matters-later)
- [19. Looking Ahead](#19-looking-ahead)
- [Navigation](#navigation)

---

## Prerequisites

* Variables
* Expressions
* Equations and Equality

---

## Learning Objectives

By the end of this chapter, you should be able to:

* Solve one-step equations involving addition, subtraction, multiplication, and division.
* Explain the role of inverse operations.
* Verify solutions by substitution.
* Recognize one-step equations in engineering and science.

---

# 1. Big Picture

A **one-step equation** can be solved using **one inverse operation**.

Examples

```text
x + 5 = 12
```

```text
x - 8 = 14
```

```text
4x = 28
```

```text
x/7 = 9
```

The goal is always the same:

> **Isolate the variable.**

---

# 2. Why This Exists

Suppose an MLOps dashboard reports:

```text
Total latency = 82 ms
```

Known network latency:

```text
15 ms
```

Unknown model latency:

```text
x
```

Equation

```text
x + 15 = 82
```

To determine the model latency, remove the known contribution.

```text
x = 82 - 15

x = 67
```

One-step equations naturally arise whenever **one unknown component contributes to a known total**.

---

# 3. First Principles

Every operation has an **inverse operation**.

| Operation | Inverse |
| --------- | ------- |
| `+`       | `−`     |
| `−`       | `+`     |
| `×`       | `÷`     |
| `÷`       | `×`     |

The inverse operation **undoes** the original operation.

Example

```text
x + 9 = 17
```

Since

```text
+9
```

was applied to `x`, undo it using

```text
−9
```

```text
x + 9 − 9 = 17 − 9

x = 8
```

---

# 4. Core Definitions & Rules

## Addition Equation

```text
x + a = b
```

Solution

```text
x = b − a
```

---

## Subtraction Equation

```text
x − a = b
```

Solution

```text
x = b + a
```

---

## Multiplication Equation

```text
ax = b
```

Solution

```text
x = b/a

(a ≠ 0)
```

---

## Division Equation

```text
x/a = b
```

Solution

```text
x = ab
```

---

## Verification

Always substitute the solution back into the original equation.

---

# 5. Intuition

Imagine someone tied a knot in a rope.

To untie it,

you reverse the steps used to tie it.

Equations work the same way.

If mathematics did

```text
+7
```

you do

```text
−7
```

If mathematics did

```text
×5
```

you do

```text
÷5
```

Solving equations is simply **undoing operations**.

---

# 6. Engineering Insight

Many engineering calculations isolate an unknown quantity.

Example

```text
Power = Voltage × Current
```

If

```text
Power = 240 W

Voltage = 24 V
```

then

```text
24I = 240
```

Divide both sides by

```text
24
```

```text
I = 10 A
```

This is a one-step equation.

---

# 7. Step-by-Step Method

## Step 1

Identify the operation attached to the variable.

Example

```text
x + 9 = 15
```

Operation

```text
+9
```

---

## Step 2

Choose the inverse operation.

```text
−9
```

---

## Step 3

Apply the inverse to **both sides**.

```text
x + 9 − 9 = 15 − 9
```

---

## Step 4

Simplify.

```text
x = 6
```

---

## Step 5

Check.

```text
6 + 9 = 15
```

Correct.

---

# 8. Worked Examples

## 🟢 Beginner

```text
x + 4 = 10
```

```text
x = 6
```

---

## 🟢 Beginner

```text
x − 7 = 5
```

```text
x = 12
```

---

## 🟡 Intermediate

```text
5x = 45
```

```text
x = 9
```

---

## 🟡 Intermediate

```text
x/8 = 6
```

```text
x = 48
```

---

## 🔴 Advanced

```text
−3x = 27
```

```text
x = −9
```

---

# 9. Real-World Examples

| Field                 | Equation          | Unknown                     |
| --------------------- | ----------------- | --------------------------- |
| AI / ML               | `x + 0.12 = 0.91` | Model accuracy contribution |
| MLOps                 | `x + 18 = 74`     | Model latency               |
| DevOps                | `x + 6 = 22`      | CPU used by application     |
| Cloud                 | `x + 450 = 1800`  | Compute cost                |
| Software              | `x + 15 = 83`     | Execution time              |
| Data Engineering      | `x + 9 = 42`      | ETL duration                |
| Databases             | `x + 8 = 31`      | Query execution time        |
| Flow Metrics          | `x + 3 = 18`      | Active work days            |
| Entrepreneurship      | `x − 1200 = 6800` | Revenue                     |
| Investing             | `4x = 320`        | Share price                 |
| Financial Engineering | `x/5 = 8%`        | Portfolio allocation        |
| Economics             | `x + 2 = 5%`      | Inflation before policy     |
| Game Theory           | `x + 15 = 42`     | Strategy payoff             |
| Space                 | `x + 250 = 1200`  | Remaining fuel              |
| Defense               | `3x = 180`        | Radar scan sectors          |
| Systems Thinking      | `x + 40 = 100`    | Initial stock               |
| Health                | `x + 350 = 2200`  | Calories consumed           |
| Learning              | `x + 18 = 50`     | Questions already solved    |

---

# 10. Common Mistakes

## Mistake 1

Applying the inverse to only one side.

Incorrect

```text
x + 5 = 12

↓

x = 12 − 5
```

without showing the operation on both sides.

Correct

```text
x + 5 − 5 = 12 − 5

x = 7
```

---

## Mistake 2

Using the wrong inverse.

Incorrect

```text
x + 6 = 10

↓

x = 10 + 6
```

Correct

```text
x = 10 − 6
```

---

## Mistake 3

Multiplying instead of dividing.

```text
4x = 20
```

Correct

```text
x = 20/4 = 5
```

---

## Mistake 4

Forgetting negative signs.

```text
−5x = 25
```

Correct

```text
x = −5
```

---

## Mistake 5

Skipping the check.

Always substitute your answer into the original equation.

# 11. Pattern Recognition

The first question is:

> **What operation is attached to the variable?**

Once you identify that operation, apply its inverse.

---

## Type 1: Addition Equation

Example

```text
x + 9 = 17
```

Attached operation

```text
+9
```

Inverse

```text
−9
```

Solution

```text
x = 8
```

---

## Type 2: Subtraction Equation

Example

```text
x − 4 = 15
```

Attached operation

```text
−4
```

Inverse

```text
+4
```

Solution

```text
x = 19
```

---

## Type 3: Multiplication Equation

Example

```text
7x = 56
```

Attached operation

```text
×7
```

Inverse

```text
÷7
```

Solution

```text
x = 8
```

---

## Type 4: Division Equation

Example

```text
x/6 = 9
```

Attached operation

```text
÷6
```

Inverse

```text
×6
```

Solution

```text
x = 54
```

---

## Type 5: Negative Coefficients

Example

```text
−8x = 40
```

Inverse

```text
÷(−8)
```

Solution

```text
x = −5
```

---

## Decision Tree

```text
Variable

↓

Attached operation?

↓

+  →  subtract

−  →  add

×  →  divide

÷  →  multiply
```

---

# 12. Memory Hooks

## Hook 1

> **Undo, don't redo.**

---

## Hook 2

Every operation has an opposite.

| Original | Undo with |
| -------- | --------- |
| `+`      | `−`       |
| `−`      | `+`       |
| `×`      | `÷`       |
| `÷`      | `×`       |

---

## Hook 3

Think like an engineer debugging a system.

If one operation created the result,

the inverse operation removes it.

---

## Hook 4

The equation is a balance.

Never change only one side.

---

## Hook 5

Always finish with

> **Check your answer.**

---

# 13. Practice Problems

## 🟢 Easy

### Problem 1

Solve

```text
x + 8 = 21
```

---

### Problem 2

Solve

```text
x − 15 = 9
```

---

### Problem 3

Solve

```text
6x = 42
```

---

## 🟡 Medium

### Problem 4

Solve

```text
x/9 = 8
```

---

### Problem 5

Solve

```text
−4x = 36
```

---

### Problem 6

Solve

```text
x + 2.5 = 7.8
```

---

## 🔴 Hard

### Problem 7

Solve

```text
−x = 12
```

---

### Problem 8

Solve

```text
x/0.5 = 18
```

---

### Problem 9

Solve

```text
3/4 x = 24
```

---

## ⭐ Challenge

An AI inference request spends

```text
96 ms
```

in total.

Known overhead:

```text
31 ms
```

Model execution time:

```text
x
```

Write the equation.

Solve it.

Verify your answer.

---

## Solutions

### Problem 1

```text
x = 13
```

---

### Problem 2

```text
x = 24
```

---

### Problem 3

```text
x = 7
```

---

### Problem 4

```text
x = 72
```

---

### Problem 5

```text
x = −9
```

---

### Problem 6

```text
x = 5.3
```

---

### Problem 7

```text
x = −12
```

---

### Problem 8

```text
x = 9
```

---

### Problem 9

Multiply both sides by

```text
4/3
```

```text
x = 32
```

---

### Challenge Solution

Equation

```text
x + 31 = 96
```

Subtract

```text
31
```

```text
x = 65
```

Verification

```text
65 + 31 = 96
```

Correct.

---

# 14. Real Interview / Industry Problems

## AI / Machine Learning

A classifier's total accuracy is

```text
94%
```

A preprocessing improvement contributes

```text
3%
```

The base model contributes

```text
x
```

Equation

```text
x + 3 = 94
```

Solution

```text
x = 91%
```

---

## MLOps

Total inference latency

```text
82 ms
```

Queue latency

```text
11 ms
```

Model latency

```text
x
```

Equation

```text
x + 11 = 82
```

Solution

```text
x = 71 ms
```

---

## DevOps / Platform Engineering

A server uses

```text
24 CPU cores
```

Database processes consume

```text
8 cores
```

Application usage

```text
x
```

Equation

```text
x + 8 = 24
```

Solution

```text
x = 16 cores
```

---

## Investing

Four identical shares cost

```text
$480
```

Equation

```text
4x = 480
```

Solution

```text
x = $120
```

---

## Space

A spacecraft carried

```text
1,400 kg
```

of fuel.

After burning

```text
450 kg
```

the remaining fuel is

```text
x
```

Equation

```text
x + 450 = 1400
```

Solution

```text
x = 950 kg
```

---

# 15. Historical Insight

One-step equations are among the oldest algebraic problems.

Ancient civilizations used them to solve practical questions involving:

* trade,
* taxation,
* land measurement,
* wages,
* inheritance,
* and construction.

The systematic method of solving equations by applying inverse operations was refined by mathematicians such as Muhammad ibn Musa al-Khwarizmi, whose work laid the foundations of modern algebra. The word **algebra** itself comes from the Arabic term **al-jabr**, meaning "restoration" or "reunion."

---

# 16. Connections

```text
Equality
      ↓
Inverse Operations
      ↓
One-Step Equations
      ↓
Two-Step Equations
      ↓
Multi-Step Equations
      ↓
Systems of Equations
      ↓
Optimization
```

Nearly every equation-solving technique in algebra builds on the same balancing principle introduced here.

---

# 17. Summary

A one-step equation requires only one inverse operation to isolate the variable.

General strategy:

1. Identify the operation attached to the variable.
2. Choose its inverse.
3. Apply it to **both** sides.
4. Simplify.
5. Check your answer.

Core idea:

> **Undo the operation while preserving equality.**

---

# 18. Why This Topic Matters Later

| Future Topic          | Why This Chapter Matters                                                                     |
| --------------------- | -------------------------------------------------------------------------------------------- |
| Two-Step Equations    | Apply inverse operations multiple times.                                                     |
| Multi-Step Equations  | Extend the same balancing principle.                                                         |
| Inequalities          | Solve similarly, with one additional rule when multiplying or dividing by a negative number. |
| Systems of Equations  | Each equation may require one-step or multi-step manipulation.                               |
| Functions             | Finding unknown inputs often reduces to solving equations.                                   |
| Physics               | Rearranging physical formulas starts with one-step equations.                                |
| AI / ML               | Parameter estimation often involves isolating unknown quantities.                            |
| Financial Engineering | Pricing and interest formulas require solving for unknown variables.                         |

---

# 19. Looking Ahead

In the next chapter we'll study **Two-Step Equations**.

Instead of undoing one operation,

we'll learn how to undo **multiple operations in the correct order**.

For example,

```text
3x + 5 = 26
```

requires:

1. Undo `+5`.
2. Undo `×3`.

This introduces the idea of **working from the outside in**, which is one of the central patterns in algebra.

---

# Navigation

⬅️ Previous: [7_equations_and_equality.md](7_equations_and_equality.md)

➡️ Next: [9_two_step_equations.md](9_two_step_equations.md)
