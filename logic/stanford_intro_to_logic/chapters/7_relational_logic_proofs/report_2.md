# Relational Logic Proofs: Comprehensive Study Guide

This study guide provides a detailed review of Relational Logic proofs based on the Fitch system. It explores the mechanisms for handling quantified sentences, the restrictions necessary for logical soundness, and the relationship between logical entailment and provability.

---

## Part 1: Short Answer Quiz

**Instructions:** Answer the following questions in 2-3 sentences based on the provided text.

1.  **Why are truth tables insufficient for establishing logical entailment in Relational Logic?**
2.  **What is the primary restriction when applying Universal Introduction (UI)?**
3.  **Explain the concept of "Universal Elimination" (UE).**
4.  **Define what it means for a term $\tau$ to be "substitutable" for a variable $\nu$.**
5.  **How does Existential Introduction (EI) require "backward" thinking?**
6.  **In Existential Elimination (EE), what is the specific requirement regarding the conclusion $\psi$?**
7.  **How is Existential Elimination (EE) analogous to Or Elimination from Propositional Logic?**
8.  **What is a "structured proof" in the context of Relational Logic?**
9.  **What occurs when a set of sentences does *not* logically entail a conclusion during a proof search?**
10. **What is the practical benefit of using free variables during a proof?**

---

## Part 2: Answer Key

1.  **Why are truth tables insufficient for establishing logical entailment in Relational Logic?**
    In Relational Logic, Herbrand bases can be of infinite size, leading to infinitely large truth assignments and an infinite number of them. Because truth tables would be infinite in these cases, they cannot be used to check logical entailment as they can in Propositional Logic.

2.  **What is the primary restriction when applying Universal Introduction (UI)?**
    If the variable being quantified appears in the sentence, it must not appear free in any active assumption. An active assumption includes any assumption in the current subproof or any of its superproofs.

3.  **Explain the concept of "Universal Elimination" (UE).**
    Universal Elimination allows a reasoner to move from a general universally quantified sentence to a specific instance. It states that if a universally quantified sentence is true, one can infer a version where the quantified variable is replaced by an appropriate, substitutable term.

4.  **Define what it means for a term $\tau$ to be "substitutable" for a variable $\nu$.**
    A term $\tau$ is substitutable for a variable $\nu$ in a sentence $\phi$ if no free occurrence of $\nu$ falls within the scope of a quantifier of any variable found in $\tau$. This restriction prevents variables in the replacement term from being accidentally "captured" by existing quantifiers in the sentence.

5.  **How does Existential Introduction (EI) require "backward" thinking?**
    The rule is applied by identifying a sentence $\phi[\tau]$ and determining if it could be the result of replacing free occurrences of a variable $\nu$ in a target sentence $\phi[\nu]$. One must essentially work backward from the specific term to the existentially quantified variable to ensure the inference is valid.

6.  **In Existential Elimination (EE), what is the specific requirement regarding the conclusion $\psi$?**
    The conclusion $\psi$ must not contain any free occurrences of the variable being quantified in the existential sentence. This ensures the conclusion is a general result of the logic rather than a specific claim about the variable used in the elimination process.

7.  **How is Existential Elimination (EE) analogous to Or Elimination from Propositional Logic?**
    An existential sentence is effectively a disjunction over all ground terms in a language, while a universal implication is like a set of implications for each of those terms. EE functions like Or Elimination by taking these "disjuncts" and producing a common consequent shared by all the implied cases.

8.  **What is a "structured proof" in the context of Relational Logic?**
    A structured proof is a sequence of sentences, which may include nested subproofs, that terminates with the conclusion at the top level of the proof. Every step must be either a premise, an assumption, or the result of applying a valid rule of inference to previous lines.

9.  **What occurs when a set of sentences does *not* logically entail a conclusion during a proof search?**
    If logical entailment does not exist, the process of searching for a finite proof might continue forever. While finite proofs can be found for entailed conclusions in finite time under certain restrictions, there is no guarantee of termination for non-entailed conclusions.

10. **What is the practical benefit of using free variables during a proof?**
    Free variables allow for the manipulation of terms as if they were specific individuals without committing to a single object constant. Once the proof is complete, these variables can be generalized using Universal Introduction to derive powerful, universally quantified conclusions.

---

## Part 3: Essay Questions

**Instructions:** Use the provided text to construct detailed responses for the following prompts.

1.  **The Relationship Between Entailment and Provability:** Discuss the trade-offs between using truth tables and formal proofs in Relational Logic. Explain the significance of the result that a set of premises logically entails a conclusion if and only if there is a finite proof.
2.  **Mechanisms of Universal Quantification:** Compare and contrast Universal Introduction (UI) and Universal Elimination (UE). Focus on their respective purposes in a proof and the specific constraints (such as "active assumptions" and "substitutability") that prevent illogical deductions.
3.  **The Logic of Existential Quantifiers:** Analyze the rules for Existential Introduction and Existential Elimination. Why is it necessary for the Fitch system to treat existential sentences as analogous to disjunctions, and what role does this play in structured proofs?
4.  **The Importance of Substitutability:** Provide a deep dive into the concept of "substitutability." Use examples from the text (such as the "everyone hates someone" case) to explain how uncontrolled substitution can lead to "unwarranted inferences."
5.  **Proof Anatomy: A Case Study:** Using the "horses are faster than dogs" or "Jack and Jill" examples from the text, describe the step-by-step logic of a Relational Logic proof. Explain how premises, substitutions, and different rules of inference (UE, EE, IE, etc.) work together to reach a top-level conclusion.

---

## Part 4: Glossary of Key Terms

| Term | Definition |
| :--- | :--- |
| **Active Assumption** | An assumption within the current subproof or any of its superproofs that has not yet been discharged. |
| **Existential Elimination (EE)** | A rule allowing the inference of a consequent $\psi$ from an existential sentence and a universal implication, provided the quantified variable is not free in $\psi$. |
| **Existential Introduction (EI)** | A rule allowing the inference of an existentially quantified sentence $\exists \nu.\phi[\nu]$ from a sentence $\phi[\tau]$ where $\tau$ is substitutable for $\nu$. |
| **Fitch System** | A formal proof system that, for Relational Logic, extends Propositional Logic with four rules for quantifiers: UI, UE, EI, and EE. |
| **Herbrand Base** | The set of all ground atoms that can be formed from the constants of a language; in Relational Logic, this can be infinite. |
| **Logical Entailment** | A state where every truth assignment satisfying a set of premises also satisfies the conclusion. |
| **Substitutable** | A condition for a term $\tau$ and variable $\nu$ where no free occurrence of $\nu$ in a sentence falls under the scope of a quantifier of any variable in $\tau$. |
| **Universal Elimination (UE)** | A rule allowing the replacement of a universally quantified variable with an appropriate term to reason from the general to the particular. |
| **Universal Introduction (UI)** | A rule that generalizes an arbitrary sentence into a universally quantified version, provided the variable is not free in an active assumption. |
| **Universal Implication** | A sentence where a universal quantifier scopes over an implication, often used in conjunction with EE to prove a common consequent. |