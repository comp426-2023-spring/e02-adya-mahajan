// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

var rps = true;
var opponent = false; 
const moves = ["rock", "paper","scissors","lizard", "spock"];
var move = "rock";

function rules(){
    var x = document.getElementById("view_rules");
    if(x.style.display === "none"){
        x.style.display="flex";
    } else {
        x.style.display="none";
    }
}

function reset(){
    rps=true;
    opponent=false;
    move="rock";
    document.getElementById("game_options").hidden = false;
    document.getElementById("rpsls_move_options").hidden = true; 
    
}

function rpsgame(){
    rps = true;
}

function rpslsgame(){
    rps = false;
}

function opponentgame(){
    opponent = true;
}

function playgame(){
    document.getElementById("game_options").hidden = true;
    document.getElementById("rpsls_move_options").hidden = false; 
    if (rps){
        var dropdown = document.getElementById("your_move");
        dropdown.remove(4);
        dropdown.remove(3);
    } 

}

function submit(){
    document.write("hello");
    var index = document.getElementById("your_move");
    
    move = moves[index.value];
    if(!opponent) {
        if(rps){
            var randMove = moves[Math.floor(Math.random()* 3)];
            var api = "/app/rps/play/"

        } else {
            var randMove = moves[Math.floor(Math.random()* 5)];
            var api = "/app/rpsls/play/"

        }
    }
    
}