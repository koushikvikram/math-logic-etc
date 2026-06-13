# Principles of Combinatorics: Counting Techniques and Applications

This study guide examines the fundamental principles of counting as presented in the analysis of discrete structures. It covers the transition from basic product rules to sophisticated techniques such as the division rule, binomial coefficients, and the methodology of "counting with recipes."

## 1. Fundamental Counting Rules

### The Product Rule and Generalized Product Rule
The most basic counting principle is the **Product Rule**, which applies when choices are independent and the set of available options remains constant for each step. For example, calculating the number of possible eight-digit serial numbers on a dollar bill where digits can repeat results in $10^8$ possibilities ($10 \times 10 \times 10 \dots$).

The **Generalized Product Rule** is used when making a sequence of $k$ choices where the number of available options at the $i$-th step ($n_i$) is fixed, even if the specific options available change based on previous choices.
*   **Example:** Counting permutations of a 52-card deck. There are 52 choices for the first card, 51 for the second, and so on, resulting in $52!$ (52 factorial) possible orders.
*   **Formal Definition:** If a set $A$ consists of length $k$ sequences where there are $n_1$ choices for the first element, $n_2$ for the second (regardless of the first choice), and so on, then $|A| = n_1 \times n_2 \times \dots \times n_k$.

### The Bijection and Division Rules
The **Bijection Rule** states that if a function $f$ from set $A$ to set $B$ is a bijection (a one-to-one correspondence), then $|A| = |B|$. In a bijection, every element in $A$ has exactly one arrow out, and every element in $B$ has exactly one arrow in.

The **Division Rule** generalizes the bijection rule to **k-to-1 correspondences**. If every element in $A$ has one arrow out and every element in $B$ has exactly $k$ arrows in, then:
$$\frac{|A|}{k} = |B|$$
This rule is essential when multiple sequences in the initial counting set correspond to a single unique arrangement in the target set.

## 2. Circular Permutations and Subsets

### Knights of the Round Table
To count seating arrangements for $n$ knights where rotations are considered equivalent, the division rule is applied. 
1.  **Set A:** Linear permutations of $n$ knights ($n!$).
2.  **Set B:** Cyclic seating arrangements.
3.  **Mapping:** Each cyclic arrangement corresponds to exactly $n$ linear permutations (one for each possible starting position in the circle).
4.  **Result:** $\frac{n!}{n} = (n-1)!$.

### Binomial Coefficients (n choose k)
When selecting a subset of size $k$ from a larger set of size $n$, the order of selection does not matter. This is calculated using the formula for **n choose k**:
$$\binom{n}{k} = \frac{n!}{k!(n-k)!}$$
This formula is derived by taking all permutations of $n$ ($n!$) and dividing by the number of ways to reorder the $k$ chosen elements ($k!$) and the $(n-k)$ remaining elements ($(n-k)!$).

| Application | Description | Formula |
| :--- | :--- | :--- |
| **Pizza Toppings** | Choosing 3 toppings from 15. | $\binom{15}{3}$ |
| **Volunteers** | Choosing 4 students from 200. | $\binom{200}{4}$ |
| **Coin Flips** | Getting exactly 50 heads in 100 flips. | $\binom{100}{50}$ |

## 3. Counting with Recipes (Sequences)

"Counting with recipes" involves building the elements of a set through a sequence of simple, digestible choices. To ensure the count is accurate, the recipe must satisfy two conditions:
1.  **Total/Surjective:** Can every element in the target set be constructed by the recipe?
2.  **Injective (or k-to-1):** Is every element constructed in exactly one way (or a fixed number of $k$ ways)?

### Poker Hand Case Studies
A standard deck contains 13 ranks and 4 suits (52 cards total).

*   **Four of a Kind:**
    *   *Recipe:* Choose a rank (13 options), then choose the 5th card from the remaining 48.
    *   *Validation:* This is a bijection.
    *   *Total:* $13 \times 48 = 624$.
*   **Hands with All Four Suits:**
    *   *Recipe A (2-to-1):* Choose one card of each suit ($13^4$) and then a 5th card ($48$). This is 2-to-1 because the 5th card will always share a suit with one of the first four cards, allowing them to swap roles.
    *   *Calculation:* $\frac{13^4 \times 48}{2}$.
    *   *Recipe B (Bijection):* Choose which suit has two cards ($\binom{4}{1}$), choose two cards of that suit ($\binom{13}{2}$), then one card from each of the other three suits ($13^3$).
    *   *Calculation:* $4 \times \binom{13}{2} \times 13^3$.
*   **The "At Least One Pair" Failure:**
    *   *Flawed Recipe:* Choose a rank for a pair, choose two cards of that rank, then choose three other cards.
    *   *Reason for Failure:* This recipe is neither a bijection nor a k-to-1 map. A hand with two pairs (e.g., Aces and Twos) could be built in two ways, while a three-of-a-kind could be built in three ways, and a four-of-a-kind in six ways. Because there is no fixed $k$, the division rule cannot be applied.

***

## Quiz: Counting Techniques

**Instructions:** Answer the following questions in 2-3 sentences based on the source context.

