// main file with rps and rpsls functions

// const rpsChoices = ["rock", "paper", "scissors"];
// const rpslsChoices = ["rock", "paper", "scissors", "lizard", "spock"]; 

const outcomes = {
    "rock" : {
        "rock": "tie",
        "paper": "lose",
        "scissors": "win",
        "lizard": "win",
        "spock":"lose"
    },
    "paper" : {
        "rock": "win",
        "paper": "tie",
        "scissors": "lose",
        "lizard": "lose",
        "spock":"win"
    },
    "scissors" : {
        "rock": "lose",
        "paper": "win",
        "scissors": "tie",
        "lizard": "win",
        "spock":"lose"
    },
    "lizard" : {
        "rock": "lose",
        "paper": "win",
        "scissors": "lose",
        "lizard": "tie",
        "spock":"win"
    },
    "spock" : {
        "rock": "win",
        "paper": "lose",
        "scissors": "win",
        "lizard": "lose",
        "spock":"tie"
    }
};

    function rps(move){
        const rpsChoices = ["rock", "paper", "scissors"];
        if (move == undefined) {
           return ({player: rpsChoices[Math.floor(Math.random()*3)]});
        }

        if (typeof move != "string"){
            console.log(`Usage: node-rps [SHOT]
            Play Rock Paper Scissors (RPS)
        
            -h, --help      display this help message and exit
            -r, --rules     display the rules and exit
        
            Examples:
            node-rps        Return JSON with single player RPS result.
                            e.g. {"player":"rock"}
            node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                            e.g {"player":"rock","opponent":"scissors","result":"win"}`);
            
            process.exit(0);
        }

        move = move.toLowerCase();
        if(!rpsChoices.includes(move)){
            console.error(move + " is out of range");
            console.log(`Rules for Rock Paper Scissors:

            - Scissors CUTS Paper
            - Paper COVERS Rock
            - Rock CRUSHES Scissors`);
            process.exit(0);
        }

        const opponentMove = rpsChoices[Math.floor(Math.random()*3)];

        return (
            {
                player: move,
                opponent: opponentMove,
                result: outcomes[move][opponentMove]
            }
        );
    }

  
    function rpsls(move){
        const rpslsChoices = ["rock", "paper", "scissors", "lizard", "spock"]; 
        
        if (move == undefined){
            return(
                {player: rpslsChoices[Math.floor(Math.random()*5)]}
            );
        }
            
             
        if (typeof move != "string"){
            console.log(`Usage: node-rpsls [SHOT]
            Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!

            -h, --help        display this help message and exit
            -r, --rules       display the rules and exit

            Examples:
            node-rpsls        Return JSON with single player RPSLS result.
                                e.g. {"player":"rock"}
            node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                                e.g {"player":"rock","opponent":"Spock","result":"lose"}`);
            
            process.exit(0);
        }

        move = move.toLowerCase();
        if(!rpslsChoices.includes(move)){
            console.error(move + " is out of range");
             console.log(`Rules for the Lizard-Spock Expansion of Rock Paper Scissors:

            - Scissors CUTS Paper
            - Paper COVERS Rock
            - Rock SMOOSHES Lizard
            - Lizard POISONS Spock
            - Spock SMASHES Scissors
            - Scissors DECAPITATES Lizard
            - Lizard EATS Paper
            - Paper DISPROVES Spock
            - Spock VAPORIZES Rock
            - Rock CRUSHES Scissors`);

            process.exit(0);
        }

        const opponentMove = rpslsChoices[Math.floor(Math.random()*5)];

        return (
            {
                player: move,
                opponent: opponentMove,
                result: outcomes[move][opponentMove]
            }
        );
    }
 
export{rps, rpsls}











