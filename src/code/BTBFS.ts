export function bfs(head: BinaryNode<number>, target: number) {
    const queue: (BinaryNode<number> | null)[] = [head];

    while (queue.length) {
        // dequeue
        const current = queue.shift() as BinaryNode<number> | undefined | null;
        if (!current) {
            continue;
            /*
             * The continue statement terminates execution of the statements
             * in the current iteration of the current or labeled loop,
             *  and continues execution of the loop with the next iteration.
             */
        }

        // search
        if (current.value === target) {
            return true;
        }

        // enqueue
        queue.push(current.left);
        queue.push(current.right);
    }

    return false;
}
