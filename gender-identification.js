#!/usr/bin/env node

let chunk = "";

process.stdin.on("data", data => {
    chunk += data.toString();
});

process.stdin.on("end", () => {
    chunk.replace(/^\s*[\r\n]/gm,"").split(/\s+/).forEach(function (s) {
        process.stdout.write(
        s === 'bob'
        ? 'boy \n'
        : s === 'alicia'
           ? 'girl\n'
           : s === 'cookie'
               ? 'dog \n'
               : 'unknown \n');
    });
});
