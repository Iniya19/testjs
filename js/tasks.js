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

function caculculateAverage () {

    const args = [...arguments];


    let total = 0;
    let count = 0;

    args.forEach(number => {
        if (typeof number === 'number') {
            total += number;
            count += 1;
        }
    })
    console.log(total / count);
}
caculculateAverage(1, 5, 8, 2, "z", "c");