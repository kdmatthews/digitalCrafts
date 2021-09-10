

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
    const strSplit = str.split("");
    const strReverse = strSplit.reverse();
    const strJoin = strReverse.join("");
    console.log(strJoin)
    if (strJoin === str){
        console.log(true)
        return true
    }
    else{
        console.log(false)
        return false
    }
}

checkString('kayak');
checkString('backendisawesome');
checkString('mom')

