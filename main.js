// Given two strings, firstName and lastName, return a single string in the format "last, first".


function oneString(str1, str2) {

    //first solution
    const str = str1.join(str2);

    //second solution
    const str = str1 + str2;

    //third solution
    const str = str1.concat(", ", str2)

    return str;

    //fourth solution
    return str1 + ", " + str2
}
console.log(oneString("First", "Last"));
console.log(oneString("Amira", "Khaled"));
console.log(oneString("Elizabeth", "Bennet"));
