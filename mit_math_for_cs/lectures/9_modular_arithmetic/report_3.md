# Briefing Document: Fundamental Principles of Modular Arithmetic

## Executive Summary

Modular arithmetic, often described as "clock arithmetic," is a system of arithmetic for integers where numbers "wrap around" upon reaching a certain value, known as the modulus ($n$). The core theme of this system is the prioritization of remainders over absolute values. 

**Key Takeaways:**
*   **Congruence Definition:** Two integers $a$ and $b$ are congruent modulo $n$ ($a \equiv b \pmod n$) if and only if $n$ divides their difference ($a - b$).
*   **Remainder Equivalence:** A number is always equivalent to its remainder when divided by the modulus. Formally, $a \equiv b \pmod n$ if and only if $\text{rem}(a, n) = \text{rem}(b, n)$.
*   **Arithmetic Operations:** Addition, subtraction, and multiplication are preserved under modular congruence. However, division and exponentiation require specific conditions.
*   **Multiplicative Inverses:** Division is only possible if the divisor and the modulus are coprime ($\gcd(a, n) = 1$).
*   **Fermat’s Little Theorem:** For a prime $p$, any integer $a$ not divisible by $p$ satisfies $a^{p-1} \equiv 1 \pmod p$, allowing for the simplification of large exponents.

---

## 1. Definitions and Notation

### The Concept of Congruence
Modular arithmetic focuses on the "residue" or remainder of a number. When working modulo $n$, all multiples of $n$ are ignored.
*   **Formal Definition:** $a$ is congruent to $b$ modulo $n$ if and only if $n \mid (a - b)$.
*   **Congruence Classes:** Modulo $n$ creates a partition of all integers into $n$ distinct sets (residue classes), represented by the integers $\{0, 1, \dots, n-1\}$.

### Notation and Terminology
The source distinguishes between two common uses of the term "mod":
1.  **Relation (Congruence):** $a \equiv b \pmod n$. This describes a relationship between two numbers.
2.  **Function (Remainder):** $\text{rem}(a, n)$ or $a \text{ rem } n$. This refers to the specific non-negative integer $r$ such that $0 \le r < n$.

### The Division Theorem
For every pair of integers $n$ and $d$ (where $d > 0$), there exists a unique quotient $q$ and a unique remainder $r$ such that:
$$n = qd + r, \text{ where } 0 \le r < d$$
In modular arithmetic, a number is always equivalent to its residue ($r$) from this theorem.

---

## 2. Rules of Modular Arithmetic

### Basic Operations
If $a \equiv b \pmod n$, the following properties hold for any integer $c$:
*   **Addition:** $a + c \equiv b + c \pmod n$
*   **Subtraction:** $a - c \equiv b - c \pmod n$
*   **Multiplication:** $ac \equiv bc \pmod n$

These rules allow for "intermediate reduction," where large numbers in a complex calculation can be replaced by their smaller, congruent remainders at any step to simplify the process.

### Exponentiation
Modular arithmetic behaves differently regarding bases and exponents:
*   **Bases:** If $a \equiv b \pmod n$, then $a^c \equiv b^c \pmod n$. You may always replace the base with a congruent value.
*   **Exponents:** You **cannot** generally replace an exponent with a congruent value modulo $n$. 
    *   *Counterexample:* While $1 \equiv 6 \pmod 5$, it is false that $(-1)^1 \equiv (-1)^6 \pmod 5$, as the left side is $-1$ and the right side is $1$.

---

## 3. Modular Division and Multiplicative Inverses

### The Challenge of Division
Unlike standard arithmetic, you cannot always divide both sides of a modular congruence by a common factor. For example, $3x \equiv 3 \pmod 6$ does not imply $x \equiv 1 \pmod 6$ (since $x=3$ is also a valid solution, as $9 \equiv 3 \pmod 6$).

### Multiplicative Inverses
To perform division, one must find a multiplicative inverse ($a^{-1}$). An integer $b$ is the multiplicative inverse of $a$ modulo $n$ if:
$$ab \equiv 1 \pmod n$$

### Existence and Computation
*   **Condition for Existence:** $a$ has a multiplicative inverse modulo $n$ **if and only if** $\gcd(a, n) = 1$ (i.e., $a$ and $n$ are coprime).
*   **Derivation:** This is derived from Bézout’s Identity, which states that the greatest common divisor of $a$ and $b$ can be expressed as an integer linear combination: $\gcd(a, b) = as + bt$. If the GCD is 1, then $as + bt = 1$, which implies $as \equiv 1 \pmod t$.
*   **The Pulverizer:** The Extended Euclidean Algorithm (referred to as the "pulverizer") is the efficient method used to compute these inverses.

---

## 4. Fermat’s Little Theorem

Fermat’s Little Theorem provides a method for handling exponentiation when the modulus is a prime number.

### Theorem Statement
If $p$ is a prime number and $a$ is an integer such that $a \not\equiv 0 \pmod p$, then:
$$a^{p-1} \equiv 1 \pmod p$$

### Applications in Computation
This theorem allows for the reduction of large exponents. When working modulo a prime $p$, the exponent can be reduced modulo $(p-1)$. 

**Example Calculation:**
To find the remainder of $7^{95} \pmod{13}$:
1.  Since 13 is prime, use $p-1 = 12$.
2.  Reduce the exponent 95 modulo 12: $95 = (12 \times 7) + 11$.
3.  $7^{95} \equiv 7^{11} \pmod{13}$.
4.  Since $7^{12} \equiv 1 \pmod{13}$, then $7^{11}$ is the multiplicative inverse of $7 \pmod{13}$.
5.  By testing values, $7 \times 2 = 14 \equiv 1 \pmod{13}$. Therefore, $7^{11} \equiv 2 \pmod{13}$.

### Proof Logic
The proof relies on the fact that for a prime $p$, the set $\{a, 2a, 3a, \dots, (p-1)a\}$ contains $p-1$ distinct values modulo $p$, none of which are zero. Multiplying these values together and canceling the common factor of $(p-1)!$ from both sides of the resulting congruence yields $a^{p-1} \equiv 1 \pmod p$.