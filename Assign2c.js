var arr = [23, 89, 6, 29, 56, 45, 77, 32];
var max = arr[0];
var smax = 0;
for (var i = 0; i <= arr.length; i++) {
    if (arr[i] > max) {
        smax = max;
        max = arr[i];
    }
    else if (smax < arr[i] && smax < max) {
        smax = arr[i];
    }
}
console.log("Second Maximum number is", smax);
