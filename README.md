# Assignment 17

## Question

Build a user onboarding validation module for a platform. Create a core validation class that processes incoming application data, specifically a user's email address and age, and enforces strict business constraints before allowing registration to complete.

The system must ensure:

- The email string is neither null nor empty
- The email conforms to a standard email format with a valid identifier, @ symbol, and domain name
- Applicants must be at least 18 years old

Implementation Rules:

If choosing Java:

- Implement a checked exception named InvalidEmailException
- Implement an unchecked RuntimeException named UnderageException
- Create RegistrationService with public boolean registerUser(String email, int age) throws InvalidEmailException
- Include an internal assert statement
- Write a JUnit 5 test suite named RegistrationServiceTest using @BeforeEach and assertThrows

If choosing Python:

- Implement custom exceptions InvalidEmailError and UnderageError
- Create RegistrationService with def register_user(self, email: str, age: int) -> bool
- Use an internal assert statement to verify basic state invariants
- Write a pytest suite using a shared @pytest.fixture
- Validate successful workflows and use pytest.raises for invalid inputs

You must have:

- Custom Exception Design
- Core Service Validation
- Unit Testing Suite
