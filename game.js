//Comments give the js code of the below jQuery
var seq=[];//this is used for storing inputs of computer and below one for user inputs to store
var usersequence=[];
let colors=["red","blue","green","yellow"];//colors with their indexes
var level=0;
var started=false;
/*$(".btn").click(function(){
    var userchosencolor =$(this).attr("id");// 
    usersequence.push(userchosencolor);
    outputsound(userchosencolor);
    animate(userchosencolor);
    checkAns(usersequence.length-1);
}); /*addEventListener("click",function(){
    //Anonymous function block
            });
            
*/

document.querySelectorAll(".btn").forEach(function(element) {
    element.addEventListener("click", function() {
        var userchosencolor = element.getAttribute("id");
        usersequence.push(userchosencolor);
        outputsound(userchosencolor);
        animate(userchosencolor);
        checkAns(usersequence.length - 1);
    });
});


$(document).keypress(function(){
    if(!started){
    $("#level-title").text("Level-"+level);
    gameseqance();
    started=true;
    }

});

function startAgain(){
    level=0;
    seq=[];
    started=false;
}

function checkAns(currlevel){
    if(usersequence[currlevel]===seq[currlevel]){
        console.log("success");
        if(usersequence.length===seq.length){
        setTimeout(function(){
            gameseqance();
        },1000);
        }
      
    }
    else{
        console.log("wrong");
        outputsound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },1000);
        $("#level-title").text("Game Over Press Any Key to resart");
        startAgain();
    }

}
function gameseqance(){
usersequence=[];
level=level+1;
$("#level-title").text("Level-"+level);
var randomnum= Math.floor(Math.random()*4);
var colorchosen=colors[randomnum];
seq.push(colorchosen);
$("#"+colorchosen).fadeIn(100).fadeOut(100).fadeIn(100);
outputsound(colorchosen);
}

function outputsound(name){
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();
}
function animate(currcolor){
        $("#"+currcolor).addClass("pressed");
        setTimeout(function(){
            $("#"+currcolor).removeClass("pressed");
        },200)
}