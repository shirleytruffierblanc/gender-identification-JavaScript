//code in JavaScript

var fs = require('fs');
var str = fs.readFileSync('input.txt', 'utf8');

str.replace(/^\s*[\r\n]/gm,"").split(/\s+/).forEach(function (s) {
    return console.log(
	s === 'bob'
	    ? 'boy'
	    : s === 'alicia'
	    ? 'girl'
	    : s === 'cookie'
	    ? 'dog'
	    : 'unknown');
});
