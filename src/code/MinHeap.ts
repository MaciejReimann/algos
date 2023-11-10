export class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.data = [];
        this.length = 0;
    }

    private swap(indexA: number, indexB: number) {
        //  this.data[indexA] = parentValue;
        //  this.data[parentIndex] = value;
    }

    private heapifyUp(index: number) {
        if (index === 0) {
            return;
        }

        const parentIndex = this.getParent(index);
        const parentValue = this.data[parentIndex];
        const value = this.data[index];

        if (parentValue > value) {
            this.data[index] = parentValue;
            this.data[parentIndex] = value;
            this.heapifyUp(parentIndex);
        }
    }

    private heapifyDown(index: number) {
        const leftIndex = this.getLeftChild(index);
        const rightIndex = this.getRightChild(index);

        if (index >= this.length || leftIndex >= this.length) {
            return;
        }

        const leftValue = this.data[leftIndex];
        const rightValue = this.data[rightIndex];
        const value = this.data[index];

        if (leftValue > rightValue && value > rightValue) {
            // right value is the smallest and we are greater than the smallest
            this.data[index] = rightValue;
            this.data[rightIndex] = value;
            this.heapifyDown(rightIndex);
        } else if (rightValue > leftValue && value > leftValue) {
            this.data[index] = leftValue;
            this.data[leftIndex] = value;
            this.heapifyDown(leftIndex);
        }
    }

    private getParent(index: number) {
        return Math.floor((index - 1) / 2);
    }

    private getLeftChild(index: number) {
        return index * 2 + 1;
    }

    private getRightChild(index: number) {
        return index * 2 + 2;
    }

    insert(value: number) {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }

    delete() {
        if (this.length === 0) {
            return;
        }

        const head = this.data[0];

        this.length--;
        if (this.length === 0) {
            this.data = [];
            return head;
        }

        this.data[0] = this.data[this.length];
        this.heapifyDown(0);

        return head;
    }
}
