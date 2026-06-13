# Probability Tail Bounds: Markov, Chebyshev, and Chernoff

This study guide examines the methods used in probability theory to determine the "tail bounds" of a random variable. Tail bounds provide the probability that a random variable deviates significantly from its expectation, either by becoming very large or very small.

## 1. Variance and Standard Deviation Review
Before establishing specific bounds, it is necessary to understand the measures of spread for a random variable $R$.

*   **Definition of Variance:** The variance of $R$ is defined as the expectation of the squared difference between $R$ and its expectation: $Var(R) = E[(R - E[R])^2]$.
*   **Alternative Formula:** An equivalent and often more useful formulation is $Var(R) = E[R^2] - (E[R])^2$.
*   **Standard Deviation:** This is simply the square root of the variance.
*   **Linearity of Variance:** The variance of a sum of random variables ($R_1, R_2, ..., R_n$) is equal to the sum of their individual variances, provided the variables are **pairwise independent**. Mutual independence is a stronger condition than required; pairwise independence is sufficient for this linearity to hold.

## 2. Markov’s Inequality
Markov’s Inequality is the most basic tail bound, requiring the least amount of information about a random variable.

### Core Principle
If $R$ is a **non-negative** random variable, the probability that $R$ is at least as large as some value $x$ is bounded by its expectation divided by $x$:
$$P(R \ge x) \le \frac{E[R]}{x}$$

An equivalent formulation often used for relative thresholds is:
$$P(R \ge c \cdot E[R]) \le \frac{1}{c}$$

### Proof via Law of Total Expectation
The inequality is derived by conditioning $E[R]$ on the event $R \ge x$.
1.  Using the Law of Total Expectation: $E[R] = E[R | R \ge x]P(R \ge x) + E[R | R < x]P(R < x)$.
2.  Since $R$ is non-negative, $E[R | R < x]P(R < x)$ is at least 0.
3.  Since $R \ge x$, $E[R | R \ge x]$ must be at least $x$.
4.  Therefore, $E[R] \ge x \cdot P(R \ge x)$, which simplifies to Markov's Inequality.

### Tightness and Shifting
*   **Tightness:** Markov’s Inequality is "tight" when no stronger statement can be made without additional information. For example, in a "Lazy Susan" phone collection problem with mean 1, the probability of everyone ($n$ people) getting their phone back is $1/n$, which exactly matches the Markov bound.
*   **Shifting Variables:** If a random variable has a lower bound greater than zero (e.g., test scores ranging from 30 to 100), one can define a new variable $R' = R - 30$. Applying Markov to $R'$ often yields a "tighter" (stronger/smaller) upper bound than applying it to $R$ directly.

## 3. Chebyshev’s Inequality
Chebyshev’s Inequality provides a stronger bound than Markov when the variance of the random variable is known.

### Formula and Conditions
For any random variable $R$ (not necessarily non-negative):
$$P(|R - E[R]| \ge x) \le \frac{Var(R)}{x^2}$$

### Proof Method
Chebyshev is proved by applying Markov’s Inequality to the squared deviation. By defining a new non-negative random variable $R' = (R - E[R])^2$, the event $|R - E[R]| \ge x$ is identical to $R' \ge x^2$. Applying Markov to $R'$ yields the Chebyshev result.

### Implications
Chebyshev shows that the probability of a variable deviating from its mean is limited by its variance. For example, the probability of being at least two standard deviations from the mean is at most $1/4$.

## 4. The Chernoff Bound
The Chernoff Bound is significantly more powerful than Markov or Chebyshev but requires the strongest preconditions.

### Requirements
*   The random variable $T$ must be a sum of **mutually independent** random variables.
*   The component variables must be bounded.

### Power of the Bound
While Markov is linear and Chebyshev is quadratic in their decay, the Chernoff Bound is **exponential**. It states that the probability of $T$ deviating from its expectation by a factor $c$ decreases exponentially as the number of variables increases:
$$P(T \ge c \cdot E[T]) \le e^{-(c \ln c - c + 1)E[T]}$$

The proof involves exponentiating the random variable ($C^T$) and applying Markov’s Inequality to this new, monotone, non-negative variable.

## 5. Comparison of Bounds: Coin Toss Example
Consider flipping $n$ coins and calculating the probability $p$ that the number of heads is $\ge 3n/4$.

| Bound | Result Type | Effectiveness |
| :--- | :--- | :--- |
| **Markov** | $2/3$ | Very weak; a constant bound regardless of $n$. |
| **Chebyshev** | $4/n$ | Better; the bound decreases linearly as $n$ grows. |
| **Chernoff** | $e^{-O(n)}$ | Extremely strong; the probability drops off exponentially. |

***

## Quiz: Short Answer
*Total 10 questions. Provide 2-3 sentences for each answer.*

