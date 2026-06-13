# State Machines and Algorithmic Analysis Study Guide

This study guide explores the formalization of processes over time through the lens of state machines. It covers the structural components of state machines, the application of induction through the invariant principle, and methods for proving algorithmic termination using derived variables.

## Section 1: Short-Answer Quiz

**Instructions:** Answer the following questions using two to three sentences each, based on the provided material.

1. What are the three core components that define a state machine?
2. In the context of state machines, what is the difference between a finite execution and an infinite execution?
3. How is a "reachable state" defined within a system?
4. What is a state predicate, and how can it be viewed as a function?
5. Describe the relationship between a preserved predicate and an invariant.
6. How does the invariant principle relate to the induction axiom?
7. In the analysis of the 8 puzzle, what constitutes an "inverted pair"?
8. Why are horizontal moves in the 8 puzzle considered simpler to analyze than vertical moves regarding parity?
9. What condition must be met for a state to be considered a "final state"?
10. What two properties must a derived variable possess to guarantee the termination of a state machine?

***

## Section 2: Quiz Answer Key

1. **What are the three core components that define a state machine?**
   A state machine consists of a set of states ($Q$), a designated start state ($q_0$) that is an element of $Q$, and a set of allowed transitions ($T$) written as $q \to r$. The set of states represents all possible information or arrangements within the machine, while transitions define the valid steps the process can take.

2. **In the context of state machines, what is the difference between a finite execution and an infinite execution?**
   A finite execution is a sequence of states $(q_0, q_1, \dots, q_n)$ that stops at a specific state $q_n$ after a series of valid transitions. An infinite execution is a sequence that continues indefinitely, which is an important distinction when analyzing whether a program or algorithm will eventually terminate.

3. **How is a "reachable state" defined within a system?**
   A state $r$ is considered reachable if there exists a valid execution that begins at the start state $q_0$ and ends at $r$. States that have no incoming transitions from the start state or its successors are unreachable and are generally not of interest when proving system properties.

4. **What is a state predicate, and how can it be viewed as a function?**
   A state predicate $P(q)$ is a proposition that is either true or false depending on the state being evaluated. It can be viewed as a function that maps each state in the set $Q$ to a Boolean value (true or false).

5. **Describe the relationship between a preserved predicate and an invariant.**
   A predicate is preserved if, given a transition from $q$ to $r$, the truth of $P(q)$ implies the truth of $P(r)$. An invariant is a predicate that is true for all reachable states; the invariant principle states that if a predicate is true at the start state and is preserved, it is an invariant.

6. **How does the invariant principle relate to the induction axiom?**
   The invariant principle is a generalization of the induction axiom where the states are natural numbers and the transitions move from $i$ to $i+1$. In this context, the start state represents the base case, and the preserved property represents the inductive step.

7. **In the analysis of the 8 puzzle, what constitutes an "inverted pair"?**
   An inverted pair consists of two numbers $(i, j)$ such that $i < j$, but $j$ appears before $i$ in the grid’s reading order (top row to bottom row). The blank space $(x)$ is not counted as part of an inverted pair, as the analysis focuses solely on the numerical arrangement.

8. **Why are horizontal moves in the 8 puzzle considered simpler to analyze than vertical moves regarding parity?**
   Horizontal moves involve sliding a tile into a blank space within the same row, which does not change the relative reading order of the numbers. Because the reading order remains identical, the number of inverted pairs does not change, making the parity of the state trivially preserved.

9. **What condition must be met for a state to be considered a "final state"?**
   A state $q$ is defined as final if there are no valid transitions in the set $T$ that start at $q$ and lead to another state $r$. In algorithms, reaching a final state signifies that the process has terminated.

10. **What two properties must a derived variable possess to guarantee the termination of a state machine?**
    To prove termination, the derived variable $x(q)$ must map states to the set of natural numbers (non-negative integers) and must be strictly decreasing. If every transition reduces the value of the variable, the machine must eventually reach a state where no further decreases—and thus no further transitions—are possible.

***

## Section 3: Essay Questions

**Instructions:** Consider the following prompts for deeper analysis of state machine theory and application. Answers are not provided.

1. **Comparing Proof Techniques:** Discuss the conceptual similarities and differences between using the invariant principle to prove a property of a puzzle and using a derived variable to prove the termination of a sorting algorithm.
2. **The Logic of Reachability:** Explain how the combination of the invariant principle and state predicates can be used to prove that a specific goal state in a system is impossible to reach.
3. **8 Puzzle Parity Analysis:** Detail why a vertical move in the 8 puzzle changes the number of inverted pairs by an even amount (plus or minus 2, or 0) and how this fact supports the claim of parity preservation.
4. **Generalization of Induction:** Analyze the claim that the invariant principle "generalizes" the induction axiom. Why is it useful to view algorithmic steps as transitions in a state machine rather than just points on a number line?
5. **Partial vs. Total Correctness:** Explain the concept of "partial correctness" in the context of the simple sorting machine and why termination is a necessary second step to prove the machine is truly "correct."

***

## Section 4: Glossary of Key Terms

| Term | Definition |
| :--- | :--- |
| **8 Puzzle** | A 3x3 grid containing eight numbered tiles and one blank space, used to demonstrate state reachability and invariants. |
| **Derived Variable** | A function $x(q)$ that assigns a real number (usually a natural number) to each state, used primarily to prove termination. |
| **Execution** | A sequence of states $(q_0, q_1, q_2, \dots)$ where each pair $(q_i, q_{i+1})$ is a valid transition in $T$. |
| **Final State** | A state from which no transitions are possible. |
| **Invariant** | A state predicate that is true for every reachable state of a state machine. |
| **Invariant Principle** | A theorem stating that if a predicate $P$ is true for the start state $q_0$ and is preserved under all transitions, then $P$ is an invariant. |
| **Inverted Pair** | In the 8 puzzle or sorting, a pair of elements where the larger value precedes the smaller value in the sequence or reading order. |
| **Parity** | The property of an integer being either odd or even; used in the 8 puzzle to identify unreachable states. |
| **Partial Correctness** | A property of a machine where, if it terminates, the resulting state is guaranteed to be the "correct" or desired answer. |
| **Preserved Predicate** | A predicate $P$ such that if $P(q)$ is true and there is a transition $q \to r$, then $P(r)$ must also be true. |
| **Reachable State** | Any state that can be arrived at starting from $q_0$ through a sequence of valid transitions. |
| **Start State ($q_0$)** | The initial configuration of a state machine before any transitions have occurred. |
| **State Machine** | A mathematical model of a process consisting of a set of states, a start state, and transitions between states. |
| **State Predicate** | A proposition $P(q)$ that assigns a Boolean value to a state. |
| **Strictly Decreasing** | A property of a derived variable where every transition $q \to r$ results in $x(q) > x(r)$. |
| **Transition ($T$)** | A valid move from one state to another, represented as an arrow $q \to r$. |