# Ethical Frameworks and Fairness in Machine Learning

## Executive Summary

The rapid integration of machine learning (ML) into societal infrastructure—ranging from healthcare and education to criminal justice and finance—necessitates a sophisticated understanding of algorithmic fairness. This document synthesizes key insights from the Stanford CS109 lecture on the probability behind ethics and ML. The central thesis is that while ML offers transformative potential, it is prone to systemic biases that result in "Quality of Service" and "Distributive" harms. 

Key takeaways include:
*   **The Limitation of "Unawareness":** Simply removing sensitive features (e.g., race or gender) is ineffective because algorithms can reconstruct demographics through proxies.
*   **Formal Definitions of Fairness:** Fairness must be mathematically defined, typically through "Parity" (equal outcomes) or "Calibration" (equal accuracy) across demographics.
*   **Systemic Blind Spots:** Technological "progress" often ignores environmental impacts (e.g., Bitcoin’s carbon footprint) and social consequences of scaling (e.g., the role of Facebook’s "Free Basics" in the Myanmar genocide).
*   **Mitigation Strategies:** Transparency via "Model Cards," balanced training datasets, and adversarial training to remove proxies offer pathways to more equitable AI.

---

## The Taxonomy of Algorithmic Harm

Not all algorithmic failures carry equal weight. The impact of a broken neural network can be categorized by the severity of its societal consequences.

### Types of Harm

| Category | Description | Examples |
| :--- | :--- | :--- |
| **Quality of Service (QoS)** | The model works more effectively for certain demographics than others. | Facial recognition systems or camera autofocus failing to detect darker skin tones. |
| **Distributive Harm** | Algorithms unfairly restrict access to essential resources, opportunities, or information. | Biased decisions in medical school admissions, loan approvals, or job hiring. |
| **Existential Harm** | Theoretical risks associated with the emergence of highly intelligent AI. | Long-term speculative risks regarding AI agency. |

---

## Mechanisms of Algorithmic Bias

Bias in ML is rarely the result of intentional malice but rather a consequence of data structures and optimization techniques.

### 1. Data Representation and "Garbage In, Garbage Out"
Algorithms learn to recreate the biases present in their training data. If historical human decisions were biased, an algorithm trained on that history will internalize those prejudices. For example, the St. George’s Hospital medical school admission algorithm reached 95% accuracy in mimicking human panels, which unfortunately included docking points from female and non-Caucasian applicants.

### 2. Statistical Limitations (MLE and the Majority)
Most ML models use Maximum Likelihood Estimation (MLE), which treats every data point equally. In a dataset where one demographic is the majority, the model will prioritize the trends of that majority to maximize overall likelihood, effectively ignoring the signal from minority groups.

### 3. The "Faces in the Wild" Problem
A significant source of QoS harm is the lack of diversity in training sets. Research into facial recognition revealed that many widely used models were trained on datasets that were approximately 84% white and 78% male, leading to poor performance on out-of-distribution demographics.

---

## Formal Definitions of Fairness

To address bias, developers must choose a mathematical definition of fairness. These definitions often exist in tension with one another, and satisfying all simultaneously is frequently impossible.

### Procedural vs. Distributive Fairness
*   **Procedural Fairness:** Focuses on the process, ensuring the algorithm does not rely on "unfair" features.
*   **Distributive Fairness:** Focuses on the outcome, ensuring the decisions made are equitable across groups.

### Core Fairness Metrics

| Metric | Definition | Philosophical Basis |
| :--- | :--- | :--- |
| **Fairness through Unawareness** | Excluding protected demographics (race, age, sex) from the input features. | Procedural: "The best way to stop discrimination is to stop discriminating." |
| **Parity** | The probability of a positive guess ($G=1$) is equal across all demographics. | Distributive: Outcomes should be balanced regardless of group base rates. |
| **Calibration** | The probability of the guess being correct ($G=T$) is equal across all demographics. | Outcome-based: The model should be equally accurate for all groups. |

### The Proxy Problem
Fairness through unawareness is often insufficient. Even when demographics are removed, algorithms can identify **proxies**—features that correlate strongly with protected classes. In Facebook’s housing advertisement platform, even after removing demographics like gender and age, the algorithm was able to predict and target users with nearly the same demographic proportions by analyzing interests like "shaving products" or "movie selections."

---

## Case Studies in Algorithmic Failure

### St. George’s Hospital (Distributive Harm)
In 1982, a Dean at St. George’s medical school implemented a classifier to automate the first pass of admissions. While highly accurate at mimicking the previous panel's decisions, it was eventually found to be docking points based on name and place of birth, systematically disadvantaging female and non-Caucasian applicants.

### COMPAS (Recidivism Prediction)
The COMPAS algorithm, used in California and Florida to predict whether a defendant would re-offend, demonstrated significant "gaps" in both parity and calibration. It penalized Black defendants more heavily than white defendants, impacting bail and sentencing decisions. This case highlights the danger of "blackbox" algorithms that defendants cannot realistically challenge.

### Facebook "Free Basics" and Myanmar
This case illustrates the "blind spot" of scaling technology without social context. By providing free internet access exclusively through Facebook in Myanmar, the platform became the primary information source. A lack of Burmese-speaking moderators (only two for the entire country) allowed a military-led misinformation campaign against the Rohingya minority to flourish, which the UN concluded was a critical component in the ensuing genocide.

---

## Mitigation and Professional Responsibility

The document identifies several strategies for developing responsible AI and reducing algorithmic harm:

*   **Balanced Training Data:** Ensuring datasets represent the diversity of the population the model will serve.
*   **Model Cards:** Standardized documentation for models that details intended use, training data composition, evaluation factors, and quantitative fairness analysis.
*   **Adversarial De-biasing:** A two-step neural network approach where a second model attempts to predict demographics from the first model’s output. If the second model fails, it indicates that the first model has successfully removed demographic proxies.
*   **Interpretable Models:** Preferring Bayesian Networks or other "transparent" models over blackboxes when making high-stakes decisions, allowing individuals to understand and contest the reasoning behind a prediction.
*   **Addressing Blind Spots:** Recognizing that decentralized systems (like Bitcoin) can create "tragedies of the commons" (such as high carbon emissions) that are difficult to change due to their very nature.

## Conclusion: The Ethical Mandate
The analysis concludes that while most computer scientists do not intend to cause harm, the "move fast and break things" mentality is dangerous at scale. Ethics in machine learning is not merely a technical challenge of adjusting weights but a requirement for humility, a recognition of "unknown unknowns," and a commitment to community-level responsibility. Fairness requires moving beyond unawareness toward a proactive, mathematically grounded, and socially conscious awareness.