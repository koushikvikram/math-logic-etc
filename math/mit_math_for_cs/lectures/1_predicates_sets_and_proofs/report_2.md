# Study Guide: Predicates, Sets, and Proofs

This study guide provides a comprehensive review of the foundational concepts in mathematical logic, set theory, and the structural requirements of course 6.1200, as presented in the lecture "Predicates, Sets, and Proofs."

---

## Course Administration and Policies

The following table summarizes the structural components and policies of the course as outlined in the lecture.

| Component | Details |
| :--- | :--- |
| **Recitations** | Held Wednesdays and Fridays; attendance is mandatory and constitutes 10% of the final grade. |
| **Warmup Problems** | Short, multiple-choice questions on Canvas due before recitation. They allow infinite retries and instant feedback. |
| **Problem Sets** | Released on Tuesdays and due Monday nights at 11:59 PM. |
| **Collaboration Policy** | Students are encouraged to solve problems together but must write their final proofs individually ("Solve together, write alone"). |
| **Late Policy** | Late submissions are accepted until the last day of class. The first 50 hours incur a 1% penalty per hour (decreasing to 50% credit). After 50 hours, the credit remains at 50% for the rest of the term. |

---

## Quiz: Short-Answer Questions

**1. Explain the "P versus NP fallacy" in the context of proof writing.**
This fallacy refers to the mistaken belief that reading and understanding a proof is equivalent in difficulty to constructing one. While a student may follow the logic of a provided solution, the skill of translating mental reasoning into a concise, readable mathematical argument is a distinct ability that requires independent practice.

**2. How is a mathematical proof defined in this course?**
A mathematical proof is defined as a verification of a proposition through a sequence of logical deductions. These deductions must originate from a base set of established axioms.

**3. What is the difference between a proposition and a predicate?**
A proposition is a complete statement that is definitively either true or false, such as "Today is Tuesday." A predicate is a parameterized proposition whose truth value depends on one or more variables, such as "$p$ is prime," which only becomes a proposition once a value is assigned to $p$.

**4. Why was the statement "For all $n$ in the natural numbers, $n^2 + n + 41$ is prime" determined to be false?**
Although the statement holds true for values of $n$ from 0 to 39, mathematicians require a statement to be true for all cases without exception. The proposition fails at $n=41$ (and $n=40$), providing a counterexample that disproves the "for all" claim.

**5. Describe Goldbach’s Conjecture and its status in modern mathematics.**
Goldbach’s Conjecture states that every even number greater than 2 can be expressed as the sum of two prime numbers. It is a famous example of a simply stated problem that remains at the "cutting edge" of math, currently unproven and beyond the reach of modern mathematical tools.

**6. Contrast the mathematical definition of "OR" with its common use in colloquial English.**
In mathematics, "OR" is inclusive, meaning the statement is true if at least one or both components are true. Colloquial English often uses "OR" as an "exclusive OR" (XOR), where only one option is permitted, or as "NAND," where both options might be excluded.

**7. In the implication $A \implies B$, what occurs when the antecedent ($A$) is false?**
When the starting assumption $A$ is false, the implication is considered "vacuously true" regardless of whether $B$ is true or false. This is illustrated by the rule "On Wednesdays we wear pink"; if it is not Wednesday, the rule is not violated, regardless of what color is worn.

**8. Distinguish between a set and a tuple.**
A set is an unordered collection of objects where repeats are not recognized; $\{6, 1, 2, 0\}$ is identical to $\{0, 1, 2, 6, 0\}$. A tuple is an ordered list where both the sequence and the presence of repeats matter, meaning $(6, 1, 2, 0)$ and $(6, 1, 2, 0, 0)$ are distinct entities.

**9. What are the requirements for a set of axioms to be "consistent" and "complete"?**
A set of axioms is consistent if it is impossible to prove that a false statement is true (preventing a "principle of explosion" where everything becomes true). It is complete if every true proposition within that system can be proved using those axioms.

