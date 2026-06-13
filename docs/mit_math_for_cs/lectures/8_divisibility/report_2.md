# Number Theory: Divisibility and the Euclidean Algorithm

This study guide provides a comprehensive review of the fundamental concepts of number theory as they relate to divisibility, common divisors, and the computational algorithms used to solve integer-based problems. The material explores the theoretical foundations of divisibility and demonstrates their practical application through state machines and historical algorithms.

---

## Part 1: Review Quiz

**Instructions:** Answer the following questions in 2–3 sentences based on the provided text.

1.  **How is divisibility formally defined in number theory, and why is it defined through multiplication rather than division?**
2.  **Why is the number 0 considered even according to the formal definition of divisibility?**
3.  **What is an Integer Linear Combination (ILC), and how does it relate to the concept of divisibility for a single number?**
4.  **In the context of the water-pouring puzzle, what is the core invariant regarding the amounts of water in the jugs?**
5.  **Explain the two equivalent definitions of the Greatest Common Divisor (GCD) provided in the text.**
6.  **What is the "division theorem," and what are the two specific components it produces?**
7.  **How does the Euclidean algorithm improve upon the subtraction-based method for finding the GCD?**
8.  **What is the "bit count" argument, and how does it prove the efficiency of the Euclidean algorithm?**
9.  **State Bézout's Lemma and explain its significance regarding the GCD of two numbers.**
10. **What is "The Pulverizer," and what is its historical and functional relationship to the Euclidean algorithm?**

---

## Part 2: Answer Key

1.  **Definition of Divisibility:** A number $a$ divides $b$ ($a \mid b$) if there exists an integer $k$ such that $b = k \cdot a$. This is defined via multiplication to avoid the complications of dividing by zero, allowing the definition to remain valid even when $a = 0$.
2.  **Evenness of Zero:** A number $n$ is defined as even if $2$ divides $n$. Because $2 \cdot 0 = 0$ and $0$ is an integer, $2$ divides $0$ according to the formal definition, making zero an even number.
3.  **Integer Linear Combinations:** An ILC of $a$ and $b$ is any number that can be expressed as $sa + tb$, where $s$ and $t$ are integers. Divisibility can be viewed as an ILC of a single number, where $b$ is an integer linear combination of $a$ if $b = k \cdot a$.
4.  **Water-Pouring Invariant:** The invariant states that in any state $(x, y)$, the amounts of water in both jugs are always integer linear combinations of the initial capacities $a$ and $b$. Consequently, any reachable volume must be a multiple of the greatest common divisor of $a$ and $b$.
5.  **Two Definitions of GCD:** The first definition identifies the GCD as the largest integer $d$ that divides both $a$ and $b$. The second defines it as the unique non-negative common divisor that is itself divisible by all other common divisors of $a$ and $b$.
6.  **Division Theorem:** The theorem states that for every integer $n$ and positive integer $d$, there exists a unique pair of integers $q$ (the quotient) and $r$ (the remainder). These are related by the formula $n = qd + r$, where $0 \le r < d$.
7.  **Euclidean Algorithm vs. Subtraction:** While the subtraction method requires many steps (roughly proportional to the size of the numbers), the Euclidean algorithm uses the remainder from division to reduce the numbers much faster. This allows the algorithm to reach the GCD in significantly fewer steps by jumping over multiple subtractions at once.
8.  **Bit Count and Efficiency:** The bit count (the length of a number's binary representation) decreases strictly because $x \text{ rem } y$ is always less than $x/2$. This means the Euclidean algorithm is an "exponential improvement" over subtraction, completing in $O(\log a + \log b)$ steps rather than $O(a + b)$.
9.  **Bézout's Lemma:** Bézout’s Lemma asserts that the GCD of $a$ and $b$ is itself an integer linear combination of $a$ and $b$. This means there always exist integers $s$ and $t$ such that $\text{GCD}(a, b) = sa + tb$.
10. **The Pulverizer:** The Pulverizer (or Extended Euclidean Algorithm) is a version of Euclid's algorithm that keeps track of the coefficients $s$ and $t$ as it runs. Historically attributed to the Indian mathematician Aryabhata, it "pulverizes" numbers to find the specific ILC that produces the GCD.

---

## Part 3: Essay Questions

1.  **The Evolution of Number Theory:** Discuss G.H. Hardy’s view of number theory as a "gentle and clean" science and compare it to the modern applications described in the source. How has the "remoteness from human activities" changed?
2.  **State Machines and Problem Solvability:** Analyze how the water-pouring puzzle is modeled as a state machine. Explain how the concept of an invariant property is used to prove that certain target volumes are impossible to reach.
3.  **Algorithmic Complexity in Number Theory:** Compare and contrast the "slow" subtraction-based GCD algorithm with the "fast" Euclidean algorithm. Why is the logarithmic time complexity of the Euclidean algorithm essential for modern computational tasks?
4.  **The Relationship Between Divisibility and Set Theory:** Using the proof provided in the text, explain how the set of common divisors of $(a, b)$ is shown to be identical to the set of common divisors of $(a-b, b)$. Why is proving containment in both directions necessary?
5.  **Practical Synthesis of Bézout's Lemma:** Explain how the Pulverizer can be used to solve the Die Hard "save Manhattan" problem. Trace the logic from finding the GCD to determining the specific sequence of pouring operations needed to reach a target value.

---

## Part 4: Glossary of Key Terms

| Term | Definition |
| :--- | :--- |
| **Bézout's Lemma** | A theorem stating that the greatest common divisor of $a$ and $b$ can be expressed as an integer linear combination $sa + tb$. |
| **Common Divisor** | An integer $d$ that divides two or more integers without leaving a remainder. |
| **Division Theorem** | The principle that any integer $n$ divided by a positive integer $d$ results in a unique quotient $q$ and a unique remainder $r$ such that $n = qd + r$. |
| **Euclidean Algorithm** | An efficient method for computing the GCD of two numbers by repeatedly replacing the larger number with the remainder of its division by the smaller number. |
| **Greatest Common Divisor (GCD)** | The largest positive integer that divides each of the integers in a given set. |
| **Integer Linear Combination (ILC)** | An expression of the form $sa + tb$, where $a, b, s,$ and $t$ are all integers. |
| **Invariant** | A property of a state machine that remains true for all reachable states starting from the initial state. |
| **Number Theory** | An ancient branch of mathematics primarily concerned with the properties and relationships of integers ($\mathbb{Z}$). |
| **The Pulverizer** | Also known as the Extended Euclidean Algorithm; a method used to find the integer coefficients $s$ and $t$ for Bézout's Lemma. |
| **Quotient ($q$)** | The integer result of a division, representing how many whole copies of the divisor fit into the numerator. |
| **Remainder ($r$)** | The integer left over after dividing one integer by another, which is always less than the divisor. |
| **State Machine** | A mathematical model of computation used to represent a system's states and the transitions between them. |