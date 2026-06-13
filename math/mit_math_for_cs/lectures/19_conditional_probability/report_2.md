# Study Guide: Conditional Probability and Bayesian Inference

This study guide provides a comprehensive review of the fundamental principles of probability, the mathematical structure of conditional probability, and the practical application of Bayes' Rule, as presented in the MIT OpenCourseWare lecture.

---

## Part 1: Foundations of Probability

The lecture establishes probability by drawing parallels between reasoning about the sizes of sets and reasoning about the likelihood of outcomes.

### Core Definitions
*   **Sample Space ($S$):** The set of all possible outcomes.
*   **Event:** A subset of the sample space (a set of outcomes).
*   **Probability Function ($Pr$):** A function from the set of outcomes to the interval $[0, 1]$.
*   **Probability of an Event:** The sum of the probabilities of all outcomes contained within that event.

### Probability Rules and Set Analogs
The following table summarizes the rules that carry over from set theory into the realm of probability:

| Rule | Mathematical Expression | Context/Notes |
| :--- | :--- | :--- |
| **Sum Rule** | $Pr(A \cup B) = Pr(A) + Pr(B)$ | Applies only if $A$ and $B$ are **disjoint** events. |
| **Complement Rule** | $Pr(\text{not } A) = 1 - Pr(A)$ | Based on the fact that $A$ and $\text{not } A$ are disjoint and их union is 1. |
| **Difference Rule** | $Pr(A \setminus B) = Pr(A) - Pr(A \cap B)$ | Derived because $A$ is the disjoint union of $(A \setminus B)$ and $(A \cap B)$. |
| **Inclusion-Exclusion** | $Pr(A \cup B) = Pr(A) + Pr(B) - Pr(A \cap B)$ | Generalizes the Sum Rule for events that are not disjoint. |
| **Union Bound** | $Pr(A \cup B) \leq Pr(A) + Pr(B)$ | True because the intersection $Pr(A \cap B)$ is always non-negative. |
| **Monotonicity** | If $A \subseteq B$, then $Pr(A) \leq Pr(B)$ | The probability of a subset cannot exceed the probability of the set containing it. |

---

## Part 2: Conditional Probability

Conditional probability allows for the mathematical expression of statements such as "the probability of $A$ given that $B$ has occurred."

### Formal Definition
The conditional probability of $A$ given $B$ is denoted as $Pr(A|B)$ and is defined as:
$$Pr(A|B) = \frac{Pr(A \cap B)}{Pr(B)}$$

**Intuition:** This can be viewed as "scaling" the probability space so that event $B$ becomes the new sample space. All probabilities are divided by $Pr(B)$ so that they continue to sum to 1.

### The Product Rule
By rearranging the definition of conditional probability, we derive the **Product Rule**:
$$Pr(A \cap B) = Pr(A|B) \cdot Pr(B)$$

This can be extended to multiple events:
*   **Three events:** $Pr(A \cap B \cap C) = Pr(A | B \cap C) \cdot Pr(B|C) \cdot Pr(C)$
*   **Conditioned Product Rule:** $Pr(A \cap B | C) = Pr(A | B \cap C) \cdot Pr(B|C)$

---

## Part 3: Bayes' Rule and Statistical Inference

Bayes' Rule is a tool for "reversing" the direction of an inference, allowing us to calculate $Pr(B|A)$ if we know $Pr(A|B)$.

### The Formula
$$Pr(B|A) = \frac{Pr(A|B) \cdot Pr(B)}{Pr(A)}$$

### Statistical Terminology
*   **Prior Probability ($Pr(B)$):** What you believe the probability of $B$ is before making an observation.
*   **Likelihood ($Pr(A|B)$):** The probability of observing $A$ given that $B$ is true.
*   **Posterior Probability ($Pr(B|A)$):** The updated probability of $B$ after observing $A$.

### Comparing Probabilities (The Ratio Form)
Bayes' Rule is often used to compare the likelihood of two different events ($B$ and $C$) given the same observation ($A$):
$$\frac{Pr(B|A)}{Pr(C|A)} = \frac{Pr(A|B) \cdot Pr(B)}{Pr(A|C) \cdot Pr(C)}$$
This form is useful because the term $Pr(A)$ cancels out, making it easier to calculate when the total probability of the observation is complex or unknown.

---

## Part 4: Review Quiz

**Instructions:** Provide short-answer responses (2-3 sentences) for the following questions.

1.  How does the definition of an "event" in probability relate to the concept of a "sample space"?
2.  What is the fundamental difference between the Sum Rule and the Principle of Inclusion-Exclusion?
3.  Explain the intuitive meaning of the Union Bound.
4.  How does conditional probability "scale" a probability space?
5.  In the context of tree diagrams, what do the edges and the paths to leaves represent?
6.  Define Bayes' Rule and explain its primary utility in statistical reasoning.
7.  In the Ash vs. Gary Pokemon battle example, why did the winning probability change after the first match?
8.  Why was the probability of being sick given a positive COVID test (1/4) lower than many might intuitively expect?
9.  Describe Simpson’s Paradox using the UC Berkeley admissions case.
10. What was the "backwards probability" discussed in the Pokemon example ($Pr(B|A)$), and how does it relate to temporal causality?

