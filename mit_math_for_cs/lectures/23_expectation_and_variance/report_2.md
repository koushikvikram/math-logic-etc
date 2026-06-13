# Statistical Analysis of Expectation and Variance

This briefing document synthesizes key concepts from MIT’s lecture on probability, focusing on advanced applications of expectation and the introduction of variance. It outlines the mathematical frameworks for predicting outcomes, bounding probabilities, and measuring risk through statistical dispersion.

## Executive Summary

The transition from expectation to variance represents a shift from measuring "average" outcomes to measuring the "reliability" or "risk" associated with those outcomes. While expectation provides a central tendency, it fails to capture the spread of a distribution. Key takeaways include:

*   **Linearity and Product Rules:** Expectation is always linear, but the product rule for expectation ($E[XY] = E[X]E[Y]$) only holds if the variables are independent.
*   **Probability Bounds:** The Union Bound provides a universal upper bound for the probability of events, while "Murphy’s Law" provides a lower bound for independent events, suggesting that what can go wrong likely will if the expected number of failures is high.
*   **The Hazard of Division:** One must never divide random variables or take the expectation of ratios ($E[X/Y]$) for performance comparisons, as it leads to statistically biased and contradictory results.
*   **Variance as Risk:** Variance ($Var(X)$) measures the deviation from the mean. Unlike expectation, variance is not translation-sensitive but is highly sensitive to scaling. In financial contexts, diversifying a portfolio across independent assets reduces overall variance (risk).

---

## I. Foundations and Formulas for Expectation

Expectation ($E[X]$) is a measure of the central tendency of a random variable. The lecture identifies four primary methods for calculation based on the scenario:

| Scenario | Formula |
| :--- | :--- |
| **Basic Definition** | Sum over all outcomes: $\sum_{\omega \in S} P(\omega) X(\omega)$ |
| **Distinct Values** | Sum over the range of $X$: $\sum_{x \in Range(X)} P(X=x)x$ |
| **Natural Numbers** | Infinite series based on the CDF: $\sum_{i=1}^{\infty} P(X \ge i)$ |
| **Indicator Variables** | For events where $X \in \{0, 1\}$: $E[X] = P(X=1)$ |

### Linearity of Expectation
A fundamental property is that the expectation of a sum is the sum of the expectations: $E[\sum c_i X_i] = \sum c_i E[X_i]$. This holds true even if the random variables are dependent.

---

## II. Probability Bounds and "Murphy’s Law"

When analyzing the number of events ($N$) that might occur, such as system failures, two primary bounds are used to estimate the probability that at least one event occurs ($P(N \ge 1)$).

### The Union Bound
The probability of the union of events is at most the sum of their individual probabilities:
$$P(\cup E_i) \le \sum P(E_i) = E[N]$$
This is a "weak" upper bound because it works in all cases (dependent or independent) but can result in a value greater than 1, which offers no useful information.

### Murphy’s Law (Formalized)
If $n$ events are **mutually independent**, the probability that at least one occurs is bounded by:
$$P(N \ge 1) \ge 1 - \frac{1}{e^{E[N]}}$$
This implies that as the expected number of events increases, the probability of at least one occurring approaches 1 exponentially.

### Impact of Dependence
Dependence can cause these bounds to fail or become misleading. 
*   **Case Study: Phone Returning:** If phones are returned via random rotation (highly dependent), the probability of anyone getting their phone back is $1/n$. This violates the Murphy's Law bound (which suggests $\approx 0.63$), demonstrating that high dependence "breaks" the law of independent failure.

---

## III. Mathematical Operations: Products and Ratios

### The Product Rule
For two random variables $X$ and $Y$, $E[XY] = E[X]E[Y]$ **only if** $X$ and $Y$ are independent. 
*   **Example:** Rolling two independent dice and taking the product results in $E[D_1] \cdot E[D_2] = 12.25$. However, $E[D_1 \cdot D_1]$ (highly dependent) results in $\approx 15.17$.

### The Prohibition of Division
The document explicitly warns: **"Never divide random variables."**
1.  **Mathematical Inequality:** $E[1/X]$ generally does not equal $1/E[X]$. If $E[X] = 0$, $1/E[X]$ is undefined, while $E[1/X]$ might be a real number.
2.  **Statistical Manipulation:** Using the "expectation of ratios" to compare performance (e.g., computer architectures) allows one to "lie with statistics." Depending on which variable is the numerator, one could argue that Processor A is faster than B, and simultaneously that B is faster than A. 
    *   **Correct approach:** Always use the **ratio of expectations** rather than the expectation of ratios.

---

## IV. Variance and Standard Deviation

Variance measures how much a random variable "spreads" from its mean. It is defined as the expectation of the squared deviation from the mean:
$$Var(X) = E[(X - E[X])^2]$$

### Standard Deviation
The standard deviation ($\sigma_x$) is the square root of the variance: $\sqrt{Var(X)}$. While variance is measured in squared units, standard deviation returns the measure to the original units of the variable.

### Why use Squared Deviation?
*   **Non-zeroing:** Simply taking $E[X - E[X]]$ results in 0, as positive and negative deviations cancel out.
*   **Analytical Smoothness:** Squaring produces a differentiable function, making it easier to work with than absolute values.
*   **Geometry:** In a Euclidean framework, standard deviation represents the distance between the random variable vector and the mean vector.
*   **Normal Distributions:** For Gaussian distributions, the mean and variance are the only two numbers required to describe the entire distribution.

---

## V. Properties and Applications of Variance

### Algebraic Properties
1.  **Translation Invariance:** Adding a constant does not change variance: $Var(X + c) = Var(X)$.
2.  **Scaling:** Multiplying by a constant scales the variance by the square of that constant: $Var(cX) = c^2 Var(X)$.
3.  **Alternate Formula:** A more efficient way to calculate variance is $Var(X) = E[X^2] - (E[X])^2$.
4.  **Sum of Independents:** If $X$ and $Y$ are independent, $Var(X + Y) = Var(X) + Var(Y)$.

### Application: Portfolio Diversification
Variance is a proxy for risk. When investing $n$ dollars:
*   **Single Stock:** Investing all $n$ dollars in one stock results in high variance ($n^2$).
*   **Diversified Stocks:** Splitting $n$ dollars across $k$ independent stocks reduces the variance. Because the variables are independent, the total variance becomes $\frac{n^2}{k}$. 
*   **Conclusion:** Increasing the number of independent investments ($k$) linearly reduces the total risk (variance) of the portfolio. This provides the mathematical basis for the financial advice to "diversify your portfolio."