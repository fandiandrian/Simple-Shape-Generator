
//
// Tutorial step 1
//

// Takes r, g, b parameters and returns an rgb() formattted string for css and svg color description.
function formatRGB(r, g, b) {
    return `rgb(${r}, ${g}, ${b})`
}

// Returns an integer between 0 to range
function randomInt(range) {
    return Math.round(Math.random() * range)
}

//
// Step two of tutorial makeRGB with optional values
//
function makeRGB(redInput, greenInput, blueInput) {
    // Process: input "or else" pick a random colour
    let redOutput = redInput ?? randomInt(255)
    let greenOutput = greenInput ?? randomInt(255)
    let blueOutput = blueInput ?? randomInt(255)

    // output the values
    return `rgb(${redOutput}, ${greenOutput}, ${blueOutput})`
}

//
// Week 4 content
//

function constrainHigh(start, step, limit) {
    if (start + step < limit) {
        return start + step
    }
    else {
        return start - step
    }
}

function constrainLow(start, step, limit) {
    if (start - step > limit) {
        return start - step
    }
    else {
        return start + step
    }
}


// w5//

function polarToX(angle,radius) {
    return Math.sin(angle) * radius
}

function polarToY(angle,radius) {
    return Math.cos(angle) * radi``
}

//This funtction just draws a line between the coordinates x1,y1 and x2, y2
function drawLine(x1, y1, x2, y2) {
    let newLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
    newLine.setAttribute("x1", x1);
    newLine.setAttribute("y1", y1);
    newLine.setAttribute("x2", x2);
    newLine.setAttribute("y2", y2);
    newLine.setAttribute("stroke", "black");
    newLine.setAttribute("stroke-width", "2");
    svg.appendChild(newLine);
  }
  
  
  // This function draws some text at position x, y
  function drawText(x, y, text) {
    let newText = document.createElementNS("http://www.w3.org/2000/svg", "text");
    newText.setAttribute("x", x);
    newText.setAttribute("y", y);
    newText.innerHTML = text;
    svg.appendChild(newText);
  }


/* 
  This function draws a line from the clock's position to a polar 
  coordinate
  We already know the first pair of coordinates clockX and clockY
  so we just need to calculate the last pair of coordinates
*/
function drawHourHand() {
    // First calculate the angle that determines the direction of the hour hand
    let angle = angleOffset + TWO_PI/12 * counter;
  
    /* 
      Then feed the angle into the Math.cos()/Math.sin() functions and
      multiply by the radius
    */
    let hourHandRadius = clockSize/2;
    let x2 = clockX + Math.cos(angle) * hourHandRadius;
    let y2 = clockY + Math.sin(angle) * hourHandRadius;
    /*
       clockX and clockY are added otherwise the coordinates
       will circle around the top-left corner of the <svg> element
    */
    
    drawLine(clockX, clockY, x2, y2);
  }
  
  // This function draws the numbers around the clock
  function drawClockNumbers() {
    /*
      A for-loop is used here since we can use the iterator
      i to advance the angle used to calculate the direction
      in which the number is drawn
      i is initialised at 1 and the condition for the loop
      to continue checks that i <= 12 so that we can use i 
      for drawText()'s third parameter
    */
    for (let i=1; i<=12; i++) {
      let angle = angleOffset + TWO_PI/12 * i;
      let numberRadius = clockSize*0.9;
      let x = clockX + Math.cos(angle) * numberRadius;
      let y = clockY + Math.sin(angle) * numberRadius;
  
      drawText(x, y, i);
    }
  }
  
  // This function brings together the functions we've defined to draw
  // all the features of our clock
  function drawClock() {
    // draw the clock base circle
    drawCircle(clockX, clockY, clockSize, makeRGB(127, 127, 127));
  
    drawClockNumbers();
  
    drawHourHand();
   
     // draw minute hand
   // drawHourHand(clockX, clockY, tick/60, clockSize/2);
  }

  


// Draw the design

/*for (let radius = 100; radius >= 0; radius -= 10) {
    for (let i = 10; i > 0; i--) { 
        let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        drawCircle(100,100,radius);
        // radius % 20 === 0)
        if (i % 2 === 0) {
            circle.setAttribute("fill",makeRGBOdd());
            console.log(makeRGBOdd());
        } else {
        circle.setAttribute("fill",makeRGBEven());
        console.log(makeRGBEven());
        }

    document.querySelector("svg").appendChild(circle);
    }
}
*/

/* drawCircle(100,100,100)
drawCircle(100,100,90)
drawCircle(100,100,80)
drawCircle(100,100,70)
drawCircle(100,100,60)
drawCircle(100,100,50)
drawCircle(100,100,40)
drawCircle(100,100,30)
drawCircle(100,100,20)
drawCircle(100,100,10)

*/

