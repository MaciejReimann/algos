export const bt_post_order = (tree: BinaryNode<number>) => {
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
    walk(current.right, path);

    // post
    path.push(current.value);

    return path;
}
