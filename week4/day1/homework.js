
// madlib
function madlib(name, subject) {
    return (`${name}'s favorite subject is ${subject}`)

}

console.log(madlib('Kayla', "math"))

// Tip Caluclator
function tipAmount(amount, service){
    if (service === 'good'){
        return(amount * .2);     
    }else if (service === 'fair'){
        return(amount * .15);
    }else if (service === 'bad'){
        return(amount * .1);
    } else {
        return(`check your arguments`)
    }
}
console.log(tipAmount(40, 'fair'))

// Tip Calculator2

function totalAmount(amount, service){
    if (service === 'good'){
        return(amount + (amount * .2));     
    }else if (service === 'fair'){
        return(amount + (amount * .15));
    }else if (service === 'bad'){
        return(amount + (amount * .1));
    } else {
        return(`check your arguments`);
    }
}
console.log(totalAmount(40, 'fair'))

// print numbers
function printNumbers(start, end){
    let numberArray = [];
    for (let index = start; index <= end; index ++){
        numberArray.push(index)
    }
    return numberArray;
    }
        

function printNumbersWhile(start, end){
    let numberArray = [];
    while (end >= start){
        let i = start++
        numberArray.push(i)
    }
    return(numberArray)
        
}
console.log(printNumbers(7, 20));
console.log(printNumbersWhile(8, 12));

// Print a Square
function printSquare(size){
    for (let index = 0; index <= size; index++){
       console.log("---")
    }
}
// (printSquare(5));

// Print Box
// This prints the right number but lines them up instead of placing them in a square.
function printBox(width, height){
    for(let index = 1; index <= width; index++){
        console.log("-");
    } for(let h = 1; h <= height; h++){
        console.log('|');
    } 
}
(printBox(3, 4));
// This does not print the correct numbers or in box shape
// function printBox(width, height){
//     box = ""
//     for(let w = 1; w <= width; w++){
//         for(let h = 1; h <= height; h++){
//             if(w === 0 || w === width){
//                 box += "-";
//             } else if (h === 0 || h === height){
//                 box += "|";
//             } else {
//                box += "";
//             }
//         } box += "\n";
//     }
        



// Print a Banner
function printBanner(text){
    let dash = ""
    for (item in text){
        dash += "-"
        
    }
    console.log(dash)
    console.log(text)
    console.log(dash)
}
    // for(let index = 0; index <= text.length; index++){
        
    // }
printBanner('Happy Birthday')

// letspeak
// This will replace it the first time the letter pops up but not the next.
function leetspeak(string){
    let str = string
    str = str.replace("A", "4");
    str = str.replace("E", "3");
    str = str.replace("G", "6");
    str = str.replace("I", "1");
    str = str.replace("O", "0");
    str = str.replace("S", "5");
    str = str.replace("T", "7");
    console.log(str)
                
    }


leetspeak("LEETSPEAK")

// Long-long Vowels
function longVowels(string){
    str = ""
    for (let vowel = 0; vowel < string.length; vowel++){
        if (string[vowel] === 'a' || string[vowel] === 'e' || string[vowel] === 'i' || string[vowel] === 'o' || string[vowel] === "u"){
            str += string[vowel].repeat(5);
        } else {
            str += string[vowel]
        }
    } return str
}

console.log(longVowels("Good Cheese"))
