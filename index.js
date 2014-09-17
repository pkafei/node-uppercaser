function uppercaser (words) {
    var wordString = JSON.stringify(words)
    var upperWord = wordString.toUpperCase()
    var upperArray = JSON.parse(upperWord)
    return upperArray
}


module.exports = uppercaser
