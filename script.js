let inputVal, input, numOfPeople, tip, errorInfo, price, countInfo
let result =0


const prepareDOMElements = () =>{
    input = document.querySelector('#price')
    numOfPeople = document.querySelector('#people')
    tip = document.querySelector('#tip')
    countBtn = document.querySelector('.count')
    countInfo = document.querySelector('.count-info')
    errorInfo = document.querySelector('.error')
    price = document.querySelector('.price')
}

const prepareDOMEvents = () =>{
    countBtn.addEventListener('click',billCheck)
}

const billCheck = () =>{
    if(input.value.length==0 || numOfPeople.value.length==0 || tip.value==0)
    {
        errorInfo.style.display = 'block';
        countInfo.style.display="none"
        return false
    }
    else{
        errorInfo.style.display='none'
        calcTip()
        return true
    }
}
const calcTip = () =>{
        countInfo.style.display='block'
        price.style.display='block'

        price.textContent = ((Number(input.value)+Number(input.value)*Number(tip.value))/Number(numOfPeople.value)).toFixed(2)
}
const main = () =>{
    prepareDOMElements()
    prepareDOMEvents()
}

window.addEventListener('DOMContentLoaded',main)