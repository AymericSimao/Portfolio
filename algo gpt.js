//Objectif : Écrire une fonction greet qui prend un prénom en argument et retourne une phrase de salutation.
function greet(name = "inconnu") {
   return `Bonjour, ${name} !`
}

//console.log(greet("Alice")); // "Bonjour, Alice !"
//console.log(greet("Bob"));   // "Bonjour, Bob !"
//console.log(greet()); // "Bonjour, inconnu !"
//Done !


//////////////////
//Objectif : Écrire une fonction isEven qui prend un nombre en argument et retourne : Pair ou Impair
function isEven (number){
    if (number % 2 ===0){
        return "Pair"
    }
    else {
        return "Impair"
    }
// simplification possible en remplacer le if..else de la fonction >     return number % 2 === 0 ? "Pair" : "Impair"; 
}

//console.log(isEven(4));  // "Pair"
//console.log(isEven(7));  // "Impair"
//console.log(isEven(0));  // "Pair"


////////////////////////////
//Objectif : Écrire une fonction countA qui prend une chaîne de caractères en argument et retourne le nombre de lettres "a" (majuscule ou minuscule) dans cette chaîne.
let string = "tEsTatA"
function countA(string){
let count = 0 // on réinitialise la variable dans la fonction

for (let i=0; i < string.length; i++){
   if (string[i] === "a" || string[i] === "A"){
    count++
   } 
}
   return count

}

//console.log(countA("JavaScript"));  // 2
//console.log(countA("Alphabet"));    // 2
//console.log(countA("Hello World")); // 0


////////////////////////////
//Objectif : Écrire une fonction reverseString qui prend une chaîne en argument et retourne cette chaîne inversée.

function reverseString(text){
    return text.split("").reverse().join("")
}
 


//console.log(reverseString("hello"));  // "olleh"
//console.log(reverseString("JavaScript"));  // "tpircSavaJ"
//console.log(reverseString("racecar"));  // "racecar"


////////////////////////////
//Mission 5 : Trouver le plus grand nombre
//Objectif : Écrire une fonction findMax qui prend un tableau de nombres en argument et retourne le plus grand nombre du tableau.
function findMa(tab) {
    return Math.max(...tab)
}

function findMax(tab){
    let max = tab[0];

    for (let i = 0; i< tab.length; i++){
        if(tab[i] > max){
            max = tab[i]
        }
    }
    return max

}

// console.log(findMax([3, 7, 2, 9, 5]));  // 9
// console.log(findMax([-1, -5, -3, -10]));  // -1
// console.log(findMax([100, 25, 30, 200, 150]));  // 200


////////////////////////////
//Exercice ariane : algo du jour 4 avril 2025
let list = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];

function getBiggest(numbers) {
    let bigNumbers = [];
    
    for (let i of numbers){
        let nbMax = 0

        //console.log(i) // permet de voir chaque tableau dans la 1er grand tableau
        for (let j of i){
            //console.log(j) // permet de voir chaque chiffre de chaque sous-tableau
            if (nbMax < j){
                nbMax = j
            }

        }
        bigNumbers.push(nbMax)

    }
    
    return bigNumbers;
}


//console.log(getBiggest(list));
// Expected result : [5,27,39,1001]


////////////////////////////
// Mission 6 : Vérifier un palindrome
// 📌 Objectif : Écrire une fonction isPalindrome qui prend une chaîne de caractères 
// et retourne true si elle est un palindrome (se lit pareil dans les deux sens), sinon false.
function isPalindrome(text){

    let lower = text.toLowerCase()
    let split = lower.split("")
    let reverse = split.reverse()
    let join = reverse.join("")
    let reversed = lower.split("").reverse().join("") //permet de retirer les "undefined" des résultats de la console
    return lower===reversed //permet de retirer les "undefined" des résultats de la console


    if (lower === join){
        console.log(true)
    }
    else {
        console.log(false)
    }
}

// console.log(isPalindrome("racecar"));  // true
// console.log(isPalindrome("level"));    // true
// console.log(isPalindrome("hello"));    // false
// console.log(isPalindrome("Kayak"));    // true (insensible à la casse)
// console.log(isPalindrome("Aibohphobia")); // true (un vrai mot palindrome 😆)


////////////////////////////
//💥 Mission 7 : Compter les voyelles
// Créer une fonction countVowels qui prend une chaîne de caractères en argument et retourne le nombre de voyelles qu'elle contient.
// Les voyelles sont : a, e, i, o, u, y (et on ne tient pas compte de la casse).
function countVowels(txt){
    let lower = txt.toLowerCase()
    for (let i=0; i<txt.length; i++){
        
    }
}

console.log(countVowels("Hello"));         // 2 ("e" et "o")
console.log(countVowels("JavaScript"));    // 3 ("a", "a", "i")
console.log(countVowels("Rhythm"));        // 0
console.log(countVowels("AEIOUY"));        // 6
console.log(countVowels("Bonjour à tous")); // 6 (compte aussi les voyelles accentuées si tu veux bonus)