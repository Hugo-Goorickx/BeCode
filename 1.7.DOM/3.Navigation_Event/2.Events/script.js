const _initTime = Date.now()

const getElapsedTime = () =>
{
    return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) =>
{
    console.log(e.target.classList[1])
    console.log(getElapsedTime())
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares)
{
    actionSquare.addEventListener('click', clickOnSquare)
}

//gen a random value between 0 and x
function rand(x)
{
    return (Math.floor(Math.random() * x) + 1);
}

//gen the background
function bakcground(input)
{
    let r = rand(255);
    let g = rand(255);
    let b = rand(255);
    input.style.background = "rgb(" + r + ", " + g + ", " + b + ")";
}

//write the log
function log_input(txt)
{
    let tmp_bal;
    let tmp_txt;
    tmp_bal = document.createElement('li');
    tmp_txt = document.createTextNode("[" + getElapsedTime() + "] " + txt);
    tmp_bal.appendChild(tmp_txt);
    ul_start.appendChild(tmp_bal);
    ul_start.appendChild;
}

//function for input
function inputSpace(e)
{
    console.log(e);

    //if spacebar
    if (e.charCode == 32)
    {
        bakcground(body);
        log_input("Push on space bar");
    }
    else if (e.charCode == 108)
    {
        while (ul_start.querySelectorAll('li').length)
            ul_start.querySelector('li').remove();
    }
    else if (e.charCode == 115)
    {
        while (add_square_start.querySelectorAll('.displayedsquare').length)
            add_square_start.querySelectorAll('.displayedsquare')[0].remove();
    }
}

//Function to input the square
function inputSquare(color)
{
    let tmp = document.createElement('div');
    tmp.classList.add('displayedsquare');
    tmp.classList.add(color);
    add_square_start.appendChild(tmp);
    log_input("Create a new " + color + " square");
    tmp.addEventListener('click', function() {inputSquareGen(color);});
}

//setup the alert box with the color
function inputSquareGen(color)
{
    window.alert(color)
}

//put body in var
const body = document.body;

//select the ul for the logs
const ul_start = document.querySelector('ul');

//select the new squares zone
const add_square_start = document.querySelector('.displayedsquare-wrapper');

//select squares
const square_start = document.querySelector('.actionsquare-wrapper');
const square_green = square_start.querySelector(".green");
const square_violet = square_start.querySelector(".violet");
const square_orange = square_start.querySelector(".orange");

//setup the detectors for addEventListener
square_green.addEventListener('click', function() {inputSquare('green');});
square_violet.addEventListener('click', function() {inputSquare('violet');});
square_orange.addEventListener('click', function() {inputSquare('orange');});
body.addEventListener('keypress', inputSpace);
