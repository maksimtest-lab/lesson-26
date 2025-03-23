
// Полиморфизм
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     makeSound() {
//         console.log(`${this.name} made a sound`);
//     }
// }


// const lion = new Animal('Lion');

// lion.makeSound();

// class Dog extends Animal {
//     constructor(name, breed) {
//         super(name);
//         this.breed = breed;
//     }

//     makeSound() {
//         console.log(`${this.name} is barking`);
//     }

// }

// const dog = new Dog('Rex', 'Labrador');

// dog.makeSound();

// Инкапсуляция
// class User {
//     #password;

//     constructor(email, password) {
//         this.email = email;
//         this.#password = password;
//     }

//     checkPassword(password) {
//         console.log(this.#password === password);
//     }

//     updatePassword(newPassword) {
//         this.#password = newPassword;
//     }

//     getPassword() {
//         return this.#password;
//     }
// }

// const user = new User('8jB0S@example.com', '12345');

// user.checkPassword('234');
// user.checkPassword('12345');
// user.getPassword();

// console.log(user.getPassword());


// Часть 2

// class Person {

//     #name;
//     #age;

//     constructor(name, age) {
//         this.#name = name;
//         this.#age = age;
//     }

//     #checkName(name) {
//         if (name !== 'admin') {
//             return name;
//         }
//     }

//     setAge(age) {
//         if (age > 0 && age < 110) {
//             this.#age = age;
//         }
//     }

//     setName(name) {
//         if (typeof name === 'string' && !name.trim()) {
//             this.#name = name;
//         }
//     }

//     getPersonInfo() {
//         return {name: this.#name, age: this.#age};
//     }

// }


// const user = new Person('John', 32);

// user.setAge(31);
// user.setName('Mike');

// console.log(user.getPersonInfo());

// Инкапсуляция
// const eventsUser = {
//     sayHi() {
//         console.log(`Hello ${this.name}`);
//     },
//     sayBye() {
//         console.log(`Bye ${this.name}`);
//     }
// }

// class User {
//     constructor(name) {
//         this.name = name;
//     }
// }

// Object.assign(User.prototype, eventsUser);

// const user = new User('John');

// user.sayHi();
// user.sayBye();

// console.log(user);

// Работа на уроке

// class Person {
//     #password;

//     constructor(name) {
//         this.name = name;
//     }

//     setPasswod(password) {
//         this.#password = password;
//     }

//     sayHello() {
//         console.log(`Hello ${this.name}`);
//     }

//     getPassword() {
//         console.log(this.#password);
//     }
// }

// const user = new Person("John");

// user.setPasswod('123');
// user.sayHello();
// user.getPassword();

// Работа на уроке часть 2

// class Bank {
//     #account = 0;

//     constructor (balance=0) {
//         this.#account = balance;
//     }

//     getBalance() {
//         return this.#account;
//     }

//     deposit(sum) {
//         if (sum > 0) {
//             this.#account += sum;
//             console.log(`Состояние баланса ${this.#account}, пополнено на ${sum}`);
//         } else {
//             console.log("Сумма меньше нуля");
//         }
//     }

//     withdrow(sum) {
//         if (sum < this.#account && sum > 0) {
//             this.#account -= sum;
//             console.log(`Состояние баланса ${this.#account}, уменьшено на ${sum}`);

//         } else {
//             console.log("Недостаточно средств");
//         }
//     }
// }

// const account = new Bank(1000);

// account.deposit(50);
// account.withdrow(150);
// account.withdrow(2150);

// Работа на уроке часть 3

// class Task {

//     constructor(title, description) {
//         this.title = title;
//         this.description = description;
//         this.complited = false;
//     }

//     setComlited () {
//         this.complited = !this.complited;
//     }

//     editTitle (newTitle) {
//         this.title = newTitle;
//     }

//     editDescription (newDescription) {
//         this.description = newDescription;
//     }

// }

// class TaskManager {
//     constructor() {
//         this.tasks = [];
//     }

//     addTask(task) {
//         this.tasks.push(task);
//     }

//     removeTask(title) {
//         this.tasks = this.tasks.filter((item) => item.title != title);
//     }

//     listTasks() {
//         return this.tasks;
//     }

// }

// const task1 = new Task('1');
// const task2 = new Task('2');
// const task3 = new Task('3');
// const task4 = new Task('4');

// const taskManager = new TaskManager();

// taskManager.addTask(task1);
// taskManager.addTask(task2);
// taskManager.addTask(task3);
// taskManager.addTask(task4);

// console.log(taskManager.listTasks());

// taskManager.removeTask('2');

// console.log(taskManager.listTasks());