# Study Guide: Logical Deductions, Proof Techniques, and Induction

This study guide provides a comprehensive review of mathematical proof construction, focusing on logical deductions, various proof outlines, and the principle of induction based on the MIT 6.1200 lecture series.

---

## Part I: Short-Answer Quiz

**Instructions:** Answer the following ten questions based on the provided source context. Each answer should be between two and three sentences.

1.  **What is an inference rule in the context of mathematical logic?**
    An inference rule is a formal guideline used for combining true propositions to derive new true propositions. It acts as a mechanism for constructing logical deductions, which are the heart of building and checking mathematical proofs.

2.  **Explain the logic behind the inference rule known as *modus ponens*.**
    *Modus ponens* is an intuitive rule stating that if a proposition $P$ is true, and the implication $P \implies Q$ is also true, then $Q$ must be true. It is a fundamental tool used in proofs to move from a known condition to a necessary conclusion.

3.  **Why does the lecturer advise against using "proof by intimidation" (e.g., using words like "obvious" or "clear")?**
    Such language can be demotivating to readers who may not find the point obvious and, more importantly, often masks logical errors. Skipping the explanation of a "clear" step removes the redundancy needed to catch mistakes, which is the primary purpose of writing a proof.

4.  **What is the standard outline for proving an existence theorem ($\exists$)?**
    To prove that there exists an element $x$ in a set $S$ with property $P(x)$, one should specify a particular value for $x$. The proof must then demonstrate that this chosen value is indeed a member of the set $S$ and satisfies the required property $P(x)$.

5.  **How is a generic element used when proving a universal theorem ($\forall$)?**
    In a universal proof, one must suppose $x$ is a generic element of a set, assuming nothing about it other than its membership in that set. By proving the property holds for this unspecified $x$, the proof demonstrates that the property is true for every possible choice in the set.

6.  **What are the steps involved in a "direct proof" of an implication ($P \implies Q$)?**
    A direct proof begins by assuming that the antecedent $P$ is true, which makes the scenario concrete. The prover then uses logical deductions and axioms to conclude that the consequent $Q$ must also be true within that hypothetical framework.

7.  **Describe the method of proof by contrapositive.**
    A proof by contrapositive relies on the logical equivalence between $P \implies Q$ and $\neg Q \implies \neg P$. To use this method, one assumes the conclusion $Q$ is false and demonstrates that this necessarily implies the starting condition $P$ is also false.

8.  **What is the defining characteristic of a proof by contradiction?**
    In a proof by contradiction, one assumes that the theorem to be proved is false and then shows that this assumption leads to a "broken" mathematical state or a contradiction (where a statement is both true and false). Because math cannot be inconsistent, the original assumption of falsehood must be wrong, meaning the theorem is true.

9.  **How is an "If and Only If" ($P \iff Q$) theorem structured?**
    An "If and Only If" theorem asserts that $P$ and $Q$ are logically equivalent, meaning they are true or false at exactly the same times. To prove this, one must provide two separate proofs: one showing that $P$ implies $Q$ and another showing that $Q$ implies $P$.

10. **Explain the intuitive "row of implications" that justifies the Principle of Induction.**
    Induction works by proving a base case, such as $P(0)$, and an inductive step that shows $P(n) \implies P(n+1)$. This creates a chain of logic where $P(0)$ proves $P(1)$, $P(1)$ proves $P(2)$, and so on, eventually reaching all natural numbers.

---

## Part II: Answer Key

