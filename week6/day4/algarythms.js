

function formatDate(str){
    // let str = '09/10/2021';
    for (const char in str){
        str = str.replace('/', "")
        
    }
    str = str.slice(-4) + str.slice(0, -4)
    console.log(str);
    return str;
}

formatDate('09/10/2021');

function checkString(str){
    for (char in str){
        const strFix = str.replace(" ", "");
    }
  
    const strSplit = str.split("");
    const strReverse = strSplit.reverse();
    const strJoin = strReverse.join("");
    if (strJoin === str){
        console.log(true)
        return true
    }
    else{
        console.log(false)
        return false
    }
}

checkString('ka yak');
checkString('backendis awesome');
checkString('mom')
checkString('race car')

function minMaxSum(arr){
       for (number in arr){
         console.log(Math.min(number))
       }
    }
// minMaxSum([1, 2, 3, 4, 5]);

function anagrams(array){
    for (const word in array){
        console.log(word)
    }
}

anagrams(['yo', 'act', 'flop', 'olfp', 'tac', 'oy'])