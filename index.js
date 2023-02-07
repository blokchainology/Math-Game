let operators=['+','-','*',]
let container=document.querySelector('.container')
let containerResult=document.querySelector('.result-container')
let startBtn=document.querySelector('.start-btn')
let question=document.querySelector('.question')
let submitBtn=document.querySelector('.submit-btn')
let result=document.querySelector('.result')
let error=document.querySelector('.error')
let AnswerVal;
let operatorVal;

startBtn.addEventListener('click',function(){
    error.innerHTML=''
    operatorVal=false;
    container.style.display='block'
    containerResult.style.display='none'
    Genarator()
    
})

function Genarator(){
    let numRandom = (min,max) => Math.floor(Math.random()*(max-min))+min;
    let num1=numRandom(1,15)
    let num2=numRandom(1,15)

    let operatRandom=operators[Math.floor(Math.random()*operators.length)]
    
    let answer=eval(`${num1}${operatRandom}${num2}`)

    let randomVal=numRandom(1,5)

    if(randomVal==1){
        AnswerVal=num1
        question.innerHTML=`<input type='number' id='input' placeholder='?'\> ${operatRandom} ${num2} = ${answer}`
    }else if(randomVal==2){
        AnswerVal=operatRandom
        operatorVal=true;
        question.innerHTML=`${num1}<input type='text' id='input' placeholder='?'\> ${num2} = ${answer}`
    }else if(randomVal==3){
        AnswerVal=num2
        question.innerHTML=`${num1} ${operatRandom} <input type='number' id='input' placeholder='?'\> = ${answer}`
    }else{
        AnswerVal=answer
        question.innerHTML=`${num1} ${operatRandom} ${num2} = <input type='number' id='input' placeholder='?'\>`
    }
}

submitBtn.addEventListener('click',function(){
    let inputValue=document.getElementById('input').value;
    if(inputValue){
        if(inputValue==AnswerVal){
            containerResult.style.display='block'
            container.style.display='none'
            result.style.color = "darkgreen"
            result.innerHTML='correct Answer'
        }else if(operatorVal && !operators.includes(inputValue)){
            error.innerHTML='Please Enter a Valid Operator'
        }else{
            containerResult.style.display='block'
            container.style.display='none'
            result.style.color = "red";
            result.innerHTML='Incorrect Answer'
        }
    }else{
        error.innerHTML='Input Cannot Be Empty'
    }
})
