export default function two_crystal_balls(arr: boolean[]) {
    const sectionCount = Math.floor(Math.sqrt(arr.length)); // 4

    let sectionWhereItBreaks = 0;

    for (let i = 1; i <= sectionCount; i++) {
        if (arr[i * sectionCount]) {
            sectionWhereItBreaks = i;
            break;
        }
    }

    if (!sectionWhereItBreaks) return -1;

    console.log("sectionWhereItBreaks", sectionWhereItBreaks);

    const sectionLength =
        sectionWhereItBreaks === sectionCount
            ? arr.length - sectionWhereItBreaks * (sectionCount - 1)
            : sectionCount;

    console.log("sectionLength", sectionLength);

    let ind;
    for (let i = 1; i <= sectionLength; i++) {
        const index = sectionWhereItBreaks * sectionCount + i;

        if (arr[index]) {
            ind = index;
            break;
        }
    }

    return ind ?? -1;
}
