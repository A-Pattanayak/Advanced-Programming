import java.util.List;

class Account {
    private String accountNumber;
    private String ownerName;
    private double balance;

    public Account() {
        this("UNKNOWN", "UNKNOWN", 0.0);
    }

    public Account(String accountNumber, String ownerName) {
        this(accountNumber, ownerName, 0.0);
    }

    public Account(String accountNumber, String ownerName, double balance) {
        setAccountNumber(accountNumber);
        setOwnerName(ownerName);
        setBalance(balance);
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(String accountNumber) {
        if (accountNumber == null || accountNumber.isBlank()) {
            throw new IllegalArgumentException("Account number cannot be empty");
        }
        this.accountNumber = accountNumber;
    }

    public String getOwnerName() {
        return ownerName;
    }

    public void setOwnerName(String ownerName) {
        if (ownerName == null || ownerName.isBlank()) {
            throw new IllegalArgumentException("Owner name cannot be empty");
        }
        this.ownerName = ownerName;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        if (balance < 0) {
            throw new IllegalArgumentException("Balance cannot be negative");
        }
        this.balance = balance;
    }

    public void deposit(double amount) {
        if (amount <= 0) {
            throw new IllegalArgumentException("Deposit amount must be positive");
        }
        balance += amount;
    }

    public void withdraw(double amount) {
        if (amount <= 0) {
            throw new IllegalArgumentException("Withdrawal amount must be positive");
        }
        if (amount > balance) {
            throw new IllegalStateException("Insufficient balance");
        }
        balance -= amount;
    }

    public void display() {
        System.out.println("Account Number: " + getAccountNumber());
        System.out.println("Owner Name: " + getOwnerName());
        System.out.println("Balance: " + getBalance());
    }
}

class SavingsAccount extends Account {
    private double interestRate;

    public SavingsAccount(String accountNumber, String ownerName, double balance, double interestRate) {
        super(accountNumber, ownerName, balance);
        setInterestRate(interestRate);
    }

    public double getInterestRate() {
        return interestRate;
    }

    public void setInterestRate(double interestRate) {
        if (interestRate < 0) {
            throw new IllegalArgumentException("Interest rate cannot be negative");
        }
        this.interestRate = interestRate;
    }

    public double calculateInterest() {
        return getBalance() * interestRate / 100;
    }

    @Override
    public void display() {
        super.display();
        System.out.println("Interest Rate: " + getInterestRate() + "%");
        System.out.println("Interest Amount: " + calculateInterest());
    }
}

class CurrentAccount extends Account {
    private double overdraftLimit;

    public CurrentAccount(String accountNumber, String ownerName, double balance, double overdraftLimit) {
        super(accountNumber, ownerName, balance);
        setOverdraftLimit(overdraftLimit);
    }

    public double getOverdraftLimit() {
        return overdraftLimit;
    }

    public void setOverdraftLimit(double overdraftLimit) {
        if (overdraftLimit < 0) {
            throw new IllegalArgumentException("Overdraft limit cannot be negative");
        }
        this.overdraftLimit = overdraftLimit;
    }

    @Override
    public void withdraw(double amount) {
        if (amount <= 0) {
            throw new IllegalArgumentException("Withdrawal amount must be positive");
        }
        if (amount > getBalance() + overdraftLimit) {
            throw new IllegalStateException("Withdrawal exceeds overdraft limit");
        }
        setBalance(getBalance() - amount);
    }

    @Override
    public void display() {
        super.display();
        System.out.println("Overdraft Limit: " + getOverdraftLimit());
    }
}

public class Main {
    public static void main(String[] args) {
        Account savings = new SavingsAccount("S101", "Akshay", 10000, 5);
        Account current = new CurrentAccount("C101", "Namaste Corp", 5000, 2000);

        savings.deposit(1000);
        current.withdraw(6000);

        List<Account> accounts = List.of(savings, current);

        for (Account account : accounts) {
            account.display();
            System.out.println();
        }
    }
}