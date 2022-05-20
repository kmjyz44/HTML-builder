const fs = require('fs');
const path = require('path');
const { stdin, stdout, exit } = process;
const output = fs.createWriteStream('destination.txt');
console.log('Введите текст:')

stdin.on('data', data => output.write(data))

process.on('exit', () => stdout.write('Удачи!!!'));

output.on('error', error => console.log('Error', error.message));




