var divBall = document.getElementById("divBall");
var tableBoard = document.getElementById("tableMap");

var arrMap = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 2, 2, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 2, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

var ball = {
    element: document.querySelector("#divBall"),

    directionX: 0, //0 : Down, 1 : Up
    directionY: 1, //0 : Left, 1 : Right

    forceX: 0,
    forceY: 0,

    a: 0.1,

    styleX:(value) => {
        if(value != null){
            document.querySelector("#divBall").style.left = value;
        }
        return document.querySelector("#divBall").style.left;
    },
    styleY: document.querySelector("#divBall").style.top,
};

var arrStar = [];
var countStar = 0;

var cng1 = 0; // 0 : None, 1 : Up, 2 : Right, 3 : Down, 4 : Left
var cng2 = 0;
var cng3 = 0;
var cng4 = 0;

var intervalMain = setInterval(main, 17);
var highJumped = false;

drawBoard();

function main(){
    if(countStar == 0){
        clearInterval(intervalMain);
        alert("Clear!!");
        location.reload();
    }

    moveBall();

    x = removePX(divBall.style.left);
    y = removePX(divBall.style.top);

    x1 = Math.floor(x / 20);
    y1 = Math.floor(y / 20);

    x2 = Math.floor((x + 10) / 20);
    y2 = Math.floor(y / 20);

    x3 = Math.floor(x / 20);
    y3 = Math.floor((y + 10) / 20);

    x4 = Math.floor((x + 10) / 20);
    y4 = Math.floor((y + 10) / 20);

    if(isOutOfMap(x, y)){
        location.reload();
    }

    for(var i = 0; i < arrStar.length; i++){
        if(x1 <= arrStar[i][1] && arrStar[i][1] <= x2){
            if(y1 <= arrStar[i][0] && arrStar[i][0] <= y2){
                var listCellStars = document.querySelectorAll("#divStar");

                for(var j = 0; j < listCellStars.length; j++){
                    if(removePX(listCellStars[j].style.left) == arrStar[i][1] * 20){
                        listCellStars[j].children[0].style.color = "#00000000";

                        arrMap[Math.floor(y / 20), Math.floor(x / 20)] = 0;
                        arrStar[i][0] = 0;
                        arrStar[i][1] = 0;
                        countStar--;
                    }
                }
            }
        }
    }

    var reverseForceX = -ball.forceX;
    var reverseForceY = -ball.forceY;

    if(cng1 != 0){
        if(cng1 == 1){
            if(arrMap[y1][x1] == 1){
                ball.forceY = reverseForceY;
                highJumped = false;
            }else if(arrMap[y1][x1] == 3){
                ball.forceY = -6.0;
                highJumped = true;
            }
        }else if(cng1 == 4){
            if(arrMap[y1][x1] == 1){
                ball.forceX = 3.0;
                divBall.style.left = removePX(divBall.style.left) + ball.forceX + "px";
                highJumped = false;
            }
        }
    }

    if(cng2 != 0){
        if(cng2 == 1){
            if(arrMap[y2][x2] == 1){
                ball.forceY = reverseForceY;
                highJumped = false;
            }else if(arrMap[y2][x2] == 3){
                ball.forceY = -6.0;
                highJumped = true;
            }
        }else if(cng2 == 2){
            if(arrMap[y2][x2] == 1){
                ball.forceX = -3.0;
                divBall.style.left = removePX(divBall.style.left) + ball.forceX + "px";
                highJumped = false;
            }else if(arrMap[y2][x2] == 3 && !highJumped){
                ball.forceX = 3.0;
                divBall.style.left = removePX(divBall.style.left) + ball.forceX + "px";
                highJumped = true;
            }
        }
    }

    if(cng3 != 0){
        if(cng3 == 4){
            if(arrMap[y3][x3] == 1){
                ball.forceX = 3.0;
                divBall.style.left = removePX(divBall.style.left) + ball.forceX + "px";
                highJumped = false;
            }if(arrMap[y3][x3] == 3 && !highJumped){
                ball.forceX = 3.0;
                divBall.style.left = removePX(divBall.style.left) + ball.forceX + "px";
                highJumped = true;
            }
        }else if(cng3 == 3){
            if(arrMap[y3][x3] == 1){
                ball.forceY = -3.5;
            }
            highJumped = false;
        }
    }

    if(cng4 != 0){
        if(cng4 == 2){
            if(arrMap[y4][x4] == 1){
                ball.forceX = -3.0;
                divBall.style.left = removePX(divBall.style.left) + ball.forceX + "px";
                highJumped = false;
            }else if(arrMap[y4][x4] == 3 && !highJumped){
                ball.forceX = -3.0;
                divBall.style.left = removePX(divBall.style.left) + ball.forceX + "px";
                highJumped = true;
            }
        }else if(cng4 == 3){
            if(arrMap[y4][x4] == 1){
                ball.forceY = -3.5;
            }
            highJumped = false;
        }
    }
}

