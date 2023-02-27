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
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    this.info = function () {
        console.log(`Модель авто - ${this.model}
         Країна виробника - ${this.manufacturer}
         Рік випуску - ${this.year}
         Максимальна швидкість - ${this.maxSpeed}
         Об'єм двигуна - ${this.engine}`)
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed;
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
    };
    this.addDriver = function (driver){

    };

};


let car = new CreatorCar(`Audi`, `Germany`, 2000, 280, `2,8`);
console.log(car.addDriver({name: `123`}));
console.log(car);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку