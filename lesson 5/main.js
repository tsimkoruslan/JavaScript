// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!

const pi = 3.14 ;
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let p = (a,b) => a * b ;
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let pR2 = (r) => pi * r * r ;
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let pCylinder = (r , h ) => 2 * p * r * (r + h );
// - створити функцію яка приймає масив та виводить кожен його елемент
let printArray = (array) => {
    for (const item of array) {
        console.log(item);
    }
}
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let newParagraph = (text) => {
    document.write (`<p> ${text} </p>`);
}
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let liText = (textLi) => {
    document.write (`<ul>`);
    document.write (`<li>${textLi}</li>`);
    document.write (`<li>${textLi}</li>`);
    document.write (`<li>${textLi}</li>`);
    document.write (`</ul>`)
}


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li
//визначається другим аргументом, який є числовим (тут використовувати цикл)

let liTextCucle = (textLi , num) => {
    document.write (`<ul>`);
    for (let i = 0 ; i < num ; i++){
        document.write (`<li>${textLi}</li>`);
    }
    document.write (`</ul>`);
}
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let listItem = (arr) => {
    document.write (`<ul>`);
    for (const item of arr) {
        document.write (`<li> ${item} </li>`);
    }
    document.write (`</ul>`);
}

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
//Для кожного об'єкту окремий блок.

let sortingElement = (arr) => {
    for (const item of arr) {
        document.write(`<div>`);
        document.write(`<h2> ${item.id} </h2>`);
        document.write(`<h3> ${item.name} </h3>`);
        document.write(`<h4> ${item.age} </h4>`);
        document.write(`</div>`);
    }
}

// - створити функцію яка повертає найменьше число з масиву
let minNum = (arr) => {
    let min = arr[0];
    for (const item of arr) {
        if ( item <= min ){
            min = item ;
        }
    }
    return min ;
}

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
let sum = (arr) => {
    let number = 0 ;
    for (let i = 0 ; i < arr.length ; i++){
        number = arr[i] + number;
    }
    return number ;
}

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
let xxx = [1,2,3,4,5];

let swap = (arr,index1,index2) => {
    let x = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = x;
    return arr;
}

// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let exchange = (sumUAH , currencyValues , exchangeCurrenc) => {
    for (const i of currencyValues) {
        if (i.currency === exchangeCurrenc){
            return   sumUAH /  i.value;
        }

    }
}

