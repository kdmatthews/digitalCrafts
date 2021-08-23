function tipCalculator(billTotal, percentage){
    let precConverted = percentage/100
    let totalConverted = billTotal * precConverted
    console.log("Your rip is $", totalConverted)
}
tipCalculator(100, 30)

const findLargestOfThree = (first, second, third) => {
    let firstNumber = first;
    let secondNumber = second;
    let thirdNumber = third;
    let arrayOfNumbers = [firstNumber, secondNumber, thirdNumber];
    let largestNumber = ''
    for (const number of arrayOfNumbers){
        if (number > largestNumber){
            largestNumber = number;
        }
    }
    console.log(largestNumber)
    console.log(Math.max(first, second, third))
}

    
    // if (firstNumber > secondNumber) && (firstNumber > thirdNumber){
        
    // } else if (secondNumber > thirdNumber){

    // }else if (thirdNumber > firstNumber){

    // }
    // switch(firstNumber){
    //     case (firstNumber > secondNumber):
    //         console.log("first is bigger than second");
    //         break;
    //     case (firstNumber > thirdNumber):
    //         console.log("first is bigger than third");
    //         break;
    //     default:
    //         console.log("First is not bigger than any")
    //         break;

findLargestOfThree(101, 2, 3)

function sumOfNumbers(first, second, third){
    return (first + second + third);
}
const data = (sumOfNumbers(3, 7, 1));
console.log(data);

function threeArrays(arrayOne, arrayTwo, arrayThree){
    return arrayTwo[1];
}

console.log(threeArrays([123], [293849, 40, 78], [900,112,88]))