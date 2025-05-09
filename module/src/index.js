var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function formatString(input, toUpper) {
    if (toUpper === null || toUpper === false) {
        return input;
    }
    else {
        var result = "";
        for (var i = 0; i < input.length; i++) {
            result += input[i].toUpperCase();
        }
        return result;
    }
}
console.log(formatString("Hello"));
console.log(formatString("Hello", true));
console.log(formatString("Hello", false));
function filterByRating(items) {
    var result = [];
    items.forEach(function (item) {
        if (item.rating >= 4.0) {
            result.push(item);
        }
    });
    return result;
}
var books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];
console.log(filterByRating(books));
function concatenateArrays() {
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrays[_i] = arguments[_i];
    }
    var result = [];
    for (var _a = 0, arrays_1 = arrays; _a < arrays_1.length; _a++) {
        var array = arrays_1[_a];
        for (var _b = 0, array_1 = array; _b < array_1.length; _b++) {
            var item = array_1[_b];
            result.push(item);
        }
    }
    return result;
}
console.log(concatenateArrays(["a", "b"], ["c"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));
var Vehicle = /** @class */ (function () {
    function Vehicle(make, year) {
        this.make = make;
        this.year = year;
    }
    Vehicle.prototype.getInfo = function () {
        console.log("Make: ".concat(this.make, ", Year: ").concat(this.year));
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(make, year, model) {
        var _this = _super.call(this, make, year) || this;
        _this.model = model;
        return _this;
    }
    Car.prototype.getModel = function () {
        console.log("Model: ".concat(this.model));
    };
    return Car;
}(Vehicle));
var myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo();
myCar.getModel();
function processValue(value) {
    if (typeof value === "string") {
        return value.length;
    }
    else {
        return value * 2;
    }
}
console.log(processValue("hello"));
console.log(processValue(10));
function getMostExpensiveProduct(products) {
    if (products.length === 0) {
        return null;
    }
    else {
        var max = products[0];
        for (var i = 1; i < products.length; i++) {
            if (products[i].price > max.price) {
                max = products[i];
            }
        }
        return max;
    }
}
var products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];
console.log(getMostExpensiveProduct(products));
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
function getDayType(day) {
    switch (day) {
        case Day.Monday:
            return "Weekday";
        case Day.Tuesday:
            return "Weekday";
        case Day.Wednesday:
            return "Weekday";
        case Day.Thursday:
            return "Weekday";
        case Day.Friday:
            return "Weekday";
        case Day.Saturday:
            return "Weekday";
        case Day.Sunday:
            return "Weekend";
        default:
            return "Invalid day";
    }
}
console.log(getDayType(Day.Monday));
console.log(getDayType(Day.Sunday));
// async function squareAsync(n: number): Promise<number>{
//     if(n<0){
//         throw new Error("Negative number not allowed");
//     }
//         await new Promise(res=> setTimeout(res, 1000));
//         return n * n;
// }
// squareAsync(4).then(console.log);
// squareAsync(-3).catch(console.error);
