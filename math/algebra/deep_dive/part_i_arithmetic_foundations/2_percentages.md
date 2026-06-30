# Chapter 2 – Percentages

## Table of Contents

- [Chapter 2 – Percentages](#chapter-2--percentages)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Learning Objectives](#learning-objectives)
- [1. Big Picture](#1-big-picture)
- [2. Why This Exists](#2-why-this-exists)
- [3. First Principles](#3-first-principles)
  - [The Reference Whole](#the-reference-whole)
- [4. Core Formulas](#4-core-formulas)
  - [Percentage](#percentage)
  - [Decimal](#decimal)
  - [Fraction → Percentage](#fraction--percentage)
  - [Percentage → Fraction](#percentage--fraction)
  - [Part](#part)
  - [Whole](#whole)
  - [Percent Increase](#percent-increase)
  - [Percent Decrease](#percent-decrease)
- [5. Intuition](#5-intuition)
- [6. Engineering Insight](#6-engineering-insight)
- [7. Step-by-Step Method](#7-step-by-step-method)
  - [Converting a Fraction to a Percentage](#converting-a-fraction-to-a-percentage)
  - [Finding a Part](#finding-a-part)
  - [Finding the Whole](#finding-the-whole)
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
- [11. Pattern Recognition](#11-pattern-recognition)
  - [Recognizing Different Percentage Problems](#recognizing-different-percentage-problems)
    - [Type 1: Find the Percentage](#type-1-find-the-percentage)
    - [Type 2: Find the Part](#type-2-find-the-part)
    - [Type 3: Find the Whole](#type-3-find-the-whole)
    - [Type 4: Percentage Greater Than 100%](#type-4-percentage-greater-than-100)
    - [Type 5: Percentage Change](#type-5-percentage-change)
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

* Addition
* Subtraction
* Multiplication
* Division
* Fractions

---

## Learning Objectives

By the end of this chapter, you should be able to:

* Explain what a percentage really means.
* Convert between fractions, decimals, and percentages.
* Correctly identify the **reference whole**.
* Explain why percentages can exceed 100%.
* Apply percentages in engineering, finance, AI, business, and science.

---

# 1. Big Picture

A **percentage** is a standardized way to compare one quantity with another.

The word **percent** literally means:

```text
per hundred
```

Examples:

```text
50%

= 50 per 100

= 50/100

= 0.5

= 1/2
```

Percentages make comparisons easy because everyone compares against the same reference:

```text
100
```

Instead of saying

```text
17 out of 23
```

we can say

```text
73.9%
```

which is much easier to compare with other results.

---

# 2. Why This Exists

Imagine three engineers reporting model accuracy.

Engineer A:

```text
85 out of 100
```

Engineer B:

```text
170 out of 200
```

Engineer C:

```text
850 out of 1000
```

Are they equally good?

Without converting them, it isn't immediately obvious.

Convert to percentages:

```text
85%

85%

85%
```

Now comparison is instant.

This is why percentages exist.

They standardize comparisons.

---

# 3. First Principles

Everything starts with a fraction.

```text
Part
──────
Whole
```

Percentage is simply:

```text
Part
────── × 100%
Whole
```

Example

```text
30 students passed

60 students total
```

Fraction

```text
30/60
```

Percentage

```text
30/60 ×100%

= 0.5 ×100%

= 50%
```

Nothing magical happened.

We simply changed the denominator from

```text
60
```

to

```text
100
```

---

## The Reference Whole

This is the single most important idea in the chapter.

Always ask:

> **Compared to what?**

Example

```text
119 shaded squares

200 total squares
```

Percentage:

```text
119/200 ×100%

=59.5%
```

But suppose one complete grid represents

```text
100 squares
```

and the picture shows

```text
1 full grid

+

19 extra squares
```

Then:

```text
119/100 ×100%

=119%
```

The answer changes because the **reference whole** changes.

---

# 4. Core Formulas

## Percentage

```text
percentage

= (part / whole) ×100%
```

---

## Decimal

```text
decimal

= percentage /100
```

Example

```text
65%

=0.65
```

---

## Fraction → Percentage

```text
fraction ×100%
```

Example

```text
3/4

=75%
```

---

## Percentage → Fraction

Remove the percent sign.

Put over 100.

Simplify.

Example

```text
80%

=80/100

=4/5
```

---

## Part

```text
part

= decimal percentage × whole
```

Example

```text
25% of 80

=0.25×80

=20
```

---

## Whole

```text
whole

= part / decimal percentage
```

Example

```text
20 is 25% of what?

20/0.25

=80
```

---

## Percent Increase

```text
((new-old)/old) ×100%
```

---

## Percent Decrease

```text
((old-new)/old) ×100%
```

---

# 5. Intuition

Think of percentages as a common language.

Different fractions

```text
1/2

3/5

17/20
```

become

```text
50%

60%

85%
```

Now comparison is immediate.

Another way to think about percentages:

Imagine stretching or shrinking every denominator until it becomes

```text
100
```

---

# 6. Engineering Insight

Engineers rarely care about raw numbers.

They care about **relative performance**.

Example

Two servers:

```text
Server A

180 requests/sec
```

```text
Server B

350 requests/sec
```

Which is busier?

Impossible to know.

Capacity:

```text
A

200 requests/sec
```

```text
B

500 requests/sec
```

Now calculate utilization.

```text
180/200

=90%
```

```text
350/500

=70%
```

Although Server B handles more traffic,

Server A is closer to capacity.

This is why engineering dashboards almost always display percentages rather than raw counts.

---

# 7. Step-by-Step Method

## Converting a Fraction to a Percentage

Step 1

Identify the part.

Step 2

Identify the reference whole.

Step 3

Write the fraction.

```text
part/whole
```

Step 4

Multiply by

```text
100%
```

Example

```text
84 out of 120
```

```text
84/120 ×100%

=0.70×100%

=70%
```

---

## Finding a Part

Example

```text
15% of 200
```

Convert to decimal.

```text
15%

=0.15
```

Multiply.

```text
0.15×200

=30
```

---

## Finding the Whole

Example

```text
30 is 15% of what?
```

Convert.

```text
15%

=0.15
```

Divide.

```text
30/0.15

=200
```

---

# 8. Worked Examples

## 🟢 Beginner

```text
25 out of 100
```

```text
25/100 ×100%

=25%
```

---

## 🟢 Beginner

```text
45 out of 90
```

```text
45/90 ×100%

=50%
```

---

## 🟡 Intermediate

```text
63 out of 140
```

```text
63/140

=0.45

=45%
```

---

## 🟡 Intermediate

```text
238 out of 200
```

```text
238/200

=1.19

=119%
```

---

## 🔴 Advanced

Khan Academy example.

Two 100-square grids.

One entire grid is shaded.

19 squares of the second grid are shaded.

Question:

```text
What percent is shaded?
```

Answer:

Reference whole:

```text
100 squares
```

Therefore

```text
119/100 ×100%

=119%
```

Not

```text
119/200
```

because the second grid is extra drawing space.

---

# 9. Real-World Examples

| Field                         | Where the percentage appears  | Why the ratio was constructed             | Why convert to %?         | Benefit                      | Algebra                    |
| ----------------------------- | ----------------------------- | ----------------------------------------- | ------------------------- | ---------------------------- | -------------------------- |
| AI / ML                       | Model accuracy                | Correct predictions ÷ total predictions   | Standard model comparison | Compare models fairly        | `955/1000 ×100%=95.5%`     |
| MLOps                         | Successful inference requests | Successful requests ÷ total requests      | Reliability reporting     | Production monitoring        | `9950/10000 ×100%=99.5%`   |
| DevOps / Platform Engineering | CPU utilization               | Used CPU ÷ available CPU                  | Capacity planning         | Detect overload              | `238/200 ×100%=119%`       |
| Cloud Computing               | Storage utilization           | Used storage ÷ provisioned storage        | Dashboard metric          | Capacity forecasting         | `750/1000 ×100%=75%`       |
| Software Engineering          | Test pass rate                | Passed tests ÷ total tests                | Quality reporting         | Release readiness            | `480/500 ×100%=96%`        |
| Data Engineering              | Pipeline success rate         | Successful jobs ÷ scheduled jobs          | Reliability metric        | SLA tracking                 | `97/100 ×100%=97%`         |
| Databases                     | Cache hit rate                | Cache hits ÷ total lookups                | Efficiency metric         | Performance tuning           | `8500/10000 ×100%=85%`     |
| Flow Metrics                  | Planned vs completed work     | Completed work ÷ planned work             | Delivery tracking         | Identify over/under delivery | `119/100 ×100%=119%`       |
| Entrepreneurship              | Revenue vs target             | Actual revenue ÷ target revenue           | Goal tracking             | Business performance         | `$1.19M/$1.00M ×100%=119%` |
| Product Management            | Conversion rate               | Purchases ÷ visitors                      | Funnel optimization       | Measure experiments          | `240/4000 ×100%=6%`        |
| Investing                     | Portfolio return              | Gain ÷ initial investment                 | Standardized performance  | Compare investments          | `$1200/$10000 ×100%=12%`   |
| Financial Engineering         | Realized risk vs forecast     | Realized volatility ÷ expected volatility | Model evaluation          | Risk monitoring              | `23.8/20 ×100%=119%`       |
| Accounting                    | Budget utilization            | Actual spend ÷ budget                     | Cost control              | Financial reporting          | `$23800/$20000 ×100%=119%` |
| Economics                     | Demand vs forecast            | Actual demand ÷ predicted demand          | Forecast evaluation       | Pricing decisions            | `2380/2000 ×100%=119%`     |
| Game Theory                   | Strategy payoff               | Strategy payoff ÷ baseline payoff         | Compare strategies        | Decision making              | `110/100 ×100%=110%`       |
| Space                         | Payload utilization           | Payload mass ÷ payload capacity           | Mission planning          | Capacity management          | `900/1000 ×100%=90%`       |
| Defense / Aerospace           | Radar utilization             | Active tracks ÷ rated capacity            | Detect saturation         | Mission readiness            | `150/200 ×100%=75%`        |
| Systems Thinking              | Actual vs desired stock       | Current level ÷ target level              | Measure overshoot         | Feedback control             | `119/100 ×100%=119%`       |
| Health / Fitness              | Training completion           | Completed sessions ÷ planned sessions     | Measure consistency       | Progress tracking            | `4/5 ×100%=80%`            |
| Learning / Memory             | Study completion              | Completed problems ÷ planned problems     | Learning progress         | Study planning               | `45/60 ×100%=75%`          |

---

# 10. Common Mistakes

## Mistake 1

Ignoring the reference whole.

Incorrect

```text
119 out of 200

=119%
```

Correct

```text
119/200 ×100%

=59.5%
```

---

## Mistake 2

Thinking percentages cannot exceed 100%.

Incorrect

```text
Maximum percentage

=100%
```

Correct

```text
238 out of 200

=119%
```

Whenever

```text
part > whole
```

the percentage exceeds

```text
100%
```

---

## Mistake 3

Using the visible drawing instead of the reference whole.

Always identify what represents

```text
100%
```

before calculating.

---

## Mistake 4

Forgetting to convert percentages to decimals.

Incorrect

```text
25% of 80

=25×80
```

Correct

```text
25%

=0.25
```

```text
0.25×80

=20
```

# 11. Pattern Recognition

Whenever you encounter words like:

* out of
* compared to
* relative to
* utilization
* success rate
* failure rate
* completion rate
* conversion rate
* growth
* increase
* decrease
* discount
* markup
* return
* yield
* occupancy
* accuracy
* precision
* recall

think:

```text
Part
────── × 100%
Whole
```

The first question should always be:

> **What is the reference whole?**

---

## Recognizing Different Percentage Problems

### Type 1: Find the Percentage

Example:

```text
45 correct answers

60 total questions
```

Question:

> What percentage was correct?

Method:

```text
45/60 × 100%

= 75%
```

---

### Type 2: Find the Part

Example:

```text
15% of 240
```

Method:

```text
0.15 × 240

= 36
```

---

### Type 3: Find the Whole

Example:

```text
36 is 15% of what?
```

Method:

```text
36 ÷ 0.15

= 240
```

---

### Type 4: Percentage Greater Than 100%

Whenever

```text
Part > Whole
```

the answer is

```text
>100%
```

Example

```text
240 requests

200 request capacity
```

```text
240/200 ×100%

=120%
```

---

### Type 5: Percentage Change

Example

```text
Revenue

$100,000

↓

$125,000
```

Method

```text
(125000-100000)

────────────── ×100%
100000

=25%
```

---

# 12. Memory Hooks

## Hook 1

> **Percent means "per hundred."**

---

## Hook 2

> **Always ask: Compared to what?**

The denominator determines the percentage.

---

## Hook 3

```text
Part
──────
Whole
```

Then multiply by

```text
100%
```

---

## Hook 4

When the part becomes larger than the whole:

```text
Percentage >100%
```

---

## Hook 5

Never memorize.

Always think:

> **What is my reference whole?**

---

# 13. Practice Problems

## 🟢 Easy

### Problem 1

Convert:

```text
40 out of 80
```

---

### Problem 2

Convert:

```text
18 out of 24
```

---

### Problem 3

Find:

```text
25% of 120
```

---

## 🟡 Medium

### Problem 4

A service processed

```text
930

successful requests

out of

1000
```

Find the success rate.

---

### Problem 5

Revenue target:

```text
$200,000
```

Actual:

```text
$230,000
```

What percent of target was achieved?

---

### Problem 6

A rocket can carry

```text
8 tonnes
```

Today's payload:

```text
6 tonnes
```

Find payload utilization.

---

## 🔴 Hard

### Problem 7

CPU capacity:

```text
320 cores
```

Current usage:

```text
372 cores
```

Find utilization.

---

### Problem 8

Portfolio value:

```text
$50,000
```

Current value:

```text
$56,500
```

Find portfolio return.

---

### Problem 9

A machine learning model correctly predicts

```text
9,842

examples

out of

10,250
```

Find model accuracy.

---

## ⭐ Challenge

A monitoring dashboard reports

```text
Disk usage

=135%
```

Explain:

1. Why this is mathematically possible.
2. What the reference whole is.
3. Give one real-world scenario where this could happen.

---

## Solutions

### Problem 1

```text
40/80 ×100%

=50%
```

---

### Problem 2

```text
18/24 ×100%

=75%
```

---

### Problem 3

```text
0.25×120

=30
```

---

### Problem 4

```text
930/1000 ×100%

=93%
```

---

### Problem 5

```text
230000/200000 ×100%

=115%
```

---

### Problem 6

```text
6/8 ×100%

=75%
```

---

### Problem 7

```text
372/320 ×100%

=116.25%
```

---

### Problem 8

Gain

```text
56500-50000

=6500
```

Return

```text
6500/50000 ×100%

=13%
```

---

### Problem 9

```text
9842/10250 ×100%

≈96.02%
```

---

### Challenge Solution

Percentages greater than 100% simply mean

```text
Part > Whole
```

For example,

A server designed for

```text
1000 requests/sec
```

is currently receiving

```text
1350 requests/sec
```

Utilization

```text
1350/1000 ×100%

=135%
```

The reference whole is the server's planned capacity.

---

# 14. Real Interview / Industry Problems

## AI / Machine Learning

A binary classifier correctly predicts

```text
19,300

samples

out of

20,000
```

Accuracy

```text
19300/20000 ×100%

=96.5%
```

Interpretation

The model predicts correctly 96.5% of the time.

---

## MLOps

Inference endpoint

```text
99,780

successful requests

out of

100,000
```

Availability

```text
99.78%
```

Used to monitor production reliability.

---

## DevOps / Platform Engineering

Cluster capacity

```text
200 CPUs
```

Current allocation

```text
238 CPUs
```

Utilization

```text
238/200 ×100%

=119%
```

Interpretation

The cluster is oversubscribed.

---

## Entrepreneurship

Monthly target

```text
$80,000
```

Actual revenue

```text
$92,000
```

Target achievement

```text
92000/80000 ×100%

=115%
```

---

## Investing

Initial investment

```text
$12,000
```

Current value

```text
$14,040
```

Gain

```text
2040
```

Return

```text
2040/12000 ×100%

=17%
```

---

## Space

Rocket payload capacity

```text
1000 kg
```

Payload

```text
920 kg
```

Utilization

```text
920/1000 ×100%

=92%
```

---

# 15. Historical Insight

The word **percent** comes from the Latin phrase

```text
per centum
```

meaning

> **per hundred**

Merchants, bankers, and tax collectors in medieval Europe needed a standard way to compare:

* interest rates
* discounts
* taxes
* profits
* exchange rates

Instead of comparing many different fractions, they adopted a denominator of 100.

Today, percentages are one of the most widely used mathematical languages in science, engineering, finance, medicine, economics, and everyday life.

---

# 16. Connections

```text
Fractions
      ↓
Decimals
      ↓
Percentages
      ↓
Ratios
      ↓
Proportions
      ↓
Probability
      ↓
Statistics
      ↓
Machine Learning
```

Percentages also appear throughout:

* Optimization
* Economics
* Finance
* Systems Thinking
* Operations Research
* Quality Engineering

---

# 17. Summary

A percentage is simply a fraction rewritten with a denominator of 100.

Core formula:

```text
Percentage

=(Part/Whole) ×100%
```

Most important principle:

> **Always identify the reference whole first.**

Remember:

* The denominator determines the percentage.
* Percentages can exceed 100%.
* Convert percentages to decimals before multiplication.
* Engineering metrics are often more meaningful as percentages than raw counts.

---

# 18. Why This Topic Matters Later

| Future Topic                  | Why It Matters                                                   |
| ----------------------------- | ---------------------------------------------------------------- |
| Fractions                     | Percentages are fractions with denominator 100.                  |
| Ratios                        | Percentages standardize ratios for comparison.                   |
| Proportions                   | Solving percentage problems uses proportional reasoning.         |
| Probability                   | Probabilities are frequently expressed as percentages.           |
| Statistics                    | Accuracy, confidence intervals, and error rates use percentages. |
| Machine Learning              | Accuracy, precision, recall, F1 score, ROC metrics.              |
| MLOps                         | Availability, inference success rate, latency SLOs.              |
| DevOps / Platform Engineering | CPU, memory, disk, network, and cluster utilization.             |
| Flow Metrics                  | Throughput, predictability, completion rate.                     |
| Entrepreneurship              | Growth, churn, retention, conversion, target achievement.        |
| Investing                     | Returns, dividend yield, CAGR, drawdowns, allocations.           |
| Financial Engineering         | Risk, volatility, portfolio weights.                             |
| Economics                     | Inflation, unemployment, GDP growth, interest rates.             |
| Game Theory                   | Relative strategy performance.                                   |
| Space                         | Payload margins and mission utilization.                         |
| Defense / Aerospace           | Readiness, availability, mission success rates.                  |

---

# 19. Looking Ahead

In the next chapter we'll study **Fractions**.

You'll discover that percentages are simply a special kind of fraction:

```text
75%

=75/100

=3/4
```

Mastering fractions will make later topics much easier, including:

* Rational numbers
* Algebraic expressions
* Equations
* Probability
* Linear Algebra
* Calculus

---

# Navigation

⬅️ Previous: [Chapter 1 – Perfect Squares and Square Roots](1_perfect_squares_simplifying_square_roots.md)

➡️ Next: [Chapter 3 – Fractions](3_fractions.md)
