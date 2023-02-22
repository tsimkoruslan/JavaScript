// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// (cutString('наслаждение',3)) // [нас,лаж,ден,ие]
//
function cutString(str, n) {
    let newStr = str.split('')
    for (let i = n; i < newStr.length; i += n) {
        newStr[i] = newStr[i] + `,`;
    }
    return newStr.join(``);
}

console.log(cutString(`Mr.Kitty • After Dark`, 3))

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
delete_characters = (str, length) => str.slice(0, length);
console.log(delete_characters(`Mr.Kitty • After Dark `, 3));
//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
let str = "HTML JavaScript PHP";
insert_dash = (string => {
    let item =  string.toUpperCase()  ;
    return  item.replaceAll(` `, `-`);
});
console.log(insert_dash(str))

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
 firstLetter = str => {
        let text = str.substring(1,str.length);
    return  str.charAt(0).toUpperCase() + text
}
console.log( firstLetter(`text`));
// - Дано список імен.
let n1 = 'Harry.....Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

clearName = name => name.replace(/[^a-zA-Z]/g , ' ').trim().replace(/\s+/g, ' ');

console.log(clearName(n2))

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let randomInt = [];
numBigInt = (array , n) => {
    for (let i = 0; i < n; i++) {
       array.push(Math.floor(Math.random() * 101 ));
    }
}
numBigInt(randomInt,10);
console.log(randomInt)
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
randomInt.sort((a,b) => a - b );
console.log(randomInt.sort((a,b) => a - b ));
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
let newArr = randomInt.filter(n =>{
    if (n % 2 === 0 && n !==0) {
        return n;
    }
})
console.log(newArr)
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let testString = `хто не курить і не п'є той непющий некурун`

capitalize = str => {
    let newStr = str.split(` `);
    let container = [];
    newStr.forEach(i => {
        let element2 = i.slice(1,i.length);
        let element1 = i[0].toUpperCase();
        container.push(element1 + element2);
    })
    return container

}
console.log(capitalize(testString))
// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@)
// , наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ
// далі після равлика, функція не чутлива до регістру
// (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
//
// - є масив let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
//
// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
//
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
//
//
// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
// - вісортувати книжки по кількості сторінок по зростанню
//
//
