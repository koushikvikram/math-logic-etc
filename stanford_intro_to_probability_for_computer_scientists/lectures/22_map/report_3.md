# Foundations of Parameter Estimation: From MLE to Maximum A Posteriori (MAP)

## Executive Summary

The transition from pure probability theory to machine learning is defined by a single, critical task: **parameter estimation**. In this context, machine learning is the process of choosing the magical numbers—parameters (denoted as $\theta$)—that define probabilistic models based on historical data. 

This document explores the two primary mechanisms for parameter estimation: **Maximum Likelihood Estimation (MLE)** and **Maximum A Posteriori (MAP)**. While MLE seeks to maximize the likelihood of observed data, it is prone to **overfitting**, particularly when data is scarce. To resolve this, the Bayesian approach of MAP incorporates **prior beliefs** using Bayes' Theorem. Optimization of these estimates is primarily achieved through **Gradient Ascent**, a robust, general-purpose algorithm that iteratively "climbs" the likelihood function to find optimal parameter values.

---

## 1. The Framework of Machine Learning
Machine learning and modern artificial intelligence can be distilled into a straightforward three-step process:
1.  **Modeling:** Identifying a real-world problem and defining a probabilistic model (e.g., a Bayesian Network or a single random variable) characterized by parameters ($\theta$).
2.  **Training (Parameter Estimation):** Choosing the values for $\theta$ based on historical data.
3.  **Application:** Using the model with defined numbers to solve the initial problem.

Parameter estimation is the "heart and soul" of this process. It involves moving from having a defined model (where parameters were previously provided) to estimating those parameters based on observed data points ($x_i$).

---

## 2. Maximum Likelihood Estimation (MLE)

### 2.1 The Intuition
MLE is based on a simple premise: for different settings of parameters, the observed data points will look more or less likely. The goal of MLE is to choose the parameters that make the observed data as likely as possible.

### 2.2 The Log-Likelihood Trick
Because data points are assumed to be **Independent and Identically Distributed (IID)**, the likelihood of a dataset is the product of the probabilities (PDF or PMF) of each individual data point. 
*   **The Problem:** Maximizing a massive product is computationally difficult.
*   **The Solution:** Logarithms are monotonic. The value of $\theta$ that maximizes the likelihood also maximizes the **log-likelihood**.
*   **The Benefit:** Logs turn products into sums, making derivatives significantly easier to calculate:
    $$\text{LL}(\theta) = \sum_{i=1}^{n} \log P(x_i | \theta)$$

### 2.3 Optimization via Gradient Ascent
While setting a derivative to zero and solving for $\theta$ works for simple cases, it is often a "hack" that fails for complex models. The standard optimization method in Stanford CS and broader machine learning is **Gradient Ascent** (or Hill Climbing).

**The Gradient Ascent Algorithm:**
1.  **Initialize:** Start with a random value for $\theta$.
2.  **Evaluate:** Calculate the gradient (derivative) of the log-likelihood at the current $\theta$.
3.  **Step:** Update $\theta$ by moving in the direction of the gradient.
    $$\theta_{new} = \theta_{old} + \eta \cdot \frac{d}{d\theta} \text{LL}(\theta_{old})$$
    *(Where $\eta$ is a constant step size).*
4.  **Iterate:** Repeat until the gradient is zero, indicating the "top of the mountain."

**Key Optimization Considerations:**
*   **Step Size:** If the step size is too large, the algorithm may overshoot the peak and fail to converge. If it is too small, it takes too long to reach the peak.
*   **Local Maxima:** In non-convex functions, the algorithm might get stuck on a "local" peak rather than the highest peak. A common "hack" to fix this is to run the algorithm multiple times from different random starting positions.
*   **Convexity:** Most functions used in CS109 are convex, meaning any local optimum found is also the global optimum.

---

## 3. The Problem of Overfitting
MLE suffers from a significant flaw: it describes the seen data too well and fails to account for data not yet observed. This is known as **overfitting**.

**The Uniform Distribution Example:**
If an MLE is used to fit a uniform distribution to a small set of data points (e.g., seven points between 0.15 and 0.85), it will set the minimum and maximum parameters exactly to the observed smallest and largest values. It fails to imagine that the true range could be 0 to 1 because it only prioritizes making the seven observed points "likely."

---

## 4. Maximum A Posteriori (MAP)

### 4.1 The Bayesian Philosophy
MAP provides a more elegant alternative to MLE by incorporating **subjective probabilities** or **prior beliefs**. While MLE asks, "What parameters make this data likely?", MAP asks, "What is the most likely parameter given the data we saw?"

### 4.2 The Envelope Paradox
The lecture uses the "Two Envelope Paradox" to demonstrate the necessity of priors. Even when mathematical expectation suggests switching envelopes is always beneficial, human intuition—driven by a **prior belief** about how much money a professor would realistically put in an envelope—correctly identifies that some outcomes are more likely than others. This "subjective belief" prevents us from making decisions based on limited, misleading data.

### 4.3 Mathematical Derivation
MAP uses **Bayes' Theorem** to flip the conditional probability:
$$P(\theta | \text{Data}) = \frac{P(\text{Data} | \theta) P(\theta)}{P(\text{Data})}$$

Since $P(\text{Data})$ is a constant (the normalization constant), it does not affect the optimization ($argmax$). Thus, the MAP objective is to maximize:
$$\text{Log-Likelihood} + \log P(\theta)$$
*(Where $P(\theta)$ is the **Prior**).*

### 4.4 Comparison of Objectives

| Feature | Maximum Likelihood Estimation (MLE) | Maximum A Posteriori (MAP) |
| :--- | :--- | :--- |
| **Philosophy** | Maximize $P(\text{Data} | \theta)$ | Maximize $P(\theta | \text{Data})$ |
| **Prior Belief** | Not included | Included as $P(\theta)$ |
| **Equation** | $argmax \sum \log P(x_i | \theta)$ | $argmax [\sum \log P(x_i | \theta) + \log P(\theta)]$ |
| **Risk** | High risk of overfitting with small data | Reduced risk; pulls estimates toward the prior |

---

## 5. Conjugate Priors
To make MAP mathematically tractable, practitioners use **conjugate priors**, where the prior distribution matches the functional form of the posterior distribution.

| Model / Parameter | Conjugate Prior Distribution |
| :--- | :--- |
| **Bernoulli / Binomial ($p$)** | **Beta** (imaginary successes/failures) |
| **Poisson / Exponential ($\lambda$)** | **Gamma** (imaginary events/time periods) |
| **Multinomial ($p_i$)** | **Dirichlet** (extension of Beta for multiple outcomes) |
| **Normal ($\mu$)** | **Normal** |

### 5.1 The "Gravity Well" Effect
In the MAP derivative, the prior term acts as a "gravity well." For example, if a prior belief for a Pareto distribution parameter ($\alpha$) is a Normal distribution centered at 2.0, the gradient will pull the estimate toward 2.0. This prevents the parameter from wandering too far based on a few extreme data points.

## 6. Conclusion
The transition from pure probability to machine learning is anchored in these two estimation strategies. While MLE is a general "bread and butter" algorithm, MAP offers a sophisticated way to handle uncertainty and small datasets by integrating human knowledge through priors. Both eventually rely on **Gradient Ascent** to function at scale, forming the basis for advanced topics like Deep Learning and Neural Networks.