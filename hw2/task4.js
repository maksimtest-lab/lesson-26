// Создайте класс "Car" со свойствами "engine" и "body". Создайте класс "Engine" с методом "start()", и класс "Body" с методом "open()". Используйте композицию, чтобы связать объекты классов "Car", "Engine" и "Body" вместе и вызывать их методы.

class Car {
    constructor(engine, body) {
        this.engine = engine;
        this.body = body;
    }

    start() {
        this.engine.start();
        this.body.open();
    }

    stop() {
        this.engine.stop();
        this.body.close();
    }
}

class Engine {
    start() {
        console.log('Engine started');
    }

    stop() {
        console.log('Engine stopped');
    }
}

class Body {
    open() {
        console.log('Body opened');
    }

    close() {
        console.log('Body closed');
    }
}

const engine = new Engine();
const body = new Body();
const car = new Car(engine, body);

car.start();
car.stop();