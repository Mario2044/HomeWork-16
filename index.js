//Реалізуйте функцію generateKey(length, characters), 
//яка повертає рядок випадкових символів із набору characters довжиною length. span>
let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
function generateKey(length) {
    let result = '';
    let charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

const key = generateKey(16, characters);
console.log(key); 


