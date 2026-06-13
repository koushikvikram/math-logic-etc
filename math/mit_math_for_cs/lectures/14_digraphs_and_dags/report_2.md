# Study Guide: Digraphs and Directed Acyclic Graphs (DAGs)

This study guide provides a comprehensive overview of directed graphs (digraphs) and directed acyclic graphs (DAGs), based on the analysis of graph theory, connectivity, scheduling, and ordering. It includes a review quiz, essay prompts, and a glossary of key terms.

## Section 1: Review Quiz

**1. How does the definition of an edge in a directed graph differ from that of an undirected graph?**
In an undirected graph, edges are unordered sets of two vertices, whereas in a directed graph (digraph), edges are ordered pairs of vertices. This distinction means that in a digraph, the direction of the connection matters, allowing for one-way relationships and loops that were previously forbidden in simple undirected models.

**2. State the Handshaking Lemma as it applies to directed graphs.**
In a directed graph, the sum of the in-degrees of all vertices is exactly equal to the number of edges, which is also equal to the sum of the out-degrees of all vertices. This is because every directed edge is counted exactly once when summing the "incoming" sides and exactly once when summing the "outgoing" sides of the vertices.

**3. What is the difference between a walk and a path in the context of a directed graph?**
A walk is a sequence of vertices where each consecutive pair corresponds to a directed edge in the graph, requiring one to "respect the arrows." A path is a specific type of walk that contains no repeated vertices or edges, though in directed acyclic graphs (DAGs), the concepts are effectively equivalent because the lack of cycles prevents vertex repetition.

**4. Define "reachability" and explain why it is not a symmetric relation.**
Vertex $v$ is reachable from $u$ if there exists a directed walk from $u$ to $v$. Unlike connectivity in undirected graphs, reachability is not symmetric because the existence of a path from $u$ to $v$ does not guarantee a return path from $v$ to $u$ unless every edge in the graph is doubled in opposite directions.

**5. What are the requirements for a directed graph to contain an Euler tour?**
A directed graph contains an Euler tour—a closed walk that visits every edge exactly once—if and only if the graph is strongly connected and every vertex has an in-degree equal to its out-degree. This follows the logic that for every time a walk enters a vertex, it must also be able to exit it to maintain the tour.

**6. What is a Strongly Connected Component (SCC)?**
A Strongly Connected Component is a maximal subgraph induced by a set of vertices where every vertex in the set is mutually reachable from every other vertex. While vertices are partitioned into exactly one SCC, the graph as a whole may have directed edges that connect different components.

**7. Describe the structure and purpose of a condensation graph.**
A condensation graph represents the high-level reachability of a graph by contracting each Strongly Connected Component into a single vertex. The resulting structure is always a directed acyclic graph (DAG) because any cycle between components would imply they should have been merged into a single SCC.

**8. Explain the Lemma regarding sources and sinks in a DAG.**
Every Directed Acyclic Graph (DAG) with at least one vertex must contain at least one source (a vertex with an in-degree of 0) and at least one sink (a vertex with an out-degree of 0). This is proven by considering the longest path in the graph; the start of such a path cannot have incoming edges, and the end cannot have outgoing edges, or the path would not be the longest.

**9. What is a topological ordering, and when does it exist?**
A topological ordering is a sequence of all vertices in a graph such that for every directed edge from $u$ to $v$, $u$ appears before $v$ in the sequence. Such an ordering exists if and only if the graph is acyclic, as cycles create precedence constraints that cannot be satisfied in a linear sequence.

**10. How is the minimum span of a parallel schedule determined?**
The minimum span, or the minimum number of time steps required to execute all tasks in a precedence graph, is equal to the number of vertices in the longest path of that graph. This assumes an unlimited number of processors, where the "depth" of each vertex (the length of the longest path ending at that vertex) determines its earliest possible execution time.

## Section 2: Essay Questions

1. **The Evolution of Graph Definitions:** Discuss the transition from simple undirected graphs to directed graphs. How do the changes in edge definition (ordered pairs vs. unordered sets) impact the fundamental properties of degrees, cycles, and connectivity?
2. **The Logic of Topological Sorting:** Provide a detailed explanation of the inductive proof used to show that every DAG has a topological ordering. Why is the existence of a "source" vertex critical to this proof, and how does removing a source facilitate the induction step?
3. **Connectivity and the Condensation Graph:** Explain the hierarchy of connectivity in directed graphs. Start with reachability, move to strong connectivity, and conclude with how the condensation graph simplifies complex digraphs into acyclic structures.
4. **Scheduling and Parallelism:** Using the "getting dressed" analogy or a similar set of precedence constraints, analyze how a DAG models task management. Contrast the requirements of a single-processor topological order with the "depth" algorithm used for multi-processor parallel scheduling.
5. **Chains, Anti-chains, and Duality:** Define the concepts of comparable and incomparable vertices. Explain the dual relationship between the size of the longest chain and the minimum number of anti-chains needed to cover a graph, and provide a real-world application of this duality (e.g., calendar scheduling).

## Section 3: Glossary of Key Terms

| Term | Definition |
| :--- | :--- |
| **Anti-chain** | A set of vertices in a graph that are pairwise incomparable (no reachability exists between any two). |
| **Chain** | A set of vertices in a graph that are pairwise comparable (there is a reachability relation between any two). |
| **Comparable** | Two vertices $u$ and $v$ are comparable if $u$ can reach $v$ or $v$ can reach $u$. |
| **Condensation Graph** | A graph formed by contracting each strongly connected component of a digraph into a single vertex; the resulting graph is always a DAG. |
| **DAG** | Directed Acyclic Graph; a directed graph that contains no cycles. |
| **Depth (of a vertex)** | The length of the longest path ending at a specific vertex $v$; used to determine scheduling times. |
| **Digraph** | Short for "directed graph," a graph where edges have a specific direction and are defined as ordered pairs. |
| **In-degree** | The number of directed edges coming into a vertex. |
| **Out-degree** | The number of directed edges going out of a vertex. |
| **Reachability** | The property where a vertex $v$ can be accessed from $u$ through a sequence of directed edges. |
| **Schedule** | An assignment of execution times to vertices such that if $u$ can reach $v$, the time for $u$ is strictly less than the time for $v$. |
| **Sink** | A vertex with an out-degree of 0. |
| **Source** | A vertex with an in-degree of 0. |
| **Span** | The number of distinct time units used in a schedule; a measure of total execution time. |
| **Strongly Connected** | A property of a directed graph where every vertex is reachable from every other vertex. |
| **Topological Ordering** | A linear ordering of vertices in a DAG such that for every edge $(u, v)$, $u$ comes before $v$. |