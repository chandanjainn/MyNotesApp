const fs = require('fs');

const dataJson = JSON.parse(fs.readFileSync('./users.json').toString());

dataJson.name = 'chandan jain';
dataJson.id = 1256;
console.log(dataJson.name + ' ' + dataJson.id);
const data = JSON.stringify(dataJson);

fs.writeFileSync('./users.json', data);
