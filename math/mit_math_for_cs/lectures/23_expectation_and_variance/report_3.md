# Expectation and Variance: Principles and Applications

This study guide provides a comprehensive review of the principles of expectation and variance as presented in the MIT 6.1200 lecture. It explores the mathematical foundations of random variables, bounds on event occurrences, the importance of independence, and the role of variance in measuring risk and distribution tails.

---

## Part 1: Short-Answer Quiz

**Instructions:** Answer the following ten questions in 2-3 sentences based on the lecture material.

1.  **What are the three common formulas used to calculate the expectation of a random variable?**
2.  **Explain the "Linearity of Expectation" and its significance when dealing with dependent variables.**
3.  **What does the Union Bound tell us about the probability of at least one event occurring?**
4.  **How does Murphy's Law, as defined in the lecture, relate to the expectation of a number of events?**
5.  **Why is the "turntable" or "lazy Susan" example a violation of the lower bound provided by Murphy’s Law?**
6.  **Under what condition is the expectation of a product of random variables equal to the product of their expectations?**
7.  **Explain why it is generally advised to never divide random variables.**
8.  **Define variance in terms of "deviation from the mean."**
9.  **Why is the value squared in the variance formula ($Var(X) = E[(X - E[X])^2]$)?**
10. **How does diversifying a stock portfolio across $k$ independent stocks affect the overall risk (standard deviation) of the investment?**

---

## Part 2: Answer Key

1.  **What are the three common formulas used to calculate the expectation of a random variable?**
    The definition involves the sum over all outcomes of the probability of the outcome times the value of the random variable. Alternatively, it can be calculated by summing the distinct values of the range of the variable multiplied by their probabilities, or as an infinite series for natural numbers using the sum of $P(X \ge i)$.

2.  **Explain the "Linearity of Expectation" and its significance when dealing with dependent variables.**
    Linearity of expectation states that the expected value of a sum of random variables is equal to the sum of their individual expectations. This property is powerful because it holds true even if the random variables are dependent on each other, allowing for the simplification of complex calculations.

3.  **What does the Union Bound tell us about the probability of at least one event occurring?**
    The Union Bound states that the probability of the union of several events is at most the sum of the individual probabilities of those events. In terms of random variables, this means the probability that at least one event occurs ($P(N \ge 1)$) is less than or equal to the expected number of events ($E[N]$).

4.  **How does Murphy's Law, as defined in the lecture, relate to the expectation of a number of events?**
    Assuming mutual independence, Murphy's Law states that the probability of at least one event occurring is at least $1 - 1/e^{E[N]}$. This formalization suggests that if the expected number of failures is large and the events are independent, the probability of at least one failure becomes very close to 1.

5.  **Why is the "turntable" or "lazy Susan" example a violation of the lower bound provided by Murphy’s Law?**
    Murphy's Law requires the assumption of mutual independence, which is absent in the turntable example where the events are perfectly dependent (either everyone gets their phone or no one does). Because the events are equal rather than independent, the probability of anyone getting their phone back is only $1/n$, which is much lower than the bound predicted for independent events.

6.  **Under what condition is the expectation of a product of random variables equal to the product of their expectations?**
    The product rule for expectation ($E[XY] = E[X]E[Y]$) only holds if the random variables $X$ and $Y$ are independent. If the variables are dependent, such as a die roll multiplied by itself ($D_1 \times D_1$), the expectation of the product will generally not equal the product of the individual expectations.

7.  **Explain why it is generally advised to never divide random variables.**
    Dividing random variables is problematic because $E[1/X]$ is rarely equal to $1/E[X]$, and the results can be undefined or misleading (such as when the expectation is zero). In practical terms, taking the expectation of ratios rather than the ratio of expectations can allow for the manipulation of statistics to support contradictory conclusions.

8.  **Define variance in terms of "deviation from the mean."**
    Variance is the expected value of the square of the difference between a random variable and its mean ($E[X]$). It measures how far, on average, the values of a random variable spread out from the center of the distribution.