isLeft = false;
isRight = false;

document.onkeypress = function(e){
    switch(e.key){
        case 'a':
            isLeft = true;
            break;
        case 'd':
            isRight = true;
            break;
    }
}

document.onkeyup = function(e){
    switch(e.key){
        case 'a':
            isLeft = false;
            break;
        case 'd':
            isRight = false;
            break;
    }
}

function drawBoard(){
    for(var i = 0; i < arrMap.length; i++){
        for(var j = 0; j < arrMap[i].length; j++){
            var cell = document.createElement("div");
            cell.style.position = "absolute";
            cell.style.height = "20px";
            cell.style.width = "20px";
            cell.style.left = j * 20 + "px";
            cell.style.top = i * 20 + "px";

            if(arrMap[i][j] == 0){
                // Blank Sky
                cell.setAttribute("isGround", false);
                cell.className = "blockSky";
            }else if(arrMap[i][j] == 1){
                // Normal Block
                cell.setAttribute("isGround", true);
                cell.className = "blockGround";
            }else if(arrMap[i][j] == 2){
                // Star
                arrStar.push([i, j]);
                countStar++;
                
                var starCell = document.createElement("div");
                starCell.innerText = "★";

                cell.appendChild(starCell);
                cell.setAttribute("isGround", false);
                cell.className = "blockStar";
                cell.id = "divStar";
            }else if(arrMap[i][j] == 3){
                // Jump Block
                cell.innerText = "★";

                cell.setAttribute("isGround", false);
                cell.className = "blockJump";
            }

            tableBoard.appendChild(cell);
        }
    }
}

function isOutOfMap(x, y){
    if(x / 20 < 30 && y / 20 < 20){
        return false;
    }
    return true;
}

function moveBall(){
    if(isLeft && !isRight){
        ball.directionY = 0;
    }else if(!isLeft && isRight){
        ball.directionY = 2;
    }else {
        ball.directionY = 1;
    }

    if(ball.directionY == 0){
        ball.forceX = -2.5;
    }else if(ball.directionY == 2){
        ball.forceX = 2.5;
    }

    if(ball.forceX > 10){
        ball.forceX = 10;
    }else if(ball.forceX < -10){
        ball.forceX = -10;
    }

    setEnergy();
}

function removePX(point){
    return Number(point.split("px")[0]);
}

function setEnergy(){
    if(ball.forceX != 0){
        if(ball.forceX > 0){
            ball.forceX -= 0.2;

            if(ball.forceX < 0){
                ball.forceX = 0;
            }
        }else {
            ball.forceX += 0.2;

            if(ball.forceX > 0){
                ball.forceX = 0;
            }
        }
    }

    ball.forceY += 0.2;

    x = removePX(divBall.style.left);
    y = removePX(divBall.style.top);

    x1 = Math.floor(x / 20);
    mx1 = Math.floor((x + ball.forceX) / 20);
    y1 = Math.floor(y / 20);
    my1 = Math.floor((y + ball.forceY) / 20);

    x2 = Math.floor((x + 10) / 20);
    mx2 = Math.floor(((x + 10) + ball.forceX) / 20);
    y2 = Math.floor(y / 20);
    my2 = Math.floor((y + ball.forceY) / 20);

    x3 = Math.floor(x / 20);
    mx3 = Math.floor((x + ball.forceX) / 20);
    y3 = Math.floor((y + 10) / 20);
    my3 = Math.floor(((y + 10) + ball.forceY) / 20);

    x4 = Math.floor((x + 10) / 20);
    mx4 = Math.floor(((x + 10) + ball.forceX) / 20);
    y4 = Math.floor((y + 10) / 20);
    my4 = Math.floor(((y + 10) + ball.forceY) / 20);

    if(x1 > mx1){
        cng1 = 4;
    }
    if(y1 > my1){
        cng1 = 1;
    }

    if(x2 < mx2){
        cng2 = 2;
    }
    if(y2 > my2){
        cng2 = 1;
    }

    if(x3 > mx3){
        cng3 = 4;
    }
    if(y3 < my3){
        cng3 = 3;
    }

    if(x4 < mx4){
        cng4 = 2;
    }
    if(y4 < my4){
        cng4 = 3;
    }

    divBall.style.left = x + ball.forceX + "px";
    divBall.style.top = y + ball.forceY + "px";
}