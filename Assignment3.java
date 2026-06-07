/*
 * CSB24070
 * Aniket Pattanayak
 * Purpose of program: Searching for books whose title contains a given word
 */

import java.util.ArrayList;
import java.util.Scanner;

public class BookSearch {
    public static void main(String[] args) {
        ArrayList<String> books = new ArrayList<>();
        Scanner scanner = new Scanner(System.in);

        books.add("Autocar");
        books.add("Sherlock Holmes");
        books.add("Teesta terror");
        books.add("Byomkesh Bakshi");
        books.add("Bhagirathi");

        System.out.print("Enter a word to search: ");
        String searchWord = scanner.nextLine();

        System.out.println("\n Search Results ");

        boolean found = false;

        for (String title : books) {
            if (title.toLowerCase().contains(searchWord.toLowerCase())) {
                System.out.println("Match found: " + title);
                found = true;
            }
        }

        if (!found) {
            System.out.println("No books found containing '" + searchWord + "'.");
        }

        scanner.close();
    }
}