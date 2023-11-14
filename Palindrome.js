// input string
// output boolean
// constraints: forward and backward string should be the same


function checkPalindrome(input) {
    let left = 0;
    let right = input.length -1

    while (left < right) {
        if(input[left] === input[right]) {
            left++;
            right--;
        } else {
            return false;
        }
     }
}




//testing
function testing(input, output) {
    const actualOutput = checkPalindrome(input);
    return `Test case is ${actualOutput === expectedOutput ? "passed" : "failed"}`
}

const input1 = 'anna';
const output1 = true;

const input2 = 'isndhdjan';
const output2 = false