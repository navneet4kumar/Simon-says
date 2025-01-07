let gameSeq=[];
let userSeq=[];

//select element h2 tag
let h2=document.querySelector("h2");
let started=false;
let level=0;
let btns=["red","yellow","green","purple"];
document.addEventListener("click",function() {
    if(started==false){
        console.log("game is started");
        started=true;
        levelUp();
    }
});
function btnFlash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},500);
};
function levelUp(){
    level++;
    h2.innerText=`your level is ${level} .`;
    let randIdx=Math.floor(Math.random() * 3);
    let ranColor=btns[randIdx];
    let randBtns=document.querySelector(`.${ranColor}`);
    gameSeq.push(ranColor);
   // console.log(gameSeq);
    btnFlash(randBtns);
}
function check(){
    let idx=level-1;
    console.log(idx);
    levelUp();
}
function checkAns(){
    //console.log(`your level is ${level}`);
    let idx=level-1;
    if(gameSeq[idx]==userSeq[idx]){
        //console.log("same value");
        levelUp();
    }
    else{
        h2.innerText="Game Over ! Press Any Key to Start";
       
    }

}
function userclick(){
    let btn=this;
   // console.log(this);
    btnFlash(btn);
    let usercolor=this.getAttribute("id");
    userSeq.push(usercolor);
    checkAns();
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",userclick);
}
