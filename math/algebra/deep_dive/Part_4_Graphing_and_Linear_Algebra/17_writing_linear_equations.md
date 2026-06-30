# Chapter 17 – Writing Linear Equations

## Table of Contents

- [Chapter 17 – Writing Linear Equations](#chapter-17--writing-linear-equations)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Learning Objectives](#learning-objectives)
- [1. Big Picture](#1-big-picture)
- [2. Why This Exists](#2-why-this-exists)
- [3. First Principles](#3-first-principles)
- [4. Core Definitions \& Rules](#4-core-definitions--rules)
  - [Slope-Intercept Form](#slope-intercept-form)
  - [Point-Slope Form](#point-slope-form)
  - [From Two Points](#from-two-points)
  - [Standard Form](#standard-form)
- [5. Intuition](#5-intuition)
- [6. Engineering Insight](#6-engineering-insight)
- [7. Step-by-Step Method](#7-step-by-step-method)
  - [Method 1: Given slope and y-intercept](#method-1-given-slope-and-y-intercept)
  - [Method 2: Given slope and one point](#method-2-given-slope-and-one-point)
  - [Method 3: Given two points](#method-3-given-two-points)
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
  - [Type 1: Slope and y-intercept](#type-1-slope-and-y-intercept)
  - [Type 2: Slope and one point](#type-2-slope-and-one-point)
  - [Type 3: Two points](#type-3-two-points)
  - [Type 4: Real-world fixed cost plus variable cost](#type-4-real-world-fixed-cost-plus-variable-cost)
  - [Type 5: Constant decrease](#type-5-constant-decrease)
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
  - [Space](#space)
- [15. Historical Insight](#15-historical-insight)
- [16. Connections](#16-connections)
- [17. Summary](#17-summary)
- [18. Why This Topic Matters Later](#18-why-this-topic-matters-later)
- [19. Looking Ahead](#19-looking-ahead)
- [Navigation](#navigation)

---

## Prerequisites

* Linear Equations
* Slope
* Graphing Linear Equations
* Coordinate Plane

---

## Learning Objectives

By the end of this chapter, you should be able to:

* Write a linear equation from a slope and y-intercept.
* Write a linear equation from a slope and one point.
* Write a linear equation from two points.
* Translate real-world situations into linear equations.
* Interpret slope and intercept in context.

---

# 1. Big Picture

So far, you have learned to read and graph linear equations.

Now you will learn to **write** them.

This is a major shift.

Before:

```text
Given equation

↓

Graph or interpret it
```

Now:

```text
Real-world relationship

↓

Equation
```

The most common form is:

genui{"functions_sequences_graphs_learning_block_staging":{"type_id":"SLOPE_INTERCEPT"}}

In this form:

```text
m = slope

b = y-intercept
```

So writing a linear equation usually means finding:

```text
m

and

b
```

---

# 2. Why This Exists

Suppose a cloud provider charges:

```text
$300 per GPU
```

plus a fixed monthly platform fee of:

```text
$500
```

Let:

```text
x = number of GPUs

y = monthly cost
```

Then:

```text
y = 300x + 500
```

This equation lets you predict the cost for any number of GPUs.

That's the power of writing linear equations:

> **You turn a pattern into a reusable model.**

---

# 3. First Principles

A linear equation models constant change.

If every increase of 1 in `x` changes `y` by the same amount, the relationship is linear.

Example:

|  x |  y |
| -: | -: |
|  0 |  5 |
|  1 |  8 |
|  2 | 11 |
|  3 | 14 |

Every time `x` increases by 1:

```text
y increases by 3
```

So:

```text
m = 3
```

When:

```text
x = 0
```

we have:

```text
y = 5
```

So:

```text
b = 5
```

Equation:

```text
y = 3x + 5
```

---

# 4. Core Definitions & Rules

## Slope-Intercept Form

genui{"functions_sequences_graphs_learning_block_staging":{"type_id":"SLOPE_INTERCEPT"}}

Use when you know:

* slope
* y-intercept

---

## Point-Slope Form

genui{"functions_sequences_graphs_learning_block_staging":{"type_id":"POINT_SLOPE_LINE"}}

Use when you know:

* one point
* slope

---

## From Two Points

Given:

```text
(x₁,y₁)

(x₂,y₂)
```

First find slope:

```text
m = (y₂−y₁)/(x₂−x₁)
```

Then use point-slope form:

```text
y−y₁ = m(x−x₁)
```

Then simplify if needed.

---

## Standard Form

```text
Ax + By = C
```

Useful in systems of equations.

---

# 5. Intuition

A linear equation has two ingredients:

```text
Starting point

+

Constant change
```

In:

```text
y = mx + b
```

`b` tells you where the story starts.

`m` tells you how the story changes.

Example:

```text
y = 300x + 500
```

means:

* Start at `$500`.
* Add `$300` per GPU.

---

# 6. Engineering Insight

Writing linear equations is one of the simplest forms of modeling.

Engineers often start with a linear model because it is:

* easy to explain,
* easy to estimate,
* easy to graph,
* easy to debug.

Examples:

```text
Latency = 2(Requests) + 100
```

```text
Cost = 300(GPUs) + 500
```

```text
Runtime = 5(DataSize) + 12
```

These models may not be perfect, but they are useful first approximations.

---

# 7. Step-by-Step Method

## Method 1: Given slope and y-intercept

Example:

```text
m = 4

b = 7
```

Substitute into:

```text
y = mx + b
```

Equation:

```text
y = 4x + 7
```

---

## Method 2: Given slope and one point

Given:

```text
m = 3

point = (2,10)
```

Use:

```text
y − y₁ = m(x − x₁)
```

Substitute:

```text
y − 10 = 3(x − 2)
```

Simplify:

```text
y − 10 = 3x − 6

y = 3x + 4
```

---

## Method 3: Given two points

Given:

```text
(1,5)

(3,11)
```

Find slope:

```text
m = (11−5)/(3−1)

m = 6/2

m = 3
```

Use point-slope form:

```text
y − 5 = 3(x − 1)
```

Simplify:

```text
y − 5 = 3x − 3

y = 3x + 2
```

---

# 8. Worked Examples

## 🟢 Beginner

Write the equation with:

```text
m = 2

b = 5
```

Solution:

```text
y = 2x + 5
```

---

## 🟢 Beginner

Write the equation with:

```text
m = −3

b = 8
```

Solution:

```text
y = −3x + 8
```

---

## 🟡 Intermediate

Given:

```text
m = 4

point = (1,9)
```

Use point-slope form:

```text
y − 9 = 4(x − 1)
```

Simplify:

```text
y − 9 = 4x − 4

y = 4x + 5
```

---

## 🟡 Intermediate

Given:

```text
m = −2

point = (3,1)
```

```text
y − 1 = −2(x − 3)

y − 1 = −2x + 6

y = −2x + 7
```

---

## 🔴 Advanced

Given two points:

```text
(2,7)

(6,19)
```

Find slope:

```text
m = (19−7)/(6−2)

m = 12/4

m = 3
```

Use point-slope form:

```text
y − 7 = 3(x − 2)
```

Simplify:

```text
y − 7 = 3x − 6

y = 3x + 1
```

---

# 9. Real-World Examples

| Field                 | Situation                                        | Linear Equation    | Meaning                     |
| --------------------- | ------------------------------------------------ | ------------------ | --------------------------- |
| AI / ML               | Loss decreases by 0.05 per epoch from 1.2        | `y = -0.05x + 1.2` | Training loss over epochs   |
| MLOps                 | Latency starts at 100 ms and rises 2 ms/request  | `y = 2x + 100`     | Request-latency model       |
| DevOps                | Base CPU is 20%, each service adds 5%            | `y = 5x + 20`      | CPU usage estimate          |
| Cloud                 | $500 fixed fee, $300 per GPU                     | `y = 300x + 500`   | Monthly infrastructure cost |
| Software              | Startup time 60 ms, each module adds 15 ms       | `y = 15x + 60`     | App startup model           |
| Data Engineering      | 12 min overhead, 5 min per GB                    | `y = 5x + 12`      | Pipeline duration           |
| Databases             | 30 ms baseline, 4 ms per connection              | `y = 4x + 30`      | Query latency               |
| Flow Metrics          | Base delay 2 days, 1.5 days per work item        | `y = 1.5x + 2`     | Cycle time forecast         |
| Entrepreneurship      | Profit starts at -1200, each customer adds 80    | `y = 80x - 1200`   | Break-even model            |
| Investing             | Initial $10,000, add $500/month                  | `y = 500x + 10000` | Contributions model         |
| Financial Engineering | Price change starts at 20, falls 4 per rate unit | `y = -4x + 20`     | Sensitivity estimate        |
| Economics             | Demand starts at 120, falls 5 per price unit     | `y = -5x + 120`    | Demand model                |
| Game Theory           | Base payoff 10, cooperation adds 15              | `y = 15x + 10`     | Payoff model                |
| Space                 | Distance grows at 7800 m/s                       | `y = 7800x`        | Constant velocity motion    |
| Defense               | Base coverage 20, patrol adds 50 per hour        | `y = 50x + 20`     | Coverage model              |
| Systems Thinking      | Initial stock 40, inflow adds 8 per time unit    | `y = 8x + 40`      | Stock accumulation          |
| Health                | Baseline 1500 calories, exercise burns 70/min    | `y = -70x + 1500`  | Net calories remaining      |
| Learning              | Starting score 50, each study hour adds 4        | `y = 4x + 50`      | Learning progress estimate  |

---

# 10. Common Mistakes

## Mistake 1

Using the y-coordinate as the slope.

Given:

```text
point = (2,10)

m = 3
```

Incorrect:

```text
y = 10x + 3
```

Correct:

```text
y − 10 = 3(x − 2)
```

---

## Mistake 2

Forgetting the y-intercept is where `x = 0`.

In:

```text
y = 4x + 7
```

the y-intercept is:

```text
7
```

not:

```text
4
```

---

## Mistake 3

Using the wrong slope formula.

Correct:

```text
m = (y₂−y₁)/(x₂−x₁)
```

not:

```text
m = (x₂−x₁)/(y₂−y₁)
```

---

## Mistake 4

Mixing points when calculating slope.

If numerator uses:

```text
y₂−y₁
```

denominator must use:

```text
x₂−x₁
```

Same order.

---

## Mistake 5

Not simplifying point-slope form correctly.

```text
y − 5 = 2(x − 3)
```

becomes:

```text
y − 5 = 2x − 6

y = 2x − 1
```

not:

```text
y = 2x − 11
```

# 11. Pattern Recognition

When asked to write a linear equation, identify what information you have.

---

## Type 1: Slope and y-intercept

Given:

```text
m = 5

b = 12
```

Use:

```text
y = mx + b
```

Equation:

```text
y = 5x + 12
```

---

## Type 2: Slope and one point

Given:

```text
m = 3

point = (2,11)
```

Use:

```text
y − y₁ = m(x − x₁)
```

Equation:

```text
y − 11 = 3(x − 2)
```

Simplify:

```text
y = 3x + 5
```

---

## Type 3: Two points

Given:

```text
(1,4)

(5,12)
```

First find slope:

```text
m = (12−4)/(5−1)

m = 8/4

m = 2
```

Then use point-slope form:

```text
y − 4 = 2(x − 1)
```

Simplify:

```text
y = 2x + 2
```

---

## Type 4: Real-world fixed cost plus variable cost

Look for phrases like:

```text
fixed fee

base cost

startup overhead

initial value
```

These usually become:

```text
b
```

Look for phrases like:

```text
per item

per request

per hour

per GPU

per customer
```

These usually become:

```text
m
```

Example:

```text
$300 per GPU plus $500 fixed fee
```

Equation:

```text
y = 300x + 500
```

---

## Type 5: Constant decrease

If something decreases by the same amount each step, slope is negative.

Example:

```text
Loss starts at 1.2 and decreases by 0.05 per epoch.
```

Equation:

```text
y = -0.05x + 1.2
```

---

## Decision Tree

```text
Given slope and intercept?

↓

Use y = mx + b

↓

Given slope and point?

↓

Use y − y₁ = m(x − x₁)

↓

Given two points?

↓

Find slope first

↓

Use point-slope form

↓

Simplify
```

---

# 12. Memory Hooks

## Hook 1

> **Slope tells how fast. Intercept tells where it starts.**

---

## Hook 2

```text
per
```

usually means slope.

Examples:

```text
dollars per GPU

milliseconds per request

kilometers per second
```

---

## Hook 3

```text
fixed

base

initial

startup
```

usually means y-intercept.

---

## Hook 4

Two points?

First slope.

Then equation.

---

## Hook 5

Point-slope form is the emergency tool.

When unsure, use:

```text
y − y₁ = m(x − x₁)
```

---

# 13. Practice Problems

## 🟢 Easy

### Problem 1

Write the equation.

```text
m = 4

b = 9
```

---

### Problem 2

Write the equation.

```text
m = -2

b = 5
```

---

### Problem 3

A service has:

```text
100 ms baseline latency

3 ms per request
```

Write the equation.

---

## 🟡 Medium

### Problem 4

Write the equation for:

```text
m = 6

point = (2,17)
```

---

### Problem 5

Write the equation for:

```text
m = -3

point = (4,1)
```

---

### Problem 6

Write the equation through:

```text
(1,7)

(3,15)
```

---

## 🔴 Hard

### Problem 7

Write the equation through:

```text
(-2,5)

(4,23)
```

---

### Problem 8

A startup has:

```text
fixed monthly cost = $1200

profit per customer = $80
```

Write the profit equation.

---

### Problem 9

A model's loss starts at:

```text
1.4
```

and decreases by:

```text
0.07
```

per epoch.

Write the equation.

---

## ⭐ Challenge

An MLOps deployment pipeline has:

```text
startup overhead = 90 seconds

each model adds 25 seconds
```

1. Define variables.
2. Write the equation.
3. Interpret slope.
4. Interpret y-intercept.
5. Predict deployment time for 8 models.

---

## Solutions

### Problem 1

```text
y = 4x + 9
```

---

### Problem 2

```text
y = -2x + 5
```

---

### Problem 3

```text
y = 3x + 100
```

---

### Problem 4

Use point-slope form:

```text
y − 17 = 6(x − 2)
```

Simplify:

```text
y − 17 = 6x − 12

y = 6x + 5
```

---

### Problem 5

```text
y − 1 = -3(x − 4)

y − 1 = -3x + 12

y = -3x + 13
```

---

### Problem 6

Slope:

```text
m = (15−7)/(3−1)

m = 8/2

m = 4
```

Use point-slope form:

```text
y − 7 = 4(x − 1)

y − 7 = 4x − 4

y = 4x + 3
```

---

### Problem 7

Slope:

```text
m = (23−5)/(4−(-2))

m = 18/6

m = 3
```

Equation:

```text
y − 5 = 3(x − (-2))

y − 5 = 3(x + 2)

y − 5 = 3x + 6

y = 3x + 11
```

---

### Problem 8

```text
y = 80x − 1200
```

where:

```text
x = customers

y = monthly profit
```

---

### Problem 9

```text
y = -0.07x + 1.4
```

---

### Challenge Solution

Variables:

```text
x = number of models

y = deployment time in seconds
```

Equation:

```text
y = 25x + 90
```

Slope:

```text
25
```

Interpretation:

Each additional model adds **25 seconds**.

y-intercept:

```text
90
```

Interpretation:

Even with zero models, the deployment pipeline has **90 seconds** of startup overhead.

For:

```text
x = 8
```

```text
y = 25(8)+90

y = 200+90

y = 290
```

Deployment time:

```text
290 seconds
```

---

# 14. Real Interview / Industry Problems

## AI / Machine Learning

A model's training loss starts at:

```text
1.8
```

and decreases by:

```text
0.12
```

per epoch.

Let:

```text
x = epoch

y = loss
```

Equation:

```text
y = -0.12x + 1.8
```

Interpretation:

The negative slope means the model is learning.

---

## MLOps

A deployment process has:

```text
startup overhead = 150 seconds

per-model deployment cost = 18 seconds
```

Equation:

```text
y = 18x + 150
```

This helps estimate release duration before running the deployment.

---

## DevOps / Platform Engineering

A cluster has:

```text
base system usage = 12 CPU cores

each service uses 4 CPU cores
```

Equation:

```text
y = 4x + 12
```

This helps estimate cluster capacity.

---

## Cloud

A cloud bill has:

```text
fixed monitoring fee = $400

per GPU fee = $300
```

Equation:

```text
y = 300x + 400
```

This is useful for budget forecasting.

---

## Investing

A savings plan starts with:

```text
$10,000
```

and adds:

```text
$500
```

per month.

Ignoring investment returns:

```text
y = 500x + 10000
```

This is a linear contribution model.

---

## Space

A spacecraft moves at approximately constant velocity:

```text
7.8 km/s
```

starting at:

```text
0 km
```

Equation:

```text
y = 7.8x
```

where:

```text
x = seconds

y = kilometers traveled
```

---

# 15. Historical Insight

Writing equations from real-world relationships is the heart of mathematical modeling.

The major historical shift was moving from:

```text
verbal descriptions
```

to:

```text
symbolic models
```

Instead of saying:

> "The total cost is the fixed cost plus the cost per item times the number of items,"

we write:

```text
y = mx + b
```

That compression made mathematics dramatically more powerful.

It allowed scientists, engineers, economists, and later computer scientists to describe systems compactly, manipulate them, graph them, and make predictions.

---

# 16. Connections

```text
Slope
      ↓
Slope-Intercept Form
      ↓
Writing Linear Equations
      ↓
Graphing Linear Equations
      ↓
Systems of Equations
      ↓
Linear Regression
      ↓
Machine Learning
```

Writing linear equations is the first step toward building mathematical models from data.

---

# 17. Summary

To write a linear equation, identify:

```text
m = slope

b = y-intercept
```

Core form:

```text
y = mx + b
```

If given a point and slope, use:

```text
y − y₁ = m(x − x₁)
```

If given two points:

1. Find slope.
2. Use point-slope form.
3. Simplify.

Key idea:

> **A linear equation is a reusable model of constant change.**

---

# 18. Why This Topic Matters Later

| Future Topic         | Why This Chapter Matters                                                  |
| -------------------- | ------------------------------------------------------------------------- |
| Systems of Equations | You need to write equations before solving systems.                       |
| Linear Regression    | Regression writes the best-fitting linear equation from data.             |
| Functions            | Linear equations become linear functions.                                 |
| Economics            | Supply, demand, cost, and revenue models are often linear.                |
| Finance              | Linear models approximate returns, costs, and sensitivities.              |
| AI / ML              | Linear models are the foundation of regression and neural network layers. |
| DevOps / MLOps       | Capacity and latency models often start linear.                           |
| Space / Aerospace    | Constant-velocity and simple motion models are linear.                    |

---

# 19. Looking Ahead

Next we'll study **Systems of Linear Equations**.

So far, one equation has described one line.

A system uses **two or more equations**.

The key question becomes:

> **Where do the lines meet?**

That intersection point represents the solution that satisfies all equations at the same time.

---

# Navigation

⬅️ Previous: [Chapter 16 – Graphing Linear Equations](16_graphing_linear_equations.md)

➡️ Next: [Chapter 18 – Systems of Linear Equations](18_systems_of_linear_equations.md)
