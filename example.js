// function fibonacci(n) {
//   if (n === 1) {
//     return 1;
//   }
//   if (n === 0) {
//     return 0;
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// console.log (fibonacci(100));
// function Power(m,n) {

//     if (n === 0) {
//         return 1
//     }
//     return n*Power(m,n-1)

// }
// console.log(Power(5,3))
//Reverse string
// function strRev(str) {
//   if (str === 1) {
//     return str;
//   }
//   return str[strlength - 1 + reverse(str.slice(0, length - 1))];
// }
// console.log (strRev("hello"));
// function strRev(str) {
//   // Base case: if the string is empty or has only one character, return it
//   if (str === "") {
//     return str;
//   }
//   // Recursive case: reverse the substring and add the first character
//   return str[str.length - 1] + strRev(str.slice(0, str.length - 1));
//
// console.log(strRev("hello"));
// console.log(strRev("fatma"));
// console.log(strRev("bonjour"));
// function isPalindrome(word) {
//     word = word.toLowerCase();
//     return word === word.split('').reverse().join('');
//   }

// //   console.log(isPalindrome("radar"));
// //   console.log(isPalindrome("hello"));
// // function isPallindrome(word) {
// //   return word === strRev(word);
// // }
// // console.log(isPallindrome("radar"));
// // // console.log(isPallindrome("hello"));

// function bissextileYear(year) {
//   if ((year % 4 === 0) & (year % 400 === 0) || year % 100 !== 0) {
//     return "is bissextile";
//   } else {
//     return "is not bissextile";
//   }
// }

// console.log(bissextileYear(2024));
// console.log(bissextileYear(2000));
// console.log(bissextileYear(1980));
// console.log(bissextileYear(1900));
// console.log(bissextileYear(2020));

// Détermine le prix d'un billet de cinéma en fonction de l'âge.

//Arguments:
//age (n) : L'âge de l'utilisateur.
// p : Le prix du billet en dollars.
function billetPrice(age) {
  if ( 0 < age && age <= 12) {
    return 10;
  }

   if ( 13 <=  age && age<= 17) {
     return 15;
     
  }
  if (age >= 18) {
   return 20;
    }

  else {
    return "not availible ";
    }
 
}
console.log (billetPrice(14)+'$');
console.log(billetPrice(9)+'$');
console.log(billetPrice(20)+'$');
console.log(billetPrice(0)+'$');
