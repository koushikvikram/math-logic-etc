# CS109 Final Review: Probability for Computer Scientists

This briefing document synthesizes the core themes, mathematical frameworks, and strategic advice presented in the Stanford CS109 Final Review. It serves as a comprehensive guide to the post-midterm material, focusing on modeling, parameter estimation, and machine learning applications.

## Executive Summary

The CS109 final examination shifts focus from simple formula application to complex modeling and data analysis. The primary challenge lies in "modeling"—translating dense context into appropriate distributions and log-likelihood functions. Key takeaways include:

*   **Shift in Complexity:** Expect significant reading requirements (2–3 paragraphs per problem) and multi-part questions.
*   **Central Frameworks:** Mastery of the Central Limit Theorem (CLT), Beta distributions, and parameter estimation (MLE/MAP) is critical.
*   **Procedural Knowledge:** Students must be able to write algorithmic pseudo-code for bootstrapping and grid search optimization.
*   **Machine Learning Foundations:** The curriculum emphasizes the mechanics of Naive Bayes and Logistic Regression, particularly regarding independence assumptions and smoothing.

---

## 1. Strategic Exam Interpretation

Success on the final exam requires interpreting specific keywords as signals for particular mathematical methods:

| Keyword/Phrase | Required Method/Action |
| :--- | :--- |
| **"How much more likely"** | Divide two likelihoods, PDFs, or products of PDFs. |
| **"Parameterize"** | Use Maximum Likelihood Estimation (MLE) or Maximum A Posteriori (MAP). |
| **"Approximate"** | Apply the Central Limit Theorem (CLT); ensure continuity correction is applied. |
| **"Significant"** | Conduct a bootstrap or calculate a P-value (typically checking if $P > 5\%$). |
| **"Describe an algorithm"** | Usually a signal to use Gradient Ascent for optimization. |

---

## 2. Advanced Distributions and Summation

### Beta Distributions
Post-midterm material introduces the Beta distribution as a way to characterize beliefs over a Bernoulli parameter ($\theta$).
*   **Parameters:** Defined by $a$ (representing $a-1$ successes/heads) and $b$ (representing $b-1$ failures/tails).
*   **Range:** Always between 0 and 1.
*   **Function:** Unlike Bernoulli or Binomial distributions which model random events, the Beta models the probability of a specific parameter itself.

### Summing Independent Random Variables
When adding independent identically distributed (IID) variables, specific rules apply:
*   **Poisson:** Sum the $\lambda$ parameters ($\sum \lambda_i$).
*   **Normal:** Sum the means ($\mu$) and the **variances** ($\sigma^2$). Do not sum standard deviations.
*   **Binomial:** If the underlying probability parameter $p$ is the same, sum the number of trials ($n_1 + n_2$).

---

## 3. Sampling and the Central Limit Theorem (CLT)

### The Central Limit Theorem
The CLT is the "critical theorem" of the course, stating that the sum or average of a large number of IID random variables will be approximately normally distributed.
*   **Sum Flavor:** $\sum X_i \approx N(n\mu, n\sigma^2)$.
*   **Average Flavor:** Used extensively in "denoising"; as the sample size increases, the variance of the sample mean decreases, leading to a "tighter" average.

### Sampling Properties
*   **Unbiased Estimators:** The sample mean ($\bar{X}$) and sample variance ($S^2$) are unbiased, meaning their expected values converge to the true population mean and variance.
*   **Equivalence Classes:** Sampling involves constructing a histogram where each point represents an equivalent class of the underlying distribution.

---

## 4. Bootstrapping and Significance

Bootstrapping is used to estimate the distribution of a statistic (like mean or variance) by resampling from the existing data.

### Procedural Logic: The "Corgi" Variance Example
To test if a difference in variance between two populations (Island A and Island B) is significant:
1.  **Collect Samples:** Draw initial populations from both sources.
2.  **Combine:** Create a total population (since researchers cannot return to the source for more data).
3.  **Resample:** In a loop (e.g., 50,000 iterations), draw two new samples from the combined population.
4.  **Calculate Difference:** Compute the difference in variances between the two resamples.
5.  **Count:** If the difference exceeds the observed threshold (e.g., 3 inches), increment a counter.
6.  **P-value:** The count divided by the total iterations provides the P-value. A high P-value suggests the null hypothesis is likely.

---

## 5. Parameter Estimation: MLE and MAP

### Maximum Likelihood Estimation (MLE)
MLE is a two-step process to find the parameter $\theta$ that makes the observed data most probable.
1.  **Find Likelihood:** Create a product of the PDFs for all data points.
2.  **Optimize:** Transform the likelihood into a **log-likelihood** (turning products into sums), take the derivative with respect to $\theta$, set it to zero, and solve.

### Maximum A Posteriori (MAP)
MAP incorporates a **prior belief** ($G(\theta)$) into the estimation.
*   **Formula:** $\text{argmax}_\theta \prod f(x_i|\theta)G(\theta)$.
*   **Log-MAP:** Involves adding the log of the prior to the log-likelihood: $\text{argmax}_\theta [\sum \log f(x_i|\theta) + \log G(\theta)]$.
*   **Conjugate Priors:** If the model is Bernoulli, the prior should be a Beta distribution. If it is Multinomial, the prior should be a Dirichlet distribution.

---

## 6. Machine Learning Applications

### Naive Bayes
Naive Bayes relies on the "naive" assumption that all features ($x_i$) are independent given the label ($y$).
*   **Laplace Smoothing:** To prevent zero probabilities, add 1 to the numerator and $k$ (the number of possible values) to the denominator.
*   **Prediction:** Unlike MLE, Naive Bayes prediction involves looping over possible $y$ values and calculating probabilities through counting rather than derivatives.

### Logistic Regression
Logistic Regression is described as MLE applied to a Bernoulli distribution. Optimization is typically performed via **Gradient Ascent**:
$$\theta_{new} = \theta_{old} + \eta \cdot \frac{\partial LL}{\partial \theta}$$
Where $\eta$ is the learning rate and $LL$ is the log-likelihood.

---

## 7. Algorithmic Analysis: Total Expectation

When calculating the expected return value of a recursive function containing random variables:
1.  **Identify Target:** Define $E[X]$ as the expected return of the function.
2.  **Substitute:** Replace recursive calls with $E[X]$.
3.  **Independence:** If the function involves a product of a random variable $Q$ and a recursive call $X$, use the property $E[Q \cdot X] = E[Q]E[X]$, provided they are independent.
4.  **Law of Total Expectation:** Weight the expected value of each branch by the probability of entering that branch.

### Example Optimization (Grid Search)
In cases where a parameter (like $B$ in a Beta distribution range) must be accurate to specific decimal places, a **grid search** pseudo-code is utilized:
*   Start with a small value.
*   Use a `while` loop to increment the value by the required precision (e.g., `0.01`).
*   Check if the condition (e.g., CDF range $\ge 95\%$) is met.
*   Break and return the value once the condition is satisfied.