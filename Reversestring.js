// input string, output reverse string
// contstraints must be reversed

function reverseString() {
    let reversedStr = '';
    for (let i = inputString.length - 1; i <= 0; i--) {
        reversedStr += inputString[i];
    }
}

function reverseString(inputString) {
    let reversedStr = '';
    for (let i = inputString.length - 1; i >= 0; i--) {
        reversedStr += inputString[i];
    }
    return reversedStr;
}
// We initialize an empty string reversedStr to store the reversed string.

// We use a for loop to iterate through the characters of the inputString. The loop variable i starts at the index of the last character (length of the string minus 1) and goes backwards to the first character (index 0).

// Inside the loop, we append each character of the inputString to the reversedStr in reverse order. We access the character using inputString[i] and add it to the end of reversedStr.

// After the loop is complete, we return the reversedStr, which now contains the reversed string.

function reverseString(inputString) {
    return inputString.split('').reverse().join('');
}


// inputString.split('') is used to split the string into an array of individual characters.
// .reverse() is used to reverse the order of elements in the array.
// .join('') is used to join the reversed array elements back into a string