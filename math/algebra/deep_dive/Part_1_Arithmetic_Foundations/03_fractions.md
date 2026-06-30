# Chapter 3 – Fractions

## Table of Contents

- [Chapter 3 – Fractions](#chapter-3--fractions)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Learning Objectives](#learning-objectives)
- [1. Big Picture](#1-big-picture)
- [2. Why This Exists](#2-why-this-exists)
- [3. First Principles](#3-first-principles)
  - [Parts of a Fraction](#parts-of-a-fraction)
- [4. Core Formulas](#4-core-formulas)
  - [Equivalent Fractions](#equivalent-fractions)
  - [Simplifying Fractions](#simplifying-fractions)
  - [Addition](#addition)
  - [Subtraction](#subtraction)
  - [Multiplication](#multiplication)
  - [Division](#division)
  - [Reciprocal](#reciprocal)
- [5. Intuition](#5-intuition)
- [6. Engineering Insight](#6-engineering-insight)
- [7. Step-by-Step Method](#7-step-by-step-method)
  - [Simplifying Fractions](#simplifying-fractions-1)
  - [Adding Fractions](#adding-fractions)
  - [Dividing Fractions](#dividing-fractions)
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
  - [Recognizing Fraction Problems](#recognizing-fraction-problems)
    - [Type 1: Simplify](#type-1-simplify)
    - [Type 2: Add Fractions](#type-2-add-fractions)
    - [Type 3: Multiply Fractions](#type-3-multiply-fractions)
    - [Type 4: Divide Fractions](#type-4-divide-fractions)
    - [Type 5: Convert Between Forms](#type-5-convert-between-forms)
- [12. Memory Hooks](#12-memory-hooks)
  - [Hook 1](#hook-1)
  - [Hook 2](#hook-2)
  - [Hook 3](#hook-3)
  - [Hook 4](#hook-4)
  - [Hook 5](#hook-5)
  - [Hook 6](#hook-6)
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

* Multiplication
* Division
* Factors
* Greatest Common Divisor (GCD)

---

## Learning Objectives

By the end of this chapter, you should be able to:

* Explain what a fraction represents.
* Simplify fractions.
* Convert between improper fractions and mixed numbers.
* Add, subtract, multiply, and divide fractions.
* Explain why engineers often prefer fractions over decimals.

---

# 1. Big Picture

A **fraction** represents a relationship between two quantities.

```text
Numerator
──────────
Denominator
```

It answers questions like:

* How much?
* What portion?
* Compared to what?

Examples

```text
1/2

3/4

7/10
```

Fractions are **exact**.

Unlike many decimals, they lose no information.

```text
1/3
```

is exact.

```text
0.333333...
```

is only an approximation.

---

# 2. Why This Exists

Whole numbers are not enough.

Imagine you own half of a company.

Whole numbers can only say:

```text
0

1
```

Neither is correct.

Fractions let us describe quantities between whole numbers.

They naturally arise whenever something is divided:

* ownership
* memory
* probability
* portfolio allocation
* bandwidth
* time
* fuel
* inventory

Without fractions, mathematics would struggle to describe the real world accurately.

---

# 3. First Principles

A fraction is simply **division written in another form**.

```text
a/b

means exactly the same as

a ÷ b
```

Example

```text
8/4

=8÷4

=2
```

Another example

```text
3/4

=3÷4

=0.75
```

Notice something important.

A fraction is **not two separate numbers**.

It is **one number**.

Just like

```text
5
```

or

```text
π
```

or

```text
√2
```

---

## Parts of a Fraction

```text
 3
───
 4
```

Top:

```text
Numerator
```

Bottom:

```text
Denominator
```

Meaning:

```text
3 parts

out of

4 equal parts
```

---

# 4. Core Formulas

## Equivalent Fractions

Multiply numerator and denominator by the same number.

```text
a/b

=

ak/bk
```

Example

```text
1/2

=2/4

=5/10

=50/100
```

---

## Simplifying Fractions

Divide numerator and denominator by the GCD.

Example

```text
18/24

=3/4
```

---

## Addition

Same denominator

```text
a/c+b/c

=(a+b)/c
```

---

Different denominators

```text
a/b+c/d

=(ad+bc)/bd
```

(or use the least common denominator).

---

## Subtraction

```text
a/c-b/c

=(a-b)/c
```

---

## Multiplication

```text
a/b × c/d

=ac/bd
```

---

## Division

Multiply by the reciprocal.

```text
a/b ÷ c/d

=a/b × d/c
```

---

## Reciprocal

```text
a/b

↓

b/a
```

---

# 5. Intuition

Forget pizza.

Think like an engineer.

Suppose a server has

```text
64 GB RAM
```

An application uses

```text
16 GB
```

Fraction used

```text
16/64

=1/4
```

Another example.

A startup has four founders.

You own

```text
1/4
```

of the company.

The fraction represents your ownership.

One more.

A rocket can carry

```text
20 tonnes
```

Today's payload

```text
15 tonnes
```

Payload utilization

```text
15/20

=3/4
```

Fractions naturally appear whenever something is shared, allocated, or compared.

---

# 6. Engineering Insight

Most symbolic mathematics software stores numbers as fractions.

Example

Instead of

```text
0.333333333333
```

it stores

```text
1/3
```

Why?

Because

```text
1/3
```

is exact.

Repeated floating-point arithmetic introduces rounding errors.

Keeping fractions as long as possible produces more accurate results.

This is why symbolic computation systems like **SymPy**, **Mathematica**, and **Maple** preserve rational numbers until a decimal approximation is explicitly requested.

---

# 7. Step-by-Step Method

## Simplifying Fractions

Step 1

Find the Greatest Common Divisor.

Example

```text
18/24
```

GCD

```text
6
```

Step 2

Divide both numbers.

```text
18÷6

=3
```

```text
24÷6

=4
```

Answer

```text
3/4
```

---

## Adding Fractions

Example

```text
1/3+1/6
```

Step 1

Find the Least Common Denominator.

```text
6
```

Step 2

Rewrite.

```text
2/6+1/6
```

Step 3

Add.

```text
3/6

=1/2
```

---

## Dividing Fractions

Example

```text
2/3 ÷ 5/7
```

Flip the second fraction.

```text
2/3 ×7/5
```

Multiply.

```text
14/15
```

---

# 8. Worked Examples

## 🟢 Beginner

Simplify

```text
12/18
```

Solution

```text
GCD=6

12÷6=2

18÷6=3
```

Answer

```text
2/3
```

---

## 🟢 Beginner

```text
1/4+2/4
```

```text
3/4
```

---

## 🟡 Intermediate

```text
2/5+1/2
```

LCD

```text
10
```

Rewrite

```text
4/10+5/10

=9/10
```

---

## 🟡 Intermediate

```text
3/8×4/9
```

```text
12/72

=1/6
```

---

## 🔴 Advanced

```text
5/6÷10/9
```

```text
5/6×9/10

=45/60

=3/4
```

---

# 9. Real-World Examples

| Field                         | Where fractions appear    | Why the fraction was constructed           | Why keep it as a fraction? | Benefit                    | Example                          |
| ----------------------------- | ------------------------- | ------------------------------------------ | -------------------------- | -------------------------- | -------------------------------- |
| AI / ML                       | Training/validation split | Training samples ÷ total samples           | Exact split specification  | Reproducible experiments   | `4/5` training, `1/5` validation |
| MLOps                         | Successful deployments    | Successful deployments ÷ total deployments | Reliability tracking       | Measure deployment quality | `99/100`                         |
| DevOps / Platform Engineering | CPU allocation            | Allocated cores ÷ total cores              | Resource planning          | Capacity management        | `12/16 = 3/4`                    |
| Cloud Computing               | Memory allocation         | Used RAM ÷ available RAM                   | Infrastructure planning    | Efficient utilization      | `16/64 = 1/4`                    |
| Software Engineering          | Test coverage             | Tested modules ÷ total modules             | Exact reporting            | Quality assurance          | `87/100`                         |
| Data Engineering              | Successful jobs           | Completed pipelines ÷ scheduled pipelines  | Pipeline reliability       | SLA tracking               | `49/50`                          |
| Databases                     | Cache allocation          | Cache used ÷ cache available               | Performance tuning         | Resource management        | `3/8`                            |
| Flow Metrics                  | Work completed            | Completed work ÷ planned work              | Delivery tracking          | Predictability             | `18/24 = 3/4`                    |
| Entrepreneurship              | Company ownership         | Shares owned ÷ total shares                | Legal ownership            | Equity management          | `1/4`                            |
| Product Management            | Feature adoption          | Active users ÷ eligible users              | Measure adoption           | Product decisions          | `3/5`                            |
| Investing                     | Portfolio allocation      | Asset value ÷ portfolio value              | Exact allocation           | Portfolio management       | `1/5` stocks                     |
| Financial Engineering         | Portfolio weights         | Position value ÷ total value               | Optimization input         | Risk management            | `3/10`                           |
| Accounting                    | Budget allocation         | Department budget ÷ total budget           | Financial planning         | Spending control           | `2/7`                            |
| Economics                     | Market share              | Company sales ÷ market sales               | Competition analysis       | Strategic planning         | `1/8`                            |
| Game Theory                   | Mixed strategies          | Probability assigned to actions            | Exact strategy definition  | Equilibrium analysis       | `2/3` choose A                   |
| Space                         | Fuel remaining            | Fuel left ÷ total fuel                     | Mission planning           | Burn calculations          | `3/5`                            |
| Defense / Aerospace           | Mission completion        | Objectives completed ÷ objectives planned  | Mission tracking           | Operational planning       | `7/8`                            |
| Systems Thinking              | Resource allocation       | Stock allocated ÷ total stock              | System balancing           | Capacity decisions         | `5/12`                           |
| Health / Fitness              | Workout completion        | Completed workouts ÷ planned workouts      | Progress tracking          | Training consistency       | `4/7`                            |
| Learning                      | Course completion         | Lessons completed ÷ total lessons          | Learning progress          | Study planning             | `18/20 = 9/10`                   |

---

# 10. Common Mistakes

## Mistake 1

Adding denominators.

Incorrect

```text
1/3+1/3

=2/6
```

Correct

```text
2/3
```

---

## Mistake 2

Adding fractions without a common denominator.

Incorrect

```text
1/2+1/3

=2/5
```

Correct

```text
3/6+2/6

=5/6
```

---

## Mistake 3

Forgetting to simplify.

Incorrect

```text
12/16
```

Correct

```text
3/4
```

---

## Mistake 4

Dividing without taking the reciprocal.

Incorrect

```text
2/3 ÷5/7

=10/21
```

Correct

```text
2/3×7/5

=14/15
```

---

## Mistake 5

Thinking a fraction is "two numbers."

Remember:

```text
3/4
```

is **one number**.

It simply happens to be written as a ratio of two integers.

# 11. Pattern Recognition

Whenever you see phrases like:

* out of
* divided by
* each
* per
* ratio
* allocation
* ownership
* probability
* share
* portion
* split

think:

```text
Part
──────
Whole
```

or

```text
Division
```

Remember:

```text
a/b

means exactly

a ÷ b
```

---

## Recognizing Fraction Problems

### Type 1: Simplify

Example

```text
24/36
```

Ask:

> What is the GCD?

```text
GCD = 12

24/36

= 2/3
```

---

### Type 2: Add Fractions

Example

```text
2/5 + 3/10
```

Ask:

> Do the denominators match?

If not,

find the Least Common Denominator (LCD).

```text
2/5

=4/10

4/10 +3/10

=7/10
```

---

### Type 3: Multiply Fractions

Example

```text
3/4 × 2/5
```

Multiply straight across.

```text
6/20

=3/10
```

---

### Type 4: Divide Fractions

Whenever you see

```text
÷
```

immediately think

> **Flip the second fraction.**

Example

```text
2/3 ÷5/8

↓

2/3 ×8/5
```

---

### Type 5: Convert Between Forms

Improper fraction

```text
11/4
```

Mixed number

```text
2 3/4
```

Mixed numbers are often easier to interpret.

Improper fractions are usually easier to calculate with.

---

# 12. Memory Hooks

## Hook 1

> A fraction is **one number**, not two.

---

## Hook 2

> A fraction is simply **division written vertically**.

---

## Hook 3

Adding?

> Same denominator → add numerators.

Different denominator?

> Find the LCD first.

---

## Hook 4

Multiplication

```text
Across and across.
```

---

## Hook 5

Division

```text
Keep

Change

Flip
```

Meaning:

```text
Keep the first fraction.

Change ÷ into ×.

Flip the second fraction.
```

---

## Hook 6

Simplifying

> Divide **both** numerator and denominator by the same number.

---

# 13. Practice Problems

## 🟢 Easy

### Problem 1

Simplify

```text
15/25
```

---

### Problem 2

Add

```text
1/8 + 3/8
```

---

### Problem 3

Multiply

```text
2/7 × 3/4
```

---

## 🟡 Medium

### Problem 4

Add

```text
5/6 + 1/4
```

---

### Problem 5

Subtract

```text
7/10 − 2/5
```

---

### Problem 6

Divide

```text
9/11 ÷ 3/5
```

---

## 🔴 Hard

### Problem 7

Simplify

```text
84/126
```

---

### Problem 8

Compute

```text
5/12 + 7/18
```

---

### Problem 9

Compute

```text
7/9 ÷ 14/15
```

---

## ⭐ Challenge

A cloud server has

```text
256 GB
```

of RAM.

One application is allocated

```text
3/8
```

of the memory.

Another application is allocated

```text
5/16
```

1. How much RAM does each application receive?
2. What fraction of RAM remains unallocated?

---

## Solutions

### Problem 1

```text
15/25

=3/5
```

---

### Problem 2

```text
1/8 +3/8

=4/8

=1/2
```

---

### Problem 3

```text
2/7 ×3/4

=6/28

=3/14
```

---

### Problem 4

LCD

```text
12
```

```text
10/12 +3/12

=13/12

=1 1/12
```

---

### Problem 5

```text
7/10 −4/10

=3/10
```

---

### Problem 6

```text
9/11 ×5/3

=45/33

=15/11

=1 4/11
```

---

### Problem 7

```text
84/126

=2/3
```

---

### Problem 8

LCD

```text
36
```

```text
15/36 +14/36

=29/36
```

---

### Problem 9

```text
7/9 ×15/14

=105/126

=5/6
```

---

### Challenge Solution

Application A

```text
3/8 ×256

=96 GB
```

Application B

```text
5/16 ×256

=80 GB
```

Allocated fraction

```text
3/8 +5/16

=6/16 +5/16

=11/16
```

Remaining

```text
1−11/16

=5/16
```

Remaining RAM

```text
5/16 ×256

=80 GB
```

---

# 14. Real Interview / Industry Problems

## AI / Machine Learning

A dataset contains

```text
500,000
```

examples.

Training split:

```text
4/5
```

Validation split:

```text
1/5
```

Training examples

```text
4/5 ×500000

=400000
```

Validation examples

```text
100000
```

---

## DevOps / Platform Engineering

A Kubernetes cluster has

```text
64 CPUs
```

A service requests

```text
3/8
```

of the cluster.

Allocated CPUs

```text
3/8 ×64

=24
```

---

## Entrepreneurship

Four founders own a startup equally.

Ownership

```text
1/4
```

After issuing new shares, an investor purchases

```text
1/5
```

of the company.

Discuss how founder ownership changes after dilution.

*(A full dilution model will be covered later in the investing chapters.)*

---

## Investing

Portfolio

```text
1/2

Stocks

1/4

Bonds

1/4

Cash
```

Fractions ensure the allocations sum exactly to

```text
1
```

or

```text
100%
```

---

## Space

A launch vehicle has

```text
24 tonnes
```

of usable payload.

A spacecraft requires

```text
5/8
```

of that capacity.

Payload

```text
5/8 ×24

=15 tonnes
```

---

# 15. Historical Insight

Fractions are among the oldest mathematical ideas.

The ancient Egyptians represented most fractions as **unit fractions** such as

```text
1/2

1/5

1/17
```

The Babylonians used a base-60 number system, which is why we still divide:

* an hour into 60 minutes,
* a minute into 60 seconds,
* a circle into 360 degrees.

Modern fraction notation,

```text
a/b
```

became widespread in Europe during the Middle Ages because it made arithmetic much simpler.

---

# 16. Connections

```text
Arithmetic
      ↓
Factors
      ↓
Fractions
      ↓
Decimals
      ↓
Percentages
      ↓
Rational Numbers
      ↓
Algebra
      ↓
Probability
      ↓
Linear Algebra
      ↓
Calculus
```

Fractions also appear throughout:

* AI / ML
* Optimization
* Numerical methods
* Finance
* Economics
* Signal processing
* Physics

---

# 17. Summary

A fraction is:

* one number,
* a division,
* a ratio,
* an exact representation.

Core rules:

```text
Equivalent fractions

Multiply or divide numerator and denominator by the same number.
```

```text
Addition

Find a common denominator.
```

```text
Multiplication

Multiply across.
```

```text
Division

Keep

Change

Flip
```

Always simplify the final answer.

---

# 18. Why This Topic Matters Later

| Future Topic                  | Why Fractions Matter                                    |
| ----------------------------- | ------------------------------------------------------- |
| Percentages                   | Percentages are fractions with denominator 100.         |
| Rational Numbers              | Rational numbers are ratios of integers.                |
| Algebra                       | Almost every algebraic manipulation involves fractions. |
| Probability                   | Probabilities are fractions between 0 and 1.            |
| Statistics                    | Relative frequencies are fractions.                     |
| Machine Learning              | Dataset splits, precision, recall, and probabilities.   |
| MLOps                         | Success rates and resource allocation.                  |
| DevOps / Platform Engineering | CPU, memory, storage, and bandwidth allocation.         |
| Flow Metrics                  | Completion ratios and throughput.                       |
| Investing                     | Portfolio weights and ownership.                        |
| Financial Engineering         | Portfolio optimization and expected returns.            |
| Economics                     | Market share, elasticities, and ratios.                 |
| Game Theory                   | Mixed strategies are probability distributions.         |
| Space                         | Fuel fractions and payload fractions.                   |
| Defense / Aerospace           | Resource allocation and mission planning.               |
| Calculus                      | Rational functions and limits.                          |

---

# 19. Looking Ahead

Next we'll study **Rational Numbers**.

We'll discover that every fraction is a rational number, but not every real number is rational.

That distinction leads naturally into:

* irrational numbers,
* radicals,
* real numbers,
* the number line,

which form the foundation of higher mathematics.

---

# Navigation

⬅️ Previous: [Chapter 2 – Percentages](02_percentages.md)

➡️ Next: [Chapter 4 – Number System](../Part_2_The_Language_of_Algebra/04_number_system.md)
