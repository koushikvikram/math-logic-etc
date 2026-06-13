# Fairness and Ethics in Machine Learning: A Comprehensive Study Guide

This study guide provides a detailed synthesis of the principles, definitions, and case studies surrounding the intersection of probability, ethics, and machine learning. It explores the societal impact of algorithmic decision-making and the technical frameworks used to evaluate and mitigate bias.

---

## I. Ethical Foundations and the Role of Machine Learning

The integration of machine learning (ML) into society necessitates a sophisticated lens for evaluating its impact. While ML offers significant benefits—such as improved healthcare (e.g., cochlear implants), intelligent electrical grids, and increased access to education—it also introduces significant ethical risks. 

### Philosophical Perspectives
Ethics in technology can be framed through various philosophical constructs:
*   **The Mencian Philosophy of Ethics:** This perspective posits that humans possess an innate "sprout of goodness" or benevolence from birth. This internal goodness must be cultivated and "watered" to grow. An example is the "baby in the well" allegory, suggesting humans have a reflexive, predictable urge to help those in danger.
*   **Responsibility of Power:** The rapid advancement of "smarter" algorithms requires a proactive approach to fairness, drawing from both probability and philosophy to ensure technology serves human goodness rather than exacerbating biases.

---

## II. Taxonomy of Algorithmic Harms

Not all algorithmic failures are equal. Philosophers and computer scientists categorize harms based on their impact on individuals and society:

| Harm Type | Definition | Example from Context |
| :--- | :--- | :--- |
| **Quality of Service Harm** | Occurs when a system works better for certain demographics than others, often due to technical limitations. | Autofocus cameras failing to work correctly for non-white demographics. |
| **Distributive Harm** | Occurs when an algorithm unfairly allocates essential opportunities, resources, or information. | Medical school admissions or loan approvals being unfairly denied based on demographic factors. |
| **Existential Harm** | Potential long-term risks associated with AI achieving high levels of intelligence. | Speculative concerns regarding the future of super-intelligent AI. |

---

## III. Technical Limitations and the "Black Box" Problem

### Linear Separators
Basic ML algorithms like **Logistic Regression** and **Naive Bayes** function as linear separators. They attempt to draw a straight line (or a hyperplane in higher dimensions) to classify data. If data is not linearly separable, these models cannot achieve perfect accuracy.

### Neural Networks
Modern AI relies on neural networks, which are essentially "stacks" of logistic regressions. 
*   **Sophistication:** These models can learn complex, non-linear boundaries.
*   **Biological Mimicry:** In tasks like facial recognition, neural networks develop layers that function similarly to the human brain (e.g., edge detectors in the first layers, part detectors in the middle, and "ghost faces" in final layers).
*   **The Black Box:** Despite their power, neural networks are "black boxes." Their decision-making processes are difficult to interpret, making it nearly impossible for a human (such as a defendant in a court case) to argue against a specific algorithmic output.

---

## IV. Defining and Measuring Fairness

The study of fairness is divided into two primary philosophical camps: **Procedural Fairness** (the fairness of the process) and **Distributive Fairness** (the fairness of the outcome).

### 1. Fairness Through Unawareness (Procedural)
The goal is to prevent discrimination by excluding "protected demographics" (e.g., race, age, sex) from the decision-making process.
*   **The Proxy Problem:** Even when sensitive features are removed, algorithms can reconstruct them using "proxies"—non-protected features that correlate strongly with protected ones (e.g., zip codes, movie interests, or purchase history).
*   **Facebook Case Study:** When Facebook attempted "fairness through unawareness" for housing ads by removing demographic filters, its "lookalike" algorithm still successfully targeted specific genders and ages by aggregating thousands of other data points.

### 2. Fairness Through Awareness (Outcome-Based)
This approach acknowledges demographics to ensure equitable outcomes. Key metrics include:
*   **Parity:** The probability of a specific prediction (e.g., "accepting an applicant") is the same across all demographic groups.
*   **Calibration:** The accuracy of the prediction is the same across all demographic groups. An algorithm is calibrated if knowing a person's demographic does not change the likelihood of the prediction being correct.
*   **Disparate Impact:** A legal standard that allows for slight variations in calibration (typically within a 20% margin, or a 0.8 ratio) before a decision is considered legally biased.

