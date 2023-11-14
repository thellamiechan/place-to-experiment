const unsortedScores = [37, 89, 41, 65, 91, 53];
const HIGHEST_POSSIBLE_SCORE = 100;

const sortedScores = sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE);
// console.log(sortedScores); // [91, 89, 65, 53, 41, 37]


function sortScores(unsortedScores, highestPossibleScore) {
    // Initialize an array to count the frequencies of each score.
    const scoreCounts = new Array(highestPossibleScore + 1).fill(0);

    // Populate the scoreCounts array by counting the scores.
    for (const score of unsortedScores) {
        scoreCounts[score]++;
    }

    // Initialize an empty result array to store the sorted scores.
    const sortedScores = [];

    // Reconstruct the sorted array from the scoreCounts array.
    for (let score = highestPossibleScore; score >= 0; score--) {
        const count = scoreCounts[score];
        for (let i = 0; i < count; i++) {
            sortedScores.push(score);
        }
    }

    return sortedScores;
}

// Here's how this function works:

    // It initializes an array called scoreCounts of size highestPossibleScore + 1 to count the frequency of each score. This step ensures that you account for all possible scores within the given range.

    // It populates the scoreCounts array by iterating through unsortedScores and increments the corresponding frequency.

    // It initializes an empty array called sortedScores to store the sorted scores.

    // It reconstructs the sorted array by iterating through scoreCounts in reverse order. For each score with a non-zero count, it appends that score to the sortedScores array.

// This algorithm guarantees a time complexity of O(n) because it counts the scores in linear time and reconstructs the sorted array in linear time as well.
