// ====  Rectangular Area function  ====

function calculateRectangleArea(){
    const width = getInputValueById('rectangle-width');
    const length = getInputValueById('rectangle-length');
    const area = width * length;
    setInnertextId('rectangle-area',area);

}