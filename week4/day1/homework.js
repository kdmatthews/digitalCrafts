
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
console.log(printSquare(5));

// Print Box
function printBox(width, height){
    let box = Math.pow(width, height);
    return box
}
console.log(printBox(3, 4));