1.  **What are the two common formulas for calculating variance?**
2.  **What is the minimum requirement for the variance of a sum to equal the sum of the variances?**
3.  **Why must a random variable be non-negative for Markov’s Inequality to hold?**
4.  **Explain the intuition behind the Markov bound $P(R \ge 16) \le 1/2$ if $E[R] = 8$.**
5.  **How does "shifting" a random variable improve a tail bound?**
6.  **What does it mean for a probability bound to be "tight"?**
7.  **How do you convert a Chebyshev problem into a Markov problem?**
8.  **What is the primary difference between the independence requirements for Chebyshev and Chernoff?**
9.  **Describe the relationship between standard deviation and Chebyshev’s Inequality.**
10. **In the context of the coin-toss example, how does the Chernoff bound behave as the number of tosses ($n$) increases?**

***

## Answer Key

1.  Variance can be defined as the expectation of the squared deviation from the mean, $E[(R - E[R])^2]$. Alternatively, it can be calculated as the expectation of the squares minus the square of the expectation, $E[R^2] - (E[R])^2$.
2.  The random variables must be pairwise independent. This is a weaker condition than mutual independence, meaning only pairs of variables must be independent for the linearity of variance to apply.
3.  Without non-negativity, the Law of Total Expectation cannot discard the term for values below the threshold $x$. If the variable could be negative, those negative values would "cancel out" large positive values, making the expectation an unreliable upper bound for the probability of large values.
4.  If the average is 8, you cannot have more than half the population at 16 or higher, because that would push the average above 8. Markov formalizes this by stating that too many super-large values would inevitably increase the expectation beyond its known value.
5.  If a variable $R$ is always $\ge 30$, applying Markov to $R$ uses 0 as a baseline, which is "loose." By defining $R' = R - 30$, you create a variable that is still non-negative but has a smaller expectation relative to its range, resulting in a smaller, more accurate upper bound.
6.  A bound is tight if there exists a distribution where the probability exactly equals the bound. This means the bound cannot be improved (made smaller) without knowing more information about the random variable beyond its expectation or variance.
7.  To prove or use Chebyshev via Markov, you define a new random variable based on the squared deviation from the mean, $R' = (R - E[R])^2$. Because this new variable is always non-negative, Markov’s Inequality can be applied to it to find the probability of deviating by more than $x$.
8.  Chebyshev’s Inequality only requires pairwise independence to calculate the variance of a sum. In contrast, the Chernoff Bound requires mutual independence of all component variables to achieve its exponential decay result.
9.  Chebyshev’s Inequality bounds the probability that a variable is a certain distance from its mean. Specifically, the probability that a random variable is at least $k$ standard deviations away from its mean is at most $1/k^2$.
10. The Chernoff bound for coin tosses results in an inverse exponential probability. As $n$ grows, the probability that the number of heads deviates significantly from the mean $n/2$ drops toward zero extremely rapidly, much faster than the linear decrease suggested by Chebyshev.

***

## Essay Questions
*Suggested topics for deeper analysis (No answers provided).*

1.  **The Evolution of Bounds:** Compare the information requirements for Markov, Chebyshev, and Chernoff. Discuss why increasing the amount of known information about a distribution leads to exponentially stronger bounds.
2.  **The Role of Independence:** Analyze the difference between pairwise independence and mutual independence. Why is pairwise independence sufficient for Chebyshev, but insufficient for the Chernoff Bound?
3.  **Proof Mechanics:** Contrast the proof of Markov’s Inequality using the Law of Total Expectation with the proof of Chebyshev’s Inequality. How does the latter "cheat" by using the former?
4.  **Practical Application of Shifting:** Using the test score example (30-100 range), discuss how shifting and flipping random variables ($S = 100 - R$) allows Markov’s Inequality to bound both upper and lower tails.
5.  **Tightness vs. Realism:** Discuss why Chebyshev's bound of $1/4$ for two standard deviations feels "weak" compared to a normal distribution. Explain what specific information a normal distribution has that Chebyshev does not utilize.

***

## Glossary of Key Terms

*   **Chernoff Bound:** A powerful tail bound that provides exponential decay for the sum of mutually independent, bounded random variables.
*   **Chebyshev’s Inequality:** A tail bound that uses the variance of a random variable to limit the probability of deviation from the mean; it follows a quadratic decay ($1/x^2$).
*   **Law of Total Expectation:** A method of calculating the expectation of a random variable by summing the conditional expectations across a set of exhaustive, mutually exclusive events.
*   **Linearly of Variance:** The principle that the variance of a sum equals the sum of variances, provided the variables are pairwise independent.
*   **Markov’s Inequality:** The most basic tail bound; it relates the probability of a non-negative random variable exceeding a threshold to its expectation.
*   **Mutual Independence:** A condition where the probability of any event in a set occurring is unaffected by the occurrence of any other combination of events in that set.
*   **Pairwise Independence:** A condition where every possible pair of random variables in a set is independent.
*   **Standard Deviation:** The square root of the variance, representing the typical distance of outcomes from the mean.
*   **Tail Bound:** A mathematical limit on the probability that a random variable takes a value far from its expected value.
*   **Tight Bound:** A bound that is as small as possible given the available information; it represents the "worst-case" scenario for a distribution.
*   **Variance:** The average of the squared differences from the Mean; a measure of how "spread out" a distribution is.