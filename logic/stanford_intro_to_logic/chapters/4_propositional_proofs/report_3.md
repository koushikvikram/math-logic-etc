# Propositional Proofs: Principles, Systems, and Evaluation

## Executive Summary

Proof methods serve as a practical alternative to truth tables for verifying logical entailment. While truth tables are conceptually simple, they scale poorly because the number of truth assignments grows exponentially with the number of logical constants. Proofs address this by utilizing symbolic manipulation to derive conclusions from premises, often requiring significantly less work and space than exhaustive truth tables.

This document explores two primary proof structures: linear proofs—sequences of sentences derived through rules and axioms—and structured proofs—hierarchical systems that allow for nested assumptions. Central to this discussion are the Mendelson and Fitch systems. The Mendelson system relies on specific axiom schemas to prove consequences within a restricted language, while the Fitch system provides a comprehensive, structured framework for the full propositional language. Ultimately, these systems are judged by their soundness (the validity of derived conclusions) and completeness (the ability to prove all valid conclusions).

---

## 1. The Rationale for Proof Methods

The primary challenge in propositional logic is checking logical entailment. The truth table method, while definitive, is limited by its complexity; a language with a large number of logical constants becomes impossible to process as the table grows. 

Proof methods provide a symbolic alternative. The essence of this reasoning is the manipulation of symbols: starting with known premises and applying rules of inference to derive new conclusions. In many instances, a proof is not only smaller than a truth table but can be found with less computational effort.

---

## 2. Foundations of Linear Proofs

Linear proofs are sequences of sentences where each step is justified as a premise, an axiom, or a result of a rule application.

### 2.1 Schemas and Rules of Inference
Logical reasoning relies on patterns rather than specific sentences.
*   **Schema:** An expression following grammatical rules but using **metavariables** (e.g., $\phi, \psi$) instead of specific subparts.
*   **Rule of Inference:** A reasoning pattern consisting of schemas called **premises** and one or more schemas called **conclusions**. 
*   **Instance:** A specific rule obtained by consistently substituting actual sentences for metavariables. If a metavariable appears multiple times in a rule, the substitution must be identical for every occurrence.

### 2.2 Axiom Schemas
Rules of inference that require no premises are known as axiom schemas. The **Mendelson axiom schemas** are a notable set used to prove logical consequences:

| Name | Schema | Description |
| :--- | :--- | :--- |
| **Implication Creation (IC)** | $\phi \Rightarrow (\psi \Rightarrow \phi)$ | Allows the inference of implications. |
| **Implication Distribution (ID)** | $(\phi \Rightarrow (\psi \Rightarrow \chi)) \Rightarrow ((\phi \Rightarrow \psi) \Rightarrow (\phi \Rightarrow \chi))$ | Distributes one implication over another. |
| **Contradiction Realization (CR)** | $(\neg\phi \Rightarrow \psi) \Rightarrow ((\neg\phi \Rightarrow \neg\psi) \Rightarrow \phi)$ | Permits the inference of a sentence if its negation leads to a contradiction. |

Combined with **Implication Elimination (IE)**, these schemas are sufficient to prove all logical consequences from premises expressed using only negation ($\neg$) and implication ($\Rightarrow$).

---

## 3. Structured Proofs

Structured proofs improve upon linear proofs by introducing hierarchy. They allow for **subproofs** nested within superproofs, making complex derivations easier to manage.

### 3.1 Assumptions and Scope
In a structured proof, one may make an arbitrary **assumption** to begin a subproof. This assumption does not need to be part of the initial premise set. 
*   **Internal Derivation:** Within the subproof, conclusions are derived based on the assumption.
*   **Discharge:** Once a subproof is terminated, a conclusion (typically an implication) is derived in the outer proof. The assumption becomes the antecedent, and the final line of the subproof becomes the consequent.
*   **Scope Rules:** Ordinary rules of inference can only use premises from the current subproof or its superproofs. It is strictly forbidden to use a sentence from a nested subproof as a premise for a rule application in an outer superproof.

---

## 4. The Fitch Proof System

Fitch is a popular, powerful, and simple proof system that supports structured proofs through ten specific rules of inference.

### 4.1 Ordinary and Structured Rules
The Fitch system utilizes nine ordinary rules and one structured rule (Implication Introduction).

| Category | Rule | Logic |
| :--- | :--- | :--- |
| **Conjunction** | And Introduction | Derive $\phi_1 \land ... \land \phi_n$ from individual conjuncts. |
| | And Elimination | Derive any $\phi_i$ from $\phi_1 \land ... \land \phi_n$. |
| **Disjunction** | Or Introduction | Infer an arbitrary disjunction if one disjunct is true. |
| | Or Elimination | If $\phi_1 \lor ... \lor \phi_n$ is true, and every disjunct entails $\psi$, infer $\psi$. |
| **Negation** | Negation Introduction | If $\phi \Rightarrow \psi$ and $\phi \Rightarrow \neg\psi$, then $\neg\phi$. |
| | Negation Elimination | $\neg\neg\phi$ allows the inference of $\phi$. |
| **Implication** | Implication Introduction | If assuming $\phi$ allows the derivation of $\psi$, then $\phi \Rightarrow \psi$. |
| | Implication Elimination | From $\phi \Rightarrow \psi$ and $\phi$, derive $\psi$ (also known as IE). |
| **Biconditional** | Biconditional Intro | Derive $\phi \Leftrightarrow \psi$ from $\phi \Rightarrow \psi$ and $\psi \Rightarrow \phi$. |
| | Biconditional Elim | Derive $\phi \Rightarrow \psi$ and $\psi \Rightarrow \phi$ from $\phi \Leftrightarrow \psi$. |

### 4.2 Proof Strategies
The document outlines "tricks" or strategies for constructing Fitch proofs:
1.  **To prove a conjunction:** Prove each conjunct separately, then use And Introduction.
2.  **To prove an implication ($\phi \Rightarrow \psi$):** Assume $\phi$, prove $\psi$ within a subproof, and apply Implication Introduction.
3.  **To prove a negation:** Assume the target sentence and show it leads to contradictory conclusions, then apply Negation Introduction.

---

## 5. Soundness and Completeness

The efficacy of a proof system is measured by its relationship with logical entailment.

*   **Soundness:** A system is sound if every provable conclusion ($\Delta \vdash \phi$) is logically entailed ($\Delta \models \phi$). A sound system never derives a false conclusion from true premises.
*   **Completeness:** A system is complete if every logically entailed conclusion is provable within that system.

### 5.1 System Evaluations
*   **Mendelson System:** Sound and complete for the subset of Propositional Logic using only negation and implication. Since any propositional sentence can be written using these two operators, it is a significant, if sometimes complex, system.
*   **Fitch System:** Sound and complete for the full propositional language. It is considered a "full language" solution where logical entailment and provability are identical.

**Conclusion:** While proof methods may, in the worst case, require as many steps as truth tables, they are generally more efficient, result in smaller documents of argument, and are the preferred method for communicating logical reasoning.