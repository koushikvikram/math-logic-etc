# Graph Theory and Stable Matching: Theoretical Foundations and the Gale-Shapley Algorithm

## Executive Summary

This document synthesizes key concepts from Graph Theory regarding matchings, with a specific focus on the stable matching problem and the Gale-Shapley algorithm. Matching theory provides a mathematical framework for pairing objects in a graph such that no two pairings share a common endpoint. This has significant real-world applications in task allocation, computational resource management, and social systems.

The briefing details the critical distinctions between **maximal** and **maximum** matchings and explores the specialized case of **bipartite matchings**. The centerpiece of this analysis is the **Gale-Shapley algorithm**, a Nobel Prize-winning procedure that guarantees a stable matching—a state where no "rogue pairs" have an incentive to abandon their assigned partners. Key findings include the algorithm's inherent bias: it is "applicant-optimal" (providing applicants with their best feasible partners) while being "evaluator-pessimal" (providing evaluators with their least preferred feasible partners).

---

## 1. Fundamentals of Graph Matching

A matching in a graph $G = (V, E)$ is defined as a subset of edges $M$ such that no two edges in $M$ share a common vertex. In other words, every vertex in the subgraph has a degree of at most 1.

### Key Classifications of Matchings
The lecture distinguishes between different "notions of big" when evaluating matchings:

| Term | Definition | Perspective |
| :--- | :--- | :--- |
| **Maximal Matching** | A matching where it is impossible to add any additional edge from the graph without violating matching rules. | **Local:** You cannot make a single improvement by adding one edge to the current set. |
| **Maximum Matching** | The largest possible matching that can exist within the entire graph. | **Global:** No other matching exists anywhere in the graph with more edges. |
| **Perfect Matching** | A matching that includes every vertex in the graph, giving every participant exactly one partner. | **Complete:** Requires $2n$ vertices for $n$ edges. |

**Observation:** While every maximum matching is maximal, not every maximal matching is maximum. Finding a maximal matching is computationally simple (iterative addition), whereas finding or proving a maximum matching is a more complex global problem.

---

## 2. Bipartite and Weighted Matchings

Many matching problems are naturally **bipartite**, meaning the vertices can be split into two disjoint sets (e.g., tasks and servers, or applicants and hospitals) where edges only connect vertices from opposite sets.

### Applications
*   **Online Dating:** Matching users for parallel dates without overlaps.
*   **Task Allocation:** Assigning expensive computational tasks to servers where each server can only handle one job at a time.
*   **Residency Matching:** The National Resident Matching Program uses these algorithms to match medical students to hospital residencies.

### Weighted Matchings
In many scenarios, edges are assigned weights (numerical values representing time, cost, or desirability). The goal often shifts from finding any perfect matching to finding a **min-weight perfect matching** to optimize for efficiency or total cost. Unlike some graph problems (like graph coloring), matching problems—including maximum and min-weight variations—have efficient, fast algorithms.

---

## 3. The Stable Matching Problem

The stable matching problem introduces preference lists. In a bipartite graph with $n$ applicants and $n$ evaluators, each participant provides a full, strictly ranked list of their preferences for the opposite side.

### The "Rogue Pair" and Stability
The objective is to find a perfect matching that is **stable**.
*   **Rogue Pair:** A pair $(A, E)$ forms a rogue pair if applicant $A$ and evaluator $E$ are not matched to each other, but $A$ prefers $E$ over their assigned partner, AND $E$ prefers $A$ over their assigned partner.
*   **Stable Matching:** A perfect matching that contains zero rogue pairs. In this state, no two individuals have a mutual incentive to "run away" from their assigned matches.

---

## 4. The Gale-Shapley Algorithm

Invented in 1962 by Gale and Shapley (and later improved by Al Roth), this algorithm guarantees a stable matching in bipartite graphs.

### The Procedure
The algorithm operates in a series of "days" or rounds:
1.  **Step 1 (Application):** Every applicant approaches their favorite evaluator who has not yet rejected them.
2.  **Step 2 (Rejection):** Every evaluator looks at all applicants who approached them that day. They "hold" their favorite and reject all others.
3.  **Termination:** The process repeats until no further rejections occur.

### Mathematical Invariants and Proofs
The algorithm is modeled as a state machine with the following properties:
*   **Termination:** Because there are only $n^2$ possible rejections and at least one rejection (or the end of the algorithm) occurs each day, the machine must terminate within $n^2$ steps.
*   **Applicants' Prospects:** Only ever stay the same or get **worse** (they move down their preference list).
*   **Evaluators' Prospects:** Only ever stay the same or get **better** (they trade up to more preferred applicants as they become available).
*   **Persistence:** Once an evaluator has a candidate, they will always have a candidate from that point forward, and that candidate will be at least as good as the current one.

### Perfect Matching Guarantee
The document proves via contradiction that the algorithm always results in a perfect matching. If an applicant were left unmatched, they would have been rejected by all $n$ evaluators. This would imply all $n$ evaluators have partners they prefer over the unmatched applicant. However, if there is an unmatched applicant, there are only $n-1$ other applicants available to be partners, creating a contradiction.

---

## 5. Optimality and Fairness

The Gale-Shapley algorithm is not neutral in its distribution of "happiness." The outcome depends entirely on which side is the "proposer" (the applicant).

### Applicant-Optimal vs. Evaluator-Pessimal
*   **Feasible Partner:** A partner $P$ is feasible for $X$ if there exists *any* stable matching where $X$ and $P$ are paired.
*   **Applicant-Optimality:** The algorithm pairs every applicant with their **most preferred feasible partner**. 
*   **Evaluator-Pessimality:** The algorithm pairs every evaluator with their **least preferred feasible partner**.

> "It's best for all of the applicants at the same time, and, simultaneously, worst for all of the evaluators at the same time. This single matching that Gale-Shapley returns has all of these properties in it."

Consequently, running the algorithm in reverse (swapping the roles of applicants and evaluators) will typically yield a different stable matching that favors the original evaluators. If only one stable matching exists for a graph, both versions will produce the same result; if multiple exist, the "best" and "worst" outcomes will diverge.