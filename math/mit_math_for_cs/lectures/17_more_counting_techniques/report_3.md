# Advanced Counting Techniques: Inclusion-Exclusion, Pigeonhole Principle, and Double Counting

## Executive Summary
This briefing document synthesizes the core mathematical frameworks for counting as presented in the MIT OpenCourseWare lecture "More Counting Techniques." The analysis focuses on three primary methodologies: the **Principle of Inclusion-Exclusion (PIE)** for counting overlapping sets, the **Pigeonhole Principle** for proving existence and collisions within data, and **Combinatorial Proofs** (or double counting) for establishing algebraic identities. Key takeaways include:

*   **PIE** provides a systematic way to calculate the union of non-disjoint sets by alternating between adding and subtracting intersections to correct for over-counting.
*   The **Pigeonhole Principle** serves as a non-constructive proof of existence, showing that when "pigeons" exceed "pigeonholes," collisions are mathematically inevitable.
*   **Double Counting** is a powerful proof technique that validates mathematical identities by showing that two different expressions count the same set of objects.
*   **Binomial and Multinomial Theorems** formalize the relationship between algebraic expansions and combinatorial selections.

---

## The Principle of Inclusion-Exclusion (PIE)

The Principle of Inclusion-Exclusion is a counting technique used when sets are not disjoint. It accounts for the overlap (intersections) between sets to prevent multiple counting of the same elements.

### Basic Framework
For two sets, $A$ and $B$, the size of their union is the sum of the individual sets minus the size of their intersection:
$$|A \cup B| = |A| + |B| - |A \cap B|$$

For three sets ($A, B, \text{ and } C$), the calculation requires further refinement because the pairwise intersections themselves overlap:
1.  **Add** the sizes of individual sets: $|A| + |B| + |C|$
2.  **Subtract** the sizes of pairwise intersections: $- (|A \cap B| + |A \cap C| + |B \cap C|)$
3.  **Add back** the three-way intersection: $+ |A \cap B \cap C|$

### The General Formula
For $n$ sets ($A_1, A_2, \dots, A_n$), the size of the union is found by adding the sizes of individual sets, subtracting the sizes of all pairwise intersections, adding three-way intersections, and continuing this alternating pattern. The sign of the final $n$-way intersection term depends on the parity of $n$.

### Application: Euler’s Totient Function
A practical application of PIE is determining how many numbers $k$ in the range from 1 to $n$ are coprime with $n$. By identifying the prime factors of $n$ (e.g., $p, q, r$), one can define sets of numbers that share those factors. PIE allows for the calculation of the union of these sets; subtracting this union from the total $n$ reveals the count of coprime numbers.

---

## The Pigeonhole Principle

The Pigeonhole Principle (PHP) states that if more items (pigeons) are placed into containers (pigeonholes) than there are containers, at least one container must hold more than one item.

### Formal and Generalized Definitions
*   **Standard PHP:** If the size of set $A$ (pigeons) is greater than the size of set $B$ (pigeonholes), and $f: A \to B$ is a total function, then $f$ cannot be injective (at least two elements in $A$ must map to the same element in $B$).
*   **Generalized PHP:** If $|A| > k|B|$, there must be at least a $(k+1)$-way collision. This means at least one pigeonhole contains at least $k+1$ pigeons.

### Illustrative Examples
| Example | Pigeons ($A$) | Pigeonholes ($B$) | Conclusion |
| :--- | :--- | :--- | :--- |
| **Student Initials** | 27+ Students | 26 Letters | At least 2 students share a first initial. |
| **Socks** | $n+1$ Socks | $n$ Colors | Guaranteed to have at least one matching pair. |
| **Boston Hair Count** | 650,000 People | 200,000 Hair possibilities | At least 4 people must have the same number of hairs (since $650,000 > 3 \times 200,000$). |

### Advanced Application: Rooks on a Chessboard
To prove that 33 rooks placed on an $8 \times 8$ chessboard must contain a set of five rooks that do not attack each other, the board is subdivided into 8 "pigeonholes" consisting of offset diagonals. 
*   Each pigeonhole contains 8 squares that share no rows or columns.
*   Because $33 > 4 \times 8$, the generalized PHP guarantees that at least one of these 8 diagonal sets must contain 5 rooks. 
*   Since these 5 rooks are in a diagonal set, they occupy distinct rows and files and thus do not attack one another.

---

## Combinatorial Proofs and Double Counting

Combinatorial proofs establish that two mathematical expressions are equal by showing they both count the same set in different ways.

### Identities Proven via Double Counting
1.  **Sum of Binomial Coefficients:** $\sum_{k=0}^n \binom{n}{k} = 2^n$
    *   **Method 1:** There are $2^n$ binary sequences of length $n$ (product rule).
    *   **Method 2:** Partition the sequences by the number of $1$s they contain ($k$). For any $k$ from 0 to $n$, there are $\binom{n}{k}$ such sequences.
2.  **Pascal’s Identity:** $\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}$
    *   **Counting Set:** Binary sequences of length $n$ with exactly $k$ ones.
    *   **Partitioning:** Look at the last bit. If the last bit is 1, there are $\binom{n-1}{k-1}$ ways to place the remaining ones. If the last bit is 0, there are $\binom{n-1}{k}$ ways to place the $k$ ones in the remaining $n-1$ slots.

### The Binomial and Multinomial Theorems
The **Binomial Theorem** formalizes the expansion of $(x+y)^n$ into a sum of terms $\binom{n}{k} x^k y^{n-k}$. This is derived by viewing the expansion as a sum of $2^n$ terms, each a sequence of $x$s and $y$s, and then grouping like terms based on the number of $x$s selected.

The **Multinomial Theorem** generalizes this to $m$ variables:
$$(x_1 + x_2 + \dots + x_m)^n = \sum_{k_1+k_2+\dots+k_m=n} \binom{n}{k_1, k_2, \dots, k_m} \prod_{i=1}^m x_i^{k_i}$$
The multinomial coefficient is calculated as:
$$\frac{n!}{k_1! k_2! \dots k_m!}$$

---

## Pascal’s Triangle
Pascal's Triangle is a geometric representation of binomial coefficients that visualizes several key identities:
*   **Addition Rule:** Each entry is the sum of the two entries directly above it (Pascal's Identity).
*   **Row Sums:** The sum of all entries in row $n$ is $2^n$.
*   **Symmetry:** $\binom{n}{k} = \binom{n}{n-k}$.
*   **Advanced Properties:** Summing along specific diagonals in the triangle yields the Fibonacci sequence.
*   **Squared Sums:** The sum of the squares of the entries in a row ($\sum \binom{n}{k}^2$) equals the middle entry of the row $2n$ ($\binom{2n}{n}$).