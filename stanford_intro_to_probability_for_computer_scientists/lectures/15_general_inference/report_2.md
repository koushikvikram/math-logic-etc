# Probabilistic Inference and Rejection Sampling: A Synthesis of Stanford CS109

## Executive Summary
This briefing document synthesizes the core concepts of general inference and probabilistic modeling as presented in Stanford’s CS109. The central challenge in modern probability is representing complex real-world systems with numerous random variables. While joint probability tables provide a complete representation, they suffer from exponential growth, making them computationally unfeasible for large-scale problems.

**Bayesian Networks (BasNets)** provide a solution by offering a compressed, $O(n)$ representation of the joint distribution based on causal relationships. However, using these networks for **inference**—the task of calculating conditional probabilities—remains computationally expensive when using traditional mathematical marginalization.

To address this, the **Rejection Sampling** algorithm is introduced as a powerful, randomized alternative. This method relies on the generative nature of Bayesian Networks to create large-scale simulated datasets, which are then filtered to provide empirical estimates of conditional probabilities. While highly versatile, the algorithm faces challenges with rare events and continuous variables, necessitating advanced techniques such as discretization or Markov Chain Monte Carlo (MCMC) methods.

---

## I. The Architecture of Bayesian Networks
Bayesian Networks represent a paradigm shift from exhaustive joint tables to efficient, directed acyclic graphs.

### The Complexity Problem
*   **Joint Probability Tables:** Attempting to represent every possible combination of $n$ random variables requires exponential space and computation ($O(2^n)$ or similar). This is impractical for systems like WebMD, which may track thousands of symptoms and diseases.
*   **The BasNet Solution:** By representing only the causal impacts between variables, a Bayesian Network can reduce the complexity to $O(n)$, provided the graph remains sparse (fewer arrows/dependencies).

### Structural Definition
*   **Nodes and Arrows:** Each random variable is a node. Directed arrows represent causal impact (e.g., "Flu" $\rightarrow$ "Fever").
*   **Joint Distribution as a Product:** The joint distribution of the entire network is defined as the product of the probability of every node given its parents: 
    *   $P(X_1, X_2, ..., X_n) = \prod P(X_i | \text{Parents}(X_i))$
*   **Generative Property:** A primary semantic advantage of BasNets is that they are **generative**. They tell a "story" of how the world is created from top (priors) to bottom (outcomes).

---

## II. Quantifying Relationships: Covariance and Correlation
Before constructing a Bayesian Network, one must understand how variables relate. This is often achieved through data-driven statistics.

### Covariance
Covariance measures the extent to which two random variables deviate from their means in tandem.
*   **Mathematical Definition:** $Cov(X, Y) = E[XY] - E[X]E[Y]$.
*   **Interpretation:** A positive value suggests variables move in the same direction; a negative value suggests opposite directions.
*   **Critical Limitation:** A covariance of zero does not prove independence. It may indicate a non-linear relationship where the deviations "wash out" mathematically, despite a deterministic link between variables.

### Correlation
Because covariance is not bounded (it can be any number), it is difficult to interpret. Correlation provides a normalized alternative.
*   **Scaling:** Using the Cauchy-Schwarz inequality, covariance is divided by the product of the variables' standard deviations, resulting in a value between -1 and 1.
*   **Causality Warning:** Correlation is a signal of relationship but not a proof of causality. High correlations can occur by chance or through "data fishing"—the process of mining massive datasets until two unrelated variables happen to align (e.g., cheese consumption and bedsheet entanglements).

---

## III. The Inference Task: From Math to Computation
In the context of Bayesian Networks, **inference** is defined as performing conditional probability calculations across many variables.

### The Mathematical Approach: Marginalization
To find a conditional probability like $P(\text{Flu} | \text{Undergrad}, \text{Tired})$, one must use the definition of conditional probability:
$$P(A|B) = \frac{P(A, B)}{P(B)}$$
*   To find the numerator and denominator from a joint distribution, one must **marginalize** (sum out) all unobserved variables (e.g., "Fever").
*   **Computational Barrier:** In a system with thousands of variables, marginalizing out every unobserved variable requires looping over an astronomical number of assignments, making it "really, really expensive."

---

## IV. Rejection Sampling: A Randomized Algorithm
Rejection sampling bypasses complex algebra by using simulation and counting. It relies on the premise that "the ability to generate is an important precursor to the ability to infer."

### The Three-Step Process
1.  **Sampling:** Generate a massive dataset (e.g., 100,000+ "fake" instances) by sampling from the Bayesian Network. This is done by following the generative order (parents first, then children).
2.  **Rejection (Conditioning):** Filter the dataset. Throw away every sample that is not consistent with the observed evidence (the "condition").
3.  **Counting:** In the remaining subset of "consistent" samples, calculate the ratio of the target variable. For example, if 30,000 samples were kept and 10,000 had the "Flu," the inferred probability is approximately $1/3$.

### Addressing Continuous Variables
Traditional rejection sampling fails with continuous variables (like a temperature of 101.372...) because the probability of an exact match is zero, leading to a division-by-zero error (rejecting all samples).
*   **Discretization/Rounding:** By rounding continuous values to a fixed decimal point, the algorithm can find "matches" and perform counting.
*   **Sample Density:** The rarer the event being conditioned upon, the more samples are required to maintain accuracy.

---

## V. Advanced Applications and Perspectives
The document highlights that while Bayesian Networks are an "art and craft," they are highly effective across diverse fields.

*   **Beyond Rejection Sampling:** For extremely rare conditions where rejection sampling is inefficient, practitioners use **Markov Chain Monte Carlo (MCMC)**. MCMC generates only samples that already match the query, avoiding the need to reject data.
*   **GradeSlam Research:** This approach has been applied to automated education. By modeling a student's misconceptions as a Bayesian Network, researchers can "sample" fake student code. This allows for inference: given a piece of actual student code, what is the most likely misconception the student has?
*   **Expert Insight:** "All models are wrong, but some models are useful." The utility of a Bayesian Network is not in its absolute perfection, but in its ability to approximate complex causal realities in a computable way.