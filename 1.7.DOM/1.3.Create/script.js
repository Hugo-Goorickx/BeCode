/*
*/

function rand(x)
{
    return Math.floor(Math.random() * x);
}

function bakcground(input)
{
    let r = rand(255);
    let g = rand(255);
    let b = rand(255);
    if ((r * 0.3) + (g * 0.59) + (b * 0.11) < 128)
        input.style.color = "rgb(255,255,255)";
    input.style.background = "rgb(" + r + ", " + g + ", " + b + ")";

}

let start = document.getElementsByTagName('article')[0];
console.log(start);
let every_one = ["Arno Volts" ,"Aurélien Mariaule" ,"Aurore Lemaire" ,"Benjamin Porsont" ,"Céline Verreydt" ,"Corentin Miserque" ,"Dominique Coppée" ,"Edouard     de Romrée de Vichenet" ,"Hugo Goorickx ","Jofrey Houyoux" ,"Jonathan Manes" ,"jonathan bajoux" ,"Laura Wilhelmi" ,"Lysie Soyez" ,"Marnie Benalia" ,"Mathilde     Cornelis" ,"Milo Bonnet" ,"Nadim El Nakadi" ,"Nathalie Vanden Abeele" ,"Nathalie Goffette" ,"Nour Everaert" ,"Pierre Mauriello" ,"Quentin Bource ","Virginie Dourson"];
let new_span, new_content, elem;
let all = 0;
let rand_start = rand(every_one.length);
while (all++ < every_one.length)
{
    elem = every_one[rand_start];
    new_span = document.createElement('span');
    new_content = document.createTextNode(elem);
    new_span.appendChild(new_content);
    bakcground(new_span);
    console.log(new_span);
    start.appendChild(new_span);
    if (++rand_start == every_one.length)
        rand_start = 0;
}