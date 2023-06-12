//-------------------------------
//PART 1: EVENTS AND INTERACTIONS
//-------------------------------

//Lets fetch our div from the HTML so we can work with it

svg = document.getElementById("basesvg");
const rectangleDiv = document.getElementById("rectangle-div");
let width = 800;
let height = 600;
svg.setAttribute("width", width);
svg.setAttribute("height", height);
console.log(svg);


//function to draw the rectangle
function drawRect(x, y, w, h, fill) {
    let newRectangle = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    newRectangle.setAttribute("x", x);
    newRectangle.setAttribute("y", y);
    newRectangle.setAttribute("width", w);
    newRectangle.setAttribute("height", h);
    newRectangle.setAttribute('fill', fill);
    newRectangle.setAttribute('stroke',"black");
    svg.appendChild(newRectangle);
}

//function to draw the circle

function drawCircle(cx, cy, radius, colour) {
    let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    // Set attributes
    circle.setAttribute("cx", cx);
    circle.setAttribute("cy", cy);
    circle.setAttribute("r", radius);
    circle.setAttribute("fill", colour);
    circle.setAttribute("stroke", "black");
    svg.appendChild(circle);
}
// function to draw the ellipse
function drawEllipse(cx, cy, rx, ry, fill) {
    let newEllipse = document.createElementNS("http://www.w3.org/2000/svg","ellipse");
    newEllipse.setAttribute("cx", cx);
    newEllipse.setAttribute("cy", cy);
    newEllipse.setAttribute("rx", rx);
    newEllipse.setAttribute("ry", ry);
    newEllipse.setAttribute("fill", fill);
    newEllipse.setAttribute("stroke", "black");
    svg.appendChild(newEllipse);
}

//-------------------------------
//PART 2: BUTTONS
//-------------------------------

//Lets get our button element from the HTML so we can work with it.
const button = document.getElementById("button");
const colour = document.getElementById("colour");

//We will add an event listener, set so we can run code when a click event is received for the button
button.addEventListener("click", function(e) {
    drawRect(0,200,200,200,"white");
});


colour.addEventListener("click", function(e) {
    const rectangles = svg.getElementsByTagName("rect");

    // loop through rect and set their fill color
    for (let i = 0; i < rectangles.length; i++) {
    const randomColor = makeRGB();
    rectangles[i].setAttribute("fill", randomColor);
    }
});
// circle button
const circle = document.getElementById("circle");

circle.addEventListener("click", function(e) {
    drawCircle(330,300,100,"white");
});

colour.addEventListener("click", function(e) {
    const circles = svg.getElementsByTagName("circle");

    // loop through circ and set their fill color
    for (let i = 0; i < circles.length; i++) {
    const randomColor = makeRGB();
    circles[i].setAttribute("fill", randomColor);
    }
});

// ellipse button

const ellipseButton = document.getElementById("ellipse-button");

ellipseButton.addEventListener("click", function(e) {
    drawEllipse(600, 300, 150, 100,"white");
});

colour.addEventListener("click", function(e) {
    const ellipses = svg.getElementsByTagName("ellipse");
    // loop through ellipse and set their fill color
    for (let i = 0; i < ellipses.length; i++) {
        const randomColor = makeRGB();
        ellipses[i].setAttribute("fill", randomColor);
        }
    });
    
