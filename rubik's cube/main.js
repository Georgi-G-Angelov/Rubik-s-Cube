var squares = [];
var cubeSides = ['b','u','f','b','l','r'];
var squareNames = ['b','w','g','y','o','r'];
var squareColours = ['blue','white','green','yellow','orange','red'];
var solved = true;
var isCrossSolved = true;
var isF2LSolved = true;
var isOLLSolved = true;
var isPLLSolved = true;
var moveCount = 0;
for(j=0;j<6;j++){
for(i=1;i<=9;i++){
    var square = {
        side: cubeSides[j] + i,
        name: squareNames[j] + i,
        colour: squareColours[j]
    }
    squares.push(square);
}
}
for(i=0;i<squares.length;i++){
    document.getElementById(squares[i].name).style.backgroundColor = squares[i].colour;
}

function reset(){
    //solved = true;
    document.getElementById('solution').innerHTML = '';
    squares.length = 0;
    for(j=0;j<6;j++){
        for(i=1;i<=9;i++){
            var square = {
                side: cubeSides[j] + i,
                name: squareNames[j] + i,
                colour: squareColours[j]
            }
            squares.push(square);
        }
    }
    updateColours();
}

function updateColours(){
    for(i=0;i<squares.length;i++){
        document.getElementById(squares[i].name).style.backgroundColor = squares[i].colour;
        //document.getElementById(squares[i].name).innerHTML = squares[i].name;
    }
}

function getCubeSquareIndex(name){
    for(i=0;i<squares.length;i++){
        if(squares[i].name == name){
            return i;
        }
    }
}

function R(){

    var c1 = squares[getCubeSquareIndex('w' + 3)].colour;
    var c2 = squares[getCubeSquareIndex('w' + 6)].colour;
    var c3 = squares[getCubeSquareIndex('w' + 9)].colour;
    squares[getCubeSquareIndex('w' + 3)].colour = squares[getCubeSquareIndex('g' + 3)].colour;
    squares[getCubeSquareIndex('w' + 6)].colour = squares[getCubeSquareIndex('g' + 6)].colour;
    squares[getCubeSquareIndex('w' + 9)].colour = squares[getCubeSquareIndex('g' + 9)].colour;
    squares[getCubeSquareIndex('g' + 3)].colour = squares[getCubeSquareIndex('y' + 3)].colour;
    squares[getCubeSquareIndex('g' + 6)].colour = squares[getCubeSquareIndex('y' + 6)].colour;
    squares[getCubeSquareIndex('g' + 9)].colour = squares[getCubeSquareIndex('y' + 9)].colour;
    squares[getCubeSquareIndex('y' + 3)].colour = squares[getCubeSquareIndex('b' + 3)].colour;
    squares[getCubeSquareIndex('y' + 6)].colour = squares[getCubeSquareIndex('b' + 6)].colour;
    squares[getCubeSquareIndex('y' + 9)].colour = squares[getCubeSquareIndex('b' + 9)].colour;
    squares[getCubeSquareIndex('b' + 3)].colour = c1;
    squares[getCubeSquareIndex('b' + 6)].colour = c2;
    squares[getCubeSquareIndex('b' + 9)].colour = c3;

    c1 = squares[getCubeSquareIndex('r' + 1)].colour;
    c2 = squares[getCubeSquareIndex('r' + 2)].colour;
    squares[getCubeSquareIndex('r' + 1)].colour = squares[getCubeSquareIndex('r' + 7)].colour;
    squares[getCubeSquareIndex('r' + 2)].colour = squares[getCubeSquareIndex('r' + 4)].colour;
    squares[getCubeSquareIndex('r' + 7)].colour = squares[getCubeSquareIndex('r' + 9)].colour;
    squares[getCubeSquareIndex('r' + 4)].colour = squares[getCubeSquareIndex('r' + 8)].colour;
    squares[getCubeSquareIndex('r' + 9)].colour = squares[getCubeSquareIndex('r' + 3)].colour;
    squares[getCubeSquareIndex('r' + 8)].colour = squares[getCubeSquareIndex('r' + 6)].colour;
    squares[getCubeSquareIndex('r' + 3)].colour = c1;
    squares[getCubeSquareIndex('r' + 6)].colour = c2;

    updateColours();
    addToSolution("R");
}


function Rx(){

    // R();
    // R();
    // R();

    var c1 = squares[getCubeSquareIndex('w' + 3)].colour;
    var c2 = squares[getCubeSquareIndex('w' + 6)].colour;
    var c3 = squares[getCubeSquareIndex('w' + 9)].colour;
    squares[getCubeSquareIndex('w' + 3)].colour = squares[getCubeSquareIndex('g' + 3)].colour;
    squares[getCubeSquareIndex('w' + 6)].colour = squares[getCubeSquareIndex('g' + 6)].colour;
    squares[getCubeSquareIndex('w' + 9)].colour = squares[getCubeSquareIndex('g' + 9)].colour;
    squares[getCubeSquareIndex('g' + 3)].colour = squares[getCubeSquareIndex('y' + 3)].colour;
    squares[getCubeSquareIndex('g' + 6)].colour = squares[getCubeSquareIndex('y' + 6)].colour;
    squares[getCubeSquareIndex('g' + 9)].colour = squares[getCubeSquareIndex('y' + 9)].colour;
    squares[getCubeSquareIndex('y' + 3)].colour = squares[getCubeSquareIndex('b' + 3)].colour;
    squares[getCubeSquareIndex('y' + 6)].colour = squares[getCubeSquareIndex('b' + 6)].colour;
    squares[getCubeSquareIndex('y' + 9)].colour = squares[getCubeSquareIndex('b' + 9)].colour;
    squares[getCubeSquareIndex('b' + 3)].colour = c1;
    squares[getCubeSquareIndex('b' + 6)].colour = c2;
    squares[getCubeSquareIndex('b' + 9)].colour = c3;

    c1 = squares[getCubeSquareIndex('r' + 1)].colour;
    c2 = squares[getCubeSquareIndex('r' + 2)].colour;
    squares[getCubeSquareIndex('r' + 1)].colour = squares[getCubeSquareIndex('r' + 7)].colour;
    squares[getCubeSquareIndex('r' + 2)].colour = squares[getCubeSquareIndex('r' + 4)].colour;
    squares[getCubeSquareIndex('r' + 7)].colour = squares[getCubeSquareIndex('r' + 9)].colour;
    squares[getCubeSquareIndex('r' + 4)].colour = squares[getCubeSquareIndex('r' + 8)].colour;
    squares[getCubeSquareIndex('r' + 9)].colour = squares[getCubeSquareIndex('r' + 3)].colour;
    squares[getCubeSquareIndex('r' + 8)].colour = squares[getCubeSquareIndex('r' + 6)].colour;
    squares[getCubeSquareIndex('r' + 3)].colour = c1;
    squares[getCubeSquareIndex('r' + 6)].colour = c2;

    var c1 = squares[getCubeSquareIndex('w' + 3)].colour;
    var c2 = squares[getCubeSquareIndex('w' + 6)].colour;
    var c3 = squares[getCubeSquareIndex('w' + 9)].colour;
    squares[getCubeSquareIndex('w' + 3)].colour = squares[getCubeSquareIndex('g' + 3)].colour;
    squares[getCubeSquareIndex('w' + 6)].colour = squares[getCubeSquareIndex('g' + 6)].colour;
    squares[getCubeSquareIndex('w' + 9)].colour = squares[getCubeSquareIndex('g' + 9)].colour;
    squares[getCubeSquareIndex('g' + 3)].colour = squares[getCubeSquareIndex('y' + 3)].colour;
    squares[getCubeSquareIndex('g' + 6)].colour = squares[getCubeSquareIndex('y' + 6)].colour;
    squares[getCubeSquareIndex('g' + 9)].colour = squares[getCubeSquareIndex('y' + 9)].colour;
    squares[getCubeSquareIndex('y' + 3)].colour = squares[getCubeSquareIndex('b' + 3)].colour;
    squares[getCubeSquareIndex('y' + 6)].colour = squares[getCubeSquareIndex('b' + 6)].colour;
    squares[getCubeSquareIndex('y' + 9)].colour = squares[getCubeSquareIndex('b' + 9)].colour;
    squares[getCubeSquareIndex('b' + 3)].colour = c1;
    squares[getCubeSquareIndex('b' + 6)].colour = c2;
    squares[getCubeSquareIndex('b' + 9)].colour = c3;

    c1 = squares[getCubeSquareIndex('r' + 1)].colour;
    c2 = squares[getCubeSquareIndex('r' + 2)].colour;
    squares[getCubeSquareIndex('r' + 1)].colour = squares[getCubeSquareIndex('r' + 7)].colour;
    squares[getCubeSquareIndex('r' + 2)].colour = squares[getCubeSquareIndex('r' + 4)].colour;
    squares[getCubeSquareIndex('r' + 7)].colour = squares[getCubeSquareIndex('r' + 9)].colour;
    squares[getCubeSquareIndex('r' + 4)].colour = squares[getCubeSquareIndex('r' + 8)].colour;
    squares[getCubeSquareIndex('r' + 9)].colour = squares[getCubeSquareIndex('r' + 3)].colour;
    squares[getCubeSquareIndex('r' + 8)].colour = squares[getCubeSquareIndex('r' + 6)].colour;
    squares[getCubeSquareIndex('r' + 3)].colour = c1;
    squares[getCubeSquareIndex('r' + 6)].colour = c2;

    var c1 = squares[getCubeSquareIndex('w' + 3)].colour;
    var c2 = squares[getCubeSquareIndex('w' + 6)].colour;
    var c3 = squares[getCubeSquareIndex('w' + 9)].colour;
    squares[getCubeSquareIndex('w' + 3)].colour = squares[getCubeSquareIndex('g' + 3)].colour;
    squares[getCubeSquareIndex('w' + 6)].colour = squares[getCubeSquareIndex('g' + 6)].colour;
    squares[getCubeSquareIndex('w' + 9)].colour = squares[getCubeSquareIndex('g' + 9)].colour;
    squares[getCubeSquareIndex('g' + 3)].colour = squares[getCubeSquareIndex('y' + 3)].colour;
    squares[getCubeSquareIndex('g' + 6)].colour = squares[getCubeSquareIndex('y' + 6)].colour;
    squares[getCubeSquareIndex('g' + 9)].colour = squares[getCubeSquareIndex('y' + 9)].colour;
    squares[getCubeSquareIndex('y' + 3)].colour = squares[getCubeSquareIndex('b' + 3)].colour;
    squares[getCubeSquareIndex('y' + 6)].colour = squares[getCubeSquareIndex('b' + 6)].colour;
    squares[getCubeSquareIndex('y' + 9)].colour = squares[getCubeSquareIndex('b' + 9)].colour;
    squares[getCubeSquareIndex('b' + 3)].colour = c1;
    squares[getCubeSquareIndex('b' + 6)].colour = c2;
    squares[getCubeSquareIndex('b' + 9)].colour = c3;

    c1 = squares[getCubeSquareIndex('r' + 1)].colour;
    c2 = squares[getCubeSquareIndex('r' + 2)].colour;
    squares[getCubeSquareIndex('r' + 1)].colour = squares[getCubeSquareIndex('r' + 7)].colour;
    squares[getCubeSquareIndex('r' + 2)].colour = squares[getCubeSquareIndex('r' + 4)].colour;
    squares[getCubeSquareIndex('r' + 7)].colour = squares[getCubeSquareIndex('r' + 9)].colour;
    squares[getCubeSquareIndex('r' + 4)].colour = squares[getCubeSquareIndex('r' + 8)].colour;
    squares[getCubeSquareIndex('r' + 9)].colour = squares[getCubeSquareIndex('r' + 3)].colour;
    squares[getCubeSquareIndex('r' + 8)].colour = squares[getCubeSquareIndex('r' + 6)].colour;
    squares[getCubeSquareIndex('r' + 3)].colour = c1;
    squares[getCubeSquareIndex('r' + 6)].colour = c2;

    updateColours();
    addToSolution("R'");

}

function R2(){

    // R();
    // R();

    var c1 = squares[getCubeSquareIndex('w' + 3)].colour;
    var c2 = squares[getCubeSquareIndex('w' + 6)].colour;
    var c3 = squares[getCubeSquareIndex('w' + 9)].colour;
    squares[getCubeSquareIndex('w' + 3)].colour = squares[getCubeSquareIndex('g' + 3)].colour;
    squares[getCubeSquareIndex('w' + 6)].colour = squares[getCubeSquareIndex('g' + 6)].colour;
    squares[getCubeSquareIndex('w' + 9)].colour = squares[getCubeSquareIndex('g' + 9)].colour;
    squares[getCubeSquareIndex('g' + 3)].colour = squares[getCubeSquareIndex('y' + 3)].colour;
    squares[getCubeSquareIndex('g' + 6)].colour = squares[getCubeSquareIndex('y' + 6)].colour;
    squares[getCubeSquareIndex('g' + 9)].colour = squares[getCubeSquareIndex('y' + 9)].colour;
    squares[getCubeSquareIndex('y' + 3)].colour = squares[getCubeSquareIndex('b' + 3)].colour;
    squares[getCubeSquareIndex('y' + 6)].colour = squares[getCubeSquareIndex('b' + 6)].colour;
    squares[getCubeSquareIndex('y' + 9)].colour = squares[getCubeSquareIndex('b' + 9)].colour;
    squares[getCubeSquareIndex('b' + 3)].colour = c1;
    squares[getCubeSquareIndex('b' + 6)].colour = c2;
    squares[getCubeSquareIndex('b' + 9)].colour = c3;

    c1 = squares[getCubeSquareIndex('r' + 1)].colour;
    c2 = squares[getCubeSquareIndex('r' + 2)].colour;
    squares[getCubeSquareIndex('r' + 1)].colour = squares[getCubeSquareIndex('r' + 7)].colour;
    squares[getCubeSquareIndex('r' + 2)].colour = squares[getCubeSquareIndex('r' + 4)].colour;
    squares[getCubeSquareIndex('r' + 7)].colour = squares[getCubeSquareIndex('r' + 9)].colour;
    squares[getCubeSquareIndex('r' + 4)].colour = squares[getCubeSquareIndex('r' + 8)].colour;
    squares[getCubeSquareIndex('r' + 9)].colour = squares[getCubeSquareIndex('r' + 3)].colour;
    squares[getCubeSquareIndex('r' + 8)].colour = squares[getCubeSquareIndex('r' + 6)].colour;
    squares[getCubeSquareIndex('r' + 3)].colour = c1;
    squares[getCubeSquareIndex('r' + 6)].colour = c2;

    var c1 = squares[getCubeSquareIndex('w' + 3)].colour;
    var c2 = squares[getCubeSquareIndex('w' + 6)].colour;
    var c3 = squares[getCubeSquareIndex('w' + 9)].colour;
    squares[getCubeSquareIndex('w' + 3)].colour = squares[getCubeSquareIndex('g' + 3)].colour;
    squares[getCubeSquareIndex('w' + 6)].colour = squares[getCubeSquareIndex('g' + 6)].colour;
    squares[getCubeSquareIndex('w' + 9)].colour = squares[getCubeSquareIndex('g' + 9)].colour;
    squares[getCubeSquareIndex('g' + 3)].colour = squares[getCubeSquareIndex('y' + 3)].colour;
    squares[getCubeSquareIndex('g' + 6)].colour = squares[getCubeSquareIndex('y' + 6)].colour;
    squares[getCubeSquareIndex('g' + 9)].colour = squares[getCubeSquareIndex('y' + 9)].colour;
    squares[getCubeSquareIndex('y' + 3)].colour = squares[getCubeSquareIndex('b' + 3)].colour;
    squares[getCubeSquareIndex('y' + 6)].colour = squares[getCubeSquareIndex('b' + 6)].colour;
    squares[getCubeSquareIndex('y' + 9)].colour = squares[getCubeSquareIndex('b' + 9)].colour;
    squares[getCubeSquareIndex('b' + 3)].colour = c1;
    squares[getCubeSquareIndex('b' + 6)].colour = c2;
    squares[getCubeSquareIndex('b' + 9)].colour = c3;

    c1 = squares[getCubeSquareIndex('r' + 1)].colour;
    c2 = squares[getCubeSquareIndex('r' + 2)].colour;
    squares[getCubeSquareIndex('r' + 1)].colour = squares[getCubeSquareIndex('r' + 7)].colour;
    squares[getCubeSquareIndex('r' + 2)].colour = squares[getCubeSquareIndex('r' + 4)].colour;
    squares[getCubeSquareIndex('r' + 7)].colour = squares[getCubeSquareIndex('r' + 9)].colour;
    squares[getCubeSquareIndex('r' + 4)].colour = squares[getCubeSquareIndex('r' + 8)].colour;
    squares[getCubeSquareIndex('r' + 9)].colour = squares[getCubeSquareIndex('r' + 3)].colour;
    squares[getCubeSquareIndex('r' + 8)].colour = squares[getCubeSquareIndex('r' + 6)].colour;
    squares[getCubeSquareIndex('r' + 3)].colour = c1;
    squares[getCubeSquareIndex('r' + 6)].colour = c2;

    updateColours();
    addToSolution("R2");
}

function L(){
    var c1 = squares[getCubeSquareIndex('w' + 1)].colour;
    var c2 = squares[getCubeSquareIndex('w' + 4)].colour;
    var c3 = squares[getCubeSquareIndex('w' + 7)].colour;
    squares[getCubeSquareIndex('w' + 1)].colour = squares[getCubeSquareIndex('b' + 1)].colour;
    squares[getCubeSquareIndex('w' + 4)].colour = squares[getCubeSquareIndex('b' + 4)].colour;
    squares[getCubeSquareIndex('w' + 7)].colour = squares[getCubeSquareIndex('b' + 7)].colour;
    squares[getCubeSquareIndex('b' + 1)].colour = squares[getCubeSquareIndex('y' + 1)].colour;
    squares[getCubeSquareIndex('b' + 4)].colour = squares[getCubeSquareIndex('y' + 4)].colour;
    squares[getCubeSquareIndex('b' + 7)].colour = squares[getCubeSquareIndex('y' + 7)].colour;
    squares[getCubeSquareIndex('y' + 1)].colour = squares[getCubeSquareIndex('g' + 1)].colour;
    squares[getCubeSquareIndex('y' + 4)].colour = squares[getCubeSquareIndex('g' + 4)].colour;
    squares[getCubeSquareIndex('y' + 7)].colour = squares[getCubeSquareIndex('g' + 7)].colour;
    squares[getCubeSquareIndex('g' + 1)].colour = c1;
    squares[getCubeSquareIndex('g' + 4)].colour = c2;
    squares[getCubeSquareIndex('g' + 7)].colour = c3;

    c1 = squares[getCubeSquareIndex('o' + 1)].colour;
    c2 = squares[getCubeSquareIndex('o' + 2)].colour;
    squares[getCubeSquareIndex('o' + 1)].colour = squares[getCubeSquareIndex('o' + 7)].colour;
    squares[getCubeSquareIndex('o' + 2)].colour = squares[getCubeSquareIndex('o' + 4)].colour;
    squares[getCubeSquareIndex('o' + 7)].colour = squares[getCubeSquareIndex('o' + 9)].colour;
    squares[getCubeSquareIndex('o' + 4)].colour = squares[getCubeSquareIndex('o' + 8)].colour;
    squares[getCubeSquareIndex('o' + 9)].colour = squares[getCubeSquareIndex('o' + 3)].colour;
    squares[getCubeSquareIndex('o' + 8)].colour = squares[getCubeSquareIndex('o' + 6)].colour;
    squares[getCubeSquareIndex('o' + 3)].colour = c1;
    squares[getCubeSquareIndex('o' + 6)].colour = c2;

    updateColours();
    addToSolution("L");
}



function Lx(){

    // L();
    // L();
    // L();

    var c1 = squares[getCubeSquareIndex('w' + 1)].colour;
    var c2 = squares[getCubeSquareIndex('w' + 4)].colour;
    var c3 = squares[getCubeSquareIndex('w' + 7)].colour;
    squares[getCubeSquareIndex('w' + 1)].colour = squares[getCubeSquareIndex('b' + 1)].colour;
    squares[getCubeSquareIndex('w' + 4)].colour = squares[getCubeSquareIndex('b' + 4)].colour;
    squares[getCubeSquareIndex('w' + 7)].colour = squares[getCubeSquareIndex('b' + 7)].colour;
    squares[getCubeSquareIndex('b' + 1)].colour = squares[getCubeSquareIndex('y' + 1)].colour;
    squares[getCubeSquareIndex('b' + 4)].colour = squares[getCubeSquareIndex('y' + 4)].colour;
    squares[getCubeSquareIndex('b' + 7)].colour = squares[getCubeSquareIndex('y' + 7)].colour;
    squares[getCubeSquareIndex('y' + 1)].colour = squares[getCubeSquareIndex('g' + 1)].colour;
    squares[getCubeSquareIndex('y' + 4)].colour = squares[getCubeSquareIndex('g' + 4)].colour;
    squares[getCubeSquareIndex('y' + 7)].colour = squares[getCubeSquareIndex('g' + 7)].colour;
    squares[getCubeSquareIndex('g' + 1)].colour = c1;
    squares[getCubeSquareIndex('g' + 4)].colour = c2;
    squares[getCubeSquareIndex('g' + 7)].colour = c3;

    c1 = squares[getCubeSquareIndex('o' + 1)].colour;
    c2 = squares[getCubeSquareIndex('o' + 2)].colour;
    squares[getCubeSquareIndex('o' + 1)].colour = squares[getCubeSquareIndex('o' + 7)].colour;
    squares[getCubeSquareIndex('o' + 2)].colour = squares[getCubeSquareIndex('o' + 4)].colour;
    squares[getCubeSquareIndex('o' + 7)].colour = squares[getCubeSquareIndex('o' + 9)].colour;
    squares[getCubeSquareIndex('o' + 4)].colour = squares[getCubeSquareIndex('o' + 8)].colour;
    squares[getCubeSquareIndex('o' + 9)].colour = squares[getCubeSquareIndex('o' + 3)].colour;
    squares[getCubeSquareIndex('o' + 8)].colour = squares[getCubeSquareIndex('o' + 6)].colour;
    squares[getCubeSquareIndex('o' + 3)].colour = c1;
    squares[getCubeSquareIndex('o' + 6)].colour = c2;

    var c1 = squares[getCubeSquareIndex('w' + 1)].colour;
    var c2 = squares[getCubeSquareIndex('w' + 4)].colour;
    var c3 = squares[getCubeSquareIndex('w' + 7)].colour;
    squares[getCubeSquareIndex('w' + 1)].colour = squares[getCubeSquareIndex('b' + 1)].colour;
    squares[getCubeSquareIndex('w' + 4)].colour = squares[getCubeSquareIndex('b' + 4)].colour;
    squares[getCubeSquareIndex('w' + 7)].colour = squares[getCubeSquareIndex('b' + 7)].colour;
    squares[getCubeSquareIndex('b' + 1)].colour = squares[getCubeSquareIndex('y' + 1)].colour;
    squares[getCubeSquareIndex('b' + 4)].colour = squares[getCubeSquareIndex('y' + 4)].colour;
    squares[getCubeSquareIndex('b' + 7)].colour = squares[getCubeSquareIndex('y' + 7)].colour;
    squares[getCubeSquareIndex('y' + 1)].colour = squares[getCubeSquareIndex('g' + 1)].colour;
    squares[getCubeSquareIndex('y' + 4)].colour = squares[getCubeSquareIndex('g' + 4)].colour;
    squares[getCubeSquareIndex('y' + 7)].colour = squares[getCubeSquareIndex('g' + 7)].colour;
    squares[getCubeSquareIndex('g' + 1)].colour = c1;
    squares[getCubeSquareIndex('g' + 4)].colour = c2;
    squares[getCubeSquareIndex('g' + 7)].colour = c3;

    c1 = squares[getCubeSquareIndex('o' + 1)].colour;
    c2 = squares[getCubeSquareIndex('o' + 2)].colour;
    squares[getCubeSquareIndex('o' + 1)].colour = squares[getCubeSquareIndex('o' + 7)].colour;
    squares[getCubeSquareIndex('o' + 2)].colour = squares[getCubeSquareIndex('o' + 4)].colour;
    squares[getCubeSquareIndex('o' + 7)].colour = squares[getCubeSquareIndex('o' + 9)].colour;
    squares[getCubeSquareIndex('o' + 4)].colour = squares[getCubeSquareIndex('o' + 8)].colour;
    squares[getCubeSquareIndex('o' + 9)].colour = squares[getCubeSquareIndex('o' + 3)].colour;
    squares[getCubeSquareIndex('o' + 8)].colour = squares[getCubeSquareIndex('o' + 6)].colour;
    squares[getCubeSquareIndex('o' + 3)].colour = c1;
    squares[getCubeSquareIndex('o' + 6)].colour = c2;

    var c1 = squares[getCubeSquareIndex('w' + 1)].colour;
    var c2 = squares[getCubeSquareIndex('w' + 4)].colour;
    var c3 = squares[getCubeSquareIndex('w' + 7)].colour;
    squares[getCubeSquareIndex('w' + 1)].colour = squares[getCubeSquareIndex('b' + 1)].colour;
    squares[getCubeSquareIndex('w' + 4)].colour = squares[getCubeSquareIndex('b' + 4)].colour;
    squares[getCubeSquareIndex('w' + 7)].colour = squares[getCubeSquareIndex('b' + 7)].colour;
    squares[getCubeSquareIndex('b' + 1)].colour = squares[getCubeSquareIndex('y' + 1)].colour;
    squares[getCubeSquareIndex('b' + 4)].colour = squares[getCubeSquareIndex('y' + 4)].colour;
    squares[getCubeSquareIndex('b' + 7)].colour = squares[getCubeSquareIndex('y' + 7)].colour;
    squares[getCubeSquareIndex('y' + 1)].colour = squares[getCubeSquareIndex('g' + 1)].colour;
    squares[getCubeSquareIndex('y' + 4)].colour = squares[getCubeSquareIndex('g' + 4)].colour;
    squares[getCubeSquareIndex('y' + 7)].colour = squares[getCubeSquareIndex('g' + 7)].colour;
    squares[getCubeSquareIndex('g' + 1)].colour = c1;
    squares[getCubeSquareIndex('g' + 4)].colour = c2;
    squares[getCubeSquareIndex('g' + 7)].colour = c3;

    c1 = squares[getCubeSquareIndex('o' + 1)].colour;
    c2 = squares[getCubeSquareIndex('o' + 2)].colour;
    squares[getCubeSquareIndex('o' + 1)].colour = squares[getCubeSquareIndex('o' + 7)].colour;
    squares[getCubeSquareIndex('o' + 2)].colour = squares[getCubeSquareIndex('o' + 4)].colour;
    squares[getCubeSquareIndex('o' + 7)].colour = squares[getCubeSquareIndex('o' + 9)].colour;
    squares[getCubeSquareIndex('o' + 4)].colour = squares[getCubeSquareIndex('o' + 8)].colour;
    squares[getCubeSquareIndex('o' + 9)].colour = squares[getCubeSquareIndex('o' + 3)].colour;
    squares[getCubeSquareIndex('o' + 8)].colour = squares[getCubeSquareIndex('o' + 6)].colour;
    squares[getCubeSquareIndex('o' + 3)].colour = c1;
    squares[getCubeSquareIndex('o' + 6)].colour = c2;

    updateColours();
    addToSolution("L'");

}

