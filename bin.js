#!/usr/bin/env node

var uppercaser = require("./")
var caser = uppercaser(process.argv.slice(2))
console.log(caser)


