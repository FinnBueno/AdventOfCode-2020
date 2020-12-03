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
}: Password) => {
    const firstMatch = password[min - 1] === letter;
    const secondMatch = password[max - 1] === letter;
    if (firstMatch && secondMatch || (!firstMatch && !secondMatch)) {
        return false;
    }
    return true;
}

const validPasswords = passwords.filter(validatePassword);

console.log(`There are ${validPasswords.length} valid passwords out of the ${input.length} existing ones.`);