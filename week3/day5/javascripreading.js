
function madlib(name, subject) {
    return (`${name}'s favorite subject is ${subject}`)

}

console.log(madlib('Kayla', "math"))

function tipCalculator(amount, service){
    if (service = 'good'){
        return(amount * 1.2);     
    }else if (service = 'fair'){
        return(amount * 1.15);
    }else if (service = 'poor'){
        console.log(`Your service sucks!`)
    } else {
        return(`check your parameters`)
    }
}
console.log(tipCalculator(500, 'good'))