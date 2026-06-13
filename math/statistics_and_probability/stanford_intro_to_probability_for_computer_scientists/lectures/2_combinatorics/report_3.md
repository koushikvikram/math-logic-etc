# Stanford CS109 Lecture 2: Combinatorics and Course Logistics

This briefing document synthesizes the logistical announcements and mathematical principles presented in the second lecture of Stanford’s CS109, "Probability for Computer Scientists." The lecture transitions from foundational counting rules to advanced combinatorics, covering permutations, combinations, and the distribution of objects into buckets.

## Executive Summary

The course focuses on building a "beautiful edifice of knowledge" starting from the humble beginnings of counting. Key logistical updates include the release of Problem Set 1, the introduction of a custom "Problem Set App" for immediate feedback, and a unique attendance incentive that allows students to reduce the weight of their final exam. Mathematically, the lecture formalizes three primary tasks:
1.  **Sorting Objects (Permutations):** Calculating arrangements for both distinct and indistinguishable items.
2.  **Choosing Subsets (Combinations):** Selecting items where order does not matter, derived from the "cake story" logic.
3.  **Bucket Distribution:** Placing objects into distinct containers, utilizing the "dividers" or "stars and bars" method for indistinct items.

---

## Course Infrastructure and Logistics

### Problem Set 1 and the Problem Set App
Problem Set 1 consists of 11 problems plus one creative extra credit problem. Submissions are handled via a custom-built **Problem Set App**, which offers several features:
*   **Immediate Feedback:** Students can enter numerical answers to verify correctness before final submission.
*   **Explanatory Requirement:** Numerical accuracy is insufficient; students must provide explanations detailed enough to teach another student.
*   **Integrated Environment:** The app supports simulations and Python code execution for more complex probability questions.
*   **Automatic Saving:** The app continuously saves and submits progress; there is no final "submit" button required.

### Technical Skills: Python and LaTeX
While CS109 is a mathematics-heavy course, it utilizes specific technical tools:
*   **Python:** Used for simulations and solving complex counting problems. Optional review sessions are held on Fridays for students unfamiliar with the language.
*   **LaTeX:** A document markup language for rendering beautiful mathematical symbols. While encouraged for professional-looking assignments, it is not required for credit.

### Section Signups and Attendance
*   **Section Matching:** Signups are preference-based rather than first-come, first-served. A matching algorithm runs on Sundays to finalize times.
*   **Lecture Incentive:** Attendance is optional, but participating in "presence checks" (e.g., providing a specific keyword like "purple zebra" in the app) for 90% of lectures allows 5% of the final exam weight to be replaced by full credit for attendance.

---

## Academic Policies and Integrity

### Honor Code and Collaboration
The course encourages making friends and talking through problems. However, a strict line is drawn at the "write-up" phase: every student must write their own solutions. Prohibited actions include looking for answers from past quarters or outsourcing work to others.

### Late Policy: "Power to the Student"
The policy is designed to offer flexibility while acknowledging the fast pace of the quarter system:
*   **24-Hour Grace Period:** Submissions within 24 hours of the deadline are accepted without penalty to account for minor delays or sleep.
*   **Long Extensions:** Students may grant themselves up to two "long extensions" (roughly 120 hours/two class periods) per quarter. This requires a logged plan for catching up.
*   **Super Late Extensions:** Extensions beyond 120 hours are generally not permitted as solutions are released by that point, requiring a direct conversation with course staff.

---

## Review of Fundamental Counting Rules

All combinatorial theory in the course is derived from two core principles established in the first lecture:
1.  **The Step Rule (Multiplication):** If an experiment can be broken into steps where the number of outcomes in one step is independent of previous choices, the total outcomes equal the product of the outcomes of each step.
2.  **The Or Rule (Addition/Subtraction):** When counting outcomes that can fall into multiple groups (e.g., Set A or Set B), the total is the sum of the groups minus the intersection (A ∩ B) to avoid double counting.

---

## Advanced Combinatorics: Permutations

### Distinct Objects
A permutation is an ordered arrangement of distinct objects. For $n$ distinct objects, the number of unique orderings is $n!$ (n factorial).
*   **Example:** A six-digit passcode using six distinct numbers has $6!$ (720) possible orderings.
*   **Subset Permutations:** If choosing an ordered subset (e.g., 6 digits out of 10 available), the calculation stops before the full factorial is reached (e.g., $10 \times 9 \times 8 \times 7 \times 6 \times 5$).

### Indistinct Objects
When some objects are indistinguishable, $n!$ overcounts the unique arrangements. The correct formula divides the total permutations by the factorials of the counts of each indistinct group:
$$\text{Total Permutations} = \frac{n!}{n_1! n_2! \dots n_r!}$$
*   **The "Mississippi" Rule:** In the word "MISSISSIPPI" (11 letters), the count is $\frac{11!}{1! 4! 4! 2!}$ to account for the repeated M, I, S, and P.
*   **Derivation Strategy:** Treat all objects as distinct initially (give them "personality"), then divide by the number of ways the indistinct objects could have been permuted among themselves.

---

## Combinations: Choosing Subsets

A combination is the task of choosing a subset of size $k$ from a set of $n$ distinct objects where order does not matter.

### The "Cake Story" Derivation
To find the number of ways to give cake to 5 people out of 20:
1.  Line up all 20 people ($20!$).
2.  Assign the first 5 to the "Cake Room" and the remaining 15 to the "No Cake Room."
3.  Divide by $5!$ because the order of people in the Cake Room doesn't change who gets cake.
4.  Divide by $15!$ because the order of people without cake doesn't change the outcome.

**General Formula (Binomial Coefficient):**
$$\binom{n}{k} = \frac{n!}{k!(n-k)!}$$

### Applications
*   **Book Selection:** Choosing 3 distinct books from a set of 6 results in $\binom{6}{3} = 20$ ways.
*   **Card Games:** Choosing a 5-card hand from a 52-card deck results in approximately 2.6 million unique combinations.

---

## Distribution: Putting Objects into Buckets

The lecture distinguishes between two scenarios for distributing $n$ items into $r$ distinct buckets.

| Object Type | Bucket Type | Formula | logic |
| :--- | :--- | :--- | :--- |
| **Distinct** | Distinct | $r^n$ | Each of the $n$ objects has $r$ choices. |
| **Indistinct** | Distinct | $\frac{(n+r-1)!}{n!(r-1)!}$ | The "Dividers" (Stars and Bars) method. |

### The Divider Method (Indistinct Objects)
To put $n$ indistinguishable objects (e.g., Coke cans) into $r$ distinct buckets, the course uses "dividers" to represent bucket walls. 
*   **The Fence Post Bug:** To create $r$ buckets, only $r-1$ dividers are needed.
*   **Calculation:** The problem becomes a permutation of $n$ items and $r-1$ dividers. The total number of arrangements is the permutation of all objects $(n + r - 1)!$ divided by the indistinguishable groups ($n!$ for the items and $(r-1)!$ for the dividers).
*   **Example:** Putting 4 indistinct cans into 3 distinct buckets involves 4 cans and 2 dividers (6 total objects), resulting in $\frac{6!}{4!2!} = 15$ ways.