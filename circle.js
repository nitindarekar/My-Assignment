var Circle = /** @class */ (function () {
    function Circle(Radius) {
        this.pi = 3.14;
        this.Radius = Radius;
    }
    Circle.prototype.AreaOfCircle = function () {
        return (this.pi * this.Radius * this.Radius);
    };
    Circle.prototype.CircumferenceOfCircle = function () {
        return 2 * 3.14 * this.Radius;
    };
    return Circle;
}());
var obj1 = new Circle(5);
var area = obj1.AreaOfCircle();
var circumference = obj1.CircumferenceOfCircle();
console.log("Area of circle is:" + area);
var obj2 = new Circle(8);
var area = obj2.AreaOfCircle();
var circumference = obj2.CircumferenceOfCircle();
console.log("Area of circle is:" + area);
