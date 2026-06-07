/*
Name:Aniket Pattanayak
Roll no. CSB24070
Subject: Advanced Programming
Assignment on Time and Space Complexity 
*/

#include <stdio.h>
#include <stdlib.h>
#include <time.h>
int Lsearch(int arr[], int n, int key) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == key)
            return i;
    }
    return -1;
}
int ArrAccess(int arr[], int index) {
    return arr[index];
}
void SSort(int arr[], int n) {
    int temp;
    for (int i = 0; i < n - 1; i++) {
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[i]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}
int main() {
    clock_t start, end;
    double t1, t2, t3;
    printf("Size\tQuadratic\tLinear\t\tConstant\tSpace_complexity\n");
    for (int n = 1000; n <= 10000; n += 1000) {
        int *arr = malloc(n * sizeof(int));
        int index = n / 2;
        for (int i = 0; i < n; i++){
            arr[i] = i;}
        start = clock();
        SSort(arr, n);
        end = clock();
        t1 = (double)(end - start) / CLOCKS_PER_SEC;
        start = clock();
        Lsearch(arr, n, index);
        end = clock();
        t2 = (double)(end - start) / CLOCKS_PER_SEC;
        start = clock();
        ArrAccess(arr, index);
        end = clock();
        t3 = (double)(end - start) / CLOCKS_PER_SEC;
        int space = n * sizeof(int);
        printf("%d\t%f\t%f\t%f\t%d\n", n, t1, t2, t3, space);
        free(arr);
    }
    return 0;
}