function L2(){

    // L();
    // L();

    var c1 = squares[getCubeSquareIndex('w' + 1)].colour;
    var c2 = squares[getCubeSquareIndex('w' + 4)].colour;
    var c3 = squares[getCubeSquareIndex('w' + 7)].colour;
    squares[getCubeSquareIndex('w' + 1)].colour = squares[getCubeSquareIndex('b' + 1)].colour;
    squares[getCubeSquareIndex('w' + 4)].colour = squares[getCubeSquareIndex('b' + 4)].colour;
    squares[getCubeSquareIndex('w' + 7)].colour = squares[getCubeSquareIndex('b' + 7)].colour;
    squares[getCubeSquareIndex('b' + 1)].colour = squares[getCubeSquareIndex('y' + 1)].colour;
    squares[getCubeSquareIndex('b' + 4)].colour = squares[getCubeSquareIndex('y' + 4)].colour;
    squares[getCubeSquareIndex('b' + 7)].colour = squares[getCubeSquareIndex('y' + 7)].colour;
    squares[getCubeSquareIndex('y' + 1)].colour = squares[getCubeSquareIndex('g' + 1)].colour;
    squares[getCubeSquareIndex('y' + 4)].colour = squares[getCubeSquareIndex('g' + 4)].colour;
    squares[getCubeSquareIndex('y' + 7)].colour = squares[getCubeSquareIndex('g' + 7)].colour;
    squares[getCubeSquareIndex('g' + 1)].colour = c1;
    squares[getCubeSquareIndex('g' + 4)].colour = c2;
    squares[getCubeSquareIndex('g' + 7)].colour = c3;

    c1 = squares[getCubeSquareIndex('o' + 1)].colour;
    c2 = squares[getCubeSquareIndex('o' + 2)].colour;
    squares[getCubeSquareIndex('o' + 1)].colour = squares[getCubeSquareIndex('o' + 7)].colour;
    squares[getCubeSquareIndex('o' + 2)].colour = squares[getCubeSquareIndex('o' + 4)].colour;
    squares[getCubeSquareIndex('o' + 7)].colour = squares[getCubeSquareIndex('o' + 9)].colour;
    squares[getCubeSquareIndex('o' + 4)].colour = squares[getCubeSquareIndex('o' + 8)].colour;
    squares[getCubeSquareIndex('o' + 9)].colour = squares[getCubeSquareIndex('o' + 3)].colour;
    squares[getCubeSquareIndex('o' + 8)].colour = squares[getCubeSquareIndex('o' + 6)].colour;
    squares[getCubeSquareIndex('o' + 3)].colour = c1;
    squares[getCubeSquareIndex('o' + 6)].colour = c2;

    var c1 = squares[getCubeSquareIndex('w' + 1)].colour;
    var c2 = squares[getCubeSquareIndex('w' + 4)].colour;
    var c3 = squares[getCubeSquareIndex('w' + 7)].colour;
    squares[getCubeSquareIndex('w' + 1)].colour = squares[getCubeSquareIndex('b' + 1)].colour;
    squares[getCubeSquareIndex('w' + 4)].colour = squares[getCubeSquareIndex('b' + 4)].colour;
    squares[getCubeSquareIndex('w' + 7)].colour = squares[getCubeSquareIndex('b' + 7)].colour;
    squares[getCubeSquareIndex('b' + 1)].colour = squares[getCubeSquareIndex('y' + 1)].colour;
    squares[getCubeSquareIndex('b' + 4)].colour = squares[getCubeSquareIndex('y' + 4)].colour;
    squares[getCubeSquareIndex('b' + 7)].colour = squares[getCubeSquareIndex('y' + 7)].colour;
    squares[getCubeSquareIndex('y' + 1)].colour = squares[getCubeSquareIndex('g' + 1)].colour;
    squares[getCubeSquareIndex('y' + 4)].colour = squares[getCubeSquareIndex('g' + 4)].colour;
    squares[getCubeSquareIndex('y' + 7)].colour = squares[getCubeSquareIndex('g' + 7)].colour;
    squares[getCubeSquareIndex('g' + 1)].colour = c1;
    squares[getCubeSquareIndex('g' + 4)].colour = c2;
    squares[getCubeSquareIndex('g' + 7)].colour = c3;

    c1 = squares[getCubeSquareIndex('o' + 1)].colour;
    c2 = squares[getCubeSquareIndex('o' + 2)].colour;
    squares[getCubeSquareIndex('o' + 1)].colour = squares[getCubeSquareIndex('o' + 7)].colour;
    squares[getCubeSquareIndex('o' + 2)].colour = squares[getCubeSquareIndex('o' + 4)].colour;
    squares[getCubeSquareIndex('o' + 7)].colour = squares[getCubeSquareIndex('o' + 9)].colour;
    squares[getCubeSquareIndex('o' + 4)].colour = squares[getCubeSquareIndex('o' + 8)].colour;
    squares[getCubeSquareIndex('o' + 9)].colour = squares[getCubeSquareIndex('o' + 3)].colour;
    squares[getCubeSquareIndex('o' + 8)].colour = squares[getCubeSquareIndex('o' + 6)].colour;
    squares[getCubeSquareIndex('o' + 3)].colour = c1;
    squares[getCubeSquareIndex('o' + 6)].colour = c2;

    updateColours();
    addToSolution("L2");

}

function Ux(){
    var c1 = squares[getCubeSquareIndex('o' + 3)].colour;
    var c2 = squares[getCubeSquareIndex('o' + 6)].colour;
    var c3 = squares[getCubeSquareIndex('o' + 9)].colour;
    squares[getCubeSquareIndex('o' + 3)].colour = squares[getCubeSquareIndex('b' + 9)].colour;
    squares[getCubeSquareIndex('o' + 6)].colour = squares[getCubeSquareIndex('b' + 8)].colour;
    squares[getCubeSquareIndex('o' + 9)].colour = squares[getCubeSquareIndex('b' + 7)].colour;
    squares[getCubeSquareIndex('b' + 9)].colour = squares[getCubeSquareIndex('r' + 7)].colour;
    squares[getCubeSquareIndex('b' + 8)].colour = squares[getCubeSquareIndex('r' + 4)].colour;
    squares[getCubeSquareIndex('b' + 7)].colour = squares[getCubeSquareIndex('r' + 1)].colour;
    squares[getCubeSquareIndex('r' + 7)].colour = squares[getCubeSquareIndex('g' + 1)].colour;
    squares[getCubeSquareIndex('r' + 4)].colour = squares[getCubeSquareIndex('g' + 2)].colour;
    squares[getCubeSquareIndex('r' + 1)].colour = squares[getCubeSquareIndex('g' + 3)].colour;
    squares[getCubeSquareIndex('g' + 1)].colour = c1;
    squares[getCubeSquareIndex('g' + 2)].colour = c2;
    squares[getCubeSquareIndex('g' + 3)].colour = c3;

    c1 = squares[getCubeSquareIndex('w' + 1)].colour;
    c2 = squares[getCubeSquareIndex('w' + 2)].colour;
    squares[getCubeSquareIndex('w' + 1)].colour = squares[getCubeSquareIndex('w' + 3)].colour;
    squares[getCubeSquareIndex('w' + 2)].colour = squares[getCubeSquareIndex('w' + 6)].colour;
    squares[getCubeSquareIndex('w' + 3)].colour = squares[getCubeSquareIndex('w' + 9)].colour;
    squares[getCubeSquareIndex('w' + 6)].colour = squares[getCubeSquareIndex('w' + 8)].colour;
    squares[getCubeSquareIndex('w' + 9)].colour = squares[getCubeSquareIndex('w' + 7)].colour;
    squares[getCubeSquareIndex('w' + 8)].colour = squares[getCubeSquareIndex('w' + 4)].colour;
    squares[getCubeSquareIndex('w' + 7)].colour = c1;
    squares[getCubeSquareIndex('w' + 4)].colour = c2;

    updateColours();
    addToSolution("U'");
}

function U(){

    // Ux();
    // Ux();
    // Ux();

    var c1 = squares[getCubeSquareIndex('o' + 3)].colour;
    var c2 = squares[getCubeSquareIndex('o' + 6)].colour;
    var c3 = squares[getCubeSquareIndex('o' + 9)].colour;
    squares[getCubeSquareIndex('o' + 3)].colour = squares[getCubeSquareIndex('b' + 9)].colour;
    squares[getCubeSquareIndex('o' + 6)].colour = squares[getCubeSquareIndex('b' + 8)].colour;
    squares[getCubeSquareIndex('o' + 9)].colour = squares[getCubeSquareIndex('b' + 7)].colour;
    squares[getCubeSquareIndex('b' + 9)].colour = squares[getCubeSquareIndex('r' + 7)].colour;
    squares[getCubeSquareIndex('b' + 8)].colour = squares[getCubeSquareIndex('r' + 4)].colour;
    squares[getCubeSquareIndex('b' + 7)].colour = squares[getCubeSquareIndex('r' + 1)].colour;
    squares[getCubeSquareIndex('r' + 7)].colour = squares[getCubeSquareIndex('g' + 1)].colour;
    squares[getCubeSquareIndex('r' + 4)].colour = squares[getCubeSquareIndex('g' + 2)].colour;
    squares[getCubeSquareIndex('r' + 1)].colour = squares[getCubeSquareIndex('g' + 3)].colour;
    squares[getCubeSquareIndex('g' + 1)].colour = c1;
    squares[getCubeSquareIndex('g' + 2)].colour = c2;
    squares[getCubeSquareIndex('g' + 3)].colour = c3;

    c1 = squares[getCubeSquareIndex('w' + 1)].colour;
    c2 = squares[getCubeSquareIndex('w' + 2)].colour;
    squares[getCubeSquareIndex('w' + 1)].colour = squares[getCubeSquareIndex('w' + 3)].colour;
    squares[getCubeSquareIndex('w' + 2)].colour = squares[getCubeSquareIndex('w' + 6)].colour;
    squares[getCubeSquareIndex('w' + 3)].colour = squares[getCubeSquareIndex('w' + 9)].colour;
    squares[getCubeSquareIndex('w' + 6)].colour = squares[getCubeSquareIndex('w' + 8)].colour;
    squares[getCubeSquareIndex('w' + 9)].colour = squares[getCubeSquareIndex('w' + 7)].colour;
    squares[getCubeSquareIndex('w' + 8)].colour = squares[getCubeSquareIndex('w' + 4)].colour;
    squares[getCubeSquareIndex('w' + 7)].colour = c1;
    squares[getCubeSquareIndex('w' + 4)].colour = c2;

    var c1 = squares[getCubeSquareIndex('o' + 3)].colour;
    var c2 = squares[getCubeSquareIndex('o' + 6)].colour;
    var c3 = squares[getCubeSquareIndex('o' + 9)].colour;
    squares[getCubeSquareIndex('o' + 3)].colour = squares[getCubeSquareIndex('b' + 9)].colour;
    squares[getCubeSquareIndex('o' + 6)].colour = squares[getCubeSquareIndex('b' + 8)].colour;
    squares[getCubeSquareIndex('o' + 9)].colour = squares[getCubeSquareIndex('b' + 7)].colour;
    squares[getCubeSquareIndex('b' + 9)].colour = squares[getCubeSquareIndex('r' + 7)].colour;
    squares[getCubeSquareIndex('b' + 8)].colour = squares[getCubeSquareIndex('r' + 4)].colour;
    squares[getCubeSquareIndex('b' + 7)].colour = squares[getCubeSquareIndex('r' + 1)].colour;
    squares[getCubeSquareIndex('r' + 7)].colour = squares[getCubeSquareIndex('g' + 1)].colour;
    squares[getCubeSquareIndex('r' + 4)].colour = squares[getCubeSquareIndex('g' + 2)].colour;
    squares[getCubeSquareIndex('r' + 1)].colour = squares[getCubeSquareIndex('g' + 3)].colour;
    squares[getCubeSquareIndex('g' + 1)].colour = c1;
    squares[getCubeSquareIndex('g' + 2)].colour = c2;
    squares[getCubeSquareIndex('g' + 3)].colour = c3;

    c1 = squares[getCubeSquareIndex('w' + 1)].colour;
    c2 = squares[getCubeSquareIndex('w' + 2)].colour;
    squares[getCubeSquareIndex('w' + 1)].colour = squares[getCubeSquareIndex('w' + 3)].colour;
    squares[getCubeSquareIndex('w' + 2)].colour = squares[getCubeSquareIndex('w' + 6)].colour;
    squares[getCubeSquareIndex('w' + 3)].colour = squares[getCubeSquareIndex('w' + 9)].colour;
    squares[getCubeSquareIndex('w' + 6)].colour = squares[getCubeSquareIndex('w' + 8)].colour;
    squares[getCubeSquareIndex('w' + 9)].colour = squares[getCubeSquareIndex('w' + 7)].colour;
    squares[getCubeSquareIndex('w' + 8)].colour = squares[getCubeSquareIndex('w' + 4)].colour;
    squares[getCubeSquareIndex('w' + 7)].colour = c1;
    squares[getCubeSquareIndex('w' + 4)].colour = c2;
    var c1 = squares[getCubeSquareIndex('o' + 3)].colour;
    var c2 = squares[getCubeSquareIndex('o' + 6)].colour;
    var c3 = squares[getCubeSquareIndex('o' + 9)].colour;
    squares[getCubeSquareIndex('o' + 3)].colour = squares[getCubeSquareIndex('b' + 9)].colour;
    squares[getCubeSquareIndex('o' + 6)].colour = squares[getCubeSquareIndex('b' + 8)].colour;
    squares[getCubeSquareIndex('o' + 9)].colour = squares[getCubeSquareIndex('b' + 7)].colour;
    squares[getCubeSquareIndex('b' + 9)].colour = squares[getCubeSquareIndex('r' + 7)].colour;
    squares[getCubeSquareIndex('b' + 8)].colour = squares[getCubeSquareIndex('r' + 4)].colour;
    squares[getCubeSquareIndex('b' + 7)].colour = squares[getCubeSquareIndex('r' + 1)].colour;
    squares[getCubeSquareIndex('r' + 7)].colour = squares[getCubeSquareIndex('g' + 1)].colour;
    squares[getCubeSquareIndex('r' + 4)].colour = squares[getCubeSquareIndex('g' + 2)].colour;
    squares[getCubeSquareIndex('r' + 1)].colour = squares[getCubeSquareIndex('g' + 3)].colour;
    squares[getCubeSquareIndex('g' + 1)].colour = c1;
    squares[getCubeSquareIndex('g' + 2)].colour = c2;
    squares[getCubeSquareIndex('g' + 3)].colour = c3;

    c1 = squares[getCubeSquareIndex('w' + 1)].colour;
    c2 = squares[getCubeSquareIndex('w' + 2)].colour;
    squares[getCubeSquareIndex('w' + 1)].colour = squares[getCubeSquareIndex('w' + 3)].colour;
    squares[getCubeSquareIndex('w' + 2)].colour = squares[getCubeSquareIndex('w' + 6)].colour;
    squares[getCubeSquareIndex('w' + 3)].colour = squares[getCubeSquareIndex('w' + 9)].colour;
    squares[getCubeSquareIndex('w' + 6)].colour = squares[getCubeSquareIndex('w' + 8)].colour;
    squares[getCubeSquareIndex('w' + 9)].colour = squares[getCubeSquareIndex('w' + 7)].colour;
    squares[getCubeSquareIndex('w' + 8)].colour = squares[getCubeSquareIndex('w' + 4)].colour;
    squares[getCubeSquareIndex('w' + 7)].colour = c1;
    squares[getCubeSquareIndex('w' + 4)].colour = c2;

    updateColours();
    addToSolution("U");

}

function U2(){

    // U();
    // U();

    var c1 = squares[getCubeSquareIndex('o' + 3)].colour;
    var c2 = squares[getCubeSquareIndex('o' + 6)].colour;
    var c3 = squares[getCubeSquareIndex('o' + 9)].colour;
    squares[getCubeSquareIndex('o' + 3)].colour = squares[getCubeSquareIndex('b' + 9)].colour;
    squares[getCubeSquareIndex('o' + 6)].colour = squares[getCubeSquareIndex('b' + 8)].colour;
    squares[getCubeSquareIndex('o' + 9)].colour = squares[getCubeSquareIndex('b' + 7)].colour;
    squares[getCubeSquareIndex('b' + 9)].colour = squares[getCubeSquareIndex('r' + 7)].colour;
    squares[getCubeSquareIndex('b' + 8)].colour = squares[getCubeSquareIndex('r' + 4)].colour;
    squares[getCubeSquareIndex('b' + 7)].colour = squares[getCubeSquareIndex('r' + 1)].colour;
    squares[getCubeSquareIndex('r' + 7)].colour = squares[getCubeSquareIndex('g' + 1)].colour;
    squares[getCubeSquareIndex('r' + 4)].colour = squares[getCubeSquareIndex('g' + 2)].colour;
    squares[getCubeSquareIndex('r' + 1)].colour = squares[getCubeSquareIndex('g' + 3)].colour;
    squares[getCubeSquareIndex('g' + 1)].colour = c1;
    squares[getCubeSquareIndex('g' + 2)].colour = c2;
    squares[getCubeSquareIndex('g' + 3)].colour = c3;

    c1 = squares[getCubeSquareIndex('w' + 1)].colour;
    c2 = squares[getCubeSquareIndex('w' + 2)].colour;
    squares[getCubeSquareIndex('w' + 1)].colour = squares[getCubeSquareIndex('w' + 3)].colour;
    squares[getCubeSquareIndex('w' + 2)].colour = squares[getCubeSquareIndex('w' + 6)].colour;
    squares[getCubeSquareIndex('w' + 3)].colour = squares[getCubeSquareIndex('w' + 9)].colour;
    squares[getCubeSquareIndex('w' + 6)].colour = squares[getCubeSquareIndex('w' + 8)].colour;
    squares[getCubeSquareIndex('w' + 9)].colour = squares[getCubeSquareIndex('w' + 7)].colour;
    squares[getCubeSquareIndex('w' + 8)].colour = squares[getCubeSquareIndex('w' + 4)].colour;
    squares[getCubeSquareIndex('w' + 7)].colour = c1;
    squares[getCubeSquareIndex('w' + 4)].colour = c2;

    var c1 = squares[getCubeSquareIndex('o' + 3)].colour;
    var c2 = squares[getCubeSquareIndex('o' + 6)].colour;
    var c3 = squares[getCubeSquareIndex('o' + 9)].colour;
    squares[getCubeSquareIndex('o' + 3)].colour = squares[getCubeSquareIndex('b' + 9)].colour;
    squares[getCubeSquareIndex('o' + 6)].colour = squares[getCubeSquareIndex('b' + 8)].colour;
    squares[getCubeSquareIndex('o' + 9)].colour = squares[getCubeSquareIndex('b' + 7)].colour;
    squares[getCubeSquareIndex('b' + 9)].colour = squares[getCubeSquareIndex('r' + 7)].colour;
    squares[getCubeSquareIndex('b' + 8)].colour = squares[getCubeSquareIndex('r' + 4)].colour;
    squares[getCubeSquareIndex('b' + 7)].colour = squares[getCubeSquareIndex('r' + 1)].colour;
    squares[getCubeSquareIndex('r' + 7)].colour = squares[getCubeSquareIndex('g' + 1)].colour;
    squares[getCubeSquareIndex('r' + 4)].colour = squares[getCubeSquareIndex('g' + 2)].colour;
    squares[getCubeSquareIndex('r' + 1)].colour = squares[getCubeSquareIndex('g' + 3)].colour;
    squares[getCubeSquareIndex('g' + 1)].colour = c1;
    squares[getCubeSquareIndex('g' + 2)].colour = c2;
    squares[getCubeSquareIndex('g' + 3)].colour = c3;

    c1 = squares[getCubeSquareIndex('w' + 1)].colour;
    c2 = squares[getCubeSquareIndex('w' + 2)].colour;
    squares[getCubeSquareIndex('w' + 1)].colour = squares[getCubeSquareIndex('w' + 3)].colour;
    squares[getCubeSquareIndex('w' + 2)].colour = squares[getCubeSquareIndex('w' + 6)].colour;
    squares[getCubeSquareIndex('w' + 3)].colour = squares[getCubeSquareIndex('w' + 9)].colour;
    squares[getCubeSquareIndex('w' + 6)].colour = squares[getCubeSquareIndex('w' + 8)].colour;
    squares[getCubeSquareIndex('w' + 9)].colour = squares[getCubeSquareIndex('w' + 7)].colour;
    squares[getCubeSquareIndex('w' + 8)].colour = squares[getCubeSquareIndex('w' + 4)].colour;
    squares[getCubeSquareIndex('w' + 7)].colour = c1;
    squares[getCubeSquareIndex('w' + 4)].colour = c2;

    updateColours();
    addToSolution("U2");
}

