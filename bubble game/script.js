var timer = 60;
var score=0;
var newHit=0;

function makebubble() {
    var b = "";

    for (var i = 1; i <= 114; i++) {
        var rn = Math.floor(Math.random() * 10);
        b += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = b;
}

function runTimer(){

    var timerInterval = setInterval(function(){
        if(timer>0){
            timer-- ;
            document.querySelector("#timeInterval").textContent = timer;
        }else{
            clearInterval(timerInterval);
            document.querySelector("#pbtm").innerHTML=`<h1> Game Over </h1>`;
        }
    } , 1000);
    
}

function getNewHit(){
    newHit=Math.floor(Math.random()*10);
    document.querySelector("#newHit").textContent=newHit;
}

//var score=0;
function increaseScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent=score;
}

document.querySelector("#pbtm").addEventListener("click", function(details){
    var numClicked = Number(details.target.textContent);
    if(numClicked === newHit){
        increaseScore();
        makebubble();
        getNewHit();
    }
})

runTimer();
makebubble();
getNewHit();

// agar mai 0 pr click krungi to event raise hoga 0 pr aur qki event ispar raise hua hai to ispe listener lagana pdega

//kisi bhi bubble pr maine click kiya to uspr listener check hoga lekin agr uspr listener nhi hua to uske parent pr check hoga

//event bubbling