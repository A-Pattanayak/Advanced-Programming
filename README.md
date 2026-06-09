# Assignment 8

## Question

Develop a course enrollment dashboard in React.js.

You are building a React component that displays enrolled students.

Each student:

```js
{
  id: number,
  name: string,
  enrolledCourses: Set<string>,
  gpa: number
}
```

You must:

1. Maintain students in state.
2. Implement the following features:
   - Add new student
   - Remove student by ID
   - Display students sorted by GPA in descending order
   - Display all unique courses across students
   - Filter students enrolled in a specific course
3. Use the following:
   - useState
   - Map internally for id to student mapping
   - Set for course uniqueness
   - map, filter, and reduce
   - Do not mutate state directly
   - Use spread operator for updates
   - Convert Set to array before rendering
4. Compute time complexity of filtering students by course.
