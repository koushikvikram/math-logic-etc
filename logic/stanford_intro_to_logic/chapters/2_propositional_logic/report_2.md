# Comprehensive Study Guide: Propositional Logic

This study guide provides a detailed overview of the fundamental concepts of Propositional Logic, covering its syntax, semantics, and the principles of logical entailment as outlined in the provided source material.

---

## Part 1: Short-Answer Quiz

**Instructions:** Answer the following questions in 2-3 sentences based on the information provided in the source text.

1.  **What defines a proposition in the context of Propositional Logic?**
2.  **What are the specific syntactic rules for writing a proposition constant?**
3.  **Explain the difference between a simple sentence and a compound sentence.**
4.  **How does operator precedence function when parentheses are absent in a sentence?**
5.  **Define the "material implication" rule used for determining the truth value of an implication.**
6.  **What is the difference between an "inclusive or" and an "exclusive or" interpretation of disjunction?**
7.  **How is a "truth assignment" defined, and what notation is used to represent it?**
8.  **Distinguish between a "valid" sentence and a "contingent" sentence.**
9.  **Describe the Truth Table Method for determining logical entailment.**
10. **What is the significance of the Unsatisfiability Theorem?**

---

## Part 2: Answer Key

1.  **What defines a proposition in the context of Propositional Logic?**
    A proposition is a possible condition of the world that is either true or false, such as "it is raining." The condition does not need to be true to be considered a proposition; it simply must be capable of having a truth value.

2.  **What are the specific syntactic rules for writing a proposition constant?**
    Proposition constants must be strings of letters, digits, and underscores, beginning with a lowercase letter. Constants cannot start with an uppercase character or a number, and they may not contain hyphens.

3.  **Explain the difference between a simple sentence and a compound sentence.**
    Simple sentences, or proposition constants, express basic facts about the world. Compound sentences use logical operators to express complex relationships between simpler constituent sentences.

4.  **How does operator precedence function when parentheses are absent in a sentence?**
    Precedence dictates that operands associate with the operator of higher hierarchy: negation (highest), then conjunction, then disjunction, and finally implication and biconditional (lowest). If an operand is surrounded by operators of equal precedence, it associates to the right.

5.  **Define the "material implication" rule used for determining the truth value of an implication.**
    Under material implication, an implication is considered false if and only if its antecedent is true and its consequent is false. In all other combinations of truth values for the antecedent and consequent, the implication is true.

6.  **What is the difference between an "inclusive or" and an "exclusive or" interpretation of disjunction?**
    In an inclusive or (the standard for the $\lor$ operator), a disjunction is true if at least one disjunct is true. In contrast, an exclusive or interpretation requires that an odd number of disjuncts be false for the sentence to be true.

7.  **How is a "truth assignment" defined, and what notation is used to represent it?**
    A truth assignment is a function that assigns a truth value (1 for true, 0 for false) to every proposition constant in a language. It is represented by superscripting the constant or expression with the name of the assignment, such as $p^i = 1$.

8.  **Distinguish between a "valid" sentence and a "contingent" sentence.**
    A valid sentence is one that is satisfied by every possible truth assignment in the language. A contingent sentence is satisfied by at least one truth assignment and falsified by at least one other.

9.  **Describe the Truth Table Method for determining logical entailment.**
    This method involves creating a table of all possible truth assignments for the constants in a language and evaluating the premises and the conclusion for each row. Logical entailment is confirmed if every row that satisfies all the premises also satisfies the conclusion.

10. **What is the significance of the Unsatisfiability Theorem?**
    The theorem states that a set of sentences $\Delta$ logically entails a sentence $\phi$ if and only if the set $\Delta \cup \{\neg \phi\}$ is unsatisfiable. This allows researchers to determine logical entailment by checking for unsatisfiability, which is useful in various proof methods.

---

## Part 3: Essay Questions

**Instructions:** Use the source context to develop comprehensive responses to the following prompts. (Answers not provided).

1.  **The Role of Formalism:** Discuss why Logic, like Algebra, is "unconcerned with the real-world significance" of its variables. How does this focus on form over content enable logical reasoning?
2.  **Parenthetical Necessity and Operator Precedence:** While operator precedence allows for the removal of some parentheses, the text notes they cannot be dispensed with entirely. Explain the specific scenarios where parentheses remain mandatory to maintain semantic clarity.
3.  **The Complexity of Satisfaction:** Explain the relationship between the number of proposition constants ($n$) and the size of a truth table. Discuss the computational challenges this poses for practical applications like "Sorority World."
4.  **A Taxonomy of Sentences:** Compare and contrast the classifications of sentences: valid, unsatisfiable, contingent, satisfiable, and falsifiable. Explain how a single sentence might belong to multiple groups.
5.  **Entailment vs. Truth:** Using the example of "the fickle Mary" or the widget manufacturer constraints, explain why a conclusion can be true in the real world even if it is not logically entailed by a specific set of premises.

---

## Part 4: Glossary of Key Terms

| Term | Definition |
| :--- | :--- |
| **Antecedent** | The sentence to the left of the implication operator ($\Rightarrow$). |
| **Biconditional** | A compound sentence ($p \Leftrightarrow q$) that is true if and only if both constituent sentences have the same truth value. |
| **Conjunction** | A compound sentence ($p \land q$) that is true if and only if both constituent "conjuncts" are true. |
| **Consequent** | The sentence to the right of the implication operator ($\Rightarrow$). |
| **Contingent** | A sentence that is neither valid nor unsatisfiable; it is true under some assignments and false under others. |
| **Disjunction** | A compound sentence ($p \lor q$) that is true if at least one constituent "disjunct" is true. |
| **Falsifiable** | A sentence that is either unsatisfiable or contingent (it can be false). |
| **Implication** | A compound sentence ($p \Rightarrow q$) that is false only if the antecedent is true and the consequent is false. |
| **Logical Entailment** | A relationship ($\Delta \models \phi$) where every truth assignment satisfying a set of sentences $\Delta$ also satisfies sentence $\phi$. |
| **Negation** | A compound sentence ($\neg p$) that has the opposite truth value of its "target" sentence. |
| **Proposition Constant** | A simple sentence representing a fact; must begin with a lowercase letter. |
| **Satisfiable** | A sentence that is either valid or contingent (it can be true). |
| **Satisfaction** | The condition where a truth assignment makes a sentence or set of sentences true. |
| **Truth Assignment** | A function mapping proposition constants to the values 1 (true) or 0 (false). |
| **Unsatisfiable** | A sentence that is not satisfied by any truth assignment (always false). |
| **Valid** | A sentence that is satisfied by every possible truth assignment (always true). |