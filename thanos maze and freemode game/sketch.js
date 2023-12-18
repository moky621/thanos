//thanos collects gems and MAZE!!!
// Abde Etagiuri
//CS30
//extra - music and thanos collect gems, speed boost using the millis() function

// INSTRUCTIONS
// WASD to move
//PRESS 1 to activate maze mode
//PRESS g to activate thanos freemode



//variables
const ROWS = 10;
const COLS = 20;
let grid;
let cellWidth;
let cellHeight;
let playerX = 0;
let playerY = 0;
let character, power;
let stoneX = 0;
let stoneY = 0;
let state = "normal";
let gamemode, level1;
let stone1X = 0;
let stone1Y = 0;
let reality;
let variab;
let music;
let time;

//preload function
function preload() {
  music = loadSound("avengers.mp3");
}

//setup function
function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = width/COLS;
  cellHeight = height/ROWS;
  grid = create2dArray(COLS, ROWS);
  character = loadImage("thanos.png");
  power = loadImage("power.jpg");
  reality = loadImage("reality.jpg");
  //place player in grid
  grid[playerY][playerX] = 9;
  grid[stoneY][stoneX] = 8;
  grid[stone1Y][stone1X] = 7;
  gamemode = loadJSON("gamemode.json")
  level1 = loadJSON("level1.json");
  grid = gamemode;
  music.play();
  
}

//draw loop
function draw() {
  background(220);
  displayGrid(grid);
  // spawnGems();
  // pickup();
  // sound();
  // time = millis();
  // rotateX(time / 1000);
  // rotateZ(time / 1234);
  
  
}

//create 2d array
function create2dArray(COLS, ROWS) {
  let emptyArray = [];
  for (let y=0; y<ROWS; y++) {
    emptyArray.push([]);
    for (let x=0; x<COLS; x++) {
      emptyArray[y].push(0);
    }
  }
  return emptyArray;
}

//play music
function sound(){
  music.play();
  noLoop();
}

