# Chapter 6 – Algebraic Expressions and Order of Operations

## Table of Contents

- [Chapter 6 – Algebraic Expressions and Order of Operations](#chapter-6--algebraic-expressions-and-order-of-operations)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Learning Objectives](#learning-objectives)
- [1. Big Picture](#1-big-picture)
  - [Expression vs Equation](#expression-vs-equation)
- [2. Why This Exists](#2-why-this-exists)
- [3. First Principles](#3-first-principles)
  - [Numbers](#numbers)
  - [Variables](#variables)
  - [Operations](#operations)
  - [Grouping Symbols](#grouping-symbols)
- [4. Core Definitions \& Rules](#4-core-definitions--rules)
  - [Expression](#expression)
  - [Equation](#equation)
  - [Evaluate](#evaluate)
  - [Order of Operations](#order-of-operations)
- [5. Intuition](#5-intuition)
- [6. Engineering Insight](#6-engineering-insight)
- [7. Step-by-Step Method](#7-step-by-step-method)
  - [Evaluating an Expression](#evaluating-an-expression)
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
  - [Type 1: Expression](#type-1-expression)
  - [Type 2: Equation](#type-2-equation)
  - [Type 3: Formula](#type-3-formula)
  - [Type 4: Numerical Expression](#type-4-numerical-expression)
  - [Type 5: Algebraic Expression](#type-5-algebraic-expression)
  - [Pattern for Order of Operations](#pattern-for-order-of-operations)
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
  - [Entrepreneurship](#entrepreneurship)
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

* Arithmetic
* Fractions
* Variables
* Combining Like Terms

---

## Learning Objectives

By the end of this chapter, you should be able to:

* Explain what an algebraic expression is.
* Distinguish expressions from equations.
* Evaluate expressions by substitution.
* Apply the order of operations correctly.
* Read and simplify expressions with confidence.

---

# 1. Big Picture

An **expression** describes a calculation.

Examples

```text
3x+5
```

```text
2(a+b)
```

```text
5x²−7
```

Notice something important.

There is **no equals sign**.

Expressions describe quantities.

They do **not** state that two quantities are equal.

That is the job of an **equation**.

---

## Expression vs Equation

Expression

```text
3x+5
```

Equation

```text
3x+5=20
```

Think of it this way:

* **Expression** → recipe.
* **Equation** → claim.

---

# 2. Why This Exists

Suppose you're building a cloud cost calculator.

Instead of computing one month's bill,

you write

```text
Cost

=

Storage

+

Compute

+

Network
```

If storage changes,

the expression automatically produces a new answer.

Expressions allow us to describe formulas that work for infinitely many situations.

---

# 3. First Principles

An expression is built from four ingredients.

## Numbers

```text
5

−2

3.7
```

---

## Variables

```text
x

y

t
```

---

## Operations

```text
+

−

×

÷

^
```

---

## Grouping Symbols

```text
()

[]

{}
```

Combine these together.

Example

```text
5x²+3
```

That is an expression.

---

# 4. Core Definitions & Rules

## Expression

A mathematical phrase without an equals sign.

---

## Equation

A mathematical statement containing

```text
=
```

---

## Evaluate

Replace variables with numbers.

Example

```text
2x+3

x=4
```

```text
2(4)+3

=11
```

---

## Order of Operations

1. Parentheses
2. Exponents
3. Multiplication and Division (left to right)
4. Addition and Subtraction (left to right)

Example

```text
2+3×4
```

Multiply first.

```text
2+12

=14
```

---

# 5. Intuition

Think of an expression as a recipe.

Example

```text
2x+5
```

The recipe says:

1. Take x.
2. Double it.
3. Add five.

If

```text
x=3
```

the recipe produces

```text
11
```

If

```text
x=20
```

the same recipe produces

```text
45
```

The recipe stays the same.

Only the ingredients change.

---

# 6. Engineering Insight

Software engineers constantly write algebraic expressions.

Python

```python
latency = network + database + application
```

This is simply an algebraic expression written in code.

Machine learning models are also expressions.

Example

```text
ŷ=wx+b
```

Changing

```text
w

or

x
```

changes the prediction.

Understanding expressions makes programming and mathematical modeling much easier.

---

# 7. Step-by-Step Method

## Evaluating an Expression

Step 1

Substitute values.

Example

```text
3x+7

x=5
```

↓

```text
3(5)+7
```

---

Step 2

Evaluate parentheses.

---

Step 3

Evaluate exponents.

---

Step 4

Multiply and divide.

---

Step 5

Add and subtract.

---

Answer

```text
22
```

---

# 8. Worked Examples

## 🟢 Beginner

Evaluate

```text
x+7

x=4
```

Answer

```text
11
```

---

## 🟢 Beginner

```text
2+5×6
```

```text
32
```

---

## 🟡 Intermediate

```text
3(x+2)

x=5
```

```text
3(7)

=21
```

---

## 🟡 Intermediate

```text
4²+3×2
```

```text
16+6

=22
```

---

## 🔴 Advanced

Evaluate

```text
2(x²−3)+4

x=5
```

```text
2(25−3)+4

2(22)+4

44+4

48
```

---

# 9. Real-World Examples

| Field                 | Expression                                  | Meaning                 |
| --------------------- | ------------------------------------------- | ----------------------- |
| AI / ML               | `ŷ = wx + b`                                | Linear prediction       |
| MLOps                 | `Latency = Model + Network + Queue`         | Total inference latency |
| DevOps                | `CPU = App + Database + Background Jobs`    | CPU utilization model   |
| Cloud Computing       | `Cost = Compute + Storage + Network`        | Monthly cloud bill      |
| Software Engineering  | `Runtime = Parse + Execute + I/O`           | Program runtime         |
| Data Engineering      | `Pipeline = Extract + Transform + Load`     | Pipeline duration       |
| Databases             | `Total Time = CPU + Disk + Network`         | Query latency           |
| Flow Metrics          | `Cycle Time = Wait + Work`                  | Delivery performance    |
| Entrepreneurship      | `Profit = Revenue − Cost`                   | Business profit         |
| Investing             | `Return = Final − Initial`                  | Investment gain         |
| Financial Engineering | `Value = Cash Flow ÷ (1+r)^n`               | Discounted cash flow    |
| Economics             | `GDP = C + I + G + NX`                      | Gross Domestic Product  |
| Game Theory           | `Payoff = Reward − Cost`                    | Strategy evaluation     |
| Space                 | `Distance = Speed × Time`                   | Mission planning        |
| Defense               | `Detection = Sensor + Radar + Intelligence` | Threat assessment       |
| Systems Thinking      | `Stock = Inflow − Outflow`                  | Stock-and-flow model    |
| Health                | `Calories = Intake − Burned`                | Energy balance          |
| Learning              | `Score = Correct ÷ Total`                   | Assessment score        |

---

# 10. Common Mistakes

## Mistake 1

Ignoring parentheses.

Incorrect

```text
2(3+4)

=6+4
```

Correct

```text
14
```

---

## Mistake 2

Multiplying before evaluating exponents.

Incorrect

```text
3×2²

=6²
```

Correct

```text
3×4

=12
```

---

## Mistake 3

Adding before multiplying.

Incorrect

```text
2+3×4

=20
```

Correct

```text
14
```

---

## Mistake 4

Confusing an expression with an equation.

Expression

```text
3x+2
```

Equation

```text
3x+2=11
```

---

## Mistake 5

Substituting incorrectly.

Example

```text
2x

x=5
```

Incorrect

```text
25
```

Correct

```text
2×5

=10
```

# 11. Pattern Recognition

Whenever you see an algebra problem, first identify **what kind of mathematical object you're looking at**.

## Type 1: Expression

No equals sign.

Example

```text
3x+5
```

Question:

> Evaluate?

> Simplify?

> Expand?

---

## Type 2: Equation

Contains an equals sign.

Example

```text
3x+5=17
```

Question:

> Solve for x.

---

## Type 3: Formula

Describes a relationship.

Example

```text
d=st
```

Question:

> Substitute known values.

---

## Type 4: Numerical Expression

Contains only numbers.

Example

```text
3+5×8−2
```

Use the Order of Operations.

---

## Type 5: Algebraic Expression

Contains variables.

Example

```text
4x²+3x−7
```

Substitute values if given.

Otherwise simplify only.

---

## Pattern for Order of Operations

Always work in this order:

```text
Parentheses

↓

Exponents

↓

Multiplication & Division

↓

Addition & Subtraction
```

Notice:

Multiplication and division have **equal priority**.

Addition and subtraction also have **equal priority**.

Always evaluate **left to right**.

Example

```text
24÷6×2
```

Correct

```text
4×2

=8
```

Not

```text
24÷12

=2
```

---

# 12. Memory Hooks

## Hook 1

Expression

> Recipe

Equation

> Claim

---

## Hook 2

Variables are placeholders.

Substitute first.

Calculate second.

---

## Hook 3

PEMDAS is a priority list—not a sequence of independent steps.

Think:

```text
Parentheses

↓

Exponents

↓

Multiply OR Divide

↓

Add OR Subtract
```

Not

```text
Multiply

THEN

Divide
```

---

## Hook 4

Left to right matters.

```text
20÷5×2

=8
```

not

```text
2
```

---

## Hook 5

An expression has **one value** once every variable is known.

---

# 13. Practice Problems

## 🟢 Easy

### Problem 1

Evaluate

```text
5+4×3
```

---

### Problem 2

Evaluate

```text
2x+7

x=4
```

---

### Problem 3

Evaluate

```text
5²−9
```

---

## 🟡 Medium

### Problem 4

Evaluate

```text
3(x+4)

x=6
```

---

### Problem 5

Evaluate

```text
4²+18÷3
```

---

### Problem 6

Evaluate

```text
2x²−3

x=5
```

---

## 🔴 Hard

### Problem 7

Evaluate

```text
5(3+2²)
```

---

### Problem 8

Evaluate

```text
3(x²−2)+4

x=7
```

---

### Problem 9

Evaluate

```text
18÷3×2+5²
```

---

## ⭐ Challenge

A cloud platform models monthly cost as

```text
Cost

=

2S

+

5C

+

N
```

where

```text
S

= Storage Units

C

= Compute Units

N

= Networking Cost
```

If

```text
S=8

C=12

N=15
```

calculate the monthly cost.

---

## Solutions

### Problem 1

```text
5+12

=17
```

---

### Problem 2

```text
2(4)+7

=15
```

---

### Problem 3

```text
25−9

=16
```

---

### Problem 4

```text
3(10)

=30
```

---

### Problem 5

```text
16+6

=22
```

---

### Problem 6

```text
2(25)−3

=47
```

---

### Problem 7

```text
5(3+4)

=35
```

---

### Problem 8

```text
3(49−2)+4

=145
```

---

### Problem 9

```text
18÷3×2+25

6×2+25

12+25

37
```

---

### Challenge Solution

```text
2(8)

+

5(12)

+

15

=

16

+

60

+

15

=

91
```

---

# 14. Real Interview / Industry Problems

## AI / Machine Learning

A linear model predicts

```text
ŷ

=

3x

+

7
```

For

```text
x=12
```

Prediction

```text
43
```

This is exactly how inference works in many simple ML models.

---

## MLOps

Total inference latency

```text
Latency

=

Model

+

Queue

+

Network
```

Suppose

```text
45

+

18

+

12
```

Total

```text
75 ms
```

---

## DevOps / Platform Engineering

Monthly cloud cost

```text
Compute

+

Storage

+

Bandwidth
```

Example

```text
1800

+

450

+

250

=

2500
```

---

## Entrepreneurship

Profit

```text
Revenue−Expenses
```

Revenue

```text
$82,000
```

Expenses

```text
$61,500
```

Profit

```text
$20,500
```

---

## Investing

Portfolio value

```text
Stocks

+

Bonds

+

Cash
```

Expressions like these become the foundation of portfolio optimization.

---

## Space

Mission duration

```text
Time

=

Distance

÷

Speed
```

The same expression works for every mission.

---

# 15. Historical Insight

Long before symbolic algebra, mathematical expressions were written entirely in words.

For example, instead of writing

```text
3x+5
```

a mathematician might write:

> "Three times the unknown quantity increased by five."

The widespread adoption of symbolic notation by mathematicians such as François Viète and René Descartes made mathematics dramatically more compact and easier to manipulate.

Today, nearly every programming language, spreadsheet, engineering simulator, and scientific calculator relies on symbolic expressions.

---

# 16. Connections

```text
Variables
      ↓
Expressions
      ↓
Order of Operations
      ↓
Equations
      ↓
Functions
      ↓
Calculus
      ↓
Machine Learning
```

Expressions are the building blocks for almost every mathematical model.

---

# 17. Summary

An expression is a mathematical recipe.

An equation states that two expressions are equal.

Core workflow:

1. Substitute values.
2. Apply the Order of Operations.
3. Simplify.

Remember:

```text
Parentheses

↓

Exponents

↓

Multiplication & Division

↓

Addition & Subtraction
```

Evaluate multiplication/division **left to right**, then addition/subtraction **left to right**.

---

# 18. Why This Topic Matters Later

| Future Topic          | Why This Chapter Matters                                       |
| --------------------- | -------------------------------------------------------------- |
| Equations             | Every equation contains expressions on both sides.             |
| Inequalities          | Expressions must be simplified before solving.                 |
| Polynomials           | Polynomials are algebraic expressions.                         |
| Factoring             | Begins with simplifying expressions.                           |
| Functions             | Functions are expressions with named variables.                |
| Calculus              | Derivatives and integrals operate on expressions.              |
| Machine Learning      | Models are mathematical expressions mapping inputs to outputs. |
| DevOps                | Capacity, latency, and cost models are expressions.            |
| Economics             | Utility, supply, and demand are expressions.                   |
| Financial Engineering | Pricing formulas are algebraic expressions.                    |

---

# 19. Looking Ahead

Next we'll study **Equations and Equality**.

You'll learn that an equation is not just an expression with an equals sign—it is a statement that two expressions represent the same value.

That idea leads directly to solving equations, inequalities, and eventually systems of equations.

---

# Navigation

⬅️ Previous: [Chapter 5 – Combining Like Terms](05_combining_like_terms.md)

➡️ Next: [Chapter 7 – Equations and Equality](../Part_3_Solving_Equations/07_equations_and_equality.md)
