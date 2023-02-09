//Реалізуйте функцію generateKey(length, characters), 
//яка повертає рядок випадкових символів із набору characters довжиною length. span>

function generateKey(length) {
    let result = '';
    let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

console.log(generateKey(16)); 


