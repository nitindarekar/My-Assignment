var num:number = 153;
var sum:number = 0; 
var temp = num;  
while(num > 0)    
{    
var r = num % 10; 
sum = sum + (r * r * r);    
num = Math.floor(num / 10); 
}   
if(temp == sum) 
{
    console.log("It is Armstrong number "); 
}      
else  {
    console.log("Not It is Armstrong number"); 
} 
