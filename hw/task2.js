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

const restangle = new Restangle(10, 20);

console.log(restangle.getArea());
console.log(restangle.getPerimeter());
console.log(restangle.getName());