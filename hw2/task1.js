// Создайте примесь "LoggerMixin", которая добавляет функциональность логирования в классы. При каждом вызове метода класса должно выводиться сообщение с названием метода и переданными аргументами. 

const LoggerMixin = {

    log(message) {
        console.log(message);
    }
};

class Shape {
    name = 'restangle';

    constructor() {
        this.log('constructor');
    }

    getArea() {
        this.log('getArea');
    }

    getPerimeter() {
        this.log('getPerimeter');
    }
};

Object.assign(Shape.prototype, LoggerMixin);

const shape = new Shape();

shape.getArea();