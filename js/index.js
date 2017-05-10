let text=$('#text');
let btn=$('#btn');
let span=$('.main-box .center span');
let max=100;
let bottom=$('.main-box .bottom');
let num1=$('.num1');
let col1,col2,col3;
let sum=0;
text.onkeyup=function (e) {
    let len=text.value.length;
    span.innerHTML=max-len;
     col1=Math.floor(Math.random()*256)
     col2=Math.floor(Math.random()*256)
     col3=Math.floor(Math.random()*256)
    text.style.color=`rgba(${col1},${col2},${col3},1)`
}


btn.onclick=text.onkeydown=function (e) {
    let val=text.value.trim();
    if(val.length==0){
        return;
    }
    if(e.type=='click'){
        sum+=1
        let time=new Date();
        time=time.toLocaleString();
        let ele=document.createElement('li');
        let content=text.value
        ele.innerHTML=`<img src="img/jiajia.jpg" alt=""><div class="name">你要洒脱&nbsp;&nbsp;<span>第<i id="num">${sum}</i>楼</span>  </div><p class="right">${content}</p><p id="date">${time}</p>`;
        bottom.insertBefore(ele,bottom.firstElementChild.nextElementSibling)
        text.value='';
        span.innerHTML=100;
    }
    if(e.type=='keydown'){
        if(e.shiftKey && e.keyCode==13){
            sum+=1
            let time=new Date();
            time=time.toLocaleString();
            let ele=document.createElement('li');
            let content=text.value
            ele.innerHTML=`<img src="img/jiajia.jpg" alt=""><div class="name">你要洒脱&nbsp;&nbsp;<span>第<i id="num">${sum}</i>楼</span>  </div><p class="right">${content}</p><p id="date">${time}</p>`;
            bottom.insertBefore(ele,bottom.firstElementChild.nextElementSibling)
            text.value='';
            span.innerHTML=100
        }
    }
    num1.innerHTML=`${sum}`;
}












function $(name) {
    return document.querySelector(name);
}
function $1(name) {
    return document.querySelectorAll(name);
}