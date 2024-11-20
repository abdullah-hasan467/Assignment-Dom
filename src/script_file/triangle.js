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
