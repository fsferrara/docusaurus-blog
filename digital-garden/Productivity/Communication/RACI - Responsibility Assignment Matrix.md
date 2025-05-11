General overview of RACI.  In our case, we define the roles as follows:

- **R** = Responsible for Implementation: Those who will do the work to implement the RFC. This may include individuals from any and all functional groups.
- **A** = Accountable for RFC: The one ultimately answerable for:
    - Enlisting stakeholders and contributors into the RFC working group.
    - Ensuring working group engagement, and approval of the proposed solution design.
    - Overseeing or delegating implementation of the RFC following its approval.
    - There must be only one accountable individual.
- **C** = Consulted: Those whose opinions are sought, typically subject matter experts, and with whom there is two-way communication.
- **I** = Informed: Those who are kept up-to-date on progress, most importantly approval of the RFC; and with whom there is generally one-way communication.

## Responsible vs Accountable

**Responsibility** and **Accountability** are two terms often used interchangeably, but they have distinct meanings, especially in a workplace context. The main difference between responsibility and accountability is that responsibility can be shared while accountability cannot. Being accountable not only means being responsible for something but also ultimately being answerable for your actions.

- Responsibility refers to the duty to carry out a task to completion. It’s about efficiently completing tasks that your role requires.
  - e.g. in the context of maintaining a specific latency SLO for a backend service, the responsible person would be the one who is tasked with monitoring the service, identifying any issues that could affect latency, and implementing solutions to maintain the SLO. This could involve tasks like optimizing code, managing server resources, or adjusting configurations.

- Accountability generally refers to what happens after something has happened. It’s about being answerable for your actions and their effects.
  - e.g. The accountable person is the one who ultimately answers for the performance of the backend service. If the service fails to meet the latency SLO, the accountable person would need to explain why the issue occurred, what steps were taken to address it, and how similar issues will be prevented in the future.

In summary, while many people can share responsibility for tasks, accountability usually falls on a specific individual/team. The responsible person does the work, while the accountable person answers for the outcome of that work.

## References

- [Responsibility assignment matrix - Wikipedia](https://en.wikipedia.org/wiki/Responsibility_assignment_matrix)