---

## V. Case Studies in Algorithmic Bias

*   **St. George’s Hospital (Distributive Harm):** In the 1980s, a medical school used an algorithm trained on historical data to screen applicants. The algorithm achieved 90-95% accuracy in mimicking human decisions but was found to be docking points for female and non-Caucasian applicants, recreating the human biases present in the training data ("Garbage In, Garbage Out").
*   **The Compass Algorithm (Recidivism):** Used in California and Florida to predict the likelihood of an inmate committing another crime. The algorithm showed significant gaps in both parity and calibration between Black and white inmates. Furthermore, its black-box nature prevented defendants from challenging the logic behind their sentencing or bail decisions.
*   **Polaroid in South Africa:** During Apartheid, Polaroid engineers discovered that specialized flash technology—designed to better capture black skin tones—was being used by the government to create "passbooks" for state-sponsored discrimination. This highlights the ethical responsibility of engineers to monitor how their tools are used.
*   **Free Basics in Myanmar:** Facebook provided free internet access through its own platform. Due to a lack of local language moderators (only two for the entire country) and a "move fast and break things" mentality, the platform became a tool for a state-led misinformation campaign that contributed to a genocide against the Rohingya minority.

---

## VI. Strategies for Mitigation

To address these issues, the context suggests several "Pro Tips" for responsible AI development:
1.  **Balanced Training Data:** Ensuring datasets (like "Faces in the Wild") represent all demographics equally to avoid quality of service disparities.
2.  **Model Cards:** Standardized documentation for black-box models that outlines intended use, training data, evaluation factors, and quantitative fairness analysis.
3.  **Training Out Bias:** Using multi-step neural networks where one model makes a prediction while a second model attempts to "guess" the demographic. If the second model fails, it suggests the first model has successfully removed demographic proxies.
4.  **Interpretable Models:** Preferring **Bayesian Networks** over deep learning for high-stakes decisions, as their conditional probabilities are easier for humans to audit and challenge.

---

## VII. Short-Answer Quiz

**Instructions:** Answer the following questions in 2-3 sentences based on the source text.

1.  **What is the "Garbage In, Garbage Out" principle in the context of the St. George Hospital case?**
2.  **Explain the difference between Quality of Service harm and Distributive harm.**
3.  **Why is "Fairness Through Unawareness" often ineffective in complex systems like Facebook’s ad platform?**
4.  **According to the lecture, what is a "Model Card" and what is its purpose?**
5.  **How do the layers of a neural network trained on faces mimic the human brain?**
6.  **What was the specific ethical failure identified in the Polaroid South Africa case?**
7.  **Define "Calibration" as a measure of fairness.**
8.  **What is a "proxy" in machine learning, and why is it a red flag?**
9.  **What were the primary factors that led the UN to conclude Facebook was a "critical component" in the Myanmar genocide?**
10. **Why are Bayesian Networks sometimes preferred over Black Box neural networks for legal or medical decisions?**

---

## VIII. Quiz Answer Key