function Dx(){
    var c1 = squares[getCubeSquareIndex('o' + 1)].colour;
    var c2 = squares[getCubeSquareIndex('o' + 4)].colour;
    var c3 = squares[getCubeSquareIndex('o' + 7)].colour;
    squares[getCubeSquareIndex('o' + 1)].colour = squares[getCubeSquareIndex('g' + 7)].colour;
    squares[getCubeSquareIndex('o' + 4)].colour = squares[getCubeSquareIndex('g' + 8)].colour;
    squares[getCubeSquareIndex('o' + 7)].colour = squares[getCubeSquareIndex('g' + 9)].colour;
    squares[getCubeSquareIndex('g' + 7)].colour = squares[getCubeSquareIndex('r' + 9)].colour;
    squares[getCubeSquareIndex('g' + 8)].colour = squares[getCubeSquareIndex('r' + 6)].colour;
    squares[getCubeSquareIndex('g' + 9)].colour = squares[getCubeSquareIndex('r' + 3)].colour;
    squares[getCubeSquareIndex('r' + 9)].colour = squares[getCubeSquareIndex('b' + 3)].colour;
    squares[getCubeSquareIndex('r' + 6)].colour = squares[getCubeSquareIndex('b' + 2)].colour;
    squares[getCubeSquareIndex('r' + 3)].colour = squares[getCubeSquareIndex('b' + 1)].colour;
    squares[getCubeSquareIndex('b' + 3)].colour = c1;
    squares[getCubeSquareIndex('b' + 2)].colour = c2;
    squares[getCubeSquareIndex('b' + 1)].colour = c3;

    c1 = squares[getCubeSquareIndex('y' + 1)].colour;
    c2 = squares[getCubeSquareIndex('y' + 2)].colour;
    squares[getCubeSquareIndex('y' + 1)].colour = squares[getCubeSquareIndex('y' + 3)].colour;
    squares[getCubeSquareIndex('y' + 2)].colour = squares[getCubeSquareIndex('y' + 6)].colour;
    squares[getCubeSquareIndex('y' + 3)].colour = squares[getCubeSquareIndex('y' + 9)].colour;
    squares[getCubeSquareIndex('y' + 6)].colour = squares[getCubeSquareIndex('y' + 8)].colour;
    squares[getCubeSquareIndex('y' + 9)].colour = squares[getCubeSquareIndex('y' + 7)].colour;
    squares[getCubeSquareIndex('y' + 8)].colour = squares[getCubeSquareIndex('y' + 4)].colour;
    squares[getCubeSquareIndex('y' + 7)].colour = c1;
    squares[getCubeSquareIndex('y' + 4)].colour = c2;

    updateColours();
    addToSolution("D'");
}

function D(){

    // Dx();
    // Dx();
    // Dx();

    var c1 = squares[getCubeSquareIndex('o' + 1)].colour;
    var c2 = squares[getCubeSquareIndex('o' + 4)].colour;
    var c3 = squares[getCubeSquareIndex('o' + 7)].colour;
    squares[getCubeSquareIndex('o' + 1)].colour = squares[getCubeSquareIndex('g' + 7)].colour;
    squares[getCubeSquareIndex('o' + 4)].colour = squares[getCubeSquareIndex('g' + 8)].colour;
    squares[getCubeSquareIndex('o' + 7)].colour = squares[getCubeSquareIndex('g' + 9)].colour;
    squares[getCubeSquareIndex('g' + 7)].colour = squares[getCubeSquareIndex('r' + 9)].colour;
    squares[getCubeSquareIndex('g' + 8)].colour = squares[getCubeSquareIndex('r' + 6)].colour;
    squares[getCubeSquareIndex('g' + 9)].colour = squares[getCubeSquareIndex('r' + 3)].colour;
    squares[getCubeSquareIndex('r' + 9)].colour = squares[getCubeSquareIndex('b' + 3)].colour;
    squares[getCubeSquareIndex('r' + 6)].colour = squares[getCubeSquareIndex('b' + 2)].colour;
    squares[getCubeSquareIndex('r' + 3)].colour = squares[getCubeSquareIndex('b' + 1)].colour;
    squares[getCubeSquareIndex('b' + 3)].colour = c1;
    squares[getCubeSquareIndex('b' + 2)].colour = c2;
    squares[getCubeSquareIndex('b' + 1)].colour = c3;

    c1 = squares[getCubeSquareIndex('y' + 1)].colour;
    c2 = squares[getCubeSquareIndex('y' + 2)].colour;
    squares[getCubeSquareIndex('y' + 1)].colour = squares[getCubeSquareIndex('y' + 3)].colour;
    squares[getCubeSquareIndex('y' + 2)].colour = squares[getCubeSquareIndex('y' + 6)].colour;
    squares[getCubeSquareIndex('y' + 3)].colour = squares[getCubeSquareIndex('y' + 9)].colour;
    squares[getCubeSquareIndex('y' + 6)].colour = squares[getCubeSquareIndex('y' + 8)].colour;
    squares[getCubeSquareIndex('y' + 9)].colour = squares[getCubeSquareIndex('y' + 7)].colour;
    squares[getCubeSquareIndex('y' + 8)].colour = squares[getCubeSquareIndex('y' + 4)].colour;
    squares[getCubeSquareIndex('y' + 7)].colour = c1;
    squares[getCubeSquareIndex('y' + 4)].colour = c2;

    var c1 = squares[getCubeSquareIndex('o' + 1)].colour;
    var c2 = squares[getCubeSquareIndex('o' + 4)].colour;
    var c3 = squares[getCubeSquareIndex('o' + 7)].colour;
    squares[getCubeSquareIndex('o' + 1)].colour = squares[getCubeSquareIndex('g' + 7)].colour;
    squares[getCubeSquareIndex('o' + 4)].colour = squares[getCubeSquareIndex('g' + 8)].colour;
    squares[getCubeSquareIndex('o' + 7)].colour = squares[getCubeSquareIndex('g' + 9)].colour;
    squares[getCubeSquareIndex('g' + 7)].colour = squares[getCubeSquareIndex('r' + 9)].colour;
    squares[getCubeSquareIndex('g' + 8)].colour = squares[getCubeSquareIndex('r' + 6)].colour;
    squares[getCubeSquareIndex('g' + 9)].colour = squares[getCubeSquareIndex('r' + 3)].colour;
    squares[getCubeSquareIndex('r' + 9)].colour = squares[getCubeSquareIndex('b' + 3)].colour;
    squares[getCubeSquareIndex('r' + 6)].colour = squares[getCubeSquareIndex('b' + 2)].colour;
    squares[getCubeSquareIndex('r' + 3)].colour = squares[getCubeSquareIndex('b' + 1)].colour;
    squares[getCubeSquareIndex('b' + 3)].colour = c1;
    squares[getCubeSquareIndex('b' + 2)].colour = c2;
    squares[getCubeSquareIndex('b' + 1)].colour = c3;

    c1 = squares[getCubeSquareIndex('y' + 1)].colour;
    c2 = squares[getCubeSquareIndex('y' + 2)].colour;
    squares[getCubeSquareIndex('y' + 1)].colour = squares[getCubeSquareIndex('y' + 3)].colour;
    squares[getCubeSquareIndex('y' + 2)].colour = squares[getCubeSquareIndex('y' + 6)].colour;
    squares[getCubeSquareIndex('y' + 3)].colour = squares[getCubeSquareIndex('y' + 9)].colour;
    squares[getCubeSquareIndex('y' + 6)].colour = squares[getCubeSquareIndex('y' + 8)].colour;
    squares[getCubeSquareIndex('y' + 9)].colour = squares[getCubeSquareIndex('y' + 7)].colour;
    squares[getCubeSquareIndex('y' + 8)].colour = squares[getCubeSquareIndex('y' + 4)].colour;
    squares[getCubeSquareIndex('y' + 7)].colour = c1;
    squares[getCubeSquareIndex('y' + 4)].colour = c2;

    var c1 = squares[getCubeSquareIndex('o' + 1)].colour;
    var c2 = squares[getCubeSquareIndex('o' + 4)].colour;
    var c3 = squares[getCubeSquareIndex('o' + 7)].colour;
    squares[getCubeSquareIndex('o' + 1)].colour = squares[getCubeSquareIndex('g' + 7)].colour;
    squares[getCubeSquareIndex('o' + 4)].colour = squares[getCubeSquareIndex('g' + 8)].colour;
    squares[getCubeSquareIndex('o' + 7)].colour = squares[getCubeSquareIndex('g' + 9)].colour;
    squares[getCubeSquareIndex('g' + 7)].colour = squares[getCubeSquareIndex('r' + 9)].colour;
    squares[getCubeSquareIndex('g' + 8)].colour = squares[getCubeSquareIndex('r' + 6)].colour;
    squares[getCubeSquareIndex('g' + 9)].colour = squares[getCubeSquareIndex('r' + 3)].colour;
    squares[getCubeSquareIndex('r' + 9)].colour = squares[getCubeSquareIndex('b' + 3)].colour;
    squares[getCubeSquareIndex('r' + 6)].colour = squares[getCubeSquareIndex('b' + 2)].colour;
    squares[getCubeSquareIndex('r' + 3)].colour = squares[getCubeSquareIndex('b' + 1)].colour;
    squares[getCubeSquareIndex('b' + 3)].colour = c1;
    squares[getCubeSquareIndex('b' + 2)].colour = c2;
    squares[getCubeSquareIndex('b' + 1)].colour = c3;

    c1 = squares[getCubeSquareIndex('y' + 1)].colour;
    c2 = squares[getCubeSquareIndex('y' + 2)].colour;
    squares[getCubeSquareIndex('y' + 1)].colour = squares[getCubeSquareIndex('y' + 3)].colour;
    squares[getCubeSquareIndex('y' + 2)].colour = squares[getCubeSquareIndex('y' + 6)].colour;
    squares[getCubeSquareIndex('y' + 3)].colour = squares[getCubeSquareIndex('y' + 9)].colour;
    squares[getCubeSquareIndex('y' + 6)].colour = squares[getCubeSquareIndex('y' + 8)].colour;
    squares[getCubeSquareIndex('y' + 9)].colour = squares[getCubeSquareIndex('y' + 7)].colour;
    squares[getCubeSquareIndex('y' + 8)].colour = squares[getCubeSquareIndex('y' + 4)].colour;
    squares[getCubeSquareIndex('y' + 7)].colour = c1;
    squares[getCubeSquareIndex('y' + 4)].colour = c2;

    updateColours();
    addToSolution("D");
}

function D2(){

    // Dx();
    // Dx();

    var c1 = squares[getCubeSquareIndex('o' + 1)].colour;
    var c2 = squares[getCubeSquareIndex('o' + 4)].colour;
    var c3 = squares[getCubeSquareIndex('o' + 7)].colour;
    squares[getCubeSquareIndex('o' + 1)].colour = squares[getCubeSquareIndex('g' + 7)].colour;
    squares[getCubeSquareIndex('o' + 4)].colour = squares[getCubeSquareIndex('g' + 8)].colour;
    squares[getCubeSquareIndex('o' + 7)].colour = squares[getCubeSquareIndex('g' + 9)].colour;
    squares[getCubeSquareIndex('g' + 7)].colour = squares[getCubeSquareIndex('r' + 9)].colour;
    squares[getCubeSquareIndex('g' + 8)].colour = squares[getCubeSquareIndex('r' + 6)].colour;
    squares[getCubeSquareIndex('g' + 9)].colour = squares[getCubeSquareIndex('r' + 3)].colour;
    squares[getCubeSquareIndex('r' + 9)].colour = squares[getCubeSquareIndex('b' + 3)].colour;
    squares[getCubeSquareIndex('r' + 6)].colour = squares[getCubeSquareIndex('b' + 2)].colour;
    squares[getCubeSquareIndex('r' + 3)].colour = squares[getCubeSquareIndex('b' + 1)].colour;
    squares[getCubeSquareIndex('b' + 3)].colour = c1;
    squares[getCubeSquareIndex('b' + 2)].colour = c2;
    squares[getCubeSquareIndex('b' + 1)].colour = c3;

    c1 = squares[getCubeSquareIndex('y' + 1)].colour;
    c2 = squares[getCubeSquareIndex('y' + 2)].colour;
    squares[getCubeSquareIndex('y' + 1)].colour = squares[getCubeSquareIndex('y' + 3)].colour;
    squares[getCubeSquareIndex('y' + 2)].colour = squares[getCubeSquareIndex('y' + 6)].colour;
    squares[getCubeSquareIndex('y' + 3)].colour = squares[getCubeSquareIndex('y' + 9)].colour;
    squares[getCubeSquareIndex('y' + 6)].colour = squares[getCubeSquareIndex('y' + 8)].colour;
    squares[getCubeSquareIndex('y' + 9)].colour = squares[getCubeSquareIndex('y' + 7)].colour;
    squares[getCubeSquareIndex('y' + 8)].colour = squares[getCubeSquareIndex('y' + 4)].colour;
    squares[getCubeSquareIndex('y' + 7)].colour = c1;
    squares[getCubeSquareIndex('y' + 4)].colour = c2;

    var c1 = squares[getCubeSquareIndex('o' + 1)].colour;
    var c2 = squares[getCubeSquareIndex('o' + 4)].colour;
    var c3 = squares[getCubeSquareIndex('o' + 7)].colour;
    squares[getCubeSquareIndex('o' + 1)].colour = squares[getCubeSquareIndex('g' + 7)].colour;
    squares[getCubeSquareIndex('o' + 4)].colour = squares[getCubeSquareIndex('g' + 8)].colour;
    squares[getCubeSquareIndex('o' + 7)].colour = squares[getCubeSquareIndex('g' + 9)].colour;
    squares[getCubeSquareIndex('g' + 7)].colour = squares[getCubeSquareIndex('r' + 9)].colour;
    squares[getCubeSquareIndex('g' + 8)].colour = squares[getCubeSquareIndex('r' + 6)].colour;
    squares[getCubeSquareIndex('g' + 9)].colour = squares[getCubeSquareIndex('r' + 3)].colour;
    squares[getCubeSquareIndex('r' + 9)].colour = squares[getCubeSquareIndex('b' + 3)].colour;
    squares[getCubeSquareIndex('r' + 6)].colour = squares[getCubeSquareIndex('b' + 2)].colour;
    squares[getCubeSquareIndex('r' + 3)].colour = squares[getCubeSquareIndex('b' + 1)].colour;
    squares[getCubeSquareIndex('b' + 3)].colour = c1;
    squares[getCubeSquareIndex('b' + 2)].colour = c2;
    squares[getCubeSquareIndex('b' + 1)].colour = c3;

    c1 = squares[getCubeSquareIndex('y' + 1)].colour;
    c2 = squares[getCubeSquareIndex('y' + 2)].colour;
    squares[getCubeSquareIndex('y' + 1)].colour = squares[getCubeSquareIndex('y' + 3)].colour;
    squares[getCubeSquareIndex('y' + 2)].colour = squares[getCubeSquareIndex('y' + 6)].colour;
    squares[getCubeSquareIndex('y' + 3)].colour = squares[getCubeSquareIndex('y' + 9)].colour;
    squares[getCubeSquareIndex('y' + 6)].colour = squares[getCubeSquareIndex('y' + 8)].colour;
    squares[getCubeSquareIndex('y' + 9)].colour = squares[getCubeSquareIndex('y' + 7)].colour;
    squares[getCubeSquareIndex('y' + 8)].colour = squares[getCubeSquareIndex('y' + 4)].colour;
    squares[getCubeSquareIndex('y' + 7)].colour = c1;
    squares[getCubeSquareIndex('y' + 4)].colour = c2;

    updateColours();
    addToSolution("D2");

}

function F(){
    var c1 = squares[getCubeSquareIndex('o' + 7)].colour;
    var c2 = squares[getCubeSquareIndex('o' + 8)].colour;
    var c3 = squares[getCubeSquareIndex('o' + 9)].colour;
    squares[getCubeSquareIndex('o' + 7)].colour = squares[getCubeSquareIndex('y' + 3)].colour;
    squares[getCubeSquareIndex('o' + 8)].colour = squares[getCubeSquareIndex('y' + 2)].colour;
    squares[getCubeSquareIndex('o' + 9)].colour = squares[getCubeSquareIndex('y' + 1)].colour;
    squares[getCubeSquareIndex('y' + 3)].colour = squares[getCubeSquareIndex('r' + 7)].colour;
    squares[getCubeSquareIndex('y' + 2)].colour = squares[getCubeSquareIndex('r' + 8)].colour;
    squares[getCubeSquareIndex('y' + 1)].colour = squares[getCubeSquareIndex('r' + 9)].colour;
    squares[getCubeSquareIndex('r' + 7)].colour = squares[getCubeSquareIndex('w' + 7)].colour;
    squares[getCubeSquareIndex('r' + 8)].colour = squares[getCubeSquareIndex('w' + 8)].colour;
    squares[getCubeSquareIndex('r' + 9)].colour = squares[getCubeSquareIndex('w' + 9)].colour;
    squares[getCubeSquareIndex('w' + 7)].colour = c1;
    squares[getCubeSquareIndex('w' + 8)].colour = c2;
    squares[getCubeSquareIndex('w' + 9)].colour = c3;

    c1 = squares[getCubeSquareIndex('g' + 1)].colour;
    c2 = squares[getCubeSquareIndex('g' + 2)].colour;
    squares[getCubeSquareIndex('g' + 1)].colour = squares[getCubeSquareIndex('g' + 7)].colour;
    squares[getCubeSquareIndex('g' + 2)].colour = squares[getCubeSquareIndex('g' + 4)].colour;
    squares[getCubeSquareIndex('g' + 7)].colour = squares[getCubeSquareIndex('g' + 9)].colour;
    squares[getCubeSquareIndex('g' + 4)].colour = squares[getCubeSquareIndex('g' + 8)].colour;
    squares[getCubeSquareIndex('g' + 9)].colour = squares[getCubeSquareIndex('g' + 3)].colour;
    squares[getCubeSquareIndex('g' + 8)].colour = squares[getCubeSquareIndex('g' + 6)].colour;
    squares[getCubeSquareIndex('g' + 3)].colour = c1;
    squares[getCubeSquareIndex('g' + 6)].colour = c2;

    updateColours();
    addToSolution("F");
}

function Fx(){

    // F();
    // F();
    // F();

    var c1 = squares[getCubeSquareIndex('o' + 7)].colour;
    var c2 = squares[getCubeSquareIndex('o' + 8)].colour;
    var c3 = squares[getCubeSquareIndex('o' + 9)].colour;
    squares[getCubeSquareIndex('o' + 7)].colour = squares[getCubeSquareIndex('y' + 3)].colour;
    squares[getCubeSquareIndex('o' + 8)].colour = squares[getCubeSquareIndex('y' + 2)].colour;
    squares[getCubeSquareIndex('o' + 9)].colour = squares[getCubeSquareIndex('y' + 1)].colour;
    squares[getCubeSquareIndex('y' + 3)].colour = squares[getCubeSquareIndex('r' + 7)].colour;
    squares[getCubeSquareIndex('y' + 2)].colour = squares[getCubeSquareIndex('r' + 8)].colour;
    squares[getCubeSquareIndex('y' + 1)].colour = squares[getCubeSquareIndex('r' + 9)].colour;
    squares[getCubeSquareIndex('r' + 7)].colour = squares[getCubeSquareIndex('w' + 7)].colour;
    squares[getCubeSquareIndex('r' + 8)].colour = squares[getCubeSquareIndex('w' + 8)].colour;
    squares[getCubeSquareIndex('r' + 9)].colour = squares[getCubeSquareIndex('w' + 9)].colour;
    squares[getCubeSquareIndex('w' + 7)].colour = c1;
    squares[getCubeSquareIndex('w' + 8)].colour = c2;
    squares[getCubeSquareIndex('w' + 9)].colour = c3;

    c1 = squares[getCubeSquareIndex('g' + 1)].colour;
    c2 = squares[getCubeSquareIndex('g' + 2)].colour;
    squares[getCubeSquareIndex('g' + 1)].colour = squares[getCubeSquareIndex('g' + 7)].colour;
    squares[getCubeSquareIndex('g' + 2)].colour = squares[getCubeSquareIndex('g' + 4)].colour;
    squares[getCubeSquareIndex('g' + 7)].colour = squares[getCubeSquareIndex('g' + 9)].colour;
    squares[getCubeSquareIndex('g' + 4)].colour = squares[getCubeSquareIndex('g' + 8)].colour;
    squares[getCubeSquareIndex('g' + 9)].colour = squares[getCubeSquareIndex('g' + 3)].colour;
    squares[getCubeSquareIndex('g' + 8)].colour = squares[getCubeSquareIndex('g' + 6)].colour;
    squares[getCubeSquareIndex('g' + 3)].colour = c1;
    squares[getCubeSquareIndex('g' + 6)].colour = c2;

    var c1 = squares[getCubeSquareIndex('o' + 7)].colour;
    var c2 = squares[getCubeSquareIndex('o' + 8)].colour;
    var c3 = squares[getCubeSquareIndex('o' + 9)].colour;
    squares[getCubeSquareIndex('o' + 7)].colour = squares[getCubeSquareIndex('y' + 3)].colour;
    squares[getCubeSquareIndex('o' + 8)].colour = squares[getCubeSquareIndex('y' + 2)].colour;
    squares[getCubeSquareIndex('o' + 9)].colour = squares[getCubeSquareIndex('y' + 1)].colour;
    squares[getCubeSquareIndex('y' + 3)].colour = squares[getCubeSquareIndex('r' + 7)].colour;
    squares[getCubeSquareIndex('y' + 2)].colour = squares[getCubeSquareIndex('r' + 8)].colour;
    squares[getCubeSquareIndex('y' + 1)].colour = squares[getCubeSquareIndex('r' + 9)].colour;
    squares[getCubeSquareIndex('r' + 7)].colour = squares[getCubeSquareIndex('w' + 7)].colour;
    squares[getCubeSquareIndex('r' + 8)].colour = squares[getCubeSquareIndex('w' + 8)].colour;
    squares[getCubeSquareIndex('r' + 9)].colour = squares[getCubeSquareIndex('w' + 9)].colour;
    squares[getCubeSquareIndex('w' + 7)].colour = c1;
    squares[getCubeSquareIndex('w' + 8)].colour = c2;
    squares[getCubeSquareIndex('w' + 9)].colour = c3;

    c1 = squares[getCubeSquareIndex('g' + 1)].colour;
    c2 = squares[getCubeSquareIndex('g' + 2)].colour;
    squares[getCubeSquareIndex('g' + 1)].colour = squares[getCubeSquareIndex('g' + 7)].colour;
    squares[getCubeSquareIndex('g' + 2)].colour = squares[getCubeSquareIndex('g' + 4)].colour;
    squares[getCubeSquareIndex('g' + 7)].colour = squares[getCubeSquareIndex('g' + 9)].colour;
    squares[getCubeSquareIndex('g' + 4)].colour = squares[getCubeSquareIndex('g' + 8)].colour;
    squares[getCubeSquareIndex('g' + 9)].colour = squares[getCubeSquareIndex('g' + 3)].colour;
    squares[getCubeSquareIndex('g' + 8)].colour = squares[getCubeSquareIndex('g' + 6)].colour;
    squares[getCubeSquareIndex('g' + 3)].colour = c1;
    squares[getCubeSquareIndex('g' + 6)].colour = c2;

    var c1 = squares[getCubeSquareIndex('o' + 7)].colour;
    var c2 = squares[getCubeSquareIndex('o' + 8)].colour;
    var c3 = squares[getCubeSquareIndex('o' + 9)].colour;
    squares[getCubeSquareIndex('o' + 7)].colour = squares[getCubeSquareIndex('y' + 3)].colour;
    squares[getCubeSquareIndex('o' + 8)].colour = squares[getCubeSquareIndex('y' + 2)].colour;
    squares[getCubeSquareIndex('o' + 9)].colour = squares[getCubeSquareIndex('y' + 1)].colour;
    squares[getCubeSquareIndex('y' + 3)].colour = squares[getCubeSquareIndex('r' + 7)].colour;
    squares[getCubeSquareIndex('y' + 2)].colour = squares[getCubeSquareIndex('r' + 8)].colour;
    squares[getCubeSquareIndex('y' + 1)].colour = squares[getCubeSquareIndex('r' + 9)].colour;
    squares[getCubeSquareIndex('r' + 7)].colour = squares[getCubeSquareIndex('w' + 7)].colour;
    squares[getCubeSquareIndex('r' + 8)].colour = squares[getCubeSquareIndex('w' + 8)].colour;
    squares[getCubeSquareIndex('r' + 9)].colour = squares[getCubeSquareIndex('w' + 9)].colour;
    squares[getCubeSquareIndex('w' + 7)].colour = c1;
    squares[getCubeSquareIndex('w' + 8)].colour = c2;
    squares[getCubeSquareIndex('w' + 9)].colour = c3;

    c1 = squares[getCubeSquareIndex('g' + 1)].colour;
    c2 = squares[getCubeSquareIndex('g' + 2)].colour;
    squares[getCubeSquareIndex('g' + 1)].colour = squares[getCubeSquareIndex('g' + 7)].colour;
    squares[getCubeSquareIndex('g' + 2)].colour = squares[getCubeSquareIndex('g' + 4)].colour;
    squares[getCubeSquareIndex('g' + 7)].colour = squares[getCubeSquareIndex('g' + 9)].colour;
    squares[getCubeSquareIndex('g' + 4)].colour = squares[getCubeSquareIndex('g' + 8)].colour;
    squares[getCubeSquareIndex('g' + 9)].colour = squares[getCubeSquareIndex('g' + 3)].colour;
    squares[getCubeSquareIndex('g' + 8)].colour = squares[getCubeSquareIndex('g' + 6)].colour;
    squares[getCubeSquareIndex('g' + 3)].colour = c1;
    squares[getCubeSquareIndex('g' + 6)].colour = c2;

    updateColours();
    addToSolution("F'");
}

