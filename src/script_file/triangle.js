/*

const trinagle = document.getElementById('traingleCalculation').addEventListener('click',function(){

    let b = document.getElementById('inputB');
    let h = document.getElementById('inputH');
    let cem = document.getElementById('cem');
    let result = 0.5 * b.value * h.value;
    let  resultShow = document.getElementById('show-result');
    cem.hidden = false;

    resultShow.innerText=result;
    h.value = ' ';
    b.value = ' ';

})

*/

function triangleArea(){
  const base = findValueInputBox('inputB');
  const height = findValueInputBox('inputH');
const finalResult = calcultion(base,height);
   let  resultShow = document.getElementById('show-result');
    cem.hidden = false;

    resultShow.innerText=finalResult;
    h.value = ' ';
    b.value = ' ';



}


function calcultion(base, height){
    const area = 0.5 * base * height;
    return area;

}

function findValueInputBox(hasanBase){
    const valueMeter = document.getElementById(hasanBase);
    const  textValue = valueMeter.value;
    const realValue = parseFloat(textValue);
    return realValue;
}

