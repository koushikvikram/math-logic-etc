# Chapter 11 – One-Step Inequalities

## Table of Contents

- [Chapter 11 – One-Step Inequalities](#chapter-11--one-step-inequalities)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Learning Objectives](#learning-objectives)
- [1. Big Picture](#1-big-picture)
- [2. Why This Exists](#2-why-this-exists)
- [3. First Principles](#3-first-principles)
  - [Equality](#equality)
  - [Inequality Symbols](#inequality-symbols)
  - [Example](#example)
  - [Number Line](#number-line)
- [4. Core Definitions \& Rules](#4-core-definitions--rules)
  - [Addition](#addition)
  - [Subtraction](#subtraction)
  - [Multiplication](#multiplication)
  - [Negative Numbers](#negative-numbers)
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
  - [Type 1: Addition](#type-1-addition)
  - [Type 2: Subtraction](#type-2-subtraction)
  - [Type 3: Positive Multiplication](#type-3-positive-multiplication)
  - [Type 4: Positive Division](#type-4-positive-division)
  - [Type 5: Negative Multiplication](#type-5-negative-multiplication)
  - [Type 6: Negative Division](#type-6-negative-division)
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
* Number Line

---

## Learning Objectives

By the end of this chapter, you should be able to:

* Explain what an inequality is.
* Solve one-step inequalities.
* Graph solutions on a number line.
* Explain why the inequality sign reverses when multiplying or dividing by a negative number.
* Apply inequalities to engineering and business constraints.

---

# 1. Big Picture

An **equation** asks:

> What value makes both sides exactly equal?

```text id="osi101"
x+4=9
```

Answer

```text id="osi102"
x=5
```

Only one solution.

---

An **inequality** asks:

> Which values satisfy a condition?

Example

```text id="osi103"
x+4>9
```

Subtract

```text id="osi104"
4
```

```text id="osi105"
x>5
```

Now there are **infinitely many** solutions.

Examples

```text id="osi106"
6

10

100

1,000,000
```

All satisfy the inequality.

---

# 2. Why This Exists

Most engineering problems don't require one exact answer.

Instead they involve **constraints**.

Example

A server must maintain latency below

```text id="osi107"
100 ms
```

Model latency

```text id="osi108"
x
```

Network latency

```text id="osi109"
18 ms
```

Requirement

```text id="osi110"
x+18<100
```

Subtract

```text id="osi111"
18
```

```text id="osi112"
x<82
```

The model may take

```text id="osi113"
81

50

20
```

milliseconds.

There are many acceptable values.

That's why inequalities exist.

---

# 3. First Principles

## Equality

```text id="osi114"
=
```

means

> Exactly equal.

---

## Inequality Symbols

| Symbol | Meaning                  |
| ------ | ------------------------ |
| `<`    | Less than                |
| `>`    | Greater than             |
| `≤`    | Less than or equal to    |
| `≥`    | Greater than or equal to |

---

## Example

```text id="osi115"
x<10
```

Every number less than

```text id="osi116"
10
```

is a solution.

---

## Number Line

```text
<----------------○====================>

               10
```

Open circle

→

```text id="osi117"
10
```

is **not included**.

---

```text
<====================●---------------->

                     10
```

Closed circle

→

```text id="osi118"
10
```

**is included**.

---

# 4. Core Definitions & Rules

## Addition

If

```text id="osi119"
x+a>b
```

Subtract

```text id="osi120"
a
```

```text id="osi121"
x>b−a
```

---

## Subtraction

If

```text id="osi122"
x−a<b
```

Add

```text id="osi123"
a
```

---

## Multiplication

If multiplying or dividing by a **positive** number,

the inequality direction stays the same.

---

## Negative Numbers

If multiplying or dividing by a **negative** number,

the inequality **reverses direction**.

Example

```text id="osi124"
−2x<8
```

Divide by

```text id="osi125"
−2
```

```text id="osi126"
x>−4
```

Notice

```text id="osi127"
<
```

became

```text id="osi128"
>
```

---

# 5. Intuition

Think about a number line.

Suppose

```text id="osi129"
3<7
```

Multiply both sides by

```text id="osi130"
−1
```

```text id="osi131"
−3

?

−7
```

Which number is larger?

```text id="osi132"
−3>−7
```

The direction flips.

The same thing happens in inequalities.

This is **not** a special algebra rule.

It comes from how negative numbers are ordered on the number line.

---

# 6. Engineering Insight

Engineering requirements are almost always inequalities.

Examples

Cloud SLA

```text id="osi133"
Latency<150 ms
```

AI

```text id="osi134"
Accuracy≥95%
```

Memory

```text id="osi135"
RAM≤64 GB
```

Finance

```text id="osi136"
Risk<5%
```

Engineering is largely about satisfying constraints rather than finding exact values.

---

# 7. Step-by-Step Method

Example

```text id="osi137"
x+8≤20
```

Step 1

Subtract

```text id="osi138"
8
```

from both sides.

```text id="osi139"
x≤12
```

---

Example

```text id="osi140"
−4x>20
```

Step 1

Divide by

```text id="osi141"
−4
```

Step 2

Reverse the inequality.

```text id="osi142"
x<−5
```

---

Step 3

Verify.

Pick a value satisfying the inequality.

Example

```text id="osi143"
x=−6
```

```text id="osi144"
−4(−6)=24

24>20
```

True.

---

# 8. Worked Examples

## 🟢 Beginner

Solve

```text id="osi145"
x+7<15
```

```text id="osi146"
x<8
```

---

## 🟢 Beginner

```text id="osi147"
x−4≥9
```

```text id="osi148"
x≥13
```

---

## 🟡 Intermediate

```text id="osi149"
5x≤25
```

```text id="osi150"
x≤5
```

---

## 🟡 Intermediate

```text id="osi151"
x/6>8
```

```text id="osi152"
x>48
```

---

## 🔴 Advanced

```text id="osi153"
−3x≤12
```

Divide by

```text id="osi154"
−3
```

Reverse

```text id="osi155"
x≥−4
```

---

# 9. Real-World Examples

| Field                 | Inequality              | Meaning                           |
| --------------------- | ----------------------- | --------------------------------- |
| AI / ML               | `Accuracy ≥ 97%`        | Minimum acceptable model accuracy |
| MLOps                 | `Latency < 80 ms`       | SLA requirement                   |
| DevOps                | `CPU ≤ 75%`             | Safe utilization limit            |
| Cloud                 | `Cost ≤ $2,000`         | Monthly budget                    |
| Software              | `Memory < 512 MB`       | Runtime constraint                |
| Data Engineering      | `Pipeline < 30 min`     | Processing target                 |
| Databases             | `Query < 100 ms`        | Performance objective             |
| Flow Metrics          | `Cycle Time ≤ 5 days`   | Delivery goal                     |
| Entrepreneurship      | `Expenses < Revenue`    | Business sustainability           |
| Investing             | `Allocation ≤ 10%`      | Portfolio risk limit              |
| Financial Engineering | `VaR ≤ $1M`             | Risk constraint                   |
| Economics             | `Inflation < 3%`        | Policy target                     |
| Game Theory           | `Cost ≤ Reward`         | Profitable strategy               |
| Space                 | `Payload ≤ 22 t`        | Rocket capacity                   |
| Defense               | `Response Time < 5 min` | Operational requirement           |
| Systems Thinking      | `Outflow ≤ Inflow`      | Sustainable system                |
| Health                | `Calories ≤ 2200`       | Daily intake target               |
| Learning              | `Errors < 5`            | Practice goal                     |

---

# 10. Common Mistakes

## Mistake 1

Treating inequalities like equations.

Remember:

There are usually **many** solutions.

---

## Mistake 2

Forgetting to reverse the sign.

Incorrect

```text id="osi156"
−2x<8

↓

x<−4
```

Correct

```text id="osi157"
x>−4
```

---

## Mistake 3

Using a closed circle for

```text id="osi158"
<
```

or

```text id="osi159"
>
```

Use an **open** circle.

---

## Mistake 4

Using an open circle for

```text id="osi160"
≤
```

or

```text id="osi161"
≥
```

Use a **closed** circle.

---

## Mistake 5

Not testing a value.

Choose one number that satisfies your answer and verify it in the original inequality.

# 11. Pattern Recognition

The first question is:

> **What operation is attached to the variable?**

The second question is even more important:

> **Am I multiplying or dividing by a negative number?**

If **yes**, reverse the inequality.

---

## Type 1: Addition

Example

```text id="osi201"
x + 6 > 18
```

Undo

```text id="osi202"
−6
```

Answer

```text id="osi203"
x > 12
```

No reversal.

---

## Type 2: Subtraction

Example

```text id="osi204"
x − 9 ≤ 14
```

Undo

```text id="osi205"
+9
```

Answer

```text id="osi206"
x ≤ 23
```

No reversal.

---

## Type 3: Positive Multiplication

Example

```text id="osi207"
5x ≥ 40
```

Undo

```text id="osi208"
÷5
```

Answer

```text id="osi209"
x ≥ 8
```

No reversal.

---

## Type 4: Positive Division

Example

```text id="osi210"
x/4 < 7
```

Undo

```text id="osi211"
×4
```

Answer

```text id="osi212"
x < 28
```

No reversal.

---

## Type 5: Negative Multiplication

Example

```text id="osi213"
−3x > 12
```

Undo

```text id="osi214"
÷(−3)
```

Reverse

```text id="osi215"
x < −4
```

---

## Type 6: Negative Division

Example

```text id="osi216"
x/(−2) ≤ 6
```

Undo

```text id="osi217"
×(−2)
```

Reverse

```text id="osi218"
x ≥ −12
```

---

## Decision Tree

```text id="osi219"
Addition/Subtraction?

↓

Undo normally

↓

Multiplication/Division?

↓

Positive?

↓

Keep direction

↓

Negative?

↓

Reverse direction
```

---

# 12. Memory Hooks

## Hook 1

Equations balance.

Inequalities compare.

---

## Hook 2

Positive numbers

↓

Nothing changes.

Negative numbers

↓

Everything flips.

---

## Hook 3

Think about facing a mirror.

Turning around reverses left and right.

Multiplying or dividing by a negative reverses the direction on the number line.

---

## Hook 4

Open circle

```text id="osi220"
<

>
```

The endpoint is **not** included.

---

## Hook 5

Closed circle

```text id="osi221"
≤

≥
```

The endpoint **is** included.

---

# 13. Practice Problems

## 🟢 Easy

### Problem 1

Solve

```text id="osi222"
x + 9 > 16
```

---

### Problem 2

Solve

```text id="osi223"
x − 7 ≤ 10
```

---

### Problem 3

Solve

```text id="osi224"
4x < 32
```

---

## 🟡 Medium

### Problem 4

Solve

```text id="osi225"
x/9 ≥ 6
```

---

### Problem 5

Solve

```text id="osi226"
−5x > 25
```

---

### Problem 6

Solve

```text id="osi227"
x/(−8) < 2
```

---

## 🔴 Hard

### Problem 7

Solve

```text id="osi228"
−0.5x ≥ 6
```

---

### Problem 8

Solve

```text id="osi229"
2.5x < 17.5
```

---

### Problem 9

Graph

```text id="osi230"
x ≥ −3
```

on a number line.

---

## ⭐ Challenge

An MLOps service must satisfy the following SLA:

```text id="osi231"
Model Latency

+

18 ms

<

75 ms
```

Let model latency be

```text id="osi232"
x
```

1. Write the inequality.
2. Solve it.
3. Explain what the solution means.

---

## Solutions

### Problem 1

```text id="osi233"
x > 7
```

---

### Problem 2

```text id="osi234"
x ≤ 17
```

---

### Problem 3

```text id="osi235"
x < 8
```

---

### Problem 4

```text id="osi236"
x ≥ 54
```

---

### Problem 5

```text id="osi237"
x < −5
```

---

### Problem 6

Multiply by

```text id="osi238"
−8
```

Reverse

```text id="osi239"
x > −16
```

---

### Problem 7

Divide by

```text id="osi240"
−0.5
```

Reverse

```text id="osi241"
x ≤ −12
```

---

### Problem 8

```text id="osi242"
x < 7
```

---

### Problem 9

```text id="osi243"
<====================●==================>

                    −3
```

---

### Challenge Solution

Equation

```text id="osi244"
x + 18 < 75
```

Subtract

```text id="osi245"
18
```

```text id="osi246"
x < 57
```

Interpretation:

The model must complete inference in **less than 57 ms** to satisfy the service-level agreement.

---

# 14. Real Interview / Industry Problems

## AI / Machine Learning

A model is only approved if

```text id="osi247"
Accuracy ≥ 96%
```

A preprocessing step contributes

```text id="osi248"
2%
```

Let the base model accuracy be

```text id="osi249"
x
```

Inequality

```text id="osi250"
x + 2 ≥ 96
```

Solution

```text id="osi251"
x ≥ 94%
```

---

## MLOps

Inference latency must satisfy

```text id="osi252"
x + 12 < 80
```

Solution

```text id="osi253"
x < 68 ms
```

---

## DevOps / Platform Engineering

CPU utilization must remain below

```text id="osi254"
75%
```

Operating system overhead

```text id="osi255"
15%
```

Application usage

```text id="osi256"
x
```

Inequality

```text id="osi257"
x + 15 < 75
```

Solution

```text id="osi258"
x < 60%
```

---

## Investing

An investor limits exposure to a stock to

```text id="osi259"
10%
```

Current holdings

```text id="osi260"
2%
```

Additional purchase

```text id="osi261"
x
```

Inequality

```text id="osi262"
x + 2 ≤ 10
```

Solution

```text id="osi263"
x ≤ 8%
```

---

## Space

A launch vehicle can carry at most

```text id="osi264"
22 tonnes
```

The spacecraft weighs

```text id="osi265"
18 tonnes
```

Remaining payload

```text id="osi266"
x
```

Inequality

```text id="osi267"
18 + x ≤ 22
```

Solution

```text id="osi268"
x ≤ 4 tonnes
```

---

# 15. Historical Insight

The systematic study of inequalities developed much later than the study of equations.

While ancient mathematicians focused primarily on finding exact values, scientists and engineers increasingly needed to describe **limits** rather than exact answers:

* maximum loads,
* minimum temperatures,
* acceptable errors,
* safety margins,
* performance requirements.

Today, inequalities are fundamental to optimization, engineering design, economics, machine learning, and operations research because real-world systems almost always operate within constraints rather than at exact values.

---

# 16. Connections

```text id="osi269"
Equations
      ↓
One-Step Equations
      ↓
One-Step Inequalities
      ↓
Two-Step Inequalities
      ↓
Linear Programming
      ↓
Optimization
      ↓
Machine Learning
```

Many optimization problems are simply systems of inequalities defining what solutions are feasible.

---

# 17. Summary

One-step inequalities are solved almost exactly like one-step equations.

The only new rule is:

> **If you multiply or divide by a negative number, reverse the inequality sign.**

General workflow:

1. Identify the operation.
2. Apply the inverse.
3. Reverse the inequality **only** if multiplying or dividing by a negative.
4. Verify with a test value.
5. Graph the solution if required.

---

# 18. Why This Topic Matters Later

| Future Topic                | Why This Chapter Matters                                                |
| --------------------------- | ----------------------------------------------------------------------- |
| Two-Step Inequalities       | Extends the same ideas with additional operations.                      |
| Compound Inequalities       | Combines multiple inequality constraints.                               |
| Absolute Value Inequalities | Uses inequality-solving techniques repeatedly.                          |
| Linear Programming          | Feasible regions are defined by inequalities.                           |
| Optimization                | Constraints are written as inequalities.                                |
| AI / ML                     | Training often involves optimization under constraints.                 |
| Economics                   | Budgets, capacities, and policy targets are modeled using inequalities. |
| Engineering                 | Safety limits, tolerances, and design specifications are inequalities.  |

---

# 19. Looking Ahead

In the next chapter we'll study **Two-Step Inequalities**.

You'll combine everything you've learned so far:

* inverse operations,
* order of operations,
* and the rule for reversing inequalities when multiplying or dividing by a negative number.

The solving process will feel very similar to two-step equations, with careful attention to the direction of the inequality symbol.

---

# Navigation

⬅️ Previous: [10_multi_step_equations.md](10_multi_step_equations.md)

➡️ Next: [12_two_step_inequalities.md](12_two_step_inequalities.md)
