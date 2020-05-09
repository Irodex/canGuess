const welcomeScreen = document.getElementById(`welcomeScreen`);
const gameScreen = document.getElementById(`gameScreen`);
const nameForm = document.getElementById(`nameForm`);
const guessess = document.getElementById('guesses');
const gameForm = document.getElementById(`gameForm`);
const Pictionaryword = document.getElementById(`Pictionaryword`);
const userInput = document.getElementById(`userInput`)
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const nameInput = document.getElementById(`userName`);
const guessedWords = document.getElementById("guessedWords");
const wordArray = 
["chair","fish","cat","monkey","cup","lightbulb","flower",
"jewel","lightning bolt","triangle","tire","caterpillar","rocket ship"
,"eyeball","magnifying glass","cross","arrow","shopping cart","robot","ice cream"]
var audioCorrect = new Audio('CorrectNoise.mp3');
var audioWrong = new Audio('WrongNoise.wav');


let game;
class canGuess{
    constructor() {
        
        this.numOfGuesses = 3;
        this.guessesString = (`Remaining Number of Guesses: ` + this.numOfGuesses);
        this.randomWord = Math.random();

        if(this.randomWord < 0.05){
            this.randomWord = wordArray[0]
            drawChair()
        }
        else if(this.randomWord <= 0.10){
            this.randomWord = wordArray[1]
            drawFish()
        }
        else if(this.randomWord <= 0.15){
            this.randomWord = wordArray[2]
            drawCat()
        }
        else if(this.randomWord <= 0.20){
            this.randomWord = wordArray[3]
            drawMonkey()
        }
        else if(this.randomWord <= 0.25){
            this.randomWord = wordArray[4]
            drawCup()
        }
        else if(this.randomWord <= 0.30){
            this.randomWord = wordArray[5]
            drawLightBulb()
        }
        else if(this.randomWord <= 0.35){
            this.randomWord = wordArray[6]
            drawFlower()
        }
        else if(this.randomWord <= 0.40){
            this.randomWord = wordArray[7]
            drawJewel()
        }
        else if(this.randomWord <= 0.45){
            this.randomWord = wordArray[8]
            drawLightningBolt()
        }
        else if(this.randomWord <= 0.50){
            this.randomWord = wordArray[9]
            drawTriangle()
        }
        else if(this.randomWord <= 0.55){
            this.randomWord = wordArray[10]
            drawTire();
        }
        else if(this.randomWord <= 0.60){
            this.randomWord = wordArray[11]
            drawCaterpillar()
        }
        else if(this.randomWord <= 0.65){
            this.randomWord = wordArray[12]
            drawRocketShip();
        }
        else if(this.randomWord <= 0.70){this.randomWord = wordArray[13]; 
            drawEyeBall();}
        else if(this.randomWord <= 0.75){this.randomWord = wordArray[14];
            drawMagnifyingGlass();}
        else if(this.randomWord <= 0.80){this.randomWord = wordArray[15];
            drawCross()}
        else if(this.randomWord <= 0.85){this.randomWord = wordArray[16];
            drawArrow();}
        else if(this.randomWord <= 0.90){this.randomWord = wordArray[17];
            drawShoppingCart();}
        else if(this.randomWord <= 0.95){this.randomWord = wordArray[18];
            drawRobot()}
        else{this.randomWord = wordArray[19]; drawIceCream();}
    }
}

//canvas drawings
function drawChair(){
        ctx.beginPath();

        //draw chair back
        ctx.rect(60, 10, 75, 100);
        ctx.stroke();

        //draw seat
        ctx.beginPath();
        ctx.moveTo(60, 110);
        ctx.lineTo(10, 150)
        ctx.stroke();
        ctx.moveTo(135, 110);
        ctx.lineTo(95, 150);
        ctx.stroke();
        ctx.moveTo(10, 150);
        ctx.lineTo(95, 150);
        ctx.stroke();
        
        //draw legs
        ctx.beginPath();
        ctx.moveTo(10, 150);
        ctx.lineTo(10, 205);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(95, 150);
        ctx.lineTo(95, 205);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(135, 110);
        ctx.lineTo(135, 170);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(60, 150);
        ctx.lineTo(60, 170);
        ctx.stroke();
}

