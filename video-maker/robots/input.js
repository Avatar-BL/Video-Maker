const readLine = require('readLine-sync')
const state = require('./state.js')

function robot() {
    const content = {}

    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()
    content.maximunSentences = 7

    state.save(content)

    function askAndReturnSearchTerm() {
        return readLine.question('Type a Wikipedia search term: ')
    }

    function askAndReturnPrefix() {
        const prefixes = ['Who is', 'What is', 'The history of']
        const selectedPrefixIndex = readLine.keyInSelect(prefixes)
        const selectedPrefixText = prefixes[selectedPrefixIndex]
        return(selectedPrefixText)
    }
}

module.exports = robot