function mergeIntervals(intervals) {
    if (intervals.length === 0) return [];

    intervals.sort((a, b) => a[0] - b[0]);

    let merged = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        let current = intervals[i];
        let last = merged[merged.length - 1];

        if (current[0] <= last[1]) {
            last[1] = Math.max(last[1], current[1]);
        } else {
            merged.push(current);
        }
    }

    return merged;
}

console.log(mergeIntervals([[1,3],[2,6]])); // [[1,6]]
console.log(mergeIntervals([[1,4],[4,5]])); // [[1,5]]
console.log(mergeIntervals([[1,3],[5,8],[4,10],[20,25]])); // [[1,3],[4,10],[20,25]]
