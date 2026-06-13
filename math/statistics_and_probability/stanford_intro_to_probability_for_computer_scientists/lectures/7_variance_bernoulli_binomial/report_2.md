# CS109 Lecture 7 Study Guide: Variance, Bernoulli, and Binomial Distributions

This study guide provides a comprehensive review of the core concepts, mathematical foundations, and practical applications of random variables as presented in the CS109 Lecture 7 materials. It focuses on the transition from basic probability to the use of established probabilistic "packages" like the Bernoulli and Binomial distributions, as well as the introduction of variance as a measure of spread.

---

## Part I: Short-Answer Quiz

**Instructions:** Answer the following questions in 2–3 sentences based on the information provided in the source context.

1.  **What is a random variable, and how does its notation differ from standard variables?**
2.  **Describe the significance of the Probability Mass Function (PMF).**
3.  **How is the expectation of a random variable calculated from a provided data set?**
4.  **What are the three core requirements for a scenario to be classified as a Binomial distribution?**
5.  **Explain the relationship between a Bernoulli random variable and a Binomial random variable.**
6.  **How can the probability of a range of successes (e.g., $X \ge k$) be calculated for a Binomial distribution?**
7.  **What is a Galton board, and how does it demonstrate the Binomial distribution?**
8.  **Define Variance and explain why it is a necessary supplement to Expectation.**
9.  **What is the "Second Moment," and how is it used in the computational formula for variance?**
10. **How does the Python library SciPy assist in calculating probability for large-scale problems?**

---

## Part II: Answer Key

1.  **What is a random variable, and how does its notation differ from standard variables?**
    A random variable is a value that takes on a number probabilistically rather than being fixed. In notation, capital letters (like $X$ or $Y$) are used to distinguish them from non-random variables, and they represent the distribution of different values the variable can take.

2.  **Describe the significance of the Probability Mass Function (PMF).**
    The PMF is the "be-all end-all" of random variables because it provides the relationship between the different values a random variable can take and their associated probabilities. Once the PMF is known, any probability question regarding that random variable becomes straightforward to solve.

3.  **How is the expectation of a random variable calculated from a provided data set?**
    To calculate expectation from data, one simply takes the average of all the numbers in the set. This is mathematically legitimate because the probability of any value occurring is approximately its frequency in the data set divided by the total number of experiments.

4.  **What are the three core requirements for a scenario to be classified as a Binomial distribution?**
    A Binomial distribution requires $n$ independent trials of the same experiment, where each trial has the same probability $p$ of resulting in a "success." The variable of interest must be the exact number of successes ($k$) across those $n$ trials.

5.  **Explain the relationship between a Bernoulli random variable and a Binomial random variable.**
    A Bernoulli random variable is a special case of the Binomial distribution where the number of trials ($n$) is equal to one. Conversely, a Binomial random variable can be viewed as the sum of $n$ independent Bernoulli trials, each yielding a 0 or 1.

6.  **How can the probability of a range of successes (e.g., $X \ge k$) be calculated for a Binomial distribution?**
    Because the outcomes of a random variable are mutually exclusive (e.g., you cannot have exactly 4 wins and exactly 5 wins simultaneously), you can sum the individual probabilities for each value in the range. For example, $P(X \ge 4)$ is the sum of $P(X=4) + P(X=5) + P(X=6) + P(X=7)$.

7.  **What is a Galton board, and how does it demonstrate the Binomial distribution?**
    A Galton board is a device where marbles drop through rows of pins, bouncing left or right at each pin with equal probability. The final bucket a marble lands in is determined by the number of times it "chose" to go right, which follows a Binomial distribution.

8.  **Define Variance and explain why it is a necessary supplement to Expectation.**
    Variance is a formal quantification of "spread," defined as the average squared distance of values from the mean. It is necessary because expectation only provides a weighted average, which can mask significant differences in the distribution and consistency of data points.

9.  **What is the "Second Moment," and how is it used in the computational formula for variance?**
    The second moment is the expectation of the squared random variable, $E[X^2]$. It is used in the easier computational formula for variance: $Var(X) = E[X^2] - (E[X])^2$.

10. **How does the Python library SciPy assist in calculating probability for large-scale problems?**
    SciPy provides a `stats` module that contains built-in functions for the PMFs of established distributions. For instance, `stats.binom.pmf(k, n, p)` allows a user to input the number of successes, trials, and probability to receive an immediate result without manual calculation.

---

## Part III: Essay Questions

**Instructions:** These questions are designed to promote deeper analysis of the lecture concepts. Consider the mathematical derivations and real-world implications when formulating your thoughts.

1.  **The Evolution of a Problem-Solver:** Discuss how recognizing a "natural phenomenon" like the Binomial distribution changes the workflow of a computer scientist compared to deriving probabilities from first principles.
2.  **The Accuracy of Peer Grading:** Using the concepts of expectation and variance, analyze why two graders might have the same average score (expectation) but vastly different levels of reliability for a student.
3.  **The Linearity of Expectation in Proofs:** Evaluate the derivation of the expectation of a Binomial distribution ($E[X] = np$). How does breaking a complex variable into the sum of Bernoulli trials simplify this mathematical process?
4.  **Beyond the Mean:** Critique the use of expectation as a single summary statistic. In what scenarios in computer science (e.g., server crashes or ad clicks) might variance be more important than the average outcome?
5.  **Ghost Games and Probability:** Reflect on the "Best of 7" basketball series example. Explain why treating the series as a fixed seven-trial experiment is mathematically sound, even though the real-world series stops as soon as one team reaches four wins.

---

## Part IV: Glossary of Key Terms

| Term | Definition |
| :--- | :--- |
| **Bernoulli Random Variable** | A random variable that represents a single trial with two possible outcomes: success (1) with probability $p$, and failure (0) with probability $1-p$. |
| **Binomial Random Variable** | A random variable representing the number of successes in $n$ independent Bernoulli trials, each with the same probability $p$. |
| **Expectation ($E[X]$)** | A summary statistic representing the weighted average of all possible values a random variable can take; also known as the mean or "center of mass." |
| **Law of the Unconscious Statistician (LOTUS)** | A rule allowing the calculation of the expectation of a function of a random variable, $g(X)$, by summing $g(x)$ weighted by the probability of $x$. |
| **Linearity of Expectation** | The property stating that the expectation of a sum of random variables equals the sum of their individual expectations, regardless of whether the variables are independent. |
| **Mutually Exclusive** | A property of events or values where only one can occur at a time; in random variables, the probability that $X=a$ and $X=b$ (where $a \neq b$) is zero. |
| **Probability Mass Function (PMF)** | A function that maps each possible value of a discrete random variable to the probability of that value occurring. |
| **Second Moment** | The expectation of the random variable squared, $E[X^2]$, calculated by summing the squares of the values multiplied by their probabilities. |
| **Standard Deviation** | A measure of spread expressed in the same units as the random variable, calculated as the square root of the variance. |
| **Variance ($Var(X)$)** | A measure of the "spread" or dispersion of a distribution, defined as the expected squared distance from the mean. |