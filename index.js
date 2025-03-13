// Code your solutions in this file
let names= ["Guadalupe", "Ollie", "Aki"];

function writeCards(names) {
  return names.map(name =>`Thank you, ${name}, for the wonderful surprise gift!`)
}

// function countDown(names) {
//     let number = 0
//     while (number < names.length) {
//         console.log(`Thank you, ${name[number]}, for the wonderful surprise gift!`)
//         number--;
//     }
//     return names
// }

function countDown(number) {
  for (let count = number; count >= 0; count--) {
    console.log(count);
  }

}


