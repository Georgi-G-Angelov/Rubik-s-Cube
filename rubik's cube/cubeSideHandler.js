function setSide(color) {
  var blueAvg = 0;
  var redAvg = 0;
  var greenAvg = 0;
  for (var i = 0; i < 9; i++) {
    blueAvg = 0;
    redAvg = 0;
    greenAvg = 0;
    var counter = 0;
    for (var x = 55 + (i % 3) * 70 + 30; x < 55 + (i % 3) * 70 + 40; x++) {
      for (var y = 15 + (i / 3) * 70 + 30; y < 15 + (i / 3) * 70 + 40; y++) {
        redAvg += getPixel(x,y)[0];
        greenAvg += getPixel(x,y)[1];
        blueAvg += getPixel(x,y)[2];
        counter++;
      }
    }
    // for (var x = 10; x < 15; x++) {
    //   for (var y = 10; y < 15; y++) {
    //     redAvg += getPixel(x,y)[0];
    //     greenAvg += getPixel(x,y)[1];
    //     blueAvg += getPixel(x,y)[2];
    //     counter++;
    //     console.log('--------');
    //     console.log(redAvg + ', ' + greenAvg + ', ' + blueAvg);
    //     console.log('counter: ' + counter);
    //   }
    // }
    redAvg /= counter;
    greenAvg /= counter;
    blueAvg /= counter;
    //console.log('**************');
    //console.log(redAvg + ', ' + greenAvg + ', ' + blueAvg);
    setTile(color, i + 1, redAvg, greenAvg, blueAvg);
  }
}

function setTile(sideColor, number, red, green, blue) {
  var squareID = sideColor + number;
  var square = document.getElementById(squareID);
  var color = "";
//  square.style.backgroundColor = "white";

  if (green > blue && green > red) {
    color = "green";
  }
  if (blue > green && blue > red) {
    color = "blue";
  }
  if (red > blue && red > green) {
    color = "red";
  }
  if (red > 180 && green > 180 && blue > 180) {
    color = "white";
  }
  if (red > 230 && green > 230 && blue < 160) {
    color = "yellow";
  }
  if (red > 200 && blue < 100 && green > 100 && green < 200) {
    color = "orange";
  }
  if (color == "") {
    color = "white";
  }
  square.style.backgroundColor = color;
  //squares[getCubeSquareIndex(color + number)].colour = color;
}

function getPixel(x, y) {
  var img = document.getElementById('image');
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  context.drawImage(img, 0, 0);
  //console.log(context.getImageData(x, y, 1, 1));
  return context.getImageData(x, y, 1, 1).data;
}
