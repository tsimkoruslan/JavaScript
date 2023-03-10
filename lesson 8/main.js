// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function CreatorUser(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let user = new CreatorUser(1, `ruslan`, `tsimko`, `tsimkoruslan@gmail.com`, `098765432`);
console.log(user)
// створити пустий масив, наповнити його 10 об'єктами new User(....)
let arrayUsers = [
    new CreatorUser(1, `name`, `surname`, `gmail`, `+09876543`),
    new CreatorUser(2, `name`, `surname`, `gmail`, `+09876543`),
    new CreatorUser(3, `name`, `surname`, `gmail`, `+09876543`),
    new CreatorUser(4, `name`, `surname`, `gmail`, `+09876543`),
    new CreatorUser(5, `name`, `surname`, `gmail`, `+09876543`),
    new CreatorUser(6, `name`, `surname`, `gmail`, `+09876543`),
    new CreatorUser(7, `name`, `surname`, `gmail`, `+09876543`),
    new CreatorUser(8, `name`, `surname`, `gmail`, `+09876543`),
    new CreatorUser(9, `name`, `surname`, `gmail`, `+09876543`),
    new CreatorUser(10, `name`, `surname`, `gmail`, `+09876543`),

]
console.log(arrayUsers)
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let arrFilter = arrayUsers.filter(item => item.id % 2 === 0);
console.log(arrFilter)
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortArr = arrayUsers.sort((a, b) => a.id - b.id);
console.log(sortArr)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
let arrClient = [
    new Client(1, `userName`, `surName`, `@mail`, `+09876543212345`, `121`),
    new Client(2, `userName`, `surName`, `@mail`, `+09876543212345`, `902`),
    new Client(3, `userName`, `surName`, `@mail`, `+09876543212345`, `163`),
    new Client(4, `userName`, `surName`, `@mail`, `+09876543212345`, `804`),
    new Client(5, `userName`, `surName`, `@mail`, `+09876543212345`, `175`),
    new Client(6, `userName`, `surName`, `@mail`, `+09876543212345`, `136`),
    new Client(7, `userName`, `surName`, `@mail`, `+09876543212345`, `187`),
    new Client(8, `userName`, `surName`, `@mail`, `+09876543212345`, `708`),
    new Client(9, `userName`, `surName`, `@mail`, `+09876543212345`, `209`),
    new Client(10, `userName`, `surName`, `@mail`, `+09876543212345`, `310`),
]
console.log(arrClient);
// - Взяти масив (Client [] з попереднього завдання).
// Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let arrSort = arrClient.sort((a, b) => a.order - b.order);
console.log(arrSort)
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// //
function CreatorCar(model, manufacturer, year, maxSpeed, engine) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;
    this.drivers = [];
    this.drive = function () {
        return `їдемо зі швидкістю ${this.maxSpeed} на годину`
    };
    this.info = function () {
        return (`Модель авто - ${this.model}
         Країна виробника - ${this.manufacturer}
         Рік випуску - ${this.year}
         Максимальна швидкість - ${this.maxSpeed}
         Об'єм двигуна - ${this.engine}`)
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed + this.maxSpeed;
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
    };
    this.addDriver = function (driver) {
        this.drivers.push(driver)
    };

};

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
class CreatorCar2 {
    constructor(model, manufacturer, year, maxSpeed, engine) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
        this.drivers = [];
    };

    drive() {
        return `їдемо зі швидкістю ${this.maxSpeed} на годину`
    };

    info() {
        return (`Модель авто - ${this.model}
         Країна виробника - ${this.manufacturer}
         Рік випуску - ${this.year}
         Максимальна швидкість - ${this.maxSpeed}
         Об'єм двигуна - ${this.engine}`)
    };

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = newSpeed + this.maxSpeed;
    };

    changeYear(newValue) {
        this.year = newValue;
    };

    addDriver(driver) {
        this.drivers.push(driver)
    };

}
;

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
function Mom(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

let princes = [
    new Mom(`Vika`, 18, 36),
    new Mom(`Anna`, 20, 37),
    new Mom(`Nadya`, 38, 39),
    new Mom(`Maria`, 28, 35),
    new Mom(`Olya`, 45, 40),
    new Mom(`Julia`, 90, 40),
    new Mom(`Vika`, 54, 42),
    new Mom(`Irina`, 32, 38),
    new Mom(`Eva`, 23, 37),
    new Mom(`Niki`, 20, 34),

]

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

let prince = new Prince(`Petya`, 28, 36);
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (const item of princes) {
    if (prince.shoe === item.footSize) {
        console.log(item)
    }
}
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
princes.find(i => prince.shoe === i.footSize);