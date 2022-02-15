// 1. Remove vowels
// Input: "javascript"
// Output: "jvscrpt"

// 2. Alphabet value
// Hitung jumlah value suatu string dimana setiap huruf memiliki value
// posisi huruf tersebut di dalam abjad. Contoh: A = 1, B = 2, Z = 26, J = 10
// Examples
// Input: "abc"
// Output: 6

// Input: "steve"
// Output: 71

// 3. Odd alphabet value
// Sama seperti soal nomor 2, tetapi kali ini hanya hitung huruf yang memiliki
// value ganjil

// Input: "steve"
// Output: 29

// Input: "abc"
// Output: 4

// 4. Unique items
// Diketahui ada 2 array of numbers, dimana 2 array tersebut memiliki beberapa
// value/number yang sama. Tampilkan sebuah array baru yang berisi list value
// unique (hanya berada di salah satu array saja)

// Input:
// arr1 = [1, 3, 7, 4]
// arr2 = [1, 5, 3, 7, 0]
// Output: [5, 4, 0]

// Bonus Question
// 5. Remove duplicates
// Diketahui ada 2 array of numbers, dimana 2 array tersebut memiliki beberapa
// value/number yang sama. Tampilkan sebuah array baru yang berisi list value
// dari kedua array tersebut, tetapi sudah

// 1. Remove Vowels
function disemvowel(string) {

    let vowels = {
      'a': true,
      'e': true,
      'i': true,
      'o': true,
      'u': true
    };
  
    let result = "";
  
    for (let i = 0; i < string.length; i++) {
      let letter = string[i].toLowerCase();
      if (!vowels[letter]) {
        result += string[i];
      }
    };
    return result;
  };

  console.log(disemvowel("Belajar Mengaji"));


// 2. Alphabet Value
function letterValue(str){
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let newStr = str.split(""); //split string jadi array
    let valueAlpha = 0; //penampung hasil
  //   console.log(alfabetIdx.indexOf("b"));
    for (let i = 0; i < str.length; i++) {
    valueAlpha += alphabet.indexOf(newStr[i]) + 1;
    // maksudnya adalah, newStr adalah string baru yg sudah di split dari string yg ingin kita masukkan
    // untuk newStr[i] berguna untuk mengecek value setiap pada index i
    // sedangkan alfabet.indexOf(newStr[i]) adalah kita mencari nilai index newStr[i] pada alfabet
  }
  return valueAlpha;
};

console.log(letterValue("wahyu"));


// 3. Odd Alphabet Value
function oldLetterValue(str){
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let newStr = str.split(""); //split string jadi array
    let result = 0; //penampung hasil
    let alphaValue = 0
  //   console.log(alfabetIdx.indexOf("b"));
    for (let i = 0; i < str.length; i++) {
    alphaValue = alphabet.indexOf(newStr[i]) + 1
    if(alphaValue % 2 == 1){
        result += alphabet.indexOf(newStr[i]) + 1;}
    else if(alphaValue % 2 ==0){
        result += 0
    }
  }
  return result;
};

console.log(oldLetterValue("wahyu"));

// 4. Unique Items
const arr1 = [1, 3, 7, 4]
const arr2 = [1, 5, 3, 7, 0]

