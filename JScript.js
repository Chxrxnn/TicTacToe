let playerTxt=document.getElementById("playerText");
let reset = document.getElementById("restartButton");
let boxes = Array.from(document.getElementsByClassName("box"));
// let boxes = [...collection];
// let boxes = [];

// // let arr = new Array(9);
//     for(let i=0;i<9;i++){
//     boxes.push(collection[i]);
// }

const winnerIndicator = getComputedStyle(document.body).getPropertyValue("--winningBlocks");
// const boxes = Array.from(collection);
const O_text="O";
const X_text= "X";
let spaces = Array(9).fill(null);
let currentPlayer = "X";



function startGame(){
    boxes.forEach(box => box.addEventListener("click",clicked));
}

// console.log(arr);
const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function playerHasWon(){
    
    for(const condition of winningCombinations){
        let [a, b, c] = condition;

        if(spaces[a] && (spaces[a]==spaces[b] && spaces[a]==spaces[c])){
                return [a,b,c];        
        }

}
return false;
}
let count=0;
function clicked(e){
    const id = e.target.id;
    if(!spaces[id] && count<10){ 
        spaces[id]=currentPlayer;
        e.target.innerText=currentPlayer;
        count++;
       if(playerHasWon() !== false){
        playerTxt.innerHTML=`${currentPlayer} has won`;
        count=10;
        let winningBlocks = playerHasWon();
        winningBlocks.map(box=> boxes[box].style.backgroundColor=winnerIndicator);
        return ;
       }
       if(count==9){
        playerTxt.innerHTML="Match Draw";
        return ;
       }
    currentPlayer = currentPlayer == X_text ? O_text:X_text;
       
    }

}

reset.addEventListener("click",clear);
function clear(){
    spaces.fill(null);
    boxes.forEach(box =>   {
         box.innerText=""
         box.style.backgroundColor="";
    });
    playerTxt.innerHTML="Tic Tac Toe";
    currentPlayer = X_text;
    count=0;
}


startGame();

