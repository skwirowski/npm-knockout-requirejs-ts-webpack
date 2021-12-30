var num = 2;
var num2 = 10;
var writing = 'some case';
var consoleMessage = function init(a, b, c) {
    var result = a + b + c;
    console.log("This is message " + result);
};
consoleMessage(num, num2, 90);
var names = ['Holey', 'John', 'Reed'];
var firstName = names[0];
var missing = null;
var outOfScope = undefined;
var pointsOne = {
    x: 10,
    y: 20,
};
var squareIt = function (rect) {
    if (rect.w) {
        return rect.h * rect.w;
    }
    return rect.h * rect.h;
};
var greetMe = function (msg) {
    console.log(msg);
};
var helloPerson = function (person) {
    if (person === void 0) { person = 'Random Citizen'; }
    return console.log("Hello, " + person);
};
helloPerson();
var somebody = {
    name: 'Josie',
    age: 50,
    kids: 4,
    calculatePets: function () {
        return this.kids * 2;
    },
    makeYounger: function (yars) {
        console.log((this.age -= yars));
    },
    greet: function (message) {
        return message;
    },
};
var SomeClass = (function () {
    function SomeClass(engine) {
        this.engine = engine;
    }
    return SomeClass;
}());
var SomeAnotherClass = (function () {
    function SomeAnotherClass(engine) {
        this.engine = engine;
    }
    return SomeAnotherClass;
}());
document.title = 'Hello there';
//# sourceMappingURL=index.js.map