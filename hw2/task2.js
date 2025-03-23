// Создайте абстрактный класс "Shape", который определяет базовые методы для работы с геометрическими фигурами, например, getArea() и getPerimeter(). Создай подклассы, такие как "Rectangle", "Circle", "Triangle", и реализуйте эти методы для каждого подкласса. 

// Создайте класс "Shape" с публичным методом getName, который возвращает имя фигуры. Затем создайте класс "Rectangle", который наследует от "Shape" и добавляет приватные свойства width и height, а также публичные методы getArea и getPerimeter. Убедитесь, что метод getName доступен из экземпляров класса "Rectangle".

class Shape {
    name = "Base shape";

    getName() {

        return this.name;
    }
}

class Restangle extends Shape {
    name = "Restangle";
    #width;
    #height;

    constructor (width, height) {
        super();
        // this._width = width;
        // this._height = height;
        this.#width = width;
        this.#height = height;
    }

    getArea() {

        return this.#width * this.#height;
    }

    getPerimeter() {

        return (this.#width + this.#height) * 2;
    }
}

class Circle extends Shape {
    name = "Circle";
    #radius;

    constructor (radius) {
        super();
        this.#radius = radius;
    }

    getArea() {

        return Math.pow(this.#radius, 2) * Math.PI;
    }

    getPerimeter() {

        return this.#radius * Math.PI * 2;
    }
}

class Triangle extends Shape {
    name = "Triangle";
    #a;
    #b;
    #c;

    constructor (a, b, c) {
        super();
        this.#a = a;
        this.#b = b;
        this.#c = c;
    }

    getArea() {
        // Формула Герона
        const p = (this.#a + this.#b * this.#c) / 2;
        return Math.sqrt(p * (p - this.#a) * (p - this.#b) * (p - this.#c));
    }

    getPerimeter() {

        return this.#a + this.#b + this.#c;
    }
}

const restangle = new Restangle(10, 20);
const circle = new Circle(10);
const triangle = new Triangle(10, 10, 20);

console.log(restangle.getArea());
console.log(restangle.getPerimeter());
console.log(restangle.getName());

console.log(circle.getArea());
console.log(circle.getPerimeter());
console.log(circle.getName());

console.log(triangle.getArea());
console.log(triangle.getPerimeter());
console.log(triangle.getName());