//1. Используя функцию if...else,
//напишите код, который будет спрашивать:
//"Какое официальное название JavaScript?"
//Если пользователь вводит "ECMAScript",
//то показать через alert: "Верно!"
//в противном случае отобразить:"Не знаете? ECMAScript!"

// const userInput = prompt("Какое официальное название JavaScript?");
// if (userInput === "ECMAScript") {
//     alert("Верно!");
// } else {
//     alert("Не знаете? ECMAScript!");
// }
// console.log(userInput);

//2. Напишите программу, которая получит от пользователя
//число (количество минут) и выведет в консоль
//строку в формате часов и минут
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10

// const userInput = prompt("Введите время");
// const time = 70;
// const hours = Math.floor(time / 60);
// const minutes = time % 60;
// const modifyHours = String(hours).padStart(2, 0);
// const modifyMinutes = String(minutes).padStart(2, 0);
// console.log(`${modifyHours}:${modifyMinutes}`);


// Напишите цикл, который выводит в консоль
//числа от max до min по убыванию
// // Выведите в консоль всех четных чисел от min до max
// const max = 50;
// const min = 23;
// let total = 0;


// for (let i = max; i >= min; i -= 1) {
//     if (i % 2 !== 0) {

//         continue

//     }
//     total += i;
//      console.log(i);
// }

// console.log(total);




// Напишите код, который будет спрашивать
//логин с помощью prompt и логировать результат
//в консоль браузера


//Если посетитель вводит "Админ",
//то prompt запрашивает пароль.
//Если ничего не ввели или нажата клавиша Esc
//вывести стороку "Отменено"
//В противном случае вывксти строку "Я вас не знаю"

//Пароль проверять так:
//Если введён пароль "Я главный",
//то вывести строку "Здравствуйте!"
//иначе выводить строку "Неверный пароль!"

// const loginInput = prompt("Введите свой логин");

// if (loginInput === "Админ") {
//     const passInput = prompt("Введите свой пароль");
//     if (passInput === "Я главный") {
//         console.log("Здравствуйте!");
//     } else if (passInput === null) {
//         console.log("Отменено");
//     } else {
//         console.log("Неверный пароль!");
//     }
//  }
// else if (loginInput === null) {
//     console.log("Отменено");
// } else {
//     console.log("Я вас не знаю");
// }

// switch (loginInput) {
//     case "Админ":
//         const passInput = prompt("Введите свой пароль");
//         switch (passInput) {
//             case "Я главный":
//                 console.log("Здравствуйте!");
//                 break;
// case null:
//     console.log("Отменено");
//     break;
// default:
//     console.log("Неверный пароль!");
//                 break;
//         }
//         break;
//     case null:
//         console.log("Отменено");
//         break;

//     default:
//         console.log("Я вас не знаю");
//         break;
// }
// Напишите цикл, который предлагает ввести
//число больше 100 через prompt.
//Если если посетитель ввёл другое число - попросить
//ввести ещё раз и так далее.
//Цикл должет спрашивать число, пока посетитель не
//введёт число больше 100, либо не нажмет кнопку
//Отмена в prompt

// let numberInput = prompt("Введите число больше 100");

// // while (numberInput < 100) {
// //     numberInput = prompt("Введите число больше 100");
// // }

// // console.log(numberInput);

// let check = false;

// do {
//     if (numberInput === null) {
//         check = false;
//     }
//     else if (numberInput < 100) {
//         check = true;
//         numberInput = prompt("Введите число больше 100");
//     }
//     else {
//         check = false;
//     }
// } while (check);

// console.log(numberInput);

//FizzBuzz function

// let numbers = 23;
// function FizzBuzz(theArray) {

//     for (let i = 1; i <= numbers; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz");
//         }
//         else if (i % 3 === 0) {
//             console.log("Fizz");
//         }
//         else if (i % 5 === 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//     }
// }

// FizzBuzz(numbers);

//Check for Polyndrom - 1 method

// let string = "Лёша на полке клопа нашёл";
// let stringSplitted = string
//     .toLowerCase()
//     .split(" ")
//     .join("");


// let reversedString = string
//     .toLowerCase()
//     .replace(/\s/g, '')
//     .split(" ")
//     .reverse()
//     .join("");


// if (reversedString === stringSplitted) {
//     console.log(true);
// } else {
//     console.log(false);
// }


// // let reversedString = stringArr.reverse();
// // if (reversedString === stringArr) {
// //     console.log(theString);
// // }


// console.log(string);
// console.log(theString);