function F2(){

    // F();
    // F();

    var c1 = squares[getCubeSquareIndex('o' + 7)].colour;
    var c2 = squares[getCubeSquareIndex('o' + 8)].colour;
    var c3 = squares[getCubeSquareIndex('o' + 9)].colour;
    squares[getCubeSquareIndex('o' + 7)].colour = squares[getCubeSquareIndex('y' + 3)].colour;
    squares[getCubeSquareIndex('o' + 8)].colour = squares[getCubeSquareIndex('y' + 2)].colour;
    squares[getCubeSquareIndex('o' + 9)].colour = squares[getCubeSquareIndex('y' + 1)].colour;
    squares[getCubeSquareIndex('y' + 3)].colour = squares[getCubeSquareIndex('r' + 7)].colour;
    squares[getCubeSquareIndex('y' + 2)].colour = squares[getCubeSquareIndex('r' + 8)].colour;
    squares[getCubeSquareIndex('y' + 1)].colour = squares[getCubeSquareIndex('r' + 9)].colour;
    squares[getCubeSquareIndex('r' + 7)].colour = squares[getCubeSquareIndex('w' + 7)].colour;
    squares[getCubeSquareIndex('r' + 8)].colour = squares[getCubeSquareIndex('w' + 8)].colour;
    squares[getCubeSquareIndex('r' + 9)].colour = squares[getCubeSquareIndex('w' + 9)].colour;
    squares[getCubeSquareIndex('w' + 7)].colour = c1;
    squares[getCubeSquareIndex('w' + 8)].colour = c2;
    squares[getCubeSquareIndex('w' + 9)].colour = c3;

    c1 = squares[getCubeSquareIndex('g' + 1)].colour;
    c2 = squares[getCubeSquareIndex('g' + 2)].colour;
    squares[getCubeSquareIndex('g' + 1)].colour = squares[getCubeSquareIndex('g' + 7)].colour;
    squares[getCubeSquareIndex('g' + 2)].colour = squares[getCubeSquareIndex('g' + 4)].colour;
    squares[getCubeSquareIndex('g' + 7)].colour = squares[getCubeSquareIndex('g' + 9)].colour;
    squares[getCubeSquareIndex('g' + 4)].colour = squares[getCubeSquareIndex('g' + 8)].colour;
    squares[getCubeSquareIndex('g' + 9)].colour = squares[getCubeSquareIndex('g' + 3)].colour;
    squares[getCubeSquareIndex('g' + 8)].colour = squares[getCubeSquareIndex('g' + 6)].colour;
    squares[getCubeSquareIndex('g' + 3)].colour = c1;
    squares[getCubeSquareIndex('g' + 6)].colour = c2;

    var c1 = squares[getCubeSquareIndex('o' + 7)].colour;
    var c2 = squares[getCubeSquareIndex('o' + 8)].colour;
    var c3 = squares[getCubeSquareIndex('o' + 9)].colour;
    squares[getCubeSquareIndex('o' + 7)].colour = squares[getCubeSquareIndex('y' + 3)].colour;
    squares[getCubeSquareIndex('o' + 8)].colour = squares[getCubeSquareIndex('y' + 2)].colour;
    squares[getCubeSquareIndex('o' + 9)].colour = squares[getCubeSquareIndex('y' + 1)].colour;
    squares[getCubeSquareIndex('y' + 3)].colour = squares[getCubeSquareIndex('r' + 7)].colour;
    squares[getCubeSquareIndex('y' + 2)].colour = squares[getCubeSquareIndex('r' + 8)].colour;
    squares[getCubeSquareIndex('y' + 1)].colour = squares[getCubeSquareIndex('r' + 9)].colour;
    squares[getCubeSquareIndex('r' + 7)].colour = squares[getCubeSquareIndex('w' + 7)].colour;
    squares[getCubeSquareIndex('r' + 8)].colour = squares[getCubeSquareIndex('w' + 8)].colour;
    squares[getCubeSquareIndex('r' + 9)].colour = squares[getCubeSquareIndex('w' + 9)].colour;
    squares[getCubeSquareIndex('w' + 7)].colour = c1;
    squares[getCubeSquareIndex('w' + 8)].colour = c2;
    squares[getCubeSquareIndex('w' + 9)].colour = c3;

    c1 = squares[getCubeSquareIndex('g' + 1)].colour;
    c2 = squares[getCubeSquareIndex('g' + 2)].colour;
    squares[getCubeSquareIndex('g' + 1)].colour = squares[getCubeSquareIndex('g' + 7)].colour;
    squares[getCubeSquareIndex('g' + 2)].colour = squares[getCubeSquareIndex('g' + 4)].colour;
    squares[getCubeSquareIndex('g' + 7)].colour = squares[getCubeSquareIndex('g' + 9)].colour;
    squares[getCubeSquareIndex('g' + 4)].colour = squares[getCubeSquareIndex('g' + 8)].colour;
    squares[getCubeSquareIndex('g' + 9)].colour = squares[getCubeSquareIndex('g' + 3)].colour;
    squares[getCubeSquareIndex('g' + 8)].colour = squares[getCubeSquareIndex('g' + 6)].colour;
    squares[getCubeSquareIndex('g' + 3)].colour = c1;
    squares[getCubeSquareIndex('g' + 6)].colour = c2;

    updateColours();
    addToSolution("F2");
}

function B(){
    var c1 = squares[getCubeSquareIndex('o' + 1)].colour;
    var c2 = squares[getCubeSquareIndex('o' + 2)].colour;
    var c3 = squares[getCubeSquareIndex('o' + 3)].colour;
    squares[getCubeSquareIndex('o' + 1)].colour = squares[getCubeSquareIndex('w' + 1)].colour;
    squares[getCubeSquareIndex('o' + 2)].colour = squares[getCubeSquareIndex('w' + 2)].colour;
    squares[getCubeSquareIndex('o' + 3)].colour = squares[getCubeSquareIndex('w' + 3)].colour;
    squares[getCubeSquareIndex('w' + 1)].colour = squares[getCubeSquareIndex('r' + 1)].colour;
    squares[getCubeSquareIndex('w' + 2)].colour = squares[getCubeSquareIndex('r' + 2)].colour;
    squares[getCubeSquareIndex('w' + 3)].colour = squares[getCubeSquareIndex('r' + 3)].colour;
    squares[getCubeSquareIndex('r' + 1)].colour = squares[getCubeSquareIndex('y' + 9)].colour;
    squares[getCubeSquareIndex('r' + 2)].colour = squares[getCubeSquareIndex('y' + 8)].colour;
    squares[getCubeSquareIndex('r' + 3)].colour = squares[getCubeSquareIndex('y' + 7)].colour;
    squares[getCubeSquareIndex('y' + 9)].colour = c1;
    squares[getCubeSquareIndex('y' + 8)].colour = c2;
    squares[getCubeSquareIndex('y' + 7)].colour = c3;

    c1 = squares[getCubeSquareIndex('b' + 1)].colour;
    c2 = squares[getCubeSquareIndex('b' + 2)].colour;
    squares[getCubeSquareIndex('b' + 1)].colour = squares[getCubeSquareIndex('b' + 7)].colour;
    squares[getCubeSquareIndex('b' + 2)].colour = squares[getCubeSquareIndex('b' + 4)].colour;
    squares[getCubeSquareIndex('b' + 7)].colour = squares[getCubeSquareIndex('b' + 9)].colour;
    squares[getCubeSquareIndex('b' + 4)].colour = squares[getCubeSquareIndex('b' + 8)].colour;
    squares[getCubeSquareIndex('b' + 9)].colour = squares[getCubeSquareIndex('b' + 3)].colour;
    squares[getCubeSquareIndex('b' + 8)].colour = squares[getCubeSquareIndex('b' + 6)].colour;
    squares[getCubeSquareIndex('b' + 3)].colour = c1;
    squares[getCubeSquareIndex('b' + 6)].colour = c2;

    updateColours();
    addToSolution("B");
}

function Bx(){

    // B();
    // B();
    // B();

    var c1 = squares[getCubeSquareIndex('o' + 1)].colour;
    var c2 = squares[getCubeSquareIndex('o' + 2)].colour;
    var c3 = squares[getCubeSquareIndex('o' + 3)].colour;
    squares[getCubeSquareIndex('o' + 1)].colour = squares[getCubeSquareIndex('w' + 1)].colour;
    squares[getCubeSquareIndex('o' + 2)].colour = squares[getCubeSquareIndex('w' + 2)].colour;
    squares[getCubeSquareIndex('o' + 3)].colour = squares[getCubeSquareIndex('w' + 3)].colour;
    squares[getCubeSquareIndex('w' + 1)].colour = squares[getCubeSquareIndex('r' + 1)].colour;
    squares[getCubeSquareIndex('w' + 2)].colour = squares[getCubeSquareIndex('r' + 2)].colour;
    squares[getCubeSquareIndex('w' + 3)].colour = squares[getCubeSquareIndex('r' + 3)].colour;
    squares[getCubeSquareIndex('r' + 1)].colour = squares[getCubeSquareIndex('y' + 9)].colour;
    squares[getCubeSquareIndex('r' + 2)].colour = squares[getCubeSquareIndex('y' + 8)].colour;
    squares[getCubeSquareIndex('r' + 3)].colour = squares[getCubeSquareIndex('y' + 7)].colour;
    squares[getCubeSquareIndex('y' + 9)].colour = c1;
    squares[getCubeSquareIndex('y' + 8)].colour = c2;
    squares[getCubeSquareIndex('y' + 7)].colour = c3;

    c1 = squares[getCubeSquareIndex('b' + 1)].colour;
    c2 = squares[getCubeSquareIndex('b' + 2)].colour;
    squares[getCubeSquareIndex('b' + 1)].colour = squares[getCubeSquareIndex('b' + 7)].colour;
    squares[getCubeSquareIndex('b' + 2)].colour = squares[getCubeSquareIndex('b' + 4)].colour;
    squares[getCubeSquareIndex('b' + 7)].colour = squares[getCubeSquareIndex('b' + 9)].colour;
    squares[getCubeSquareIndex('b' + 4)].colour = squares[getCubeSquareIndex('b' + 8)].colour;
    squares[getCubeSquareIndex('b' + 9)].colour = squares[getCubeSquareIndex('b' + 3)].colour;
    squares[getCubeSquareIndex('b' + 8)].colour = squares[getCubeSquareIndex('b' + 6)].colour;
    squares[getCubeSquareIndex('b' + 3)].colour = c1;
    squares[getCubeSquareIndex('b' + 6)].colour = c2;

    var c1 = squares[getCubeSquareIndex('o' + 1)].colour;
    var c2 = squares[getCubeSquareIndex('o' + 2)].colour;
    var c3 = squares[getCubeSquareIndex('o' + 3)].colour;
    squares[getCubeSquareIndex('o' + 1)].colour = squares[getCubeSquareIndex('w' + 1)].colour;
    squares[getCubeSquareIndex('o' + 2)].colour = squares[getCubeSquareIndex('w' + 2)].colour;
    squares[getCubeSquareIndex('o' + 3)].colour = squares[getCubeSquareIndex('w' + 3)].colour;
    squares[getCubeSquareIndex('w' + 1)].colour = squares[getCubeSquareIndex('r' + 1)].colour;
    squares[getCubeSquareIndex('w' + 2)].colour = squares[getCubeSquareIndex('r' + 2)].colour;
    squares[getCubeSquareIndex('w' + 3)].colour = squares[getCubeSquareIndex('r' + 3)].colour;
    squares[getCubeSquareIndex('r' + 1)].colour = squares[getCubeSquareIndex('y' + 9)].colour;
    squares[getCubeSquareIndex('r' + 2)].colour = squares[getCubeSquareIndex('y' + 8)].colour;
    squares[getCubeSquareIndex('r' + 3)].colour = squares[getCubeSquareIndex('y' + 7)].colour;
    squares[getCubeSquareIndex('y' + 9)].colour = c1;
    squares[getCubeSquareIndex('y' + 8)].colour = c2;
    squares[getCubeSquareIndex('y' + 7)].colour = c3;

    c1 = squares[getCubeSquareIndex('b' + 1)].colour;
    c2 = squares[getCubeSquareIndex('b' + 2)].colour;
    squares[getCubeSquareIndex('b' + 1)].colour = squares[getCubeSquareIndex('b' + 7)].colour;
    squares[getCubeSquareIndex('b' + 2)].colour = squares[getCubeSquareIndex('b' + 4)].colour;
    squares[getCubeSquareIndex('b' + 7)].colour = squares[getCubeSquareIndex('b' + 9)].colour;
    squares[getCubeSquareIndex('b' + 4)].colour = squares[getCubeSquareIndex('b' + 8)].colour;
    squares[getCubeSquareIndex('b' + 9)].colour = squares[getCubeSquareIndex('b' + 3)].colour;
    squares[getCubeSquareIndex('b' + 8)].colour = squares[getCubeSquareIndex('b' + 6)].colour;
    squares[getCubeSquareIndex('b' + 3)].colour = c1;
    squares[getCubeSquareIndex('b' + 6)].colour = c2;

    var c1 = squares[getCubeSquareIndex('o' + 1)].colour;
    var c2 = squares[getCubeSquareIndex('o' + 2)].colour;
    var c3 = squares[getCubeSquareIndex('o' + 3)].colour;
    squares[getCubeSquareIndex('o' + 1)].colour = squares[getCubeSquareIndex('w' + 1)].colour;
    squares[getCubeSquareIndex('o' + 2)].colour = squares[getCubeSquareIndex('w' + 2)].colour;
    squares[getCubeSquareIndex('o' + 3)].colour = squares[getCubeSquareIndex('w' + 3)].colour;
    squares[getCubeSquareIndex('w' + 1)].colour = squares[getCubeSquareIndex('r' + 1)].colour;
    squares[getCubeSquareIndex('w' + 2)].colour = squares[getCubeSquareIndex('r' + 2)].colour;
    squares[getCubeSquareIndex('w' + 3)].colour = squares[getCubeSquareIndex('r' + 3)].colour;
    squares[getCubeSquareIndex('r' + 1)].colour = squares[getCubeSquareIndex('y' + 9)].colour;
    squares[getCubeSquareIndex('r' + 2)].colour = squares[getCubeSquareIndex('y' + 8)].colour;
    squares[getCubeSquareIndex('r' + 3)].colour = squares[getCubeSquareIndex('y' + 7)].colour;
    squares[getCubeSquareIndex('y' + 9)].colour = c1;
    squares[getCubeSquareIndex('y' + 8)].colour = c2;
    squares[getCubeSquareIndex('y' + 7)].colour = c3;

    c1 = squares[getCubeSquareIndex('b' + 1)].colour;
    c2 = squares[getCubeSquareIndex('b' + 2)].colour;
    squares[getCubeSquareIndex('b' + 1)].colour = squares[getCubeSquareIndex('b' + 7)].colour;
    squares[getCubeSquareIndex('b' + 2)].colour = squares[getCubeSquareIndex('b' + 4)].colour;
    squares[getCubeSquareIndex('b' + 7)].colour = squares[getCubeSquareIndex('b' + 9)].colour;
    squares[getCubeSquareIndex('b' + 4)].colour = squares[getCubeSquareIndex('b' + 8)].colour;
    squares[getCubeSquareIndex('b' + 9)].colour = squares[getCubeSquareIndex('b' + 3)].colour;
    squares[getCubeSquareIndex('b' + 8)].colour = squares[getCubeSquareIndex('b' + 6)].colour;
    squares[getCubeSquareIndex('b' + 3)].colour = c1;
    squares[getCubeSquareIndex('b' + 6)].colour = c2;

    updateColours();
    addToSolution("B'");
}

function B2(){

    // B();
    // B();
    //
    var c1 = squares[getCubeSquareIndex('o' + 1)].colour;
    var c2 = squares[getCubeSquareIndex('o' + 2)].colour;
    var c3 = squares[getCubeSquareIndex('o' + 3)].colour;
    squares[getCubeSquareIndex('o' + 1)].colour = squares[getCubeSquareIndex('w' + 1)].colour;
    squares[getCubeSquareIndex('o' + 2)].colour = squares[getCubeSquareIndex('w' + 2)].colour;
    squares[getCubeSquareIndex('o' + 3)].colour = squares[getCubeSquareIndex('w' + 3)].colour;
    squares[getCubeSquareIndex('w' + 1)].colour = squares[getCubeSquareIndex('r' + 1)].colour;
    squares[getCubeSquareIndex('w' + 2)].colour = squares[getCubeSquareIndex('r' + 2)].colour;
    squares[getCubeSquareIndex('w' + 3)].colour = squares[getCubeSquareIndex('r' + 3)].colour;
    squares[getCubeSquareIndex('r' + 1)].colour = squares[getCubeSquareIndex('y' + 9)].colour;
    squares[getCubeSquareIndex('r' + 2)].colour = squares[getCubeSquareIndex('y' + 8)].colour;
    squares[getCubeSquareIndex('r' + 3)].colour = squares[getCubeSquareIndex('y' + 7)].colour;
    squares[getCubeSquareIndex('y' + 9)].colour = c1;
    squares[getCubeSquareIndex('y' + 8)].colour = c2;
    squares[getCubeSquareIndex('y' + 7)].colour = c3;

    c1 = squares[getCubeSquareIndex('b' + 1)].colour;
    c2 = squares[getCubeSquareIndex('b' + 2)].colour;
    squares[getCubeSquareIndex('b' + 1)].colour = squares[getCubeSquareIndex('b' + 7)].colour;
    squares[getCubeSquareIndex('b' + 2)].colour = squares[getCubeSquareIndex('b' + 4)].colour;
    squares[getCubeSquareIndex('b' + 7)].colour = squares[getCubeSquareIndex('b' + 9)].colour;
    squares[getCubeSquareIndex('b' + 4)].colour = squares[getCubeSquareIndex('b' + 8)].colour;
    squares[getCubeSquareIndex('b' + 9)].colour = squares[getCubeSquareIndex('b' + 3)].colour;
    squares[getCubeSquareIndex('b' + 8)].colour = squares[getCubeSquareIndex('b' + 6)].colour;
    squares[getCubeSquareIndex('b' + 3)].colour = c1;
    squares[getCubeSquareIndex('b' + 6)].colour = c2;

    var c1 = squares[getCubeSquareIndex('o' + 1)].colour;
    var c2 = squares[getCubeSquareIndex('o' + 2)].colour;
    var c3 = squares[getCubeSquareIndex('o' + 3)].colour;
    squares[getCubeSquareIndex('o' + 1)].colour = squares[getCubeSquareIndex('w' + 1)].colour;
    squares[getCubeSquareIndex('o' + 2)].colour = squares[getCubeSquareIndex('w' + 2)].colour;
    squares[getCubeSquareIndex('o' + 3)].colour = squares[getCubeSquareIndex('w' + 3)].colour;
    squares[getCubeSquareIndex('w' + 1)].colour = squares[getCubeSquareIndex('r' + 1)].colour;
    squares[getCubeSquareIndex('w' + 2)].colour = squares[getCubeSquareIndex('r' + 2)].colour;
    squares[getCubeSquareIndex('w' + 3)].colour = squares[getCubeSquareIndex('r' + 3)].colour;
    squares[getCubeSquareIndex('r' + 1)].colour = squares[getCubeSquareIndex('y' + 9)].colour;
    squares[getCubeSquareIndex('r' + 2)].colour = squares[getCubeSquareIndex('y' + 8)].colour;
    squares[getCubeSquareIndex('r' + 3)].colour = squares[getCubeSquareIndex('y' + 7)].colour;
    squares[getCubeSquareIndex('y' + 9)].colour = c1;
    squares[getCubeSquareIndex('y' + 8)].colour = c2;
    squares[getCubeSquareIndex('y' + 7)].colour = c3;

    c1 = squares[getCubeSquareIndex('b' + 1)].colour;
    c2 = squares[getCubeSquareIndex('b' + 2)].colour;
    squares[getCubeSquareIndex('b' + 1)].colour = squares[getCubeSquareIndex('b' + 7)].colour;
    squares[getCubeSquareIndex('b' + 2)].colour = squares[getCubeSquareIndex('b' + 4)].colour;
    squares[getCubeSquareIndex('b' + 7)].colour = squares[getCubeSquareIndex('b' + 9)].colour;
    squares[getCubeSquareIndex('b' + 4)].colour = squares[getCubeSquareIndex('b' + 8)].colour;
    squares[getCubeSquareIndex('b' + 9)].colour = squares[getCubeSquareIndex('b' + 3)].colour;
    squares[getCubeSquareIndex('b' + 8)].colour = squares[getCubeSquareIndex('b' + 6)].colour;
    squares[getCubeSquareIndex('b' + 3)].colour = c1;
    squares[getCubeSquareIndex('b' + 6)].colour = c2;

    updateColours();
    addToSolution("B2");

}

function randInt(){
    return Math.floor((Math.random() * 108))%18;
}

function scramble(){
    reset();
    document.getElementById('solution').innerHTML = '';
    document.getElementById('scramble').innerHTML = '';
    var numberOfMoves = Math.floor((Math.random() * 10) + 15);
    var moves = ['R','Rx','R2','L','Lx','L2','U','Ux','U2','B','Bx','B2','F','Fx','F2','D','Dx','D2'];
    var move = '';
    var previousMove = '';
    var previousPreviousMove = '';
    var i=0;
    while(i<numberOfMoves){
        move = moves[randInt()];
        if(i==0){
            callMove(move);
            appendMoveToScramble(move);
            previousMove = move;
        }
        if(i==1){
            while(move.charAt(0)==previousMove.charAt(0)){
                move = moves[Math.floor((Math.random() * 108))%18];
            }
            callMove(move);
            appendMoveToScramble(move);
            previousPreviousMove = previousMove;
            previousMove = move;
        }
        if(i>1){
            while(!checkMove(move, previousMove, previousPreviousMove)){
                move = moves[Math.floor((Math.random() * 108))%18];
            }
            callMove(move);
            appendMoveToScramble(move);
            previousPreviousMove = previousMove;
            previousMove = move;
        }
        i++;
    }
    solved = false;
    isCrossSolved = false;
    isF2LSolved = false;
    isOLLSolved = false;
    isPLLSolved = false;
    moveCount = 0;
    document.getElementById('solution').innerHTML ="";
}

