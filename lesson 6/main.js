// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(`hello world`.length, 'lorem ipsum'.length, 'javascript is cool'.length);
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log("'hello world', 'lorem ipsum', 'javascript is cool'".toUpperCase());
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log("'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'".toLowerCase());
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
let strClear = str.replaceAll(` `, ``);
console.log(strClear)
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let strQuote = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let sortingArr = (arr) => strQuote.split(` `);
let arrQuote = sortingArr(strQuote);
console.log(arrQuote);
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let numbersString = numbers.map((i) => i = i + ``);
console.log(numbersString)
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11, 21, 3, 123, 43, 66, 31, 432];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
function sortNums(nums, i) {
    if (i === 'ascending') {
        return nums.sort((a, b) => a - b);
    } else if (i === `descending`) {
        return nums.sort((a, b) => b - a);
    }
}

console.log(sortNums(nums, `descending`))
// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let sortMonth = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(sortMonth)
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let moreThanFive = coursesAndDurationArray.filter(i => {
    if (i.monthDuration >= 5) {
        return i.monthDuration
    }
})
console.log(moreThanFive)
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let newCoursesAndDurationArray = coursesAndDurationArray.map((value, index) => {
    return {id: index, title: value.title, monthDuration: value.monthDuration};
});
console.log(newCoursesAndDurationArray)
// =========================
//     описати колоду карт (від 6 до туза без джокерів)
let cards = [
    //spade black
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    //spade red
    {cardSuit: 'spade', value: '6', color: 'red'},
    {cardSuit: 'spade', value: '7', color: 'red'},
    {cardSuit: 'spade', value: '8', color: 'red'},
    {cardSuit: 'spade', value: '9', color: 'red'},
    {cardSuit: 'spade', value: '10', color: 'red'},
    {cardSuit: 'spade', value: 'jack', color: 'red'},
    {cardSuit: 'spade', value: 'queen', color: 'red'},
    {cardSuit: 'spade', value: 'king', color: 'red'},
    {cardSuit: 'spade', value: 'ace', color: 'red'},
    //diamond black
    {cardSuit: 'diamond', value: '6', color: 'black'},
    {cardSuit: 'diamond', value: '7', color: 'black'},
    {cardSuit: 'diamond', value: '8', color: 'black'},
    {cardSuit: 'diamond', value: '9', color: 'black'},
    {cardSuit: 'diamond', value: '10', color: 'black'},
    {cardSuit: 'diamond', value: 'jack', color: 'black'},
    {cardSuit: 'diamond', value: 'queen', color: 'black'},
    {cardSuit: 'diamond', value: 'king', color: 'black'},
    {cardSuit: 'diamond', value: 'ace', color: 'black'},
    //diamond red
    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
    //heart black
    {cardSuit: 'heart', value: '6', color: 'black'},
    {cardSuit: 'heart', value: '7', color: 'black'},
    {cardSuit: 'heart', value: '8', color: 'black'},
    {cardSuit: 'heart', value: '9', color: 'black'},
    {cardSuit: 'heart', value: '10', color: 'black'},
    {cardSuit: 'heart', value: 'jack', color: 'black'},
    {cardSuit: 'heart', value: 'queen', color: 'black'},
    {cardSuit: 'heart', value: 'king', color: 'black'},
    {cardSuit: 'heart', value: 'ace', color: 'black'},
    //heart red
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    //clubs black
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
    //clubs red
    {cardSuit: 'clubs', value: '6', color: 'red'},
    {cardSuit: 'clubs', value: '7', color: 'red'},
    {cardSuit: 'clubs', value: '8', color: 'red'},
    {cardSuit: 'clubs', value: '9', color: 'red'},
    {cardSuit: 'clubs', value: '10', color: 'red'},
    {cardSuit: 'clubs', value: 'jack', color: 'red'},
    {cardSuit: 'clubs', value: 'queen', color: 'red'},
    {cardSuit: 'clubs', value: 'king', color: 'red'},
    {cardSuit: 'clubs', value: 'ace', color: 'red'},
]
// - знайти піковий туз
let spadeAce = [];
cards.forEach(i => {
    if (i.cardSuit === `spade` && i.value === `ace`) {
        spadeAce.push(i)
    }
})
console.log(spadeAce)
// - всі шістки
let cardsSix = [];
cards.forEach(i => {
    if (i.value === `6`) {
        cardsSix.push(i)
    }
})
console.log(cardsSix)
// - всі червоні карти
let redCards = [];
cards.forEach(i => {
    if (i.color === `red`) {
        redCards.push(i)
    }
})
console.log(redCards)
// - всі буби
let diamomdAll = [];
cards.forEach(i => {
    if (i.cardSuit === `diamond`) {
        diamomdAll.push(i)
    }
})
console.log(diamomdAll)
// - всі трефи від 9 та більше
let clubsUp = [];
cards.forEach(i => {
    if (i.cardSuit === `clubs` && i.value !== `6` && i.value !== `7` && i.value !== `8`) {
        clubsUp.push(i)
    }
})
console.log(clubsUp)
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
let newArrCards = cards.reduce((acc, item) => {
    if (item.cardSuit === `spade`) {
        acc.spades.push(item);
    }
    if (item.cardSuit === `diamond`) {
        acc.diamonds.push(item);
    }
    if (item.cardSuit === `heart`) {
        acc.hearts.push(item);
    }
    if (item.cardSuit === `clubs`) {
        acc.clubs.push(item);
    }
    return acc
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
})
console.log(newArrCards)
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
]
;
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

function search (a){
    let conteiner = [];
    coursesArray.forEach(i =>{

        let modules = i.modules
        for (const x of modules) {
            if (x === a){
                conteiner.push(i) ;
            }
        }

    })
    return conteiner;
}
console.log(search(`sass`))
console.log(search(`docker`))