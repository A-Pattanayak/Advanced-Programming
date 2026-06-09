# Assignment 16

## Question

Develop a multithreaded C program using POSIX threads where multiple threads coordinate access to a shared resource using either semaphores or condition variables.

You may implement a simple producer-consumer system, limited resource access system, or thread scheduling simulation.

The program should:

- Ensure threads wait correctly when the resource is unavailable
- Continue execution only when signaled
- Demonstrate proper synchronization
- Demonstrate safe shared-memory access
- Demonstrate thread communication using functions such as sem_wait(), sem_post(), pthread_cond_wait(), or pthread_cond_signal()
- Print messages showing thread execution order
- Explain how synchronization prevents inconsistent behavior