function callMove(moveName){
    switch (moveName){
        case 'R':
        R();
        break;
        case 'Rx':
        Rx();
        break;
        case 'R2':
        R2();
        break;
        case 'L':
        L();
        break;
        case 'Lx':
        Lx();
        break;
        case 'L2':
        L2();
        break;
        case 'U':
        U();
        break;
        case 'Ux':
        Ux();
        break;
        case 'U2':
        U2();
        break;
        case 'D':
        D()
        break;
        case 'Dx':
        Dx();
        break;
        case 'D2':
        D2();
        break;
        case 'B':
        B();
        break;
        case 'Bx':
        Bx();
        break;
        case 'B2':
        B2();
        break;
        case 'F':
        F();
        break;
        case 'Fx':
        Fx();
        break;
        case 'F2':
        F2();
        break;
    }
}

function appendMoveToScramble(moveName){
    if(moveName.charAt(1) == 'x'){
        document.getElementById('scramble').innerHTML += moveName.charAt(0) + "' ";
    } else {
    document.getElementById('scramble').innerHTML += moveName + " ";
    }
}

function checkMove(move,previousMove,previousPreviousMove){
    if(move.charAt(0)==previousMove.charAt(0)){
        return false;
    }
    var arrayOfWrongCombosOne = ['R','L','U','D','F','B'];
    var arrayOfWrongCombosTwo = ['L','R','D','U','B','F'];
    for(i=0;i<6;i++){
        if(move.charAt(0) == arrayOfWrongCombosOne[i] && previousMove.charAt(0) == arrayOfWrongCombosTwo[i] && previousPreviousMove.charAt(0) == arrayOfWrongCombosOne[0]){
            return false;
        }
    }
    return true;
}

function solve(){

    solveCross();
    solveCross();
    solveF2L();
    solveOLL();
    solvePLL();
    solvePLL();
    document.getElementById('solution').innerHTML +="<br/> AUF: ";
    AUF();
    document.getElementById('solution').innerHTML +="<br/> Move count: " + moveCount;
    solved = true;
}

function solveCross(){

    var str = document.getElementById('solution').innerHTML;
    var n = str.includes("Cross");
    if(n==false){
      document.getElementById('solution').innerHTML +="Cross: ";
    }
    solveYellowAndRed();
    solveYellowAndGreen();
    solveYellowAndOrange();
    solveYellowAndBlue();

    isCrossSolved = true;
}

function solveCrossForReal() {
    solveCross();
    solveCross();
}

function solveF2L(){

    if(isCrossSolved){
    var str = document.getElementById('solution').innerHTML;
    var n = str.includes("F2L");
    if(n==false){
      document.getElementById('solution').innerHTML +="<br/> F2L: ";
      document.getElementById('solution').innerHTML +="<br/> First pair: ";
      solveRedAndGreenPair();
      document.getElementById('solution').innerHTML +="<br/> Second pair: ";
      solveGreenAndOrangePair();
      document.getElementById('solution').innerHTML +="<br/> Third pair: ";
      solveOrangeAndBluePair();
      document.getElementById('solution').innerHTML +="<br/> Fourth pair: ";
      solveBlueAndRedPair();
    } else {
    solveRedAndGreenPair();
    solveGreenAndOrangePair();
    solveOrangeAndBluePair();
    solveBlueAndRedPair();
    }
    isF2LSolved = true;
  } else{
    alert("Cross is not solved!");
  }
}

function solveOLL(){

    if(isF2LSolved){
    var str = document.getElementById('solution').innerHTML;
    var n = str.includes("OLL");
    if(n==false){
    document.getElementById('solution').innerHTML +="<br/> OLL: ";
    }
    //2-look OLL

    //solve cross
    //dot case
    if(squares[getCubeSquareIndex('w' + 2)].colour != "white" &&
    squares[getCubeSquareIndex('w' + 4)].colour != "white" &&
    squares[getCubeSquareIndex('w' + 6)].colour != "white" &&
    squares[getCubeSquareIndex('w' + 8)].colour != "white"){
      F(); sexyMove(); Fx(); U2(); F(); sexyMove(); sexyMove(); Fx();
    }
    //arrow cases
    if(squares[getCubeSquareIndex('w' + 2)].colour == "white" &&
    squares[getCubeSquareIndex('w' + 4)].colour == "white" &&
    squares[getCubeSquareIndex('w' + 6)].colour != "white" &&
    squares[getCubeSquareIndex('w' + 8)].colour != "white"){
      F(); sexyMove(); sexyMove(); Fx();
    }
    if(squares[getCubeSquareIndex('w' + 2)].colour == "white" &&
    squares[getCubeSquareIndex('w' + 4)].colour != "white" &&
    squares[getCubeSquareIndex('w' + 6)].colour == "white" &&
    squares[getCubeSquareIndex('w' + 8)].colour != "white"){
      Ux(); F(); sexyMove(); sexyMove(); Fx();
    }
    if(squares[getCubeSquareIndex('w' + 2)].colour != "white" &&
    squares[getCubeSquareIndex('w' + 4)].colour == "white" &&
    squares[getCubeSquareIndex('w' + 6)].colour != "white" &&
    squares[getCubeSquareIndex('w' + 8)].colour == "white"){
      U(); F(); sexyMove(); sexyMove(); Fx();
    }
    if(squares[getCubeSquareIndex('w' + 2)].colour != "white" &&
    squares[getCubeSquareIndex('w' + 4)].colour != "white" &&
    squares[getCubeSquareIndex('w' + 6)].colour == "white" &&
    squares[getCubeSquareIndex('w' + 8)].colour == "white"){
      U2(); F(); sexyMove(); sexyMove(); Fx();
    }
    //line cases
    if(squares[getCubeSquareIndex('w' + 2)].colour == "white" &&
    squares[getCubeSquareIndex('w' + 4)].colour != "white" &&
    squares[getCubeSquareIndex('w' + 6)].colour != "white" &&
    squares[getCubeSquareIndex('w' + 8)].colour == "white"){
      U(); F(); sexyMove(); Fx();
    }
    if(squares[getCubeSquareIndex('w' + 2)].colour != "white" &&
    squares[getCubeSquareIndex('w' + 4)].colour == "white" &&
    squares[getCubeSquareIndex('w' + 6)].colour == "white" &&
    squares[getCubeSquareIndex('w' + 8)].colour != "white"){
      F(); sexyMove(); Fx();
    }

    //OLL
    //sunes
    if(squares[getCubeSquareIndex('w' + 1)].colour != "white" &&
    squares[getCubeSquareIndex('w' + 3)].colour != "white" &&
    squares[getCubeSquareIndex('w' + 7)].colour == "white" &&
    squares[getCubeSquareIndex('w' + 9)].colour != "white"){
      if(squares[getCubeSquareIndex('g' + 3)].colour == "white"){
        R(); U(); Rx(); U(); R(); U2(); Rx();
      } else {
        U2(); R(); U2(); Rx(); Ux(); R(); Ux(); Rx();
      }
    }
    if(squares[getCubeSquareIndex('w' + 1)].colour != "white" &&
    squares[getCubeSquareIndex('w' + 3)].colour != "white" &&
    squares[getCubeSquareIndex('w' + 7)].colour != "white" &&
    squares[getCubeSquareIndex('w' + 9)].colour == "white"){
      if(squares[getCubeSquareIndex('r' + 1)].colour == "white"){
        U(); R(); U(); Rx(); U(); R(); U2(); Rx();
      } else {
        Ux(); R(); U2(); Rx(); Ux(); R(); Ux(); Rx();
      }
    }
    if(squares[getCubeSquareIndex('w' + 1)].colour != "white" &&
    squares[getCubeSquareIndex('w' + 3)].colour == "white" &&
    squares[getCubeSquareIndex('w' + 7)].colour != "white" &&
    squares[getCubeSquareIndex('w' + 9)].colour != "white"){
      if(squares[getCubeSquareIndex('b' + 7)].colour == "white"){
        U2(); R(); U(); Rx(); U(); R(); U2(); Rx();
      } else {
        R(); U2(); Rx(); Ux(); R(); Ux(); Rx();
      }
    }
    if(squares[getCubeSquareIndex('w' + 1)].colour == "white" &&
    squares[getCubeSquareIndex('w' + 3)].colour != "white" &&
    squares[getCubeSquareIndex('w' + 7)].colour != "white" &&
    squares[getCubeSquareIndex('w' + 9)].colour != "white"){
      if(squares[getCubeSquareIndex('o' + 9)].colour == "white"){
        Ux(); R(); U(); Rx(); U(); R(); U2(); Rx();
      } else {
        U(); R(); U2(); Rx(); Ux(); R(); Ux(); Rx();
      }
    }

    //just cross
    if(squares[getCubeSquareIndex('w' + 1)].colour != "white" &&
    squares[getCubeSquareIndex('w' + 3)].colour != "white" &&
    squares[getCubeSquareIndex('w' + 7)].colour != "white" &&
    squares[getCubeSquareIndex('w' + 9)].colour != "white"){
      //double headlights
      if(squares[getCubeSquareIndex('g' + 1)].colour == "white" &&
      squares[getCubeSquareIndex('g' + 3)].colour == "white" &&
      squares[getCubeSquareIndex('b' + 7)].colour == "white" &&
      squares[getCubeSquareIndex('b' + 9)].colour == "white"){
          R(); U2(); Rx(); Ux(); R(); U(); Rx(); Ux(); R(); Ux(); Rx();
          return;
      }
      if(squares[getCubeSquareIndex('g' + 1)].colour != "white" &&
      squares[getCubeSquareIndex('g' + 3)].colour != "white" &&
      squares[getCubeSquareIndex('b' + 7)].colour != "white" &&
      squares[getCubeSquareIndex('b' + 9)].colour != "white"){
          U(); F(); sexyMove(); sexyMove(); sexyMove(); Fx();
      }
      //single headlights
      if(squares[getCubeSquareIndex('g' + 1)].colour != "white" &&
      squares[getCubeSquareIndex('g' + 3)].colour == "white" &&
      squares[getCubeSquareIndex('b' + 7)].colour != "white" &&
      squares[getCubeSquareIndex('b' + 9)].colour == "white"){
          R(); U2(); R2(); Ux(); R2(); Ux(); R2(); U2(); R();
      }
      if(squares[getCubeSquareIndex('g' + 1)].colour == "white" &&
      squares[getCubeSquareIndex('g' + 3)].colour == "white" &&
      squares[getCubeSquareIndex('b' + 7)].colour != "white" &&
      squares[getCubeSquareIndex('b' + 9)].colour != "white"){
          U(); R(); U2(); R2(); Ux(); R2(); Ux(); R2(); U2(); R();
      }
      if(squares[getCubeSquareIndex('g' + 1)].colour != "white" &&
      squares[getCubeSquareIndex('g' + 3)].colour != "white" &&
      squares[getCubeSquareIndex('b' + 7)].colour == "white" &&
      squares[getCubeSquareIndex('b' + 9)].colour == "white"){
          Ux(); R(); U2(); R2(); Ux(); R2(); Ux(); R2(); U2(); R();
      }
      if(squares[getCubeSquareIndex('g' + 1)].colour == "white" &&
      squares[getCubeSquareIndex('g' + 3)].colour != "white" &&
      squares[getCubeSquareIndex('b' + 7)].colour == "white" &&
      squares[getCubeSquareIndex('b' + 9)].colour != "white"){
          U2(); R(); U2(); R2(); Ux(); R2(); Ux(); R2(); U2(); R();
      }
    }

    //big block (headlights and no headlights)
    if(squares[getCubeSquareIndex('w' + 1)].colour == "white" &&
    squares[getCubeSquareIndex('w' + 3)].colour == "white" &&
    squares[getCubeSquareIndex('w' + 7)].colour != "white" &&
    squares[getCubeSquareIndex('w' + 9)].colour != "white"){
      if(squares[getCubeSquareIndex('g' + 1)].colour == "white" &&
      squares[getCubeSquareIndex('g' + 3)].colour == "white"){
        R2(); D(); Rx(); U2(); R(); Dx(); Rx(); U2(); Rx();
      } else {
        U2(); Rx(); U(); R(); U2(); Lx(); Rx(); U(); R(); Ux(); L();
      }
    }
    if(squares[getCubeSquareIndex('w' + 1)].colour != "white" &&
    squares[getCubeSquareIndex('w' + 3)].colour == "white" &&
    squares[getCubeSquareIndex('w' + 7)].colour != "white" &&
    squares[getCubeSquareIndex('w' + 9)].colour == "white"){
      if(squares[getCubeSquareIndex('g' + 1)].colour != "white" &&
      squares[getCubeSquareIndex('g' + 3)].colour != "white"){
        Ux(); R2(); D(); Rx(); U2(); R(); Dx(); Rx(); U2(); Rx();
      } else {
        U(); Rx(); U(); R(); U2(); Lx(); Rx(); U(); R(); Ux(); L();
      }
    }
    if(squares[getCubeSquareIndex('w' + 1)].colour != "white" &&
    squares[getCubeSquareIndex('w' + 3)].colour != "white" &&
    squares[getCubeSquareIndex('w' + 7)].colour == "white" &&
    squares[getCubeSquareIndex('w' + 9)].colour == "white"){
      if(squares[getCubeSquareIndex('b' + 7)].colour == "white" &&
      squares[getCubeSquareIndex('b' + 9)].colour == "white"){
        U2(); R2(); D(); Rx(); U2(); R(); Dx(); Rx(); U2(); Rx();
      } else {
        Rx(); U(); R(); U2(); Lx(); Rx(); U(); R(); Ux(); L();
      }
    }
    if(squares[getCubeSquareIndex('w' + 1)].colour == "white" &&
    squares[getCubeSquareIndex('w' + 3)].colour != "white" &&
    squares[getCubeSquareIndex('w' + 7)].colour == "white" &&
    squares[getCubeSquareIndex('w' + 9)].colour != "white"){
      if(squares[getCubeSquareIndex('b' + 7)].colour != "white" &&
      squares[getCubeSquareIndex('b' + 9)].colour != "white"){
        U(); R2(); D(); Rx(); U2(); R(); Dx(); Rx(); U2(); Rx();
      } else {
        Ux(); Rx(); U(); R(); U2(); Lx(); Rx(); U(); R(); Ux(); L();
      }
    }

    //8 case
    if(squares[getCubeSquareIndex('w' + 1)].colour == "white" &&
    squares[getCubeSquareIndex('w' + 3)].colour != "white" &&
    squares[getCubeSquareIndex('w' + 7)].colour != "white" &&
    squares[getCubeSquareIndex('w' + 9)].colour == "white"){
        if(squares[getCubeSquareIndex('o' + 9)].colour == "white"){
          R(); U(); Rx(); U(); R(); Ux(); Rx(); U(); R(); Ux(); Rx(); U(); R(); U2(); Rx();
        } else {
          U2(); R(); U(); Rx(); U(); R(); Ux(); Rx(); U(); R(); Ux(); Rx(); U(); R(); U2(); Rx();
        }
    }
    if(squares[getCubeSquareIndex('w' + 1)].colour != "white" &&
    squares[getCubeSquareIndex('w' + 3)].colour == "white" &&
    squares[getCubeSquareIndex('w' + 7)].colour == "white" &&
    squares[getCubeSquareIndex('w' + 9)].colour != "white"){
        if(squares[getCubeSquareIndex('r' + 7)].colour == "white"){
          Ux(); R(); U(); Rx(); U(); R(); Ux(); Rx(); U(); R(); Ux(); Rx(); U(); R(); U2(); Rx();
        } else {
          U(); R(); U(); Rx(); U(); R(); Ux(); Rx(); U(); R(); Ux(); Rx(); U(); R(); U2(); Rx();
        }
    }
    isOLLSolved = true;
  } else {
    alert("F2l is not solved!");
  }

}

