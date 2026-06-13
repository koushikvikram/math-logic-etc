# Foundations of Probability and the Tree Method

Probability is a foundational discipline across all sciences, particularly in computer science. It plays a critical role in randomized algorithms (such as the Miller-Rabin algorithm), game theory, information theory, signal processing, cryptography, machine learning, and forensics. Despite its ubiquity, probability is frequently misunderstood, leading to faulty scientific papers and unreliable "common sense" conclusions. To address these complexities, a rigorous, step-by-step mathematical approach is required to move beyond intuition and toward provable results.

## The Monty Hall Problem and the Fallibility of Intuition

The Monty Hall problem serves as a primary example of how human intuition often fails in probability. Named after the host of the game show *Let’s Make a Deal*, the problem was popularized in 1990 by Marilyn vos Savant.

### The Problem Setup
A contestant is presented with three doors. Behind one door is a car, and behind the other two are goats (often referred to as "zonks"). The contestant picks a door. The host, who knows where the car is, opens a different door to reveal a goat. The contestant is then given the option to switch their choice to the remaining closed door.

### The Role of Axioms
To solve the problem mathematically, one must establish specific axioms:
*   **Uniform Prize Distribution:** The prize is equally likely to be behind any of the three doors.
*   **Uniform Initial Choice:** The contestant is equally likely to pick any door initially.
*   **Host Constraints:** The host must always reveal a non-prize door that was not chosen by the contestant.
*   **Randomized Host Choice:** If the host has a choice between two non-prize doors (because the contestant initially picked the car), the host picks which one to open at random (e.g., by tossing a coin).

While intuition suggests that switching does not matter because there are two doors left, rigorous analysis proves that switching results in a win 2/3 of the time, whereas staying results in a win only 1/3 of the time.

## The Tree Method for Probability Analysis

The "Tree Method" (formerly known as the four-step method) provides a structured framework for solving probability problems without relying on intuition.

### Step 0: Definition and Axioms
Before beginning, the problem must be clearly defined, and the axioms—the rules taken on faith—must be established. Different axioms can lead to different mathematical conclusions.

### Step 1: Identify the Sample Space
The **sample space ($S$)** is a non-empty, countable, or finite set of all possible outcomes. A **tree diagram** is used to visualize this:
*   The root represents the start.
*   Each level of the tree represents a step in the random process.
*   Each branch represents a possible choice or occurrence at that step.
*   The leaves of the tree represent the final **outcomes**, which form the sample space.

### Step 2: Assign Probabilities and Determine the Probability Function
A **probability function ($Pr$)** maps each outcome in the sample space to a value between 0 and 1.
*   Probabilities are assigned to each edge of the tree.
*   The sum of probabilities for all edges branching from a single vertex must equal 1.
*   The probability of a specific outcome (a leaf) is calculated by multiplying the probabilities along the path from the root to that leaf.
*   The sum of the probabilities of all outcomes in the sample space must equal 1.

### Step 3: Define Events
An **event** is a subset of the sample space consisting of the outcomes that satisfy a specific condition (e.g., "the contestant wins by switching").

### Step 4: Compute the Probability of the Event
The probability of an event occurring is the sum of the probabilities of all outcomes contained within that event.

## Uniform Probability Spaces and Non-Transitive Dice

A **uniform probability space** is one where every outcome has the same probability. In such cases, calculating probability becomes a counting problem: the probability of an event is simply the number of outcomes in the event divided by the total number of outcomes in the sample space.

### Non-Transitivity in Games
Probability can yield results that defy the transitive property (where if A > B and B > C, then A > C). This is demonstrated through "strange dice" sets:
*   **Die Red:** (2, 6, 7)
*   **Die Green:** (1, 5, 9)
*   **Die Blue:** (3, 4, 8)

In a game where the higher roll wins:
*   **Red beats Green** with a probability of 5/9.
*   **Green beats Blue** with a probability of 5/9.
*   **Blue beats Red** with a probability of 5/9.

This creates a circular hierarchy similar to Rock-Paper-Scissors.

### The Impact of Repetition
The advantage in a probabilistic game can shift depending on the number of trials. For instance, while Die Red beats Die Green in a single-roll game (5/9 probability), if both dice are rolled twice and the sums are compared, Die Green gains the advantage. This demonstrates that the characteristics of a random process can change significantly when the process is repeated.

***

## Study Quiz

**Instructions:** Answer the following questions in 2-3 sentences based on the provided text.

1.  **Why is probability considered essential in computer science?**
2.  **What did the lecturer mean by quoting, "There are three kinds of lies: lies, damned lies, and statistics"?**
3.  **In the Monty Hall problem, what happens if the contestant initially picks the door with the car?**
4.  **Define a "probability space" according to the lecture.**
5.  **What is the purpose of a tree diagram in the Tree Method?**
6.  **How do you calculate the probability of a leaf in a tree diagram?**
7.  **What is the formal definition of an "event"?**
8.  **How is the probability of an event calculated once outcomes are known?**
9.  **What makes a probability space "uniform"?**
10. **Describe the "non-transitive" nature of the dice examples provided in the lecture.**

