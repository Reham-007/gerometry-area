// ====  Pentagon Area function  ====

function calculatePentagonArea(){
    const perimeter =  getInputValueById('pentagon-perimeter');
    const apothem = getInputValueById('pentagon-apothem');
    
    const area = 0.5 * perimeter * apothem;
    setInnertextId('pentagon-area',area);
}



// ====  Get Input value global function  ====

// function getInputValueById(inputFieldId){
//     const inputField = document.getElementById(inputFieldId) ;
//     const inputValueText = inputField.value ;
//     const value = parseFloat(inputValueText) ;
//     return value ;


// }

// function setInnertextId(elementId, area){
//     const element = document.getElementById(elementId);
//     element.innerHTML = area;
// }