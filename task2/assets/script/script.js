// 2. На этой недели создадим веб-страницу, на которой пользователь может ввести температуру для нескольких городов, после чего программа найдёт 
//и выведет температуру в каждом городе, максимальную и минимальную температуру на странице.
    
//     Алгоритм действий
//     1. Создайте HTML-страницу, пусть на ней будет заголовок "Температура в разных городах"
//     2. Создайте массив городов, например `cities`
//     3. Создайте пустой массив, который будет хранить температуры для каждого города
//     4. Используя цикл, пройдитесь по массиву городов и попросите пользователя ввести температуру для каждого города, используя функцию `prompt()` 
//или другие способы ввода данных пользователем 
//     5. Создайте список, в котором будет отображаться информация о каждом городе и его температуре. 
//Тут нужно будет использовать цикл для перебора элементов массивов, создать элементы и добавить их в список, указывая название города и соответствующую температуру.
//     6. Найдите максимальную и минимальную температуру из массива с температурами. 
//Для этого создайте две переменные и инициализируйте их значениями, которые гарантированно будут больше и меньше любой возможной температуры соответственно.
//     7. Выведите информацию с погодой в разных городах, а также максимальной и минимальной температурой на экран
    
//     Подсказки:

// - Для преобразования строки в число используйте [Number()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number)
// - Свойство `length` возвращает количество элементов в массиве
// - Для взаимодействия с DOM вам понадобятся методы создания элементов, добавления в родительский элемент и установки текстового значения

let temperatureHtml = document.getElementById('temperature');

let cities = ['Toronto', 'Quebec', 'Vancouver', 'Edmonton', 'Ottawa'];
let temperatures = [];

for (let index of cities) {
cities.forEach(city => {
    let enterTemperature = prompt (`Enter the temperature in ${city}:`);
    promptValue = Number(enterTemperature);
    if (isNaN(promptValue) || (promptValue <= -70) || (promptValue >= 60)) {
        temperatureHtml.innerHTML += `
        <p class="city">The temperature in ${city} is <span class="temperature">&nbsp;incorrect&nbsp;</span> &#8451</p>`
        temperatures += ' ';}
    else if (promptValue === null || (enterTemperature === null)) {
        temperatureHtml.innerHTML += `
        <p class="city">The temperature in ${city} is <span class="temperature">&nbsp;no data&nbsp;</span> &#8451</p>`
        temperatures += ' ';
    } else {
    temperatureHtml.innerHTML += `
    <p class="city">The temperature in ${city} is<span class="temperature">&nbsp;${promptValue}&nbsp;</span> &#8451</p>`
    temperatures.push(promptValue);
    }
})
break;
}

let maximum = Math.max(...temperatures);
let minimum = Math.min(...temperatures);

temperatureHtml.innerHTML += `
    <p class="min-max">The maximum temperature is <span class="temperature">&nbsp;${maximum}&nbsp;</span> &#8451</p>
    <p class="min-max">The minimum temperature is <span class="temperature">&nbsp;${minimum}&nbsp;</span> &#8451</p>`