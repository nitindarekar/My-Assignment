class Circle {  
    Radius: number; pi = 3.14;
    constructor(Radius: number) {  
     this.Radius = Radius;  
    }  
    AreaOfCircle() {  
     return (this.pi * this.Radius *this.Radius );  
    }  
    CircumferenceOfCircle() {  
     return 2 * 3.14 * this.Radius;  
    }  
   }  
   var obj1 = new Circle(5);  
   var area = obj1.AreaOfCircle();  
   var circumference = obj1.CircumferenceOfCircle();  
   console.log("Area of circle is:" + area);  
   var obj2 = new Circle(8); 
   var area = obj2.AreaOfCircle();   
   var circumference = obj2.CircumferenceOfCircle(); 
   console.log("Area of circle is:" + area);