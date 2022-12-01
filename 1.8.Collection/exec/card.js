class Card
{
    constructor (title, plot, director, actors, released, metascore, boxoffice, img)
    {
        this.title = title;
        this.plot = plot;
        this.director = director;
        this.actors = actors;
        this.released = released;
        this.metascore = metascore;
        this.boxoffice = boxoffice;
        this.img = img;
    }

    //setup la div avec contenu
    addElement(className, content)
    {
        let new_span = document.createElement('div');
        let new_content = document.createTextNode(content);
        new_span.classList.add(className);
        new_span.appendChild(new_content);
        return new_span
    }

    //setup la div sans contenu
    global_div(content, className)
    {
        let tmp = document.createElement('div');
        tmp.classList.add(className);
        if (content)
            content.appendChild(tmp);
        return tmp;
    }

    //genere la carte
    gen_card()
    {
        //init card
        let start = document.getElementsByTagName("main")[0];
        let content = this.global_div(start, 'container');
        
        //add all information
        let tmp = this.global_div(content, 'content');
        tmp.appendChild(this.addElement("title", this.title));
        tmp.appendChild(this.addElement("plot", this.plot));
        tmp.appendChild(this.addElement("director", this.director));
        tmp.appendChild(this.addElement("actors", this.actors));
        tmp.appendChild(this.addElement("released", this.released));
        
        let tmp2 = this.global_div(tmp, 'end');
        tmp2.appendChild(this.addElement("metascore", this.metascore));
        tmp2.appendChild(this.addElement("boxoffice", this.boxoffice));
        
        //setup the picture
        let test =this.global_div(content, 'flap');
        test.style.setProperty('--img', "url("+this.img+")");
    }
}

//affiche les 3 cardes en focntion de la page ou on se situe
function onLoadHandler()
{

    let tmp = document.querySelectorAll('.container');

    for(let i = 0; i < tmp.length;i++)
        tmp[i].remove();
    
    for (let i = 0; i < nb_card;i++)
    {
        if (++where_are_we >= all_img.length)
            where_are_we = 0;
        all_img[where_are_we].gen_card();
    }
    
    tmp = document.querySelectorAll('.container');
    for(let i = 0; i < nb_card;i++)
    {
        tmp[i].classList.add("div" + (i + 1));
        tmp[i].style.left = ((280 * i) + (space * (i + 1))) + "px";
    }
}

//recule
function down()
{
    where_are_we -= nb_card * 2;
    if (where_are_we < 0)
        where_are_we += all_img.length;
    onLoadHandler();
}

//avance
function up()
{
    if (where_are_we > all_img.length)
        where_are_we = 0;
    onLoadHandler();
}


//variables globales
let where_are_we = 0;
let size_all = screen.width;
let nb_card = 0;
while (size_all >= 320 && nb_card < 5)
{
    size_all -= 320;
    nb_card++;
}
let space = 20 + (size_all / (nb_card));
document.body.onload = function() {onLoadHandler
    ()};
document.getElementById("b1").onclick = function() {up
    ()};
document.getElementById("b2").onclick = function() {down
    ()};
import myJson from '../test.json' assert {type: 'json'};

let tmp;
let all_img = [];
for (let elem of myJson.collection)
{
    tmp = new Card(elem.Title, elem.Plot, elem.Real, elem.Cast, elem.Date, elem.Metascore, elem.Boxoffice, elem.img);
    all_img.push(tmp);
}