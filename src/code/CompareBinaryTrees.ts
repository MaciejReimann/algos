type TreeNode = BinaryNode<number> | null;

// any node is a tree in itself (a tree of one node) - that's why it's not called areNodesEqual
export function areTreesEqual(treeA: TreeNode, treeB: TreeNode): boolean {
    // base cases
    // structural check
    if (treeA === null && treeB === null) {
        return true;
    }

    // structural check
    if (treeA === null || treeB === null) {
        return false; // if only one of them is null, the other is not
    }

    // value check
    if (treeA.value !== treeB.value) {
        return false;
    }

    return (
        areTreesEqual(treeA.left, treeB.left) &&
        areTreesEqual(treeA.right, treeB.right)
    );
}
