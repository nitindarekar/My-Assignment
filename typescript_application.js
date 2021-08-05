var Arithmetic = /** @class */ (function () {
    function Arithmetic(x, y) {
        this.No1 = x;
        this.No2 = y;
        this.ans = 0;
    }
    Arithmetic.prototype.Addition = function () {
        this.ans = this.No1 + this.No2;
        return this.ans;
    };
    Arithmetic.prototype.Subtraction = function () {
        this.ans = this.No1 - this.No2;
        return this.ans;
    };
    Arithmetic.prototype.Multiplication = function () {
        this.ans = this.No1 * this.No2;
        return this.ans;
    };
    Arithmetic.prototype.Division = function () {
        this.ans = this.No1 / this.No2;
        return this.ans;
    };
    return Arithmetic;
}());
var ret = 0;
var obj1 = new Arithmetic(75, 45);
var obj2 = new Arithmetic(69, 48);
ret = obj1.Addition();
console.log("Addition of obj1 is : ", ret);
ret = obj2.Addition();
console.log("Addition of obj2 is : ", ret);
ret = obj1.Subtraction();
console.log("Subtraction of obj1 is : ", ret);
ret = obj2.Subtraction();
console.log("Subtraction of obj2 is : ", ret);
ret = obj1.Multiplication();
console.log("Subtraction of obj1 is : ", ret);
ret = obj2.Multiplication();
console.log("Subtraction of obj2 is : ", ret);
ret = obj1.Division();
console.log("Subtraction of obj1 is : ", ret);
ret = obj2.Division();
console.log("Subtraction of obj2 is : ", ret);