**10. According to Gödel’s Incompleteness Theorem, why can a mathematical system not be both consistent and complete?**
Gödel proved that any system complex enough to perform basic arithmetic cannot satisfy both properties. If a system is consistent, there will inevitably be true statements within it that are unprovable using the system's own axioms.

---

## Answer Key

1.  Reading/understanding $\neq$ constructing.
2.  Verification of proposition via logical deductions from axioms.
3.  Proposition = true/false; Predicate = depends on variables.
4.  Found a counterexample at $n=41$.
5.  Even numbers $>2$ are sums of two primes; currently unproven.
6.  Math OR is inclusive; English OR is often exclusive or context-dependent.
7.  The implication is true (vacuously).
8.  Sets = unordered/no repeats; Tuples = ordered/repeats allowed.
9.  Consistent = no proving False as True; Complete = all true things are provable.
10. Arithmetic-capable systems have inherent true but unprovable statements if they are consistent.

---

## Essay Questions for Further Study

1.  **The Ethics and Efficacy of Collaboration:** Discuss the "solve together, write alone" policy. Why is it critical for a student’s development to perform the final act of proof construction in isolation, and what are the potential risks of relying too heavily on group notes?
2.  **The Imprecision of Language:** Analyze the examples provided regarding the waiter's use of the word "or." How does the ambiguity of spoken language complicate the communication of precise mathematical truths, and how do Boolean operators resolve this?
3.  **The Nature of Truth:** The lecture lists several methods of ascertaining truth, including the scientific method, legal proceedings, authority, and mathematical proof. Compare and contrast the "mathematical proof" method with one other method mentioned in the text.
4.  **Axiomatic Shifts:** Using the examples of Euclidean, spherical, and hyperbolic geometry, explain how changing a single axiom can redefine an entire mathematical system. What does this suggest about the "absolute" nature of mathematical truth?
5.  **The Limits of Knowledge:** Explore the implications of Gödel’s Incompleteness Theorem. If there are true statements that can never be proven, how does this change the way we view the mission of mathematics and the role of the mathematician?

---

## Glossary of Key Terms

*   **Axiom:** A proposition assumed to be true without proof, serving as the starting point for further logical deduction.
*   **Boolean Operator:** A logical connector (such as AND, OR, NOT) used to combine or modify propositions.
*   **Complement:** In the context of sets (referred to as set difference), the set of elements in $A$ that are not in $B$ ($A - B$).
*   **Contrapositive:** The statement $\text{NOT } B \implies \text{NOT } A$. It is logically equivalent to the original implication $A \implies B$.
*   **Converse:** The statement $B \implies A$. It is not necessarily logically equivalent to the original implication.
*   **Counterexample:** A specific instance that proves a general "for all" statement to be false.
*   **Empty Set ($\emptyset$):** A set containing no elements. It is considered a subset of every set.
*   **Implication ($A \implies B$):** A logical relationship where if $A$ is true, $B$ must also be true. It is false only if $A$ is true and $B$ is false.
*   **Intersection ($\cap$):** The set containing only the elements that are present in both set $A$ and set $B$.
*   **Inverse:** The statement $\text{NOT } A \implies \text{NOT } B$.
*   **Natural Numbers ($\mathbb{N}$):** The set of non-negative integers $\{0, 1, 2, 3, \dots\}$. In this course, 0 is always included.
*   **Principle of Explosion:** A logical rule stating that if a contradiction is accepted as true (False = True), any statement can be proven true.
*   **Set Builder Notation:** A mathematical shorthand for defining a set by specifying a property (predicate) that its members must satisfy.
*   **Subset ($\subseteq$):** A relationship where every element of set $A$ is also an element of set $B$.
*   **Union ($\cup$):** The set containing all elements that are in set $A$, set $B$, or both.
*   **Vacuously True:** A term for an implication $A \implies B$ that is true simply because the starting condition $A$ is false.