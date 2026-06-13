# Advanced Counting Techniques: Inclusion-Exclusion, Pigeonhole Principle, and Combinatorial Proofs

This study guide provides a comprehensive overview of advanced counting methods as presented in the MIT OpenCourseWare lecture "More Counting Techniques." It covers the Principle of Inclusion-Exclusion, the Pigeonhole Principle and its generalized forms, and the methodology of combinatorial proofs through double counting.

## I. The Principle of Inclusion-Exclusion (PIE)

The Principle of Inclusion-Exclusion is a technique used to calculate the size of the union of multiple sets, particularly when those sets are not disjoint (i.e., they share common elements).

### 1. Basic Application: Two and Three Sets
When counting elements in the union of two sets, $A$ and $B$, simply adding the sizes of the individual sets results in "double-counting" any elements present in both. To correct this, the size of the intersection must be subtracted:
$$|A \cup B| = |A| + |B| - |A \cap B|$$

For three sets ($A, B,$ and $C$), the formula becomes more complex because the pairwise intersections themselves overlap. The calculation requires adding the individual sets, subtracting the three possible pairwise intersections, and finally adding back the three-way intersection that was subtracted to a net count of zero:
$$|A \cup B \cup C| = (|A| + |B| + |C|) - (|A \cap B| + |A \cap C| + |B \cap C|) + |A \cap B \cap C|$$

### 2. General Formula and Euler's Totient Function
The principle generalizes to $n$ sets by alternating between adding and subtracting intersections of increasing size. The sign of the final term (the $n$-way intersection) depends on the parity of $n$.

**Application: Coprimality**
PIE can be used to determine how many numbers $k$ in the range $1$ to $n$ are coprime with $n$. If $n$ is the product of three primes ($p, q, r$), the number of coprime integers is found by taking the total $n$ and subtracting the union of sets containing multiples of those primes. This results in the formula:
$$n(1 - 1/p)(1 - 1/q)(1 - 1/r)$$

## II. The Pigeonhole Principle

The Pigeonhole Principle states that if you have more "pigeons" (elements) than "pigeonholes" (available categories), at least one pigeonhole must contain more than one pigeon.

### 1. Formal Definition
If two sets $A$ and $B$ exist such that $|A| > |B|$, a total function $f$ from $A$ to $B$ cannot be injective. This means there must exist at least two distinct elements in $A$ that map to the same element in $B$.

### 2. The Generalized Pigeonhole Principle
The generalized version provides a stronger conclusion based on the ratio of elements to categories. If $|A| > k|B|$, then there is at least a $(k+1)$-way collision (one category contains at least $k+1$ elements).

**Examples:**
*   **Hair in Boston:** If Boston has 650,000 residents and the maximum number of hairs on a human head is 200,000, there are more than three times as many people as possible hair counts ($650,000 > 3 \times 200,000$). Thus, at least four people in Boston must have the exact same number of hairs.
*   **Rooks on a Chessboard:** To prove that 33 rooks on an 8x8 board contain a subset of five rooks that do not attack each other, the board can be divided into 8 "pigeonholes" consisting of offset diagonals. Since $33 > 4 \times 8$, at least one diagonal (pigeonhole) must contain 5 rooks. Because these diagonals are constructed such that no two squares share a row or column, those five rooks will not attack one another.

## III. Combinatorial Proofs and Double Counting

Combinatorial proof, or double counting, is a method used to prove identities by counting the same set in two different ways. If two different expressions describe the size of the same set, those expressions must be equal.

### 1. Binomial and Multinomial Theorems
The Binomial Theorem describes the expansion of $(x+y)^n$ using binomial coefficients:
$$(x+y)^n = \sum_{k=0}^{n} \binom{n}{k} x^k y^{n-k}$$
This can be proven by counting the number of ways to form terms of the form $x^k y^{n-k}$ from $n$ factors. The Multinomial Theorem generalizes this for sums of more than two terms ($x_1 + x_2 + ... + x_m$):
$$\frac{n!}{k_1! k_2! ... k_m!}$$

### 2. Pascal’s Identity and Triangle
Pascal's Identity states:
$$\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}$$
This is proven by counting binary sequences of length $n$ with $k$ ones. One way is the direct count ($\binom{n}{k}$). The second way is to partition the sequences based on whether the last bit is a 1 or a 0.
*   If the last bit is 1, there are $\binom{n-1}{k-1}$ ways to place the remaining ones.
*   If the last bit is 0, there are $\binom{n-1}{k}$ ways to place the $k$ ones in the remaining positions.

**Pascal’s Triangle Properties:**
*   Each entry is the sum of the two entries directly above it.
*   The sum of the $n$-th row is $2^n$ (representing the total number of binary sequences of length $n$).
*   Summing along specific diagonals yields Fibonacci numbers.

***

## IV. Quiz: Short Answer

1.  **Explain why the sum rule is insufficient when counting cards that are either hearts or face cards.**
    The sum rule only applies to disjoint sets. Because there are three cards (King, Queen, and Jack of Hearts) that belong to both the set of hearts and the set of face cards, simply adding the sets together counts these three cards twice.

2.  **What is the formula for the size of the union of two sets $A$ and $B$, and what does each term represent?**
    The formula is $|A \cup B| = |A| + |B| - |A \cap B|$. $|A|$ and $|B|$ represent the sizes of the individual sets, and $|A \cap B|$ represents the size of their overlap, which is subtracted to prevent double-counting.

