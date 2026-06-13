# From Blindness to Bitcoins: 5 Surprising Lessons from Stanford’s Probability Lab

It is a Friday afternoon at Stanford University, and the atmosphere in the CS109 "Probability for Computer Scientists" lecture is a distinct blend of end-of-week fatigue and high-stakes curiosity. The lecturer, Chris Piech, begins not with a formula, but with a photo of his baby doing what she calls "Yoda"—a toddler’s attempt at yoga stretches during a 5:45 a.m. dance party. 

In the world of computer science, probability is often taught as a series of grueling, abstract derivations. However, this session pivots toward something more profound: how we model the uncertainty of the real world—from the timing of the next California earthquake to the mechanics of Bitcoin mining and the personal reality of vision loss. By shifting the perspective from rote math to "technical storytelling," we uncover essential lessons for navigating a random world.

## 1. The "Problem Child" Eye: Finding Silver Linings in Randomness

The lecture takes an unexpectedly personal turn as Professor Piech shares his experience of being legally blind in his left eye. Diagnosed at age 11 while living in Kenya, he narrowly avoided total blindness thanks to a doctor in Nairobi who identified a rare disease just as it began attacking his right eye. While his left eye remains his "problem child"—a constant reminder of the risk of total vision loss—he views the condition as a "nice little light" in his life.

This perspective highlights a philosophical takeaway: random events, even seemingly negative ones, often carry unexpected "silver linings." While a PhD student at Stanford, Piech’s condition led to a chance encounter during a pre-op appointment with an eye surgeon. Their conversation about Artificial Intelligence sparked a collaboration that resulted in three published scientific papers. He reflects on how the threat of losing a sense created a deep sense of gratitude:

> "There is something about being a middle schooler where it's hard to appreciate life... but I had this weird experience at Middle School where I was like, 'Whoa, I’m supposed to not be able to have one of these primary senses and yet I do.' And so I have this appreciation that was a big part of my life."

In probability, as in life, we do not choose the variables; we choose how we model and respond to the "cards we are dealt."

## 2. Stop Deriving, Start Narrating: The Wikipedia Strategy

For many students, mathematics is a climb up a mountain of derivations. But for the "future you" working in high-level computer science, the professor advocates a different approach: **The Wikipedia Strategy.**

Imagine you are optimizing a server and encounter the "Borel Distribution" (common in $M/D/1$ queuing theory). You likely didn’t learn it in school. Instead of panicking or trying to derive it from first principles, you should head to Wikipedia and identify four specific elements to "own" the random variable:

1.  **The Story:** What is the real-world metaphor? (e.g., "Binomial is $n$ coin flips.")
2.  **The Parameters:** What values do you need to input? (e.g., $n$ trials, $p$ probability.)
3.  **The PMF/PDF:** What is the mathematical relationship between values and their likelihood?
4.  **The Expectation and Variance:** What is the average outcome and the "spread" of the data?

By treating distributions as tools with stories, you "inherit" the math instead of reinventing it. This is essential for modern applications like **Bitcoin mining**. In the Bitcoin protocol, miners use the SHA-256 hashing algorithm to find a bit string that starts with $G$ zeros. The probability of success on any given try is $p = (1/2)^G$. 

If you want to know how many Bitcoins you will mine in $n$ attempts, you use the **Binomial Story**. If you want to know how many attempts it will take to mine exactly $r$ Bitcoins, you use the **Negative Binomial Story**. The math is already solved; you just need to know which story to tell.

## 3. The Justice Breyer Error: Why the "Story" Matters

To illustrate the high stakes of choosing the right distribution, Piech points to a real-world case involving Stanford alum and former Supreme Court Justice Stephen Breyer. During a case on jury selection bias, Breyer hypothesized a scenario: an urn contains 1,000 balls, 60 of which are blue (representing a minority group) and 940 are purple. If you select a jury of 12 people, what is the probability that at least one minority member is chosen?

