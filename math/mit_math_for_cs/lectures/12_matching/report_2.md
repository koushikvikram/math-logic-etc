# Study Guide: Graph Theory, Matchings, and the Gale-Shapley Algorithm

This study guide provides a comprehensive overview of Graph Theory concepts related to matchings, focusing on the distinction between various types of matchings and the mathematical underpinnings of the Gale-Shapley algorithm for stable matchings.

---

## Part 1: Review Quiz

**Instructions:** Answer the following questions in 2–3 sentences based on the provided source material.

1.  **How is a "matching" defined in the context of graph theory?**
    A matching is a subgraph or a subset of edges where every vertex in the graph has a degree of at most one. Essentially, it is a selection of edges such that no two edges share a common endpoint.

2.  **What is the distinction between a "maximal" matching and a "maximum" matching?**
    A maximal matching is a local property where no additional edges can be added to the matching without sharing an endpoint with an existing edge. In contrast, a maximum matching is a global property representing the largest possible matching size achievable across the entire graph, regardless of the specific edges chosen.

3.  **What criteria must be met for a "perfect matching" to exist in a bipartite graph?**
    For a perfect matching to exist, the graph must contain enough edges to pair every single vertex with exactly one partner. In a bipartite graph, a necessary condition is that both sets of vertices must be of equal size, as each edge connects one vertex from each side.

4.  **How are weighted edges utilized in matching problems?**
    Weighted edges involve assigning a numerical value to each edge, representing metrics such as the time, cost, or desirability of a specific pairing. Algorithms can then be used to optimize the matching, such as finding a perfect matching with the minimum total weight.

5.  **What defines a "rogue pair" in a perfect matching?**
    A rogue pair consists of an applicant and an evaluator who are not matched with each other but would both prefer to be together over their currently assigned partners. If such a pair exists, the matching is considered unstable.

6.  **Does a stable matching always exist in non-bipartite graphs?**
    No, stable matchings are not guaranteed in non-bipartite graphs, as certain preference configurations among an even number of people can lead to a cycle of rogue pairs where no stable arrangement is possible. However, they are guaranteed to exist in bipartite graphs.

7.  **Briefly describe the two main steps of the Gale-Shapley algorithm.**
    In the first step, all applicants approach their favorite evaluator who has not yet rejected them. In the second step, each evaluator reviews all applicants who approached them that day, holds onto their most preferred candidate, and rejects all others.

8.  **Why is the Gale-Shapley algorithm guaranteed to terminate?**
    The algorithm terminates because it consumes a limited resource: the total number of possible rejections. Since there are $n$ applicants and $n$ evaluators, there are at most $n^2$ possible rejections, and because at least one rejection occurs every day the algorithm continues, it must stop within $n^2$ days.

9.  **What is the "applicant-optimal" property of the Gale-Shapley algorithm?**
    The algorithm is applicant-optimal because it pairs every applicant with their most preferred feasible partner—the best partner they could possibly have in any stable matching. This occurs because applicants start at the top of their lists and only move down when forced by a rejection.

10. **How do the prospects of applicants and evaluators change throughout the execution of the algorithm?**
    Applicants' prospects only stay the same or get worse over time because they move down their preference lists following rejections. Conversely, evaluators' prospects only stay the same or get better because they only trade their current candidate for someone they prefer more.

---

## Part 2: Answer Key

1.  A matching is a subset of edges where no two edges share an endpoint. This ensures every vertex has a degree of 0 or 1 within the selected edges.
2.  Maximal is a local "stuck" point where you can't add more edges to the current set. Maximum is the absolute largest matching possible in the graph.
3.  Every vertex must be included in the matching, meaning everyone has exactly one partner. For bipartite graphs, this requires the two sets of vertices to be equal in size.
4.  Weights represent costs or values (like task duration) assigned to pairings. The goal is often to find a matching that optimizes the sum of these weights, such as a min-weight perfect matching.
5.  A rogue pair occurs when an applicant and evaluator prefer each other over their current matches. This "rogue" behavior makes the matching unstable because the pair would "run away" together.
6.  The transcript provides a non-bipartite example with four people where every possible matching results in a rogue pair. This demonstrates that stability is a specific property of bipartite matchings in this context.
7.  Applicants apply to their top remaining choice each day. Evaluators reject all but their single favorite among those who applied to them.
8.  Each step where the algorithm doesn't end must include at least one rejection. With a finite number of possible applicant-evaluator pairings ($n^2$), the rejections must eventually cease.
9.  It means that among all possible stable matchings that could exist, the Gale-Shapley algorithm finds the one that gives every applicant their highest-ranked possible partner.
10. Applicants move from their favorite choices toward their least favorite as they are rejected. Evaluators start with no one and only "trade up" for better candidates as the algorithm progresses.

---

## Part 3: Essay Questions

1.  **The Geometry of Matching:** Compare and contrast the local search nature of finding a maximal matching with the global requirements of finding a maximum matching. Why is the latter significantly more difficult to prove or calculate?
2.  **Stability vs. Optimization:** Discuss the concept of a stable matching in bipartite graphs. Why might a stable matching be more desirable in a real-world scenario (like medical residencies) than a matching that simply maximizes the number of pairs or minimizes total weight?
3.  **The Asymmetry of the Gale-Shapley Algorithm:** Analyze the "applicant-optimal" and "evaluator-pessimal" nature of the Gale-Shapley algorithm. If you were participating in this process, which role would you prefer to take and why, based on the mathematical invariants discussed?
4.  **Bipartite Limitations:** Explain why the Gale-Shapley algorithm requires a bipartite graph to guarantee a stable matching. Use the example of the "non-bipartite" four-person ranking to illustrate how stability can fail when the bipartite constraint is removed.
5.  **Invariants and Termination:** Describe the state-machine approach to the Gale-Shapley algorithm. How do the invariants regarding "prefixes of preference lists" and "evaluator trade-ups" provide a rigorous proof that the algorithm will always result in a perfect, stable matching?

---

## Part 4: Glossary of Key Terms

| Term | Definition |
| :--- | :--- |
| **Matching** | A subgraph or subset of edges where no two edges share a vertex; every vertex has a degree $\le 1$. |
| **Maximal Matching** | A matching where it is impossible to add any more edges from the graph without violating the matching definition. |
| **Maximum Matching** | The matching(s) with the largest possible number of edges for a given graph. |
| **Perfect Matching** | A matching that covers every vertex in the graph, giving every vertex exactly one partner. |
| **Bipartite Graph** | A graph where vertices can be divided into two disjoint sets such that every edge connects a vertex from one set to a vertex in the other. |
| **Weighted Matching** | A matching where edges have associated real numbers (weights), often used to find a matching with the minimum or maximum total weight. |
| **Stable Matching** | A perfect matching that contains no rogue pairs. |
| **Rogue Pair** | An applicant and an evaluator who both prefer each other over their assigned partners in a given matching. |
| **Gale-Shapley Algorithm** | An iterative algorithm where applicants propose to evaluators, guaranteed to produce a stable matching in bipartite graphs. |
| **Feasible Partner** | A partner $E$ is feasible for applicant $A$ if there exists at least one stable matching where $A$ and $E$ are paired. |
| **Applicant-Optimal** | A property of a matching where every applicant receives their highest-ranked feasible partner. |
| **Evaluator-Pessimal** | A property of a matching where every evaluator receives their lowest-ranked feasible partner. |