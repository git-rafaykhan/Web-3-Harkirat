const crypto = require('crypto');

// You have to install this package  =>   npm i cyrpto 
// Function to find a hash that starts with a given prefix
// It iterates through numbers to find the nonce (the number that generates the required hash)

function findHashStartsWithPrefix(prefix) {
    let input = 0;
    while (true) {
        // Create a string with the current input
        let inpStr = `Rafay => wasay | Rs 40 ${input}`;
        
        // Generate SHA-256 hash of the input string
        const hash = crypto.createHash('sha256').update(inpStr).digest('hex');
        
        // Check if the hash starts with the specified prefix
        if (hash.startsWith(prefix)) {
            return { input: inpStr, hash: hash };
        }
        input++;
    }
}

// Find a hash that starts with "0000"
let data = findHashStartsWithPrefix("0000");
console.log(`Input: ${data.input}, Hash: ${data.hash}`);
