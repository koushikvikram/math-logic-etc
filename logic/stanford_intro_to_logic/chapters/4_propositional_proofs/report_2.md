# Propositional Proofs Study Guide

This study guide provides a comprehensive overview of propositional proofs, covering linear and structured methodologies, the Fitch proof system, and the evaluative criteria of soundness and completeness.

---

## Part 1: Short-Answer Quiz

**Question 1: What is the primary limitation of truth tables that necessitates the use of proof methods?**
The number of truth assignments in a language grows exponentially with the number of logical constants. For languages with a large number of constants, processing a truth table becomes practically impossible, whereas proof methods allow for a more efficient check of logical entailment through symbolic manipulation.

**Question 2: Define a "schema" and "metavariables" as they relate to logical expressions.**
A schema is an expression that follows the grammatical rules of a language but uses metavariables, typically represented by Greek letters, as placeholders for various subparts. An instance of a schema is created by consistently substituting specific sentences for every occurrence of the same metavariable.

**Question 3: Describe the three components that may constitute a step in a linear proof.**
In a linear proof, each item in the sequence must be either a premise, an instance of an axiom schema, or the result of applying a rule of inference to previous items in the sequence. The proof concludes when the desired sentence is derived as the final item in this sequence.

**Question 4: What are the three Mendelson axiom schemas, and what is their collective significance?**
The Mendelson axiom schemas are Implication Creation (IC), Implication Distribution (ID), and Contradiction Realization (CR). Together with the Implication Elimination rule, they are sufficient to prove all logical consequences from any set of premises expressed using only negation and implication.

**Question 5: How does the structure of a structured proof differ from that of a linear proof?**
While both are sequences of reasoning steps, structured proofs allow sentences to be grouped into subproofs nested within outer superproofs. This hierarchy enables the use of assumptions within subproofs to derive implications in the superproof.

**Question 6: Explain the rule for applying an ordinary rule of inference within a structured proof.**
An ordinary rule of inference applies to a subproof only if all its premises appear earlier in that specific subproof or in one of its superproofs. It is strictly prohibited to use sentences from nested subproofs or unrelated subproofs as premises for an ordinary rule in a superproof.

**Question 7: What is the specific function of the "Implication Introduction" rule in Fitch?**
Implication Introduction is a structured rule of inference that allows for the derivation of an implication $(\phi \Rightarrow \psi)$ in a superproof if a subproof starting with the assumption $\phi$ successfully derives the conclusion $\psi$.

**Question 8: Describe the "Or Elimination" rule used in the Fitch system.**
Or Elimination addresses disjunctions where it is unknown which disjunct is true. If a proof contains a disjunction $(\phi_1 \lor \dots \lor \phi_n)$ and it can be shown that every individual disjunct entails a common sentence $\psi$ (via implications like $\phi_i \Rightarrow \psi$), then $\psi$ can be inferred.

**Question 9: Define "Soundness" in the context of proof systems.**
A proof system is considered sound if every conclusion that can be proven from a set of premises is also logically entailed by those premises. Formally, if $\Delta \vdash \phi$, then it must be the case that $\Delta \models \phi$.

**Question 10: Define "Completeness" in the context of proof systems.**
A proof system is complete if every sentence that is logically entailed by a set of premises can be successfully proven using the system's rules. Formally, if $\Delta \models \phi$, then it must be the case that $\Delta \vdash \phi$.

---

## Part 2: Answer Key

1. **Answer:** Truth tables grow exponentially with logical constants; proofs are more practical for large languages.
2. **Answer:** A schema is a grammatical pattern using metavariables (placeholders) that allow for consistent substitution of sentences.
3. **Answer:** Premises, instances of axiom schemas, or results of rules of inference applied to earlier lines.
4. **Answer:** Implication Creation, Implication Distribution, and Contradiction Realization; they can prove any consequence in a $\neg, \Rightarrow$ language.
5. **Answer:** Structured proofs utilize nested subproofs and assumptions, whereas linear proofs are simple sequences.
6. **Answer:** Premises must be in the current subproof or a superproof; using sentences from deeper nested proofs is illegal.
7. **Answer:** It discharges a subproof to create an implication where the assumption is the antecedent and the conclusion is the consequent.
8. **Answer:** It allows the inference of a sentence $\psi$ if every part of a disjunction is shown to lead to $\psi$.
9. **Answer:** Every provable conclusion is logically entailed.
10. **Answer:** Every logically entailed conclusion is provable.

---

## Part 3: Essay Questions

1. **The Efficiency of Proofs vs. Truth Tables:** Discuss the computational and practical advantages of using proof systems over truth tables, specifically addressing the concept of exponential growth and the comparative size of the resulting arguments.
2. **The Mechanics of Structured Reasoning:** Analyze how the use of subproofs and assumptions in the Fitch system simplifies the process of logical derivation compared to the Mendelson system's reliance on axiom schemas.
3. **The Role of Metavariables and Substitution:** Explain why consistent substitution for metavariables is essential for the validity of a rule of inference and how this relates to the infinite nature of propositional languages.
4. **Evaluating Logical Systems:** Compare the Mendelson and Fitch systems in terms of their soundness and completeness across different subsets of propositional logic.
5. **Strategic Proof Construction:** Based on the text, outline the strategic steps one should take to prove complex sentences, such as implications and negations, and why building up from simple valid sentences is recommended.

---

## Part 4: Glossary of Key Terms

| Term | Definition |
| :--- | :--- |
| **Axiom Schema** | A rule of inference that has no premises, allowing the introduction of a sentence instance without prior derivations. |
| **Completeness** | The property of a proof system where every logical consequence of a set of premises is provable within that system. |
| **Fitch System** | A popular proof system supporting structured proofs and ten specific rules of inference (nine ordinary, one structured). |
| **Linear Proof** | A sequence of sentences ending in a conclusion where each step is a premise, an axiom, or a result of a rule application. |
| **Metavariable** | A placeholder (often a Greek letter) used in schemas to represent arbitrary sub-expressions of a language. |
| **Provability ($\vdash$)** | A relationship between a set of premises and a conclusion indicating that a proof exists using specific rules of inference. |
| **Rule of Inference** | A pattern of reasoning consisting of schemas representing premises and the conclusions that can be derived from them. |
| **Schema** | A pattern for a logical expression that uses metavariables to define a general form. |
| **Soundness** | The property of a proof system where every provable conclusion is also a logical consequence of the premises. |
| **Structured Proof** | A proof method involving nested subproofs and assumptions, allowing for the introduction and discharge of temporary hypotheses. |
| **Turnstile** | The symbol $\vdash$, also called a single turnstile, used to denote that a sentence is provable from a set of premises. |