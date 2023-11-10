export const bt_in_order = (tree: BinaryNode<number>) => {
    return walk(tree, []);
};

function walk(current: BinaryNode<number> | null, path: number[]): number[] {
    // base case
    if (!current) {
        return path;
    }
    // pre
    // (do nothing)

    // recurse
    walk(current.left, path);
    path.push(current.value);
    walk(current.right, path);

    // post
    // (do nothing)
    return path;
}
