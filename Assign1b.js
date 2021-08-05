var arr = [23, 89, 6];
var max = arr[1];
for (var i = 0; i <= arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log("Maximum number is", max);
var num = [23, 89, 6];
var maxs = Math.max.apply(null, num);
console.log("Maximum number is", maxs);
var num = [23, 89, 6];
var min = Math.min.apply(null, num);
console.log("Min number is", min);
