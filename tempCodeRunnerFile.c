#include <stdio.h>

int main() {
    int marks;
    printf("Enter Your total marks : ");
    scanf("%d", &marks);

    if (marks >= 75 && marks <= 100) {
        printf("A+\n");
    } else if (marks >= 45 && marks <= 74) {
        printf("B+\n");
    } else if (marks >= 35 && marks <= 44) {
        printf("C+\n");
    } else {
        printf("Fail\n");
    }

    return 0;
}