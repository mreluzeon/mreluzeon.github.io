// GLOBAL VARIABLES, STATE
var player = {
    x: 50,
    y: 300,
    isJump: false,
    jumpTime: 0, // updates when player jump
    stuckframe: 0,
};

var barriers = [{
    x: 300
}];

var button = {
    x: 600, y: 300,
    width: 200, height: 105,
};

var tracklength = 0; // x of finish

var frames = 0;

var velocity = 5;

const y0 = 300;

var isGameRun = false; // updates when game stops, uses only for "menu"

// GLOBAL VARIABLES, CONSTANTS
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const TRACKLENGTH = 10000;

const animation = [
    new Image(),
    new Image(),
    new Image(),
    new Image(),
];

const background = new Image(canvas.width, canvas.height);
background.src = './assets/background.png';

const barrier = new Image();
barrier.src = './assets/barrier.png';

for(let i = 0; i < 4; i++){
    animation[i].src = './assets/frame_' + i + '.png';
}
var interval;
// CODE

function startgame(){
    ptrn = ctx.createPattern(background, 'repeat');
    isGameRun = true;
    interval = setInterval(mainloop, 1000/60); // I don't need for requestAnimationFrame
    tracklength = TRACKLENGTH;
    frames = 0;
}

document.onkeypress = (e) => {
    if(e.which == 32 && player.isJump == false){
        player.isJump = true;
        player.jumpTime = 0;
    }
};

function score(frames){
    if(frames > 4000){
        return 0;
    } // else
    return 4000 - frames;
}

function endOfGame(){
    isGameRun = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '48px roboto';
    ctx.fillText("FINISH", 100, 100);
    ctx.fillText("CONGRATULATIONS!", 100, 150);
    ctx.fillText("Your score " + score(frames), 100, 300);
    ctx.fillStyle = "#8080aa";
    ctx.fillRect(button.x, button.y, button.width, button.height);
    ctx.fillStyle = "#000000";
    ctx.fillText("ReRun", button.x + 10, button.y + 70);
}

background.onload = () => {
    startgame();
};

function mainloop(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = ptrn;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#000000';
    ctx.font = '48px serif';
    ctx.fillText(Math.floor(tracklength/100)+" meters", 100, 100);

    ctx.drawImage(animation[Math.floor(frames / 8) % 4], player.x, player.y, 100, 100);

    if(player.isJump){
        player.y = y0 - 60 * player.jumpTime + 10 * Math.pow(player.jumpTime, 2) / 2; // School formula
        player.jumpTime += 0.15;
        if(player.y > 300){
            player.y = 300;
            player.isJump = false;
        }
    }

    barriers.forEach((el, i) => {
        ctx.drawImage(barrier, el.x, 300, 100, 150);
        el.x -= velocity;
        if((player.x + 25) > el.x && (player.x + 25) < (el.x + 100) && (player.y + 50) > 300){
            velocity = 1;
            player.stuckframe = frames;
        }
    });

    barriers = barriers.filter((e) => e.x > -150);

    if(barriers.length == 1){
        barriers.push({x: 1000 + Math.random() * 100});
    } else if (Math.random() < 0.0009) {
        barriers.push({x: 1000 + Math.random() * 100});
    }

    if(tracklength <= 0){
        endOfGame();
        clearInterval(interval);
    }

    if((player.stuckframe + 300 - frames) < 299 && velocity < 5){
        console.log("wow");
        velocity += 0.01;
    }

    tracklength -= velocity;

    frames++;
}

canvas.onclick = (e) => {
    // Sorry to long, don't know how to short it TODO: REFACTOR!
    if(!isGameRun && e.layerX > button.x && e.layerX < button.x + button.width && e.layerY > button.y && e.layerY < button.y+button.height){
        startgame();
    }
};
