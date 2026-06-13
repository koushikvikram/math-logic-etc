# Recurrences and Algorithm Analysis: A Briefing

This briefing document synthesizes the concepts, mathematical frameworks, and algorithmic applications of recurrences as presented in the MIT OpenCourseWare lecture on the subject.

## Executive Summary

Recurrences—sequences defined inductively—serve as a fundamental tool for analyzing the runtime and complexity of algorithms. The analysis typically involves moving from a recursive definition to a **closed-form expression**, which provides a direct method for calculating values or understanding asymptotic growth. Key takeaways include:

*   **Recursion as Induction:** Recursive algorithms are effectively physical implementations of mathematical induction.
*   **The Growth Gap:** Algorithms that reduce problem size by subtraction (e.g., $n-1$) often lead to exponential growth, whereas those that reduce size by division (e.g., $n/2$) lead to significantly more efficient "divide and conquer" runtimes.
*   **Analytical Techniques:** Methods such as "Guess and Check" (induction) and "Plug and Chug" (substitution/expansion) are vital for finding closed forms.
*   **The Master Theorem:** This provides a standardized framework for determining the asymptotic ($\Theta$) bounds of divide-and-conquer recurrences by comparing the work done at the root versus the growth of subproblems.

---

## 1. Fundamentals of Recurrences

A recurrence is a sequence described by induction. While inductive definitions are useful for constructing sequences, they are often insufficient for high-level analysis.

### The Fibonacci Example
The Fibonacci sequence is the classic illustration of a recurrence:
*   **Definition:** $F_0 = 0$, $F_1 = 1$.
*   **Inductive Step:** $F_n = F_{n-1} + F_{n-2}$ for $n \ge 2$.
*   **Closed Form:** The $n$-th Fibonacci number can be found exactly using the formula:
    $$\frac{1}{\sqrt{5}} \left[ \left(\frac{1+\sqrt{5}}{2}\right)^n - \left(\frac{1-\sqrt{5}}{2}\right)^n \right]$$
*   **Growth Rate:** This sequence grows exponentially at a rate of approximately $\Theta(1.6^n)$.

### Guess and Check
The "Guess and Check" technique involves hypothesizing a closed-form formula and proving its validity via induction. Finding the formula is the difficult phase; proving it is generally straightforward once the target is known.

---

## 2. Exponential Growth: The Towers of Hanoi

The Towers of Hanoi, a classic puzzle described by Edouard Lucas in 1883, demonstrates how simple recursive rules can lead to massive computational complexity.

### Rules and Strategy
The puzzle involves moving $n$ disks from one pillar to another using a third auxiliary pillar, subject to two rules:
1.  Only one disk can be moved at a time.
2.  A larger disk can never be placed on top of a smaller disk.

The optimal strategy for $n$ disks is recursive:
1.  Move $n-1$ disks from the start peg to the auxiliary peg.
2.  Move the $n$-th (largest) disk to the target peg.
3.  Move the $n-1$ disks from the auxiliary peg to the target peg.

### Complexity Analysis
Let $T(n)$ be the number of moves required for $n$ disks.
*   **Recurrence:** $T(n) = 2T(n-1) + 1$, with $T(1) = 1$.
*   **Closed Form:** $T(n) = 2^n - 1$.
*   **The 64-Disk Myth:** According to legend, the universe ends when monks complete the 64-disk version of this puzzle. At a rate of one move per second, $2^{64}-1$ seconds is approximately **half a trillion years**.

---

## 3. Sorting Algorithms: Contrast in Efficiency

Recurrences highlight the performance disparity between simple iterative approaches and recursive divide-and-conquer strategies.

### Selection Sort (Quadratic)
Selection sort works by finding the smallest element, pulling it out, and repeating for the remainder of the list.
*   **Comparison Count:** For $n$ elements, the first pass requires $n-1$ comparisons, the second $n-2$, and so on.
*   **Total Comparisons:** $\frac{n(n-1)}{2}$ or $\frac{n^2}{2} - \frac{n}{2}$.
*   **Performance:** This is a quadratic ($n^2$) runtime, which is inefficient for large datasets.

### Merge Sort (Logarithmic)
Merge sort employs a "divide and conquer" strategy. It splits the list into two halves, sorts them recursively, and merges the results.
*   **The Merge Step:** Merging two sorted lists requires comparing the smallest elements of each. For two lists totaling $n$ elements, the merge takes at most $n-1$ comparisons.
*   **Recurrence:** $M(n) = 2M(n/2) + (n-1)$.
*   **Analysis via "Plug and Chug":** By expanding the recurrence (substituting it into itself multiple times), a pattern emerges. For powers of 2, the closed form is:
    $$M(n) = n \log_2 n - n + 1$$
*   **Performance:** This is significantly faster than selection sort.

| $n$ | Selection Sort Comparisons | Merge Sort Comparisons |
| :--- | :--- | :--- |
| 4 | 6 | 5 |
| 8 | 28 | 17 |
| 16 | 120 | 49 |
| 32 | 496 | 129 |

---

## 4. The Master Theorem

The Master Theorem is a powerful tool for providing asymptotic ($\Theta$) bounds for divide-and-conquer recurrences of the form:
$$T(n) = aT(n/b) + f(n)$$
Where $a \ge 1$ (number of subproblems), $b > 1$ (factor by which subproblem size is reduced), and $f(n)$ is the work done outside the recursive calls (e.g., merging).

### Intuition: The Recursive Call Tree
The total work can be visualized as a tree:
*   **Height:** The tree has a height of $\log_b n$.
*   **Nodes:** The number of subproblems increases by a factor of $a$ at each level.
*   **Work Distribution:** The theorem determines which level of the tree "dominates" the total work.

### The Three Cases
1.  **Case 1 (Leaf Heavy):** $f(n)$ grows slowly. The work at the bottom of the tree (the leaves) dominates. $T(n) = \Theta(n^{\log_b a})$.
2.  **Case 2 (Balanced):** The work at each level of the tree is roughly equal. The total work is the work of one level multiplied by the number of levels. $T(n) = \Theta(n^{\log_b a} \log n)$. (This applies to Merge Sort).
3.  **Case 3 (Root Heavy):** $f(n)$ grows very quickly. The work at the top of the tree (the root) dominates. $T(n) = \Theta(f(n))$.

---

## 5. Key Insights and Conclusions

The analysis of recurrences reveals critical truths about algorithm design:

*   **Recursive Call Tree Depth:** The reason divide-and-conquer algorithms (like Merge Sort) are efficient is that their call trees are short—only logarithmic in height. Algorithms that only reduce the problem size by a constant (like the Towers of Hanoi) have linear tree heights, leading to massive, often exponential, node counts.
*   **Analytical Advice:** When using the "Plug and Chug" method to find a pattern, it is advised **not** to simplify or combine terms from different levels of recursion too early. Keeping terms separate makes the underlying pattern more visible.
*   **Master Theorem Gaps:** While highly useful, the Master Theorem is not a universal solution; some recurrences do not fit into its three defined cases and require alternative analytical methods.