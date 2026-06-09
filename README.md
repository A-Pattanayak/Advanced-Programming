# Assignment 7

## Question

Develop an activity log analyzer in Python.

You are given a list of activity records:

```python
{
    "user": str,       # roll numbers of students
    "action": str,     # online activities of students such as apps, websites visited, etc.
    "duration": float  # screen time for each activity
}
```

You must:

1. Store data efficiently using Python built-in containers.
2. Implement the following:

```python
def total_time_per_user(logs: list[dict]) -> dict[str, float]
def most_active_users(logs: list[dict], k: int) -> list[str]
def unique_actions(logs: list[dict]) -> set[str]
```

3. Requirements:

- Use dict, set, and list
- Use comprehensions where appropriate
- Use sorted() with key
- Avoid explicit loops where possible
- Use typing annotations
- Use defaultdict optionally
- Use reduce() to compute total activity time

4. Perform complexity analysis:

- Time complexity for computing top K users
- Space complexity of storing intermediate results
