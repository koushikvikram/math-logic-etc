# Chapter 14 – Linear Equations

## Table of Contents

- [Chapter 14 – Linear Equations](#chapter-14--linear-equations)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Learning Objectives](#learning-objectives)
- [1. Big Picture](#1-big-picture)
- [2. Why This Exists](#2-why-this-exists)
- [3. First Principles](#3-first-principles)
  - [Why is it called "Linear"?](#why-is-it-called-linear)
- [4. Core Definitions \& Rules](#4-core-definitions--rules)
  - [Linear Equation](#linear-equation)
  - [Slope-Intercept Form](#slope-intercept-form)
  - [Standard Form](#standard-form)
  - [Point-Slope Form](#point-slope-form)
  - [Linear vs Non-Linear](#linear-vs-non-linear)
- [5. Intuition](#5-intuition)
- [6. Engineering Insight](#6-engineering-insight)
- [7. Step-by-Step Method](#7-step-by-step-method)
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
  - [Type 1: Slope-Intercept Form](#type-1-slope-intercept-form)
  - [Type 2: Standard Form](#type-2-standard-form)
  - [Type 3: Horizontal Line](#type-3-horizontal-line)
  - [Type 4: Vertical Line](#type-4-vertical-line)
  - [Type 5: Non-Linear](#type-5-non-linear)
  - [Quick Recognition Checklist](#quick-recognition-checklist)
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

* Coordinate Plane
* Variables
* Multi-Step Equations
* Ordered Pairs

---

## Learning Objectives

By the end of this chapter, you should be able to:

* Explain what a linear equation is.
* Recognize linear equations in different forms.
* Distinguish linear equations from non-linear equations.
* Understand why every linear equation graphs as a straight line.
* Connect linear equations to real-world models.

---

# 1. Big Picture

A **linear equation** describes a relationship between two variables where the rate of change is constant.

The simplest example is

Every value of **x** produces exactly one value of **y**.

Example

| x | y |
| - | - |
| 0 | 1 |
| 1 | 3 |
| 2 | 5 |
| 3 | 7 |

These points all lie on a straight line.

Unlike previous chapters where we solved for one unknown, we now study equations that describe **infinitely many solutions**.

---

# 2. Why This Exists

Suppose an AI inference service processes requests.

Each request takes

```text
12 ms
```

There is also a fixed startup overhead of

```text
20 ms
```

If

```text
x
```

is the number of requests,

the total latency is

```text
y = 12x + 20
```

This single equation predicts the latency for **any** number of requests.

Instead of solving one problem,

we've built a **model**.

This is why linear equations are so powerful.

---

# 3. First Principles

A linear equation connects two variables.

General idea

```text
Input

↓

Rule

↓

Output
```

Example

```text
x

↓

2x+1

↓

y
```

Every input produces one output.

Unlike arithmetic,

linear equations describe an **entire relationship**, not just one answer.

---

## Why is it called "Linear"?

Because all solutions lie on a straight line.

Example

| x | y |
| - | - |
| 0 | 1 |
| 1 | 3 |
| 2 | 5 |
| 3 | 7 |

Plotting these points produces a line.

---

# 4. Core Definitions & Rules

## Linear Equation

A linear equation has variables raised only to the first power.

General form

```text
Ax + By = C
```

where

```text
A,B,C
```

are constants.

---

## Slope-Intercept Form

The most common form is

where

* **m** = slope
* **b** = y-intercept

---

## Standard Form

```text
Ax + By = C
```

Example

```text
2x + 3y = 12
```

---

## Point-Slope Form

```text
y-y₁=m(x-x₁)
```

We'll study this in a later chapter.

---

## Linear vs Non-Linear

Linear

```text
y = 4x + 3
```

Not linear

```text
y = x²
```

Not linear

```text
y = √x
```

Not linear

```text
y = 2ˣ
```

---

# 5. Intuition

Imagine driving a car at a constant speed.

If you travel

```text
80 km/h
```

then

Distance

```text
=

80 × Time
```

Equation

```text
d = 80t
```

Every additional hour increases distance by exactly

```text
80 km
```

The increase never changes.

Constant increase

↓

Straight line.

---

# 6. Engineering Insight

Linear equations appear everywhere because many systems behave approximately linearly over a limited operating range.

Examples

Network

```text
Latency

=

Processing Time

+

Transmission Time
```

Cloud

```text
Cost

=

Price per VM

×

Number of VMs

+

Fixed Fees
```

Battery

```text
Energy Used

≈

Power × Time
```

Engineers often begin with a linear model because it is simple, understandable, and surprisingly accurate for many situations.

---

# 7. Step-by-Step Method

Suppose we have

```text
y = 3x + 2
```

Step 1

Choose a value for

```text
x
```

Example

```text
x = 4
```

---

Step 2

Substitute.

```text
y = 3(4)+2
```

---

Step 3

Compute.

```text
y = 12+2

=14
```

---

The point is

```text
(4,14)
```

Repeat with different values of

```text
x
```

to generate the entire line.

---

# 8. Worked Examples

## 🟢 Beginner

Find

```text
y
```

when

```text
y = 2x + 5

x = 3
```

Solution

```text
y = 2(3)+5

=11
```

Point

```text
(3,11)
```

---

## 🟢 Beginner

```text
y = x−4

x = 8
```

```text
y = 4
```

Point

```text
(8,4)
```

---

## 🟡 Intermediate

```text
y = 5x−7

x = −2
```

```text
y = −17
```

Point

```text
(-2,-17)
```

---

## 🟡 Intermediate

```text
y = −3x+6

x = 5
```

```text
y = −9
```

Point

```text
(5,-9)
```

---

## 🔴 Advanced

Determine whether

```text
y = 6x−11
```

is linear.

The highest exponent is

```text
1
```

Therefore,

it is a linear equation.

---

# 9. Real-World Examples

| Field                 | Linear Equation | What x Represents | What y Represents                                         | Why It Was Modeled This Way                           |
| --------------------- | --------------- | ----------------- | --------------------------------------------------------- | ----------------------------------------------------- |
| AI / ML               | `y=12x+20`      | Requests          | Latency                                                   | Estimate inference latency as request volume changes. |
| MLOps                 | `y=40x+150`     | Models deployed   | Deployment time                                           | Predict deployment duration.                          |
| DevOps                | `y=8x+30`       | Services          | CPU usage                                                 | Capacity planning.                                    |
| Cloud                 | `y=250x+500`    | GPU instances     | Monthly cost                                              | Estimate infrastructure spending.                     |
| Software              | `y=15x+60`      | Features enabled  | Startup time                                              | Estimate application initialization time.             |
| Data Engineering      | `y=5x+12`       | Data batches      | Processing time                                           | Forecast pipeline duration.                           |
| Databases             | `y=3x+10`       | Concurrent users  | Query latency                                             | Capacity estimation.                                  |
| Flow Metrics          | `y=2x+5`        | Work items        | Cycle time                                                | Predict delivery performance.                         |
| Entrepreneurship      | `y=80x−1200`    | Customers         | Monthly profit                                            | Forecast business growth.                             |
| Investing             | `y=250x+1000`   | Monthly deposits  | Portfolio value (simple approximation)                    | Visualize steady contributions.                       |
| Financial Engineering | `y=0.5x+2`      | Interest rate     | Bond sensitivity (local approximation)                    | Approximate small market movements.                   |
| Economics             | `y=−3x+120`     | Price             | Demand                                                    | Model a simplified demand curve.                      |
| Game Theory           | `y=15x+10`      | Cooperation level | Payoff                                                    | Estimate strategy rewards.                            |
| Space                 | `y=7.8x`        | Time              | Distance traveled in orbit (constant speed approximation) | Initial orbital motion model.                         |
| Defense               | `y=60x+30`      | Patrol time       | Area covered                                              | Mission planning.                                     |
| Systems Thinking      | `y=10x+50`      | Time              | Inventory                                                 | Model constant inflow.                                |
| Health                | `y=70x+1500`    | Minutes exercised | Calories burned                                           | Estimate energy expenditure.                          |
| Learning              | `y=4x+20`       | Hours studied     | Practice problems solved                                  | Estimate learning progress.                           |

---

# 10. Common Mistakes

## Mistake 1

Thinking every equation is linear.

Incorrect

```text
y=x²
```

This is quadratic.

---

## Mistake 2

Assuming every graph is a line.

Only linear equations produce straight lines.

---

## Mistake 3

Mixing up variables.

Remember:

```text
x
```

is usually the input.

```text
y
```

is usually the output.

---

## Mistake 4

Substituting incorrectly.

Incorrect

```text
y=2x+5

x=3

↓

2+3+5
```

Correct

```text
2(3)+5
```

---

## Mistake 5

Thinking a linear equation has only one solution.

A linear equation has **infinitely many solutions**.

Every point on the line satisfies the equation.

# 11. Pattern Recognition

The first question to ask when you see an equation is:

> **Can it be drawn as a straight line?**

If yes,

it is probably linear.

---

## Type 1: Slope-Intercept Form

General form

```text
y = mx + b
```

Example

```text
y = 4x + 3
```

This is the easiest form to recognize.

---

## Type 2: Standard Form

General form

```text
Ax + By = C
```

Example

```text
3x + 2y = 18
```

Still linear.

It can always be rearranged into

```text
y = mx + b
```

---

## Type 3: Horizontal Line

Example

```text
y = 6
```

Every point has

```text
y = 6
```

Example points

```text
(-2,6)

(0,6)

(10,6)
```

This is a horizontal line.

---

## Type 4: Vertical Line

Example

```text
x = 4
```

Every point has

```text
x = 4
```

Example points

```text
(4,-3)

(4,0)

(4,12)
```

This is a vertical line.

---

## Type 5: Non-Linear

Examples

```text
y = x²
```

```text
y = x³
```

```text
y = √x
```

```text
y = 2ˣ
```

These are **not** linear because the relationship is not a constant rate of change.

---

## Quick Recognition Checklist

Ask:

1. Are all variables raised only to the first power?
2. Are there no variables multiplied together?
3. Can it be written as

```text
y = mx + b
```

If the answer is yes,

it's linear.

---

# 12. Memory Hooks

## Hook 1

> **Linear means line.**

If the graph is a straight line,

the equation is linear.

---

## Hook 2

Remember

```text
y = mx + b
```

You'll use this equation throughout algebra, calculus, economics, engineering, and machine learning.

---

## Hook 3

Constant change

↓

Straight line

Changing change

↓

Curve

---

## Hook 4

Every x has one y.

Each input produces one output.

---

## Hook 5

Think of a vending machine.

```text
Money In

↓

Rule

↓

Drink Out
```

A linear equation behaves similarly.

---

# 13. Practice Problems

## 🟢 Easy

### Problem 1

Find

```text
y
```

for

```text
y = 5x + 2

x = 4
```

---

### Problem 2

Find

```text
y
```

for

```text
y = 8 − x

x = 6
```

---

### Problem 3

Determine whether the equation is linear.

```text
y = 7x − 3
```

---

## 🟡 Medium

### Problem 4

Determine whether

```text
2x + 5y = 20
```

is linear.

---

### Problem 5

Determine whether

```text
y = x² + 5
```

is linear.

---

### Problem 6

Find the point when

```text
y = −4x + 10

x = 3
```

---

## 🔴 Hard

### Problem 7

Write three points on

```text
y = 2x + 1
```

---

### Problem 8

Determine whether

```text
xy = 10
```

is linear.

---

### Problem 9

A line passes through

```text
(0,12)

(1,18)

(2,24)
```

Is it linear?

Why?

---

## ⭐ Challenge

An MLOps deployment follows

```text
Deployment Time

=

35 × Number of Services

+

120
```

1. Write the equation.

2. Compute the deployment time for

```text
10
```

services.

3. Explain why this is a linear model.

---

## Solutions

### Problem 1

```text
y = 5(4)+2

=22
```

Point

```text
(4,22)
```

---

### Problem 2

```text
y = 8−6

=2
```

Point

```text
(6,2)
```

---

### Problem 3

Linear.

---

### Problem 4

Linear.

---

### Problem 5

Not linear.

Exponent

```text
2
```

appears.

---

### Problem 6

```text
y = −12 +10

=−2
```

Point

```text
(3,-2)
```

---

### Problem 7

Possible answers

```text
(0,1)

(1,3)

(2,5)
```

---

### Problem 8

Not linear.

Variables are multiplied together.

---

### Problem 9

Yes.

The value of

```text
y
```

increases by

```text
6
```

every time

```text
x
```

increases by

```text
1
```

The rate of change is constant.

---

### Challenge Solution

Equation

```text
y = 35x + 120
```

For

```text
x = 10
```

```text
y = 35(10)+120

=470
```

Interpretation

Ten services require **470 seconds** to deploy.

This is linear because every additional service adds the same deployment time:

```text
35 seconds
```

---

# 14. Real Interview / Industry Problems

## AI / Machine Learning

A training job requires

* 40 minutes of initialization
* 12 minutes per training epoch

Equation

```text
Training Time = 12 × Epochs + 40
```

If

```text
x
```

is epochs,

```text
y = 12x + 40
```

This linear model estimates total training time.

---

## MLOps

A deployment pipeline requires

* 150 seconds of startup
* 25 seconds per model

Equation

```text
y = 25x + 150
```

Useful for deployment capacity planning.

---

## DevOps / Platform Engineering

Each microservice consumes

* 2 CPU cores

Infrastructure overhead

* 6 CPU cores

Equation

```text
CPU = 2x + 6
```

Used for sizing Kubernetes clusters.

---

## Investing

Suppose you invest a fixed amount every month.

Ignoring investment returns for now,

```text
Portfolio Value = Monthly Contribution × Months + Initial Investment
```

Equation

```text
y = 500x + 10000
```

This linear model estimates total invested capital over time.

> **Note:** This is a *cash-flow model*, not a *market value model*. Once investment returns are included, the relationship becomes non-linear due to compounding.

---

## Space

A spacecraft travels at approximately constant velocity during a cruise phase.

Equation

```text
Distance = Velocity × Time
```

Example

```text
y = 7800x
```

where

* x = seconds
* y = meters traveled

This linear model is valid while velocity remains approximately constant.

---

# 15. Historical Insight

The coordinate plane and linear equations are central ideas in **analytic geometry**, developed by René Descartes.

Before analytic geometry:

* Geometry was mostly visual.
* Algebra was mostly symbolic.

Descartes' insight was revolutionary:

> **Represent geometric objects with equations.**

A line became

```text
y = mx + b
```

instead of just a drawing.

This unified algebra and geometry and paved the way for calculus, physics, engineering, computer graphics, robotics, and modern AI.

---

# 16. Connections

```text
Coordinate Plane
        ↓
Linear Equations
        ↓
Slope
        ↓
Graphing Lines
        ↓
Writing Linear Equations
        ↓
Systems of Linear Equations
        ↓
Linear Algebra
        ↓
Calculus
```

Linear equations are the bridge between arithmetic and mathematical modeling.

---

# 17. Summary

A linear equation:

* relates two variables,
* has variables only to the first power,
* graphs as a straight line,
* has a constant rate of change.

Most useful form

```text
y = mx + b
```

where

* `m` is the slope,
* `b` is the y-intercept.

Key idea:

> **A linear equation is a mathematical model describing constant change.**

---

# 18. Why This Topic Matters Later

| Future Topic                | Why This Chapter Matters                                                        |
| --------------------------- | ------------------------------------------------------------------------------- |
| Slope                       | The slope is the central property of a linear equation.                         |
| Graphing Linear Equations   | Every linear equation corresponds to a unique line.                             |
| Writing Linear Equations    | You'll derive equations from data and word problems.                            |
| Systems of Linear Equations | Solutions occur where lines intersect.                                          |
| Linear Algebra              | Lines generalize to higher-dimensional vector spaces.                           |
| Calculus                    | Derivatives measure instantaneous rates of change, extending the idea of slope. |
| AI / ML                     | Linear regression is built directly on linear equations.                        |
| Economics                   | Supply, demand, and cost models often begin with linear approximations.         |
| Financial Engineering       | Sensitivity analysis frequently starts with linear models.                      |
| Space & Aerospace           | Constant-velocity motion is modeled with linear equations.                      |

---

# 19. Looking Ahead

The next chapter is **Chapter 15 – Slope**.

We'll answer one of the most important questions in mathematics:

> **How steep is a line?**

You'll learn:

* why slope is called the **rate of change**,
* why it appears everywhere in AI, economics, finance, physics, and engineering,
* and why it is one of the foundational ideas that eventually leads to derivatives in calculus.

---

# Navigation

⬅️ Previous: [Chapter 13 – Coordinate Plane](13_coordinate_plane.md)

➡️ Next: [Chapter 15 – Slope](15_slope.md)

