# Chapter 10 – Multi-Step Equations

## Table of Contents

- [Chapter 10 – Multi-Step Equations](#chapter-10--multi-step-equations)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Learning Objectives](#learning-objectives)
- [1. Big Picture](#1-big-picture)
- [2. Why This Exists](#2-why-this-exists)
- [3. First Principles](#3-first-principles)
  - [Simplify First](#simplify-first)
- [4. Core Definitions \& Rules](#4-core-definitions--rules)
  - [Distributive Property](#distributive-property)
  - [Combining Like Terms](#combining-like-terms)
  - [Moving Variables](#moving-variables)
  - [General Strategy](#general-strategy)
- [5. Intuition](#5-intuition)
- [6. Engineering Insight](#6-engineering-insight)
- [7. Step-by-Step Method](#7-step-by-step-method)
  - [Step 1](#step-1)
  - [Step 2](#step-2)
  - [Step 3](#step-3)
  - [Step 4](#step-4)
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
  - [Type 1: Parentheses First](#type-1-parentheses-first)
  - [Type 2: Like Terms First](#type-2-like-terms-first)
  - [Type 3: Variables on Both Sides](#type-3-variables-on-both-sides)
  - [Type 4: Parentheses on Both Sides](#type-4-parentheses-on-both-sides)
  - [Type 5: Fractions](#type-5-fractions)
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

* Variables
* Combining Like Terms
* Order of Operations
* One-Step Equations
* Two-Step Equations

---

## Learning Objectives

By the end of this chapter, you should be able to:

* Solve multi-step equations.
* Simplify each side before isolating the variable.
* Apply the distributive property correctly.
* Combine like terms.
* Solve equations with variables on both sides.
* Verify solutions.

---

# 1. Big Picture

A **multi-step equation** requires more than two steps.

Examples

```text
3(x+4)=27
```

```text
5x+7=2x+22
```

```text
4(x−2)+5=17
```

Unlike previous chapters, these equations usually require you to:

* distribute,
* combine like terms,
* move variables,
* isolate the unknown.

The overall goal never changes:

> **Find the value that makes both sides equal.**

---

# 2. Why This Exists

Suppose an AI inference pipeline has:

* a fixed preprocessing cost,
* a model execution cost,
* and a post-processing cost.

The total latency is

```text
4(x+5)=120
```

where

* `5 ms` is preprocessing,
* `x ms` is model execution per stage,
* `4` identical stages exist.

To determine the model execution time, you must first simplify the equation.

Real engineering systems naturally produce multi-step equations.

---

# 3. First Principles

Every multi-step equation follows the same strategy.

```text
Simplify

↓

Isolate

↓

Solve

↓

Check
```

Never try to isolate the variable before simplifying.

Example

```text
3(x+2)=18
```

First distribute.

```text
3x+6=18
```

Now solve.

---

## Simplify First

You may need to:

* distribute,
* combine constants,
* combine like terms.

Only then begin isolating the variable.

---

# 4. Core Definitions & Rules

## Distributive Property

```text
a(b+c)=ab+ac
```

Example

```text
4(x+3)

=

4x+12
```

---

## Combining Like Terms

```text
3x+5x

=

8x
```

---

## Moving Variables

Example

```text
5x+7=2x+22
```

Subtract

```text
2x
```

from both sides.

```text
3x+7=22
```

Continue solving.

---

## General Strategy

```text
Distribute

↓

Combine Like Terms

↓

Move Variables

↓

Move Constants

↓

Divide

↓

Check
```

---

# 5. Intuition

Imagine cleaning a workshop.

You don't immediately organize the tools.

First you:

* remove trash,
* gather similar tools,
* clear the workspace.

Only then do you organize everything.

Equations work the same way.

First simplify.

Then solve.

Trying to solve before simplifying usually creates unnecessary work.

---

# 6. Engineering Insight

Most engineering formulas are not one-step equations.

Example

Cloud cost

```text
4(x+120)=2400
```

The expression inside the parentheses represents

* compute,
* storage,
* monitoring.

Before finding the compute cost, the entire expression must be simplified.

Engineers routinely solve equations like these when modeling systems.

---

# 7. Step-by-Step Method

Example

```text
5(x−2)=40
```

## Step 1

Distribute.

```text
5x−10=40
```

---

## Step 2

Move constants.

```text
5x=50
```

---

## Step 3

Divide.

```text
x=10
```

---

## Step 4

Check.

```text
5(10−2)

=40
```

Correct.

---

# 8. Worked Examples

## 🟢 Beginner

Solve

```text
2(x+4)=18
```

```text
2x+8=18

2x=10

x=5
```

---

## 🟢 Beginner

```text
4x+9=2x+19
```

```text
2x+9=19

2x=10

x=5
```

---

## 🟡 Intermediate

```text
3(x−2)+5=20
```

```text
3x−6+5=20

3x−1=20

3x=21

x=7
```

---

## 🟡 Intermediate

```text
6x−8=2x+20
```

```text
4x−8=20

4x=28

x=7
```

---

## 🔴 Advanced

```text
4(x+5)=2(x+17)
```

```text
4x+20=2x+34

2x+20=34

2x=14

x=7
```

---

# 9. Real-World Examples

| Field                 | Equation        | Unknown                      |
| --------------------- | --------------- | ---------------------------- |
| AI / ML               | `3(x+2)=48`     | Time per inference stage     |
| MLOps                 | `5x+12=2x+57`   | Model latency                |
| DevOps                | `6(x−3)=54`     | CPU allocation per service   |
| Cloud                 | `250(x+2)=2000` | Number of virtual machines   |
| Software              | `8x+30=4x+90`   | Runtime per module           |
| Data Engineering      | `5(x+4)=140`    | Batch duration               |
| Databases             | `4x+12=3x+28`   | Query execution time         |
| Flow Metrics          | `2(x+3)=30`     | Average work duration        |
| Entrepreneurship      | `400x+800=3200` | Products sold                |
| Investing             | `30x+150=750`   | Shares purchased             |
| Financial Engineering | `12x+6=4x+54`   | Bond pricing variable        |
| Economics             | `5x−4=2x+20`    | Economic indicator           |
| Game Theory           | `4x+10=2x+24`   | Strategy payoff              |
| Space                 | `180(x+2)=1440` | Fuel per stage               |
| Defense               | `7x+14=3x+42`   | Radar coverage               |
| Systems Thinking      | `6(x−1)=54`     | Inventory inflow             |
| Health                | `250(x+1)=1750` | Calories per meal            |
| Learning              | `15x+10=85`     | Questions solved per session |

---

# 10. Common Mistakes

## Mistake 1

Forgetting to distribute.

Incorrect

```text
3(x+4)

=

3x+4
```

Correct

```text
3x+12
```

---

## Mistake 2

Not distributing to **every** term.

```text
5(a−2)

=

5a−10
```

not

```text
5a−2
```

---

## Mistake 3

Moving variables before simplifying.

Always simplify first.

---

## Mistake 4

Combining unlike terms.

Incorrect

```text
3x+2

=

5x
```

---

## Mistake 5

Forgetting to verify.

Substitute the answer into the original equation.

# 11. Pattern Recognition

Before solving any multi-step equation, ask:

> **What must I simplify first?**

Almost every equation follows one of a handful of patterns.

---

## Type 1: Parentheses First

Example

```text
4(x+3)=28
```

Pattern

```text
Parentheses

↓

Distribute

↓

Solve
```

---

## Type 2: Like Terms First

Example

```text
3x+7+2x=27
```

Pattern

```text
Combine

↓

5x+7=27

↓

Solve
```

---

## Type 3: Variables on Both Sides

Example

```text
7x+8=3x+24
```

Pattern

```text
Move variables

↓

Move constants

↓

Solve
```

---

## Type 4: Parentheses on Both Sides

Example

```text
3(x+2)=2(x+8)
```

Pattern

```text
Distribute both sides

↓

Combine

↓

Move variables

↓

Solve
```

---

## Type 5: Fractions

Example

```text
x/4+6=18
```

Pattern

```text
Solve exactly like a two-step equation.
```

---

## Universal Workflow

Whenever you're unsure, follow this checklist.

```text
Parentheses?

↓

Distribute

↓

Like terms?

↓

Combine

↓

Variables on both sides?

↓

Move variables

↓

Move constants

↓

Divide / Multiply

↓

Check
```

---

# 12. Memory Hooks

## Hook 1

> **Simplify before you solve.**

---

## Hook 2

Think:

```text
Clean

↓

Solve
```

Don't organize a messy room before picking everything up.

---

## Hook 3

Parentheses hide work.

Open them first.

---

## Hook 4

Move variables together.

Move constants together.

This makes the equation much easier to see.

---

## Hook 5

Never skip the check.

One substitution catches almost every arithmetic mistake.

---

# 13. Practice Problems

## 🟢 Easy

### Problem 1

Solve

```text
3(x+5)=24
```

---

### Problem 2

Solve

```text
4x+9=3x+15
```

---

### Problem 3

Solve

```text
2x+8+5x=43
```

---

## 🟡 Medium

### Problem 4

Solve

```text
5(x−4)=35
```

---

### Problem 5

Solve

```text
8x−15=5x+18
```

---

### Problem 6

Solve

```text
6(x+3)=4(x+9)
```

---

## 🔴 Hard

### Problem 7

Solve

```text
7(x−2)+5=3(x+6)
```

---

### Problem 8

Solve

```text
5(2x+3)=4(x+9)
```

---

### Problem 9

Solve

```text
3(x−4)+2x=5(x−1)
```

---

## ⭐ Challenge

An AI inference service consists of:

* a fixed startup cost of

```text
8 ms
```

* plus

```text
4
```

identical inference stages.

Each stage takes

```text
x+3
```

milliseconds.

The total latency is

```text
76 ms
```

Write the equation.

Solve it.

Verify your answer.

---

## Solutions

### Problem 1

```text
3x+15=24

3x=9

x=3
```

---

### Problem 2

```text
x=6
```

---

### Problem 3

```text
7x+8=43

7x=35

x=5
```

---

### Problem 4

```text
5x−20=35

5x=55

x=11
```

---

### Problem 5

```text
3x=33

x=11
```

---

### Problem 6

```text
6x+18=4x+36

2x=18

x=9
```

---

### Problem 7

```text
7x−14+5=3x+18

7x−9=3x+18

4x=27

x=27/4
```

---

### Problem 8

```text
10x+15=4x+36

6x=21

x=7/2
```

---

### Problem 9

```text
3x−12+2x=5x−5

5x−12=5x−5

−12≠−5
```

No solution.

---

### Challenge Solution

Equation

```text
4(x+3)+8=76
```

Distribute

```text
4x+12+8=76

4x+20=76

4x=56

x=14
```

Verification

```text
4(14+3)+8

=

68+8

=

76
```

Correct.

---

# 14. Real Interview / Industry Problems

## AI / Machine Learning

A neural network has

```text
5(x+2)=85
```

where

```text
x
```

is the inference time per layer.

Solution

```text
5x+10=85

5x=75

x=15 ms
```

---

## MLOps

A deployment consists of

```text
6x+18=4x+54
```

where

```text
x
```

is deployment time per service.

Solution

```text
2x=36

x=18 minutes
```

---

## DevOps / Platform Engineering

CPU allocation

```text
8(x−2)=96
```

Solution

```text
8x−16=96

8x=112

x=14 cores
```

---

## Investing

An investor purchases

```text
25x+150=1400
```

where

```text
150
```

is the brokerage fee.

Solution

```text
25x=1250

x=50 shares
```

---

## Space

A launch vehicle burns fuel according to

```text
180(x+1)=1620
```

Solution

```text
180x+180=1620

180x=1440

x=8 stages
```

---

# 15. Historical Insight

The systematic solution of increasingly complex linear equations became a hallmark of algebra during the medieval Islamic Golden Age.

Rather than inventing a different method for every new equation, mathematicians realized that all linear equations could be solved using the same sequence:

1. Simplify.
2. Restore equality.
3. Isolate the unknown.

That insight transformed algebra from a collection of tricks into a general problem-solving method.

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
Linear Algebra
```

Multi-step equations are the foundation for solving almost every linear problem encountered later in mathematics and engineering.

---

# 17. Summary

Every multi-step equation follows the same workflow:

```text
Distribute

↓

Combine Like Terms

↓

Move Variables

↓

Move Constants

↓

Divide / Multiply

↓

Check
```

Remember:

* Simplify first.
* Solve second.
* Verify last.

---

# 18. Why This Topic Matters Later

| Future Topic          | Why This Chapter Matters                                                      |
| --------------------- | ----------------------------------------------------------------------------- |
| Inequalities          | The same simplification strategy applies before solving.                      |
| Systems of Equations  | Each equation is typically simplified first.                                  |
| Functions             | Simplifying expressions makes functions easier to analyze.                    |
| Linear Algebra        | Matrix equations are built from the same principles.                          |
| Calculus              | Algebraic simplification is essential before differentiation and integration. |
| AI / ML               | Model equations are simplified during derivations.                            |
| Optimization          | Constraints often require solving multi-step equations.                       |
| Economics             | Linear models are manipulated using these techniques.                         |
| Financial Engineering | Pricing formulas frequently require rearranging multi-step equations.         |

---

# 19. Looking Ahead

In the next chapter we'll study **One-Step Inequalities**.

You'll discover that solving inequalities feels very similar to solving equations—with one important new rule:

> **When multiplying or dividing by a negative number, the inequality sign reverses direction.**

Understanding *why* that happens will be the main focus of the next chapter.

---

# Navigation

⬅️ Previous: [Chapter 9 – Two-Step Equations](9_two_step_equations.md)

➡️ Next: [Chapter 11 – One-Step Inequalities](11_one_step_inequalities.md)
