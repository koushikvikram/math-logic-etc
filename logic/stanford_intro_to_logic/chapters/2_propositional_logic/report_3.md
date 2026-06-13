# Fundamentals of Propositional Logic: A Briefing Document

## Executive Summary
Propositional Logic is a formal system concerned with the interrelationships between propositions—statements representing possible conditions of the world that are either true or false. This document synthesizes the foundational elements of the field, encompassing its syntax, semantics, and the logical properties of sentences. Key takeaways include:

*   **Syntactic Structure:** Logical expressions are categorized into simple sentences (proposition constants) and compound sentences formed using five primary operators: negation, conjunction, disjunction, implication, and biconditional.
*   **Semantic Evaluation:** The truth of compound sentences is determined by truth assignments to their constituent parts. Evaluation follows a strict hierarchy of operator precedence.
*   **Sentence Classification:** Sentences are categorized based on their truth values across all possible assignments as valid, unsatisfiable, or contingent.
*   **Propositional Entailment:** This central concept defines logical conclusions. A set of premises entails a conclusion if every truth assignment satisfying the premises also satisfies the conclusion.
*   **Computational Limitations:** While truth tables provide a definitive method for determining satisfaction and entailment, their complexity grows exponentially ($2^n$), necessitating more efficient proof methods for complex problems.

---

## 1. Syntactic Foundations
The syntax of Propositional Logic defines the legal expressions within the language. It distinguishes between two primary sentence types.

### 1.1 Simple Sentences (Proposition Constants)
Simple sentences express basic facts about the world. They are represented by strings of letters, digits, and underscores, subject to specific constraints:
*   **Lowercase Initiation:** Must begin with a lowercase letter (e.g., `raining`).
*   **Exclusions:** Strings starting with uppercase letters (e.g., `Raining`) or numbers (e.g., `324567`) are invalid, as are strings containing hyphens.

### 1.2 Compound Sentences and Operators
Compound sentences express logical relationships between simpler sentences. There are five types:

| Type | Operator | Structure | Definition |
| :--- | :---: | :--- | :--- |
| **Negation** | $\neg$ | $(\neg p)$ | Denies the target sentence. |
| **Conjunction** | $\wedge$ | $(p \wedge q)$ | Combines "conjuncts." |
| **Disjunction** | $\vee$ | $(p \vee q)$ | Combines "disjuncts." |
| **Implication** | $\Rightarrow$ | $(p \Rightarrow q)$ | Relates an "antecedent" ($p$) to a "consequent" ($q$). |
| **Biconditional** | $\Leftrightarrow$ | $(p \Leftrightarrow q)$ | Expresses equivalence. |

### 1.3 Operator Precedence and Parentheses
To resolve ambiguity in unparenthesized sentences, Propositional Logic employs a hierarchy of precedence. An operand flanked by different operators associates with the one of higher precedence. If operators are of equal precedence, the operand associates to the right.

**Precedence Hierarchy (Highest to Lowest):**
1.  $\neg$ (Negation)
2.  $\wedge$ (Conjunction)
3.  $\vee$ (Disjunction)
4.  $\Rightarrow$ and $\Leftrightarrow$ (Implication and Biconditional)

---

## 2. Semantics and Truth Assignments
Logic is concerned with the relationships between truth values rather than the real-world significance of the proposition constants.

### 2.1 Truth Assignments
A truth assignment (represented as $i$) is a function that assigns a truth value (1 for true, 0 for false) to every proposition constant in a language. While logic does not dictate the value of individual constants, it strictly fixes the truth values of compound sentences based on those assignments.

### 2.2 Operator Semantics (Truth Tables)
The truth value of any compound sentence is determined by applying specific rules to its sub-expressions:

*   **Negation ($\neg \phi$):** True if $\phi$ is false; false if $\phi$ is true.
*   **Conjunction ($\phi \wedge \psi$):** True if and only if both $\phi$ and $\psi$ are true.
*   **Disjunction ($\phi \vee \psi$):** True if at least one disjunct is true (inclusive or).
*   **Implication ($\phi \Rightarrow \psi$):** False if and only if the antecedent ($\phi$) is true and the consequent ($\psi$) is false (material implication).
*   **Biconditional ($\phi \Leftrightarrow \psi$):** True if and only if the truth values of $\phi$ and $\psi$ agree.

---

## 3. Logical Properties of Sentences
Sentences are classified based on the truth assignments that satisfy them. A truth assignment "satisfies" a sentence if the sentence evaluates to true under that assignment.

| Property | Definition |
| :--- | :--- |
| **Valid** | Satisfied by *every* possible truth assignment. |
| **Unsatisfiable** | Not satisfied by *any* truth assignment (always false). |
| **Contingent** | Satisfied by some assignments and falsified by others. |
| **Satisfiable** | Either valid or contingent (can be true). |
| **Falsifiable** | Either unsatisfiable or contingent (can be false). |

---

## 4. Propositional Entailment and Satisfaction
Propositional entailment describes the relationship where one sentence (the conclusion) must be true if a given set of sentences (the premises) is true.

### 4.1 Defining Entailment
A set of sentences $\Delta$ logically entails a sentence $\phi$ (written as $\Delta \models \phi$) if and only if every truth assignment that satisfies $\Delta$ also satisfies $\phi$. 
*   **Distinction from Truth:** Entailment does not mean a conclusion is true; it means the conclusion *cannot be false* if the premises are true.
*   **Distinction from Equivalence:** Entailment is directional. For example, $p$ entails $(p \vee q)$, but $(p \vee q)$ does not entail $p$.

### 4.2 The Truth Table Method
This method determines entailment by checking all possible truth assignments for the constants in the language:
1.  Construct a truth table for all constants.
2.  Evaluate the premises across all rows.
3.  Evaluate the conclusion.
4.  If every row where the premises are true also shows the conclusion to be true, entailment holds.

**Computational Complexity:** For $n$ logical constants, a truth table requires $2^n$ rows. This exponential growth makes the method impractical for languages with a high number of constants.

### 4.3 The Unsatisfiability Theorem
A critical relationship exists between entailment and satisfaction. The Unsatisfiability Theorem states that $\Delta \models \phi$ if and only if the set $\Delta \cup \{\neg \phi\}$ is unsatisfiable. This allows logical entailment to be determined by checking for unsatisfiability, forming the basis for various symbolic proof methods.