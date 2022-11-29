function rand(x)
{
    return Math.floor(Math.random() * x);
}

let all_add = document.querySelectorAll('.important');
for (let elem of all_add)
    elem.setAttribute('title',"This is an important item");

let modif_pic = document.querySelectorAll('img');
for (let elem of modif_pic)
    if (!elem.classList.contains('important'))
        elem.style.display = "none";

let all_p = document.querySelectorAll('p');
for (let elem of all_p)
{
    if (elem.getAttribute('class'))
        console.log("Class: " + elem.getAttribute('class'));
    else
        elem.style.background = "rgb(" + rand(255) + ", " + rand(255) + ", " + rand(255) + ")";
    console.log(elem.textContent);
}