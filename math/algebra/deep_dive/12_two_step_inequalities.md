# Chapter 12 – Two-Step Inequalities

## Table of Contents

- [Chapter 12 – Two-Step Inequalities](#chapter-12--two-step-inequalities)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Learning Objectives](#learning-objectives)
- [1. Big Picture](#1-big-picture)
- [2. Why This Exists](#2-why-this-exists)
- [3. First Principles](#3-first-principles)
- [4. Core Definitions \& Rules](#4-core-definitions--rules)
- [5. Intuition](#5-intuition)
- [6. Engineering Insight](#6-engineering-insight)
- [7. Step-by-Step Method](#7-step-by-step-method)
  - [Step 1](#step-1)
  - [Step 2](#step-2)
  - [Step 3](#step-3)
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
  - [Type 1: Add, Then Multiply](#type-1-add-then-multiply)
  - [Type 2: Subtract, Then Divide](#type-2-subtract-then-divide)
  - [Type 3: Negative Coefficient](#type-3-negative-coefficient)
  - [Type 4: Decimal Coefficient](#type-4-decimal-coefficient)
  - [Type 5: Fraction Coefficient](#type-5-fraction-coefficient)
  - [Universal Workflow](#universal-workflow)
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

* One-Step Equations
* Two-Step Equations
* One-Step Inequalities
* Number Line

---

## Learning Objectives

By the end of this chapter, you should be able to:

* Solve two-step inequalities.
* Determine when to reverse the inequality symbol.
* Graph solutions on a number line.
* Verify solutions using test values.
* Apply inequalities to engineering and business constraints.

---

# 1. Big Picture

A **two-step inequality** combines two important ideas:

* solving a two-step equation,
* solving an inequality.

Examples

```text
3x + 5 > 20
```

```text
x/4 − 7 ≤ 5
```

```text
−2x + 6 ≥ 10
```

The goal is still:

> **Isolate the variable.**

But remember:

> **If you multiply or divide by a negative number, reverse the inequality.**

---

# 2. Why This Exists

Suppose a cloud platform guarantees

```text
Total Latency < 100 ms
```

The network contributes

```text
20 ms
```

The model processes

```text
x
```

requests, each taking

```text
4 ms
```

Requirement

```text
4x + 20 < 100
```

Subtract

```text
20
```

```text
4x < 80
```

Divide

```text
4
```

```text
x < 20
```

The platform can process **fewer than 20 requests** within the latency budget.

---

# 3. First Principles

Two-step inequalities follow the same workflow as two-step equations.

```text
Undo addition/subtraction

↓

Undo multiplication/division

↓

Reverse direction only if dividing or multiplying by a negative
```

The balancing principle still holds.

Only one new rule exists.

---

# 4. Core Definitions & Rules

General form

```text
ax+b<c
```

Step 1

Subtract

```text
b
```

```text
ax<c−b
```

Step 2

Divide by

```text
a
```

If

```text
a>0
```

keep the inequality.

If

```text
a<0
```

reverse it.

---

Example

```text
−4x+8≤20
```

Subtract

```text
8
```

```text
−4x≤12
```

Divide by

```text
−4
```

Reverse

```text
x≥−3
```

---

# 5. Intuition

Imagine walking along a number line.

Positive multiplication stretches the line.

Negative multiplication stretches **and flips** it.

Example

Start with

```text
2<5
```

Multiply both sides by

```text
−3
```

```text
−6

?

−15
```

The correct relationship is

```text
−6>−15
```

The direction reversed because the number line flipped.

---

# 6. Engineering Insight

Almost every engineering requirement is an inequality.

Examples

Cloud

```text
Cost≤Budget
```

AI

```text
Accuracy≥95%
```

Space

```text
Payload≤Capacity
```

Security

```text
Response Time<5 s
```

Most real-world engineering is about staying **inside acceptable limits**.

---

# 7. Step-by-Step Method

Example

```text
5x+10<45
```

## Step 1

Subtract

```text
10
```

```text
5x<35
```

---

## Step 2

Divide by

```text
5
```

```text
x<7
```

---

Example

```text
−3x+9≥0
```

Subtract

```text
9
```

```text
−3x≥−9
```

Divide by

```text
−3
```

Reverse

```text
x≤3
```

---

## Step 3

Verify using a test value.

Example

Choose

```text
x=2
```

```text
−3(2)+9

=3

≥0
```

Correct.

---

# 8. Worked Examples

## 🟢 Beginner

Solve

```text
2x+6>18
```

```text
2x>12

x>6
```

---

## 🟢 Beginner

```text
x/3−4≤5
```

```text
x/3≤9

x≤27
```

---

## 🟡 Intermediate

```text
7x−8≥34
```

```text
7x≥42

x≥6
```

---

## 🟡 Intermediate

```text
−5x+15<0
```

```text
−5x<−15

x>3
```

---

## 🔴 Advanced

```text
−2x−8≥12
```

```text
−2x≥20

x≤−10
```

---

# 9. Real-World Examples

| Field                 | Inequality      | Interpretation         |
| --------------------- | --------------- | ---------------------- |
| AI / ML               | `4x+2≥98`       | Minimum model score    |
| MLOps                 | `5x+10<85`      | Latency budget         |
| DevOps                | `6x+15≤75`      | CPU allocation limit   |
| Cloud                 | `250x+500≤2500` | Monthly spending limit |
| Software              | `8x+20<180`     | Runtime constraint     |
| Data Engineering      | `10x+30≤150`    | Pipeline duration      |
| Databases             | `3x+8<50`       | Query latency          |
| Flow Metrics          | `2x+4≤20`       | Cycle time goal        |
| Entrepreneurship      | `300x+900≥6000` | Revenue target         |
| Investing             | `50x+100≤1000`  | Investment budget      |
| Financial Engineering | `20x+5≤40`      | Risk limit             |
| Economics             | `2x+1<5`        | Inflation target       |
| Game Theory           | `4x+3≥27`       | Minimum payoff         |
| Space                 | `180x+240≤1680` | Fuel budget            |
| Defense               | `7x+14≤84`      | Resource limit         |
| Systems Thinking      | `6x+12≥72`      | Inventory target       |
| Health                | `400x+300≤2300` | Daily calorie budget   |
| Learning              | `15x+10≥100`    | Practice goal          |

---

# 10. Common Mistakes

## Mistake 1

Forgetting to reverse the inequality after dividing by a negative.

Incorrect

```text
−4x<20

↓

x<−5
```

Correct

```text
x>−5
```

---

## Mistake 2

Reversing the inequality after dividing by a **positive** number.

Don't.

---

## Mistake 3

Applying operations to only one side.

Always preserve the comparison.

---

## Mistake 4

Using the wrong endpoint on the number line.

```text
<
```

and

```text
>
```

→ open circle.

```text
≤
```

and

```text
≥
```

→ closed circle.

---

## Mistake 5

Not checking with a test value.

A quick substitution catches many mistakes.

# 11. Pattern Recognition

Before solving any two-step inequality, ask yourself two questions:

1. **What operation is attached to the variable?**
2. **Will I multiply or divide by a negative number?**

These two questions determine the entire solution.

---

## Type 1: Add, Then Multiply

Example

```text
4x + 8 > 36
```

Workflow

```text
−8

↓

4x > 28

↓

÷4

↓

x > 7
```

No reversal.

---

## Type 2: Subtract, Then Divide

Example

```text
x/5 − 3 ≤ 8
```

Workflow

```text
+3

↓

x/5 ≤ 11

↓

×5

↓

x ≤ 55
```

No reversal.

---

## Type 3: Negative Coefficient

Example

```text
−6x + 12 ≥ 0
```

Workflow

```text
−12

↓

−6x ≥ −12

↓

÷(−6)

↓

Reverse

↓

x ≤ 2
```

---

## Type 4: Decimal Coefficient

Example

```text
0.5x + 4 < 9
```

Workflow

```text
−4

↓

0.5x < 5

↓

÷0.5

↓

x < 10
```

---

## Type 5: Fraction Coefficient

Example

```text
x/8 + 7 ≥ 10
```

Workflow

```text
−7

↓

x/8 ≥ 3

↓

×8

↓

x ≥ 24
```

---

## Universal Workflow

```text
Identify operation

↓

Undo addition/subtraction

↓

Undo multiplication/division

↓

Negative?

↓

Yes → Reverse

↓

Check

↓

Graph
```

---

# 12. Memory Hooks

## Hook 1

> **Undo from the outside in.**

Exactly like two-step equations.

---

## Hook 2

Positive number?

Keep the inequality.

Negative number?

Flip the inequality.

---

## Hook 3

Imagine flipping a ruler upside down.

Left and right exchange places.

Negative multiplication does the same thing to the number line.

---

## Hook 4

Always graph the final answer.

Seeing the solution visually helps catch mistakes.

---

## Hook 5

When unsure,

test a number.

If it works in the original inequality,

your solution is probably correct.

---

# 13. Practice Problems

## 🟢 Easy

### Problem 1

Solve

```text
3x + 6 < 24
```

---

### Problem 2

Solve

```text
x/4 + 5 ≥ 9
```

---

### Problem 3

Solve

```text
8x − 16 ≤ 40
```

---

## 🟡 Medium

### Problem 4

Solve

```text
−4x + 12 > −8
```

---

### Problem 5

Solve

```text
x/6 − 8 < 4
```

---

### Problem 6

Solve

```text
1.5x + 9 ≥ 24
```

---

## 🔴 Hard

### Problem 7

Solve

```text
−0.25x + 10 ≤ 6
```

---

### Problem 8

Solve

```text
−7x − 14 > 28
```

---

### Problem 9

Graph

```text
x < −5
```

---

## ⭐ Challenge

A cloud provider charges

```text
$120
```

per GPU instance plus a fixed monitoring cost of

```text
$400
```

Your monthly budget is

```text
$2,200
```

Let

```text
x
```

be the number of GPU instances.

1. Write the inequality.
2. Solve it.
3. Explain the meaning of the solution.

---

## Solutions

### Problem 1

```text
3x < 18

x < 6
```

---

### Problem 2

```text
x/4 ≥ 4

x ≥ 16
```

---

### Problem 3

```text
8x ≤ 56

x ≤ 7
```

---

### Problem 4

```text
−4x > −20

x < 5
```

---

### Problem 5

```text
x/6 < 12

x < 72
```

---

### Problem 6

```text
1.5x ≥ 15

x ≥ 10
```

---

### Problem 7

```text
−0.25x ≤ −4

x ≥ 16
```

---

### Problem 8

```text
−7x > 42

x < −6
```

---

### Problem 9

```text
<====================○---------------->

                    −5
```

(Open circle at **−5**, shade to the left.)

---

### Challenge Solution

Write the inequality.

```text
120x + 400 ≤ 2200
```

Subtract

```text
400
```

```text
120x ≤ 1800
```

Divide by

```text
120
```

```text
x ≤ 15
```

Interpretation:

You can run **at most 15 GPU instances** without exceeding the monthly budget.

---

# 14. Real Interview / Industry Problems

## AI / Machine Learning

A model is approved only if

```text
4x + 6 ≥ 98
```

where

```text
x
```

is the base accuracy before post-processing.

Solution

```text
4x ≥ 92

x ≥ 23
```

---

## MLOps

An inference service must satisfy

```text
5x + 20 < 95
```

where

```text
x
```

is latency per processing stage.

Solution

```text
5x < 75

x < 15 ms
```

---

## DevOps / Platform Engineering

CPU usage satisfies

```text
6x + 12 ≤ 72
```

Solution

```text
6x ≤ 60

x ≤ 10 cores
```

---

## Investing

A monthly investment plan satisfies

```text
250x + 500 ≤ 3000
```

Solution

```text
250x ≤ 2500

x ≤ 10 contributions
```

---

## Space

Payload must satisfy

```text
180x + 240 ≤ 1500
```

Solution

```text
180x ≤ 1260

x ≤ 7
```

---

# 15. Historical Insight

Inequalities became increasingly important as mathematics expanded beyond solving equations into optimization and decision-making.

Today, engineers often ask questions such as:

* What is the **maximum** safe load?
* What is the **minimum** required accuracy?
* What is the **largest** acceptable latency?

These are all inequality questions.

Modern optimization, operations research, and machine learning rely heavily on inequalities because they define the boundaries of acceptable solutions rather than a single exact answer.

---

# 16. Connections

```text
Equations
      ↓
Inequalities
      ↓
Two-Step Inequalities
      ↓
Compound Inequalities
      ↓
Linear Programming
      ↓
Convex Optimization
      ↓
Machine Learning
```

Many optimization algorithms search for the **best solution that satisfies a collection of inequalities**.

---

# 17. Summary

A two-step inequality is solved almost exactly like a two-step equation.

General strategy:

1. Undo addition or subtraction.
2. Undo multiplication or division.
3. Reverse the inequality **only** if multiplying or dividing by a negative number.
4. Verify with a test value.
5. Graph the solution.

Remember:

> **Negative operation → Reverse the inequality.**

---

# 18. Why This Topic Matters Later

| Future Topic                | Why This Chapter Matters                                                    |
| --------------------------- | --------------------------------------------------------------------------- |
| Compound Inequalities       | Combines multiple inequality conditions.                                    |
| Absolute Value Inequalities | Requires solving multiple inequalities.                                     |
| Linear Programming          | Optimization problems are built from systems of inequalities.               |
| Convex Optimization         | Feasible regions are defined by inequalities.                               |
| AI / ML                     | Training often optimizes an objective subject to constraints.               |
| Economics                   | Budgets, production limits, and policy goals are expressed as inequalities. |
| Engineering                 | Nearly every design specification is an inequality.                         |
| Operations Research         | Capacity, scheduling, and resource allocation rely on inequalities.         |

---

# 19. Looking Ahead

Congratulations!

You have now completed the **Core Linear Algebra Foundations** section of this book.

From here, you'll build on these ideas in topics such as:

* the coordinate plane,
* linear functions,
* slope,
* systems of equations,
* and eventually quadratic equations.

You'll discover that almost everything in algebra is an extension of the concepts you've already mastered:

* variables,
* expressions,
* equations,
* inverse operations,
* and inequalities.

---

# Navigation

⬅️ Previous: [11_one_step_inequalities.md](11_one_step_inequalities.md)
