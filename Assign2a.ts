var arr = [23, 89, 6, 29, 56, 45, 77, 32];
var max = arr[1];
for(var i = 0; i <= arr.length; i++){
    if(arr[i] > max){
        max = arr[i];
    }   
}
console.log("Maximum number is",max);