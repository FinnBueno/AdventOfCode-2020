import { input } from "../input";

const target = 2020;

const sorted = input.sort((n1, n2) => n1 - n2);

let i1 = 0;
let i2 = 1;
let i3 = sorted.length - 1;

let result = sorted[i1] + sorted[i2] + sorted[i3];

while (result !== target && i1 < i3) {
    result = sorted[i1] + sorted[i2] + sorted[i3];
    console.log(`Trying ${sorted[i1]} + ${sorted[i2]} + ${sorted[i3]} = ${result}`);
    if (result > target) {
        // not found yet, but there might be more possibilities
        i3--;
        if (i3 <= i2) {
            i1++;
            i2 = i1 + 1;
            i3 = sorted.length - 1;
        }
    } else if (result < target) {
        // there are no more possibilities, reset and step up left by 1
        i2++;
        i3 = sorted.length - 1;
    }
}

if (result === target) {
    console.log(`${sorted[i1]} + ${sorted[i2]} + ${sorted[i3]} = ${target}`);
} else {
    console.log('No result could be found.');
}




/*

1. Find all numbers that together are LESS than 2020, put them in a list



 */