/*
Name: Aniket Pattanayak
Roll no. CSB24070
Subject: Advanced Programming
Assignment on Space Complexity 
*/

#include <stdio.h>
#include <stdlib.h>

int main() {
    printf("Size (n)\tSpace Complexity (Bytes)\n");
    printf("------------------------------------------\n");

    for (int n = 1000; n <= 10000; n += 1000) {
   
        int *arr = (int *)malloc(n * sizeof(int));
        
        if (arr == NULL) {
            printf("Memory allocation failed\n");
            return 1;
        }


        int space = n * sizeof(int);

        printf("%d\t\t%d bytes\n", n, space);

    }

    return 0;
}