---

## Part 5: Quiz Answer Key

1.  An event is defined as a subset of the sample space, which is the set of all possible outcomes. The probability of the event is calculated by summing the probabilities of all individual outcomes contained within that specific subset.
2.  The Sum Rule applies only to disjoint events, where the probability of the union is simply the sum of individual probabilities. The Principle of Inclusion-Exclusion generalizes this for non-disjoint events by subtracting the probability of their intersection to avoid double-counting.
3.  The Union Bound states that the probability of at least one of two events occurring is less than or equal to the sum of their individual probabilities. This is true because the probability of their intersection is non-negative; removing that negative term from the Inclusion-Exclusion formula can only increase the total.
4.  Conditional probability $Pr(A|B)$ scales the probability space so that event $B$ effectively becomes the entire sample space. By dividing by $Pr(B)$, the probabilities of all outcomes within $B$ are adjusted so that they sum to 1.
5.  In a tree diagram, each edge represents a conditional probability based on the path taken from the root to that vertex. A path from the root to a leaf represents a specific outcome, and its probability is found by multiplying the conditional probabilities along the edges of that path.
6.  Bayes' Rule is a mathematical formula used to update the probability of a hypothesis (the prior) based on new evidence (the likelihood). It is primarily used to reverse the direction of inference, calculating the posterior probability of a cause given an observed effect.
7.  The problem setup assumed that after the first battle, the winner gained a "morale" advantage, increasing their chance of winning subsequent matches to 2/3. This meant the matches were not independent, and the outcome of the first match directly influenced the conditional probabilities of the following games.
8.  The result was low because the "prior" probability of being sick was very low (10%) compared to a relatively high false-positive rate (30%). Because the overwhelming majority of the population was healthy, the sheer number of false positives from the healthy group outweighed the true positives from the sick group.
9.  Simpson's Paradox occurred because men and women applied to different departments with vastly different admission rates and sizes. While women had higher admission rates within every individual department, men applied in greater numbers to departments with very high general acceptance rates, skewing the aggregate data.
10. The "backwards probability" $Pr(\text{won 1st battle} | \text{won series})$ asks for the probability of a past event given a future outcome. Probability modeling ignores temporal or causal relations, treating these as purely numerical inferences where we update our belief about the past based on observations in the future.

---

## Part 6: Essay Questions

**Instructions:** Use the provided source context to develop detailed responses for the following prompts.

1.  **The Relationship Between Counting and Probability:** Discuss how the tools for reasoning about the sizes of sets (Sum Rule, Difference Rule, PIE) serve as the foundational logic for the rules of probability.
2.  **The Impact of the Prior in Bayesian Analysis:** Using the COVID testing and coin-flipping examples, analyze why the initial "prior" probability is often the most significant factor in determining the final "posterior" result.
3.  **Deconstructing Simpson's Paradox:** Explain the mathematical mechanism that allows a trend to appear in individual subgroups but disappear or reverse when those groups are combined. Use the UC Berkeley example to illustrate your points.
4.  **Probability in the Legal System:** Evaluate the "Dragon Prince" cake theft example to discuss the dangers of misusing conditional probability in a courtroom setting. Contrast "probative value" with "bias."
5.  **The Tree Method vs. Algebraic Formulas:** Compare the "tree diagram" method of computing probabilities with the direct use of the Product Rule and Bayes' Rule. In what scenarios is one approach more advantageous than the other?

---

## Part 7: Glossary of Key Terms

| Term | Definition |
| :--- | :--- |
| **Bayes' Rule** | A formula that relates $Pr(A|B)$ to $Pr(B|A)$, often used to update the probability of a hypothesis based on evidence. |
| **Conditional Probability** | The probability of an event $A$ occurring, given that another event $B$ has already occurred; denoted $Pr(A|B)$. |
| **Disjoint Events** | Events that have no outcomes in common; their intersection is an empty set with zero probability. |
| **False Negative** | A test result that incorrectly indicates a condition is absent when it is actually present. |
| **False Positive** | A test result that incorrectly indicates a condition is present when it is actually absent. |
| **Likelihood** | In statistics, the probability of an observation ($A$) given a specific hypothesis or condition ($B$). |
| **Monotonicity** | The principle that if event $A$ is a subset of event $B$, the probability of $A$ cannot be greater than the probability of $B$. |
| **Posterior Probability** | The revised or updated probability of an event after taking new evidence into account. |
| **Prior Probability** | The initial probability of an event before any new data or evidence is considered. |
| **Simpson's Paradox** | A phenomenon where a trend appears in several different groups of data but disappears or reverses when these groups are combined. |
| **Union Bound** | A rule stating that the probability of the union of events is less than or equal to the sum of their individual probabilities. |