//show grid
function displayGrid(grid) {
  for (let y=0; y<ROWS; y++) {
    for (let x=0; x<COLS; x++) {
      if (grid[y][x] === 0) {
        fill("black");
        stroke("blue");
        rect( x*cellWidth, y*cellHeight, cellWidth, cellHeight );
      }
      else if (grid[y][x] === 1) {
        rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      else if (grid[y][x] === 9) {
        fill("blue");
        
        image(character, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      else if (grid[y][x] === 8) {
        image(power, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      
      else if (grid[y][x] === 7) {
        image(reality, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
    }
  }
  
}

//mouse pressed for placing gems
function mousePressed(){
  let xPos = Math.floor(mouseX/cellWidth);
  let yPos = Math.floor(mouseY/cellHeight);

  if (grid[yPos][xPos] === 0) {
    grid[yPos][xPos] = 8;
  }
  else if (grid[yPos][xPos] === 8) {
    grid[yPos][xPos] = 0;
  }
  
}

// speed boost when grabbing gems
// function speedBoost() {
//   if (state === "speed") {
//     function keyPressed(){
//       if (grid[playerY][playerX + 1] === 0) {
//         if (key === 'd') {
//         // reset old loaction to white
//           grid[playerY][playerX] = 0;
//           //move
//           for (let i=0; i<width/ROWS; i++) {
//             if (i % millis() > 5) {
//               playerX++;
//               i = i+100;
    
//             }
    
//           }
//   }
// }
//     }
//   }


//spawn new gems in
function spawnGems(){
  if (i % millis() > 5) {
    grid[random(0, ROWS)][random(0, COLS)].push(8);
  }
}

//pickup gems
function pickup(){
  if (grid[playerY][playerX] === grid[stoneY][stoneX]) {
    grid = gamemode;
  }
}

//moving, includes speed, normal, and maze mode. Maze mode can't go thru gems. Speed mode skips a block towards gems
function keyTyped(){

 
    
  

  if (state === "normal"){
    if (grid[playerY][playerX + 1] === 0) {
      if (key === "d") {
        // reset old loaction to white
        grid[playerY][playerX] = 0;
        //move
        for (let i=0; i<width/ROWS; i++) {
          if (i % millis() > 5) {
            playerX++;
            i = i+1000;

          }

        }
        //new player location
        grid[playerY][playerX] = 9;
      }
    }
    if (grid[playerY][playerX - 1] === 0) {
      if (key === "a") {
        // reset old loaction to white
        grid[playerY][playerX] = 0;
        //move
        for (let i=0; i<width/ROWS; i++) {
          if (i % millis() > 5) {
            playerX--;
            i = i+1000;

          }

        }
        //new player location
        grid[playerY][playerX] = 9;
      }
    }
    if (grid[playerY+1][playerX] === 0 ) {
      if (key === "s") {
        // reset old loaction to white
        grid[playerY][playerX] = 0;
        //move
        playerY++;
        //new player location
        grid[playerY][playerX] = 9;
      }
    }
    if (grid[playerY-1][playerX] === 0) {
      if (key === "w") {
        // reset old loaction to white
        grid[playerY][playerX] = 0;
        //move
        playerY--;
        //new player location
        grid[playerY][playerX] = 9;
      }
    }
  }

  if (state === "speed"){
    if (grid[playerY][playerX + 1] === 0) {
      if (key === "d") {
        // reset old loaction to white
        grid[playerY][playerX] = 0;
        //move
        for (let i=0; i<width/ROWS; i++) {
          if (i % millis() > 5) {
            playerX++;
            i = i+100;
          }
        }
        grid[playerY][playerX] = 9;
      }
    }  
    
    if (grid[playerY][playerX - 1] === 0) {
      if (key === "a") {
        // reset old loaction to white
        grid[playerY][playerX] = 0;
        //move
        for (let i=0; i<width/ROWS; i++) {
          if (i % millis() > 5) {
            playerX--;
            i = i+100;
          }
        }
        grid[playerY][playerX] = 9;
      }
    } 
    
    if (grid[playerY+1][playerX] === 0) {
      if (key === "s") {
        // reset old loaction to white
        grid[playerY][playerX] = 0;
        //move
        for (let i=0; i<width/ROWS; i++) {
          if (i % millis() > 5) {
            playerY++;
            i = i+100;
          }
        }
        grid[playerY][playerX] = 9;
      }
    }
    
    if (grid[playerY-1][playerX] === 0) {
      if (key === "w") {
        // reset old loaction to white
        grid[playerY][playerX] = 0;
        //move
        for (let i=0; i<width/ROWS; i++) {
          if (i % millis() > 5) {
            playerY--;
            i = i+100;
          }
        }
        grid[playerY][playerX] = 9;
      }
    }
  }

  if (state === "maze") {
    if (grid[playerY][playerX + 1] === 0) {
      if (key === "d") {
        // reset old loaction to white
        grid[playerY][playerX] = 0;
        //move
        for (let i=0; i<width/ROWS; i++) {
          if (i % millis() > 5) {
            playerX++;
            i = i+1000;

          }

        }
        //new player location
        grid[playerY][playerX] = 9;
      }
    }
    if (grid[playerY][playerX - 1] === 0) {
      if (key === "a") {
        // reset old loaction to white
        grid[playerY][playerX] = 0;
        //move
        for (let i=0; i<width/ROWS; i++) {
          if (i % millis() > 5) {
            playerX--;
            i = i+1000;

          }

        }
        //new player location
        grid[playerY][playerX] = 9;
      }
    }
    if (grid[playerY+1][playerX] === 0) {
      if (key === "s") {
        // reset old loaction to white
        grid[playerY][playerX] = 0;
        //move
        playerY++;
        //new player location
        grid[playerY][playerX] = 9;
      }
    }
    if (grid[playerY-1][playerX] === 0) {
      if (key === "w") {
        // reset old loaction to white
        grid[playerY][playerX] = 0;
        //move
        playerY--;
        //new player location
        grid[playerY][playerX] = 9;
      }
    }
    if (grid[playerY+1][playerX] === 7) {
      if (key === "s") {
        alert("you win!");
      }
      
    }
  }

  
  //maze mode
  if (key === "1") {
    grid = level1;
    state = "maze";
    if (grid[playerY+1][playerX] === 7) {
      if (key === "s") {
        alert("you win!");
      }
      
    }
  }

    
    
  
//colleting gems
  if (state === "normal" || state === "speed"){
    if (grid[playerY][playerX-1] === 8 || grid[playerY][playerX-1] === 7 ) {
      if (key === "a") {
        // reset old loaction to white
        grid[playerY][playerX] = 0;
        //move
        playerX--;
        //new player location
        grid[playerY][playerX] = 9;
      }
    }
//colleting gems
    if (grid[playerY][playerX+1] === 8 || grid[playerY][playerX+1] === 7 ) {
      if (key === "d") {
        // reset old loaction to white
        grid[playerY][playerX] = 0;
        //move
        playerX++;
        //new player location
        
        grid[playerY][playerX] = 9;
      }
    }

  

    // gem stone pickup
    if (grid[playerY+1][playerX] === 8 || grid[playerY+1][playerX] === 7 ) {
      if (key === "s") {
        // reset old loaction to white
        grid[playerY][playerX] = 0;
        //move
        playerY++;
        //new player location
        grid[playerY][playerX] = 9;
      }
    }

  
//colleting gems
    if (grid[playerY-1][playerX] === 8 || grid[playerY-1][playerX] === 7 ) {
      if (key === "w") {
        // reset old loaction to white
        grid[playerY][playerX] = 0;
        //move
        playerY--;
        //new player location
        grid[playerY][playerX] = 9;
      }
    }
  }

  if (key === "g") {
    grid = gamemode;
    state = "normal";
  }
  
}