function drawFish(){
        ctx.beginPath();
        ctx.arc(-4, 100, 40, 400, Math.PI);
        ctx.stroke();
        ctx.beginPath();
        ctx.ellipse(110, 90, 50, 75, Math.PI/2, 0, 2 * Math.PI);
        ctx.stroke();
}

function drawCat(){
        //draw head
        ctx.beginPath();
        ctx.arc(100, 125, 50, 0, 2 * Math.PI);
        ctx.stroke();

        //draw left ear
        ctx.beginPath();
        ctx.moveTo(60, 94);
        ctx.lineTo(60, 50);
        ctx.stroke();
        ctx.lineTo(80, 80);
        ctx.stroke();

        //draw right ear
        ctx.beginPath();
        ctx.moveTo(140, 94);
        ctx.lineTo(140, 50);
        ctx.stroke();
        ctx.lineTo(120, 80);
        ctx.stroke();
        
        //draw left eye
        ctx.beginPath();
        ctx.arc(80, 100, 12, 0.3 * Math.PI, 1.1 * Math.PI);
        ctx.fill();
        ctx.stroke();

        //draw right eye
        ctx.beginPath();
        ctx.arc(120, 100, 12, -0.1 * Math.PI, 0.7 * Math.PI);
        ctx.fill();
        ctx.stroke();
}

