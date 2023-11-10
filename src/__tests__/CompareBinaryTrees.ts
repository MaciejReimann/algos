import { areTreesEqual } from "../code/CompareBinaryTrees";
import { tree, tree2 } from "./tree";

test("Compare Binary Trees", function () {
    expect(areTreesEqual(tree, tree)).toEqual(true);
    expect(areTreesEqual(tree, tree2)).toEqual(false);
});
