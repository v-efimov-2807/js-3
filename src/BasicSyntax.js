const dictionary = [
    ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'],
    [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
];

export function romanToInteger(str) {
    let result = 0;
    let romanNumbers = definitionRomanNumbers(str);

    for (let i = 0; i < romanNumbers.length; i++) {
        result +=
            dictionary[1][findIndexForChar(dictionary[0], romanNumbers[i])];
    }

    return result;
}

function definitionRomanNumbers(string) {
    let array = string.split('');
    let resultArray = [];

    for (let i = 0; i < array.length; i++) {
        if (findIndexForChar(dictionary[0], array[i] + array[i + 1]) !== -1) {
            resultArray.push(array[i] + array[i + 1]);
            i++;
        } else {
            resultArray.push(array[i]);
        }
    }

    return resultArray;
}

function findIndexForChar(array, char) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === char) {
            return i;
        }
    }

    return -1;
}
