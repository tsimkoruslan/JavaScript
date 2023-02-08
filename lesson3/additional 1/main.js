// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//
let namArray = [1, 2, 3, 4, 5];
let strArray = [`q`, `w`, `e`, `r`, `t`];
let bnsArray = [1, 2, 3, 4, 5, `q`, `w`, `e`, `r`, `t`, true, false, true, true, false];
let allArray = [namArray, strArray, bnsArray];
console.log(allArray);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//

let emptyArray = [];
emptyArray[0] = 1;
emptyArray[1] = 1.1;
emptyArray[2] = 1.2;
emptyArray[3] = 1.3;
emptyArray[4] = `qwerty`;
console.log(emptyArray)

//
//
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
let namberArray = [2,17, 13, 6, 22, 31, 45, 66, 100, -18];
// 1. перебрати його циклом while
let i = 0;
while (i < namberArray.length) {
    console.log(namberArray[i]);
    i++;
}
//     2. перебрати його циклом for
for (let x = 0; x < namberArray.length; x++) {
    console.log(namberArray[x]);
}
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
let q = 0;
while (q < namberArray.length) {
    if (q % 2 === 0) {
        console.log(namberArray[q]);
    }

    q++;
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let x = 1; x < namberArray.length; x += 2) {
    console.log(namberArray[x]);
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
let w = 0;
while (w < namberArray.length) {
    if (namberArray[w] % 2 === 0) {
        console.log(namberArray[w]);
    };
    w++;
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let number = 0 ; number < namberArray.length ; number++) {
    if (namberArray[number] % 2 === 0 ){
        console.log(namberArray[number]);
    }
}
// 7. замінити кожне число кратне 3 на слово "okten"

for (let i = 0 ; i < namberArray.length ; i++) {
    if (namberArray[i] % 3 === 0){
        namberArray[i] = `octen`;
    }
}
console.log(namberArray)

// 8. вивести масив в зворотньому порядку.
for (let i = namberArray.length ; i >= 0 ; i--){
    console.log(namberArray[i]);
}
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//
let z = namberArray.length;
while (z > namberArray.length) {
    console.log(namberArray[length]);
    z--;
}

for (let x = namberArray.length; x >= 0; x--) {
    console.log(namberArray[x]);
}

let qp = namberArray.length;
while (qp >= 0) {
    if (qp % 2 === 0) {
        console.log(namberArray[qp]);
    }
    ;
    qp--;
}

for (let x = namberArray.length; x >= 0; x -= 2) {
    console.log(namberArray[x]);
}

//і так далі.....

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
//
//
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор