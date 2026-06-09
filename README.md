# Assignment 15

## Question

Write a multithreaded C program using POSIX threads where multiple threads increment a shared global counter variable many times.

First implement the program without synchronization and observe the incorrect output caused by a race condition. Then modify the program using a mutex to protect the critical section and produce the correct final counter value.

Your program must demonstrate:

- Thread creation using pthread_create()
- Synchronization using pthread_mutex_lock() and pthread_mutex_unlock()
- Thread completion using pthread_join()
- A brief explanation of why the race condition occurs and how the mutex solves the problem
