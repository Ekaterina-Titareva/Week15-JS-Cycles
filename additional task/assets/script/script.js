// ***** Задание под звездочкой**

// **Тренируем навык работы с циклами и массивами**

// Вам необходимо выполнить следующие операции над массивом чисел:

// 1. Создайте пустой массив с именем `numbers`
// 2. Заполните массив `numbers` целыми числами от -10 до 10 (включительно) с помощью цикла.
// 3. Используя **циклы**, выполните следующие операции над массивом `numbers`:
//     - Удалите все отрицательные числа из массива
//     - Возведите каждое число в квадрат
//     - Отсортируйте числа в порядке убывания
// 4. Выведите полученный массив `numbers` в консоль


//Создаем пустой массив
let numbers = [];
console.log(`Создаем пустой массив;`);

//Заполняем массив целыми числами от -10 до 10 (включительно) с помощью цикла
    for (let i = 0; i < 21; i++) {
        numbers[i] = 10-i;
    }
numbers = numbers.toString().split(',').map(Number).reverse();
console.log(`Заполняем массив целыми числами от -10 до 10 (включительно) с помощью цикла: ${numbers};`);

// Удаляем все отрицательные числа из массива
numbers = numbers.filter(n => n >= 0);
console.log(`Удаляем все отрицательные числа из массива: ${numbers};`);

//Возводим каждое число в квадрат
numbers = numbers.map(n => n * n);
console.log(`Возводим каждое число в квадрат: ${numbers};`);

//Отсортируем числа в порядке убывания
numbers = numbers.sort((a, b) => b-a);
console.log(`Отсортируем числа в порядке убывания: ${numbers};`);