

function formatDate(){
    let str = '09/10/2021';
    for (const char in str){
        str = str.replace('/', "")
        
    }
    str = str.slice(-4) + str.slice(0, -4)
    console.log(str);
}

formatDate()