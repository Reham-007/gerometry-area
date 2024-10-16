// ====  Ellipse Area function  ====

function calculateEllipseArea(){
    const majorRadius = getInputValueById('ellipse-major-radius');
    const minorRadius = getInputValueById('ellipse-minor-radius');
    const area = 3.14 * majorRadius * minorRadius;
    setInnertextId('ellipse-area',area);

}