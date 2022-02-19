const bombs=[];
let gamePoints=0;
let canPlay=true;
function updateGamePoint(gamePoints){
    const gampePointsElement=document.getElementById('gamePoints');
    gampePointsElement.innerHTML="Game Points:"+gamePoints;
}
function addGrid(){
    const appElement=document.getElementById('app');
    for(let i=0;i<9;i++){
        const row = document.createElement('div');
        for(let j=0;j<9;j++){
            const index=i*9+j;
            const column=document.createElement('div');
            column.style.display='inline-block';
            column.style.width='60px';
            column.style.height='60px';
            column.style.border='1px solid black';
            column.style.textAlign='center';
            column.style.verticalAlign='middle';
            column.setAttribute('index',index);
            
            column.addEventListener("click",function(){
                if(canPlay){
                if(bombs.includes(index)){
                    //column.innerHTML="💣"
                    column.style.background='red';
                    //showBombs();
                    alert("You lost!");
                    restart();
                    canPlay=false;
                }
                else{
                    column.style.background='green';
                    gamePoints++;
                    updateGamePoint(gamePoints);
                }
            }
            })
            if(!canPlay){
                for(let i=0;i<bombs.length();i++){
                if(bombs.includes(index)){
                    column.style.background='red';
                }
            }}
            row.appendChild(column);
        }
        appElement.appendChild(row);
    }
    function restart(){
        const restart= document.createElement("button");
        restart.innerHTML="Restart";
        restart.addEventListener("click",function(){
            location.reload();
        })
        appElement.appendChild(restart);
    }
    //function showBombs(){

    //}
}
function generateBombs(){
    
    while(bombs.length!==10){
        const randomNumber=Math.floor(Math.random()*100);
        if(randomNumber<81 &&!bombs.includes(randomNumber) ){
            bombs.push(randomNumber);
        }
    }
    
}


addGrid();
generateBombs();
console.log(bombs);


// Show all the Bombs once a bomb is clicked
// Give a button to start the game again
// Every column should be only clickable once
//if all normal cells are clicked and none is left then show alert that you won
//if a bomb is clicked then show alert that you lost