***

## Answer Key

1.  **Why is probability considered essential in computer science?**
    It is used in various fields including the Miller-Rabin algorithm, randomized algorithms, cryptography, and machine learning. It also plays a vital role in information theory and signal processing.
2.  **What did the lecturer mean by quoting, "There are three kinds of lies: lies, damned lies, and statistics"?**
    The quote suggests that probability and statistics can be used to state things that are technically true but highly misleading. This happens because common sense is often an unreliable guide for understanding probabilistic data.
3.  **In the Monty Hall problem, what happens if the contestant initially picks the door with the car?**
    Under the established axioms, the host has a choice between two different doors that both contain goats. The host will toss a coin and randomly open one of those two doors to reveal a goat.
4.  **Define a "probability space" according to the lecture.**
    A probability space consists of two elements: a sample space ($S$), which is a countable or finite set of outcomes, and a probability function ($Pr$). This function maps each outcome to a value between 0 and 1, and the sum of all outcomes must equal 1.
5.  **What is the purpose of a tree diagram in the Tree Method?**
    A tree diagram is used to determine the sample space by modeling each step of a random process as a level in the tree. The paths from the root to the leaves represent all possible ways the process can turn out.
6.  **How do you calculate the probability of a leaf in a tree diagram?**
    The probability of a leaf is found by multiplying all the edge probabilities along the path from the root to that specific leaf. This represents the probability of that specific outcome occurring within the sample space.
7.  **What is the formal definition of an "event"?**
    An event is defined as a subset of the sample space. It is a collection of specific outcomes that meet a certain description or criteria, such as "Marilyn wins."
8.  **How is the probability of an event calculated once outcomes are known?**
    The probability of an event is the sum of the probabilities of all the individual outcomes that make up that event. This is calculated after assigning probabilities to the leaves of the tree diagram.
9.  **What makes a probability space "uniform"?**
    A probability space is uniform if the probability function is constant, meaning every outcome has the exact same probability. In these cases, probability calculations simply involve counting the outcomes in an event and dividing by the total number of outcomes.
10. **Describe the "non-transitive" nature of the dice examples provided in the lecture.**
    The dice are non-transitive because they form a circular relationship where Die Red is likely to beat Die Green, and Die Green is likely to beat Die Blue, yet Die Blue is likely to beat Die Red. This contradicts the intuitive expectation of a linear hierarchy.

***

## Essay Questions

1.  **The Failure of Intuition:** Discuss why the Monty Hall problem caused such a "torrent of hate mail" from professional mathematicians. Why is human intuition particularly poorly suited for probability, and how does the Tree Method provide a solution?
2.  **The Importance of Axioms:** Analyze the role of axioms in Step 0 of the Tree Method. Using the Monty Hall problem, explain how changing the host’s behavior (e.g., if he were "benevolent" or "rude") would fundamentally alter the mathematical conclusion.
3.  **Modeling Random Processes:** Explain the structural relationship between a random process and a tree diagram. How do the levels, branches, and leaves of the tree map to real-world occurrences and their mathematical representations?
4.  **Uniform vs. Non-Uniform Spaces:** Compare and contrast uniform and non-uniform probability spaces. Provide examples from the text of each and explain why uniform spaces reduce probability to a "counting problem."
5.  **The Complexity of Repeated Trials:** Using the "strange dice" example, explore how increasing the number of trials (rolls) can change the advantage in a game. What does this suggest about the limitations of looking at single-event probabilities?

***

## Glossary of Key Terms

| Term | Definition |
| :--- | :--- |
| **Axiom** | A statement or rule taken on faith as a starting point for mathematical reasoning and analysis. |
| **Discrete Probability Space** | A probability space where the sample space is non-empty and either finite or countable. |
| **Event** | A subset of the sample space consisting of one or more outcomes. |
| **Outcome** | An element of a sample space representing a single possible result of a random process. |
| **Probability Function ($Pr$)** | A function that maps every outcome in a sample space to a number between 0 and 1, such that the sum of all outcome probabilities is 1. |
| **Probability Space** | The combination of a sample space ($S$) and a probability function ($Pr$). |
| **Sample Space ($S$)** | The set of all possible outcomes of a random process. |
| **Tree Diagram** | A diagram used to model a random process where each level represents a step and each leaf represents an outcome. |
| **Uniform Probability Space** | A probability space where every outcome has the same probability, making the probability of an event equal to its size divided by the size of the sample space. |
| **Zonk** | A technical term used on the game show *Let's Make a Deal* to refer to a non-prize, such as a goat or a garbage can. |