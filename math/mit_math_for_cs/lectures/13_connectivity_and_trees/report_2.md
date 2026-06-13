# Study Guide: Connectivity and Trees in Graph Theory

This study guide provides a comprehensive review of fundamental concepts in undirected graph theory, focusing on connectivity, Eulerian walks, and the mathematical properties of trees.

---

## Part 1: Short-Answer Quiz

**Instructions:** Answer the following questions in 2–3 sentences based on the principles discussed in the source text.

1.  **Define a "simple undirected graph" and its core components.**
2.  **What is the distinction between a "walk" and a "path" in graph theory?**
3.  **How is the length of a walk calculated, and can a walk have a length of zero?**
4.  **Explain the three properties that characterize connectivity as a relation (Reflexivity, Symmetry, and Transitivity).**
5.  **What is an "induced subgraph," and how is it used to define a connected component?**
6.  **What specific conditions must be met for a graph to contain an Euler Tour?**
7.  **How does an "open Euler walk" differ from an Euler Tour regarding vertex degrees?**
8.  **Define a "tree" and explain the relationship between a tree and a "forest."**
9.  **State the "Leaf Lemma" and identify which type of tree is excluded from this rule.**
10. **According to the theorem regarding tree size, what is the relationship between the number of vertices ($n$) and the number of edges in a tree?**

---

## Part 2: Quiz Answer Key

1.  **Definition:** A simple undirected graph consists of a set of vertices ($V$) and a set of edges ($E$), where edges are sets of two distinct vertices. Because it is undirected, the order of vertices in an edge does not matter, meaning a transition from $u$ to $v$ is identical to a transition from $v$ to $u$.
2.  **Walk vs. Path:** A walk is a general sequence of vertices where each consecutive pair is an edge, allowing for repeated vertices or edges. A path is a specific type of walk that forbids the repetition of any vertices or edges.
3.  **Walk Length:** The length of a walk is equal to the number of edges ($k$) in the sequence, which is one fewer than the number of vertices. A walk of length zero is possible and consists of a single vertex where no movement occurs.
4.  **Connectivity Properties:** Connectivity is reflexive because every vertex has a zero-length walk to itself; it is symmetric because an undirected edge can be traversed in either direction; and it is transitive because if $u$ is connected to $v$ and $v$ to $w$, the walks can be concatenated to connect $u$ to $w$.
5.  **Induced Subgraphs:** An induced subgraph is defined by a subset of vertices and includes every edge from the original graph that connects two vertices within that subset. A connected component is an induced subgraph where every vertex in the set is connected to a specific vertex $v$, effectively partitioning the graph into mutually reachable regions.
6.  **Euler Tour Conditions:** For a graph to have an Euler Tour (a closed walk visiting every edge exactly once), it must be connected and every vertex must have an even degree. This is because every time the tour enters a vertex, it must also exit it, utilizing two incident edges per visit.
7.  **Open Euler Walk vs. Tour:** While an Euler Tour requires all vertices to have even degrees, an open Euler walk (which starts and ends at different vertices) requires exactly two vertices to have an odd degree. These two odd-degree vertices serve as the unique starting and ending points of the walk.
8.  **Trees and Forests:** A tree is an undirected graph that is both connected and acyclic (contains no cycles). A forest is a collection of one or more trees, meaning it is acyclic but not necessarily connected as a whole.
9.  **Leaf Lemma:** The Leaf Lemma states that every tree with at least two vertices must have at least two leaves (vertices of degree 1). A tree consisting of only a single vertex is the exception to this rule, as it has a degree of 0.
10. **Tree Size Theorem:** Any tree with $n$ vertices always contains exactly $n - 1$ edges. This property can be proven by induction, utilizing the fact that removing a leaf and its incident edge from a tree results in a smaller tree with $n - 1$ vertices and $n - 2$ edges.

---

## Part 3: Essay Questions

**Instructions:** Use the provided source context to draft detailed responses to the following prompts.

1.  **The Evolution of Graph Theory:** Describe the historical origins of graph theory involving Leonhard Euler and the bridges of Königsberg. Explain how Euler’s analysis of this real-world topology led to the characterization of Euler walks and tours.
2.  **Connectivity in Problem-Solving:** Discuss how graph connectivity applies to state machines and puzzles, such as the 8-puzzle or Rubik's Cube. How does the concept of connected components explain why certain puzzle configurations are unreachable from others?
3.  **Proof by Contradiction in Graphs:** Analyze the proof provided in the text that a shortest walk between two vertices must be a path. Explain how the assumption of a repeated vertex leads to a logical contradiction regarding the walk's length.
4.  **The Logic of Even Degrees:** Provide a detailed explanation of the "what goes in must come out" principle. Why is it mathematically necessary for all vertices to have even degrees for an Euler Tour to exist, and how does the proof address the start and end vertex (v0 and vk)?
5.  **The Utility of Tree Pruning:** Explain the process and mathematical significance of "pruning" a leaf from a tree. How does this operation facilitate proofs by induction, particularly regarding the theorem that a tree with $n$ vertices has $n - 1$ edges?

---

## Part 4: Glossary of Key Terms

| Term | Definition |
| :--- | :--- |
| **Acyclic** | A property of a graph meaning it contains no cycles. |
| **Closed Walk** | A walk that begins and ends at the same vertex ($v_0 = v_k$). |
| **Connected Graph** | A graph where a walk exists between every pair of vertices. |
| **Connected Component** | A mutually reachable region of a graph; an induced subgraph consisting of all vertices connected to a given vertex. |
| **Cycle** | A closed walk of length greater than zero with no repeated vertices or edges, other than the start and end vertex. |
| **Degree** | The number of edges incident to a specific vertex. |
| **Euler Tour** | A closed walk that visits every edge in a graph exactly once. |
| **Euler Walk** | A walk that visits every edge in a graph exactly once. |
| **Forest** | A graph where every connected component is a tree; an acyclic graph. |
| **Induced Subgraph** | A subset of a graph’s vertices together with all edges from the original graph that connect those vertices. |
| **Leaf** | A vertex in a graph with a degree of 1. |
| **Path** | A walk that does not repeat any vertices or edges. |
| **Simple Undirected Graph** | A set of vertices and edges where each edge is a set of two distinct vertices and transitions are bidirectional. |
| **Trail** | A walk that contains no repeated edges. |
| **Tree** | A connected, acyclic, simple undirected graph. |
| **Walk** | A finite sequence of vertices where each consecutive pair is connected by an edge. |