1.  An inference rule is a rule for combining true propositions to form other true propositions. It is described as the "heart" of how proofs are constructed and checked.
2.  *Modus ponens* states that if you know $P$ is true and $P \implies Q$ is true, then $Q$ is true. It is considered an intuitive rule, though it can be verified more formally using truth tables.
3.  These terms risk alienating the reader and often lead to mistakes because the prover glosses over a step instead of checking it. Proofs exist to ensure correctness, and skipping "obvious" steps removes that safety net.
4.  The outline involves choosing a specific value for $x$, showing that $x$ is a member of the required set $S$, and verifying that $P(x)$ holds true. Providing a single valid example is sufficient for existence.
5.  Unlike an existence proof, which uses a specific value, a universal proof uses a "generic" element. This means the proof assumes nothing about $x$ except its membership in the set, ensuring the conclusion applies to all elements.
6.  The prover assumes the first part ($P$) is true to make the task concrete. They then work to connect the dots from that assumption to the final desired conclusion ($Q$).
7.  The contrapositive of $P \implies Q$ is $\neg Q \implies \neg P$. The proof proceeds by assuming $Q$ is false and using that to derive that $P$ is false, which is often easier than a direct proof.
8.  It starts with the assumption that the entire theorem is false (BWOC - "By Way of Contradiction"). If this assumption leads to a statement that is both true and false, it proves the assumption was impossible, thus the theorem must be true.
9.  This is a bidirectional implication. The proof is typically split into two sections: the "forward" direction ($P \implies Q$) and the "backward" direction ($Q \implies P$).
10. If the base case $P(0)$ is true, and there is a rule that any true case proves the next case ($P(n) \implies P(n+1)$), then the truth "travels" through all natural numbers like a sequence of falling dominoes.

---

## Part III: Essay Questions

*Instructions: Consider the following prompts for deeper analysis. No answers are provided.*

1.  **The Ethics of Mathematical Writing:** Discuss the lecturer's recommendation to strike "obvious," "clear," and "intuitive" from a mathematician's vocabulary. How does this prioritize the reader's experience and the objective of verification over the author's ego?
2.  **Structural Scaffolding:** Analyze how "proof outlines" serve as scaffolds for complex thought. How does pre-defining the beginning and end of a proof help a mathematician focus their "precious thinking cycles"?
3.  **The Geometry of Logic:** Using the example of tiling a $2^n \times 2^n$ board with L-trominoes, explain how a geometric problem can be decomposed into an inductive proof. How does the "quadrant" strategy demonstrate the transition from $P(n)$ to $P(n+1)$?
4.  **Comparing Indirect Methods:** Compare and contrast Proof by Contrapositive and Proof by Contradiction. In what specific scenarios might one be more advantageous or "cleaner" than the other?
5.  **The Limits of Axioms:** The lecture mentions that high school math is generally accepted as a base set of axioms, with certain exceptions. Explore the tension between using established facts as axioms and the "spirit of the assignment" when asked to prove a known theorem.

---

## Part IV: Glossary of Key Terms

| Term | Definition |
| :--- | :--- |
| **Axiom** | A base set of propositions assumed to be true without proof, serving as the starting point for logical deductions. |
| **Base Case** | The first step in an inductive proof (often $P(0)$ or $P(1)$) that verifies the theorem for the smallest possible value. |
| **Contrapositive** | The statement formed by contradicting and flipping an implication; $\neg Q \implies \neg P$ is the contrapositive of $P \implies Q$. |
| **Inductive Step** | The portion of an induction proof that demonstrates if the theorem holds for $n$, it must also hold for $n+1$. |
| **Inference Rule** | A logical rule (like *modus ponens*) used to combine true propositions to generate new true propositions. |
| **L-tromino** | A shape made of three squares in an "L" configuration, used in the lecture to demonstrate tiling proofs. |
| **Logical Deduction** | The process of using inference rules to move from axioms and verified propositions to new conclusions. |
| **Predicate** | A mathematical statement ($P(n)$) that depends on a variable and can be true or false depending on the value of that variable. |
| **Principle of Induction** | An axiom/rule stating that if a property holds for a base case and is preserved from $n$ to $n+1$, it holds for all natural numbers. |
| **QED** | Abbreviation for *quod erat demonstrandum* ("which was to be shown"), used to mark the end of a proof. |
| **Truth Table** | A mathematical table used to determine if a formula or inference rule is always true by testing all possible truth values for its components. |
| **WTS** | An abbreviation for "Want To Show," used by mathematicians to identify the goal or target of a specific section of a proof. |