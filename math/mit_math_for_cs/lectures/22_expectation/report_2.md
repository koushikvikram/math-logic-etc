# Comprehensive Study Guide: Probability and Expectation

This study guide is based on the principles and examples provided in the MIT OpenCourseWare lecture on expectation. It covers the definition of expectation, the utility of indicator random variables, the power of linearity, and practical applications in games and probability distributions.

---

## Part I: Short-Answer Quiz

**Instructions:** Answer the following ten questions in 2–3 sentences each based on the provided source material.

1.  **What is the fundamental definition of a random variable according to the lecture?**
2.  **How is the "expectation" of a random variable defined mathematically?**
3.  **Why is the expected value of a fair six-sided die roll (3.5) significant in understanding the nature of expectation?**
4.  **What is the specific relationship between an indicator random variable and probability?**
5.  **In the context of the three-player "gambling game," why is the strategy of picking the opposite of a previous player effective?**
6.  **What was the core strategy used by Herman Chernoff to "beat" the Massachusetts lottery?**
7.  **What are the two common formulas for computing expectation when the random variable’s codomain is the set of natural numbers?**
8.  **Define "Mean Time to Failure" and provide its simplified formula for a biased coin with probability *p*.**
9.  **What makes "Linearity of Expectation" one of the most powerful tools in probability?**
10. **In the "phone return" scenarios (random return vs. Lazy Susan), why is the expected number of matches the same despite the different distributions?**

---

## Part II: Answer Key

1.  **Fundamental Definition:** A random variable is neither random nor a variable; it is a function from a sample space to a set of values, usually real numbers. It represents a computation about an experiment, mapping every possible sample outcome to a single value.
2.  **Mathematical Definition:** The expectation of a random variable *X* is a weighted average of all possible values, weighted by their probabilities. It is calculated by summing the probability of each outcome multiplied by the value of the random variable for that outcome: $E[X] = \sum_{\omega \in S} P(\omega)X(\omega)$.
3.  **Significance of 3.5:** The result of 3.5 demonstrates that the expectation is not necessarily a valid outcome that can actually occur in the sample space (as one cannot roll a 3.5). It represents the average value over many trials rather than the "most likely" or even a possible result.
4.  **Indicator Variables:** The expected value of an indicator random variable *I* for an event *A* is exactly equal to the probability of that event occurring, $P(A)$. This is because the values are restricted to 0 and 1, causing the 0-terms to disappear from the sum and the 1-terms to aggregate the probabilities of the event.
5.  **Opposite Picking Strategy:** By picking the opposite of another player, a participant ensures that they are not splitting the pot with that specific person, increasing their chance of being a unique winner. This strategy can reduce a competitor's expected winnings to a negative value while increasing the colluding players' share.
6.  **Chernoff’s Strategy:** Chernoff analyzed lottery data to identify numbers that were less likely to be guessed by other people, as lottery winners must split the pot. By choosing unpopular numbers (like 0s and 9s) while the probability of any number being drawn remained equal, he could achieve a positive expected return.
7.  **Natural Number Formulas:** For variables taking on natural number values, expectation can be computed as the sum of probabilities that the variable is greater than or equal to *i* ($\sum_{i=1}^{\infty} P(X \ge i)$) or the sum of probabilities that it is strictly greater than *i* ($\sum_{i=0}^{\infty} P(X > i)$).
8.  **Mean Time to Failure:** This represents the expected number of independent trials required to achieve a single "success" or "failure" event (e.g., flipping a coin until it hits heads). For a biased coin with success probability *p*, the expected number of flips is $1/p$.
9.  **Linearity of Expectation Power:** Linearity of Expectation is powerful because it allows the expectation of a sum of random variables to be calculated as the sum of their individual expectations. Crucially, this holds true even if the random variables are not independent or disjoint, requiring no special conditions to be met.
10. **Phone Return Comparison:** In both the random permutation (n! outcomes) and the Lazy Susan (n rotations), the probability of any specific individual getting their own phone remains $1/n$. Because expectation depends only on these individual probabilities and linearity (summing $1/n$ across $n$ people), the expected number of matches is 1 in both cases.

---

## Part III: Essay Questions

**Instructions:** These questions are designed to test higher-level synthesis and conceptual understanding. Answers are not provided.

1.  **The Role of Decomposition:** Explain the technique of decomposing a complex random variable into a sum of indicator random variables. Use the "number of hearts in a 3-card hand" or the "number of heads in $n$ flips" example to illustrate how this simplifies calculations.
2.  **Independence vs. Linearity:** Compare the requirements for the "Product Rule" and the "Sum Rule" in probability with the requirements for "Linearity of Expectation." Discuss why the lack of a "no-conditions" requirement makes linearity so useful in solving real-world problems.
3.  **Expectation vs. Reality:** Using the "Mean Time to Failure" example (where a 50/50 coin might take 7 flips to hit tails in practice, despite an expectation of 2), discuss the limitations of expectation as a "one-number summary." What does expectation tell us, and what does it fail to capture about a distribution?
4.  **Strategic Gaming and Collusion:** Analyze the "Gambling Game" presented in the lecture. Explain how the introduction of collusion between players 2 and 3 changes the expected value for player 1, and relate this to the concept of fairness in game design.
5.  **Applications in Engineering:** Describe the concept of "Mean Time to Failure" and its applications in technology (e.g., hard drive reliability or randomized algorithms). Explain how the geometric distribution models these scenarios.

---

## Part IV: Glossary of Key Terms

| Term | Definition |
| :--- | :--- |
| **Random Variable** | A function that maps each outcome in a sample space to a real number. |
| **Expectation (E[X])** | A weighted average of the values of a random variable, where the weights are the probabilities of each outcome. |
| **Indicator Random Variable** | A random variable that takes the value 1 if a specific event occurs and 0 otherwise. |
| **Linearity of Expectation** | The principle that the expectation of a sum of random variables is equal to the sum of their expectations, regardless of independence. |
| **Geometric Distribution** | A probability distribution representing the number of independent trials needed to get one success, often used in "mean time to failure" problems. |
| **Sample Space (S)** | The set of all possible outcomes of a random experiment. |
| **Codomain** | The set of values that a function (in this case, a random variable) could potentially take on. |
| **Range** | The actual set of values that a random variable takes on within a specific sample space. |
| **CDF (Cumulative Distribution Function)** | A function representing the probability that a random variable *X* will take a value less than or equal to *x*. |
| **PMF (Probability Mass Function)** | A function that gives the probability that a discrete random variable is exactly equal to some value. |
| **Gachapon (Gacha)** | A toy random selection service used as an analogy for the "coupon collector" problem, involving collecting distinct items from a set. |
| **Triangular Number** | A number obtained by summing integers from 1 to *n*; calculated as $n(n+1)/2$. |