# Comprehensive Study Guide: Recurrences and Recursive Algorithms

This document provides a detailed overview of the mathematical and algorithmic concepts surrounding recurrences, as presented in the MIT OpenCourseWare lecture by Zachary Abel. It explores the definition of sequences described by induction, specific examples of recurrences in puzzles and sorting, and the analytical tools used to find closed-form solutions and asymptotic bounds.

---

## 1. Introduction to Recurrences
A recurrence is a sequence defined inductively. In these sequences, terms are calculated based on previously known terms. Recurrences are essential for analyzing the runtime of algorithms, particularly recursive ones.

### The Fibonacci Sequence
The Fibonacci numbers serve as a primary example of an inductively defined sequence:
*   **Base Cases:** $F_0 = 0$, $F_1 = 1$.
*   **Recurrence Relation:** $F_n = F_{n-1} + F_{n-2}$ for $n \ge 2$.
*   **Closed Form:** The $n$-th Fibonacci number can be found exactly using the formula:
    $$\frac{1}{\sqrt{5}} \left[ \left( \frac{1 + \sqrt{5}}{2} \right)^n - \left( \frac{1 - \sqrt{5}}{2} \right)^n \right]$$
While the recursive definition is simple, the closed form is non-obvious and illustrates that finding a direct formula is often more difficult than proving it via induction (the "Guess-and-Check" method).

---

## 2. Classic Puzzle: Towers of Hanoi
The Towers of Hanoi is a classic recursive problem described by Edouard Luca in 1883. It involves moving $n$ disks of increasing sizes from one pillar to another using three total pillars.

### Rules and Strategy
1.  Only one disk can be moved at a time.
2.  A larger disk can never be placed on top of a smaller disk.
3.  The goal is to move all disks from the leftmost peg to the rightmost peg.

**Recursive Algorithm for $n$ disks:**
*   Move the top $n-1$ disks from Peg A to Peg B.
*   Move the $n$-th (largest) disk from Peg A to Peg C.
*   Move the $n-1$ disks from Peg B to Peg C.

### Mathematical Analysis
*   **Recurrence:** $T_n = 2T_{n-1} + 1$, where $T_1 = 1$.
*   **Closed Form:** $T_n = 2^n - 1$.
*   **Example (64 Disks):** For 64 disks, if one move is made per second, the process would take approximately half a trillion years ($2^{64} - 1$ seconds).

---

## 3. Sorting Algorithms
Recurrences are frequently used to evaluate the efficiency of sorting algorithms.

### Selection Sort
Selection Sort is a simple, non-recursive algorithm based on finding the smallest element, pulling it out, and repeating for the remaining list.
*   **Process:** Requires $(n-1)$ comparisons in the first round, $(n-2)$ in the second, and so on.
*   **Total Comparisons:** $\frac{n(n-1)}{2}$, resulting in a quadratic runtime of approximately $\frac{n^2}{2}$.

### Merge Sort
Merge Sort is a "Divide and Conquer" algorithm that sorts more efficiently by splitting lists.
*   **Algorithm:**
    1.  If $n=1$, the list is sorted.
    2.  Sort the first $\lfloor n/2 \rfloor$ elements using Merge Sort.
    3.  Sort the remaining $\lceil n/2 \rceil$ elements using Merge Sort.
    4.  **Merge:** Combine the two sorted lists by comparing the smallest available elements from each.
*   **Recurrence:** $M_n = 2M_{n/2} + (n-1)$ (upper bound).
*   **Runtime:** $\Theta(n \log n)$.

---

## 4. Analytical Techniques

### Plug and Chug (Substitution Method)
This technique involves substituting the recurrence into itself repeatedly to identify a pattern in the expansion. To keep the pattern clear, it is advised not to simplify numerical terms too early (e.g., keeping $n-1$ and $n-2$ separate rather than combining them into $2n-3$).

### The Master Theorem
The Master Theorem provides a shortcut for finding asymptotic bounds (Theta bounds) for divide-and-conquer recurrences of the form:
$$T(n) = aT(n/b) + f(n)$$
*   **$a$:** Number of subproblems ($a \ge 1$).
*   **$b$:** Factor by which the problem size is reduced ($b > 1$).
*   **$f(n)$:** The amount of work done outside the recursive calls (e.g., the merge step).

| Case | Condition | Intuition |
| :--- | :--- | :--- |
| **Case 1** | $f(n)$ grows slowly | The work at the leaves of the recursion tree dominates. |
| **Case 2** | $f(n)$ and $n^{\log_b a}$ balance | Work is distributed evenly across tree levels; adds a $\log n$ factor. |
| **Case 3** | $f(n)$ grows quickly | The work at the root (top level) of the recursion tree dominates. |

