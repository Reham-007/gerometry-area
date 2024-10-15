function calculateTriangleArea(){
    // get base input
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value ;
    const base = parseFloat(triangleBaseText);
    // console.log(base);
    // get height input
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value ;
    const height = parseFloat(triangleHeightText);
    // console.log(height);

    // calculate triangle area
    const triangleArea = 0.5 * base * height;
    // console.log(triangleArea);

    // display triangle area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerHTML = triangleArea;

}