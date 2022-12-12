let old_pos= 1 ;
let score = 0;
let pos = 0;
let divScore = document.getElementById("div10");

function pop_taupe()
{
    let div = document.getElementById("div" + old_pos);
    div.style.backgroundColor = "white";
    pos = Math.floor(Math.random() * 9) + 1;
    div = document.getElementById("div" + pos);
    div.style.backgroundColor = "red";
    old_pos = pos;
}

function onClick(num)
{
    console.log(pos + " " + num);
    let div = document.getElementById("div" + num);
    if (num == pos)
    {
        score++;
        div.style.backgroundColor = "white";
        console.log(score);
        divScore.textContent = 'Score: ' + score;
    }
}

let div = document.getElementById("div1");
div.addEventListener('click', function() {onClick(1);});

div = document.getElementById("div2");
div.addEventListener('click', function() {onClick(2);});

div = document.getElementById("div3");
div.addEventListener('click', function() {onClick(3);});

div = document.getElementById("div4");
div.addEventListener('click', function() {onClick(4);});

div = document.getElementById("div5");
div.addEventListener('click', function() {onClick(5);});

div = document.getElementById("div6");
div.addEventListener('click', function() {onClick(6);});

div = document.getElementById("div7");
div.addEventListener('click', function() {onClick(7);});

div = document.getElementById("div8");
div.addEventListener('click', function() {onClick(8);});

div = document.getElementById("div9");
div.addEventListener('click', function() {onClick(9);});

setInterval(pop_taupe, 1000 - (score * 10));