---

## 5. Quiz

### Short Answer Questions
1.  Define a recurrence in the context of mathematical sequences.
2.  How does the "Guess-and-Check" method facilitate finding closed forms?
3.  State the base cases and the recurrence relation for the Fibonacci sequence.
4.  In the Towers of Hanoi, why is it possible to move $n-1$ disks to a middle peg even if the $n$-th disk is still on the starting peg?
5.  What is the closed-form formula for the number of moves required to solve the Towers of Hanoi with $n$ disks?
6.  Explain the concept of a "Merge" in the Merge Sort algorithm.
7.  What is the primary difference between the recursion trees of the Fibonacci sequence and Merge Sort?
8.  Define the "Divide and Conquer" strategy.
9.  Under what conditions can the Master Theorem be applied?
10. Why is Merge Sort considered more efficient than Selection Sort for large data sets?

---

## 6. Answer Key

1.  A recurrence is a sequence defined inductively, where each term is described by its relationship to previous terms in the sequence.
2.  It allows one to assume a formula is correct based on a pattern or "guess," and then use induction to prove that the formula holds for all $n$, which is often easier than deriving the formula from scratch.
3.  The base cases are $F_0 = 0$ and $F_1 = 1$; the recurrence relation is $F_n = F_{n-1} + F_{n-2}$ for $n \ge 2$.
4.  Because the rules state that only smaller disks can be placed on larger ones, the largest disk (disk $n$) on the bottom does not restrict the movement of any smaller disks above it.
5.  The closed-form formula is $T_n = 2^n - 1$.
6.  A merge involves taking two already-sorted lists and combining them into one sorted list by comparing the smallest elements of each list and pulling the overall smallest until one list is empty.
7.  The Fibonacci tree subtracts constants ($n-1, n-2$), leading to a very deep tree with exponential growth, while Merge Sort divides $n$ by 2, leading to a tree with logarithmic height.
8.  It is an algorithmic strategy where a problem is divided into smaller subproblems of the same type, those subproblems are solved recursively, and their solutions are combined to solve the original problem.
9.  The recurrence must be in the form $T(n) = aT(n/b) + f(n)$, where $a \ge 1$, $b > 1$, and $f(n)$ is a specific function. It must also fall into one of the three specific cases defined by the theorem.
10. Selection Sort has a quadratic runtime ($\Theta(n^2)$), while Merge Sort has a much slower-growing runtime of $\Theta(n \log n)$, making it significantly faster as $n$ increases.

---

## 7. Essay Questions

1.  Compare the "Plug and Chug" method with the "Guess-and-Check" method. In what scenarios might one be more advantageous than the other when solving recurrences?
2.  Discuss the myth of the Towers of Hanoi in the context of computational complexity. How does a seemingly small number of disks (64) result in a time scale exceeding the age of the universe?
3.  Analyze the role of the "Merge" step in Merge Sort. Why is the efficiency of this specific step critical to the overall $\Theta(n \log n)$ runtime?
4.  Explain the intuition behind the three cases of the Master Theorem. How does the relationship between $f(n)$ and the recursive subproblems determine the total runtime?
5.  Refute the idea that recursion is a "scary" or "circular" topic by explaining its relationship to mathematical induction.

---

## 8. Glossary of Key Terms

*   **Asymptotic Bound:** A description of the limiting behavior of a function (e.g., Big O or Theta notation) as the input size $n$ grows toward infinity.
*   **Base Case:** The condition in a recursive algorithm or induction that allows the process to terminate without further recursive calls.
*   **Ceiling ($\lceil x \rceil$):** A mathematical function that rounds a number up to the nearest integer.
*   **Closed Form:** A mathematical expression that allows the calculation of the $n$-th term of a sequence directly, without needing to calculate all preceding terms.
*   **Divide and Conquer:** An algorithm design paradigm that recursively breaks a problem down into two or more sub-problems of the same or related type.
*   **Floor ($\lfloor x \rfloor$):** A mathematical function that rounds a number down to the nearest integer.
*   **Induction:** A method of mathematical proof used to show that a statement is true for all natural numbers by proving a base case and an inductive step.
*   **Master Theorem:** A formulaic approach used to provide asymptotic analysis for recurrences commonly found in divide-and-conquer algorithms.
*   **Plug and Chug (Substitution Method):** A method for solving recurrences by repeatedly substituting the recursive part of the equation with its own definition to find a pattern.
*   **Recurrence:** An equation or inequality that describes a function in terms of its value on smaller inputs.
*   **Theta ($\Theta$) Bound:** A notation that describes a tight asymptotic bound, indicating that a function grows at the same rate as another function.