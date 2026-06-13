# Briefing: Continuous Random Variables and Probability Distributions

## Executive Summary

This document synthesizes key insights from the Stanford CS109 lecture on continuous random variables. The primary objective of the session was to transition from discrete probability—where events are counted—to continuous probability, where variables like time and distance require calculus-based modeling. 

The lecture emphasizes a "narrative" approach to random variables, encouraging students to recognize the underlying "story" of a distribution (e.g., trials until success) to inherit its mathematical properties (PMF/PDF, expectation, and variance) without re-derivation. Key takeaways include the introduction of the Geometric and Negative Binomial discrete distributions and the foundational concepts of continuous probability: the Probability Density Function (PDF) and the Cumulative Distribution Function (CDF). Practical applications discussed range from jury selection bias and Bitcoin mining to seismic activity forecasting.

---

## 1. The Philosophy of Random Variables

A central theme of the lecture is the meta-goal of "learning how to learn" new distributions. Rather than memorizing every possible distribution, practitioners should focus on matching real-world scenarios to established mathematical stories.

*   **Inheritance of Math:** Once a scenario is identified as fitting a specific distribution (e.g., the Borel distribution used in server queue modeling), the user "inherits" all associated derivations, including the Probability Mass Function (PMF), mean, and variance.
*   **Narrative Matching:** Success in probability depends on identifying the "story" behind the data:
    *   **Binomial:** Number of successes in $n$ independent trials.
    *   **Poisson:** Number of events occurring in a fixed interval of time or space.
    *   **Geometric:** Number of trials required to achieve the *first* success.

---

## 2. Expanded Discrete Distributions

The lecture introduces two specific discrete distributions that extend the concepts of Bernoulli and Binomial trials.

### 2.1 Geometric Random Variable ($X \sim \text{Geo}(p)$)
*   **The Story:** The number of independent trials until the first success, where $p$ is the probability of success on each trial.
*   **Properties:**
    *   **Values:** $1, 2, 3, \dots, \infty$ (cannot be zero, as a success requires at least one trial).
    *   **Expectation ($E[X]$):** $1/p$.
    *   **Variance ($\text{Var}(X)$):** $(1 - p) / p^2$.
*   **Example:** In a dating scenario where each person has a 0.2 probability of being "the one," the expected number of people one would date is $1 / 0.2 = 5$.

### 2.2 Negative Binomial Random Variable ($X \sim \text{NegBin}(r, p)$)
*   **The Story:** The number of independent trials until $r$ successes occur.
*   **Relationship to Geometric:** A Negative Binomial variable is the sum of $r$ independent Geometric random variables.
*   **Properties:**
    *   **Expectation:** $r/p$.
    *   **Variance:** $r(1 - p) / p^2$.

---

## 3. Case Studies in Discrete Probability

### 3.1 Jury Selection and Bias (Justice Breyer’s Example)
The lecture critiques a Supreme Court case where Justice Breyer utilized the Binomial theorem to evaluate jury bias.
*   **Scenario:** A community with a 6% minority population. A jury of 12 is selected.
*   **Breyer’s Argument:** He hypothesized the probability of having at least one minority on the jury was between 1/3 and 1/2.
*   **Correct Calculation:** Using $X \sim \text{Bin}(12, 0.06)$, the probability $P(X \ge 1) = 1 - P(X = 0)$ is approximately 52%.
*   **Technical Nuance:** The Binomial model is technically "wrong" here because sampling without replacement changes the probability slightly. The **Hypergeometric** distribution is the more accurate model, though the Binomial provides a close approximation (0.5241 vs. 0.5261).

### 3.2 Bitcoin Mining
Bitcoin mining is modeled as a series of independent trials using the SHA-256 hashing algorithm.
*   **The Trial:** A miner provides a bit string; if the resulting hash starts with $G$ zeros, they "mine" a block.
*   **Probability of Success ($p$):** $(1/2)^G$.
*   **Modeling Attempts:**
    *   The probability of mining two Bitcoins in under 100 attempts can be modeled using the **Negative Binomial** ($r=2, p=(1/2)^G$) or as a **Binomial** where one seeks the probability of $\ge 2$ successes in 99 trials.

---

## 4. The Transition to Continuous Space

Continuous random variables are necessary when the "gaps" between discrete values (like 1 and 2) disappear, such as in measurements of time, distance, or exact decimals.

### 4.1 The Probability Density Function (PDF)
In the continuous world, the probability of a variable taking on an *exact* value (e.g., exactly 4.000... days) is zero. Instead of a PMF, we use a **Probability Density Function ($f(x)$)**.
*   **Definition:** The PDF is the derivative of probability. It represents the relative likelihood of the variable taking on a value.
*   **Calculating Probability:** To find the probability over a range $[a, b]$, one must integrate the PDF: $P(a \le X \le b) = \int_{a}^{b} f(x) \, dx$.
*   **Total Area:** The integral of a PDF from $-\infty$ to $+\infty$ must always equal 1.
*   **Units:** Unlike a PMF, the value of a PDF can be greater than 1, as it represents "probability per unit of $X$."

---

## 5. Continuous Distributions

| Distribution | Story | Key Parameters | PDF ($f(x)$) |
| :--- | :--- | :--- | :--- |
| **Uniform** | Equally likely to take any value between a min and max. | $\alpha$ (min), $\beta$ (max) | $1 / (\beta - \alpha)$ |
| **Exponential** | The time until the next event in a Poisson process. | $\lambda$ (average rate) | $\lambda e^{-\lambda x}$ |

### 5.1 The Exponential Distribution ($X \sim \text{Exp}(\lambda)$)
The Exponential is the "continuous friend" of the Poisson distribution.
*   **Poisson vs. Exponential:** Poisson counts the *number of events* in a fixed time; Exponential measures the *time until the first event*.
*   **Expectation:** $1/\lambda$.
*   **Variance:** $1/\lambda^2$.
*   **Application:** Modeling the time until the next earthquake. If California averages 0.002 major earthquakes per year, the time until the next one is $X \sim \text{Exp}(0.002)$.

---

## 6. The Cumulative Distribution Function (CDF)

The **Cumulative Distribution Function ($F(x)$)** is a tool that simplifies probability calculations by removing the need for manual integration during every problem.

*   **Definition:** $F(x) = P(X \le x)$. It is the area under the PDF curve from $-\infty$ to $x$.
*   **Utility in Calculations:**
    *   $P(X \le a) = F(a)$
    *   $P(X > a) = 1 - F(a)$
    *   $P(a < X < b) = F(b) - F(a)$
*   **Exponential CDF:** For an exponential distribution, $F(x) = 1 - e^{-\lambda x}$.

### 6.1 Earthquake Example Revisited
To find the probability of a major earthquake at Stanford within the next 4 years (given $\lambda = 0.002$):
1.  Use the Exponential CDF: $F(4) = P(X \le 4)$.
2.  Equation: $1 - e^{-0.002(4)}$.
3.  Result: Approximately **0.008**.

---

## 7. Key Definitions and Notation Summary

*   **PMF ($p(x)$):** Used for discrete variables. $P(X = x)$.
*   **PDF ($f(x)$):** Used for continuous variables. Represents the derivative of probability; used in integrals.
*   **CDF ($F(x)$):** The cumulative probability $P(X \le x)$. Useful for both discrete and continuous, but essential for continuous "plug and chug" solutions.
*   **$\lambda$ (Lambda):** Represents the rate of events. Used in both Poisson (discrete) and Exponential (continuous) distributions.