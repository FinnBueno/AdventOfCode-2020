import { input } from "../input";

const slopes = [
    {
        x: 1,
        y: 1,
        treesEncountered: 0,
    },
    {
        x: 3,
        y: 1,
        treesEncountered: 0,
    },
    {
        x: 5,
        y: 1,
        treesEncountered: 0,
    },
    {
        x: 7,
        y: 1,
        treesEncountered: 0,
    },
    {
        x: 1,
        y: 2,
        treesEncountered: 0,
    },
];

const forest = input.split('\n');

let i = 0;
for (const slope of slopes) {
    let y = 0, x = 0;
    do {
        const line = forest[y];
        const space = line[x % line.length];
        if (space === '#') {
            slope.treesEncountered++;
        }
        x += slope.x;
        y += slope.y;
    } while (y < forest.length);
    console.log(`Encountered ${slope.treesEncountered} trees on slope ${++i}.`);
}

console.log(`Multiplied together, that gives ${slopes.reduce((total, { treesEncountered }) => total * treesEncountered, 1)}.`);