9.  **Why is the value squared in the variance formula ($Var(X) = E[(X - E[X])^2]$)?**
    Squaring the deviation ensures that positive and negative differences from the mean do not cancel each other out, which would result in an expectation of zero. Additionally, squaring exaggerates larger deviations, making it a useful analytic tool that corresponds to Euclidean distance in geometry.

10. **How does diversifying a stock portfolio across $k$ independent stocks affect the overall risk (standard deviation) of the investment?**
    If investments are mutually independent, the variance of the sum is the sum of the variances, and the scaling of the investment results in the risk being divided by $k$. Consequently, as the number of independent stocks ($k$) increases, the overall risk or standard deviation of the portfolio decreases.

---

## Part 3: Essay Questions

**Instructions:** Consider these questions for deeper analysis and discussion. Answers are not provided.

1.  **The Interplay of Independence and Bounds:** Compare and contrast the Union Bound and Murphy's Law. Discuss how the requirement of independence changes the utility of these bounds when predicting system failures, using the OK Go Rube Goldberg machine as a case study.
2.  **The Statistical Pitfalls of Ratios:** Using the provided example of processor architecture benchmarks, analyze how "lying with statistics" is possible when using expectations of ratios. Explain the mathematically sound approach to comparing performance across different workloads.
3.  **Moments of Distribution:** While the lecture focuses on the second moment (variance), it mentions skewness and kurtosis. Discuss the conceptual purpose of these higher moments and why variance is often the most critical number to identify after the expectation.
4.  **Geometric Interpretations of Probability:** Explore the lecturer's assertion that we live in a "Euclidean world." How does treating random variables as vectors in high-dimensional space provide a geometric justification for the standard formula of variance?
5.  **Diversification and Independence in Real-World Systems:** The lecture concludes with a proof that diversification reduces risk, assuming mutual independence. Critique this model by discussing how real-world dependencies (such as market-wide air currents in the Rube Goldberg example or economic shifts in the stock market) might undermine the benefits of diversification.

---

## Part 4: Glossary of Key Terms

| Term | Definition |
| :--- | :--- |
| **Bernoulli Trial** | A random experiment (like a coin flip) with exactly two possible outcomes: "success" (1) and "failure" (0). |
| **Binomial Distribution** | The probability distribution of the number of successes in a sequence of $n$ independent Bernoulli trials. |
| **CDF (Cumulative Distribution Function)** | A function representing the probability that a random variable $X$ will take a value less than or equal to $x$. |
| **Central Limit Theorem** | A theorem stating that the sum of a large number of independent random variables will be approximately normally distributed. |
| **Deviation from the Mean** | The difference between a specific value of a random variable and its expected value ($X - E[X]$). |
| **Expectation ($E[X]$)** | The weighted average of all possible values of a random variable, where each value is weighted by its probability. |
| **Indicator Random Variable** | A variable that takes the value 1 if a specific event occurs and 0 if it does not; its expectation is equal to the probability of the event. |
| **Kurtosis** | The fourth central moment of a distribution, used to describe the "tailedness" of the distribution. |
| **Linearity of Expectation** | The property that the expectation of a sum of random variables equals the sum of their expectations, regardless of their independence. |
| **Mutual Independence** | A condition where the occurrence of any subset of events does not affect the probability of the other events occurring. |
| **Normal Distribution** | Also known as a Gaussian distribution or bell curve; a continuous probability distribution characterized by its mean and variance. |
| **Skew** | A measure of the asymmetry of the probability distribution of a real-valued random variable. |
| **Standard Deviation ($\sigma$)** | The square root of the variance; it provides a measure of spread in the same units as the original random variable. |
| **Union Bound** | A theorem stating that for any set of events, the probability that at least one occurs is no greater than the sum of their individual probabilities. |
| **Variance ($Var(X)$)** | A measure of the spread of a random variable, calculated as the expected value of the squared deviation from the mean. |