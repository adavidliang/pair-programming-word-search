const wordSearch = (letters, word) => { 
    if (word.length === 0) {
        return false;
    }
    for (let row of letters) {
        const rowOfLetter = row.join('');
        if (rowOfLetter.includes(word)) {
            return true;
        }
    }
    return false;

    // const horizontalJoin = letters.map(ls => ls.join(''))

    // for (l of horizontalJoin) {
    //     if (l.includes(word)) return true
    // }
}

module.exports = wordSearch