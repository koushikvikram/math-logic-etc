# Foundations of Mathematics: Proofs, Sets, and Logic

## Executive Summary

The following document synthesizes the foundational concepts of mathematical reasoning as presented in the MIT course 6.1200. The primary objective of the course is to develop the ability to write precise, concise, and correct mathematical arguments. Central to this is the definition of a **mathematical proof**: a verification of a proposition via a chain of logical deductions derived from a base set of axioms.

Key takeaways include:
*   **The "Solve Together, Write Alone" Policy:** Collaboration is encouraged during the problem-solving phase, but students must draft proofs independently to bridge the gap between understanding a solution and constructing one.
*   **Logical Implication:** The mathematical definition of "implies" ($A \implies B$) differs from colloquial usage; it is strictly defined by truth tables where a false premise always yields a true implication.
*   **Set Theory and Structure:** Sets are unordered collections where duplicates are irrelevant, whereas tuples are ordered and sensitive to repetitions.
*   **The Limits of Axioms:** According to Gödel’s Incompleteness Theorem, mathematical systems capable of arithmetic cannot be both consistent and complete, meaning some true statements are inherently unprovable within a given set of axioms.

---

## Course Logistics and Pedagogy

The course structure is designed to minimize stress while maximizing the development of proof-writing skills.

### Collaboration and the "P versus NP Fallacy"
The instructor emphasizes a distinction between the ability to read a proof and the ability to write one. This is termed the **P versus NP Fallacy**: the tempting but incorrect belief that understanding someone else's proof is equivalent to being able to construct it oneself.
*   **Collaboration Policy:** Students are encouraged to use "pset partners" and office hours to solve problems.
*   **Individual Writing:** Once a solution is found, students must set aside their notes and write the proof in their own words. This ensures the student has mastered the "writing step," which is a core skill of the curriculum.

### Grading and Late Policy
*   **Recitations:** Attendance is mandatory (10% of the grade) and involves group problem-solving.
*   **Warmups:** Low-stress, multiple-choice problems on Canvas with infinite retries, intended to prepare students for recitation.
*   **Late Work:** Problem sets are accepted until the last day of classes for at least 50% credit. For the first 50 hours after a deadline, the grade drops by 1% per hour. This "no sharp cutoff" policy is intended to reduce student anxiety.

---

## The Nature of Mathematical Truth

While science relies on experiments and law relies on evidence/trials, mathematics relies on the **Mathematical Proof**.

### Propositions and Predicates
A **proposition** is a statement that is definitively true or false.
*   *Example:* "2 + 3 = 5" (True proposition).
*   *Example:* "For all $n \in \mathbb{N}, n^2 + n + 41$ is prime" (False proposition, disproven by the counterexample $n=41$).

A **predicate** is a proposition whose truth depends on variables (a "parametrized proposition"). It becomes a proposition once the variables are defined.

### Boolean Operators
Mathematics employs specific operators to combine propositions. The instructor notes that colloquial English often obscures these meanings:

| Operator | Mathematical Meaning | Note |
| :--- | :--- | :--- |
| **NOT** ($\neg A$) | $A$ is false. | Flips the truth value. |
| **AND** ($A \wedge B$) | Both $A$ and $B$ are true. | Fails if either is false. |
| **OR** ($A \vee B$) | At least one of $A$ or $B$ is true. | **Inclusive OR**: true if both are true. |
| **IMPLIES** ($A \implies B$) | If $A$ is true, then $B$ must be true. | Only false if $A$ is True and $B$ is False. |

#### The Imprecision of "Or"
In English, "or" can mean **Exclusive OR (XOR)** (e.g., "Chicken or pasta?") or **NAND** (e.g., "Coffee or tea?"), or even a general list of options. In mathematics, "OR" is always inclusive.

#### The Truth Table for Implication ($A \implies B$)
The instructor uses the rule "On Wednesdays, we wear pink" to explain the truth table for implication:
*   **True $\implies$ True:** (Wednesday and wearing pink) — **Rule Obeyed (True)**
*   **True $\implies$ False:** (Wednesday and wearing blue) — **Rule Violated (False)**
*   **False $\implies$ True:** (Tuesday and wearing pink) — **Rule Obeyed (True)**
*   **False $\implies$ False:** (Tuesday and wearing blue) — **Rule Obeyed (True)**

In mathematics, "implies" does not require causality or a chronological sequence. It is strictly a truth-value relationship.

---

## Set Theory and Tuples

Sets provide the common language for mathematical discourse.

### Fundamental Set Concepts
A **set** is an unordered collection of objects.
*   **Order and Repetition:** The set $\{6, 1, 2, 0\}$ is identical to $\{0, 1, 2, 6\}$ and $\{6, 1, 2, 0, 0\}$.
*   **Common Sets:**
    *   $\mathbb{N}$: Natural Numbers $\{0, 1, 2, 3, \dots\}$ (Note: 0 is included).
    *   $\mathbb{Z}$: Integers.
    *   $\mathbb{Q}$: Rationals (fractions).
    *   $\mathbb{R}$: Real numbers.
    *   $\mathbb{C}$: Complex numbers.
    *   $\emptyset$: The empty set (contains no elements).

### Set Relationships and Operations
*   **Element vs. Subset:** $x \in A$ means $x$ is an element of $A$. $A \subseteq B$ means every element in $A$ is also in $B$.
    *   *The Empty Set Property:* The empty set is a subset of every set because there is no element in $\emptyset$ that can disprove the subset condition.
*   **Union ($A \cup B$):** Elements in $A$ OR $B$ OR both.
*   **Intersection ($A \cap B$):** Elements in both $A$ AND $B$.
*   **Difference ($A - B$):** Elements in $A$ that are NOT in $B$.

### Tuples
Unlike sets, **tuples** are ordered lists where repeats matter. The tuple $(6, 1, 2, 0)$ is distinct from $(0, 1, 2, 6)$ and from $(6, 1, 2, 0, 0)$.

---

## Axioms and Logical Foundations

**Axioms** are propositions assumed to be true without proof. They serve as the starting point for all mathematical systems.

### Euclid's Parallel Postulate
Euclid's geometry was built on five axioms. For centuries, mathematicians tried to prove the fifth (the Parallel Postulate) from the first four. This was eventually proven impossible.
*   Changing the axiom (e.g., assuming "no parallel lines" or "infinitely many parallel lines") results in different but entirely consistent geometries, such as **Spherical Geometry** or **Hyperbolic Geometry**.

### Consistency and Completeness
A set of axioms should ideally possess two properties:
1.  **Consistency:** You cannot prove both a proposition and its negation (prevents the "Principle of Explosion," where everything becomes true).
2.  **Completeness:** Every true proposition can be proved from the axioms.

### Gödel’s Incompleteness Theorem
Kurt Gödel proved that any consistent system capable of basic arithmetic is necessarily **incomplete**. There will always be true statements within the system that cannot be proven using its axioms. For the purposes of this course, students are instructed to assume the validity of standard "high school math" as a functional base of axioms.