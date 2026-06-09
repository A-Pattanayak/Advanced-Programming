# Assignment 13

## Question

In C, managing strings is a common source of buffer overflows and memory leaks. Implement a Dynamic String Buffer that automatically grows as needed.

Requirements:

1. Create a StringBuffer struct containing char *data, size_t length, and size_t capacity.
2. Write a function sb_init(size_t initial_capacity) that allocates the struct and data buffer on the heap. Handle NULL returns from malloc.
3. Write sb_append(StringBuffer *sb, const char *str).
4. If the new string exceeds current capacity, use realloc to double the capacity. Handle realloc safely and do not overwrite the original pointer if it returns NULL.
5. Write sb_free(StringBuffer *sb), working as a destructor that frees both the internal data and the struct itself to prevent memory leaks.
6. Demonstrate the buffer growing at least twice and then free all memory.
