import { input } from "../input";

const forest = input.split('\n');
let y = 0, x = 0, treesEncountered = 0;

do {
    const line = forest[y];
    const space = line[x % line.length];
    if (space === '#') {
        treesEncountered++;
    }
    y++;
    x += 3;
} while (y < forest.length);

console.log(`Encountered ${treesEncountered} trees.`);