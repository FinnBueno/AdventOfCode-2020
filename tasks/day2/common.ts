import { input } from "./input";

export interface Password {
    rules: {
        letter: string;
        min: number;
        max: number;
    },
    password: string;
}

// some string splitting magic, extracting the data into a more readable object
export const passwords = input.map<Password>(i => {
    const [rules, password] = i.split(': ');
    const [constraints, letter] = rules.split(' ');
    const [min, max] = constraints.split('-');
    return {
        rules: {
            letter,
            min: Number(min),
            max: Number(max),
        },
        password,
    }
});
