// ====  Parallelogram Area function  ====

function calculateParallelogramArea(){
    const base = getInputValueById('parallelogram-base');

    const height = getInputValueById('parallelogram-height')

    const area = base * height;
    setInnertextId('parallelogram-area', area);
 
}