function solvePLL(){
    if(isOLLSolved){
    var str = document.getElementById('solution').innerHTML;
    var n = str.includes("PLL");
    if(n==false){
      document.getElementById('solution').innerHTML +="<br/> PLL: ";
    }

    //Permutations of edges or corners only
    //edges only
    if(squares[getCubeSquareIndex('g' + 1)].colour == squares[getCubeSquareIndex('g' + 3)].colour &&
    squares[getCubeSquareIndex('r' + 1)].colour == squares[getCubeSquareIndex('r' + 7)].colour &&
    squares[getCubeSquareIndex('b' + 7)].colour == squares[getCubeSquareIndex('b' + 9)].colour &&
    squares[getCubeSquareIndex('o' + 3)].colour == squares[getCubeSquareIndex('o' + 9)].colour){
      //H-Perm
      if(areOpposite(squares[getCubeSquareIndex('g' + 2)].colour,squares[getCubeSquareIndex('b' + 8)].colour)&&
      areOpposite(squares[getCubeSquareIndex('g' + 2)].colour,squares[getCubeSquareIndex('g' + 1)].colour)){
        R2(); U2(); R2(); U2(); R2(); U(); R2(); U2(); R2(); U2(); R2();
        return;
      }
      //Z-Perm
      if(squares[getCubeSquareIndex('g' + 1)].colour == squares[getCubeSquareIndex('r' + 4)].colour&&
      squares[getCubeSquareIndex('g' + 2)].colour == squares[getCubeSquareIndex('r' + 1)].colour){
        R(); U(); Rx(); U(); Rx(); Ux(); Rx(); U(); R(); Ux(); Rx(); Ux(); R2(); U(); R();
        return;
      }
      if(squares[getCubeSquareIndex('g' + 1)].colour == squares[getCubeSquareIndex('o' + 6)].colour&&
      squares[getCubeSquareIndex('g' + 2)].colour == squares[getCubeSquareIndex('o' + 3)].colour){
        Ux(); R(); U(); Rx(); U(); Rx(); Ux(); Rx(); U(); R(); Ux(); Rx(); Ux(); R2(); U(); R();
        return;
      }
      //U-Perms
      if(squares[getCubeSquareIndex('g' + 1)].colour == squares[getCubeSquareIndex('g' + 2)].colour&&
      squares[getCubeSquareIndex('r' + 1)].colour != squares[getCubeSquareIndex('r' + 4)].colour){
        U2();
        if(areOpposite(squares[getCubeSquareIndex('g' + 2)].colour, squares[getCubeSquareIndex('r' + 4)].colour)){
          R(); Ux(); R(); U(); R(); U(); R(); Ux(); Rx(); Ux(); R2();
          return;
        }
        if(areOpposite(squares[getCubeSquareIndex('g' + 2)].colour, squares[getCubeSquareIndex('o' + 6)].colour)){
          R2(); U(); R(); U(); Rx(); Ux(); Rx(); Ux(); Rx(); U(); Rx();
          return;
        }
      }
      if(squares[getCubeSquareIndex('g' + 1)].colour != squares[getCubeSquareIndex('g' + 2)].colour&&
      squares[getCubeSquareIndex('r' + 1)].colour == squares[getCubeSquareIndex('r' + 4)].colour){
        Ux();
        if(areOpposite(squares[getCubeSquareIndex('g' + 2)].colour, squares[getCubeSquareIndex('r' + 4)].colour)){
          R(); Ux(); R(); U(); R(); U(); R(); Ux(); Rx(); Ux(); R2();
          return;
        }
        if(areOpposite(squares[getCubeSquareIndex('g' + 2)].colour, squares[getCubeSquareIndex('o' + 6)].colour)){
          R2(); U(); R(); U(); Rx(); Ux(); Rx(); Ux(); Rx(); U(); Rx();
          return;
        }
      }
      if(squares[getCubeSquareIndex('g' + 1)].colour != squares[getCubeSquareIndex('g' + 2)].colour&&
      squares[getCubeSquareIndex('o' + 3)].colour == squares[getCubeSquareIndex('o' + 6)].colour){
        U();
        if(areOpposite(squares[getCubeSquareIndex('g' + 2)].colour, squares[getCubeSquareIndex('r' + 4)].colour)){
          R(); Ux(); R(); U(); R(); U(); R(); Ux(); Rx(); Ux(); R2();
          return;
        }
        if(areOpposite(squares[getCubeSquareIndex('g' + 2)].colour, squares[getCubeSquareIndex('o' + 6)].colour)){
          R2(); U(); R(); U(); Rx(); Ux(); Rx(); Ux(); Rx(); U(); Rx();
          return;
        }
      }
      if(areOpposite(squares[getCubeSquareIndex('g' + 2)].colour, squares[getCubeSquareIndex('r' + 4)].colour)){
        R(); Ux(); R(); U(); R(); U(); R(); Ux(); Rx(); Ux(); R2();
        return;
      }
      if(areOpposite(squares[getCubeSquareIndex('g' + 2)].colour, squares[getCubeSquareIndex('o' + 6)].colour)){
        R2(); U(); R(); U(); Rx(); Ux(); Rx(); Ux(); Rx(); U(); Rx();
        return;
      }
    }

    //corners only
    //A-Perm
    if(areOpposite(squares[getCubeSquareIndex('g' + 2)].colour, squares[getCubeSquareIndex('b' + 8)].colour) && notSolved()){
      if(squares[getCubeSquareIndex('b' + 7)].colour == squares[getCubeSquareIndex('b' + 8)].colour&&
      squares[getCubeSquareIndex('o' + 3)].colour == squares[getCubeSquareIndex('o' + 6)].colour){
        Ux();
      }
      if(squares[getCubeSquareIndex('b' + 8)].colour == squares[getCubeSquareIndex('b' + 9)].colour&&
      squares[getCubeSquareIndex('r' + 1)].colour == squares[getCubeSquareIndex('r' + 4)].colour){
        U2();
      }
      if(squares[getCubeSquareIndex('g' + 2)].colour == squares[getCubeSquareIndex('g' + 3)].colour&&
      squares[getCubeSquareIndex('r' + 4)].colour == squares[getCubeSquareIndex('r' + 7)].colour){
        U();
      }
      if(squares[getCubeSquareIndex('g' + 1)].colour == squares[getCubeSquareIndex('g' + 2)].colour&&
      squares[getCubeSquareIndex('o' + 6)].colour == squares[getCubeSquareIndex('o' + 9)].colour){
        if(areOpposite(squares[getCubeSquareIndex('g' + 2)].colour, squares[getCubeSquareIndex('g' + 3)].colour)){
          Rx(); F(); Rx(); B2(); R(); Fx(); Rx(); B2(); R2();
          return;
        }
        if(areAdjacent(squares[getCubeSquareIndex('g' + 2)].colour, squares[getCubeSquareIndex('g' + 3)].colour)){
          R2(); B2(); R(); F(); Rx(); B2(); R(); Fx(); R();
          return;
        }
      }
    }

    //E-Perm
    if(squares[getCubeSquareIndex('g' + 1)].colour == squares[getCubeSquareIndex('b' + 7)].colour&&
    squares[getCubeSquareIndex('g' + 3)].colour == squares[getCubeSquareIndex('b' + 9)].colour&&
    squares[getCubeSquareIndex('o' + 3)].colour == squares[getCubeSquareIndex('r' + 1)].colour&&
    squares[getCubeSquareIndex('o' + 9)].colour == squares[getCubeSquareIndex('r' + 7)].colour&&
    areOpposite(squares[getCubeSquareIndex('g' + 2)].colour, squares[getCubeSquareIndex('b' + 8)].colour)){
      if(areOpposite(squares[getCubeSquareIndex('g' + 1)].colour, squares[getCubeSquareIndex('o' + 6)].colour)){
        U();
      }
      R(); Bx(); Rx(); F(); R(); B(); Rx(); Fx(); R(); B(); Rx(); F(); R(); Bx(); Rx(); Fx();
      return;
    }

    //------------------------//

    //Swaps of adjacent corners
    //headlights on the front
    if(squares[getCubeSquareIndex('g' + 1)].colour == squares[getCubeSquareIndex('g' + 3)].colour&&
    squares[getCubeSquareIndex('o' + 3)].colour == squares[getCubeSquareIndex('r' + 1)].colour){
      if(areOpposite(squares[getCubeSquareIndex('g' + 2)].colour, squares[getCubeSquareIndex('b' + 8)].colour)&&
      squares[getCubeSquareIndex('r' + 4)].colour == squares[getCubeSquareIndex('r' + 7)].colour){
          U(); TPerm();
          return;
      }
      if(areOpposite(squares[getCubeSquareIndex('o' + 6)].colour, squares[getCubeSquareIndex('r' + 4)].colour)&&
      squares[getCubeSquareIndex('g' + 1)].colour == squares[getCubeSquareIndex('g' + 2)].colour){
          U(); FPerm();
          return;
      }
      if(areOpposite(squares[getCubeSquareIndex('g' + 2)].colour, squares[getCubeSquareIndex('r' + 4)].colour)&&
      squares[getCubeSquareIndex('r' + 7)].colour == squares[getCubeSquareIndex('r' + 4)].colour){
          RaPerm();
          return;
      }
      if(areOpposite(squares[getCubeSquareIndex('g' + 2)].colour, squares[getCubeSquareIndex('o' + 6)].colour)&&
      squares[getCubeSquareIndex('o' + 9)].colour == squares[getCubeSquareIndex('o' + 6)].colour){
          RbPerm();
          return;
      }
      if(areOpposite(squares[getCubeSquareIndex('g' + 2)].colour, squares[getCubeSquareIndex('o' + 6)].colour)&&
      squares[getCubeSquareIndex('g' + 1)].colour == squares[getCubeSquareIndex('g' + 2)].colour){
          JaPerm();
          return;
      }
      if(areOpposite(squares[getCubeSquareIndex('g' + 2)].colour, squares[getCubeSquareIndex('r' + 4)].colour)&&
      squares[getCubeSquareIndex('g' + 1)].colour == squares[getCubeSquareIndex('g' + 2)].colour){
          U(); JbPerm();
          return;
      }
    }

    //headlights on the left
    if(squares[getCubeSquareIndex('o' + 3)].colour == squares[getCubeSquareIndex('o' + 9)].colour&&
    squares[getCubeSquareIndex('g' + 3)].colour == squares[getCubeSquareIndex('b' + 9)].colour){
      if(areOpposite(squares[getCubeSquareIndex('g' + 2)].colour, squares[getCubeSquareIndex('b' + 8)].colour)&&
      squares[getCubeSquareIndex('g' + 1)].colour == squares[getCubeSquareIndex('g' + 2)].colour){
          TPerm();
          return;
      }
      if(areOpposite(squares[getCubeSquareIndex('o' + 6)].colour, squares[getCubeSquareIndex('r' + 4)].colour)&&
      squares[getCubeSquareIndex('o' + 3)].colour == squares[getCubeSquareIndex('o' + 6)].colour){
          FPerm();
          return;
      }
      if(areOpposite(squares[getCubeSquareIndex('g' + 2)].colour, squares[getCubeSquareIndex('o' + 6)].colour)&&
      squares[getCubeSquareIndex('g' + 1)].colour == squares[getCubeSquareIndex('g' + 2)].colour){
          Ux(); RaPerm();
          return;
      }
      if(areOpposite(squares[getCubeSquareIndex('g' + 2)].colour, squares[getCubeSquareIndex('r' + 4)].colour)&&
      squares[getCubeSquareIndex('b' + 7)].colour == squares[getCubeSquareIndex('b' + 8)].colour){
          Ux(); RbPerm();
          return;
      }
      if(areOpposite(squares[getCubeSquareIndex('g' + 2)].colour, squares[getCubeSquareIndex('r' + 4)].colour)&&
      squares[getCubeSquareIndex('o' + 6)].colour == squares[getCubeSquareIndex('o' + 3)].colour){
          Ux(); JaPerm();
          return;
      }
      if(areOpposite(squares[getCubeSquareIndex('b' + 8)].colour, squares[getCubeSquareIndex('r' + 4)].colour)&&
      squares[getCubeSquareIndex('o' + 6)].colour == squares[getCubeSquareIndex('o' + 3)].colour){
          JbPerm();
          return;
      }
    }

    //headlights on the back
    if(squares[getCubeSquareIndex('b' + 7)].colour == squares[getCubeSquareIndex('b' + 9)].colour&&
    squares[getCubeSquareIndex('o' + 9)].colour == squares[getCubeSquareIndex('r' + 7)].colour){
      if(areOpposite(squares[getCubeSquareIndex('g' + 2)].colour, squares[getCubeSquareIndex('b' + 8)].colour)&&
      squares[getCubeSquareIndex('o' + 3)].colour == squares[getCubeSquareIndex('o' + 6)].colour){
          Ux(); TPerm();
          return;
      }
      if(areOpposite(squares[getCubeSquareIndex('o' + 6)].colour, squares[getCubeSquareIndex('r' + 4)].colour)&&
      squares[getCubeSquareIndex('b' + 7)].colour == squares[getCubeSquareIndex('b' + 8)].colour){
          Ux(); FPerm();
          return;
      }
      if(areOpposite(squares[getCubeSquareIndex('g' + 2)].colour, squares[getCubeSquareIndex('r' + 4)].colour)&&
      squares[getCubeSquareIndex('o' + 3)].colour == squares[getCubeSquareIndex('o' + 6)].colour){
          U2(); RaPerm();
          return;
      }
      if(areOpposite(squares[getCubeSquareIndex('g' + 2)].colour, squares[getCubeSquareIndex('o' + 6)].colour)&&
      squares[getCubeSquareIndex('r' + 1)].colour == squares[getCubeSquareIndex('r' + 4)].colour){
          U2(); RbPerm();
          return;
      }
      if(areOpposite(squares[getCubeSquareIndex('g' + 2)].colour, squares[getCubeSquareIndex('o' + 6)].colour)&&
      squares[getCubeSquareIndex('b' + 7)].colour == squares[getCubeSquareIndex('b' + 8)].colour){
          U2(); JaPerm();
          return;
      }
      if(areOpposite(squares[getCubeSquareIndex('g' + 2)].colour, squares[getCubeSquareIndex('r' + 4)].colour)&&
      squares[getCubeSquareIndex('b' + 7)].colour == squares[getCubeSquareIndex('b' + 8)].colour){
          Ux(); JbPerm();
          return;
      }
    }

    //headlights on the right
    if(squares[getCubeSquareIndex('r' + 1)].colour == squares[getCubeSquareIndex('r' + 7)].colour&&
    squares[getCubeSquareIndex('g' + 1)].colour == squares[getCubeSquareIndex('b' + 7)].colour){
      if(areOpposite(squares[getCubeSquareIndex('g' + 2)].colour, squares[getCubeSquareIndex('b' + 8)].colour)&&
      squares[getCubeSquareIndex('g' + 2)].colour == squares[getCubeSquareIndex('g' + 3)].colour){
          U2(); TPerm();
          return;
      }
      if(areOpposite(squares[getCubeSquareIndex('o' + 6)].colour, squares[getCubeSquareIndex('r' + 4)].colour)&&
      squares[getCubeSquareIndex('r' + 4)].colour == squares[getCubeSquareIndex('r' + 7)].colour){
          U2(); FPerm();
          return;
      }
      if(areOpposite(squares[getCubeSquareIndex('g' + 2)].colour, squares[getCubeSquareIndex('o' + 6)].colour)&&
      squares[getCubeSquareIndex('b' + 8)].colour == squares[getCubeSquareIndex('b' + 9)].colour){
          U(); RaPerm();
          return;
      }
      if(areOpposite(squares[getCubeSquareIndex('g' + 2)].colour, squares[getCubeSquareIndex('r' + 4)].colour)&&
      squares[getCubeSquareIndex('g' + 2)].colour == squares[getCubeSquareIndex('g' + 3)].colour){
          U(); RbPerm();
          return;
      }
      if(areOpposite(squares[getCubeSquareIndex('g' + 2)].colour, squares[getCubeSquareIndex('r' + 4)].colour)&&
      squares[getCubeSquareIndex('r' + 4)].colour == squares[getCubeSquareIndex('r' + 7)].colour){
          U(); JaPerm();
          return;
      }
      if(areOpposite(squares[getCubeSquareIndex('g' + 2)].colour, squares[getCubeSquareIndex('o' + 6)].colour)&&
      squares[getCubeSquareIndex('r' + 4)].colour == squares[getCubeSquareIndex('r' + 7)].colour){
          U2(); JbPerm();
          return;
      }
    }

    //------------------------//

    //Swaps of corners diagonally
    if(squares[getCubeSquareIndex('g' + 1)].colour == squares[getCubeSquareIndex('b' + 7)].colour&&
    squares[getCubeSquareIndex('g' + 3)].colour == squares[getCubeSquareIndex('b' + 9)].colour&&
    squares[getCubeSquareIndex('o' + 3)].colour == squares[getCubeSquareIndex('r' + 1)].colour&&
    squares[getCubeSquareIndex('o' + 9)].colour == squares[getCubeSquareIndex('r' + 7)].colour){
      //N-Perms
      if(squares[getCubeSquareIndex('g' + 2)].colour == squares[getCubeSquareIndex('g' + 3)].colour&&
      squares[getCubeSquareIndex('b' + 7)].colour == squares[getCubeSquareIndex('b' + 8)].colour){
          L(); Ux(); R(); U2(); Lx(); U(); Rx(); L(); Ux(); R(); U2(); Lx(); U(); Rx();
          return;
      }
      if(squares[getCubeSquareIndex('g' + 2)].colour == squares[getCubeSquareIndex('g' + 1)].colour&&
      squares[getCubeSquareIndex('b' + 9)].colour == squares[getCubeSquareIndex('b' + 8)].colour){
          Rx(); U(); Lx(); U2(); R(); Ux(); L(); Rx(); U(); Lx(); U2(); R(); Ux(); L();
          return;
      }

      //Y-Perm
      if(squares[getCubeSquareIndex('g' + 1)].colour == squares[getCubeSquareIndex('g' + 2)].colour&&
      squares[getCubeSquareIndex('r' + 1)].colour == squares[getCubeSquareIndex('r' + 4)].colour){
          YPerm();
          return;
      }
      if(squares[getCubeSquareIndex('r' + 4)].colour == squares[getCubeSquareIndex('r' + 7)].colour&&
      squares[getCubeSquareIndex('b' + 7)].colour == squares[getCubeSquareIndex('b' + 8)].colour){
          U(); YPerm();
          return;
      }
      if(squares[getCubeSquareIndex('b' + 8)].colour == squares[getCubeSquareIndex('b' + 9)].colour&&
      squares[getCubeSquareIndex('o' + 6)].colour == squares[getCubeSquareIndex('o' + 9)].colour){
          U2(); YPerm();
          return;
      }
      if(squares[getCubeSquareIndex('g' + 2)].colour == squares[getCubeSquareIndex('g' + 3)].colour&&
      squares[getCubeSquareIndex('o' + 3)].colour == squares[getCubeSquareIndex('o' + 6)].colour){
          Ux(); YPerm();
          return;
      }

      //V-Perm
      if(squares[getCubeSquareIndex('g' + 1)].colour == squares[getCubeSquareIndex('g' + 2)].colour&&
      squares[getCubeSquareIndex('o' + 6)].colour == squares[getCubeSquareIndex('o' + 9)].colour){
          VPerm();
          return;
      }
      if(squares[getCubeSquareIndex('r' + 4)].colour == squares[getCubeSquareIndex('r' + 7)].colour&&
      squares[getCubeSquareIndex('g' + 2)].colour == squares[getCubeSquareIndex('g' + 3)].colour){
          U(); VPerm();
          return;
      }
      if(squares[getCubeSquareIndex('b' + 8)].colour == squares[getCubeSquareIndex('b' + 9)].colour&&
      squares[getCubeSquareIndex('r' + 1)].colour == squares[getCubeSquareIndex('r' + 4)].colour){
          U2(); VPerm();
          return;
      }
      if(squares[getCubeSquareIndex('b' + 7)].colour == squares[getCubeSquareIndex('b' + 8)].colour&&
      squares[getCubeSquareIndex('o' + 3)].colour == squares[getCubeSquareIndex('o' + 6)].colour){
          Ux(); VPerm();
          return;
      }
    }

    //------------------------//

    //G-Perms
    if(notSolved()){
    //Ga-Perm
    if(squares[getCubeSquareIndex('g' + 2)].colour == squares[getCubeSquareIndex('g' + 3)].colour&&
      squares[getCubeSquareIndex('o' + 3)].colour == squares[getCubeSquareIndex('o' + 9)].colour){
        GaPerm();
        return;
    }
    if(squares[getCubeSquareIndex('g' + 1)].colour == squares[getCubeSquareIndex('g' + 3)].colour&&
      squares[getCubeSquareIndex('r' + 1)].colour == squares[getCubeSquareIndex('r' + 4)].colour){
        U(); GaPerm();
        return;
    }
    if(squares[getCubeSquareIndex('b' + 7)].colour == squares[getCubeSquareIndex('b' + 8)].colour&&
      squares[getCubeSquareIndex('r' + 1)].colour == squares[getCubeSquareIndex('r' + 7)].colour){
        U2(); GaPerm();
        return;
    }
    if(squares[getCubeSquareIndex('b' + 7)].colour == squares[getCubeSquareIndex('b' + 9)].colour&&
      squares[getCubeSquareIndex('o' + 6)].colour == squares[getCubeSquareIndex('o' + 9)].colour){
        Ux(); GaPerm();
        return;
    }

    //Gb-Perm
    if(squares[getCubeSquareIndex('r' + 1)].colour == squares[getCubeSquareIndex('r' + 4)].colour&&
      squares[getCubeSquareIndex('o' + 3)].colour == squares[getCubeSquareIndex('o' + 9)].colour){
        GbPerm();
        return;
    }
    if(squares[getCubeSquareIndex('g' + 1)].colour == squares[getCubeSquareIndex('g' + 3)].colour&&
      squares[getCubeSquareIndex('b' + 7)].colour == squares[getCubeSquareIndex('b' + 8)].colour){
        U(); GbPerm();
        return;
    }
    if(squares[getCubeSquareIndex('o' + 6)].colour == squares[getCubeSquareIndex('o' + 9)].colour&&
      squares[getCubeSquareIndex('r' + 1)].colour == squares[getCubeSquareIndex('r' + 7)].colour){
        U2(); GbPerm();
        return;
    }
    if(squares[getCubeSquareIndex('b' + 7)].colour == squares[getCubeSquareIndex('b' + 9)].colour&&
      squares[getCubeSquareIndex('g' + 2)].colour == squares[getCubeSquareIndex('g' + 3)].colour){
        Ux(); GbPerm();
        return;
    }

    //Gc-Perm
    if(squares[getCubeSquareIndex('g' + 1)].colour == squares[getCubeSquareIndex('g' + 2)].colour&&
      squares[getCubeSquareIndex('r' + 1)].colour == squares[getCubeSquareIndex('r' + 7)].colour){
        GcPerm();
        return;
    }
    if(squares[getCubeSquareIndex('r' + 4)].colour == squares[getCubeSquareIndex('r' + 7)].colour&&
      squares[getCubeSquareIndex('b' + 7)].colour == squares[getCubeSquareIndex('b' + 9)].colour){
        U(); GcPerm();
        return;
    }
    if(squares[getCubeSquareIndex('b' + 8)].colour == squares[getCubeSquareIndex('b' + 9)].colour&&
      squares[getCubeSquareIndex('o' + 3)].colour == squares[getCubeSquareIndex('o' + 9)].colour){
        U2(); GcPerm();
        return;
    }
    if(squares[getCubeSquareIndex('o' + 3)].colour == squares[getCubeSquareIndex('o' + 6)].colour&&
      squares[getCubeSquareIndex('g' + 1)].colour == squares[getCubeSquareIndex('g' + 3)].colour){
        Ux(); GcPerm();
        return;
    }

    //Gd-Perm
    if(squares[getCubeSquareIndex('r' + 4)].colour == squares[getCubeSquareIndex('r' + 7)].colour&&
      squares[getCubeSquareIndex('o' + 3)].colour == squares[getCubeSquareIndex('o' + 9)].colour){
        GdPerm();
        return;
    }
    if(squares[getCubeSquareIndex('b' + 8)].colour == squares[getCubeSquareIndex('b' + 9)].colour&&
      squares[getCubeSquareIndex('g' + 1)].colour == squares[getCubeSquareIndex('g' + 2)].colour){
        U(); GdPerm();
        return;
    }
    if(squares[getCubeSquareIndex('o' + 3)].colour == squares[getCubeSquareIndex('o' + 6)].colour&&
      squares[getCubeSquareIndex('r' + 1)].colour == squares[getCubeSquareIndex('r' + 7)].colour){
        U2(); GdPerm();
        return;
    }
    if(squares[getCubeSquareIndex('b' + 7)].colour == squares[getCubeSquareIndex('b' + 9)].colour&&
      squares[getCubeSquareIndex('g' + 1)].colour == squares[getCubeSquareIndex('g' + 2)].colour){
        Ux(); GdPerm();
        return;
    }
    }
  } else {
    alert("OLL is not solved!");
  }
}

function GaPerm(){
    R2(); U();  Rx(); U(); Rx(); Ux(); R(); Ux(); R2(); D(); Ux(); Rx(); U(); R(); Dx();
}

function GbPerm() {
    Rx(); Ux(); R(); U(); Dx(); R2(); U(); Rx(); U(); R(); Ux(); R(); Ux(); R2(); D();
}

function GcPerm() {
    R2(); F2(); R(); U2(); R(); U2(); Rx(); F(); R(); U(); Rx(); Ux(); Rx(); F(); R2();
}

function GdPerm() {
    R(); U(); Rx(); Ux(); D(); R2(); Ux(); R(); Ux(); Rx(); U(); Rx(); U(); R2(); Dx();
}

function YPerm(){
    F();  R();  Ux();  Rx();  Ux(); R();  U();  Rx(); Fx(); R();  U();  Rx();  Ux(); Rx();  F();  R();  Fx();
}

function VPerm(){
    Rx(); U(); Rx(); Ux(); R(); Dx(); Rx(); D(); Rx(); U(); Dx(); R2(); Ux(); R2(); D(); R2();
}

function TPerm(){
    sexyMove(); Rx(); F(); R2(); Ux(); Rx(); Ux(); R(); U(); Rx(); Fx();
}

function FPerm() {
    Rx(); Ux(); Fx(); sexyMove(); Rx(); F(); R2(); Ux(); Rx(); Ux(); R(); U(); Rx(); U(); R();
}

function RaPerm() {
    L(); U2(); Lx(); U2(); L(); Fx(); Lx(); Ux(); L(); U(); L(); F(); L2();
}

function RbPerm(){
    Rx(); U2(); R(); U2(); Rx(); F(); sexyMove(); Rx(); Fx(); R2();
}

function JaPerm(){
    Rx(); U(); Lx(); U2(); R(); Ux(); Rx(); U2(); R(); L();
}

function JbPerm(){
    R(); U(); Rx(); Fx(); R(); U(); Rx(); Ux(); Rx(); F(); R2(); Ux(); Rx();
}

function solveYellowAndRed(){
    if(squares[getCubeSquareIndex('g' + 6)].colour == "yellow" && squares[getCubeSquareIndex('r' + 8)].colour == "red"){
        Rx();
    }
    if(squares[getCubeSquareIndex('g' + 6)].colour == "red" && squares[getCubeSquareIndex('r' + 8)].colour == "yellow"){
        Fx();
        Ux();
        F();
        R2();
    }
    if(squares[getCubeSquareIndex('g' + 8)].colour == "yellow" && squares[getCubeSquareIndex('y' + 2)].colour == "red"){
        Fx();
        Rx();
    }
    if(squares[getCubeSquareIndex('g' + 8)].colour == "red" && squares[getCubeSquareIndex('y' + 2)].colour == "yellow"){
        F2();
        Ux();
        R2();
    }
    if(squares[getCubeSquareIndex('g' + 4)].colour == "yellow" && squares[getCubeSquareIndex('o' + 8)].colour == "red"){
        Lx();
        U2();
        L();
        R2();
    }
    if(squares[getCubeSquareIndex('g' + 4)].colour == "red" && squares[getCubeSquareIndex('o' + 8)].colour == "yellow"){
        F();
        Ux();
        Fx();
        R2();
    }
    if(squares[getCubeSquareIndex('g' + 2)].colour == "red" && squares[getCubeSquareIndex('w' + 8)].colour == "yellow"){
        Ux();
        R2();
    }
    if(squares[getCubeSquareIndex('g' + 2)].colour == "yellow" && squares[getCubeSquareIndex('w' + 8)].colour == "red"){
        F();
        Rx();
    }
    if(squares[getCubeSquareIndex('r' + 4)].colour == "red" && squares[getCubeSquareIndex('w' + 6)].colour == "yellow"){
        R2();
    }
    if(squares[getCubeSquareIndex('r' + 4)].colour == "yellow" && squares[getCubeSquareIndex('w' + 6)].colour == "red"){
        U();
        F();
        Rx();
    }
    if(squares[getCubeSquareIndex('r' + 6)].colour == "yellow" && squares[getCubeSquareIndex('y' + 6)].colour == "red"){
        R();
        Fx();
        Ux();
        R2();
    }
    if(squares[getCubeSquareIndex('o' + 6)].colour == "red" && squares[getCubeSquareIndex('w' + 4)].colour == "yellow"){
        U2();
        R2();
    }
    if(squares[getCubeSquareIndex('o' + 6)].colour == "yellow" && squares[getCubeSquareIndex('w' + 4)].colour == "red"){
        Ux();
        F();
        Rx();
    }
    if(squares[getCubeSquareIndex('o' + 4)].colour == "red" && squares[getCubeSquareIndex('y' + 4)].colour == "yellow"){
        L2();
        U2();
        R2();
    }
    if(squares[getCubeSquareIndex('o' + 4)].colour == "yellow" && squares[getCubeSquareIndex('y' + 4)].colour == "red"){
        Lx();
        F();
        Ux();
        R2();
    }
    if(squares[getCubeSquareIndex('b' + 6)].colour == "yellow" && squares[getCubeSquareIndex('r' + 2)].colour == "red"){
        R();
    }
    if(squares[getCubeSquareIndex('b' + 6)].colour == "red" && squares[getCubeSquareIndex('r' + 2)].colour == "yellow"){
        Rx();
        U();
        F();
        Rx();
    }
    if(squares[getCubeSquareIndex('b' + 8)].colour == "yellow" && squares[getCubeSquareIndex('w' + 2)].colour == "red"){
        Bx();
        R();
    }
    if(squares[getCubeSquareIndex('b' + 8)].colour == "red" && squares[getCubeSquareIndex('w' + 2)].colour == "yellow"){
        U();
        R2();
    }
    if(squares[getCubeSquareIndex('b' + 4)].colour == "yellow" && squares[getCubeSquareIndex('o' + 2)].colour == "red"){
        B2();
        R();
    }
    if(squares[getCubeSquareIndex('b' + 4)].colour == "red" && squares[getCubeSquareIndex('o' + 2)].colour == "yellow"){
        Bx();
        U();
        R2();
    }
    if(squares[getCubeSquareIndex('b' + 2)].colour == "red" && squares[getCubeSquareIndex('y' + 8)].colour == "yellow"){
        Dx();
    }
    if(squares[getCubeSquareIndex('b' + 2)].colour == "yellow" && squares[getCubeSquareIndex('y' + 8)].colour == "red"){
        B();
        R();
    }
}

