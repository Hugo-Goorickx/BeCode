let pos_ul = document.getElementsByTagName('ul')[0];
let pos_li = pos_ul.childNodes;
let index = 0;
console.log(pos_li);
for (let elem of pos_li)
{
    if (elem.nodeType == 1)
    {
        tmp_index = 0;
        for (let elem1 of pos_li)
        {
            if (elem1.nodeType == 1)
                if (elem1.isEqualNode(elem) == 1 && tmp_index != index)
                    pos_ul.removeChild(elem1);
            tmp_index++;
        }
        elem.addEventListener('click', function()
        {
            if (elem.innerHTML == 'Fast and Furious')
                window.alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.");
            else
                window.alert(elem.innerHTML);
        })
        if (elem.innerHTML == 'Fast and Furious' && index)
        {
            elem.classList.add('important');
            pos_ul.insertBefore(elem, pos_li[0]);
        }
    }
    index++;
}

function random_sort(input)
{
    if (input.key == 'r')
    {
        let rand_elem;
        for (let compteur = 1; compteur < pos_li.length; compteur++)
        {
            rand_elem = Math.floor(Math.random() * (pos_li.length - compteur)) + compteur;
            pos_ul.insertBefore(pos_li[rand_elem], pos_li[compteur]);
        }
    }
    else if (input.key == 'd')
    {
        let family = pos_li[0];
        console.log(family);
        pos_ul.insertBefore(family.cloneNode(true), family);
    }
    console.log(input);
}


function change_visibility()
{
    if (new_select.value == '1')
    {
        for (let elem  of pos_li)
        {
            if (elem.nodeType == 1)
            {
                elem.style.visibility = 'hidden';
                if (elem.className == 'important')
                    elem.style.visibility = 'visible';
            }
        }
    }
    else
        for (let elem  of pos_li)
            if (elem.nodeType == 1)
                elem.style.visibility = 'visible';
}

document.body.addEventListener('keyup', random_sort);

//Creation de div et de select
let new_div = document.createElement('div');
let new_select = document.createElement('select');

//premiere option
let tmp_option = document.createElement('option');
tmp_option.setAttribute('value', "1");
let tmp_content = document.createTextNode('important franchises');
tmp_option.appendChild(tmp_content);
new_select.appendChild(tmp_option);

//deuxieme option
tmp_option = document.createElement('option');
tmp_option.setAttribute('value', "2");
tmp_option.setAttribute('selected', "");
tmp_content = document.createTextNode('normal franchises');
tmp_option.appendChild(tmp_content);
new_select.appendChild(tmp_option);

//ajout d'une fonction sur select
new_select.addEventListener('change', change_visibility);

//ajout de select au div
new_div.appendChild(new_select);

//ajout du div au body avant la liste
document.body.insertBefore(new_div, pos_ul);