//Check for Polyndrom - 2-nd method;

// let string = "Лёша на полке клопа нашёл"
//     .replaceAll(" ", "")
//     .toLowerCase()
//     .split("");
// let reversedString = string.reverse();

// for (let i = 0; i <= string.length; i++) {
//     if (string.includes(reversedString[i])) {
//         console.log(true);
//     } else {
//         false;
//     }
// }

//Check for Polyndrom - 3-nd method;

// let a = "Лёша на полке клопа нашёл".toLowerCase().replace(/\s/g, "").split("");
// console.log(a);
// let b = "Лёша на полке клопа нашёл".toLowerCase().replace(/\s/g, "").split("").reverse();
// console.log(b);

// const c = [...a, ...b];

// let aFiltered = a.filter((element, index) => element === c[index]).length;
// let bFiltered = b.filter((element, index) => element === c[index]).length;


// if (a.length === b.length && aFiltered && bFiltered) {
//     console.log(true);
// } else {
//     console.log(false);
// }

//Напишите функцию caculculateAverage()
//которая принимает произвольное количество
//аргументов и возвращает их среднее значение.
//Добавить проверку, что аргументы это числа.

// function caculculateAverage () {

//     const args = [...arguments];


//     let total = 0;
//     let count = 0;

//     args.forEach(number => {
//         if (typeof number === 'number') {
//             total += number;
//             count += 1;
//         }
//     })
//     console.log(total / count);
// }
// caculculateAverage(1, 5, 8, 2, "z", "c");



//Напишите функцию findTheColor()
//которая принимает название цвета
//определяет его наличие в массиве
//если цвет есть, усталавливет его как фон документа
//если цвета нет выводит console.error('Такой цвет не найден');
//и устанавливает цвет документа красный
// document.body.style.background = 'red';


// const colors = ['blue', 'yellow', 'olive', 'fuchsia', 'lime', 'aqua', 'maroon']


// const findTheColor = (color) => {

//     // if (colors.includes(color)) {
//     //     document.body.style.background = color;
//     //     return
//     // }

//     // console.error('Такой цвет не найден');
//     // document.body.style.background = 'red';

//     const inArray = colors.find(element => element === color)

//     document.body.style.background = inArray ? inArray : 'red';


//     if (!inArray) {
//         console.error('Такой цвет не найден');

//     }




// console.log(inArray);
// }

// findTheColor('red')
//Напишите ф-цию calcTotalPrice(stones, stonesName),
//которая принимает массив объектов и
//строку с названием камня.
//Функция считает м возвращает общую стоимость камней
//с таким именем, ценой и количеством из объекта

// const stones = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 6 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 150, quantity: 100 },
// ];

// function calcTotalPrice(stones, stonesName) {
//     for (const {name, price, quantity} of stones) {
//         if (name === stonesName) {
//             return price * quantity;
//         }
//     }
//     }
// console.log(calcTotalPrice(stones, 'Щебень'));


//Finish the callback function for consoles logs to work properly
// function one(callback) {
//     return callback ? callback(1) : 1;
// }
// function two(callback) {
//     return callback ? callback(2) : 2;
// }
// function three(callback) {
//     return callback ? callback(3) : 3;
// }
// function four(callback) {
//     return callback ? callback(4) : 4;
// }
// function five(callback) {
//     return callback ? callback(5) : 5;
// }
// function six(callback) {
//     return callback ? callback(6) : 6;
// }
// function seven(callback) {
//     return callback ? callback(7) : 7;
// }
// function eight(callback) {
//     return callback ? callback(8) : 8;
// }
// function nine(callback) {
//     return callback ? callback(9) : 9;
// }

// function plus(a) {
//     return (b) => a + b;
// }
// function minus(a) {
//     return (b) => a - b;
// }
// function divide(a) {
//     return (b) => b / a;
// }
// function mult(a) {
//     return (b) => b * a;
// }

// console.log(one(plus(three()))); // 4
// console.log(four(mult(three()))); // 12
// console.log(four(divide(two()))); // 2

// Напишите функцию для хранения скидки.Функция возвращает
//другую функцию, которая принимает сумму покупки
//и возвращает финальную сумму с сохраненной скидкой.
//const discountPremium = saveDiscount(50);
// console.log(discountPremium(1000));

// const calcDiscount = function (discount) {
//     const calcTotal = function (sum) {
//         let result = sum * (discount / 100);
//         return result;
//     }
//     return calcTotal;
// }

// const discountPremium = calcDiscount(50);
// console.log(discountPremium(1000));
