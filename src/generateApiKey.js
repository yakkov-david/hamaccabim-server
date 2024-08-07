const crypto = require('crypto');

function generateApiKey() {
  return crypto.randomBytes(32).toString('hex'); // Generates a 64-character hex string
}

const apiKey = generateApiKey();
console.log('Your API Key:', apiKey);
