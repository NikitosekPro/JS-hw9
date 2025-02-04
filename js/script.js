// Напиши функцію logItems(array), яка отримує масив і використовує цикл for,
// який для кожного елемента масиву буде виводити в консоль повідомлення в
// форматі [номер елемента] - [значення елемента].

// const function1 = function logItems(array) {

//     for (let i = 0; i < array.length; i += 1) {

//         console.log(`${i + 1}. ${array[i]}`);

//     }
//     logItems(["kaka" , "banana"])
// }





// Напиши скрипт підрахунку вартості гравіювання прикрас.
// Для цього створи функцію calculateEngravingPrice(message, pricePerWord)
// приймаючу рядок (в рядку будуть тільки слова і прогалини)
// і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.




// function calculateEngravingPrice(message, pricePerWord) {
//     const words = message.split(' ');
//     const numberOfWords = words.length;
//     return numberOfWords * pricePerWord;
//     }


//     console.log(calculateEngravingPrice('Bracelet engraving', 58));


// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок
// (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.


// function findLongestWord(string) {
//     const words = string.split(' ');
//     let longestWord = words[0];

//     for (let i = 1; i < words.length; i += 1) {
//         if (words[i].length > longestWord.length) {
//         longestWord = words[i];
//         }
//     }
    
//     return longestWord;
//     }



//     console.log(findLongestWord('JavaScript is amazing'));




// Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.

// Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.
// Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...', після чого повертає укорочену версію.

// function formatString(string) {
//     if (string.length <= 40) {
//         return string;
//     } else {
//         return string.slice(0, 40) + '...';
//     }
//     }


//     console.log(formatString('I love understanding the fact that I am a living and breathing creature, living on planet Earth.'));




// Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок.
// Функція перевіряє її на вміст слів spam і sale. Якщо знайшли заборонене слово,
// то функція повертає true, якщо заборонених слів немає функція повертає false.
// Слова в рядку можуть бути в довільному регістрі.

function checkForSpam(message) {
    const normalizedMessage = message.toLowerCase();
    if (normalizedMessage.includes('spam') || normalizedMessage.includes('sale')) {
        return true;
    }
    return false;
    }
    

console.log(checkForSpam('Get the best sale offers now!'));


// Напиши скрипт з наступним функціоналом:

//          При завантаженні сторінки користувачеві пропонується в prompt ввести число. 
//              Введення зберігається в змінну input і додається в масив чисел numbers.
//              Операція введення числа користувачем і збереження в масив триває до тих пор, пір, поки
//              користувач не натисне Cancel в prompt.
//              Після того як користувач припинив введення натиснувши Cancel, якщо масив не порожній,
//              необхідно порахувати суму всіх елементів масиву і записати її в змінну total. Використовуй цикл for або for...of.
//              Після чого в консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.



let numbers = [];
let total = 0;

while (true) {
    let input = prompt('Введіть число (натисніть Cancel для завершення):');

    if (input === null) {
    break;
    }

    input = Number(input);

    if (isNaN(input)) {
    alert('Це не число, спробуйте ще раз.');
    } else {
    numbers.push(input);
    }
}

if (numbers.length > 0) {
    for (const number of numbers) {
    total += number;
    }
    console.log(`Загальна сума чисел дорівнює ${total}`);
} else {
    console.log('Масив порожній, немає чисел для підрахунку.');
}
