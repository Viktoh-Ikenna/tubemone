const imgCont = document.querySelector('#co');
imgCont.style.transition = 'all 1s ease-in-out';
const arrowContainer = document.querySelectorAll('.forArrow')[0];
const buttons = document.querySelectorAll('.button')[0];
const leftArr = document.querySelectorAll('.left')[0];
const rightArr = document.querySelectorAll('.right')[0];
let counter = 0;

const slide = setInterval(() => {
  
    
    counter === 5 ? counter = 0 : counter = counter;
    
    imgCont.style.left = `-${counter}00%`;
    counter++;
}, 4000);

//slides arrows


arrowContainer.onmouseover =()=>{
   
    if(counter===0){
        leftArr.style.opacity ="0";
        rightArr.style.opacity ="1";
    }else{
        leftArr.style.opacity ="1";
        rightArr.style.opacity ="1";
    }
}
arrowContainer.onmouseout =()=>{
    leftArr.style.opacity ="0";
    rightArr.style.opacity ="0";
}
rightArr.onclick =()=>{
    if(counter<5){
        counter++;
        imgCont.style.left = `-${counter}00%`;
    }

}
leftArr.onclick =()=>{
    if(counter>0){
        counter--;
        imgCont.style.left = `-${counter}00%`;
    }

}