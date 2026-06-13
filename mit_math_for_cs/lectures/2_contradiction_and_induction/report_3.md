# Foundations of Mathematical Proof: Contradiction and Induction

## Executive Summary

This document synthesizes the core principles of mathematical proof as presented in the MIT 6.1200 curriculum. The primary focus is the transition from intuitive reasoning to formal logical deduction through the application of specific proof outlines and inference rules. 

Key takeaways include:
*   **Logical Deductions:** The process of building proofs from axioms using inference rules such as *modus ponens*.
*   **Proof Rigor:** The rejection of "proof by intimidation" in favor of explicit, clear steps that avoid glossing over complexities with terms like "obvious" or "clear."
*   **Structured Outlines:** The use of standardized templates for proving existence ($\exists$), universality ($\forall$), and implication ($P \implies Q$).
*   **Indirect Methods:** The application of contrapositive reasoning and proof by contradiction (assuming the negation of a theorem to "break math" and thus prove the original statement).
*   **Mathematical Induction:** A powerful tool for proving properties across all natural numbers by establishing a base case and an inductive step, effectively creating an infinite chain of logical implications.

---

## Foundations of Logical Deduction

Mathematical proofs are constructed through a sequence of logical deductions starting from a base set of axioms. An **inference rule** is a formal method for combining true propositions to derive new true propositions.

### Common Inference Rules

| Rule Name | Formal Logic | Intuitive Description |
| :--- | :--- | :--- |
| **Modus Ponens** | If $P$ and $P \implies Q$, then $Q$ | If a condition holds and the condition implies a result, the result is true. |
| **Modus Tollens** | If $P \implies Q$ and $\neg Q$, then $\neg P$ | If $P$ implies $Q$, but $Q$ is false, then $P$ must also be false. |
| **Contradiction Rule** | If $\neg P \implies \text{false}$, then $P$ | If assuming $P$ is false leads to a logical impossibility, then $P$ must be true. |

### Verification via Truth Tables
Inference rules are not merely intuitive; they can be verified through truth tables. By testing every possible value for a proposition (True/False), one can confirm that a formula is a **tautology**—a statement that is always true regardless of the variables' values.

---

## Standards of Rigorous Proof Writing

A proof serves two purposes: to verify correctness and to communicate that correctness to others (graders, peers, or colleagues).

### Avoiding "Proof by Intimidation"
The use of words like "clearly," "obviously," or "intuitively" should be stricken from mathematical vocabulary. These terms often:
1.  **Hide Errors:** Writers gloss over steps they haven't actually checked, which is a common source of mistakes.
2.  **Demotivate Readers:** If a step is labeled "obvious" but the reader does not understand it, it creates a false sense of inadequacy.
3.  **Obscure Logic:** If a step is truly clear, it should be easy to explain; if it is difficult to explain, it is not actually obvious.

### The Use of Axioms
While most proofs assume high school mathematics as a common set of axioms, students are cautioned against citing a theorem as an axiom if they have been specifically asked to prove that theorem. The "spirit of the assignment" requires thinking deeply about *why* known truths are true.

---

## Fundamental Proof Outlines

Standardized outlines provide a scaffold for reasoning, ensuring the writer addresses all necessary components of a theorem's structure.

### 1. Existence Proofs ($\exists x \in S, P(x)$)
To prove that something exists with a specific property:
*   **Identify the Candidate:** Choose a specific value for $x$.
*   **Verify Set Membership:** Show that $x$ is indeed in set $S$.
*   **Verify the Property:** Demonstrate that $P(x)$ holds for that specific value.

### 2. Universal Proofs ($\forall x \in S, P(x)$)
To prove a property holds for all elements in a set:
*   **Instantiate a Generic Element:** Begin by saying, "Suppose $x$ is a generic element of $S$."
*   **Assume Only Membership:** Do not assume any additional properties about $x$ other than its membership in $S$.
*   **Derive the Property:** Use logical deductions to show $P(x)$ must be true.

### 3. Implication Proofs ($P \implies Q$)
*   **Direct Proof:** Assume $P$ is true. Use this as a concrete starting point to derive $Q$.
*   **Proof by Contrapositive:** Prove the equivalent statement $\neg Q \implies \neg P$. Assume $Q$ is false and show that $P$ must therefore be false.
*   **If and Only If ($P \iff Q$):** This requires proving the implication in both directions: $P \implies Q$ and $Q \implies P$.

---

## Indirect Proof Techniques

### Proof by Contradiction
This technique involves assuming the theorem to be proven is false and then demonstrating that this assumption leads to a logical contradiction (breaking the consistency of mathematics).

**Standard Procedure:**
1.  **State the Assumption:** "For the sake of contradiction, assume $P$ is false."
2.  **Derive a Contradiction:** Follow logical steps until reaching a statement $R$ that is simultaneously true and false.
3.  **Conclusion:** Because the assumption "broke math," the assumption must be wrong, and the original proposition $P$ must be true.

**Example: The Irrationality of $\sqrt{2}$**
*   **Assumption:** Assume $\sqrt{2}$ is rational (can be written as $a/b$ in lowest terms).
*   **Deduction:** Algebra shows both $a$ and $b$ must be even.
*   **Contradiction:** If $a$ and $b$ are both even, the fraction was not in lowest terms, contradicting the initial definition. Thus, $\sqrt{2}$ is irrational.

---

## The Principle of Mathematical Induction

Induction is used to prove a predicate $P(n)$ is true for all natural numbers $n \ge 0$. It functions like a sequence of falling dominoes: if the first one falls, and each one knocks down the next, they all fall.

### The Induction Template
To perform a proof by induction, one must complete two distinct tasks:
1.  **Base Case:** Prove $P(0)$ is true.
2.  **Inductive Step:** Prove that for all $n \ge 0$, if $P(n)$ is true (the **Inductive Hypothesis**), then $P(n+1)$ must also be true.

### Case Study: Courtyard Tiling
**Theorem:** A $2^n \times 2^n$ board with any single cell removed can be tiled using L-shaped trominoes (3-square tiles).

**The Inductive Logic:**
*   **Base Case ($n=1$):** A $2 \times 2$ board with one cell removed is itself an L-tromino.
*   **Inductive Step:**
    1.  Assume a $2^n \times 2^n$ board can be tiled.
    2.  Take a $2^{n+1} \times 2^{n+1}$ board and divide it into four $2^n \times 2^n$ quadrants.
    3.  One quadrant contains the "missing cell."
    4.  Place one L-tromino in the center so that it covers one cell in each of the *other* three quadrants.
    5.  Now, all four quadrants are effectively $2^n \times 2^n$ boards with one cell missing.
    6.  By the Inductive Hypothesis, each quadrant can be tiled.
    7.  Therefore, the entire $2^{n+1} \times 2^{n+1}$ board is tiled.

### Conclusion on Induction
Induction is not an "arcane" ritual; it is a structured way to break down a daunting infinite task into two manageable pieces: starting the chain and maintaining the link between consecutive steps. By using these outlines, complex proofs become a series of smaller, verifiable "to-dos."