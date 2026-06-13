# Analysis of Directed Graphs and Directed Acyclic Graphs (DAGs)

## Executive Summary

This briefing document provides a comprehensive analysis of directed graphs (digraphs) and directed acyclic graphs (DAGs) based on structural and algorithmic principles. Unlike simple undirected graphs, digraphs utilize ordered pairs of vertices to model one-way relationships, such as network flows or precedence constraints. 

The analysis identifies several critical takeaways:
*   **Structural Divergence:** The introduction of edge directionality necessitates new definitions for vertex degrees (in-degree vs. out-degree) and connectivity. The traditional Handshaking Lemma is refined, stating that the sum of in-degrees equals the sum of out-degrees, both totaling the number of edges.
*   **Connectivity and Condensation:** Connectivity in digraphs is defined through "strong connectivity"—mutual reachability between vertices. Every digraph can be partitioned into Strongly Connected Components (SCCs), which can be further simplified into a "condensation graph." A condensation graph is always acyclic.
*   **The Utility of DAGs:** Directed Acyclic Graphs are essential for modeling precedence constraints. Every DAG is guaranteed to have at least one source (in-degree 0) and one sink (out-degree 0), ensuring that a topological ordering—a valid sequence of execution—always exists.
*   **Scheduling and Parallelism:** In a parallel execution environment with unlimited processors, the minimum time (span) required to complete a set of tasks is exactly equal to the number of vertices in the longest path of the DAG.
*   **Duality of Chains and Anti-chains:** The document explores the relationship between comparable (chain) and incomparable (anti-chain) vertices. A significant finding is that the minimum number of anti-chains needed to cover a graph equals the size of its longest chain, a principle applied in practical software like calendar scheduling.

---

## 1. Fundamentals of Directed Graphs (Digraphs)

Directed graphs differ from undirected graphs primarily in the nature of their edges. In a digraph, edges are ordered pairs of vertices, meaning the connection has a specific direction.

### 1.1 Edge Properties and Definitions
*   **Ordered Pairs:** An edge $(u, v)$ is distinct from $(v, u)$. The direction must be respected when traversing the graph.
*   **Self-Loops:** Unlike simple undirected graphs, digraphs allow for self-loops (an edge from a vertex to itself).
*   **Opposing Edges:** While a set of edges cannot contain duplicate directed edges in the same direction, a digraph can have two edges connecting the same two vertices if they go in opposite directions.

### 1.2 Degrees and the Handshaking Lemma
In digraphs, the concept of a vertex "degree" is split into two distinct metrics:
1.  **In-degree:** The number of edges coming into a vertex.
2.  **Out-degree:** The number of edges going out of a vertex.

**The Directed Handshaking Lemma:** Because every directed edge contributes exactly one to the out-degree of its start vertex and exactly one to the in-degree of its end vertex, the following equality holds:
$$\sum \text{In-degrees} = \sum \text{Out-degrees} = |E| \text{ (Total Edges)}$$

---

## 2. Connectivity and Reachability

Reachability in digraphs is non-symmetric. The existence of a path from vertex $u$ to $v$ does not guarantee a path from $v$ to $u$.

### 2.1 Walks, Paths, and Cycles
*   **Walks:** A sequence of vertices connected by directed edges.
*   **Paths:** A walk with no repeated vertices or edges. In digraphs, reachability can be established via either a walk or a path; if a walk exists, a shortest path must also exist.
*   **Cycles:** A closed walk where the start and end vertices are the same. In digraphs, cycles can be as short as length 1 (a loop) or length 2 (two vertices with opposing edges).

### 2.2 Strong Connectivity and SCCs
A graph is **strongly connected** if every vertex can reach every other vertex. 
*   **Strongly Connected Component (SCC):** A maximal subgraph where all vertices are mutually reachable. 
*   **Partitioning:** Every vertex in a digraph belongs to exactly one SCC. While vertices are partitioned, edges may exist between different SCCs.
*   **Euler Tours:** A digraph contains an Euler tour (a closed walk visiting every edge exactly once) if and only if the graph is strongly connected and every vertex has an in-degree equal to its out-degree.

### 2.3 Condensation Graphs
The condensation graph $H$ of a graph $G$ is formed by treating each SCC as a single vertex. 
*   An edge exists from SCC $A$ to SCC $B$ in the condensation graph if there is at least one edge in the original graph from a vertex in $A$ to a vertex in $B$.
*   **Acyclic Property:** A condensation graph is always a Directed Acyclic Graph (DAG). If a cycle existed between SCCs, they would, by definition, be part of the same SCC.

---

## 3. Directed Acyclic Graphs (DAGs)

DAGs are a subset of digraphs that contain no cycles. They serve as the directed analog to forests in undirected graph theory.

### 3.1 Sources and Sinks
*   **Source:** A vertex with an in-degree of 0.
*   **Sink:** A vertex with an out-degree of 0.
*   **The Existence Lemma:** Every non-empty DAG is guaranteed to have at least one source and at least one sink. This is proven by following a longest path; the start of the path must be a source and the end must be a sink, otherwise, the path could be extended or a cycle would be formed.

### 3.2 Topological Ordering
A topological order is a linear sequence of all vertices in a DAG such that for every directed edge $(u, v)$, $u$ comes before $v$ in the sequence. 
*   **Existence:** A topological order exists if and only if the graph is acyclic.
*   **Construction:** One method to find a topological order is to repeatedly identify a source, add it to the sequence, and remove it from the graph until no vertices remain.

---

## 4. Scheduling and Parallel Execution

DAGs are frequently used to model precedence constraints in task management. If tasks are represented as vertices and dependencies as directed edges, the graph dictates the valid execution order.

### 4.1 Parallel Task Scheduling
When multiple processors are available, tasks that do not have a precedence relationship can be executed simultaneously.
*   **Span:** The number of time steps required to finish all tasks in a schedule.
*   **The Scheduling Theorem:** The minimum span of any schedule is equal to the number of vertices in the longest path in the DAG.

### 4.2 Depth-Based Scheduling Algorithm
An optimal schedule can be determined by assigning each vertex a "depth."
*   **Depth Calculation:** The depth of a vertex $v$ is the length of the longest path ending at $v$.
*   **Validation:** If $u$ can reach $v$, the depth of $v$ must be strictly greater than the depth of $u$. This ensures that all tasks at a specific depth can be executed in parallel at that time step.

---

## 5. Dualities: Chains and Anti-chains

The study of DAGs involves the relationship between comparable and incomparable vertices.

| Term | Definition | Relation to DAGs |
| :--- | :--- | :--- |
| **Comparable** | $u$ and $v$ are comparable if there is a path from $u$ to $v$ or $v$ to $u$. | Vertices in a path are comparable. |
| **Incomparable**| No path exists between $u$ and $v$ in either direction. | Parallel tasks are incomparable. |
| **Chain** | A set of vertices that are pairwise comparable. | A subset of a path. |
| **Anti-chain** | A set of vertices that are pairwise incomparable. | Tasks that can be performed at the same time. |

### 5.1 Partitioning Theorems
*   **Anti-chain Partitioning:** The minimum number of anti-chains needed to cover all vertices in a graph equals the number of vertices in the longest chain (the longest path).
*   **Chain Partitioning:** Conversely, the minimum number of chains needed to cover the graph equals the size of the largest anti-chain.

### 5.2 Practical Application: Calendar Displays
In digital calendars, events that overlap in time are "incomparable" (they cannot be placed in the same chronological sequence). To display these events without overlap, they must be partitioned into columns (chains). The minimum number of columns required to display a day's schedule is equal to the size of the largest set of mutually conflicting events (the largest anti-chain).