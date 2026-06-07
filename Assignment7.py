#Name: Aniket Pattanayak
#Roll no. CSB24070

from typing import List, Dict, Set
from collections import defaultdict
import random
import time


def total_time_per_user(logs: List[Dict]) -> Dict[str, float]:
    totals = defaultdict(float)

    for log in logs:
        totals[log["user"]] += log["duration"]

    return {user: round(total, 2) for user, total in totals.items()}


def most_active_users(logs: List[Dict], k: int) -> List[str]:
    totals = total_time_per_user(logs)

    sorted_users = sorted(
        totals.items(),
        key=lambda item: item[1],
        reverse=True
    )

    return [user for user, _ in sorted_users[:k]]


def unique_actions(logs: List[Dict]) -> Set[str]:
    return {log["action"] for log in logs}


def generate_logs(n: int) -> List[Dict]:
    users = [f"User{i}" for i in range(1, 21)]
    actions = ["YouTube", "Instagram", "Chrome", "WhatsApp", "Telegram"]

    return [
        {
            "user": random.choice(users),
            "action": random.choice(actions),
            "duration": round(random.uniform(5, 120), 2)
        }
        for _ in range(n)
    ]


logs = generate_logs(20)

print("Total Time Per User:")
print(total_time_per_user(logs))

print("\nTop 3 Most Active Users:")
print(most_active_users(logs, 3))

print("\nUnique Actions:")
print(unique_actions(logs))


print("\nComplexity Analysis (10 to 1000 logs):")
for size in range(10, 1001, 200):
    logs = generate_logs(size)

    start = time.perf_counter()
    most_active_users(logs, 3)
    end = time.perf_counter()

    print(f"Logs: {size}, Time Taken: {end - start:.6f} seconds")