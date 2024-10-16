// ====  Get Input value global function  ====

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId) ;
    const inputValueText = inputField.value ;
    const value = parseFloat(inputValueText) ;
    return value ;


}

function setInnertextId(elementId, area){
    const element = document.getElementById(elementId);
    element.innerHTML = area;
}