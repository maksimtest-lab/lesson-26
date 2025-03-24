// Напишите функцию, которая принимает строку и возвращает ее перевернутую версию. Используйте метапрограммирование для изменения поведения функции так, чтобы она автоматически переворачивала строки, переданные как аргументы, без необходимости вызова функции reverse().

const reverseString = {

    set: function (target, name, value) {

        let reversedStr = '';
        let str = String(value);

        for (let i = str.length - 1; i >= 0; i--) {
            reversedStr += str[i];
        }

        target[name] = reversedStr;
        return reversedStr;
    }

}

var p = new Proxy([], reverseString);
p.a = 123;
console.log(p.a);
p.a = "Hello";
console.log(p.a);


