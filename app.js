const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const second = document.getElementById("second")
const milliSecond = document.getElementById("millisecond")
let mCount=0;
let sCount=0;

start.addEventListener("click",function(){
    myInterval = setInterval(() => {
     mCount++;
     if(mCount<99){
        if(mCount<10){
            milliSecond.innerText=`0${mCount}`;
        }
       else{
        milliSecond.innerText=mCount;
       }
     }
     else{
        mCount=0;
        milliSecond.innerText=`0${mCount}`;
        sCount++;
        if(sCount<10){
            second.innerText=`0${sCount}`;
        }
       else{
        second.innerText=sCount;
       }
     }
   },10);
})

stop.addEventListener("click",function(){
    clearInterval(myInterval);
})

reset.addEventListener("click",function(){
    clearInterval(myInterval);
    sCount=0;
    mCount=0;
    milliSecond.innerText=`0${0}`;
    second.innerText=`0${0}`
})

