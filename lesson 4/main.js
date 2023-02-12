// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function area(a, b) {
    return a * b;
}

console.log(area(2, 2))
// - створити функцію яка обчислює та повертає площу кола з радіусом r


const p = 3.14;

function s(r) {
    return p * (r * r);
}

console.log(s(25));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinder(r, h) {
    return 2 * p * r * (r + h);
}

console.log(cylinder(9, 9))
// - створити функцію яка приймає масив та виводить кожен його елемент
let array = [21, 52, 13, 4, 35, 26, 7, 68, 9]

function indexArray(array) {
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}

indexArray(array)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function textP(str) {
    document.write(`<p>${str}</p>`);
}

textP(`Text String`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function list(description) {
    document.write(`<ul>`);
    document.write(` <li>${description}</li>
                         <li>${description}</li>
                         <li>${description}</li>`)
    document.write(`</ul>`);
}

list(`опис ul`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function listFor(description, repetition) {
    document.write(`<ul>`);
    for (let i = 0; i < repetition; i++) {
        document.write(`<li>${description}</li>`);
    }
    document.write(`</ul>`);
}

listFor(`Oooooooooooomaga`, 12)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arrayNSB = [8, `khj`, 86, true, 7, 34, `rew`, 23, false, `qwe`,]

function sortingArray(array) {
    let typeElement = [`number`, `string`, `boolean`]
    document.write(`<div class="parent">`);
    for (const x of typeElement) {
        document.write(`<ul class="sortig--ul">`);
        for (let i of array) {
            if (typeof i === x) {
                document.write(`<li> ${i} </li>`)
            }
        }
        document.write(`</ul>`);
    }
    document.write(`</div>`);
}

sortingArray(arrayNSB);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.


let users = [
    {id: 1, name: `Іван`, age: 18},
    {id: 2, name: `Вікторія`, age: 23},
    {id: 3, name: `Волдеморд`, age: 57},
]


function sortingUsers(arrayUsers) {
    document.write(`<div class="parent">`);
    for (let x of arrayUsers) {
        document.write(`<ul class="sortig--ul">`);
        document.write(`<li>${x.id}</li>`);
        document.write(`<li>${x.name}</li>`);
        document.write(`<li>${x.age}</li>`);
        document.write(`</ul>`);
    }
    document.write(`</div>`)

}

sortingUsers(users)
// - створити функцію яка повертає найменьше число з масиву

let numberMin = [56456, 642342, 243241, 234142, 989, 32, 3123, 22, 999999, 98, 33214, 58];

function minNumber(array) {
    let x = numberMin[0];
    for (const i of array) {
        if (i <= x) {
            x = i;
        }
    }
    return x;
}

console.log(minNumber(numberMin))

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let sumArray = [1, 1, 1, 2, 2, 23];

function sumNumber(array) {
    let sum = 0;
    for (const x of array) {
        sum = x + sum;
    }
    return sum;
}

console.log(sumNumber(sumArray))
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах

// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let qwert = [11,22,33,44];
function swap (arr , index1 , index2 ){
    let container = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = container;
                    // arr.splice(index1, 1, arr.splice(index2, 1, arr[index1])[0]);
    return arr;
}
console.log(swap(qwert,2,1))

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange (sumUAH,cur){
    let curName = cur.toUpperCase();
    let values = [
        {currency:'USD',value:40},
        {currency:'EUR',value:42},
    ];
    // return sumUAH * values[`currency`[cur]];
    for (const i of values) {
        if (i.currency === curName ) {
           return sumUAH / i.value;
        }
    }

}
console.log(exchange(100123 , `eur`))