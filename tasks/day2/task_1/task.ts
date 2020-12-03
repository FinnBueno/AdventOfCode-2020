import { Password, passwords } from "../common";
import { input } from "../input";

// match the password to a dynamic regex, which checks if a certain character appears
// more than or exactly X times but less than or exactly Y times.
const validatePassword = (
    { rules: {
        letter,
        min,
        max
    },
    password
}: Password) => password.match(new RegExp(`^([^${letter}]*${letter}[^${letter}]*){${min},${max}}$`));

const validPasswords = passwords.filter(validatePassword);

console.log(`There are ${validPasswords.length} valid passwords out of the ${input.length} existing ones.`);