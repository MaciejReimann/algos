export default function bubble_sort(arr: number[]) {
    for (let j = 0; j < arr.length - 1; j++) {
        for (let i = 0; i < arr.length - 1 - j; i++) {
            const current = arr[i];
            const next = arr[i + 1];

            if (next < current) {
                arr[i] = next;
                arr[i + 1] = current;
            }
        }
    }
    return arr;
}
