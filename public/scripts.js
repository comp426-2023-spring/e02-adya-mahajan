// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

var rps = true;
var opponent = false; 
const moves = ["rock", "paper","scissors","lizard", "spock"];
var move = "rock";
var showRules = false; 

function hidethis(){
    document.getElementById("rpsls_move_options").hidden = true; 
}

function rules(){
    showRules = !showRules;
    var x = document.getElementById("view_rules");
    /*
    if(x.style.display === "none"){
        x.style.display="flex";
    } else {
        x.style.display="none";
    }
    */
   if(showRules){
    document.getElementById("view_rules").innerText = 
    
    `Rules for Rock Paper Scissors:

            - Scissors CUTS Paper
            - Paper COVERS Rock
            - Rock CRUSHES Scissors

    Rules for the Lizard-Spock Expansion of Rock Paper Scissors:

    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock SMOOSHES Lizard
    - Lizard POISONS Spock
    - Spock SMASHES Scissors
    - Scissors DECAPITATES Lizard
    - Lizard EATS Paper
    - Paper DISPROVES Spock
    - Spock VAPORIZES Rock
    - Rock CRUSHES Scissors`;

   }
   else{
    document.getElementById("view_rules").innerText = "";
   }
}

function reset(){
    rps=true;
    opponent=false;
    move="rock";
    document.getElementById("game_options").hidden = false;
    document.getElementById("rpsls_move_options").hidden = true; 
    document.getElementById("results").hidden = true; 
    document.getElementById("rps").checked = false;
    document.getElementById("rpsls").checked = false;
    document.getElementById("opponent").checked = false;
    
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

function playgame(event){
    event.preventDefault();
    if (!document.getElementById("rps").checked && !document.getElementById("rpsls").checked)
        window.alert("Must select a game to play");
    else{
        if(!opponent){
            makeMove(event)
        }
        else{
            document.getElementById("game_options").hidden = true;
            document.getElementById("rpsls_move_options").hidden = false; 
            if (rps){
                var dropdown = document.getElementById("your_move");
                dropdown.remove(4);
                dropdown.remove(3);
            }
        } 
    }

}

function makeMove(event){
    event.preventDefault();
    if(!opponent) {
        if(rps){
            var randMove = moves[Math.floor(Math.random()* 3)];
            var api = "/app/rps/play/" + randMove;
            fetch(api).then(response => response.json()).then(data => {
                document.getElementById("results").innerText = JSON.stringify(data);
                document.getElementById("game_options").hidden = true; 
                document.getElementById("results").hidden = false; 
            });
        } else {
            var randMove = moves[Math.floor(Math.random()* 5)];
            var api = "/app/rpsls/play/"+randMove;
            fetch(api).then(response => response.json()).then(data => {
                document.getElementById("results").innerText = JSON.stringify(data);
                document.getElementById("game_options").hidden = true; 
                document.getElementById("results").hidden = false; 
            });

        }
    }
    else{
        var index = document.getElementById("your_move");
        move = moves[index.value];
        if(rps){
            var api = "/app/rps/play/" + move;
            fetch(api).then(response => response.json()).then(data => {
                document.getElementById("results").innerText = JSON.stringify(data);
                document.getElementById("rpsls_move_options").hidden = true; 
                document.getElementById("results").hidden = false; 
            });
        } else {
            var api = "/app/rpsls/play/"+ move;
            fetch(api).then(response => response.json()).then(data => {
                document.getElementById("results").innerText = JSON.stringify(data);
                document.getElementById("rpsls_move_options").hidden = true; 
                document.getElementById("results").hidden = false; 
            });
        }
    } 
}
