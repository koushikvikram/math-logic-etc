# Graph Theory: Connectivity, Eulerian Paths, and Trees

## Executive Summary

This briefing document provides a detailed synthesis of fundamental graph theory concepts, focusing on undirected graphs, connectivity, Eulerian walks, and the mathematical properties of trees. The analysis is derived from MIT’s 6.1200 lecture series and outlines the structural rules governing movement and relationships within graphs.

**Critical Takeaways:**
*   **Connectivity Equivalence:** A walk exists between two vertices if and only if a path exists between them. Connectivity is a robust relation characterized by reflexivity, symmetry, and transitivity.
*   **Eulerian Conditions:** A connected graph contains an Euler tour (a closed walk visiting every edge once) if and only if every vertex has an even degree. If exactly two vertices have an odd degree, the graph contains an open Euler walk.
*   **Tree Fundamentals:** Trees are defined as connected, acyclic graphs. A defining property of any tree with $n$ vertices is that it must possess exactly $n-1$ edges.
*   **Inductive Methodology:** The "Leaf Lemma" and tree-pruning techniques provide a reliable framework for proving graph properties through induction.

---

## Fundamentals of Graph Movement

In the study of simple undirected graphs, movement is defined by sequences of vertices and edges. A graph consists of a set of vertices ($V$) and a set of edges ($E$), where edges are distinct pairs of vertices.

### Walks vs. Paths
The distinction between a "walk" and a "path" is foundational to graph analysis.

| Feature | Walk | Path |
| :--- | :--- | :--- |
| **Definition** | A finite sequence of vertices where each consecutive pair is an edge. | A special kind of walk with no repeated vertices or edges. |
| **Repetition** | Vertices and edges can be visited multiple times. | No repetitions allowed (strict). |
| **Length ($k$)** | The number of edges in the sequence. | The number of edges in the sequence. |
| **Minimum Length** | Can be length 0 (a single vertex). | Can be length 0. |

**The Connectivity Theorem:** There exists a walk from vertex $u$ to vertex $v$ if and only if there exists a path from $u$ to $v$. This is proven by considering the "shortest walk" between two points; if a vertex were repeated, the walk could be shortened, contradicting its status as the shortest.

---

## Connectivity and Components

Two vertices are considered **connected** if there is a walk between them. In undirected graphs, this relation is inherently symmetric: if $u$ is connected to $v$, then $v$ is connected to $u$.

### Properties of Connectivity
Connectivity is an equivalence relation governed by three properties:
1.  **Reflexivity:** Every vertex is connected to itself via a length-zero walk.
2.  **Symmetry:** If a walk exists from $u$ to $v$, the reverse sequence is a valid walk from $v$ to $u$.
3.  **Transitivity:** If $u$ is connected to $v$ and $v$ is connected to $w$, the walks can be concatenated to prove $u$ is connected to $w$.

### Connected Components
A graph that is not "pairwise connected" (where every vertex can reach every other vertex) is partitioned into **connected components**. 
*   **Definition:** A connected component is an **induced subgraph** consisting of a vertex $v$ and all vertices connected to it.
*   **Induced Subgraph:** A subset of vertices and all edges from the original graph that connect those specific vertices.
*   **Partitioning:** Every vertex and edge in a graph belongs to exactly one connected component.

---

## Cycles and Eulerian Walks

### Closed Walks and Cycles
*   **Closed Walk:** A walk where the starting vertex ($v_0$) is the same as the ending vertex ($v_k$).
*   **Cycle:** A closed walk of length greater than zero with no repeated vertices or edges, except for the start and end vertex. In undirected graphs, a cycle must have a minimum length of three.

### Eulerian Theorems
Named after Leonhard Euler, these concepts involve visiting every edge in a graph exactly once.

*   **Euler Tour:** A closed walk that visits every edge in the graph exactly once. 
    *   *Requirement:* A graph has an Euler tour if and only if it is connected and every vertex has an **even degree**.
    *   *Logic:* For every visit to a vertex, the walk must "enter" via one edge and "exit" via another, consuming edges in pairs.
*   **Open Euler Walk:** A walk that visits every edge once but starts and ends at different vertices.
    *   *Requirement:* A graph has an open Euler walk if and only if it is connected and exactly **two vertices have an odd degree**. These two vertices serve as the start and end points.

---

## Mathematical Properties of Trees

A **tree** is a graph that is both connected and acyclic (contains no cycles). A collection of disconnected trees is referred to as a **forest**.

### The Leaf Lemma and Pruning
A **leaf** is defined as a vertex with a degree of 1.
*   **Leaf Lemma:** Every tree with at least two vertices must have at least two leaves. This is identified by looking at the endpoints of the longest path in the tree.
*   **Tree-Pruning:** Removing a leaf and its incident edge from a tree $T$ results in a new graph $T'$ that remains a tree. This allows for complex properties to be proven using induction.

### Size and Edges
A central theorem in graph theory states that any tree with $n$ vertices has exactly $n-1$ edges.

**Inductive Proof Summary:**
1.  **Base Case ($n=1$):** A single vertex has 0 edges ($1-1=0$).
2.  **Inductive Step:** Assume a tree with $n-1$ vertices has $n-2$ edges. For a tree with $n$ vertices, prune one leaf. The resulting tree has $n-1$ vertices and (by hypothesis) $n-2$ edges. Adding the leaf back adds exactly one vertex and one edge, resulting in $n$ vertices and $n-1$ edges.

### Other Tree Characteristics
*   **Uniqueness:** There is a unique path between any two vertices in a tree.
*   **Optimality:** Trees are the minimal connected graphs and the maximal acyclic graphs. Adding an edge to a tree necessarily creates a cycle; removing an edge necessarily disconnects the graph.