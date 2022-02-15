// 1. Sum of Positives and negatives
// Input Array Numbers
// Output: sebuah array [<sum_of_positives>, sum of negatives]


const sumOfPositvesAndNegatives = () =>{
    const numbersArray = [-2, -2, 4, 5, -7]
    let bilanganPositif = 0
    let bilanganNegatif = 0

    for(let i = 0; i < numbersArray.length; i++){
        if(numbersArray[i] >= 0 ){
            bilanganPositif += numbersArray[i]
        }
        else{
            bilanganNegatif += numbersArray[i]
        }
    }

    return [bilanganPositif, bilanganNegatif]

}

// console.log(sumOfPositvesAndNegatives());


// 2. Square All
// Input: sebuah array of numberss
// output: array of numbersyang samaa tapi, sudah dipangkat 2
// example input : [1, 2, 3, 4, 5, 9]
// ex output: [1, 4, 9, 16, 25, 81]
const numbersArray = [2, 2, 4, 5, 7]
// Cara 1
// const squareAll = () => {
// let resultArr = arr.map((val)=>{
//     return val * val
// })
// }

// const square = (num)=>{
//     return num*num
// }

// console.log(numbersArray.map(square));

// 3.Plus Minus

let resultArr = 0
numbersArray.forEach((val, idx) =>{
    if(idx % 2 == 1){
        resultArr -= val
    }
    else if( idx % 2 == 0){
        resultArr += val
    }
})

console.log(resultArr);

// 4. Remove vowels
// Input:"hello"
// Output: "hll"

let sentences = "Wahyu"
