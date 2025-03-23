// Создайте класс "Student" с публичными свойствами name, age и major. Добавьте метод getInfo, который будет выводить информацию о студенте (например, "Имя: John, Возраст: 20, Специальность: Информатика") в консоль.

class Student {
    constructor(name, age, major) {
        this.name = name;
        this.age = age;
        this.major = major;
    }

    getInfo() {

        return `Имя: ${this.name}, Возраст: ${this.age}, Специальность: ${this.major}`;
    }
}

const student = new Student('Maks', 32, 'Инженер');

console.log(student.getInfo());