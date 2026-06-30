# Chapter 18 – Systems of Linear Equations

## Table of Contents

- [Chapter 18 – Systems of Linear Equations](#chapter-18--systems-of-linear-equations)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Learning Objectives](#learning-objectives)
- [1. Big Picture](#1-big-picture)
- [2. Why This Exists](#2-why-this-exists)
- [3. First Principles](#3-first-principles)
- [4. Core Definitions \& Rules](#4-core-definitions--rules)
  - [System of Equations](#system-of-equations)
  - [Solution](#solution)
  - [Three Possible Outcomes](#three-possible-outcomes)
    - [One Solution](#one-solution)
    - [No Solution](#no-solution)
    - [Infinitely Many Solutions](#infinitely-many-solutions)
  - [Three Solution Methods](#three-solution-methods)
- [5. Intuition](#5-intuition)
- [6. Engineering Insight](#6-engineering-insight)
- [7. Step-by-Step Method](#7-step-by-step-method)
  - [Method 1 — Graphing](#method-1--graphing)
  - [Method 2 — Substitution](#method-2--substitution)
  - [Method 3 — Elimination](#method-3--elimination)
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
  - [Type 1: Graphing](#type-1-graphing)
  - [Type 2: Substitution](#type-2-substitution)
  - [Type 3: Elimination](#type-3-elimination)
  - [Type 4: Parallel Lines](#type-4-parallel-lines)
  - [Type 5: Same Line](#type-5-same-line)
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
  - [Cloud](#cloud)
  - [Investing](#investing)
  - [Economics](#economics)
- [15. Historical Insight](#15-historical-insight)
- [16. Connections](#16-connections)
- [17. Summary](#17-summary)
- [18. Why This Topic Matters Later](#18-why-this-topic-matters-later)
- [19. Looking Ahead](#19-looking-ahead)
- [Navigation](#navigation)

---

## Prerequisites

* Linear Equations
* Writing Linear Equations
* Graphing Linear Equations
* Slope

---

## Learning Objectives

By the end of this chapter, you should be able to:

* Explain what a system of linear equations is.
* Solve systems graphically.
* Solve systems using substitution.
* Solve systems using elimination.
* Recognize one solution, no solution, and infinitely many solutions.
* Interpret solutions in real-world contexts.

---

# 1. Big Picture

Until now, we've worked with **one equation**.

Example:

```text
y = 2x + 1
```

Now suppose we have **two equations**:

Each equation represents a line.

The question is:

> **Where do both lines describe the same point?**

That point is called the **solution** of the system.

It satisfies **both equations simultaneously**.

---

# 2. Why This Exists

Suppose two internet providers charge differently.

Provider A

```text
Monthly Cost

=

20x + 50
```

Provider B

```text
Monthly Cost

=

35x + 5
```

where

```text
x
```

is GB used.

Question:

> At what usage do both providers cost the same?

That's exactly a **system of linear equations**.

---

# 3. First Principles

A system means:

> **Several equations must all be true at the same time.**

Imagine two roads crossing.

Each road represents one equation.

The intersection is the only place where both roads meet.

Likewise,

the solution is the only point satisfying every equation.

---

Example

Equation 1

```text
y = x
```

Equation 2

```text
y = 6 − x
```

They meet at

```text
(3,3)
```

That point satisfies both equations.

---

# 4. Core Definitions & Rules

## System of Equations

A collection of two or more equations involving the same variables.

---

## Solution

A point that satisfies every equation.

---

## Three Possible Outcomes

### One Solution

The lines intersect once.

```text
\
 \
  X
 /
/
```

---

### No Solution

The lines are parallel.

```text
////
////
```

---

### Infinitely Many Solutions

Both equations describe the same line.

```text
────────────
────────────
```

---

## Three Solution Methods

1. Graphing
2. Substitution
3. Elimination

We'll study each.

---

# 5. Intuition

Think of solving a mystery.

Each equation is a clue.

One clue alone leaves many possibilities.

Two clues narrow the possibilities.

The solution is the point that satisfies every clue simultaneously.

---

# 6. Engineering Insight

Systems of equations appear everywhere.

Examples

Cloud

```text
Cost Model A

=

Cost Model B
```

Economics

```text
Supply

=

Demand
```

Finance

```text
Income

=

Expenses
```

Robotics

```text
Sensor A

=

Sensor B
```

Machine Learning

```text
Multiple constraints

↓

Single solution
```

Finding where different models agree is one of the most common tasks in engineering.

---

# 7. Step-by-Step Method

## Method 1 — Graphing

Given

```text
y = x + 2

y = -x + 6
```

Step 1

Graph both lines.

Step 2

Find where they intersect.

Answer

```text
(2,4)
```

---

## Method 2 — Substitution

Given

```text
y = 2x + 1

x + y = 10
```

Substitute

```text
y = 2x + 1
```

into the second equation.

```text
x + (2x + 1) = 10

3x = 9

x = 3
```

Then

```text
y = 7
```

Answer

```text
(3,7)
```

---

## Method 3 — Elimination

Given

```text
x + y = 8

x − y = 2
```

Add the equations.

```text
2x = 10

x = 5
```

Substitute

```text
5 + y = 8

y = 3
```

Answer

```text
(5,3)
```

---

# 8. Worked Examples

## 🟢 Beginner

Solve

```text
y = x

y = 4
```

Answer

```text
(4,4)
```

---

## 🟢 Beginner

Solve

```text
x + y = 8

x − y = 4
```

Add equations.

```text
2x = 12

x = 6

y = 2
```

---

## 🟡 Intermediate

Solve

```text
y = 3x

x + y = 8
```

Substitute.

```text
x + 3x = 8

x = 2

y = 6
```

---

## 🟡 Intermediate

Solve

```text
2x + y = 9

x − y = 0
```

Substitute.

```text
y = x
```

```text
2x + x = 9

x = 3

y = 3
```

---

## 🔴 Advanced

Determine the number of solutions.

```text
y = 2x + 3

y = 2x − 4
```

Same slope.

Different intercepts.

Answer

```text
No solution.
```

---

# 9. Real-World Examples

| Field                 | Equation 1          | Equation 2          | What the Solution Represents |
| --------------------- | ------------------- | ------------------- | ---------------------------- |
| AI / ML               | Model A Accuracy    | Model B Accuracy    | Performance crossover point  |
| MLOps                 | Deployment Cost A   | Deployment Cost B   | Cheaper deployment strategy  |
| DevOps                | Scaling Policy A    | Scaling Policy B    | Equal operating cost         |
| Cloud                 | Provider A Cost     | Provider B Cost     | Break-even usage             |
| Software              | Algorithm A Runtime | Algorithm B Runtime | Faster algorithm threshold   |
| Data Engineering      | Pipeline A Time     | Pipeline B Time     | Equal processing time        |
| Databases             | Index A Cost        | Index B Cost        | Optimal switching point      |
| Flow Metrics          | Team A Throughput   | Team B Throughput   | Equal productivity           |
| Entrepreneurship      | Revenue             | Cost                | Break-even point             |
| Investing             | Portfolio A Value   | Portfolio B Value   | Equal portfolio value        |
| Financial Engineering | Bond A Price        | Bond B Price        | Equal valuation              |
| Economics             | Supply              | Demand              | Market equilibrium           |
| Game Theory           | Strategy A Payoff   | Strategy B Payoff   | Indifference point           |
| Space                 | Rocket A Altitude   | Rocket B Altitude   | Same position                |
| Defense               | Radar A Coverage    | Radar B Coverage    | Shared coverage point        |
| Systems Thinking      | Inflow              | Outflow             | Stable inventory             |
| Health                | Calories In         | Calories Out        | Weight maintenance           |
| Learning              | Study Plan A        | Study Plan B        | Equal learning outcome       |

---

# 10. Common Mistakes

## Mistake 1

Solving each equation separately.

Remember:

The answer must satisfy **both** equations.

---

## Mistake 2

Forgetting to substitute back.

Always compute both

```text
x
```

and

```text
y
```

---

## Mistake 3

Stopping after finding

```text
x
```

A system's solution is an ordered pair.

```text
(x,y)
```

---

## Mistake 4

Not checking the solution.

Substitute the answer into **both** equations.

---

## Mistake 5

Thinking every system has one solution.

There may be:

* one solution,
* no solution,
* infinitely many solutions.

# 11. Pattern Recognition

One of the most important skills is recognizing **which solving method is easiest**.

---

## Type 1: Graphing

Best when:

* the equations are already in slope-intercept form,
* or you need a visual understanding.

Example

```text
y = 2x + 1

y = -x + 7
```

Graph both lines.

The intersection is the solution.

---

## Type 2: Substitution

Best when:

* one equation already isolates a variable.

Example

```text
y = 3x + 2

x + y = 10
```

Simply substitute

```text
3x + 2
```

for

```text
y
```

---

## Type 3: Elimination

Best when:

* coefficients naturally cancel,
* or can be made to cancel with simple multiplication.

Example

```text
x + y = 9

x - y = 3
```

Adding immediately eliminates

```text
y
```

---

## Type 4: Parallel Lines

Example

```text
y = 2x + 3

y = 2x - 5
```

Same slope.

Different intercepts.

The lines never meet.

Answer:

```text
No Solution
```

---

## Type 5: Same Line

Example

```text
2x + 2y = 8

x + y = 4
```

The first equation is simply twice the second.

Both represent exactly the same line.

Answer:

```text
Infinitely Many Solutions
```

---

## Decision Tree

```text
System of Equations

↓

Is a variable already isolated?

↓

Yes

↓

Use Substitution

↓

No

↓

Can coefficients cancel easily?

↓

Yes

↓

Use Elimination

↓

No

↓

Use Graphing
```

---

# 12. Memory Hooks

## Hook 1

> **Intersection = Solution**

If the lines meet,

that point is the answer.

---

## Hook 2

One equation

↓

One line

Two equations

↓

Two lines

Solution

↓

Where the lines meet.

---

## Hook 3

Parallel lines

↓

Never meet

↓

No solution.

---

## Hook 4

Same line

↓

Meet everywhere

↓

Infinitely many solutions.

---

## Hook 5

Substitution

↓

Replace

Elimination

↓

Cancel

Graphing

↓

See

---

# 13. Practice Problems

## 🟢 Easy

### Problem 1

Solve.

```text
y = x

y = 6
```

---

### Problem 2

Solve.

```text
x + y = 8

x - y = 2
```

---

### Problem 3

Determine the number of solutions.

```text
y = 4x + 1

y = 4x - 3
```

---

## 🟡 Medium

### Problem 4

Solve using substitution.

```text
y = 2x + 3

x + y = 12
```

---

### Problem 5

Solve using elimination.

```text
2x + y = 11

2x - y = 5
```

---

### Problem 6

Determine whether these equations represent the same line.

```text
2x + 2y = 10

x + y = 5
```

---

## 🔴 Hard

### Problem 7

Solve.

```text
3x + y = 10

x - y = 2
```

---

### Problem 8

Solve.

```text
4x - y = 13

2x + y = 5
```

---

### Problem 9

Determine the number of solutions.

```text
3x + 6y = 9

x + 2y = 3
```

---

## ⭐ Challenge

A company offers two cloud pricing plans.

Plan A

```text
Cost = 200x + 600
```

Plan B

```text
Cost = 350x
```

1. Write the system.

2. Solve it.

3. Interpret the answer.

---

## Solutions

### Problem 1

Substitute:

```text
y = x

y = 6
```

Therefore

```text
x = 6
```

Answer

```text
(6,6)
```

---

### Problem 2

Add equations.

```text
2x = 10

x = 5
```

Substitute.

```text
5 + y = 8

y = 3
```

Answer

```text
(5,3)
```

---

### Problem 3

Same slope.

Different intercepts.

Answer

```text
No solution.
```

---

### Problem 4

Substitute.

```text
x + (2x + 3) = 12

3x = 9

x = 3
```

Then

```text
y = 9
```

Answer

```text
(3,9)
```

---

### Problem 5

Add equations.

```text
4x = 16

x = 4
```

Substitute.

```text
2(4) + y = 11

y = 3
```

Answer

```text
(4,3)
```

---

### Problem 6

The first equation is twice the second.

Answer

```text
Infinitely many solutions.
```

---

### Problem 7

From

```text
x - y = 2
```

```text
y = x - 2
```

Substitute.

```text
3x + x - 2 = 10

4x = 12

x = 3

y = 1
```

Answer

```text
(3,1)
```

---

### Problem 8

Add equations.

```text
6x = 18

x = 3
```

Substitute.

```text
2(3) + y = 5

y = -1
```

Answer

```text
(3,-1)
```

---

### Problem 9

The first equation simplifies to:

```text
x + 2y = 3
```

Both equations are identical.

Answer

```text
Infinitely many solutions.
```

---

### Challenge Solution

System

Set the equations equal:

```text
200x + 600 = 350x
```

Solve:

```text
600 = 150x

x = 4
```

Substitute:

```text
y = 350(4)

y = 1400
```

Solution

```text
(4,1400)
```

Interpretation

At **4 units of usage**, both pricing plans cost **$1,400**.

Below 4 units, one plan is cheaper.

Above 4 units, the other plan becomes cheaper.

This point is called the **break-even point**.

---

# 14. Real Interview / Industry Problems

## AI / Machine Learning

Two models improve over training.

```text
Model A Accuracy = 2x + 70

Model B Accuracy = x + 82
```

Question:

At which epoch do they achieve the same accuracy?

This is a system of equations.

---

## MLOps

Two deployment strategies have different startup costs and scaling rates.

```text
Strategy A = 15x + 120

Strategy B = 25x + 40
```

The intersection identifies when both strategies require the same deployment time.

---

## DevOps / Platform Engineering

Two autoscaling policies consume resources differently.

Graphing both policies helps determine the workload where they become equally efficient.

---

## Cloud

Compare two pricing models.

The solution identifies the usage level where switching providers becomes financially beneficial.

---

## Investing

Compare two investment plans.

Ignoring compounding:

```text
Plan A = 500x + 10000

Plan B = 800x + 4000
```

The intersection identifies when the total invested capital becomes equal.

---

## Economics

Supply

```text
Supply = 4x + 10
```

Demand

```text
Demand = -2x + 70
```

Their intersection is the **market equilibrium**.

This is one of the most important applications of systems of equations in economics.

---

# 15. Historical Insight

Systems of equations became increasingly important as mathematics shifted from solving isolated problems to modeling interconnected systems.

Astronomers used systems to determine planetary positions.

Surveyors used them to locate unknown points.

Engineers used them to design structures.

Economists used them to model markets.

Today, systems of equations underpin:

* optimization,
* robotics,
* computer graphics,
* artificial intelligence,
* machine learning,
* operations research,
* electrical engineering,
* and numerical simulation.

---

# 16. Connections

```text
Linear Equations
        ↓
Graphing Lines
        ↓
Systems of Linear Equations
        ↓
Matrices
        ↓
Linear Algebra
        ↓
Optimization
        ↓
Machine Learning
        ↓
Operations Research
```

Systems of equations are the gateway to modern applied mathematics.

---

# 17. Summary

A system of linear equations consists of two or more equations involving the same variables.

Three possible outcomes:

| Lines          | Result                    |
| -------------- | ------------------------- |
| Intersect once | One solution              |
| Parallel       | No solution               |
| Coincide       | Infinitely many solutions |

Three solving methods:

1. Graphing
2. Substitution
3. Elimination

Key idea:

> **The solution is the point that satisfies every equation simultaneously.**

---

# 18. Why This Topic Matters Later

| Future Topic          | Why This Chapter Matters                                                   |
| --------------------- | -------------------------------------------------------------------------- |
| Matrices              | Matrix methods solve large systems efficiently.                            |
| Linear Algebra        | Systems of equations motivate vectors, matrices, and Gaussian elimination. |
| Optimization          | Constraints are often written as systems of equations or inequalities.     |
| Machine Learning      | Training models involves solving systems directly or approximately.        |
| Computer Graphics     | Transformations are represented by systems of linear equations.            |
| Economics             | Market equilibrium comes from solving supply and demand simultaneously.    |
| Financial Engineering | Portfolio constraints form systems of equations.                           |
| Operations Research   | Scheduling, routing, and logistics rely heavily on systems.                |

---

# 19. Looking Ahead

Congratulations!

You have now completed the **Linear Equations** portion of Algebra.

The next major topic is **Part V – Exponents and Polynomials**, beginning with:

**Chapter 19 – Laws of Exponents**

You'll learn why expressions such as

```text
x² × x³
```

simplify the way they do, building the foundation for polynomials, scientific notation, logarithms, calculus, and many machine learning algorithms.

---

# Navigation

⬅️ Previous: [Chapter 17 – Writing Linear Equations](17_writing_linear_equations.md)

➡️ Next: [Chapter 19 – Laws of Exponents](../Part_5_Exponents_and_Polynomials/19_laws_of_exponents.md)
