# Briefing Document: Probabilistic Inference and the Stanford Acuity Test

## Executive Summary

This document synthesizes key concepts from the Stanford CS109 lecture on probabilistic inference, focusing on the application of Bayes’ Theorem to real-world scenarios. The core objective of the material is to demonstrate how beliefs regarding unobserved random variables (hidden variables) are updated when new data is observed. 

The analysis covers the transition from discrete events to complex models involving both continuous and discrete random variables. A primary case study—the Stanford Acuity Test—illustrates how discretization and Item Response Theory (IRT) can be utilized to create adaptive, highly accurate diagnostic tools. Key takeaways include the necessity of the normalization constant in probability mass functions (PMFs), the advantage of representing beliefs as entire distributions rather than single numbers, and the practical implementation of these models using computational structures like dictionaries and sigmoid functions.

---

## Foundations of Probabilistic Inference

Inference is defined as the process of determining what happens to random variables when information about other random variables is observed. This process is fundamentally governed by Bayes’ Theorem.

### The Role of Bayes’ Theorem
Bayes’ Theorem provides a mathematical framework for updating a "prior" belief (the belief before evidence is seen) into a "posterior" belief (the updated belief after evidence). 

*   **Prior Belief ($P(A)$):** An initial lookup of belief before evidence is observed, often derived from historical or empirical data.
*   **Likelihood ($P(E|A)$):** The probability of the observed evidence given a specific state of the hidden variable.
*   **Normalization Constant:** Often referred to as the "denominator," this term ensures that the resulting posterior probability distribution sums to exactly one.

### Discrete vs. Continuous Random Variables
The application of Bayes’ Theorem varies depending on whether the variables involved are discrete or continuous:
*   **Discrete Variables:** Inference uses the Probability Mass Function (PMF).
*   **Continuous Variables:** Inference uses the Probability Density Function (PDF).
*   **Mixed Models:** When one variable is discrete (e.g., gender, hearing ability) and the other is continuous (e.g., weight, gaze change), the model uses the PDF for the continuous component and the PMF for the discrete component.

---

## Case Studies in Probabilistic Modeling

### 1. The Baby Due Date Problem
This model examines the probability distribution of a baby's birth date relative to a due date.
*   **Evidence Filtering:** If a child has not been born by a certain date, the probability for all prior dates must be updated to zero.
*   **Normalization:** The remaining probabilities must be scaled (normalized) so that the area under the curve of the remaining possible dates equals one.
*   **Induction of Labor:** The distribution often features a vertical bar at the end, representing medical induction—a "sum of all probabilities" for that date or later.

### 2. The Baby Hearing Test
A Bernoulli random variable ($H$) represents whether a baby can hear ($H=1$) or cannot ($H=0$).
*   **Observation:** A continuous variable ($X$) represents the "gaze move" or head rotation after a sound is played.
*   **Inference:** By comparing the PDF of a hearing baby's gaze versus a non-hearing baby's gaze at a specific observed value (e.g., 14 degrees), the model updates the probability of $H=1$.

---

## The Stanford Acuity (Eye) Test

The Stanford Acuity Test represents a significant advancement over traditional eye exams by applying sequential Bayesian inference to determine a patient's "ability" to see ($A$).

### Item Response Theory (IRT)
The test is powered by Item Response Theory, which models the interaction between a person’s ability and a task’s difficulty.
*   **Ability ($A$):** A hidden variable representing visual acuity.
*   **Difficulty ($D$):** A function of the letter's font size (smaller letters have higher difficulty).
*   **The Sigmoid Function:** A "squashing function" used to map the difference between ability and difficulty ($A - D$) to a probability between 0 and 1.
*   **Guessing and Slipping:** The model accounts for the probability that a patient might guess a letter correctly by chance or "slip" (get a letter wrong despite having the ability to see it).

### Discretization of Continuous Variables
While visual acuity is naturally continuous, the Stanford model discretizes it into approximately 100 to 200 "bins" (e.g., 0.01, 0.02, etc.). This allows the computer to treat the continuous variable as a discrete distribution, making it easier to represent as a dictionary of keys (ability levels) and values (probabilities).

### Sequential Updating
The test is adaptive. Each response from the patient serves as evidence to update the belief:
1.  **Prior:** Historical data on human vision.
2.  **Observation 1:** Patient sees a letter of size $X$ and is correct/incorrect.
3.  **Update:** Bayes' Theorem calculates the first posterior.
4.  **Iteration:** The first posterior becomes the **new prior** for the second observation. This process continues until the variance in the distribution is sufficiently low (typically after 20 questions).

| Feature | Traditional Eye Test | Stanford CS109 Eye Test |
| :--- | :--- | :--- |
| **Logic** | Static rows of letters | Adaptive, Bayesian inference |
| **Stochasticity** | Ignores guessing/mistakes | Accounts for "guessing" and "slipping" |
| **Error Rate** | High relative error | Significantly reduced error |
| **Flexibility** | Fixed font sizes | Can ask questions at any font size |

---

## Computational Implementation and Logic

### Representing Random Variables
In a computational context, a random variable is best represented not as a single number (like an average or mode), but as a **distribution**.
*   **Dictionary Representation:** Storing ability levels as keys and their associated probabilities as values.
*   **Preserving Uncertainty:** A distribution keeps track of all possibilities and the model's inherent uncertainty. "If you reduce it to a number, you've just lost so much."

### The Normalization Algorithm
When updating beliefs in a loop over many possible assignments of a variable, the numerator ($Prior \times Likelihood$) is calculated first. Because the denominator (the normalization constant) is the same for every possible assignment, the most efficient computational method is to:
1.  Calculate all unnormalized posteriors.
2.  Sum the entire dictionary of values.
3.  Divide every value by that sum to ensure the total probability equals 1.0.

### Optimistic Sampling
To choose the next font size in an adaptive test, the algorithm employs **optimistic sampling**. Instead of picking the mean of the current belief, it takes a sample from the belief distribution and presents a font size that is "perfect" for that specific sample. This balances the need to explore the patient's limits with the need to exploit current knowledge.

---

## Important Quotes

> "A random variable... keeps track of all the possibilities that it could take on. It keeps track of my own uncertainty... If you reduce it to a number, you've just lost so much."

> "Posterior becomes our new prior... You saw something, this became your belief, and then in your second observation, that's now your belief and you get a new piece of evidence."

> "It's mind-blowing beautiful wonderful thing that you should use in your life... that this Epsilon trick is allowing this probability density to convert to a probability and back."