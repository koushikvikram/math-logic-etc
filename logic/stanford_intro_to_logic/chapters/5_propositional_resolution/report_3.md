# Propositional Resolution: A Comprehensive Briefing

## Executive Summary

Propositional Resolution is a powerful and efficient rule of inference for Propositional Logic. Unlike standard proof systems that may require complex axiom schemas, Propositional Resolution provides a sound and complete framework for theorem proving with a significantly smaller search space. The method operates exclusively on expressions in **clausal form**, necessitating a specific four-step conversion process for arbitrary logical sentences. 

The core of the system is the **Resolution Principle**, which derives new clauses by canceling out complementary literals between two existing clauses. While the system is not "generatively complete"—meaning it cannot derive every single logical entailment directly—it is **refutation complete**. This means that if a set of sentences is unsatisfiable, Propositional Resolution is guaranteed to derive an empty clause (a logical contradiction). Consequently, logical entailment is determined by negating a desired conclusion and proving that the resulting set is inconsistent. One of the most significant advantages of this method is that it can be implemented in a proof procedure that is guaranteed to terminate.

---

## Foundations of Clausal Form

Propositional Resolution requires all premises and conclusions to be expressed in clausal form. This format is built upon several specific linguistic components:

| Term | Definition | Examples |
| :--- | :--- | :--- |
| **Literal** | An atomic sentence or its negation. | $p$, $\neg p$ |
| **Clausal Sentence** | A literal or a disjunction (OR) of literals. | $p$, $\neg p \lor q$ |
| **Clause** | A set representing the literals in a clausal sentence. | $\{p\}$, $\{\neg p, q\}$ |
| **Empty Clause** | An "empty disjunction" represented as an empty set {}. | {} |

The **empty clause** is a critical concept in resolution reasoning; it is inherently unsatisfiable and represents a logical contradiction.

---

## The Conversion Procedure

To apply resolution, arbitrary Propositional Logic sentences must be converted into a set of clauses using a four-step procedure applied in strict order:

1.  **Implications (I):** Eliminate all implication ($\Rightarrow$), reduction ($\Leftarrow$), and equivalence ($\Leftrightarrow$) operators.
    *   $\phi \Rightarrow \psi$ becomes $\neg\phi \lor \psi$
    *   $\phi \Leftrightarrow \psi$ becomes $(\neg\phi \lor \psi) \land (\phi \lor \neg\psi)$
2.  **Negations (N):** Reduce the scope of negations until they apply only to atomic sentences. This involves removing double negations ($\neg\neg\phi \rightarrow \phi$) and applying DeMorgan's laws.
3.  **Distribution (D):** Distribute disjunctions over conjunctions so that the sentence becomes a conjunction of disjunctions (Conjunctive Normal Form). This step also involves flattening nested operators.
4.  **Operators (O):** Transform the resulting conjunction of disjunctions into a set of individual clauses.

---

## The Resolution Principle

The Resolution Principle is an intuitive rule of inference. If it is known that $p$ or $q$ is true, and it is also known that $\neg q$ or $r$ is true, one can conclude that $p$ or $r$ must be true. This is because $q$ must be either true or false; if it is false, $p$ must be true from the first premise, and if it is true, $r$ must be true from the second.

### The Formal Rule
Given a clause containing a literal $\chi$ and another clause containing the complementary literal $\neg\chi$, the resolver can infer a new clause containing all literals from both original clauses, excluding the complementary pair:

$$\frac{\{\phi_1, \dots, \chi, \dots, \phi_m\} \quad \{\psi_1, \dots, \neg\chi, \dots, \psi_n\}}{\{\phi_1, \dots, \phi_m, \psi_1, \dots, \psi_n\}}$$

### Critical Constraints and Rules
*   **Set Merging:** Because clauses are sets, any duplicate literals resulting from the resolution are merged into a single occurrence (e.g., resolving $\{\neg p, q\}$ and $\{p, q\}$ results in $\{q\}$).
*   **One Pair at a Time:** If two clauses contain multiple pairs of complementary literals, only **one pair** may be resolved in a single step. Resolving two pairs simultaneously is a logical error and can lead to false conclusions of inconsistency.
*   **Singleton Resolution:** Resolving two singleton clauses containing complementary literals (e.g., $\{p\}$ and $\{\neg p\}$) results in the **empty clause** ( {} ), signaling a contradiction.

---

## Resolution Reasoning and Proofs

### Resolution Derivations
A resolution derivation is a finite sequence of clauses where each clause is either a premise or the result of applying the Resolution Principle to previous clauses in the sequence. 

### Resolution Proofs (Refutation)
Resolution is not "generatively complete," meaning it cannot derive all clauses that are logically entailed by a set of premises. For instance, premises $\{p\}$ and $\{q\}$ entail $\{p, q\}$, but resolution cannot derive $\{p, q\}$ directly.

To overcome this, Propositional Resolution uses **refutation-based proofs** based on the Refutation Theorem. To prove a sentence $\phi$ from a set of premises $\Delta$:
1.  Negate the goal: $\neg\phi$.
2.  Convert $\Delta \cup \{\neg\phi\}$ into clausal form.
3.  Derive the empty clause using the Resolution Principle.

If the empty clause is derived, the original goal $\phi$ is proven to be a logical consequence of the premises $\Delta$.

---

## Theoretical Properties and Advantages

Propositional Resolution offers several advantages over other proof systems:

*   **Soundness and Completeness:** The system is both sound (only true conclusions are drawn) and complete (all true conclusions can be proven) for Propositional Logic. $\Delta \models \phi$ if and only if there is a resolution proof of $\phi$ from $\Delta$.
*   **Refutation Completeness:** If a set of clauses is unsatisfiable, a resolution derivation of the empty clause is guaranteed to exist.
*   **Focused Search Space:** Resolution is more focused than other methods because it eliminates the need to carefully choose instantiations or navigate infinite search spaces for rules of inference.
*   **Guaranteed Termination:** Since only a finite number of clauses can be constructed from a finite set of proposition constants, a resolution-based proof procedure will eventually run out of new conclusions to draw. This allows the search for a proof to terminate successfully or fail definitively within a finite timeframe.