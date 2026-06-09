/*Aniket Pattanayak
  Roll no. CSB24070
*/


#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    char *data;
    size_t length;
    size_t capacity;
} StringBuffer;

StringBuffer *sb_init(size_t initial_capacity) {
    StringBuffer *sb = malloc(sizeof(StringBuffer));

    if (sb == NULL) {
        return NULL;
    }

    sb->data = malloc(initial_capacity);

    if (sb->data == NULL) {
        free(sb);
        return NULL;
    }

    sb->length = 0;
    sb->capacity = initial_capacity;
    sb->data[0] = '\0';

    return sb;
}

int sb_append(StringBuffer *sb, const char *str) {
    if (sb == NULL || str == NULL) {
        return 0;
    }

    size_t str_len = strlen(str);
    size_t required_capacity = sb->length + str_len + 1;

    while (required_capacity > sb->capacity) {
        size_t new_capacity = sb->capacity * 2;

        char *new_data = realloc(sb->data, new_capacity);

        if (new_data == NULL) {
            return 0;
        }

        sb->data = new_data;
        sb->capacity = new_capacity;

        printf("Buffer grew to capacity: %zu\n", sb->capacity);
    }

    memcpy(sb->data + sb->length, str, str_len + 1);
    sb->length += str_len;

    return 1;
}

void sb_free(StringBuffer *sb) {
    if (sb == NULL) {
        return;
    }

    free(sb->data);
    free(sb);
}

int main(void) {
    StringBuffer *sb = sb_init(8);

    if (sb == NULL) {
        printf("Failed to initialize StringBuffer.\n");
        return 1;
    }

    printf("Initial capacity: %zu\n", sb->capacity);

    sb_append(sb, "Hello");
    printf("Data: %s | Length: %zu | Capacity: %zu\n", sb->data, sb->length, sb->capacity);

    sb_append(sb, ", world!");
    printf("Data: %s | Length: %zu | Capacity: %zu\n", sb->data, sb->length, sb->capacity);

    sb_append(sb, " This is a dynamic string buffer.");
    printf("Data: %s | Length: %zu | Capacity: %zu\n", sb->data, sb->length, sb->capacity);

    sb_free(sb);

    return 0;
}