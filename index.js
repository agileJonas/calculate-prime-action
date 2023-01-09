const core = require('@actions/core');
const github = require('@actions/github');

// Calulate if a nummber is prime
function checkIfNumberIsPrime(number) {
    let isPrime = true;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
    return isPrime;
}

// Check what numers in a rage are prime numbers and return them as a list
function checkIfNumbersInRangeArePrime(start, end) {
    let primeNumbers = [];
    for (let i = start; i <= end; i++) {
        if (checkIfNumberIsPrime(i)) {
            primeNumbers.push(i);
        }
    }
    return primeNumbers;
}

(
    async () => {
        try {
            // Get the inputs from the workflow file
            const start = core.getInput('start');
            const end = core.getInput('end');
            listOfPrimes = checkIfNumbersInRangeArePrime(start, end);
            // Print the list of prime numbers
            console.log(listOfPrimes);
            // Set the output of the action
            core.setOutput("listOfPrimes", listOfPrimes);

        } catch (error) {
            core.setFailed(error.message);
        }
    }

)();