1.  The principle suggests that if training data contains human biases, the resulting algorithm will replicate those biases. In the St. George case, the algorithm learned to dock points from women and minorities because the historical human-led admissions process it was trained on had done the same.
2.  Quality of Service harm occurs when a technology functions less effectively for certain groups, such as autofocus failing on darker skin. Distributive harm is more severe, occurring when an algorithm unfairly denies people essential resources or opportunities, such as education, jobs, or loans.
3.  It is ineffective because algorithms can use "proxies" to reconstruct protected demographic information. Even if race or gender is hidden, the system can aggregate thousands of other features—like interests or zip codes—to predict those demographics with high accuracy.
4.  A Model Card is a transparent documentation tool attached to a black-box algorithm. It details the model's intended use, the nature of the training data, and quantitative analyses of the model’s fairness and accuracy.
5.  Neural networks develop a hierarchy of features where the first layers act as edge detectors and the middle layers detect parts of a face. This mirrors the human brain's V1 and V2 cortices, which also process visual information starting with edges and moving to complex part detection.
6.  The ethical failure was that technology intended for technical improvement (better flash for dark skin) was being used by an oppressive government to facilitate a system of racial discrimination. Change only occurred when an internal engineer recognized the harm and brought it to light.
7.  Calibration means that the accuracy of an algorithm’s prediction is independent of a person's demographic. An algorithm is calibrated if the probability of the guess being correct is the same for all groups, regardless of the underlying "base rate" of the demographic.
8.  A proxy is a seemingly neutral feature, such as a zip code or purchase history, that provides a strong signal about a protected demographic like race or income. It is a red flag because it allows an algorithm to discriminate even when sensitive features are officially excluded.
9.  The primary factors were the "Free Basics" program making Facebook synonymous with the internet and a severe lack of Burmese-speaking moderators. This allowed a military-led misinformation campaign to spread unchecked, fueling ethnic violence and displacement.
10. Bayesian Networks are transparent and show the conditional probabilities between variables, allowing humans to audit the logic. In contrast, neural networks are "black boxes" whose weights are too complex for a defendant or patient to interpret or argue against.

---

## IX. Essay Questions

1.  **The Evolution of the Black Box:** Compare the limitations of linear separators (Logistic Regression) with the power of Neural Networks. Discuss why the transition to more sophisticated models has made the ethical "blind spot" of interpretability more dangerous.
2.  **Procedural vs. Distributive Fairness:** Contrast the philosophy of "Fairness Through Unawareness" with outcome-based definitions like "Parity" and "Calibration." Argue which approach is more suitable for high-stakes decisions like recidivism prediction.
3.  **The Engineer's Responsibility:** Using the Polaroid and Facebook Myanmar case studies, discuss the role of the individual computer scientist in identifying and mitigating "unknown unknowns" and systemic harms.
4.  **The Myth of Neutrality:** Explore the concept of "Garbage In, Garbage Out." How does the source context challenge the idea that algorithms are inherently more objective than human decision-makers?
5.  **Uncertainty and Global Ethics:** The lecturer discusses climate change and Bitcoin as "blind spots" in computer science. Analyze how the ability to "reason under uncertainty" (a core tenet of CS109) can be applied to large-scale ethical challenges that transcend individual algorithms.

---

## X. Glossary of Key Terms

*   **Bayesian Network:** A probabilistic model that represents variables and their conditional dependencies via a directed acyclic graph; noted for being more interpretable than neural networks.
*   **Black Box Model:** An algorithm (like a deep neural network) where the internal logic and decision-making process are not easily understood by humans.
*   **Calibration:** A fairness metric where the accuracy of a model's prediction is consistent across different demographic groups.
*   **Compass:** A controversial black-box algorithm used by courts to predict recidivism (the likelihood of a criminal re-offending).
*   **Disparate Impact:** A legal standard used to determine if a process has a disproportionately adverse effect on a protected group, even if the process appears neutral.
*   **Distributive Fairness:** A philosophical school of thought that evaluates fairness based on the equality of the outcomes or results.
*   **Fairness Through Unawareness:** An approach to procedural fairness that involves removing protected demographic features from a dataset to prevent discrimination.
*   **Linear Separator:** A classification boundary (like in Logistic Regression) that separates data points using a straight line or hyperplane.
*   **Lookalike Algorithm:** A system used in social media advertising to find new users who share characteristics with a specified "seed" group.
*   **Model Card:** A document used to increase transparency by detailing the development, evaluation, and limitations of a machine learning model.
*   **Parity:** A fairness metric requiring that the probability of a specific outcome (e.g., being predicted as "1") is equal for all demographic groups.
*   **Procedural Fairness:** A philosophical school of thought focusing on whether the process used to make a decision is fair and unbiased.
*   **Protected Demographic:** A group of people protected from discrimination by law (e.g., based on race, religion, age, or sexual orientation).
*   **Proxy:** A piece of data that can be used to indirectly infer a protected demographic trait (e.g., using a "shaving product" preference to infer gender).
*   **Recidivism:** The tendency of a convicted criminal to re-offend.