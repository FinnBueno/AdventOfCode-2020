import { input } from "../input";

const target = 2020;

const sorted = input.sort((n1, n2) => n1 - n2);

let left = 0;
let right = sorted.length - 1;

let result = sorted[left] + sorted[right];

while (result !== target && sorted[left] < sorted[right]) {
    result = sorted[left] + sorted[right];
    if (result > target) {
        // not found yet, but there might be more possibilities
        right--;
    } else if (result < target) {
        // there are no more possibilities, reset and step up left by 1
        left++;
        right = sorted.length - 1;
    }
}

if (result === target) {
    console.log(`${sorted[left]} + ${sorted[right]} = ${target}`);
} else {
    console.log('No result could be found.');
}