export const bt_pre_order = (head: BinaryNode<number>) => {
    const path: number[] = [];
    walk(head, path);

    return path;
};

function walk(current: BinaryNode<number> | null, path: number[]): number[] {
    // base case
    if (!current) {
        return path;
    }
    // pre
    path.push(current.value);

    // recurse
    walk(current.left, path);
    walk(current.right, path);

    // post
    // (do nothing)
    return path;
}
