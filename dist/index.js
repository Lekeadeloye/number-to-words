"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberToWords = void 0;
const numberToWords = (number) => {
    if (number < 0 || number > 100000) {
        return (`${number} is not within accepted range`);
    }
    const singleDigitNumbers = [
        '',
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const doubleDigitNumbers = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const numbersBelowOneHundred = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    if (number === 0) {
        return 'Zero';
    }
    if (number === 100000) {
        return 'one hundred thousand';
    }
    // recursive function to translate the number into words
    const translate = (n) => {
        let word = '';
        if (n < 10) {
            word = singleDigitNumbers[n] + '';
        }
        else if (n < 20) {
            word = doubleDigitNumbers[n - 10] + '';
            // We need to split number into Tens digit and Ones digit
        }
        else if (n < 100) {
            // Get the one digit
            let remainder = translate(n % 10);
            // get the Tens digit
            word = numbersBelowOneHundred[(n - n % 10) / 10 - 2] + '-' + remainder;
        }
        else if (n < 1000) {
            // First get the single digit, then use the recursive translate function to get the tens and ones digit
            word = singleDigitNumbers[Math.trunc(n / 100)] + ' hundred and ' + translate(n % 100);
        }
        else if (n < 100000) {
            word = translate(Math.trunc(n / 1000)) + ' thousand and ' + translate(n % 1000);
        }
        return word;
    };
    // Get result by translating the given number
    let result = translate(number);
    return result.trim();
};
exports.numberToWords = numberToWords;
console.log((0, exports.numberToWords)(600));
