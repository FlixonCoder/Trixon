const bcrypt = require('bcryptjs');

const password = process.argv[2];

if (!password) {
    console.error('Please provide a password as an argument.');
    console.log('Usage: node generateHash.js <your_password>');
    process.exit(1);
}

const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(password, salt);

console.log('---------------------------------------------------');
console.log('Add the following line to your backend/.env file:');
console.log(`ADMIN_PASSWORD_HASH=${hash}`);
console.log('---------------------------------------------------');
