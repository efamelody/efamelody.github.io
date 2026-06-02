import { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "when-do-we-fully-know-everything",
    title: "When do we fully know everything?",
    date: "June 2026",
    excerpt:
      "Life often feels like a series of consecutive hurdles. But there is one invisible hurdle that has followed me through every single stage of life: the feeling of not knowing enough.",
    tags: ["reflection", "career", "growth", "software-engineering"],
    content: `Life often feels like a series of consecutive hurdles. Get the grades. Secure the scholarship. Earn the degree. Land the first job. We are trained to always look for the next big thing.

But there is one invisible hurdle that has followed me through every single stage of life: **the feeling of not knowing enough.**

Studying Computer Science wasn't easy. In university, you touch the surface of almost everything. It felt satisfying to learn, but it was equally humbling. I constantly questioned my worth when seeing peers who seemed miles ahead of me. Yet, every time I managed to finally figure a complex problem out, the satisfaction was unmatched.

Then came the real world.

Starting my first job as a full-stack developer was when I truly found myself nose-deep in production software engineering. To be completely honest, when I walked in on Day One, I felt like I knew nothing. Everyday brought a different challenge. I was used to coding scripts in Python, and suddenly my environment demanded TypeScript. I didn't even fully grasp what a production API looked like at the start. It is slightly embarrassing to think back on now, but the learning curve was a vertical cliff.

Work was demanding. In the beginning, I made a guilty confession to myself: I relied heavily on AI just to stay afloat. Everyday was a chaotic loop of discovering new tools—Postman, Remix, DBeaver. I didn't even know *what* I didn't know, which was incredibly overwhelming.

But midway through, reality hits you. Production code is vastly different from a university project. What happens when a system goes down in production? Why is a specific regression bug happening? AI can generate a code patch, but it can't understand the systemic "why."

I was incredibly fortunate to sit beside a colleague who took the time to show me how to use the browser inspector properly and explained the core lifecycle of web frameworks. More than just teaching me tools, he taught me *how to learn* instead of fully relying on a prompt. For that, I am deeply grateful. At the end of the day, AI can only do so much. You are the engineer. You have to investigate. You have to solve the puzzle.

Taking a step back to re-learn the absolute fundamentals was a deeply humbling experience. It's easy to feel overwhelmed by how fast this industry evolves. The endless loop of new frameworks, languages, and tech stacks. When looking at job descriptions, you naturally wonder: *Do I really need to know it all?*

During an appraisal review, I asked my technical director a question that had been weighing on me: *"How do you overcome this constant feeling of not knowing?"* I looked up to my leadership team and aspired to have that level of deep technical confidence.

He gave me two pieces of advice I will keep for the rest of my career:

1. **Focus on the feeling of building cool things.** What keeps you motivated is that exact spark when you finish an elegant feature and realize, *"Wow, I built something cool."*
2. **Be strong-hearted.** It is okay to make mistakes in development now, rather than breaking systems in production later.

I am currently taking a deliberate career break to reset, realign, and deep-dive back into pure engineering practices without relying on an AI crutch. I truly believe that if you put in the honest dedication and effort, Allah will bless the journey and handle the rest. I just never want to look back and have regrets for not trying my hardest.

You stop improving the moment you think you know everything. I don't know everything and I'm excited to keep learning.`,
  },
  {
    slug: "air-pollution-modelling-dissertation",
    title: "Air Pollution Modelling and Source Inference: My Dissertation Journey",
    date: "July 2025",
    excerpt:
      "I never thought I would be doing data science for environmental research. I ended up with a dissertation on Air Pollution Modelling and Source Inference — a project that gave me a real sense of purpose in my degree.",
    tags: ["dissertation", "research", "environmental-science", "machine-learning"],
    content: `I never knew I would be doing data in environmental science. In fact, I did not even put this project in my top choices.

I have always loved working with data, analysing patterns and drawing insights. I ended up with a dissertation on **Air Pollution Modelling and Source Inference**.

I have always had a soft spot for environmental science, but I never thought I could contribute to it as a Computer Science student.

## The Framework

I worked with a cutting-edge research model developed by my lecturer and his team — the **Advection Gaussian Process (Advection GP)** framework.

> [Advection GP Framework](https://lnkd.in/gVdpmhcA)

This model had only ever been tested on synthetic data, where everything can be controlled. My job? See if it could work on **real-world data**.

That sounds simple — but it was not.

Since this had never been done before, I had to figure out a lot on my own. Along the way, I ended up providing valuable insights for my supervisor's research.

## Challenges of Real-World Data

Applying theory to reality meant dealing with:

- **Satellite data uncertainty** — AOD reanalysis vs raw satellite data
- **Column-integrated AOD** — no fixed height, yet wind varies by altitude. I had to explore ways to convert AOD into PM2.5
- **2D was not enough** — vertical transport mattered, so we needed 3D
- **Map projections** — the Earth being round complicates things
- Understanding the limits of NASA reanalysis data
- Reading and adapting complex research code
- Figuring out how to validate and visualise outputs

At times, it felt like I was doing everything: from learning pollution transport physics, to finding validation data, doing literature reviews on different methods of source inference, visualisation, and understanding satellite-derived measurements.

## Case Study

My case study focused on the **2019–2020 Australian bushfires**, modelling how pollution spread across Victoria.

Along the way, I learned so much — from uncertainty in environmental modelling to the messiness of real-world data.

## Outcome

I achieved a **Distinction (75)** for this dissertation.

But more than that, I am proud of the learning journey. This went far beyond the classroom; it involved self-driven research, weekly planning, and constant learning.

I would not have made it through without the support of my amazing supervisor, **Dr. Michael Smith**, who encouraged me at every step. This project gave me a real sense of purpose in my degree, like I was actually contributing to society.

## Looking Forward

When people ask what I want to do after graduation — I think it is something like this. Insha Allah, I would love to return to this field one day. But first, I am looking for a role where I can continue growing — especially in using data to solve real-world problems.

The code is adapted from my lecturer's original model, which was tested only on synthetic data. My forked repo builds on it to apply the framework to real-world conditions.`,
  },
  {
    slug: "first-year-reflections",
    title: "First Year Done: A Rollercoaster of Emotions",
    date: "July 2023",
    excerpt:
      "Alhamdulillah, first year is over and I am finally home for the summer. Studies were never easy for me, and every task and assignment felt like a mountain to climb. This is the reality of studying abroad.",
    tags: ["university", "uk", "reflection", "growth"],
    content: `Alhamdulillah, first year is over and I am finally home for the summer. I do not know how I would summarise my first year — it was mixed emotions throughout.

As much as I had my friends, and I am really thankful for them, studies would always never be easy for me. I feel like I rant so much about my studies here, but my life always revolves around studying. It is a significant chapter of my life right now and always has been.

## Starting from Scratch

I went into this degree not knowing anything. The only topic I was well-versed in from my college days was HTML, and that is pretty much it. It was a struggle having no background in programming, but from the start, I tried to be at peace with my fate.

I opened my heart to wanting to learn something new and embark on this new chapter of mine — my degree life in a whole new country. As much as I tried to be positive, there is always going to be self-doubt during tough times.

## The Reality

Every task and assignment was harder for me because everything was new. Seeing other people being better than me from the start was really hard. I always had to catch up with what was happening. As much as I wanted to be on top of my studies, it felt like a domino effect with time constraints and a lot of things on my plate. It felt like it was hard to breathe at times.

This is the reality. Studying abroad is not all fantasy. It is also a girl who has a dream and is trying. There are times her motivation decreases and she thinks she is never going to make progress. Staying positive is what made me push through.

## Small Victories

There were days when I would sit all day figuring out how to solve my code. I remember locking myself in a room because I really wanted to do the task on my own with minimum help from my friends. I felt a sense of accomplishment with my marks.

However, there were also times when I stared at the screen not understanding what the assignment wanted or where to start. When I started to type, nothing came to my mind. I spent hours figuring out my errors. I am saying all this because I do not want to look down on my effort or progress.

I really felt like I had no life during the semester. Weekdays were classes all day, and weekends were spent filling the gaps from the weekdays. I was living from week to week, and time was passing by me like it was nothing. I almost felt empty and lost. All the self-doubt constantly crept behind me and it broke me.

## Looking Ahead

Now that it is all over, first year is done. You would think I am not lost anymore, but I am still scared of what the future holds for me. I want to believe in progress and all my effort. From time to time, Allah has shown me that effort never fails you — but your mind takes you another route all the time.`,
  },
];
