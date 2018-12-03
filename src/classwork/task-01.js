function areaOfFigure () {}
class Shape {
    areaOfFigure () {}
}

class Square extends Shape {
    areaOfFigure (a) {
        return a*a;
    }
}

class Triangle extends Shape {
    areaOfFigure (a, b) {
        if(a !== undefined && b !== undefined) {
         return (a*b)/2;   
        } return 'not enough parameters';
    }
}    
res = 'area is: ';
var figure_square = new Square;
var figure_triangle = new Triangle;
console.log(res + figure_square.areaOfFigure(2)); 
console.log(res + figure_triangle.areaOfFigure(2)); 
console.log(res + figure_triangle.areaOfFigure(2,3)); 
