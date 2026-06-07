/*Name: Aniket Pattanayak
 * Roll no. CSB24070
 */

import java.util.*;
import java.util.stream.*;


class Student {

    private int id;
    private String name;
    private List<String> courses;          // ArrayList internally
    private Map<String, Integer> scores;   // HashMap internally

    public Student(int id, String name, List<String> courses, Map<String, Integer> scores) {
        this.id      = id;
        this.name    = name;
        this.courses = new ArrayList<>(courses);
        this.scores  = new HashMap<>(scores);
    }

    public double getAverageScore() {
        if (courses.isEmpty()) return 0.0;
        return courses.stream()
                .mapToInt(c -> scores.getOrDefault(c, 0))   // handle missing scores safely
                .average()
                .orElse(0.0);
    }

    // Getters
    public int               getId()      { return id;      }
    public String            getName()    { return name;    }
    public List<String>      getCourses() { return courses; }
    public Map<String,Integer> getScores(){ return scores;  }

    @Override
    public String toString() {
        return String.format("Student[%d] %-15s | avg: %.2f | scores: %s",
                id, name, getAverageScore(), scores);
    }
}


class StudentAnalyzer {

    /**
     * Returns top-N students sorted by average score (descending).
     * Time complexity: O(S log S) for sorting, O(S) for limit  → O(S log S)
     *   where S = number of students
     */
    public static List<Student> getTopNStudents(List<Student> students, int n) {
        return students.stream()
                .sorted(Comparator.comparingDouble(Student::getAverageScore).reversed())
                .limit(n)
                .collect(Collectors.toList());
    }

    /**
     * Returns average score per course across all students.
     * Time complexity: O(S × C)
     *   S = number of students, C = average courses per student
     */
    public static Map<String, Double> getAverageScorePerCourse(List<Student> students) {
      
        return students.stream()
                .flatMap(s -> s.getCourses().stream()
                        .map(c -> Map.entry(c, s.getScores().getOrDefault(c, 0))))
                .collect(Collectors.groupingBy(
                        Map.Entry::getKey,
                        Collectors.averagingInt(Map.Entry::getValue)
                ));
    }

    /**
     * Returns every unique course name across all students.
     * Time complexity: O(S × C)
     */
    public static Set<String> getAllUniqueCourses(List<Student> students) {
        return students.stream()
                .flatMap(s -> s.getCourses().stream())
                .collect(Collectors.toCollection(HashSet::new));
    }
}


public class StudentPerformanceAnalyzer {

    public static void main(String[] args) {

        // ── Build sample students ──────────────────────────────────────────
        List<Student> students = new ArrayList<>();

        students.add(new Student(1, "Alice",
                List.of("Math", "Physics", "CS"),
                Map.of("Math", 92, "Physics", 88, "CS", 95)));

        students.add(new Student(2, "Bob",
                List.of("Math", "Chemistry"),
                Map.of("Math", 75, "Chemistry", 80)));

        students.add(new Student(3, "Carol",
                List.of("CS", "Physics", "Chemistry"),
                Map.of("CS", 98, "Physics", 91, "Chemistry", 87)));

        students.add(new Student(4, "Dave",
                List.of("Math", "CS"),
                Map.of("Math", 60, "CS", 70)));

        students.add(new Student(5, "Eve",
                List.of("Math", "Physics", "Chemistry", "CS"),
                Map.of("Math", 85, "Physics", 90, "Chemistry", 88, "CS", 93)));

        // ── 1. All unique courses ──────────────────────────────────────────
        Set<String> uniqueCourses = StudentAnalyzer.getAllUniqueCourses(students);
        System.out.println("=== Unique Courses ===");
        System.out.println(uniqueCourses);

        // ── 2. Average score per course ────────────────────────────────────
        Map<String, Double> avgPerCourse = StudentAnalyzer.getAverageScorePerCourse(students);
        System.out.println("\n=== Average Score Per Course ===");
        avgPerCourse.entrySet().stream()
                .sorted(Map.Entry.<String, Double>comparingByValue().reversed())
                .forEach(e -> System.out.printf("  %-12s → %.2f%n", e.getKey(), e.getValue()));

        // ── 3. Top-3 students ──────────────────────────────────────────────
        List<Student> top3 = StudentAnalyzer.getTopNStudents(students, 3);
        System.out.println("\n=== Top 3 Students (by average score) ===");
        top3.forEach(System.out::println);

        // ── 4. Full ranking ────────────────────────────────────────────────
        List<Student> allRanked = StudentAnalyzer.getTopNStudents(students, students.size());
        System.out.println("\n=== Full Ranking ===");
        IntStream.range(0, allRanked.size())
                .forEach(i -> System.out.printf("  #%d %s%n", i + 1, allRanked.get(i)));

        // ── 5. Complexity Analysis ─────────────────────────────────────────
        printComplexityAnalysis();
    }

    static void printComplexityAnalysis() {
        int C = 3; // average courses per student (fixed assumption)

        System.out.println("\n╔═════════════════════════════════════════════════════════════════════════════════════════════╗");
        System.out.println("║                          COMPLEXITY ANALYSIS  (S = 10 → 1000,  avg C = 3)                   ║");
        System.out.println("╠══════════════╦══════════════════════════════╦═══════════════════════════════╦════════════════╣");
        System.out.println("║   Students   ║  getAllUniqueCourses          ║  getAverageScorePerCourse      ║ getTopNStudents║");
        System.out.println("║     (S)      ║  O(S×C) ops                  ║  O(S×C) ops                    ║ O(S log S) ops ║");
        System.out.println("╠══════════════╬══════════════════════════════╬═══════════════════════════════╬════════════════╣");

        // Loop: S from 10 to 1000 in steps
        for (int S = 10; S <= 1000; S += (S < 100 ? 10 : S < 500 ? 100 : 500)) {
            int linearOps  = S * C;                                     // O(S × C)
            int sortingOps = (int)(S * (Math.log(S) / Math.log(2)));   // O(S log S)
            System.out.printf("║  %-11d ║  O(%4d × 3) = %-13d ║  O(%4d × 3) = %-14d ║  %-14d ║%n",
                    S, S, linearOps, S, linearOps, sortingOps);
        }

        System.out.println("╠══════════════╩══════════════════════════════╩═══════════════════════════════╩════════════════╣");
        System.out.println("║  Key Insight:                                                                                ║");
        System.out.println("║   • getAllUniqueCourses  →  O(S × C)   : grows linearly with students                       ║");
        System.out.println("║   • getAveragePerCourse →  O(S × C)   : single-pass flatMap + groupingBy                    ║");
        System.out.println("║   • getTopNStudents     →  O(S log S) : dominated by sort, grows slightly faster            ║");
        System.out.println("║   • Overall Bottleneck  →  O(S log S) : sorting is the most expensive step                  ║");
        System.out.println("╚══════════════════════════════════════════════════════════════════════════════════════════════╝");
    }
}