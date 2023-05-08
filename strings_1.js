//Create a function that, given a string, returns all of that string’s contents, but without blanks. 

//If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".

function remove_blanks(str){
    let new_str = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            new_str += str[i];
        }
    }
    return new_str
}
const str1 = " Pl ayTha tF u nkyM usi c "
console.log(remove_blanks(str1))

//Create a JavaScript function that given a string, returns the integer made from the string’s digits. Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.

function select_numbers(str){
    let new_numbers = "";
    for (let i = 0; i < str.length; i++){
        if (str[i] >= "0" && str[i] <= "9") {
            new_numbers += str[i];
    }
    }
    return new_numbers
}

console.log(select_numbers("0s1a3y5w7h9a2t4?6!8?0"))

//Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). 

//Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW". 

//Given "Live from New York, it's Saturday Night!", return "LFNYISN".

function acronym(str) {
    let words = str.split(" ");
    let new_acronym = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i] !== "") {
        new_acronym += words[i][0].toUpperCase();
        }
    }
    return new_acronym;
}

const acronym1 =  "there's no free lunch - gotta pay yer way. "
const acronym2 =  "Live from New York, it's Saturday Night!"

console.log(acronym(acronym1))
console.log(acronym(acronym2))

//Dictionaries are sometimes called maps because a key (string) maps to a value. Given two arrays, create an associative array (map) containing keys of the first, and values of the second. For arr1 = ["abc", 3, "yo"] and arr2 = [42, "wassup", true], return {"abc": 42, 3: "wassup", "yo": true}.

function createMap(arr1, arr2) {
    const map = {};
    for (let i = 0; i < arr1.length; i++) {
        map[arr1[i]] = arr2[i];
    }
    return map;
}

const map1 = ["abc", 3, "yo"];
const map2 = [42, "wassup", true];

console.log(createMap (map1,map2))

// Dictionaries are also called hashes (we’ll learn why later). Build invertHash(assocArr) to convert hash keys to values, and values to keys. 

//Example: given {"name": "Zaphod", "charm": "high", "morals": "dicey"}, return object {"Zaphod": "name", "high":"charm", "dicey": "morals"}.

function invertHash(assocArr) {
    const invertedArr = {};
    for (const [key, value] of Object.entries(assocArr)) {
        invertedArr[value] = key;
    }
    return invertedArr;
}

const assocArr = {"name": "Zaphod", "charm": "high", "morals": "dicey"};
console.log(invertHash(assocArr))