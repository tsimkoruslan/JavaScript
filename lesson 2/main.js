// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arrayOfElements = [`ToyotaSupra`, `Nissan180SX`, `HondaCivic`, `MazdaRX-7`, 1, 1.01, true, false, undefined, 99.99];
console.log(arrayOfElements);

console.log(arrayOfElements[0])


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let books = [
    {title: `Фактор Черчилля. Як одна людина змінила історію`, pageCount: 500, genre: `history`},
    {title: `Довга Хода`, pageCount: 288, genre: `history`},
    {title: `Двір холоду і зоряного сяйва.`, pageCount: 256, genre: `fantasy`}
];

// - Створити 3 об'єкти які описують книги.
// Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let books2 = [
    {
        title: `Володар перснів`,
        pageCount: 1120,
        genre: `fantasy`,
        // у завдані пише що автори це масив ... але присвоювати через = не доречно ...
        // то ж я розумію , що тут краще викристати об'єкт ??? Чи все таки так як закоментований код нище ?
        // authors1: [name = `Джон Р. Р. Толкін` , age = `99`] ;
        authors: [{name: `Джон Р. Р. Толкін`, age: 99}]
    },
    {
        title: `Колгосп тварин`,
        pageCount: 128,
        genre: `classic`,
        authors: [{name: `Джордж Орвел`, age: 99}]
    },
    {
        title: `Старий і море`,
        pageCount: 104,
        genre: `classic`,
        authors: [{name: `Ернест Гемінґвей`, age: 99}]
    }
];
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.

let users = [
    {name: `testName1`, username: `testUsername1`, password: 12345678901},
    {name: `testName2`, username: `testUsername2`, password: 12345678902},
    {name: `testName3`, username: `testUsername3`, password: 12345678903},
    {name: `testName4`, username: `testUsername4`, password: 12345678904},
    {name: `testName5`, username: `testUsername5`, password: 12345678905},
    {name: `testName6`, username: `testUsername6`, password: 12345678906},
    {name: `testName7`, username: `testUsername7`, password: 12345678907},
    {name: `testName8`, username: `testUsername8`, password: 12345678908},
    {name: `testName9`, username: `testUsername9`, password: 12345678909},
    {name: `testName10`, username: `testUsername10`, password: 123456789010}
];
// Вивести в консоль пароль кожного користувача
console.log(users [0].password);
console.log(users [1].password);
console.log(users [2].password);
console.log(users [3].password);
console.log(users [4].password);
console.log(users [5].password);
console.log(users [6].password);
console.log(users [7].password);
console.log(users [8].password);
console.log(users [9].password);

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
let x = 8;
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
if (x !== 0) {
    console.log(`Вірно`);
} else {
    console.log(`Невірно`);
}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 59;

if (time <= 59 && time >= 0) {
    if (time <= 15 && time >= 0) {
        console.log(`Перша чверть години`);
    } else if (time >= 15 && time <= 30) {
        console.log(`Друга чверть години`);
    } else if (time >= 30 && time <= 45) {
        console.log(`Третя чверть години`);
    } else if (time >= 45 && time <= 59) {
        console.log(`Четверта чверть години`);
    }
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 1;

if (day >= 1 && day <= 10) {
    console.log(`1 декада`);
} else if (day >= 10 && day <= 20) {
    console.log(`2 декада`);
} else if (day >= 20 && day <= 31) {
    console.log(`3 декада`);
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let dayWeek = 1;

switch (dayWeek) {
    case 1 :
        console.log(`Monday`);
        break;
    case 2 :
        console.log(`Tuesday`);
        break;
    case 3 :
        console.log(`Wednesday`);
        break;
    case 4 :
        console.log(`Thursday`);
        break;
    case 5 :
        console.log(`friday`);
        break;
    case 6 :
        console.log(`Saturday`);
        break;
    case 7 :
        console.log(`Sunday`);
        break;

}


//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let a = 1;
let b = 2;

if (a === b) {
    console.log(a, `і`, b, `числа однакові`);
} else if (a > b) {
    console.log(a, `більше за`, b);
} else if (a < b) {
    console.log(a, `менше за`, b);
}


//     - є змінна y, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let y = 3;

if (y === 0 || y === false || y === "" || y === -0 || y === `` || y === '' || y === null || y === undefined) {
    y = `default`;
}


//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4},
]
//     За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша
//     за 5 місяців вивести в консоль "Супер".
if (coursesAndDurationArray [0].monthDuration > 5 ) {
    console.log(`Супер`)
}
if (coursesAndDurationArray [1].monthDuration > 5 ) {
    console.log(`Супер`)
}
if (coursesAndDurationArray [2].monthDuration > 5 ) {
    console.log(`Супер`)
}
if (coursesAndDurationArray [3].monthDuration > 5 ) {
    console.log(`Супер`)
}
if (coursesAndDurationArray [4].monthDuration > 5 ) {
    console.log(`Супер`)
}
if (coursesAndDurationArray [5].monthDuration > 5 ) {
    console.log(`Супер`)
}
