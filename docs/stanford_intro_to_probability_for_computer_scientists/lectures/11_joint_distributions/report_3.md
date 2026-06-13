# Probabilistic Modeling: Joint Distributions and the Multinomial Model

## Executive Summary

This briefing document synthesizes key concepts from CS109, focusing on the transition from single-variable probability to probabilistic models involving multiple random variables. Central to this transition is the **Joint Probability Mass Function (Joint PMF)**, which provides the complete information required to solve multi-variable problems. 

Key takeaways include:
*   **The Power of Joint Distributions:** A joint distribution allows for the calculation of any probability regarding a set of random variables, including marginal and conditional probabilities.
*   **Marginalization:** This process allows analysts to extract the distribution of a single variable from a joint table by summing out other variables, a technique fundamentally rooted in the Law of Total Probability.
*   **The Multinomial Distribution:** Serving as a "big sister" to the binomial distribution, the multinomial model accounts for experiments with more than two possible outcomes (e.g., dice rolls vs. coin flips). It is a more efficient representation than a joint table when dealing with many variables.
*   **Text Analysis Applications:** Multinomial models are used in Natural Language Processing (NLP) to calculate the likelihood of documents based on word counts. This is demonstrated through the historical mystery of the authorship of *The Federalist Papers*.
*   **Computational Constraints:** When implementing these models, computers often struggle with "underflow" (the inability to represent extremely small probabilities), necessitating the use of log-probabilities.

---

## Review: The Normal Distribution and Log-Probabilities

Before advancing to joint distributions, it is essential to master the Normal (Gaussian) distribution and the computational tools used in probability.

### The Normal Distribution Formula
For a normal random variable $X \sim N(\mu, \sigma^2)$, the probability that $X$ is less than a value $x$ is calculated using the CDF and the pre-calculated Phi ($\Phi$) function:
$$P(X \le x) = \Phi\left(\frac{x - \mu}{\sigma}\right)$$

### Practical Application: Server Capacity (Singles Day)
In a real-world scenario such as Alibaba’s "Singles Day," the normal distribution is used to determine how many servers ($k$) are needed to ensure a no-drop request probability of $> 0.999999$.
*   **Method:** Invert the $\Phi$ function (Inverse Phi) to find the input value that yields the desired probability.
*   **Result:** By calculating the required request capacity $R$ and dividing by the capacity per server, an organization can determine the exact hardware investment needed to meet stability guarantees.

### Computational Identity: Log-Probabilities
Computers have difficulty representing the extremely small numbers resulting from multiplying many probabilities. To solve this, computer scientists use the identity:
$$\log(A \times B) = \log(A) + \log(B)$$
By summing the logs of probabilities rather than multiplying the raw probabilities, systems avoid **underflow issues** while maintaining the relative scale of the data.

---

## Joint Distributions

Probabilistic models move beyond single random variables to consider variables that are "random together."

### The Joint Probability Mass Function (PMF)
The Joint PMF takes two or more inputs and returns the probability of a joint assignment. For two dice rolls, $X$ and $Y$, the joint assignment $P(X=x, Y=y)$ represents the likelihood of both events occurring simultaneously.

### Representation via Tables
A common way to visualize joint distributions for discrete variables is a joint probability table.
*   **Complete Information:** If you possess the joint distribution table, you can answer any probabilistic question about those variables.
*   **Total Probability:** All entries in a proper joint distribution table must sum to 1.0, as the cells represent mutually exclusive and collectively exhaustive outcomes.

### Marginalization
Marginalization is the process of extracting the distribution of a single variable from a joint distribution.
*   **The Process:** To find $P(X=a)$, one must sum all values in the row (or column) where $X=a$ across all possible assignments of $Y$.
*   **Theoretical Link:** Marginalization is essentially the **Law of Total Probability** expressed through joint distribution notation.
*   **Etymology:** The name "marginal" stems from the historical practice of writing these sums in the margins of probability tables.

---

## The Multinomial Distribution

The multinomial distribution is an extension of the binomial distribution, moving from binary outcomes (success/failure) to $m$ possible outcomes.

### Definition and Parameters
A multinomial distribution is defined by:
1.  $n$: The total number of independent trials (e.g., dice rolls).
2.  $m$: The number of possible outcomes per trial.
3.  $p_1, p_2, \dots, p_m$: The probability of each outcome, where $\sum p_i = 1$.
4.  $c_1, c_2, \dots, c_m$: The count of how many times each outcome occurred, where $\sum c_i = n$.

### The Multinomial PMF
The joint probability of a specific set of counts is calculated as:
$$P(X_1=c_1, X_2=c_2, \dots, X_m=c_m) = \frac{n!}{c_1! c_2! \dots c_m!} \prod_{i=1}^{m} p_i^{c_i}$$

The term $\frac{n!}{c_1! c_2! \dots c_m!}$ is the **multinomial coefficient**, representing the number of ways to order the outcomes.

---

## Case Study: The Federalist Papers

The multinomial distribution provides a framework for solving the historical mystery regarding the authorship of *The Federalist Papers*, specifically those claimed by both Alexander Hamilton and James Madison.

### Methodology: Bag of Words
Each author is viewed as having a "massive dice" where every side is a word in the English language. The probability of landing on a specific word ($p_i$) differs based on the author's writing style.

### Applying Bayes' Theorem
To identify the author of an unknown document ($D$), we seek the probability of the Author ($A$) given the document:
$$P(A|D) = \frac{P(D|A)P(A)}{P(D)}$$

*   **Prior $P(A)$:** Often assumed to be $0.5$ (neutral) for both Hamilton and Madison.
*   **Likelihood $P(D|A)$:** Calculated using the Multinomial PMF based on the word frequencies found in the authors' known works.

### The Ratio Trick
To determine authorship without calculating the difficult "evidence" term $P(D)$, we compare the ratio of the posterior probabilities:
$$\frac{P(\text{Hamilton}|D)}{P(\text{Madison}|D)} = \frac{P(D|\text{Hamilton})P(\text{Hamilton})}{P(D|\text{Madison})P(\text{Madison})}$$

If the ratio is greater than 1, the evidence favors Hamilton; if less than 1, it favors Madison. Note that the multinomial coefficients cancel out because they are identical for both authors given the same document.

### The Problem of Zero Probabilities
In initial computational tests, calculating $P(D|A)$ often results in a value of **zero**. This is not because the document is impossible, but because the product of thousands of small probabilities exceeds the computer’s precision limits (underflow). Solving this requires transitioning the calculation into the **log-space**.