function solveYellowAndOrange(){
    if(squares[getCubeSquareIndex('g' + 6)].colour == "yellow" && squares[getCubeSquareIndex('r' + 8)].colour == "orange"){
        R();
        U2();
        Rx();
        L2();
    }
    if(squares[getCubeSquareIndex('g' + 6)].colour == "orange" && squares[getCubeSquareIndex('r' + 8)].colour == "yellow"){
        Fx();
        U();
        F();
        L2();
    }
    if(squares[getCubeSquareIndex('g' + 4)].colour == "yellow" && squares[getCubeSquareIndex('o' + 8)].colour == "orange"){
        L();
    }
    if(squares[getCubeSquareIndex('g' + 4)].colour == "orange" && squares[getCubeSquareIndex('o' + 8)].colour == "yellow"){
        F();
        U();
        Fx();
        L2();
    }
    if(squares[getCubeSquareIndex('g' + 2)].colour == "orange" && squares[getCubeSquareIndex('w' + 8)].colour == "yellow"){
        U();
        L2();
    }
    if(squares[getCubeSquareIndex('g' + 2)].colour == "yellow" && squares[getCubeSquareIndex('w' + 8)].colour == "orange"){
        Fx();
        L();
        F();
    }
    if(squares[getCubeSquareIndex('r' + 4)].colour == "orange" && squares[getCubeSquareIndex('w' + 6)].colour == "yellow"){
        U2();
        L2();
    }
    if(squares[getCubeSquareIndex('r' + 4)].colour == "yellow" && squares[getCubeSquareIndex('w' + 6)].colour == "orange"){
        U();
        Fx();
        L();
        F();
    }
    if(squares[getCubeSquareIndex('o' + 6)].colour == "orange" && squares[getCubeSquareIndex('w' + 4)].colour == "yellow"){
        L2();
    }
    if(squares[getCubeSquareIndex('o' + 6)].colour == "yellow" && squares[getCubeSquareIndex('w' + 4)].colour == "orange"){
        Ux();
        Fx();
        L();
        F();
    }
    if(squares[getCubeSquareIndex('o' + 4)].colour == "yellow" && squares[getCubeSquareIndex('y' + 4)].colour == "orange"){
        Lx();
        F();
        U();
        Fx();
        L2();
    }
    if(squares[getCubeSquareIndex('b' + 6)].colour == "yellow" && squares[getCubeSquareIndex('r' + 2)].colour == "orange"){
        B2();
        Lx();
    }
    if(squares[getCubeSquareIndex('b' + 6)].colour == "orange" && squares[getCubeSquareIndex('r' + 2)].colour == "yellow"){
        B();
        Ux();
        L2();
    }
    if(squares[getCubeSquareIndex('b' + 8)].colour == "yellow" && squares[getCubeSquareIndex('w' + 2)].colour == "orange"){
        B();
        Lx();
    }
    if(squares[getCubeSquareIndex('b' + 8)].colour == "orange" && squares[getCubeSquareIndex('w' + 2)].colour == "yellow"){
        Ux();
        L2();
    }
    if(squares[getCubeSquareIndex('b' + 4)].colour == "yellow" && squares[getCubeSquareIndex('o' + 2)].colour == "orange"){
        Lx();
    }
    if(squares[getCubeSquareIndex('b' + 4)].colour == "orange" && squares[getCubeSquareIndex('o' + 2)].colour == "yellow"){
        Bx();
        Ux();
        L2();
    }
    if(squares[getCubeSquareIndex('b' + 2)].colour == "orange" && squares[getCubeSquareIndex('y' + 8)].colour == "yellow"){
        B2();
        Ux();
        L2();
    }
    if(squares[getCubeSquareIndex('b' + 2)].colour == "yellow" && squares[getCubeSquareIndex('y' + 8)].colour == "orange"){
        Bx();
        Lx();
    }
}

function solveYellowAndGreen(){
    if(squares[getCubeSquareIndex('g' + 6)].colour == "yellow" && squares[getCubeSquareIndex('r' + 8)].colour == "green"){
        R();
        U();
        Rx();
        F2();
    }
    if(squares[getCubeSquareIndex('g' + 6)].colour == "green" && squares[getCubeSquareIndex('r' + 8)].colour == "yellow"){
        F();
    }
    if(squares[getCubeSquareIndex('g' + 8)].colour == "yellow" && squares[getCubeSquareIndex('y' + 2)].colour == "green"){
        Fx();
        R();
        U();
        Rx();
        F2();
    }
    if(squares[getCubeSquareIndex('g' + 4)].colour == "yellow" && squares[getCubeSquareIndex('o' + 8)].colour == "green"){
        Lx();
        Ux();
        F2();
    }
    if(squares[getCubeSquareIndex('g' + 4)].colour == "green" && squares[getCubeSquareIndex('o' + 8)].colour == "yellow"){
        Fx();
    }
    if(squares[getCubeSquareIndex('g' + 2)].colour == "green" && squares[getCubeSquareIndex('w' + 8)].colour == "yellow"){
        F2();
    }
    if(squares[getCubeSquareIndex('g' + 2)].colour == "yellow" && squares[getCubeSquareIndex('w' + 8)].colour == "green"){
        Ux();
        Rx();
        F();
        R();
    }
    if(squares[getCubeSquareIndex('r' + 4)].colour == "green" && squares[getCubeSquareIndex('w' + 6)].colour == "yellow"){
        U();
        F2();
    }
    if(squares[getCubeSquareIndex('r' + 4)].colour == "yellow" && squares[getCubeSquareIndex('w' + 6)].colour == "green"){
        Rx();
        F();
        R();
    }
    if(squares[getCubeSquareIndex('o' + 6)].colour == "green" && squares[getCubeSquareIndex('w' + 4)].colour == "yellow"){
        U2();
        R2();
    }
    if(squares[getCubeSquareIndex('o' + 6)].colour == "yellow" && squares[getCubeSquareIndex('w' + 4)].colour == "green"){
        L();
        Fx();
    }
    if(squares[getCubeSquareIndex('o' + 4)].colour == "green" && squares[getCubeSquareIndex('y' + 4)].colour == "yellow"){
        L2();
        Ux();
        F2();
    }
    if(squares[getCubeSquareIndex('o' + 4)].colour == "yellow" && squares[getCubeSquareIndex('y' + 4)].colour == "green"){
        Lx();
        Fx();
    }
    if(squares[getCubeSquareIndex('b' + 6)].colour == "yellow" && squares[getCubeSquareIndex('r' + 2)].colour == "green"){
        Rx();
        U();
        R();
        F2();
    }
    if(squares[getCubeSquareIndex('b' + 6)].colour == "green" && squares[getCubeSquareIndex('r' + 2)].colour == "yellow"){
        R2();
        F();
        R2();
    }
    if(squares[getCubeSquareIndex('b' + 8)].colour == "yellow" && squares[getCubeSquareIndex('w' + 2)].colour == "green"){
        U();
        Rx();
        F();
        R();
    }
    if(squares[getCubeSquareIndex('b' + 8)].colour == "green" && squares[getCubeSquareIndex('w' + 2)].colour == "yellow"){
        U2();
        F2();
    }
    if(squares[getCubeSquareIndex('b' + 4)].colour == "yellow" && squares[getCubeSquareIndex('o' + 2)].colour == "green"){
        L();
        Ux();
        F2();
    }
    if(squares[getCubeSquareIndex('b' + 4)].colour == "green" && squares[getCubeSquareIndex('o' + 2)].colour == "yellow"){
        Bx();
        U2();
        F2();
    }
    if(squares[getCubeSquareIndex('b' + 2)].colour == "green" && squares[getCubeSquareIndex('y' + 8)].colour == "yellow"){
        B2();
        U2();
        F2();
    }
    if(squares[getCubeSquareIndex('b' + 2)].colour == "yellow" && squares[getCubeSquareIndex('y' + 8)].colour == "green"){
        B();
        Rx();
        U();
        R();
        F2();
    }
}

function solveYellowAndBlue(){
    if(squares[getCubeSquareIndex('g' + 6)].colour == "yellow" && squares[getCubeSquareIndex('r' + 8)].colour == "blue"){
        R();
        Ux();
        Rx();
        B2();
    }
    if(squares[getCubeSquareIndex('g' + 6)].colour == "blue" && squares[getCubeSquareIndex('r' + 8)].colour == "yellow"){
        Fx();
        U2();
        F();
        B2();
    }
    if(squares[getCubeSquareIndex('g' + 4)].colour == "yellow" && squares[getCubeSquareIndex('o' + 8)].colour == "blue"){
        Lx();
        U();
        L();
        B2();
    }
    if(squares[getCubeSquareIndex('g' + 4)].colour == "blue" && squares[getCubeSquareIndex('o' + 8)].colour == "yellow"){
        F();
        U2();
        Fx();
        B2();
    }
    if(squares[getCubeSquareIndex('g' + 2)].colour == "blue" && squares[getCubeSquareIndex('w' + 8)].colour == "yellow"){
        U2();
        B2();
    }
    if(squares[getCubeSquareIndex('g' + 2)].colour == "yellow" && squares[getCubeSquareIndex('w' + 8)].colour == "blue"){
        Ux();
        R();
        Bx();
        Rx();
    }
    if(squares[getCubeSquareIndex('r' + 4)].colour == "blue" && squares[getCubeSquareIndex('w' + 6)].colour == "yellow"){
        Ux();
        B2();
    }
    if(squares[getCubeSquareIndex('r' + 4)].colour == "yellow" && squares[getCubeSquareIndex('w' + 6)].colour == "blue"){
        R();
        Bx();
        Rx();
    }
    if(squares[getCubeSquareIndex('o' + 6)].colour == "blue" && squares[getCubeSquareIndex('w' + 4)].colour == "yellow"){
        U();
        B2();
    }
    if(squares[getCubeSquareIndex('o' + 6)].colour == "yellow" && squares[getCubeSquareIndex('w' + 4)].colour == "blue"){
        Lx();
        B();
        L();
    }
    if(squares[getCubeSquareIndex('b' + 6)].colour == "yellow" && squares[getCubeSquareIndex('r' + 2)].colour == "blue"){
        Rx();
        Ux();
        R();
        B2();
    }
    if(squares[getCubeSquareIndex('b' + 6)].colour == "blue" && squares[getCubeSquareIndex('r' + 2)].colour == "yellow"){
        Bx();
    }
    if(squares[getCubeSquareIndex('b' + 8)].colour == "yellow" && squares[getCubeSquareIndex('w' + 2)].colour == "blue"){
        U();
        R();
        Bx();
        Rx();
    }
    if(squares[getCubeSquareIndex('b' + 8)].colour == "blue" && squares[getCubeSquareIndex('w' + 2)].colour == "yellow"){
        B2();
    }
    if(squares[getCubeSquareIndex('b' + 4)].colour == "yellow" && squares[getCubeSquareIndex('o' + 2)].colour == "blue"){
        L();
        U();
        Lx();
        B2();
    }
    if(squares[getCubeSquareIndex('b' + 4)].colour == "blue" && squares[getCubeSquareIndex('o' + 2)].colour == "yellow"){
        B();
    }
    if(squares[getCubeSquareIndex('b' + 2)].colour == "yellow" && squares[getCubeSquareIndex('y' + 8)].colour == "blue"){
        Bx();
        L();
        U();
        Lx();
        B2();
    }
}

function solveRedAndGreenPair(){

    //Solve edge
    if(squares[getCubeSquareIndex('g' + 6)].colour == "red" && squares[getCubeSquareIndex('r' + 8)].colour == "green"){
        R();
        U();
        Rx();
        Ux();
        Fx();
        U();
        F();
    }
    if(squares[getCubeSquareIndex('g' + 4)].colour == "red" && squares[getCubeSquareIndex('o' + 8)].colour == "green"){
        Lx();
        Ux();
        L();
        Ux();
        Fx();
        U();
        F();
    }
    if(squares[getCubeSquareIndex('g' + 4)].colour == "green" && squares[getCubeSquareIndex('o' + 8)].colour == "red"){
        F2();
        U();
        F2();
        Ux();
        F2();
    }
    if(squares[getCubeSquareIndex('g' + 2)].colour == "green" && squares[getCubeSquareIndex('w' + 8)].colour == "red"){
        Ux();
        Fx();
        U();
        F();
    }
    if(squares[getCubeSquareIndex('g' + 2)].colour == "red" && squares[getCubeSquareIndex('w' + 8)].colour == "green"){
        R();
        Ux();
        Rx();
    }
    if(squares[getCubeSquareIndex('r' + 4)].colour == "red" && squares[getCubeSquareIndex('w' + 6)].colour == "green"){
        U();
        R();
        Ux();
        Rx();
    }
    if(squares[getCubeSquareIndex('r' + 4)].colour == "green" && squares[getCubeSquareIndex('w' + 6)].colour == "red"){
        Fx();
        U();
        F();
    }
    if(squares[getCubeSquareIndex('o' + 6)].colour == "red" && squares[getCubeSquareIndex('w' + 4)].colour == "green"){
        R();
        U2();
        Rx();
    }
    if(squares[getCubeSquareIndex('o' + 6)].colour == "green" && squares[getCubeSquareIndex('w' + 4)].colour == "red"){
        Fx();
        Ux();
        F();
    }
    if(squares[getCubeSquareIndex('b' + 6)].colour == "green" && squares[getCubeSquareIndex('r' + 2)].colour == "red"){
        Rx();
        U();
        R2();
        Ux();
        Rx();
    }
    if(squares[getCubeSquareIndex('b' + 6)].colour == "red" && squares[getCubeSquareIndex('r' + 2)].colour == "green"){
        Rx();
        U();
        R();
        Ux();
        Fx();
        U();
        F();
    }
    if(squares[getCubeSquareIndex('b' + 8)].colour == "green" && squares[getCubeSquareIndex('w' + 2)].colour == "red"){
        Fx();
        U2();
        F();
    }
    if(squares[getCubeSquareIndex('b' + 8)].colour == "red" && squares[getCubeSquareIndex('w' + 2)].colour == "green"){
        R();
        U();
        Rx();
    }
    if(squares[getCubeSquareIndex('b' + 4)].colour == "green" && squares[getCubeSquareIndex('o' + 2)].colour == "red"){
        R();
        L();
        U2();
        Lx();
        Rx();
    }
    if(squares[getCubeSquareIndex('b' + 4)].colour == "red" && squares[getCubeSquareIndex('o' + 2)].colour == "green"){
        L();
        U2();
        Lx();
        Fx();
        U();
        F();
    }

    //Solve pair

    //position 1
    if(squares[getCubeSquareIndex('g' + 1)].colour == "red" && squares[getCubeSquareIndex('w' + 7)].colour == "green" && squares[getCubeSquareIndex('o' + 9)].colour == "yellow"){
        U2();
        R();
        Ux();
        Rx();
        U2();
        R();
        Ux();
        Rx();
    }
    if(squares[getCubeSquareIndex('g' + 1)].colour == "green" && squares[getCubeSquareIndex('w' + 7)].colour == "yellow" && squares[getCubeSquareIndex('o' + 9)].colour == "red"){
        Ux();
        sexyMove();
        sexyMove();
        sexyMove();
    }
    if(squares[getCubeSquareIndex('g' + 1)].colour == "yellow" && squares[getCubeSquareIndex('w' + 7)].colour == "red" && squares[getCubeSquareIndex('o' + 9)].colour == "green"){
        R();
        U();
        Rx();
        U2();
        R();
        U();
        Rx();
    }

    //position 2
    if(squares[getCubeSquareIndex('g' + 3)].colour == "red" && squares[getCubeSquareIndex('w' + 9)].colour == "yellow" && squares[getCubeSquareIndex('r' + 7)].colour == "green"){
        sexyMove();
        sexyMove();
        sexyMove();
    }
    if(squares[getCubeSquareIndex('g' + 3)].colour == "green" && squares[getCubeSquareIndex('w' + 9)].colour == "red" && squares[getCubeSquareIndex('r' + 7)].colour == "yellow"){
        U();
        R();
        U();
        Rx();
        U2();
        R();
        U();
        Rx();
    }
    if(squares[getCubeSquareIndex('g' + 3)].colour == "yellow" && squares[getCubeSquareIndex('w' + 9)].colour == "green" && squares[getCubeSquareIndex('r' + 7)].colour == "red"){
        Ux();
        R();
        Ux();
        Rx();
        U2();
        R();
        Ux();
        Rx();
    }

    //position 3
    if(squares[getCubeSquareIndex('g' + 7)].colour == "green" && squares[getCubeSquareIndex('o' + 7)].colour == "yellow" && squares[getCubeSquareIndex('y' + 1)].colour == "red"){
        Lx();
        U2();
        L();
        R();
        Ux();
        Rx();
        U2();
        R();
        Ux();
        Rx();
    }
    if(squares[getCubeSquareIndex('g' + 7)].colour == "yellow" && squares[getCubeSquareIndex('o' + 7)].colour == "red" && squares[getCubeSquareIndex('y' + 1)].colour == "green"){
        Lx();
        Ux();
        L();
        sexyMove();
        sexyMove();
        sexyMove();
    }
    if(squares[getCubeSquareIndex('g' + 7)].colour == "red" && squares[getCubeSquareIndex('o' + 7)].colour == "green" && squares[getCubeSquareIndex('y' + 1)].colour == "yellow"){
        D();
        R();
        U();
        Rx();
        Dx();
        R();
        Ux();
        Rx();
    }

    //position 4
    if(squares[getCubeSquareIndex('g' + 9)].colour == "yellow" && squares[getCubeSquareIndex('r' + 9)].colour == "green" && squares[getCubeSquareIndex('y' + 3)].colour == "red"){
        R();
        Ux();
        Rx();
        Ux();
        R();
        U();
        Rx();
        U2();
        R();
        Ux();
        Rx();
    }
    if(squares[getCubeSquareIndex('g' + 9)].colour == "red" && squares[getCubeSquareIndex('r' + 9)].colour == "yellow" && squares[getCubeSquareIndex('y' + 3)].colour == "green"){
        R();
        Ux();
        Rx();
        U();
        R();
        U2();
        Rx();
        U();
        R();
        Ux();
        Rx();
    }

    //position 5
    if(squares[getCubeSquareIndex('w' + 1)].colour == "green" && squares[getCubeSquareIndex('o' + 3)].colour == "red" && squares[getCubeSquareIndex('b' + 7)].colour == "yellow"){
        U();
        R();
        Ux();
        Rx();
        U2();
        R();
        Ux();
        Rx();
    }
    if(squares[getCubeSquareIndex('w' + 1)].colour == "yellow" && squares[getCubeSquareIndex('o' + 3)].colour == "green" && squares[getCubeSquareIndex('b' + 7)].colour == "red"){
        U2();
        sexyMove();
        sexyMove();
        sexyMove();
    }
    if(squares[getCubeSquareIndex('w' + 1)].colour == "red" && squares[getCubeSquareIndex('o' + 3)].colour == "yellow" && squares[getCubeSquareIndex('b' + 7)].colour == "green"){
        Ux();
        R();
        U();
        Rx();
        U2();
        R();
        U();
        Rx();
    }

    //position 6
    if(squares[getCubeSquareIndex('w' + 3)].colour == "green" && squares[getCubeSquareIndex('r' + 1)].colour == "yellow" && squares[getCubeSquareIndex('b' + 9)].colour == "red"){
        R();
        Ux();
        Rx();
        U2();
        R();
        Ux();
        Rx();
    }
    if(squares[getCubeSquareIndex('w' + 3)].colour == "yellow" && squares[getCubeSquareIndex('r' + 1)].colour == "red" && squares[getCubeSquareIndex('b' + 9)].colour == "green"){
        U();
        sexyMove();
        sexyMove();
        sexyMove();
    }
    if(squares[getCubeSquareIndex('w' + 3)].colour == "red" && squares[getCubeSquareIndex('r' + 1)].colour == "green" && squares[getCubeSquareIndex('b' + 9)].colour == "yellow"){
        U2();
        R();
        U();
        Rx();
        U2();
        R();
        U();
        Rx();
    }

    //position 7
    if(squares[getCubeSquareIndex('b' + 1)].colour == "green" && squares[getCubeSquareIndex('o' + 1)].colour == "red" && squares[getCubeSquareIndex('y' + 7)].colour == "yellow"){
        D2();
        R();
        U();
        Rx();
        D2();
        R();
        Ux();
        Rx();
    }
    if(squares[getCubeSquareIndex('b' + 1)].colour == "yellow" && squares[getCubeSquareIndex('o' + 1)].colour == "green" && squares[getCubeSquareIndex('y' + 7)].colour == "red"){
        L();
        U2();
        Lx();
        sexyMove();
        sexyMove();
        sexyMove();
    }
    if(squares[getCubeSquareIndex('b' + 1)].colour == "red" && squares[getCubeSquareIndex('o' + 1)].colour == "yellow" && squares[getCubeSquareIndex('y' + 7)].colour == "green"){
        L();
        Ux();
        Lx();
        U2();
        sexyMove();
        sexyMove();
        sexyMove();
    }

    //position 8
    if(squares[getCubeSquareIndex('b' + 3)].colour == "green" && squares[getCubeSquareIndex('r' + 3)].colour == "yellow" && squares[getCubeSquareIndex('y' + 9)].colour == "red"){
        Rx();
        U();
        R();
        U();
        sexyMove();
        sexyMove();
        sexyMove();
    }
    if(squares[getCubeSquareIndex('b' + 3)].colour == "yellow" && squares[getCubeSquareIndex('r' + 3)].colour == "red" && squares[getCubeSquareIndex('y' + 9)].colour == "green"){
        Rx();
        U2();
        R();
        Ux();
        sexyMove();
        sexyMove();
        sexyMove();
    }
    if(squares[getCubeSquareIndex('b' + 3)].colour == "red" && squares[getCubeSquareIndex('r' + 3)].colour == "green" && squares[getCubeSquareIndex('y' + 9)].colour == "yellow"){
        Dx();
        R();
        U();
        Rx();
        D();
        R();
        Ux();
        Rx();
    }
}