1.  **Define the Generalized Product Rule.**
2.  **Why is the regular Product Rule sufficient to count eight-digit serial numbers where digits can repeat?**
3.  **Explain the difference between a one-to-one correspondence and a k-to-1 correspondence.**
4.  **In the "Knights of the Round Table" problem, why do we divide $n!$ by $n$?**
5.  **How is a binary sequence related to a subset in the context of coin flipping?**
6.  **What does the notation $\binom{n}{k}$ represent, and how is it pronounced?**
7.  **Describe the "Total" and "Injective" requirements for a valid counting recipe.**
8.  **Why did the initial recipe for counting poker hands with all four suits result in a 2-to-1 map?**
9.  **According to the lecture, what is the approximate probability of finding a dollar bill with eight distinct digits?**
10. **Explain why a recipe that builds a set in a variable number of ways (not a fixed $k$) is considered "garbage" for counting purposes.**

***

## Answer Key

1.  **The Generalized Product Rule** states that if you make a sequence of $k$ choices where the $i$-th choice always has a fixed number of options $n_i$, the total number of sequences is the product of those options. This holds true even if the specific available choices change based on previous steps, as long as the *number* of choices remains constant.
2.  **The regular Product Rule** is sufficient because the set of available options (digits 0-9) does not change regardless of which numbers were selected previously. Since repeats are allowed and the selection of one digit does not restrict the next, the number of choices is always ten for every position.
3.  **A one-to-one correspondence (bijection)** means every element in the first set is paired with exactly one unique element in the second set. A **k-to-1 correspondence** means that exactly $k$ distinct elements from the first set map to a single unique element in the second set, requiring a division by $k$ to count the second set.
4.  **We divide $n!$ by $n$** because $n!$ counts linear permutations where the starting position matters, but in a circular arrangement, rotations are equivalent. Since there are $n$ possible starting positions for any single circular order, each unique circle is represented $n$ times in the linear count.
5.  **A binary sequence** can be mapped to a subset by using indices; for example, in 100 coin flips, the positions of the "1s" (heads) define which specific flips out of the set of 100 belong to the "heads" subset. This creates a bijection between length-100 binary sequences with 50 ones and size-50 subsets of the set of 100 flips.
6.  **The notation** $\binom{n}{k}$ represents a binomial coefficient and is pronounced "n choose k." It is used to calculate the number of ways to select a subset of $k$ items from a larger set of $n$ items where the order of selection is irrelevant.
7.  **The "Total" requirement** ensures that every element we intend to count is actually capable of being constructed by the recipe. **"Injective"** (in the context of a bijection) means that every element in the target set is constructed in exactly one way, preventing overcounting.
8.  **The recipe resulted in a 2-to-1 map** because the 5th card chosen must belong to one of the four suits already represented. This means there will always be two cards of the same suit in the final hand, and the recipe could have chosen either one of them as the "suit card" and the other as the "5th card."
9.  **The probability is approximately 1.8%**, or less than 2%. This is calculated by dividing the number of serial numbers with distinct digits ($10 \times 9 \times 8 \times 7 \times 6 \times 5 \times 4 \times 3$) by the total possible serial numbers ($10^8$).
10. **Such a recipe is useless** because the goal of counting with sequences is to relate the size of an easily counted set to a more complex one using a fixed ratio. If the number of ways to build an element varies (e.g., some hands are built two ways and others six), there is no single denominator to divide by to reach an accurate total.

***

## Essay Questions

1.  Compare the Product Rule with the Generalized Product Rule. Using the examples of serial numbers and card permutations, explain when one must transition from the simple rule to the generalized version.
2.  The lecture describes shepherds as counting by "bijections." Explain this metaphor and discuss how the Division Rule serves as a necessary extension for more complex counting problems like circular seating.
3.  Analyze the mathematical derivation of the "n choose k" formula. Why is it necessary to have both $k!$ and $(n-k)!$ in the denominator?
4.  Discuss the importance of "Step-by-Step Verification" in the Counting with Recipes method. What are the potential pitfalls of assuming a recipe is a bijection without testing specific examples?
5.  Using the "At Least One Pair" poker hand example, explain how the presence of different "types" of hands (two-pair, three-of-a-kind, etc.) disrupts the ability to use a k-to-1 mapping.

***

## Glossary of Key Terms

*   **Bijection:** A function between two sets where each element of one set is paired with exactly one element of the other; also known as a one-to-one correspondence.
*   **Binomial Coefficient:** The number of ways to choose a subset of $k$ elements from a set of $n$ elements; denoted as $\binom{n}{k}$.
*   **Counting with Recipes:** A technique for counting a set by defining a sequence of choices to build its elements and verifying the mapping.
*   **Division Rule:** A principle stating that if a set $A$ has a k-to-1 correspondence with set $B$, then the size of $B$ is the size of $A$ divided by $k$.
*   **Factorial (!):** The product of all positive integers up to a given number $n$ (e.g., $4! = 4 \times 3 \times 2 \times 1 = 24$).
*   **Generalized Product Rule:** A counting principle for sequences where the number of choices at each step is fixed, regardless of previous selections.
*   **Injective:** A property of a function where every element of the target set is mapped to by at most one element of the starting set (no two inputs have the same output).
*   **k-to-1 Correspondence:** A mapping where exactly $k$ elements from the domain correspond to a single element in the codomain.
*   **Permutation:** A specific ordering or arrangement of a set of distinct objects.
*   **Rank:** One of 13 values (Ace through King) in a standard deck of cards.
*   **Suit:** One of four categories (Hearts, Diamonds, Clubs, Spades) in a standard deck of cards.
*   **Surjective (Total):** A property of a function where every element in the target set is mapped to by at least one element from the starting set.