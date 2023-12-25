// Questions : Create a function using the "Function" Keyword that take a String as an argument & return the number of vowels in the string. 

const CountVowelsInString = (word) =>{
    word = word.toLowerCase();
    res = 0
    for(let a of word){
        if ("a" === a || "e" === a || "i" === a || "o" === a || "u" === a){
            res +=1;
        }
    }
    console.log(res);
}

CountVowelsInString("HEllo");