function rand(x)
{
    return Math.floor(Math.random() * x);
}

function background()
{
    let R = rand(255);
    let G = rand(255);
    let B = rand(255);
    document.body.style.background = "rgb(" + R + "," + G + "," + B + ")";
}

let title = document.getElementsByTagName("title")[0];

console.log(title);
title.innerHTML = "Modifying the DOM";
background();

for (let child of document.body.children)
  console.log(child);