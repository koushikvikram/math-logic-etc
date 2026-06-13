# Study Guide: Propositional Resolution

This study guide provides a comprehensive review of Propositional Resolution as a rule of inference in Propositional Logic. It covers the conversion of sentences into clausal form, the application of the Resolution Principle, and the methodology for resolution reasoning and proofs.

## Overview of Propositional Resolution

Propositional Resolution is an inference rule used to build theorem provers that are both sound and complete. Unlike standard Propositional Logic proof systems, Propositional Resolution operates within a significantly smaller search space. It requires all expressions to be in a specific format known as clausal form.

### Conversion to Clausal Form

Before the Resolution Principle can be applied, premises and conclusions must be converted into clauses through a four-step procedure:

| Step | Name | Rule / Transformation |
| :--- | :--- | :--- |
| **1** | **Implications (I)** | Eliminate implications and equivalences (e.g., $\phi \Rightarrow \psi$ becomes $\neg\phi \lor \psi$). |
| **2** | **Negations (N)** | Move negations inward using DeMorgan's laws and eliminate double negations. |
| **3** | **Distribution (D)** | Distribute disjunctions over conjunctions to create a conjunction of disjunctions. |
| **4** | **Operators (O)** | Convert disjunctions into sets of literals (clauses) and conjunctions into sets of clauses. |

---

## Short-Answer Quiz

**Instructions:** Answer the following questions in 2–3 sentences based on the source material.

1.  What is the primary advantage of using Propositional Resolution over standard Propositional Logic proof systems?
2.  Define a "literal" and provide examples of its two forms.
3.  What is a "clausal sentence," and how does it differ from a "clause"?
4.  Why is the empty set `{}` significant in Propositional Resolution?
5.  Explain the basic intuition behind the Resolution Principle.
6.  What is the "merging" rule when drawing a conclusion from two clauses that share a literal?
7.  Why is it prohibited to resolve more than one pair of complementary literals at a time?
8.  How does Propositional Resolution relate to the Implication Elimination rule?
9.  What is the difference between a "resolution derivation" and a "resolution proof"?
10. Describe the relationship between Propositional Resolution and generative completeness.

---

## Quiz Answer Key

1.  **Advantage of Resolution:** Propositional Resolution allows for the creation of theorem provers that are sound and complete for all of Propositional Logic. Additionally, it offers a much smaller search space than standard proof systems, making the process of finding proofs more efficient.
2.  **Definition of Literal:** A literal is defined as either an atomic sentence or the negation of an atomic sentence. For a logical constant $p$, both $p$ and $\neg p$ qualify as literals.
3.  **Clausal Sentence vs. Clause:** A clausal sentence is a literal or a disjunction of literals, such as $\neg p \lor q$. A clause is the set of literals contained within a clausal sentence, represented as $\{\neg p, q\}$.
4.  **The Empty Set:** The empty set, or empty clause, represents an "empty disjunction." In Propositional Resolution, the derivation of an empty clause indicates that the initial set of clauses contains a logical contradiction and is therefore unsatisfiable.
5.  **Resolution Intuition:** If we have a clause $\{p, q\}$ (meaning $p$ or $q$ is true) and a clause $\{\neg q, r\}$ (meaning $q$ is false or $r$ is true), we can infer $\{p, r\}$. This is because $q$ must be either true or false, necessitating that either $p$ or $r$ must be true.
6.  **Merging Rule:** Since clauses are treated as sets, they cannot contain duplicate literals. When two clauses are resolved and the result contains multiple occurrences of the same literal, those occurrences are merged into one.
7.  **Multiple Complementary Literals:** Resolving multiple pairs of complementary literals simultaneously is illegal because it could incorrectly suggest a contradiction. Two clauses like $\{p, q\}$ and $\{\neg p, \neg q\}$ can both be satisfied (e.g., if $p$ is true and $q$ is false) and are therefore not inconsistent.
8.  **Implication Elimination:** Implication Elimination ($p \Rightarrow q$ and $p$ leading to $q$) is essentially a specific instance of resolution. In clausal form, this resolves $\{\neg p, q\}$ and $\{p\}$ to produce the conclusion $\{q\}$.
9.  **Derivation vs. Proof:** A resolution derivation is a sequence of clauses where each is a premise or a result of the Resolution Principle. A resolution proof is a specific type of derivation that terminates in an empty clause, starting from the premises and the negation of the goal.
10. **Generative Completeness:** Propositional Resolution is not generatively complete, meaning it cannot derive all clauses logically entailed by a set of premises (e.g., it cannot derive $\{p, q\}$ from $\{p\}$ and $\{q\}$). However, it is refutation complete, as it is guaranteed to derive the empty clause if a set of clauses is unsatisfiable.

---

## Essay Questions

**Instructions:** Use the principles of Propositional Logic and Resolution to address the following prompts.

1.  **The Role of Clausal Form:** Discuss why Propositional Resolution requires sentences to be converted into clausal form. Explain how the conversion process (I, N, D, O) preserves the logical integrity of the original sentences.
2.  **Soundness and Completeness:** Analyze the significance of Propositional Resolution being "sound and complete." How does this impact the reliability of a theorem prover built on these principles?
3.  **The Refutation Theorem in Practice:** Explain the process of proving a sentence $\phi$ from a set of premises $\Delta$ using the Refutation Theorem. Why is it necessary to negate the goal to achieve a resolution proof?
4.  **Comparing Proof Methods:** Compare Propositional Resolution to other proof methods mentioned in the text. Focus on the concepts of "search space" and "terminating procedures" in your analysis.
5.  **Constraints of the Resolution Principle:** Detail the specific constraints of applying the Resolution Principle, such as dealing with complementary pairs and the limitations regarding generative completeness. Why do these constraints exist?

---

## Glossary of Key Terms

*   **Atomic Sentence:** A basic proposition or logical constant without any logical operators.
*   **Clausal Form:** A variation of Propositional Logic language where sentences are expressed as sets of literals.
*   **Clause:** A set of literals representing a disjunction.
*   **Complementary Pair:** Two literals where one is the negation of the other (e.g., $p$ and $\neg p$).
*   **Empty Clause ({}):** A clause containing no literals; it is unsatisfiable and represents a logical contradiction.
*   **Generative Completeness:** The ability of a system to derive every sentence that is logically entailed by a set of premises.
*   **Literal:** An atomic sentence or its negation.
*   **Propositional Resolution:** A rule of inference that derives a new clause from two existing clauses containing a complementary pair of literals.
*   **Refutation Theorem:** A theorem stating that a set of sentences $\Delta$ entails $\phi$ if and only if $\Delta \cup \{\neg\phi\}$ is inconsistent.
*   **Resolution Derivation:** A finite sequence of clauses where each clause is either a premise or inferred from previous clauses via the Resolution Principle.
*   **Resolution Proof:** A derivation of the empty clause from a set of premises and the negation of the desired conclusion.
*   **Soundness:** The property of an inference rule where any derived conclusion is logically certain given the premises.
*   **Unsatisfiable:** A condition where no truth assignment can make a set of sentences or clauses true simultaneously.