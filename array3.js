//hw
//1
function addToNum(numhw) {
    let stringnum = numhw.toString(); 
    let result = "";
    for (let i = 0; i < stringnum.length - 1; i++) { 
        result += stringnum[i];
        if (
            parseInt(stringnum[i]) % 2 === 0 &&  
            parseInt(stringnum[i + 1]) % 2 === 0 
        ) {
            result += "-"; 
        }
    }
    result += stringnum[stringnum.length - 1]; 
    return result;
}
console.log(addToNum(87084060697)); 


//2
function sortArray(arr) {
    return [...arr].sort((a, b) => a - b); 
}
let arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
console.log(sortArray(arr1));



//3
function mostEle(arr) {
    let elem = {};
    let mostElems = arr[0]; 
    let maxCount = 0;

    for (let item of arr) {
        elem[item] = (elem[item] || 0) + 1;

        if (elem[item] > maxCount) {
            maxCount = elem[item];
            mostElems = item;
        }
    }

    return `${mostElems} ( ${maxCount} раз)`;
}

let arr2 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(mostEle(arr2)); 
