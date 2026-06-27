# Chapter 9 – Two-Step Equations

## Table of Contents

- [Chapter 9 – Two-Step Equations](#chapter-9--two-step-equations)
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
  - [Type 1: Multiply, Then Add](#type-1-multiply-then-add)
  - [Type 2: Multiply, Then Subtract](#type-2-multiply-then-subtract)
  - [Type 3: Divide, Then Add](#type-3-divide-then-add)
  - [Type 4: Divide, Then Subtract](#type-4-divide-then-subtract)
  - [Type 5: Negative Coefficient](#type-5-negative-coefficient)
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

* Equations and Equality
* One-Step Equations
* Inverse Operations

---

## Learning Objectives

By the end of this chapter, you should be able to:

* Solve two-step equations.
* Decide which inverse operation to perform first.
* Explain why operations are undone in reverse order.
* Verify solutions by substitution.
* Solve practical engineering and business problems using two-step equations.

---

# 1. Big Picture

A **two-step equation** requires **two inverse operations** to isolate the variable.

Examples

```text
3x + 5 = 20
```

```text
4x − 8 = 12
```

```text
x/5 + 6 = 14
```

Unlike one-step equations, you cannot isolate the variable immediately.

Instead, you undo **one operation at a time**.

---

# 2. Why This Exists

Suppose your monthly cloud bill is

```text
$2,300
```

Your bill consists of

* a fixed platform fee of

```text
$500
```

plus

* compute costs of

```text
$300
```

per GPU.

If you used

```text
x
```

GPUs,

the bill is

```text
300x + 500 = 2300
```

To determine the number of GPUs:

First remove the fixed fee.

Then divide by the cost per GPU.

This naturally creates a two-step equation.

---

# 3. First Principles

Think about how the expression was built.

Example

```text
3x + 5
```

Construction order:

```text
x

↓

×3

↓

+5
```

To solve it,

reverse the process.

```text
+5

↓

×3

↓

x
```

So we undo:

1. `+5`
2. `×3`

This is why solving equations always works **from the outside in**.

---

# 4. Core Definitions & Rules

General form

```text
ax + b = c
```

Step 1

Subtract

```text
b
```

```text
ax = c − b
```

Step 2

Divide by

```text
a
```

```text
x = (c − b)/a
```

where

```text
a ≠ 0
```

---

For

```text
x/a + b = c
```

Step 1

Subtract

```text
b
```

Step 2

Multiply by

```text
a
```

---

Always verify your answer.

---

# 5. Intuition

Imagine putting on winter clothing.

You put on:

1. Shirt
2. Sweater
3. Jacket

To remove them,

you don't start with the shirt.

You reverse the order.

1. Jacket
2. Sweater
3. Shirt

Equations work exactly the same way.

Example

```text
4x + 9
```

was built by

```text
x

↓

×4

↓

+9
```

Undo it by reversing the order.

---

# 6. Engineering Insight

Many engineering equations contain both:

* a fixed component
* a variable component

Example

```text
Total Latency

=

Model Latency

+

Network Overhead
```

If model latency scales with input size,

```text
5x + 12 = 97
```

is a realistic engineering equation.

Understanding two-step equations allows engineers to isolate unknown system parameters.

---

# 7. Step-by-Step Method

Example

```text
4x + 7 = 31
```

## Step 1

Identify the outermost operation.

```text
+7
```

Undo it.

```text
4x + 7 − 7

=

31 − 7
```

Result

```text
4x = 24
```

---

## Step 2

Undo multiplication.

```text
4x/4

=

24/4
```

Answer

```text
x = 6
```

---

## Step 3

Verify.

```text
4(6)+7

=24+7

=31
```

Correct.

---

# 8. Worked Examples

## 🟢 Beginner

Solve

```text
2x + 5 = 15
```

Subtract

```text
5
```

```text
2x = 10
```

Divide

```text
2
```

```text
x = 5
```

---

## 🟢 Beginner

```text
x/4 + 3 = 8
```

Subtract

```text
3
```

```text
x/4 = 5
```

Multiply

```text
4
```

```text
x = 20
```

---

## 🟡 Intermediate

```text
6x − 9 = 45
```

```text
6x = 54

x = 9
```

---

## 🟡 Intermediate

```text
−5x + 10 = −15
```

```text
−5x = −25

x = 5
```

---

## 🔴 Advanced

```text
3(x) − 8 = 22
```

```text
3x = 30

x = 10
```

---

# 9. Real-World Examples

| Field                 | Equation             | Unknown                      |
| --------------------- | -------------------- | ---------------------------- |
| AI / ML               | `4x + 2 = 98`        | Base model accuracy          |
| MLOps                 | `5x + 12 = 97`       | Model latency per request    |
| DevOps                | `8x + 20 = 180`      | CPU usage per service        |
| Cloud                 | `300x + 500 = 2300`  | Number of GPU instances      |
| Software              | `15x + 40 = 190`     | Runtime per module           |
| Data Engineering      | `12x + 8 = 104`      | Processing time per batch    |
| Databases             | `4x + 15 = 75`       | Query time per partition     |
| Flow Metrics          | `3x + 5 = 26`        | Average work completed       |
| Entrepreneurship      | `250x + 1000 = 8500` | Products sold                |
| Investing             | `40x + 120 = 920`    | Number of shares owned       |
| Financial Engineering | `12x + 8 = 80`       | Bond valuation factor        |
| Economics             | `2x + 3 = 11`        | Growth before adjustment     |
| Game Theory           | `5x + 7 = 42`        | Strategy payoff              |
| Space                 | `180x + 200 = 1100`  | Fuel consumed per stage      |
| Defense               | `6x + 30 = 210`      | Radar scans completed        |
| Systems Thinking      | `7x + 14 = 84`       | Inventory inflow             |
| Health                | `350x + 500 = 2600`  | Calories consumed per meal   |
| Learning              | `20x + 15 = 95`      | Questions solved per session |

---

# 10. Common Mistakes

## Mistake 1

Dividing first.

Incorrect

```text
3x + 6 = 24

↓

x + 2 = 8
```

You cannot divide because

```text
3
```

does **not** multiply the entire left side.

Correct

```text
3x + 6 − 6

=

24 − 6
```

Then divide.

---

## Mistake 2

Undoing operations in the wrong order.

Remember:

Undo the **outermost** operation first.

---

## Mistake 3

Forgetting negative signs.

```text
−2x + 8 = 0
```

Correct solution

```text
−2x = −8

x = 4
```

---

## Mistake 4

Applying an operation to only one side.

Always preserve equality.

---

## Mistake 5

Not checking the final answer.

Substitute the solution back into the original equation before finishing.

# 11. Pattern Recognition

The first question is:

> **What was the last operation performed on the variable?**

Undo **that** operation first.

Think of solving as **rewinding a movie**.

---

## Type 1: Multiply, Then Add

Example

```text
3x + 8 = 20
```

Construction

```text
x

↓

×3

↓

+8
```

Undo

```text
−8

↓

÷3
```

---

## Type 2: Multiply, Then Subtract

Example

```text
5x − 12 = 18
```

Undo

```text
+12

↓

÷5
```

---

## Type 3: Divide, Then Add

Example

```text
x/4 + 7 = 13
```

Undo

```text
−7

↓

×4
```

---

## Type 4: Divide, Then Subtract

Example

```text
x/6 − 3 = 5
```

Undo

```text
+3

↓

×6
```

---

## Type 5: Negative Coefficient

Example

```text
−8x + 6 = −10
```

Undo

```text
−6

↓

÷(−8)
```

---

## Decision Tree

```text
Variable

↓

Outer operation?

↓

+a  → subtract a

−a  → add a

↓

Now isolate variable

↓

×a  → divide by a

÷a  → multiply by a
```

---

# 12. Memory Hooks

## Hook 1

> **Build forwards. Solve backwards.**

---

## Hook 2

Outside first.

Inside second.

Exactly like removing nested boxes.

```text
📦

📦

📦
```

Remove the outer box first.

---

## Hook 3

Reverse the recipe.

```text
Cook

↓

Serve

↓

Eat
```

You cannot undo eating before undoing serving.

Equations behave the same way.

---

## Hook 4

One equation.

One balance.

Every operation must happen on both sides.

---

## Hook 5

Check every answer.

Never trust mental arithmetic alone.

---

# 13. Practice Problems

## 🟢 Easy

### Problem 1

Solve

```text
2x + 9 = 25
```

---

### Problem 2

Solve

```text
x/5 + 4 = 11
```

---

### Problem 3

Solve

```text
7x − 8 = 41
```

---

## 🟡 Medium

### Problem 4

Solve

```text
−3x + 6 = 24
```

---

### Problem 5

Solve

```text
x/8 − 6 = 9
```

---

### Problem 6

Solve

```text
12x + 18 = 90
```

---

## 🔴 Hard

### Problem 7

Solve

```text
−7x − 5 = 30
```

---

### Problem 8

Solve

```text
x/0.25 + 6 = 22
```

---

### Problem 9

Solve

```text
3/5 x + 9 = 21
```

---

## ⭐ Challenge

A cloud platform charges

* a fixed monthly platform fee of

```text
$350
```

* plus

```text
$120
```

per virtual machine.

The total monthly bill is

```text
$1,670
```

Let

```text
x
```

be the number of virtual machines.

1. Write the equation.
2. Solve it.
3. Verify your answer.

---

## Solutions

### Problem 1

```text
2x = 16

x = 8
```

---

### Problem 2

```text
x/5 = 7

x = 35
```

---

### Problem 3

```text
7x = 49

x = 7
```

---

### Problem 4

```text
−3x = 18

x = −6
```

---

### Problem 5

```text
x/8 = 15

x = 120
```

---

### Problem 6

```text
12x = 72

x = 6
```

---

### Problem 7

```text
−7x = 35

x = −5
```

---

### Problem 8

```text
x/0.25 = 16

x = 4
```

---

### Problem 9

Subtract

```text
9
```

```text
3/5 x = 12
```

Multiply both sides by

```text
5/3
```

```text
x = 20
```

---

### Challenge Solution

Equation

```text
120x + 350 = 1670
```

Subtract

```text
350
```

```text
120x = 1320
```

Divide

```text
120
```

```text
x = 11
```

Verification

```text
120(11)+350

=1320+350

=1670
```

Correct.

---

# 14. Real Interview / Industry Problems

## AI / Machine Learning

A model's prediction time is

```text
4x + 8 = 52
```

where

```text
x
```

is the inference time per processing stage.

Solution

```text
4x = 44

x = 11 ms
```

---

## MLOps

A request passes through five identical processing stages plus a fixed overhead.

```text
5x + 15 = 90
```

Solve

```text
x = 15 ms
```

---

## DevOps / Platform Engineering

A Kubernetes cluster uses

```text
6x + 18 = 114
```

where

```text
x
```

is CPU usage per service.

Solution

```text
x = 16 cores
```

---

## Investing

A brokerage account contains a fixed cash reserve plus identical investments.

```text
250x + 500 = 3000
```

Solution

```text
x = 10 investments
```

---

## Space

Each rocket stage consumes

```text
180 kg
```

of fuel plus a fixed ignition burn of

```text
240 kg
```

Total fuel consumed

```text
1500 kg
```

Equation

```text
180x + 240 = 1500
```

Solution

```text
x = 7 stages
```

---

# 15. Historical Insight

Early algebraic texts often described equation solving rhetorically rather than symbolically.

A major breakthrough was recognizing that solving an equation is simply reversing the operations used to construct it.

This systematic "undoing" process was developed and formalized by mathematicians including Muhammad ibn Musa al-Khwarizmi. His methods laid the groundwork for the symbolic equation-solving techniques used today.

The modern approach of applying inverse operations one step at a time is essentially unchanged from those early foundations.

---

# 16. Connections

```text
Inverse Operations
        ↓
One-Step Equations
        ↓
Two-Step Equations
        ↓
Multi-Step Equations
        ↓
Linear Equations
        ↓
Systems of Equations
        ↓
Optimization
```

Every more advanced equation-solving method builds on the same principle:

> **Undo operations in reverse order while preserving equality.**

---

# 17. Summary

A two-step equation requires two inverse operations.

General strategy:

1. Identify the outermost operation.
2. Undo it.
3. Isolate the variable.
4. Check the solution.

For equations of the form

```text
ax+b=c
```

the solution process is

```text
ax+b=c

↓

ax=c−b

↓

x=(c−b)/a
```

Always work **from the outside in**.

---

# 18. Why This Topic Matters Later

| Future Topic          | Why This Chapter Matters                                                                       |
| --------------------- | ---------------------------------------------------------------------------------------------- |
| Multi-Step Equations  | Extends the same reverse-order strategy to more operations.                                    |
| Inequalities          | Uses identical inverse operations, with an extra rule for negative multiplication or division. |
| Literal Equations     | Rearranging formulas relies on the same principles.                                            |
| Functions             | Finding unknown inputs often involves solving two-step equations.                              |
| Physics               | Many physical formulas require isolating variables.                                            |
| AI / ML               | Performance and cost models often reduce to linear equations.                                  |
| Economics             | Linear supply and demand relationships are solved the same way.                                |
| Financial Engineering | Solving for unknown prices, rates, or payments follows the same process.                       |

---

# 19. Looking Ahead

In the next chapter we'll study **Multi-Step Equations**.

You'll learn how to solve equations involving:

* like terms,
* parentheses,
* variables on both sides,
* and multiple simplification steps.

The guiding principle remains the same:

> **Simplify first. Then isolate the variable.**

---

# Navigation

⬅️ Previous: [8_one_step_equations.md](8_one_step_equations.md)

➡️ Next: [10_multi_step_equations.md](10_multi_step_equations.md)
