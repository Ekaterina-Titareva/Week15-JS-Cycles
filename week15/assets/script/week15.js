//Задание 1
// Выведите числа от 1 до 10 в консоль
for (let i = 1; i <= 10; i++) console.log(i);

//Задание 2
// Выведите чётные числа от 1 до 20 в консоль
for (let i = 2; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
};

//Задание 3
// Выведите числа от 10 до 1 в консоль в обратном порядке
for (let number = 0; number < 10; number++) {
    console.log(number >= 0 ? 10 - number : number);
};

//Задание 4
// Выведите таблицу умножения на 5 от 1 до 10
for (let multiplication = 1; multiplication <= 10; multiplication++) {
    console.log(multiplication >= 1 ? multiplication*5 : multiplication);
};

//Задание 5
// Вычислить сумму чисел от 1 до 100 и вывести значение в консольo
let sum = 0;
for (let i = 0; i <= 100; i++) sum += i; 
console.log(sum);

//Задание 6
// Выведите все элементы массива в консоль используя цикл for
const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
    const arrayItem = array[i];
    console.log(arrayItem);
};

//Задание 7
// Выведите сумму всех элементов массива используя цикл for
let numbersSum = 0;
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    numbersSum += numbers[i];
};
console.log(numbersSum);

//Задание 8
// Напишите цикл for, который изменяет массив животных, делая их прекрасными! Например, если есть следующий массив: let animals = ["Кот", "Рыба", "Лемур"]; цикл должен сделать его таким: ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное"]
// Подсказка: вам понадобится переприсвоить значения для каждого индекса, то есть присвоить новые значения уже суще- ствующим элементам: animals[0] = animals[0] + " - прекрасное животное";
let animals = ["Кот", "Рыба", "Лемур"]
for (let i = 0; i < animals.length; i++) {
animals[i] = animals[i] + " - прекрасное животное";
};

console.log(animals);
//Задание 9
// Выведите символы в строке в консоль
const str = 'Hello';
for (let i = 0; i <str.length; i++) {
    letters = str[i];
    console.log(letters);
};

//Задание 10
// Выведите все элементы массива в консоль используя цикл for...of. Массив array объявлен в Задании 6
for (let arrayItem of array) console.log(arrayItem);

//Задание 11
// Выведите каждое слово из массива строк в консоль
// Подсказка: вам понадобится метод массивов split
let sentences = ['Hello, world!', 'How are you?'];
const phrases = sentences.join(' ').replace(/ |[?!@#$^*()+\,<>`~"]/g, ' ').split(' ').filter(el => el != '');
    phrases.forEach(function(user) {
    console.log(user);
});

//Задание 12
// Выведите сумму всех элементов массива используя цикл for..of. Массив numbers объявлен в Задании 7
let numbersS = 0;
for (let number of numbers) {
    numbersS += number;
    console.log(numbersS);
}

//Задание 13
// Выведите длину каждого слова из массива строк в консоль
const list = ['apple', 'banana', 'cherry'];
for (let listItem of list) console.log(listItem.length);

//Задание 14
// Преобразуйте массив каждый элемент массива words в верхний регистр
const words = ['Hello', 'world', '!'];
for (let word of words) console.log(word.toUpperCase());

//Задание 15
// Подсчитайте количество гласных букв в строке
// Подсказка: вам понадобится метод includes
const greeting = 'Hello, world!';
let vowelCount = 0;
const vowels = ['a', 'e', 'i', 'o', 'u'];

for(let letter of greeting) {
    if(vowels.includes(letter)){
        vowelCount += 1;
    }       
};
console.log(vowelCount);

//Задание 16
// Объедините все строки массива words в одну строку с пробелами между ними
const wordsJoin = words.join(' ');
console.log(wordsJoin);

//Задание 17
// Выведите числа от 1 до 10 в консоль используя цикл while
let i = 0;
while (i++ < 10) console.log(i);

//Задание 18
// Выведите числа от 1 до 10 в консоль в обратном порядке используя цикл while
let z = 10;
while (z) console.log(z--);

//Задание 19
// Проверьте, все ли элементы массива являются положительными числами используя цикл while
// Подсказка: используйте директиву break
const allNumbers = [1, 2, 3, -4, 5];
// let allPositive = true;
let item = 0;
while (allNumbers[item]) {
    if (allNumbers[item] < 0) {console.log(`${allNumbers[item]} - отрицательное число`); break}
    item++;
};

//Задание 20
// Выведите значения элементов массива до первого отрицательного числа используя цикл do...while
const random = [2, 4, 6, -3, 8, 10];
let element = 0;
do {
    console.log(random[element])
    element++
    if (random[element] < 0) {
        break;
    }
} while (random[element] > 0);

//Задание 21
// Выведите числа от 1 до 100, пропуская числа, которые делятся на 3 используя цикл do...while
let divisibleByThree = 0;
do {
    divisibleByThree++
    if (divisibleByThree % 3 !== 0) {
        console.log(divisibleByThree)
    }
} while (divisibleByThree < 100);

//Задание 22
// Запросить у пользователя числа, пока сумма введенных чисел не станет больше 100
let sumOneHundred = 0;
do {
    let number = prompt ('Введите число:');
    console.log(sumOneHundred);
    sumOneHundred += Number(number);
    if (sumOneHundred > 100) {
        break;
    }
} while (sumOneHundred <= 100);

//Задание 23
// Напишите функцию, которая изменит фоновый цвет всех элементов <h4> на странице на синий цвет
const headings = document.getElementsByTagName('H4');
for (let heading of headings) {heading.style.background = 'lightblue'}

//Задание 24
// Напишите генератор случайных строк до 6 символов
// Подсказка: используйте методы объекта Math и длину массива alphabet
function generateRandomString() {
let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
let randomString = '';
for (let i = 0; i < 6; i++) {
    randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
}
return randomString;
};
console.log(generateRandomString());

