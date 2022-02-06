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

// formElementState();
//Task-1
// const people = [
//     {
//         name: 'Alex',
//         know: ['Alex', 'Jhon'],
//     },
//     {
//         name: 'Jhon',
//         know: [],
//     },
//     {
//         name: 'Eva',
//         know: ['Alex', 'Jhon'],
//     },
//     {
//         name: 'Ivan',
//         know: ['Jhon', 'Eva'],
//     },
// ];

// //нарцис  'Jhon'

// const people1 = [
//     {
//         name: 'Alex',
//         know: ['Alex', 'Jhon'],
//     },
//     {
//         name: 'Jhon',
//         know: [],
//     },
//     {
//         name: 'Eva',
//         know: [],
//     },
//     {
//         name: 'Ivan',
//         know: ['Jhon', 'Eva'],
//     },
// ];

// //немає нарциса'

// const people3 = [
//     {
//         name: 'Alex',
//         know: ['Alex', 'Eva'],
//     },
//     {
//         name: 'Jhon',
//         know: [],
//     },
//     {
//         name: 'Eva',
//         know: ['Alex', 'Jhon'],
//     },
//     {
//         name: 'Ivan',
//         know: ['Jhon', 'Eva'],
//     },
// ];

// //немає нарциса

// const people4 = [
//     {
//         name: 'Alex',
//         know: ['Alex', 'Jhon'],
//     },
//     {
//         name: 'Jhon',
//         know: ['Eva'],
//     },
//     {
//         name: 'Eva',
//         know: ['Alex', 'Jhon'],
//     },
//     {
//         name: 'Ivan',
//         know: ['Jhon', 'Eva'],
//     },
// ];

// //немає нарциса'
// function findNarcissius(peopleList) {

//     let message = `No narcissius`;

//     const thePerson = peopleList.find(item => item.know.length === 0);

//     if (!thePerson) {
//         return console.log(message);
//     }

//     const IsWithoutJohn = peopleList.filter(item => item.name !== thePerson.name);

//     const ifPresentOnList = IsWithoutJohn.every((item) =>
//         item.know.includes(thePerson.name));

//     message = ifPresentOnList ? `Narcis ${thePerson.name}` : message;
//     console.log(message);


// }
// findNarcissius(people4);


// findNarcissius(people);

// findNarcissius(people1);

// findNarcissius(people3);

// function findName(peopleList, callback) {
//     // let narcissiusName = "";
//     for (const { know, name } of peopleList) {
//         if (know.length === 0) {
//             return callback(name, peopleList);
//         }

//     }
//     return console.log(`No narcissius`);
// }

// function findNarcissius(narcissiusName, peopleList) {
//     for (const { know, name } of peopleList) {
//         if (narcissiusName === name) {
//             continue;
//         }
//         if (!know.includes(narcissiusName)) {

//             return console.log(`No narcissius`)
//         }
//     }
//     console.log(`Narcisiuss ${narcissiusName}`);
// }
// findName(people, findNarcissius);
// findName(people1, findNarcissius);
// findName(people3, findNarcissius);
// findName(people4, findNarcissius);

// findNarcissius(people4);


// Task - 2
// const a = [121, 144, 19, 161, 19, 144, 19, 11];
// const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

// function sortArrays(a, b) {

//     if (a.length !== b.length) {
//         console.log(`Arrays ain't equal`);
//     }


//     const arrCalc = a.map((item) => Math.pow(item, 2));

//     const sortArr = [...arrCalc].sort((a, b) => a - b);


//     const sortB = [...b].sort((a, b) => a - b);


//     for (let i = 0; i < sortArr.length; i++) {
//         if (sortArr[i] !== sortB[i]) {
//             return false
//         }

//     }

//     return true

// }


// console.log(sortArrays(a, b));

//Task-3
//Создать небольшую игру:)
// - Изначально на экране пользователя будет отображаться
//какая - то форма (круг, квадрат, прямоулольник)
// - При нажатии на нее в рандомном порядке форма должна
//меняться на другую
// - Форма каждый раз должна появляться в разных местах на странице
// - Цвет формы в рандомном порядке меняется,



// const forms = [
//     'width: 100px; height: 100px; border-width: 1px; border-color: #000000',
//     'width: 100px; height: 100px; border-radius: 50%; border-width: 1px; border-color: #000000',
//     'width: 150px; height: 100px; border-width: 1px; border-color: #000000',
//     'width: 200px; height: 100px; border-radius: 100px / 50px;',
//     'width: 150px; height: 100px; transform: skew(20deg);',
// ];
// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const randomither = max => {
//     return Math.floor(Math.random() * max);
// };

// const body = document.querySelector('body');

// const formElement = document.createElement('div');

// // formElement.style.cssText = forms[randomither(forms.length - 1)];
// // formElement.style.backgroundColor = getRandomHexColor();


// // body.append(formElement);

// formElement.addEventListener('click', formElementState)

// function formElementState() {
//     formElement.style.cssText = forms[randomither(forms.length - 1)];

//     formElement.style.backgroundColor = getRandomHexColor();
//     formElement.style.position = 'absolute';

//     let height = 100 - (formElement.clientHeight * 100) / document.documentElement.clientHeight;
//     console.log(height);

//     let width = 100 - (formElement.clientWidth * 100) / document.documentElement.clientWidth;
//     console.log(width);

//     formElement.style.left = `${randomither(width)}%`;
//     formElement.style.top = `${randomither(height)}%`;
// }

//Task-4
//Создать маркированный список.
//Создать кнопки "Add" "Remove", которые будут менять состав списка
//Создать input с которого будем получать значение, которое будет в li
//* Четным li указать красный фон, нечетным -- синим
//Для выполнения задания используйте createElement

// const olList = document.createElement('ol');
// const addBtn = document.createElement('button');
// addBtn.textContent = 'ADD';
// const removeBtn = document.createElement('button');
// removeBtn.textContent = 'REMOVE';
// const input = document.createElement('input');

// body.append(olList, addBtn, removeBtn, input);

// addBtn.addEventListener('click', () => {
//     console.log(input.value);

//     const createLi = document.createElement('li');
//     createLi.textContent = input.value ? input.value : `No content`;

//     olList.append(createLi);

//     const childrenLength = olList.children.length;
//     console.log(childrenLength);

//     const isEven = childrenLength % 2 === 0;

//     createLi.classList.add(isEven ? 'even' : 'odd');

//     input.value = "";
// })

// removeBtn.addEventListener('click', () => {
//     if (!olList.hasChildNodes()) {
//         return;
//     }
//     olList.removeChild(olList.lastElementChild);
// })