# Technical Briefing: Variance, Bernoulli, and Binomial Distributions

## Executive Summary
This document synthesizes core concepts from Stanford’s CS109 lecture on probability, focusing on the transition from basic counting theory to formal random variable structures. The primary takeaways include the definition and utility of the **Bernoulli** and **Binomial** random variables—natural phenomena that model independent trials—and the introduction of **Variance** as a critical summary statistic for measuring "spread" beyond simple Expectation. Key findings highlight that while Expectation provides a weighted center of mass, Variance is necessary to quantify the reliability and distribution of data, as demonstrated in applications such as peer grading and Galton boards.

---

## 1. Foundational Review: Random Variables
A random variable is defined as a variable that takes on numerical values probabilistically. It is distinguished from non-random variables by its distribution, which is communicated through a **Probability Mass Function (PMF)**.

### 1.1 The Probability Mass Function (PMF)
The PMF is the "be-all and end-all" of a random variable. It is a function that maps every possible value the random variable can take to its associated probability.
*   **Notation:** If $Y$ is a random variable, $P(Y=k)$ represents the probability of the event that $Y$ takes on value $k$.
*   **Utility:** Once the PMF is defined, any probability question regarding that variable becomes a straightforward calculation.

### 1.2 Expectation and Linearity
Expectation ($E[X]$) is a summary statistic representing the weighted average or "center of mass" of a random variable.
*   **Definition:** The sum of each possible value multiplied by its probability: $E[X] = \sum x P(X=x)$.
*   **Linearity of Expectation:** A fundamental property where the expectation of a sum of random variables equals the sum of their individual expectations: $E[X+Y] = E[X] + E[Y]$. This holds regardless of whether the variables are independent.
*   **Law of the Unconscious Statistician (LOTUS):** A rule allowing for the calculation of the expectation of a function of a random variable: $E[g(X)] = \sum g(x) P(X=x)$.

---

## 2. The Bernoulli Random Variable
Named after Jacob Bernoulli, this is the simplest form of a random variable, representing a single experiment with a binary outcome.

| Attribute | Description |
| :--- | :--- |
| **Narrative** | A single trial that results in either "success" (1) or "failure" (0). |
| **Parameters** | $p$: the probability of success. |
| **Expectation** | $E[X] = p$. |
| **Examples** | A single coin flip, a single server crash, or a binary digit. |

---

## 3. The Binomial Random Variable
The Binomial distribution models the number of successes in a fixed number of independent trials. It is a "nice package" that allows for the solution of complex problems without re-deriving the mathematics from first principles.

### 3.1 Definition and Notation
A random variable $X$ follows a Binomial distribution, denoted $X \sim \text{Bin}(n, p)$, if it represents the number of successes in $n$ independent trials, where each trial has a probability $p$ of success.

### 3.2 The Binomial PMF
The probability of getting exactly $k$ successes in $n$ trials is given by:
$$P(X=k) = \binom{n}{k} p^k (1-p)^{n-k}$$
*   $\binom{n}{k}$: The number of ways to choose $k$ success positions in $n$ trials.
*   $p^k$: The probability of $k$ successes.
*   $(1-p)^{n-k}$: The probability of $n-k$ failures.

### 3.3 Real-World Applications
*   **Web Advertising:** Calculating the probability of $k$ clicks out of $n$ served ads (e.g., 1,000 ads with $p=0.01$).
*   **Computing:** Predicting the probability of server crashes in a large cluster to manage load.
*   **Sports:** Modeling a best-of-seven series (e.g., the Golden State Warriors vs. the Milwaukee Bucks). To win the series, a team must win $\ge 4$ games. This is calculated by summing the PMF for $k=4, 5, 6, 7$.
*   **Galton Board:** A physical demonstration where marbles fall through pins. Each pin represents an independent trial (left or right). The final distribution of marbles in buckets follows a Binomial curve.

### 3.4 Relationship to Bernoulli
A Binomial random variable can be viewed as the sum of $n$ independent Bernoulli random variables ($X = \sum Y_i$). Using the linearity of expectation, the expectation of a Binomial variable is easily derived:
$$E[X] = E\left[\sum Y_i\right] = \sum E[Y_i] = \sum p = np$$

---

## 4. Measuring Spread: Variance
Expectation alone is insufficient for fully describing a random variable, as it does not account for how much the values vary from the mean.

### 4.1 Motivation: Peer Grading
To scale online education, students may grade each other. Consider three graders:
*   **Grader A & B:** Both have the same expectation (the grade you deserve), but Grader A has a much higher "spread" (more erratic grading).
*   **Grader C:** Biased (gives lower grades than deserved).
Variance provides the mathematical tool to quantify the "spread" of Grader A versus Grader B.

### 4.2 Definition of Variance ($Var(X)$)
Variance is the average of the squared distances from the mean ($\mu$).
*   **Formal Definition:** $Var(X) = E[(X - E[X])^2]$.
*   **Standard Deviation:** The square root of the variance ($\sigma = \sqrt{Var(X)}$), used to return the spread to the original units of the data.

### 4.3 Computational Formula
While the definition is semantically important, the easier way to calculate variance is:
$$Var(X) = E[X^2] - (E[X])^2$$
*   **$E[X^2]$ (The Second Moment):** Calculated using LOTUS as $\sum x^2 P(X=x)$.
*   **$(E[X])^2$:** The square of the first moment (the mean).
*   *Note:* These two values are not the same; the order of squaring and taking the expectation matters significantly.

---

## 5. Administrative and Technical Implementation

### 5.1 Python Implementation
Modern data science utilizes libraries like `scipy.stats` to handle these calculations.
*   **Function:** `stats.binom.pmf(k, n, p)`
*   **Usage:** Instead of manual loops or complex combinations, one can calculate the probability of any Binomial event by providing the number of successes, total trials, and probability.

### 5.2 Course Logistics
*   **High-Resolution Feedback:** CS109 utilizes a random sampling feedback system to make immediate course adjustments rather than waiting for mid-quarter evaluations.
*   **Office Hours:** In response to feedback, four additional virtual office hours were added, totaling eight Zoom-only hours to assist students who cannot attend physically.
*   **Infrastructure:** Efforts are underway to address internet connectivity issues in the NVIDIA building.
*   **Secret Code:** The lecture's participation code is "binomialbunny."