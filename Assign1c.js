var Circle = /** @class */ (function () {
    function Circle(Radius) {
        this.Radius = Radius;
    }
    Circle.prototype.AreaOfCircle = function () {
        return 3.14 * this.Radius * this.Radius;
    };
    Circle.prototype.CircumferenceOfCircle = function () {
        return 2 * 3.14 * this.Radius;
    };
    return Circle;
}());
var circle = new Circle(5);
var area = circle.AreaOfCircle();
var circumference = circle.CircumferenceOfCircle();
console.log("Area of circle is:" + area);
