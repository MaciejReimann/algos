export default function quick_sort(arr: number[]) {
    quickSort(arr, 0, arr.length - 1);
}

function quickSort(arr: number[], start: number, end: number): void {
    if (start >= end) {
        return;
    }

    const pivotIndex = makePartition(arr, start, end);
    quickSort(arr, start, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, end);
}

function makePartition(arr: number[], start: number, end: number): number {
    const pivot = arr[end];

    let index = start - 1;

    for (let i = start; i < end; ++i) {
        const current = arr[i];
        if (current <= pivot) {
            index++;
            arr[i] = arr[index];
            arr[index] = current;
        }
    }
    index++;
    arr[end] = arr[index];
    arr[index] = pivot;

    return index;
}