function drawMonkey(){
        //draw head
        ctx.beginPath();
        ctx.arc(100, 75, 50, 0, 2 * Math.PI);
        ctx.stroke();

        //draw left ear
        ctx.beginPath();
        ctx.arc(50,75,10,0.5*Math.PI,1.5*Math.PI)
        ctx.stroke();

        //draw right ear
        ctx.beginPath();
        ctx.arc(150,75,10,1.5*Math.PI,0.5*Math.PI)
        ctx.stroke();

        //draw top lip
        ctx.beginPath();
        ctx.ellipse(100, 90, 40, 10, Math.PI, 0, Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.setLineDash([]);
        ctx.moveTo(60, 90);
        ctx.lineTo(140, 90);
        ctx.stroke();

        //draw bottom lip
        ctx.beginPath();
        ctx.ellipse(100, 95, 40, 10, 2*Math.PI, 0, Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.setLineDash([]);
        ctx.moveTo(60, 95);
        ctx.lineTo(140, 95);
        ctx.stroke();

        //draw left eye
        ctx.beginPath();
        ctx.arc(75, 65, 10, 0, 2 * Math.PI);
        ctx.stroke();

        //draw right eye
        ctx.beginPath();
        ctx.arc(125, 65, 10, 0, 2 * Math.PI);
        ctx.stroke();
}

function drawCup(){

        //draw inside of cup
        ctx.beginPath();
        ctx.ellipse(100, 50, 30, 15, 0, 0, Math.PI * 2);
        ctx.stroke();

        //draw water inside body of cup
        ctx.beginPath();
        ctx.fill();

        //draw body of cup
        ctx.beginPath();
        ctx.moveTo(70, 50);
        ctx.lineTo(70, 150);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(130, 50);
        ctx.lineTo(130, 150);
        ctx.stroke();
        
        //draw base of cup with water
        ctx.beginPath();
        ctx.ellipse(100, 150, 30, 15, 0, 0, Math.PI);
        ctx.stroke();
}

function drawLightBulb(){
        ctx.beginPath();
        ctx.ellipse(150, 60, 30, 55, Math.PI, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath();

        ctx.rect(130, 110, 40, 40);
        ctx.stroke();
}

function drawFlower(){
        //draw the center of the flower
        ctx.beginPath();
        ctx.arc(150, 150, 50, 0, 2 * Math.PI);
        ctx.stroke();

        //draw the flower petals
        ctx.beginPath();
        ctx.arc(151, 188, 35, Math.PI, 1.98 * Math.PI, Math.PI);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(112, 151, 35, 1.50 * Math.PI, .48 * Math.PI, Math.PI);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(149, 115, 35, 1.99 * Math.PI, Math.PI, Math.PI);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(185, 149, 35, 0.48 * Math.PI, 1.50 * Math.PI, Math.PI);
        ctx.stroke();
}

function drawJewel(){
        ctx.beginPath();
        ctx.rect(120, 20, 70, 100);
        ctx.stroke();
        ctx.beginPath();
        ctx.rect(135, 30, 40, 80);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(120,20);
        ctx.lineTo(135,30);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(190,20);
        ctx.lineTo(175,30);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(120,120);
        ctx.lineTo(135,110);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(190,120);
        ctx.lineTo(175,110);
        ctx.stroke();
}

function drawLightningBolt(){
    ctx.beginPath();
    ctx.moveTo(145, 50);
    ctx.lineTo(90, 50);
    ctx.stroke();
    ctx.lineTo(80, 115);
    ctx.stroke();
    ctx.moveTo(145, 50)
    ctx.lineTo(135, 95);
    ctx.stroke();
    ctx.lineTo(155, 95);
    ctx.stroke();
    ctx.moveTo(80, 115);
    ctx.lineTo(100, 115);
    ctx.stroke();
    ctx.lineTo(80, 215);
    ctx.stroke();
    ctx.lineTo(155, 95)
    ctx.stroke();
}

function drawTriangle(){
    ctx.beginPath();
    ctx.moveTo(100,100)
    ctx.lineTo(200,100)
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(100,50)
    ctx.lineTo(200,100)
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(100,50)
    ctx.lineTo(100,100)
    ctx.stroke();
}

function drawTire(){
       //draw inside of tire
        ctx.beginPath();
        ctx.arc(150, 150, 35, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath()
        ctx.arc(150, 150, 15, 0, 2 * Math.PI);
        ctx.stroke();

        //draw outside of tire
        ctx.beginPath();
        ctx.arc(150, 150, 60, 0, 2 * Math.PI);
        ctx.stroke();

        //draw rim of tire
        ctx.beginPath();
        ctx.moveTo(150, 135);
        ctx.lineTo(150, 115);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(150, 165);
        ctx.lineTo(150, 185);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(165, 150);
        ctx.lineTo(185, 150);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(135, 150);
        ctx.lineTo(115, 150);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(140, 140);
        ctx.lineTo(125, 125);
        ctx.stroke(); 
}

function drawCaterpillar(){
        ctx.beginPath();
        ctx.arc(50, 75, 20, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(90, 75, 20, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(130, 75, 20, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(170, 75, 20, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(210, 75, 20, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(250, 75, 20, 0, 2 * Math.PI);
        ctx.stroke();
        //antenna
        ctx.beginPath();
        ctx.moveTo(50,20)
        ctx.lineTo(40,60)
        ctx.stroke();
        //antenna
        ctx.beginPath();
        ctx.moveTo(60,20)
        ctx.lineTo(50,60)
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(60,90);
        ctx.lineTo(60,105);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(80,90);
        ctx.lineTo(80,105);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(110,80);
        ctx.lineTo(110,105);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(130,90);
        ctx.lineTo(130,105);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(150,80);
        ctx.lineTo(150,105);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(170,90);
        ctx.lineTo(170,105);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(190,80);
        ctx.lineTo(190,105);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(210,90);
        ctx.lineTo(210,105);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(230,80);
        ctx.lineTo(230,105);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(250,90);
        ctx.lineTo(250,105);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(270,80);
        ctx.lineTo(270,105);
        ctx.stroke();
    
}

function drawRocketShip(){

    ctx.beginPath();
    ctx.moveTo(50, 40);
    ctx.lineTo(50, 120);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(120, 40);
    ctx.lineTo(120, 120);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(50, 40);
    ctx.lineTo(85, 20);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(120, 40);
    ctx.lineTo(85, 20);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(85, 20);
    ctx.lineTo(85, 5);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(50, 120);
    ctx.lineTo(120, 120);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(50, 120);
    ctx.lineTo(50, 140);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(50, 140);
    ctx.lineTo(70, 140);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(70, 140);
    ctx.lineTo(70, 120);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(70, 140);
    ctx.lineTo(70, 120);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(120, 140);
    ctx.lineTo(120, 120);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(120, 140);
    ctx.lineTo(120, 120);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(120, 140);
    ctx.lineTo(100, 140);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(100, 140);
    ctx.lineTo(100, 120);
    ctx.stroke();
    
}

function drawEyeBall(){
    
        ctx.beginPath();
        ctx.arc(130, 75, 50, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(130, 75, 25, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(130, 75, 25, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(130, 75, 25, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(135, 65, 15, 0, 2 * Math.PI);
        ctx.stroke();
    
}
function drawMagnifyingGlass(){
        ctx.beginPath();
        ctx.arc(140, 45, 40, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(140, 45, 30, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.strokeRect(135,75,10,60)
}

function drawCross(){
        ctx.beginPath();
        ctx.rect(130, 20, 30, 100);
        ctx.stroke();
        ctx.beginPath();

        ctx.rect(105, 50, 80, 20);
        ctx.stroke();
}
function drawArrow(){
        ctx.beginPath();
        ctx.strokeRect(120,70,40,80)
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(90,70);
        ctx.lineTo(190,70);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(90,70);
        ctx.lineTo(135,5);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(190,70);
        ctx.lineTo(135,5);
        ctx.stroke();
    
}

function drawShoppingCart(){
    ctx.beginPath();
        ctx.rect(20, 20, 140, 90);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(50, 130, 20, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(130, 130, 20, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(160,20)
        ctx.lineTo(190,10)
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(60,20)
        ctx.lineTo(60,110)
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(100,20)
        ctx.lineTo(100,110)
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(140,20)
        ctx.lineTo(140,110)
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(20,60)
        ctx.lineTo(160,60)
        ctx.stroke();
}
function drawRobot(){

        ctx.beginPath();
        ctx.strokeRect(100,40,100,80)
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeRect(80,50,20,30)
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeRect(200,50,20,30)
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeRect(160,50,30,30)
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeRect(110,50,30,30)
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeRect(110,100,80,10)
        ctx.stroke();
    
}

function drawIceCream(){
        ctx.beginPath();
        ctx.moveTo(200, 60); 
        ctx.lineTo(170, 60); 
        ctx.lineTo(200, 145); 
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(200, 60); 
        ctx.lineTo(230, 60); 
        ctx.lineTo(200, 145); 
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(200,60)
        ctx.lineTo(200,145)
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(220,60)
        ctx.lineTo(220,90)
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(180,60)
        ctx.lineTo(180,90)
        ctx.stroke();
        //hor
        ctx.beginPath();
        ctx.moveTo(180,90)
        ctx.lineTo(220,90)
        ctx.stroke();
        
        ctx.beginPath();
        ctx.arc(200, 35, 25, 0, 2 * Math.PI);
        ctx.stroke();
}

nameForm.addEventListener("submit", function(nameFormSubmitEvent){
    nameFormSubmitEvent.preventDefault();
    if(!userName.value){
        alert("You have to provide input!")
    }
    else{
    welcomeScreen.className = "hidden";
    gameScreen.className = "";
    canvas.className="";
    game = new canGuess();
    guesses.innerText = game.guessesString;
    }
});

gameForm.addEventListener("submit", function(gameFormSubmitEvent){
    gameFormSubmitEvent.preventDefault();   
    game.numOfGuesses--
    guesses.innerText = (`Remaining Number of Guesses: ` + game.numOfGuesses);
    checkWin()
});

function checkWin(){
    if(userInput.value == game.randomWord){
        audioCorrect.play();
        alert("That is correct, " + localStorage.getItem(`UserName`) + "! Please press OK to continue.")
        userInput.value = ''
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        guesses.innerText = game.guessesString;
        game = new canGuess();
    }
    else if(!userInput.value){alert(`You have to provide an input, ` + localStorage.getItem(`UserName`) + "!");}
    else if(userInput.value != game.randomWord){
        audioWrong.play();
        alert("Sorry, that is incorrect, " + localStorage.getItem(`UserName`) + ". Please guess again!")
        userInput.value = ''
        if(game.numOfGuesses == 0){
            audioWrong.play();
            alert("Sorry, " + localStorage.getItem(`UserName`) + "! You are out of attempts. Please click 'OK' to continue.")
            userInput.value = ''
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            guesses.innerText = game.guessesString;
            game = new canGuess();
        }
    }
};

function saveUserName(){
    localStorage.setItem(`UserName`, nameInput.value);
    console.log(nameInput.value);
}