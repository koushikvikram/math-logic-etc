# The "One in a Million" Fallacy: What MIT Probability Can Teach Us About Risk, Rube Goldberg Machines, and Your Portfolio

### 1. Introduction: The Mathematics of the Impossible

The music video for OK Go’s "This Too Shall Pass" is a masterpiece of visual choreography—a four-minute, single-take Rube Goldberg machine where dominoes, bowling balls, and paint buckets trigger one another in a flawless sequence. To the casual viewer, it is a miracle of precision. To a mathematician, however, the video looks like a statistical impossibility.

In any complex system, the distance between a viral success and a catastrophic collapse is governed by two hidden forces: **Expectation** and **Variance**. Expectation represents the average outcome we predict over time—the "center" of our results. Variance measures the "swing"—the risk or deviation from that average. Understanding the interplay between these two concepts does more than explain why a music video works; it changes how we navigate everything from engineering projects to the volatility of our financial portfolios.

### 2. Murphy’s Law is a Formal Theorem

We often dismiss Murphy’s Law—"whatever can go wrong, will go wrong"—as a cynical proverb. In the realm of probability theory, however, it is a formalized mathematical certainty. As Professor Erik Demaine explains in his MIT curriculum, Murphy’s Law can be distilled into a rigorous theorem: if a system is composed of many independent events and the expected number of those events occurring is large, the probability of at least one occurring approaches 100%.

> "The probability that at least one event occurs is at least $1 - 1 / e^{E[N]}$." — Professor Erik Demaine

This suggests that in complex systems, failure isn't a fluke; it is mathematically expected. However, there is a critical nuance to this "mathematical certainty": **mutual independence**. For Murphy’s Law to guarantee a failure, the points of failure must not be linked. 

Demaine illustrates this by contrasting independent events with the "Lazy Susan" or turntable example. If you place several people around a rotating table where their phones are returned based on the table's rotation, the events are highly *dependent*. If the table stops in the wrong place for one person, it is wrong for everyone. In such a dependent system, the probability of success remains low (1/n) because the failures are coupled. Murphy’s Law only becomes a formal "certainty" when the dominoes are free to fall—or fail—on their own.

### 3. The OK Go Secret: Why 1-in-a-Million Shots Actually Happen

The OK Go Rube Goldberg machine featured approximately 130 components. If we assume each component is well-engineered with a 90% success rate, the probability of the entire sequence working in a single take is roughly $1 - (1 - p)^n$. This results in a success rate of 0.00011%—essentially a one-in-a-million shot.

How did the band overcome these impossible odds? The answer lies in managing the variance of the system's components. During a conversation with Demaine, the band's lead singer, Damian Kulash, shared an "insider" secret:

> "The secret for it working was to do the math after you've made the video instead of before." — Damian Kulash

While the band joked about setting up the dominoes "roughly 6 billion times" (a hyperbolic nod to the immense labor involved), the true engineering feat was in the distribution of risk. They distinguished between:

*   **Small, Unpredictable Components:** The dominoes at the start of the video were fickle and easily disturbed by air currents. They failed constantly, requiring thousands of resets.
*   **Large, Reliable Components:** As the video progressed, the interactions moved toward "huge interactions" involving heavy objects like bowling balls. These components were far more reliable because their mass made them less susceptible to environmental variables.

By back-loading the video with low-variance, high-reliability components, the band ensured that once the fickle dominoes survived their initial run, the rest of the machine was likely to follow through. Success wasn't about making every part perfect; it was about managing which failures were allowed to happen and where.

### 4. The Golden Rule of Statistics: Never Divide Random Variables

If the OK Go story is about managing failure, the next lesson is about accurately measuring success. In data analysis, there is a trap so common and so deceptive it is known as the "Liar’s Technique." The rule is simple: **Don't divide random variables, ever.**

When we take the "expectation of ratios"—averaging the results of multiple divisions—we often create a mathematical fiction. Demaine cites a computer architecture study comparing two processors, P1 and P2, across various workloads. By choosing which processor to put in the denominator of a ratio, a researcher can manipulate the data to show that P1 is faster than P2, or that P2 is faster than P1, even when their average performance is identical.

To avoid this "deceptive success," one must use the **Ratio of Expectations**. 
*   **The Wrong Way:** Dividing the time of P1/P2 for each task and then averaging those ratios.
*   **The Right Way:** Summing the raw data (total time) for all workloads first, then performing the ratio. 

Summing the raw performance before dividing provides the ground truth for total workload performance. Without this rigor, data can be massaged to support any story you like.

### 5. Diversification: Why Math Says You Should Not "Put All Your Eggs in One Basket"

The final application of these principles is in the strategic reduction of risk within a portfolio. In probability, Variance ($Var$) is the primary measure of risk, and Standard Deviation ($\sigma$) is its square root. 

If you invest $1,000 in a single volatile stock, your "swing" is massive. However, if you split that $1,000 across $k$ independent stocks, the math of variance works in your favor:

*   **The Squaring Effect:** When you divide an investment into $k$ parts, the constant ($1/k$) is pulled out of the variance formula and **squared** ($1/k^2$).
*   **The Summation Benefit:** While the variance of each individual piece is reduced by $1/k^2$, you are summing $k$ of these independent pieces.
*   **The Result:** The total variance of the diversified portfolio becomes $k \times (1/k^2)$, which simplifies to $1/k$.

By increasing $k$ (the number of independent investments), you reduce the overall variance of the system by a factor of $1/k$. This is why "diversifying your portfolio" is more than just a cliché; it is a mathematical strategy to drive down the "Standard Deviation" (the risk) without necessarily sacrificing your expected return.

### 6. Conclusion: Living with Variance

Navigating the complexities of modern life requires a constant balancing act between Expectation and Variance. Expectation tells us the average outcome we can hope for, but Variance tells us how much we might suffer—or celebrate—along the way. 

Whether you are engineering a 130-step machine, auditing processor benchmarks, or managing a retirement fund, the goal is rarely to eliminate the possibility of failure entirely. Instead, the goal is to manage the variance of the whole system so that inevitable individual failures do not trigger a total collapse.

If life is a Rube Goldberg machine, are you focusing on the individual dominoes, or are you managing the variance of the whole system?