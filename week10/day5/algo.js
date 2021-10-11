string1 = "A gentleman"
string2 = "Elegant man"
//expected result: true

string3 = "Clint Eastwood"
string4 = "Old West action"
//expected result: true

string5 = "idontlikealgos"
string6 = "algoverybad"
//expected result: false



function anagrams(str1, str2) {
    const str1lower = str1.toLowerCase();
    const str2lower = str2.toLowerCase();
    const str1NoSpace = str1lower.split("").sort().join().replace(/[^a-z\d]/g, "")
    console.log(str1NoSpace)
    const str2NoSpace = str2lower.split("").sort().join().replace(/[^a-z\d]/g, "")
    console.log(str2NoSpace)
    if (str1NoSpace === str2NoSpace){
        return true
    } else{
        return false
    }
       
    }


phrase1 = "randy doesnt like giving algos"
phrase2 = "arent you glad its friday"
phrase3 = "i wonder whats for lunch today"

console.log(anagrams(string1, string2))
console.log(anagrams(string3, string4))
console.log(anagrams(string5, string6))

function capitalize(string){
    const strSplit = string.split(" ");
    for (i in strSplit) {
        strSplit[i] =  strSplit[i][0].toUpperCase() + strSplit[i].substr(1);
    }
    return strSplit.join(" ");
}

console.log(capitalize(phrase1))
console.log(capitalize(phrase2))
console.log(capitalize(phrase3))


let arr1 = [1,2,3,4,5,6,7,8,10];

function missingNumber(array){
    array.pop
    return array + ",9,10"
}

console.log(missingNumber(arr1))