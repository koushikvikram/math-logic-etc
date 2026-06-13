# Foundations of Number Theory: Divisibility, GCD, and Algorithmic Applications

## Executive Summary

Number theory, the study of integers, serves as a cornerstone of discrete mathematics with critical modern applications in cryptography, error correction, and communications. This document synthesizes key concepts from the study of divisibility and the Greatest Common Divisor (GCD). Central to this analysis is the concept of the Integer Linear Combination (ILC), which provides the mathematical framework for solving practical problems, such as the "water-pouring puzzle." 

The document outlines the evolution of algorithms for finding the GCD, from basic subtraction methods to the highly efficient Euclidean algorithm, which operates in logarithmic time. Furthermore, it details the "Pulverizer" (or Extended Euclidean Algorithm), which not only finds the GCD but also identifies the specific integer coefficients required to express the GCD as a linear combination of its inputs. Key findings include:
*   **The Invariance Principle:** Used to prove that only certain values are reachable in state-based puzzles based on their divisibility properties.
*   **Bézout's Lemma:** Establishes that the GCD of two numbers is always representable as an ILC of those numbers.
*   **Algorithmic Efficiency:** The transition from subtraction-based to division-based algorithms represents an exponential improvement in computational speed, essential for handling large-scale numerical data.

---

## Foundations of Divisibility

### Formal Definition and Notation
Divisibility is the fundamental relation in number theory. The notation $a \mid b$ (read as "$a$ divides $b$") signifies that $a$ evenly divides $b$.
*   **Definition:** $a \mid b$ if there exists an integer $k$ such that $b = k \cdot a$.
*   **Methodological Note:** Divisibility is defined in terms of multiplication rather than division to remain mathematically sound when the divisor $a$ is zero.
*   **Special Cases:**
    *   **Zero:** Every integer divides 0 because $0 \cdot n = 0$. Consequently, 0 is considered an even number because $2 \mid 0$.
    *   **Negatives:** Divisibility applies to negative integers; for instance, $-n \mid n$ because $k$ can be $-1$.

### Divisibility Facts and Integer Linear Combinations (ILC)
If a number $d$ is a common divisor of $a$ and $b$, it possesses specific properties regarding their combinations:
1.  **Summation:** $d \mid (a + b)$.
2.  **Linear Combination:** $d$ divides any **Integer Linear Combination (ILC)** of $a$ and $b$. An ILC is defined as $s \cdot a + t \cdot b$ for any integers $s$ and $t$.
3.  **Core Principle:** Divisibility of a single number is essentially an ILC of that one number (i.e., $b = k \cdot a$).

---

## The Water-Pouring Puzzle: A State Machine Analysis

The water-pouring puzzle—famously featured in the film *Die Hard with a Vengeance*—serves as a practical application of divisibility and ILCs.

### Problem Formalization
*   **Setup:** Two jugs with capacities $a$ and $b$ (integers).
*   **Goal:** Reach a specific integer amount $x$ using only valid transitions (filling a jug, emptying a jug, or pouring one into another).
*   **State Machine Model:** The state is represented as $(x, y)$, indicating the current water levels in each jug.

### The Reachability Lemma
A critical insight of this puzzle is that all reachable amounts are ILCs of the capacities $a$ and $b$.
*   **Invariance Proof:** Using the invariant principle, it can be shown that if the initial state $(0,0)$ consists of ILCs of $a$ and $b$, every subsequent state reached through valid transitions must also be an ILC.
*   **Solvability Condition:** A value $x$ can be obtained if and only if $x$ is an ILC of $a$ and $b$, and $0 \le x \le \max(a, b)$.
*   **Example of Impossibility:** If jug capacities are 6 and 4, it is impossible to measure 3 gallons. Since 2 divides both 6 and 4, every reachable state must be even; 3 is odd and therefore unreachable.

---

## The Greatest Common Divisor (GCD)

The GCD is the largest common divisor of two integers. It is a vital tool for determining the solvability of ILC problems.

### Equivalent Definitions
1.  **Greatest Magnitude:** The largest integer $d$ such that $d \mid a$ and $d \mid b$. (Note: $GCD(0,0)$ is defined as 0).
2.  **Divisibility Relation:** The only non-negative common divisor that is divisible by all other common divisors of $a$ and $b$.

### Key Properties
*   **GCD with Zero:** $GCD(0, b) = |b|$.
*   **Symmetry:** $GCD(a, b) = GCD(b, a)$.
*   **Subtraction Property:** $GCD(a, b) = GCD(a - b, b)$. This property allows for the systematic reduction of numbers to find their common divisor.

---

## Algorithmic Progressions

### From Subtraction to Division
Early methods for finding the GCD relied on repeated subtraction. However, this is inefficient for large numbers (taking $a+b$ steps).
*   **The Division Theorem:** For every integer $n$ and positive integer $d$, there exists a unique quotient $q$ and remainder $r$ such that $n = q \cdot d + r$, where $0 \le r < d$.
*   **Notation:** $q = n \text{ div } d$ and $r = n \text{ rem } d$ (also known as $n \text{ mod } d$).

### Euclid’s Algorithm
Euclid’s algorithm (c. 300 BCE) utilizes the remainder to find the GCD much faster than subtraction:
*   **Theorem:** $GCD(a, b) = GCD(b, a \text{ rem } b)$.
*   **Efficiency:** The algorithm is "fast" because it is exponentially improved over subtraction. Each step effectively reduces the number of bits; the remainder $x \text{ rem } y$ is always less than $x/2$. The running time is proportional to the number of bits in the input ($\log a + \log b$).

### The Pulverizer (Extended Euclidean Algorithm)
While Euclid’s algorithm finds the GCD, the **Pulverizer** (described by Aryabhata, c. 500 ACE) also computes the coefficients $s$ and $t$ for the ILC.
*   **Bézout’s Lemma:** States that $GCD(a, b)$ is always an integer linear combination of $a$ and $b$.
*   **Mechanism:** The Pulverizer maintains the ILC representation of each intermediate value throughout the Euclidean steps. This allows the user to solve for $s$ and $t$ such that $s \cdot a + t \cdot b = GCD(a, b)$.

---

## Summary of Core Theorems

| Theorem | Key Insight |
| :--- | :--- |
| **Division Theorem** | Every division of integers results in a unique quotient and a remainder less than the divisor. |
| **Invariant Principle** | In a state machine (like the water puzzle), properties true at the start and preserved by transitions remain true for all reachable states. |
| **GCD Property** | $GCD(a, b)$ divides every integer linear combination of $a$ and $b$. |
| **Bézout’s Lemma** | The GCD of two numbers can always be expressed as $s \cdot a + t \cdot b$. |

---

## Historical Context of Number Theory
Number theory is likely the oldest branch of mathematics, with roots extending back nearly 4,000 years to the Babylonians. Historically, mathematicians like G.H. Hardy valued number theory for its "remoteness from human activities," viewing it as a "pure" science untainted by applications like warfare. In the modern era, this perception has shifted entirely, as the field now provides the essential framework for global digital security and telecommunications.