Breyer estimated the probability was between "a third to a half." However, using the **Binomial Distribution** ($n=12, p=60/1000$), the actual probability is approximately 52%. While Breyer’s intuition was close, he was technically off. More importantly, he was using the Binomial model, which assumes "sampling with replacement" (the probability stays constant). In a real jury selection, you don't put the person back in the pool, meaning a **Hypergeometric Distribution** is the "truer" story. 

Though the difference in the result is small ($0.5241$ vs. $0.5261$), the lesson is clear: even in the highest courts in the land, the ability to map reality to the correct mathematical story is a vital skill.

## 4. The "Infinite Precision" Trap: The Marguerite Bus Stop

One of the most jarring transitions in probability is the move from discrete variables (counting things) to continuous variables (measuring things). To explain this, Piech uses the **Marguerite Bus Stop** metaphor. 

If you arrive at the bus stop at 2:15 p.m., what is the probability the bus arrives at *exactly* 2:17 p.m.? In a continuous world, the answer is zero. If the bus arrives even one billionth of a second after 2:17, it is no longer "exactly" 2:17. This is the **Infinite Precision Trap**. 

To solve this, we imagine discretizing time into 5-minute chunks, then 2.5-minute chunks, then infinitely small "buckets." This transition is the birth of the integral. We stop using a Probability Mass Function (PMF) and start using a **Probability Density Function (PDF)**, denoted as $f(x)$. The PDF is the derivative of probability; it doesn't give you a "chance" at a single point, but rather the relative likelihood that allows you to calculate the area (the probability) under a curve.

## 5. The Secret Sisterhood: Poisson vs. Exponential

In the Stanford lab, two distributions are described as "best friends" who "grew up together." These are the **Poisson** and the **Exponential** distributions. They are two sides of the same coin within a "Poisson Process":

*   **Poisson (The Counter):** This counts the number of events in a fixed window of time. *How many earthquakes will California have this year?*
*   **Exponential (The Timer):** This measures the amount of time *until* the first event occurs. *How many years will we wait until the next earthquake?*

Using California earthquake data, where the rate ($\lambda$) is $0.002$ events per year, these two variables work in tandem. As the professor notes:

> "I think of them as best friends... they’re so similar in so many ways but they’ve got their own personalities."

If you are counting successes, you are a Poisson person. If you are waiting for the next one to arrive, you are an Exponential person.

## 6. The "Calculus Cheat Code": The Power of the CDF

While the PDF is essential for understanding the *shape* of continuous probability, it often requires solving difficult integrals. For the "modern mathematician," the **Cumulative Distribution Function (CDF)**—represented by a capital $F(x)$—is the ultimate hero.

The CDF represents the probability that a random variable is *less than or equal to* a certain value: $F(x) = P(X \le x)$. Because the CDF for an exponential distribution is a closed-form equation ($1 - e^{-\lambda x}$), it allows you to solve complex problems without performing an integral. 

*   **The PDF Person:** Cries as they try to integrate $\lambda e^{-\lambda x}$ from 0 to 4.
*   **The CDF Person:** Has a "blast" by simply plugging 4 into the closed-form equation.

To find the probability of a major earthquake in the next four years at Stanford ($\lambda = 0.002$), you simply calculate $F(4)$. The answer is $0.008$—a small but non-zero reality we must model.

## Conclusion: The Cards We Are Dealt

Behind the quad at Stanford stands a gate that was famously toppled by a magnitude 7.8 earthquake in 1906. It serves as a physical reminder that while the world is continuous and often unpredictable—whether through seismic shifts, the fluctuations of Bitcoin, or a sudden diagnosis of vision loss—we are not helpless. 

The professor’s final lesson is a return to the "random tree" of life. We do not control the distribution, but we do control the model. As you move through your week, ask yourself: Are you looking for the "number of successes" in your life today (Discrete), or are you measuring the "time until the next one" arrives (Continuous)? Both are valid ways to see the world; the trick is knowing which story to tell.