//
// - створити блок
let div = document.createElement(`div`);
// - додати йому класи wrap, collapse, alpha, beta
div.classList.add(`wrap`, `collapse`, `alpha`, `beta`)
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
div.style.background = 'silver';
div.style.color = `#483D8B`
div.style.fontSize = `50px`;
div.style.display = `flex`
div.style.borderRadius = `10px`;
div.style.justifyContent = `center`;
div.style.margin = `10px`;
// - додати цей блок в body.
document.body.append(div);
div.innerText = `Заголовок`
// - клонувати його повністю, та додати клон в body.
document.body.append(div.cloneNode(true));
// - Є масив:
let arr = ['Main', 'Products', 'About us', 'Contacts'];
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let ul = document.createElement(`ul`);
document.body.append(ul);

for (const item of arr) {
    let liElement = document.createElement(`li`);
    liElement.append(item);
    ul.append(liElement);
}
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h2 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.


for (const item of coursesAndDurationArray) {
    let blockComplex = document.createElement(`div`);
    let h2 = document.createElement(`h2`);
    let p = document.createElement(`p`);
    p.classList.add(`description`);
    h2.classList.add(`heading`);
    h2.innerText = item.title;
    p.innerText = `Курс триває ` + item.monthDuration + ` місяців`;
    p.style.color = `#820023`;
    blockComplex.append(h2, p);
    document.body.append(blockComplex);
}

// ==========================
//
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//
// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// ------------------
//
//     - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//
//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)