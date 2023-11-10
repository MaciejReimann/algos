export default function binary_fn(arr: number[], num: number): boolean {
    let low = 0;
    let high = arr.length;

    while (low < high) {
        const middleIndex = Math.floor(low + (high - low) / 2);
        const value = arr[middleIndex];

        if (value === num) {
            return true;
        } else if (value > num) {
            high = middleIndex;
        } else {
            low = middleIndex + 1;
        }
    }

    return false;
}
