const hasUniqueCharacters = (string = '') => {
    const dictionary = {};
    const stringWithoutSpaces = string.replace(/([^a-zA-Z])\w/g, "")

    stringWithoutSpaces.split("").forEach(currentItem => {

        if (dictionary.hasOwnProperty(currentItem)) {
            dictionary[currentItem] = dictionary[currentItem] + 1
        } else {
            dictionary[currentItem] = 1
        }

    });

    // console.log(dictionary);
    return !!Object.values(dictionary).every(value => value === 1);

}

if (hasUniqueCharacters("Unique")) {
    console.log("The string has unique charachters")
} else {
    console.log('Some characters are repeated')
}