function solveGreenAndOrangePair(){
    //Solve edge
    if(squares[getCubeSquareIndex('g' + 4)].colour == "orange" && squares[getCubeSquareIndex('o' + 8)].colour == "green"){
        Lx();
        Ux();
        L();
        U();
        F();
        Ux();
        Fx();
    }
    if(squares[getCubeSquareIndex('g' + 2)].colour == "green" && squares[getCubeSquareIndex('w' + 8)].colour == "orange"){
        U();
        F();
        Ux();
        Fx();
    }
    if(squares[getCubeSquareIndex('g' + 2)].colour == "orange" && squares[getCubeSquareIndex('w' + 8)].colour == "green"){
        Lx();
        U();
        L();
    }
    if(squares[getCubeSquareIndex('r' + 4)].colour == "orange" && squares[getCubeSquareIndex('w' + 6)].colour == "green"){
        Lx();
        U2();
        L();
    }
    if(squares[getCubeSquareIndex('r' + 4)].colour == "green" && squares[getCubeSquareIndex('w' + 6)].colour == "orange"){
        F();
        U();
        Fx();
    }
    if(squares[getCubeSquareIndex('o' + 6)].colour == "orange" && squares[getCubeSquareIndex('w' + 4)].colour == "green"){
        U();
        Lx();
        Ux();
        L();
    }
    if(squares[getCubeSquareIndex('o' + 6)].colour == "green" && squares[getCubeSquareIndex('w' + 4)].colour == "orange"){
        F();
        Ux();
        Fx();
    }
    if(squares[getCubeSquareIndex('b' + 6)].colour == "green" && squares[getCubeSquareIndex('r' + 2)].colour == "orange"){
        Rx();
        Lx();
        U2();
        L();
        R();
    }
    if(squares[getCubeSquareIndex('b' + 6)].colour == "orange" && squares[getCubeSquareIndex('r' + 2)].colour == "green"){
        F();
        Rx();
        U();
        R();
        Fx();
    }
    if(squares[getCubeSquareIndex('b' + 8)].colour == "green" && squares[getCubeSquareIndex('w' + 2)].colour == "orange"){
        F();
        U2();
        Fx();
    }
    if(squares[getCubeSquareIndex('b' + 8)].colour == "orange" && squares[getCubeSquareIndex('w' + 2)].colour == "green"){
        Lx();
        Ux();
        L();
    }
    if(squares[getCubeSquareIndex('b' + 4)].colour == "green" && squares[getCubeSquareIndex('o' + 2)].colour == "orange"){
        L();
        Ux();
        L2();
        U();
        L();
    }
    if(squares[getCubeSquareIndex('b' + 4)].colour == "orange" && squares[getCubeSquareIndex('o' + 2)].colour == "green"){
        L();
        U2();
        Lx();
        F();
        U();
        Fx();
    }

    //Solve pair

    //position 1
    if(squares[getCubeSquareIndex('g' + 1)].colour == "orange" && squares[getCubeSquareIndex('w' + 7)].colour == "yellow" && squares[getCubeSquareIndex('o' + 9)].colour == "green"){
        sexyMoveLeft();
        sexyMoveLeft();
        sexyMoveLeft();
    }
    if(squares[getCubeSquareIndex('g' + 1)].colour == "green" && squares[getCubeSquareIndex('w' + 7)].colour == "orange" && squares[getCubeSquareIndex('o' + 9)].colour == "yellow"){
        Ux();
        Lx();
        Ux();
        L();
        U2();
        Lx();
        Ux();
        L();
    }
    if(squares[getCubeSquareIndex('g' + 1)].colour == "yellow" && squares[getCubeSquareIndex('w' + 7)].colour == "green" && squares[getCubeSquareIndex('o' + 9)].colour == "orange"){
        U();
        Lx();
        U();
        L();
        U2();
        Lx();
        U();
        L();
    }

    //position 2
    if(squares[getCubeSquareIndex('g' + 3)].colour == "orange" && squares[getCubeSquareIndex('w' + 9)].colour == "green" && squares[getCubeSquareIndex('r' + 7)].colour == "yellow"){
        U2();
        Lx();
        U();
        L();
        U2();
        Lx();
        U();
        L();
    }
    if(squares[getCubeSquareIndex('g' + 3)].colour == "yellow" && squares[getCubeSquareIndex('w' + 9)].colour == "orange" && squares[getCubeSquareIndex('r' + 7)].colour == "green"){
        Lx();
        Ux();
        L();
        U2();
        Lx();
        Ux();
        L();
    }
    if(squares[getCubeSquareIndex('g' + 3)].colour == "green" && squares[getCubeSquareIndex('w' + 9)].colour == "yellow" && squares[getCubeSquareIndex('r' + 7)].colour == "orange"){
        U();
        sexyMoveLeft();
        sexyMoveLeft();
        sexyMoveLeft();
    }

    //position 3
    if(squares[getCubeSquareIndex('g' + 7)].colour == "yellow" && squares[getCubeSquareIndex('o' + 7)].colour == "green" && squares[getCubeSquareIndex('y' + 1)].colour == "orange"){
        Lx();
        U();
        L();
        U();
        Lx();
        Ux();
        L();
        U2();
        Lx();
        U();
        L();
    }
    if(squares[getCubeSquareIndex('g' + 7)].colour == "orange" && squares[getCubeSquareIndex('o' + 7)].colour == "yellow" && squares[getCubeSquareIndex('y' + 1)].colour == "green"){
        Lx();
        U();
        L();
        Ux();
        Lx();
        U2();
        L();
        Ux();
        Lx();
        U();
        L();
    }

    //position 5
    if(squares[getCubeSquareIndex('w' + 1)].colour == "yellow" && squares[getCubeSquareIndex('o' + 3)].colour == "orange" && squares[getCubeSquareIndex('b' + 7)].colour == "green"){
        Ux();
        sexyMoveLeft();
        sexyMoveLeft();
        sexyMoveLeft();
    }
    if(squares[getCubeSquareIndex('w' + 1)].colour == "green" && squares[getCubeSquareIndex('o' + 3)].colour == "yellow" && squares[getCubeSquareIndex('b' + 7)].colour == "orange"){
        Lx();
        U();
        L();
        U2();
        Lx();
        U();
        L();
    }
    if(squares[getCubeSquareIndex('w' + 1)].colour == "orange" && squares[getCubeSquareIndex('o' + 3)].colour == "green" && squares[getCubeSquareIndex('b' + 7)].colour == "yellow"){
        Lx();
        U2();
        L();
        Ux();
        Lx();
        Ux();
        L();
    }

    //position 6
    if(squares[getCubeSquareIndex('w' + 3)].colour == "yellow" && squares[getCubeSquareIndex('r' + 1)].colour == "green" && squares[getCubeSquareIndex('b' + 9)].colour == "orange"){
        U2();
        sexyMoveLeft();
        sexyMoveLeft();
        sexyMoveLeft();
    }
    if(squares[getCubeSquareIndex('w' + 3)].colour == "green" && squares[getCubeSquareIndex('r' + 1)].colour == "orange" && squares[getCubeSquareIndex('b' + 9)].colour == "yellow"){
        Ux();
        Lx();
        U();
        L();
        U2();
        Lx();
        U();
        L();
    }
    if(squares[getCubeSquareIndex('w' + 3)].colour == "orange" && squares[getCubeSquareIndex('r' + 1)].colour == "yellow" && squares[getCubeSquareIndex('b' + 9)].colour == "green"){
        Ux();
        Lx();
        U2();
        L();
        Ux();
        Lx();
        Ux();
        L();
    }

    //position 7
    if(squares[getCubeSquareIndex('b' + 1)].colour == "green" && squares[getCubeSquareIndex('o' + 1)].colour == "yellow" && squares[getCubeSquareIndex('y' + 7)].colour == "orange"){
        L();
        Ux();
        Lx();
        Ux();
        sexyMoveLeft();
        sexyMoveLeft();
        sexyMoveLeft();
    }
    if(squares[getCubeSquareIndex('b' + 1)].colour == "yellow" && squares[getCubeSquareIndex('o' + 1)].colour == "orange" && squares[getCubeSquareIndex('y' + 7)].colour == "green"){
        L();
        U2();
        Lx();
        U();
        sexyMoveLeft();
        sexyMoveLeft();
        sexyMoveLeft();
    }
    if(squares[getCubeSquareIndex('b' + 1)].colour == "orange" && squares[getCubeSquareIndex('o' + 1)].colour == "green" && squares[getCubeSquareIndex('y' + 7)].colour == "yellow"){
        D();
        Lx();
        Ux();
        L();
        Dx();
        Lx();
        U();
        L();
    }

    //position 8
    if(squares[getCubeSquareIndex('b' + 3)].colour == "green" && squares[getCubeSquareIndex('r' + 3)].colour == "orange" && squares[getCubeSquareIndex('y' + 9)].colour == "yellow"){
        D2();
        Lx();
        Ux();
        L();
        D2();
        Lx();
        U();
        L();
    }
    if(squares[getCubeSquareIndex('b' + 3)].colour == "yellow" && squares[getCubeSquareIndex('r' + 3)].colour == "green" && squares[getCubeSquareIndex('y' + 9)].colour == "orange"){
        Rx();
        U2();
        R();
        sexyMoveLeft();
        sexyMoveLeft();
        sexyMoveLeft();
    }
    if(squares[getCubeSquareIndex('b' + 3)].colour == "orange" && squares[getCubeSquareIndex('r' + 3)].colour == "yellow" && squares[getCubeSquareIndex('y' + 9)].colour == "green"){
        Rx();
        U();
        R();
        U2();
        sexyMoveLeft();
        sexyMoveLeft();
        sexyMoveLeft();
    }
}

function solveOrangeAndBluePair(){

    //Solve edge
    if(squares[getCubeSquareIndex('g' + 2)].colour == "blue" && squares[getCubeSquareIndex('w' + 8)].colour == "orange"){
        Bx();
        U2();
        B();
    }
    if(squares[getCubeSquareIndex('g' + 2)].colour == "orange" && squares[getCubeSquareIndex('w' + 8)].colour == "blue"){
        L();
        U();
        Lx();
    }
    if(squares[getCubeSquareIndex('r' + 4)].colour == "orange" && squares[getCubeSquareIndex('w' + 6)].colour == "blue"){
        L();
        U2();
        Lx();
    }
    if(squares[getCubeSquareIndex('r' + 4)].colour == "blue" && squares[getCubeSquareIndex('w' + 6)].colour == "orange"){
        Bx();
        Ux();
        B();
    }
    if(squares[getCubeSquareIndex('o' + 6)].colour == "orange" && squares[getCubeSquareIndex('w' + 4)].colour == "blue"){
        U();
        L();
        Ux();
        Lx();
    }
    if(squares[getCubeSquareIndex('o' + 6)].colour == "blue" && squares[getCubeSquareIndex('w' + 4)].colour == "orange"){
        Bx();
        U();
        B();
    }
    if(squares[getCubeSquareIndex('b' + 6)].colour == "blue" && squares[getCubeSquareIndex('r' + 2)].colour == "orange"){
        Rx();
        L();
        U2();
        Lx();
        R();
    }
    if(squares[getCubeSquareIndex('b' + 6)].colour == "orange" && squares[getCubeSquareIndex('r' + 2)].colour == "blue"){
        Rx();
        U2();
        R();
        Bx();
        U();
        B();
    }
    if(squares[getCubeSquareIndex('b' + 8)].colour == "blue" && squares[getCubeSquareIndex('w' + 2)].colour == "orange"){
        Ux();
        Bx();
        U();
        B();
    }
    if(squares[getCubeSquareIndex('b' + 8)].colour == "orange" && squares[getCubeSquareIndex('w' + 2)].colour == "blue"){
        L();
        Ux();
        Lx();
    }
    if(squares[getCubeSquareIndex('b' + 4)].colour == "orange" && squares[getCubeSquareIndex('o' + 2)].colour == "blue"){
        L();
        U();
        Lx();
        Ux();
        Bx();
        U();
        B();
    }

    //Solve pair

    //position 1
    if(squares[getCubeSquareIndex('g' + 1)].colour == "blue" && squares[getCubeSquareIndex('w' + 7)].colour == "yellow" && squares[getCubeSquareIndex('o' + 9)].colour == "orange"){
        L();
        U();
        Lx();
        Ux();
        L();
        U();
        Lx();
        U();
        L();
        Ux();
        Lx();
    }
    if(squares[getCubeSquareIndex('g' + 1)].colour == "orange" && squares[getCubeSquareIndex('w' + 7)].colour == "blue" && squares[getCubeSquareIndex('o' + 9)].colour == "yellow"){
        L();
        Ux();
        Lx();
        U2();
        L();
        Ux();
        Lx();
    }
    if(squares[getCubeSquareIndex('g' + 1)].colour == "yellow" && squares[getCubeSquareIndex('w' + 7)].colour == "orange" && squares[getCubeSquareIndex('o' + 9)].colour == "blue"){
        U2();
        L();
        U();
        Lx();
        U2();
        L();
        U();
        Lx();
    }

    //position 2
    if(squares[getCubeSquareIndex('g' + 3)].colour == "orange" && squares[getCubeSquareIndex('w' + 9)].colour == "yellow" && squares[getCubeSquareIndex('r' + 7)].colour == "blue"){
        L();
        Ux();
        Lx();
        U();
        L();
        U();
        Lx();
        U();
        L();
        Ux();
        Lx();
    }
    if(squares[getCubeSquareIndex('g' + 3)].colour == "yellow" && squares[getCubeSquareIndex('w' + 9)].colour == "blue" && squares[getCubeSquareIndex('r' + 7)].colour == "orange"){
        U();
        L();
        Ux();
        Lx();
        U2();
        L();
        Ux();
        Lx();
    }
    if(squares[getCubeSquareIndex('g' + 3)].colour == "blue" && squares[getCubeSquareIndex('w' + 9)].colour == "orange" && squares[getCubeSquareIndex('r' + 7)].colour == "yellow"){
        Ux();
        L();
        U();
        Lx();
        U2();
        L();
        U();
        Lx();
    }

    //position 5
    if(squares[getCubeSquareIndex('w' + 1)].colour == "yellow" && squares[getCubeSquareIndex('o' + 3)].colour == "blue" && squares[getCubeSquareIndex('b' + 7)].colour == "orange"){
        U();
        L();
        U();
        Lx();
        Ux();
        L();
        U2();
        Lx();
        U();
        L();
        Ux();
        Lx();
    }
    if(squares[getCubeSquareIndex('w' + 1)].colour == "blue" && squares[getCubeSquareIndex('o' + 3)].colour == "orange" && squares[getCubeSquareIndex('b' + 7)].colour == "yellow"){
        Ux();
        L();
        Ux();
        Lx();
        U2();
        L();
        Ux();
        Lx();
    }
    if(squares[getCubeSquareIndex('w' + 1)].colour == "orange" && squares[getCubeSquareIndex('o' + 3)].colour == "yellow" && squares[getCubeSquareIndex('b' + 7)].colour == "blue"){
        U();
        L();
        U();
        Lx();
        U2();
        L();
        U();
        Lx();
    }

    //position 6
    if(squares[getCubeSquareIndex('w' + 3)].colour == "yellow" && squares[getCubeSquareIndex('r' + 1)].colour == "orange" && squares[getCubeSquareIndex('b' + 9)].colour == "blue"){
        L();
        U();
        Lx();
        Ux();
        L();
        U2();
        Lx();
        U();
        L();
        Ux();
        Lx();
    }
    if(squares[getCubeSquareIndex('w' + 3)].colour == "blue" && squares[getCubeSquareIndex('r' + 1)].colour == "yellow" && squares[getCubeSquareIndex('b' + 9)].colour == "orange"){
        U2();
        L();
        Ux();
        Lx();
        U2();
        L();
        Ux();
        Lx();
    }
    if(squares[getCubeSquareIndex('w' + 3)].colour == "orange" && squares[getCubeSquareIndex('r' + 1)].colour == "blue" && squares[getCubeSquareIndex('b' + 9)].colour == "yellow"){
        L();
        U();
        Lx();
        U2();
        L();
        U();
        Lx();
    }

    //position 7
    if(squares[getCubeSquareIndex('b' + 1)].colour == "yellow" && squares[getCubeSquareIndex('o' + 1)].colour == "blue" && squares[getCubeSquareIndex('y' + 7)].colour == "orange"){
        L();
        Ux();
        Lx();
        Ux();
        L();
        U();
        Lx();
        U2();
        L();
        Ux();
        Lx();
    }
    if(squares[getCubeSquareIndex('b' + 1)].colour == "orange" && squares[getCubeSquareIndex('o' + 1)].colour == "yellow" && squares[getCubeSquareIndex('y' + 7)].colour == "blue"){
        L();
        Ux();
        Lx();
        U();
        L();
        U2();
        Lx();
        U();
        L();
        Ux();
        Lx();
    }

    //position 8
    if(squares[getCubeSquareIndex('b' + 3)].colour == "blue" && squares[getCubeSquareIndex('r' + 3)].colour == "yellow" && squares[getCubeSquareIndex('y' + 9)].colour == "orange"){
        Rx();
        U2();
        R();
        L();
        Ux();
        Lx();
        U2();
        L();
        Ux();
        Lx();
    }
    if(squares[getCubeSquareIndex('b' + 3)].colour == "yellow" && squares[getCubeSquareIndex('r' + 3)].colour == "orange" && squares[getCubeSquareIndex('y' + 9)].colour == "blue"){
        Rx();
        U();
        R();
        L();
        U();
        Lx();
        U2();
        L();
        U();
        Lx();
    }
    if(squares[getCubeSquareIndex('b' + 3)].colour == "orange" && squares[getCubeSquareIndex('r' + 3)].colour == "blue" && squares[getCubeSquareIndex('y' + 9)].colour == "yellow"){
        D();
        L();
        U();
        Lx();
        Dx();
        L();
        Ux();
        Lx();
    }
}

function solveBlueAndRedPair(){

    //Solve edge
    if(squares[getCubeSquareIndex('g' + 2)].colour == "blue" && squares[getCubeSquareIndex('w' + 8)].colour == "red"){
        B();
        U2();
        Bx();
    }
    if(squares[getCubeSquareIndex('g' + 2)].colour == "red" && squares[getCubeSquareIndex('w' + 8)].colour == "blue"){
        Rx();
        Ux();
        R();
    }
    if(squares[getCubeSquareIndex('r' + 4)].colour == "red" && squares[getCubeSquareIndex('w' + 6)].colour == "blue"){
        U();
        Rx();
        Ux();
        R();
    }
    if(squares[getCubeSquareIndex('r' + 4)].colour == "blue" && squares[getCubeSquareIndex('w' + 6)].colour == "red"){
        B();
        Ux();
        Bx();
    }
    if(squares[getCubeSquareIndex('o' + 6)].colour == "red" && squares[getCubeSquareIndex('w' + 4)].colour == "blue"){
        Rx();
        U2();
        R();
    }
    if(squares[getCubeSquareIndex('o' + 6)].colour == "blue" && squares[getCubeSquareIndex('w' + 4)].colour == "red"){
        B();
        U();
        Bx();
    }
    if(squares[getCubeSquareIndex('b' + 6)].colour == "red" && squares[getCubeSquareIndex('r' + 2)].colour == "blue"){
        Rx();
        Ux();
        R();
        U();
        B();
        Ux();
        Bx();
    }
    if(squares[getCubeSquareIndex('b' + 8)].colour == "blue" && squares[getCubeSquareIndex('w' + 2)].colour == "red"){
        U();
        B();
        Ux();
        Bx();
    }
    if(squares[getCubeSquareIndex('b' + 8)].colour == "red" && squares[getCubeSquareIndex('w' + 2)].colour == "blue"){
        Rx();
        U();
        R();
    }

    //Solve pair

    //position 1
    if(squares[getCubeSquareIndex('g' + 1)].colour == "blue" && squares[getCubeSquareIndex('w' + 7)].colour == "red" && squares[getCubeSquareIndex('o' + 9)].colour == "yellow"){
        U();
        Rx();
        Ux();
        R();
        U2();
        Rx();
        Ux();
        R();
    }
    if(squares[getCubeSquareIndex('g' + 1)].colour == "red" && squares[getCubeSquareIndex('w' + 7)].colour == "yellow" && squares[getCubeSquareIndex('o' + 9)].colour == "blue"){
        Rx();
        U();
        R();
        Ux();
        Rx();
        Ux();
        R();
        Ux();
        Rx();
        U();
        R();
    }
    if(squares[getCubeSquareIndex('g' + 1)].colour == "yellow" && squares[getCubeSquareIndex('w' + 7)].colour == "blue" && squares[getCubeSquareIndex('o' + 9)].colour == "red"){
        Ux();
        Rx();
        U();
        R();
        U2();
        Rx();
        U();
        R();
    }

    //position 2
    if(squares[getCubeSquareIndex('g' + 3)].colour == "red" && squares[getCubeSquareIndex('w' + 9)].colour == "blue" && squares[getCubeSquareIndex('r' + 7)].colour == "yellow"){
        Rx();
        U();
        R();
        U2();
        Rx();
        U();
        R();
    }
    if(squares[getCubeSquareIndex('g' + 3)].colour == "yellow" && squares[getCubeSquareIndex('w' + 9)].colour == "red" && squares[getCubeSquareIndex('r' + 7)].colour == "blue"){
        Rx();
        U2();
        R();
        Ux();
        Rx();
        Ux();
        R();
    }
    if(squares[getCubeSquareIndex('g' + 3)].colour == "blue" && squares[getCubeSquareIndex('w' + 9)].colour == "yellow" && squares[getCubeSquareIndex('r' + 7)].colour == "red"){
        Rx();
        Ux();
        R();
        U();
        Rx();
        Ux();
        R();
        Ux();
        Rx();
        U();
        R();
    }

    //position 5
    if(squares[getCubeSquareIndex('w' + 1)].colour == "yellow" && squares[getCubeSquareIndex('o' + 3)].colour == "red" && squares[getCubeSquareIndex('b' + 7)].colour == "blue"){
        Rx();
        Ux();
        R();
        U();
        Rx();
        U2();
        R();
        Ux();
        Rx();
        U();
        R();
    }
    if(squares[getCubeSquareIndex('w' + 1)].colour == "blue" && squares[getCubeSquareIndex('o' + 3)].colour == "yellow" && squares[getCubeSquareIndex('b' + 7)].colour == "red"){
        U2();
        Rx();
        U();
        R();
        U2();
        Rx();
        U();
        R();
    }
    if(squares[getCubeSquareIndex('w' + 1)].colour == "red" && squares[getCubeSquareIndex('o' + 3)].colour == "blue" && squares[getCubeSquareIndex('b' + 7)].colour == "yellow"){
        Rx();
        Ux();
        R();
        U2();
        Rx();
        Ux();
        R();
    }

    //position 6
    if(squares[getCubeSquareIndex('w' + 3)].colour == "yellow" && squares[getCubeSquareIndex('r' + 1)].colour == "blue" && squares[getCubeSquareIndex('b' + 9)].colour == "red"){
        Rx();
        Ux();
        R();
        U();
        Rx();
        Ux();
        R();
        U();
        Rx();
        Ux();
        R();
        U();
    }
    if(squares[getCubeSquareIndex('w' + 3)].colour == "blue" && squares[getCubeSquareIndex('r' + 1)].colour == "red" && squares[getCubeSquareIndex('b' + 9)].colour == "yellow"){
        U();
        Rx();
        U();
        R();
        U2();
        Rx();
        U();
        R();
    }
    if(squares[getCubeSquareIndex('w' + 3)].colour == "red" && squares[getCubeSquareIndex('r' + 1)].colour == "yellow" && squares[getCubeSquareIndex('b' + 9)].colour == "blue"){
        Ux();
        Rx();
        Ux();
        R();
        U2();
        Rx();
        Ux();
        R();
    }

    //position 8
    if(squares[getCubeSquareIndex('b' + 3)].colour == "yellow" && squares[getCubeSquareIndex('r' + 3)].colour == "blue" && squares[getCubeSquareIndex('y' + 9)].colour == "red"){
        Rx();
        U();
        R();
        U();
        Rx();
        Ux();
        R();
        U2();
        Rx();
        U();
        R();
    }
    if(squares[getCubeSquareIndex('b' + 3)].colour == "red" && squares[getCubeSquareIndex('r' + 3)].colour == "yellow" && squares[getCubeSquareIndex('y' + 9)].colour == "blue"){
        Rx();
        U();
        R();
        Ux();
        Rx();
        U2();
        R();
        Ux();
        Rx();
        U();
        R();
    }
}

function sexyMove(){
    R();
    U();
    Rx();
    Ux();
}

function sexyMoveLeft(){
    Lx();
    Ux();
    L();
    U();
}

function areOpposite(colour1, colour2){
  if(colour1 == "green" && colour2 == "blue"){
    return true;
  }
  if(colour1 == "blue" && colour2 == "green"){
    return true;
  }
  if(colour1 == "red" && colour2 == "orange"){
    return true;
  }
  if(colour1 == "orange" && colour2 == "red"){
    return true;
  }
  return false;
}

function areAdjacent(colour1, colour2){
  if(colour1 == "green" && colour2 == "red"){
    return true;
  }
  if(colour1 == "red" && colour2 == "green"){
    return true;
  }
  if(colour1 == "red" && colour2 == "blue"){
    return true;
  }
  if(colour1 == "blue" && colour2 == "red"){
    return true;
  }
  if(colour1 == "green" && colour2 == "orange"){
    return true;
  }
  if(colour1 == "orange" && colour2 == "green"){
    return true;
  }
  if(colour1 == "orange" && colour2 == "blue"){
    return true;
  }
  if(colour1 == "blue" && colour2 == "orange"){
    return true;
  }
  return false;
}

function AUF(){
  if(squares[getCubeSquareIndex('g' + 1)].colour == "blue"){
    U2();
  }
  if(squares[getCubeSquareIndex('g' + 1)].colour == "orange"){
    U();
  }
  if(squares[getCubeSquareIndex('g' + 1)].colour == "red"){
    Ux();
  }
}

function notSolved(){
  if(squares[getCubeSquareIndex('g' + 1)].colour != squares[getCubeSquareIndex('g' + 2)].colour ||
  squares[getCubeSquareIndex('g' + 1)].colour != squares[getCubeSquareIndex('g' + 3)].colour||
  squares[getCubeSquareIndex('g' + 3)].colour != squares[getCubeSquareIndex('g' + 2)].colour||
  squares[getCubeSquareIndex('r' + 1)].colour != squares[getCubeSquareIndex('r' + 4)].colour||
  squares[getCubeSquareIndex('r' + 1)].colour != squares[getCubeSquareIndex('r' + 7)].colour||
  squares[getCubeSquareIndex('r' + 4)].colour != squares[getCubeSquareIndex('r' + 7)].colour){
    return true;
  }
  return false;
}

function addToSolution(moveName){
  if(solved == false){
  // if(moveName.charAt(1) == 'x'){
  //     document.getElementById('solution').innerHTML += moveName.charAt(0) + "' ";
  // } else {
  document.getElementById('solution').innerHTML += moveName + " ";
  moveCount++;
  //}
  }
}