3.  **In the context of the inclusion-exclusion principle, what occurs if you subtract pairwise intersections of three sets but do not add back the three-way intersection?**
    If the three-way intersection is not added back, any element that exists in all three sets is counted zero times. It is added three times in the individual sets and subtracted three times in the pairwise intersections, necessitating the final addition to count it once.

4.  **How is the Euler's Totient function related to the Principle of Inclusion-Exclusion?**
    The Totient function, which counts numbers coprime to $n$, can be derived by using PIE to subtract the sets of numbers that share prime factors with $n$ from the total set of numbers up to $n$.

5.  **Define the Pigeonhole Principle in terms of set mapping.**
    The principle states that if there is a total function $f: A \to B$ where $|A| > |B|$, the function cannot be injective. This implies that there must be at least two elements in set $A$ that map to the same element in set $B$.

6.  **Using the generalized Pigeonhole Principle, explain why a population of 650,000 residents in a city ensures at least four people have the same number of hairs (assuming a maximum of 200,000 hairs).**
    Since $650,000$ is greater than $3 \times 200,000$, the generalized principle ($|A| > k|B|$) indicates a $(k+1)$ collision. Here, $k=3$, so there must be at least a $3+1=4$-way collision.

7.  **What are the three essential elements required to prove a statement using the Pigeonhole Principle?**
    To use the principle effectively, one must clearly define the "pigeons" (set $A$), the "pigeonholes" (set $B$), and the "map" or function that assigns each pigeon to a specific pigeonhole.

8.  **Briefly describe the "double counting" proof technique.**
    Double counting involves identifying a single set and calculating its size in two different ways. Since both methods count the same set, the resulting mathematical expressions must be equal to each other.

9.  **How does counting binary sequences prove that the sum of the $n$-th row of Pascal’s Triangle is $2^n$?**
    The right side, $2^n$, represents the total number of binary sequences of length $n$ (two choices for $n$ positions). The left side ($\sum \binom{n}{k}$) partitions these sequences by the number of ones ($k$) they contain, from $0$ to $n$.

10. **What does a multinomial coefficient $\frac{n!}{k_1!k_2!...k_m!}$ represent in terms of permutations?**
    It represents the number of ways to permute $n$ objects where there are $k_1$ objects of one type, $k_2$ of another type, and so on, up to $m$ types, such that the sum of all $k$ equals $n$.

***

## V. Answer Key

1.  The sets are not disjoint; the three heart face cards would be double-counted.
2.  $|A \cup B| = |A| + |B| - |A \cap B|$; it totals the sets and removes the overlap.
3.  Elements in the three-way intersection would be counted zero times (3 additions - 3 subtractions).
4.  It uses PIE to exclude numbers that share prime factors with $n$.
5.  If $|A| > |B|$, a total function $f: A \to B$ is not injective.
6.  The population exceeds 3 times the possible hair counts, forcing a 4-way collision.
7.  The pigeons (set $A$), the pigeonholes (set $B$), and the mapping function.
8.  Calculating the size of one set using two different logic paths to prove an identity.
9.  Both sides count the same set: total sequences vs. sequences partitioned by the number of ones.
10. The number of unique permutations of $n$ items with $m$ different groups of identical items.

***

## VI. Essay Questions

1.  **The Utility of Non-Constructive Proofs:** The Pigeonhole Principle is described as "non-constructive." Discuss what this means regarding our knowledge of the specific elements involved in a collision, using the Boston hair example as a reference.
2.  **Visualizing Complexity:** Explain how Venn diagrams serve as a tool for understanding the Principle of Inclusion-Exclusion for two and three sets. Why does this visualization become less practical as $n$ increases?
3.  **Creative Pigeonholing:** In the 33 rooks problem, the choice of pigeonholes is not immediately obvious. Analyze why using columns as pigeonholes fails and why the "offset diagonal" method succeeds in proving the existence of non-attacking rooks.
4.  **Combinatorial vs. Algebraic Proofs:** Compare the "double counting" method for proving Pascal's Identity to a "brute-force" algebraic approach using factorials. What are the advantages of the combinatorial method in terms of intuition and complexity?
5.  **Generalization of Binomial Logic:** Describe the transition from the Binomial Theorem to the Multinomial Theorem. How does the logic of "choosing positions" for variables expand when dealing with more than two variables?

***

## VII. Glossary of Key Terms

*   **Binomial Coefficient:** Represented as $\binom{n}{k}$, it is the number of ways to choose $k$ elements from a set of $n$ elements.
*   **Combinatorial Proof:** A proof technique that demonstrates two algebraic expressions are equal by showing they both count the same objects in different ways.
*   **Coprime:** A relationship between two integers where their only common factor is 1.
*   **Disjoint Sets:** Sets that have no elements in common; their intersection is an empty set.
*   **Double Counting:** Another name for a combinatorial proof.
*   **Euler's Totient Function:** A function that counts the number of integers up to $n$ that are coprime to $n$.
*   **Injective Function:** A function where every element of the codomain is mapped to by at most one element of the domain (no collisions).
*   **Multinomial Coefficient:** A generalization of the binomial coefficient used to find the number of ways to divide $n$ objects into multiple groups of specific sizes.
*   **Pascal’s Identity:** The formula $\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}$, which defines the relationship between entries in Pascal’s Triangle.
*   **Pascal’s Triangle:** A triangular array of binomial coefficients where each number is the sum of the two directly above it.
*   **Principle of Inclusion-Exclusion (PIE):** A counting technique used to find the size of a union of sets by alternatingly adding and subtracting the sizes of their intersections.
*   **Total Function:** A function where every element in the domain is mapped to an element in the codomain.
*   **Universe of Discourse:** The total set of all possible elements under consideration in a specific problem.