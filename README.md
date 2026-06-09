# Assignment 18

## Question

Create a simple data utility class that reads an integer value from a text file, performs a calculation, and ensures all system resources are properly closed afterward, even if something goes wrong.

The program must:

- Read a numeric score from a file
- Multiply it by 10 and return the result
- Catch a missing file error and notify the user with a specific message
- Handle invalid data gracefully when the file contains letters instead of a number
- Write basic automated tests for successful calculation and bad inputs

Implementation Rules:

If choosing Java:

- Create ScoreProcessor
- Write public int processScoreFile(String filePath)
- Use try-catch-finally or try-with-resources
- Catch FileNotFoundException and NumberFormatException specifically
- Print File cleanup completed in finally
- Write a JUnit 5 test suite with at least two test cases

If choosing Python:

- Create ScoreProcessor
- Write def process_score_file(self, file_path: str) -> int
- Use try-except-else-finally
- Catch FileNotFoundError and ValueError specifically
- Print helpful error messages
- Print Data processed successfully in else
- Print File cleanup completed in finally
- Write pytest tests for success and missing file handling

You must have:

- Exception Handling and Structure
- Core Logic and Input Validation
- Unit Testing
