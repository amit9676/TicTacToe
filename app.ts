let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
let trueCounter = 0;
let XorO = true;


function initilizePosition(numberia: Array<string>, trueCunter: number): void {
    let position: string;
    position = prompt(`Please choose a number to put an X in its position:         
                                                    ${numberia[0]} ${numberia[1]} ${numberia[2]}
                                                    ${ numberia[3]} ${numberia[4]} ${numberia[5]}
                                                    ${ numberia[6]} ${numberia[7]} ${numberia[8]}`);

    placeX(position, numberia, trueCounter);
}

initilizePosition(numbers, trueCounter);

function placeX(placer: string, number: Array<string>, trueCunter: number): void
{
    if (placer == number[String(Number(placer) - 1)])
    {

        number[String(Number(placer) - 1)] = "X";
        trueCounter += 1;
        XorO = false;
        winLoseDraw(number, trueCounter, placer);
        return;
    }
    else
    {
        initilizePosition(number, trueCounter);
    }
}



function placeO(number: Array<string>, trueCunter: number, position: string): void
{

    let linesarray = [[number[0], number[1], number[2]], [number[3], number[4], number[5]], [number[6], number[7], number[8]],
    [number[0], number[3], number[6]], [number[1], number[4], number[7]], [number[2], number[5], number[8]],
    [number[0], number[4], number[8]], [number[2], number[4], number[6]]]

    let Oposition: number; 
    let Ocounter = 0;
    let Xcounter = 0;
    let arrCounter = new Array<number>();
    let arrCounter2 = new Array<number>();
    
    let i = 0;
    let j = 0;
    for (i = 0; i < linesarray.length; i++)
    {
        Ocounter = 0;
        Xcounter = 0;
        for (j = 0; j < linesarray[i].length; j++) {
            if (linesarray[i][j] == "O") {
                Ocounter += 1;
            }
            if (Ocounter == 2)
            {
                break;
            }
            if (linesarray[i][j] == "X") {
                Xcounter += 1;
            }
            if (Xcounter == 2) {
                break;
            }
        }

        if (Ocounter == 2) {
            arrCounter.push(i);
        }
        if (Xcounter == 2) {
            arrCounter2.push(i);
        }
            
    }

    if (arrCounter.length > 0) {
        for (let e = 0; e < arrCounter.length; e++) {
            for (let k = 0; k < 3; k++) {
                if ((linesarray[arrCounter[e]][k] != "O") && (linesarray[arrCounter[e]][k] != "X")) {
                    number[Number(linesarray[arrCounter[e]][k]) - 1] = "O";
                    trueCounter += 1;
                    XorO = true;
                    winLoseDraw(number, trueCounter, position);
                    return;
                }
            }
        }
    }

    if (arrCounter2.length > 0) {
        for (let e = 0; e < arrCounter2.length; e++) {
            for (let k = 0; k < 3; k++) {
                if ((linesarray[arrCounter2[e]][k] != "O") && (linesarray[arrCounter2[e]][k] != "X")) {
                    number[Number(linesarray[arrCounter2[e]][k]) - 1] = "O";
                    trueCounter += 1;
                    XorO = true;
                    winLoseDraw(number, trueCounter, position);
                    return;
                }
            }
        }
    }

    Oposition = Math.floor(Math.random() * 9);
    while ((number[Oposition] == "X") || (number[Oposition] == "O")) {
        Oposition = Math.floor(Math.random() * 9);
    }

    number[Oposition] = "O";

        //initilizePosition(number, trueCunter);
    trueCounter += 1;
    XorO = true;
    winLoseDraw(number, trueCounter, position);
    
}

function winLoseDraw(number: Array<string>, trueCunter: number, position: string): void
{
    if (((number[0] == "X") && (number[1] == "X") && (number[2] == "X")) || ((number[3] == "X") && (number[4] == "X") && (number[5] == "X")) || 
        ((number[6] == "X") && (number[7] == "X") && (number[8] == "X")) || ((number[0] == "X") && (number[3] == "X") && (number[6] == "X")) ||
        ((number[1] == "X") && (number[4] == "X") && (number[7] == "X")) || ((number[2] == "X") && (number[5] == "X") && (number[8] == "X")) ||
        ((number[0] == "X") && (number[4] == "X") && (number[8] == "X")) || ((number[2] == "X") && (number[4] == "X") && (number[6] == "X")))
    {
        alert(` YOU WIN!
                                                    ${number[0]} ${number[1]} ${number[2]}
                                                    ${ number[3]} ${number[4]} ${number[5]}
                                                    ${ number[6]} ${number[7]} ${number[8]}`);
        return;
    }
    else if (((number[0] == "O") && (number[1] == "O") && (number[2] == "O")) || ((number[3] == "O") && (number[4] == "O") && (number[5] == "O")) ||
        ((number[6] == "O") && (number[7] == "O") && (number[8] == "O")) || ((number[0] == "O") && (number[3] == "O") && (number[6] == "O")) ||
        ((number[1] == "O") && (number[4] == "O") && (number[7] == "O")) || ((number[2] == "O") && (number[5] == "O") && (number[8] == "O")) ||
        ((number[0] == "O") && (number[4] == "O") && (number[8] == "O")) || ((number[2] == "O") && (number[4] == "O") && (number[6] == "O")))
    {
        alert(` YOU LOSE!
                                                    ${number[0]} ${number[1]} ${number[2]}
                                                    ${ number[3]} ${number[4]} ${number[5]}
                                                    ${ number[6]} ${number[7]} ${number[8]}`);
        return;
    }
    else if (trueCounter == 9)
    {
        alert("it's a draw....");
        return;
    }
    else {
        if (XorO == true) {
            initilizePosition(number, trueCunter);
            return;
        }
        else if (XorO == false) {
            placeO(number, trueCounter, position);
            return;
        }
    }
}