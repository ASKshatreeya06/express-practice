
const url = require('url');

const myurl=url.parse('https://www.freelancer.in/projects/css/Some-css-improvements/details');

console.log('host: '+myurl.host)
console.log('Protocol: '+myurl.protocol);
