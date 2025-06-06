let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newBtn=document.querySelector("#newbtn");
let msgContainer=document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg");

let turnO=true;

const winp = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const resetgame=()=>{
   let turnO=true; 
   enableBoxes();
   msgContainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            box.style.color="blue";
            turnO=false;
        }
        else{
             box.innerText="X";
             box.style.color="red";
             turnO=true;
        }
        box.disabled=true;
        checkwinner();
    })
})
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showwinner=(winner)=>{
    msg.innerText=`Congratulation,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
     disableBoxes();
}

const checkwinner=()=>{
     for(let pattern of winp){
       let pos1val=boxes[pattern[0]].innerText;
       let pos2val=boxes[pattern[1]].innerText;
       let pos3val=boxes[pattern[2]].innerText;
         if(pos1val!=""&& pos2val!=""&& pos3val!=""){
              if(pos1val==pos2val && pos2val==pos3val){
                showwinner(pos1val);
              }
         }

     }
}
newBtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);