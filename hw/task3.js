// Создайте функцию hasProperty(obj, prop), которая проверяет, содержит ли объект obj свойство с именем prop. Функция должна проверять свойства как самого объекта, так и его прототипов. Если свойство присутствует, функция должна вернуть true, иначе false. Проверьте работу функции на различных объектах с прототипами. 

hasProperty = (obj, prop) => {

    return prop in obj;
}

let obj = Object.create(restangle);

console.log(restangle);

console.log(hasProperty(restangle, 'someProperty'));
console.log(hasProperty(restangle, '#width'));
console.log(hasProperty(restangle, 'getArea'));
console.log(hasProperty(restangle, 'name'));
console.log(hasProperty(restangle, 'getName'));