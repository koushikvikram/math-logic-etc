# Chapter 16 – Graphing Linear Equations

## Table of Contents

- [Chapter 16 – Graphing Linear Equations](#chapter-16--graphing-linear-equations)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Learning Objectives](#learning-objectives)
- [1. Big Picture](#1-big-picture)
- [2. Why This Exists](#2-why-this-exists)
- [3. First Principles](#3-first-principles)
- [4. Core Definitions \& Rules](#4-core-definitions--rules)
  - [Method 1 — Table of Values](#method-1--table-of-values)
  - [Method 2 — Slope-Intercept Method](#method-2--slope-intercept-method)
  - [y-intercept](#y-intercept)
  - [x-intercept](#x-intercept)
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
  - [Type 2: Horizontal Line](#type-2-horizontal-line)
  - [Type 3: Vertical Line](#type-3-vertical-line)
  - [Type 4: Standard Form](#type-4-standard-form)
  - [Type 5: Table Method](#type-5-table-method)
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

* Coordinate Plane
* Linear Equations
* Slope

---

## Learning Objectives

By the end of this chapter, you should be able to:

* Graph a linear equation.
* Use the slope-intercept method.
* Use the table-of-values method.
* Identify the x-intercept and y-intercept.
* Interpret graphs in real-world situations.

---

# 1. Big Picture

A linear equation is more than symbols.

It represents **every point that satisfies the equation**.

Example:

Every point on the graph satisfies the equation.

Examples

|  x |  y |
| -: | -: |
| -1 | -1 |
|  0 |  1 |
|  1 |  3 |
|  2 |  5 |

When these points are plotted and connected, they form a straight line.

---

# 2. Why This Exists

Imagine you're monitoring cloud infrastructure.

| GPU Instances | Monthly Cost ($) |
| ------------: | ---------------: |
|             0 |              500 |
|             2 |             1100 |
|             4 |             1700 |
|             6 |             2300 |

Instead of reading a table forever, a graph lets you immediately answer questions like:

* Is the cost increasing?
* How quickly is it increasing?
* What happens at 10 GPUs?

Graphs reveal patterns much faster than tables.

---

# 3. First Principles

A graph is simply a collection of points.

Equation

```text
y = 2x + 1
```

Choose values for

```text
x
```

Compute

```text
y
```

Result

|  x |  y |
| -: | -: |
| -1 | -1 |
|  0 |  1 |
|  1 |  3 |
|  2 |  5 |

Plot the points.

Connect them.

You have graphed the equation.

---

# 4. Core Definitions & Rules

## Method 1 — Table of Values

Choose values for

```text
x
```

Calculate

```text
y
```

Plot.

---

## Method 2 — Slope-Intercept Method

Given

```text
y = mx + b
```

* Plot the y-intercept.
* Use the slope to find another point.
* Draw the line.

---

## y-intercept

Occurs when

```text
x = 0
```

Example

```text
y = 3x + 2
```

Set

```text
x = 0
```

```text
y = 2
```

The y-intercept is

```text
(0,2)
```

---

## x-intercept

Occurs when

```text
y = 0
```

Example

```text
y = 3x + 6
```

Set

```text
0 = 3x + 6
```

Solve

```text
x = -2
```

The x-intercept is

```text
(-2,0)
```

---

# 5. Intuition

Think of plotting cities on a map.

One city isn't very informative.

Two cities begin to show direction.

Many cities reveal an entire road.

Graphing equations works the same way.

Each point is one location.

Together they reveal the relationship.

---

# 6. Engineering Insight

Almost every engineering dashboard is a graph.

Examples

AI

```text
Epoch

↓

Loss
```

Cloud

```text
VM Count

↓

Monthly Cost
```

DevOps

```text
Time

↓

CPU Usage
```

Investing

```text
Time

↓

Portfolio Value
```

Space

```text
Time

↓

Altitude
```

Engineers spend much more time reading graphs than equations.

---

# 7. Step-by-Step Method

Graph

```text
y = 2x + 1
```

Step 1

Find the y-intercept.

```text
b = 1
```

Plot

```text
(0,1)
```

---

Step 2

Find the slope.

```text
m = 2
```

Meaning

```text
Rise = 2

Run = 1
```

Move

* 1 right
* 2 up

New point

```text
(1,3)
```

Repeat.

Next point

```text
(2,5)
```

---

Step 3

Draw a straight line through the points.

---

# 8. Worked Examples

## 🟢 Beginner

Graph

```text
y = x
```

Points

|  x |  y |
| -: | -: |
| -1 | -1 |
|  0 |  0 |
|  1 |  1 |

---

## 🟢 Beginner

Graph

```text
y = x + 2
```

Points

|  x |  y |
| -: | -: |
|  0 |  2 |
|  1 |  3 |
|  2 |  4 |

---

## 🟡 Intermediate

Graph

```text
y = -2x + 4
```

Points

|  x |  y |
| -: | -: |
|  0 |  4 |
|  1 |  2 |
|  2 |  0 |

---

## 🟡 Intermediate

Graph

```text
y = 3
```

Horizontal line through

```text
y = 3
```

---

## 🔴 Advanced

Graph

```text
x = 4
```

Vertical line through

```text
x = 4
```

Slope is undefined.

---

# 9. Real-World Examples

| Field                 | Equation                    | x-axis            | y-axis              | Why Graph It?             |
| --------------------- | --------------------------- | ----------------- | ------------------- | ------------------------- |
| AI / ML               | `Loss = -0.08x + 1.2`       | Epoch             | Loss                | Visualize model learning. |
| MLOps                 | `Latency = 2x + 100`        | Requests          | Latency             | Capacity planning.        |
| DevOps                | `CPU = 5x + 20`             | Services          | CPU Usage           | Infrastructure sizing.    |
| Cloud                 | `Cost = 300x + 500`         | GPU Instances     | Monthly Cost        | Budget forecasting.       |
| Software              | `Memory = 40x + 200`        | Users             | Memory              | Scalability analysis.     |
| Data Engineering      | `Time = 6x + 15`            | GB Processed      | Minutes             | Pipeline estimation.      |
| Databases             | `Latency = 4x + 30`         | Connections       | Query Time          | Performance tuning.       |
| Flow Metrics          | `Cycle Time = 1.5x + 2`     | Work Items        | Days                | Delivery forecasting.     |
| Entrepreneurship      | `Profit = 80x - 1200`       | Customers         | Profit              | Break-even analysis.      |
| Investing             | `Investment = 500x + 10000` | Months            | Total Contributions | Savings planning.         |
| Financial Engineering | `ΔPrice = -4x + 20`         | Interest Rate     | Price Change        | Sensitivity analysis.     |
| Economics             | `Demand = -5x + 120`        | Price             | Demand              | Market analysis.          |
| Game Theory           | `Payoff = 15x + 10`         | Cooperation       | Payoff              | Strategy evaluation.      |
| Space                 | `Distance = 7800x`          | Time              | Distance            | Constant-velocity motion. |
| Defense               | `Coverage = 50x + 20`       | Patrol Time       | Area Covered        | Mission planning.         |
| Systems Thinking      | `Inventory = 8x + 40`       | Time              | Inventory           | Stock growth.             |
| Health                | `Calories = 70x + 1500`     | Minutes Exercised | Calories Burned     | Exercise planning.        |
| Learning              | `Score = 4x + 50`           | Study Hours       | Score               | Learning progress.        |

---

# 10. Common Mistakes

## Mistake 1

Plotting

```text
(2,5)
```

as

```text
(5,2)
```

Always remember:

```text
(x,y)
```

---

## Mistake 2

Using the slope incorrectly.

If

```text
m = 3
```

Move

* 1 right
* 3 up

Not

* 3 right
* 1 up

---

## Mistake 3

Connecting points with curves.

Linear equations always produce straight lines.

---

## Mistake 4

Confusing x-intercept with y-intercept.

* x-intercept → y = 0
* y-intercept → x = 0

---

## Mistake 5

Choosing only one point.

A single point does **not** define a unique line.

You need at least **two** points.

# 11. Pattern Recognition

When asked to graph a linear equation, first identify its form.

---

## Type 1: Slope-Intercept Form

Equation

This is the easiest form to graph.

Workflow

```text
Find y-intercept

↓

Plot it

↓

Use slope

↓

Draw line
```

Example

```text
y = 2x + 1
```

Start at

```text
(0,1)
```

Slope

```text
2 = 2/1
```

Move

* 1 right
* 2 up

---

## Type 2: Horizontal Line

Equation

```text
y = 4
```

Every point has

```text
y = 4
```

Examples

```text
(-2,4)

(0,4)

(5,4)
```

Graph

A horizontal line.

Slope

```text
m = 0
```

---

## Type 3: Vertical Line

Equation

```text
x = -3
```

Every point has

```text
x = -3
```

Examples

```text
(-3,-2)

(-3,0)

(-3,8)
```

Graph

A vertical line.

Slope

Undefined.

---

## Type 4: Standard Form

Equation

```text
2x + y = 6
```

Rewrite

```text
y = -2x + 6
```

Now graph using the slope-intercept method.

---

## Type 5: Table Method

Sometimes the slope is not immediately obvious.

Choose several x-values.

Compute y.

Plot.

Connect.

This method always works.

---

## Decision Tree

```text
Equation

↓

Already in y = mx + b ?

↓

Yes

↓

Plot intercept

↓

Use slope

↓

Done

↓

No

↓

Rewrite into slope-intercept form

↓

Graph
```

---

# 12. Memory Hooks

## Hook 1

> **Intercept first, slope second.**

Always plot the intercept before moving.

---

## Hook 2

Slope tells you

> **how to move.**

Intercept tells you

> **where to start.**

---

## Hook 3

```text
y = mx + b
```

Think

```text
Start

↓

Move

↓

Repeat
```

---

## Hook 4

Horizontal

↓

Constant

```text
y
```

Vertical

↓

Constant

```text
x
```

---

## Hook 5

Every graph tells a story.

Ask:

* What is changing?
* How fast?
* Where does it start?

---

# 13. Practice Problems

## 🟢 Easy

### Problem 1

Graph

```text
y = x + 3
```

---

### Problem 2

Graph

```text
y = -x
```

---

### Problem 3

Graph

```text
y = 5
```

---

## 🟡 Medium

### Problem 4

Graph

```text
y = 3x - 2
```

---

### Problem 5

Rewrite and graph

```text
2x + y = 8
```

---

### Problem 6

Graph

```text
x = -4
```

---

## 🔴 Hard

### Problem 7

Find both intercepts.

```text
y = 2x + 6
```

---

### Problem 8

Find three points on

```text
y = -3x + 9
```

---

### Problem 9

Which graph has the steeper slope?

```text
y = 5x + 1
```

or

```text
y = 2x + 1
```

Explain why.

---

## ⭐ Challenge

A cloud provider charges

* $400 fixed monthly fee
* $250 per GPU

1. Write the equation.
2. Identify the slope.
3. Identify the y-intercept.
4. Sketch the graph.
5. Explain what the graph means.

---

## Solutions

### Problem 1

Possible points

|  x |  y |
| -: | -: |
| -1 |  2 |
|  0 |  3 |
|  1 |  4 |

---

### Problem 2

Possible points

|  x |  y |
| -: | -: |
| -1 |  1 |
|  0 |  0 |
|  1 | -1 |

---

### Problem 3

Horizontal line

```text
y = 5
```

---

### Problem 4

Start

```text
(0,-2)
```

Slope

```text
3 = 3/1
```

Additional points

```text
(1,1)

(2,4)
```

---

### Problem 5

Rewrite

```text
y = -2x + 8
```

Start

```text
(0,8)
```

Slope

```text
-2
```

---

### Problem 6

Vertical line

```text
x = -4
```

---

### Problem 7

y-intercept

```text
(0,6)
```

Set

```text
y = 0
```

```text
0 = 2x + 6

x = -3
```

x-intercept

```text
(-3,0)
```

---

### Problem 8

Possible points

```text
(0,9)

(1,6)

(2,3)
```

---

### Problem 9

```text
y = 5x + 1
```

has the steeper graph because

```text
5 > 2
```

The slope measures how much

```text
y
```

changes for every one-unit increase in

```text
x
```

---

### Challenge Solution

Equation

```text
Cost = 250x + 400
```

Slope

```text
250
```

Meaning

Each additional GPU increases the monthly cost by **$250**.

y-intercept

```text
400
```

Meaning

Even with zero GPUs, the monthly fee is **$400**.

The graph is a straight line starting at **(0, 400)** and rising by **250** for every additional GPU.

---

# 14. Real Interview / Industry Problems

## AI / Machine Learning

A training curve follows

```text
Loss = -0.05(Epoch) + 1.2
```

Graphing this equation shows the model's loss steadily decreasing over time.

A flatter slope indicates slower learning.

---

## MLOps

Deployment time is modeled as

```text
Deployment Time = 18(Models) + 90
```

Graph interpretation:

* y-intercept = 90 seconds startup overhead.
* Slope = 18 seconds per model.

This helps estimate deployment duration before running a release.

---

## DevOps / Platform Engineering

Infrastructure cost

```text
Cost = 35(Services) + 250
```

The graph helps estimate infrastructure costs as more microservices are deployed.

---

## Investing

Ignoring market returns,

```text
Portfolio Value = 1000(Months) + 5000
```

The graph illustrates how regular contributions increase invested capital.

> Later, you'll learn why investment growth usually follows a curve rather than a straight line due to compound interest.

---

## Space

During constant-speed flight,

```text
Distance = 7800(Time)
```

The graph is a straight line through the origin.

Its slope equals the spacecraft's velocity.

---

# 15. Historical Insight

Before computers, engineers and scientists routinely graphed equations by hand.

This allowed them to:

* estimate solutions,
* predict trends,
* compare competing designs,
* identify unusual behavior.

Even today, plotting data is often the first step in exploratory data analysis, systems engineering, and machine learning.

A good graph frequently reveals insights that are difficult to see in raw numbers alone.

---

# 16. Connections

```text
Coordinate Plane
        ↓
Linear Equations
        ↓
Slope
        ↓
Graphing Linear Equations
        ↓
Writing Linear Equations
        ↓
Systems of Linear Equations
        ↓
Linear Regression
        ↓
Machine Learning
```

Graphing is the bridge between symbolic equations and visual understanding.

---

# 17. Summary

Three common methods for graphing linear equations:

1. **Slope-Intercept Method**

   * Plot the y-intercept.
   * Use the slope.
   * Draw the line.

2. **Table Method**

   * Choose x-values.
   * Compute y-values.
   * Plot.
   * Connect.

3. **Intercept Method**

   * Find the x-intercept.
   * Find the y-intercept.
   * Draw the line.

Key ideas:

* A line is determined by **two distinct points**.
* The slope determines the line's direction.
* The y-intercept determines where the line begins.

---

# 18. Why This Topic Matters Later

| Future Topic                | Why This Chapter Matters                                         |
| --------------------------- | ---------------------------------------------------------------- |
| Writing Linear Equations    | You'll graph the equations you derive.                           |
| Systems of Linear Equations | Solutions are the intersection of graphed lines.                 |
| Linear Regression           | Regression fits the "best" straight line to data.                |
| Calculus                    | Graphs provide intuition for derivatives and integrals.          |
| AI / ML                     | Training curves and prediction lines are graphs.                 |
| Economics                   | Supply and demand are visualized using graphs.                   |
| Finance                     | Risk-return relationships are graphed.                           |
| Systems Thinking            | Behavior-over-time diagrams are graphs of variables versus time. |

---

# 19. Looking Ahead

Next we'll study **Chapter 17 – Writing Linear Equations**.

Instead of graphing an equation that is already given, you'll learn to **create the equation yourself** from information such as:

* two points,
* one point and a slope,
* or a real-world scenario.

This is a major milestone because you'll move from **reading mathematical models** to **building mathematical models**—a skill used constantly in AI, engineering, economics, finance, and scientific research.

---

# Navigation

⬅️ Previous: [Chapter 15 – Slope](15_slope.md)

➡️ Next: [Chapter 17 – Writing Linear Equations](17_writing_linear_equations.md)

