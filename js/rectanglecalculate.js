function calculateRectangleArea(){
    // get Width input
    const rectangleWidhtInput = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidhtInput.value ;
    const width = parseFloat(rectangleWidthText);
    // console.log(width);
    
    // get Length input
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLengthInput.value ;
    const length = parseFloat(rectangleLengthText);
    // console.log(length);

     // calculate triangle area
    const rectangleArea = width * length;
    // console.log(rectangleArea);

    // display triangle area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerHTML = rectangleArea; 

}