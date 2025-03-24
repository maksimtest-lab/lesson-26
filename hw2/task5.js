// Реализуйте паттерн "Фабричный метод" для создания различных типов продуктов (например, "Car", "Bicycle", "Motorcycle") с помощью фабричных классов.

// Абстрактный класс продукта
class Vehicle {
    constructor(name) {
        this.name = name;
    }

    drive() {
        console.log(`Driving a ${this.name}`);
    }
}

// Конкретные продукты
class Car extends Vehicle {
    constructor() {
        super('Car');
    }
}

class Bicycle extends Vehicle {
    constructor() {
        super('Bicycle');
    }
}

class Motorcycle extends Vehicle {
    constructor() {
        super('Motorcycle');
    }
}

// Абстрактный класс фабрики
class VehicleFactory {
    createVehicle() {
        throw new Error('This method should be overridden!');
    }
}

// Конкретные фабрики
class CarFactory extends VehicleFactory {
    createVehicle() {
        return new Car();
    }
}

class BicycleFactory extends VehicleFactory {
    createVehicle() {
        return new Bicycle();
    }
}

class MotorcycleFactory extends VehicleFactory {
    createVehicle() {
        return new Motorcycle();
    }
}

const carFactory = new CarFactory();
const car = carFactory.createVehicle();
car.drive(); // Driving a Car

const bicycleFactory = new BicycleFactory();
const bicycle = bicycleFactory.createVehicle();
bicycle.drive(); // Driving a Bicycle

const motorcycleFactory = new MotorcycleFactory();
const motorcycle = motorcycleFactory.createVehicle();
motorcycle.drive(); // Driving a Motorcycle