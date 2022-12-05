class Card
{
    constructor (title, plot, director, actors, released, metascore, boxoffice, img, vid)
    {
        this.title = title;
        this.plot = plot;
        this.director = director;
        this.actors = actors;
        this.released = released;
        this.metascore = metascore;
        this.boxoffice = boxoffice;
        this.img = img;
        this.vid = vid;
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
        
        //create the button to launch the trailler
        let new_span = document.createElement('button');
        new_span.classList.add('title');
        new_span.appendChild(document.createTextNode(this.title));
        new_span.addEventListener("click", this.show.bind(this));
        tmp.appendChild(new_span);

        //add all datas
        tmp.appendChild(this.addElement("plot", this.plot));
        tmp.appendChild(this.addElement("director", "Director : " + this.director));
        tmp.appendChild(this.addElement("actors", "Actros : " + this.actors));
        tmp.appendChild(this.addElement("released", "Date de sortie : " + this.released));
        
        let tmp2 = this.global_div(tmp, 'end');
        tmp2.appendChild(this.addElement("metascore", "Metascore : " + this.metascore));
        tmp2.appendChild(this.addElement("boxoffice", "Box Office : " + this.boxoffice));
        
        //setup the picture
        let test =this.global_div(content, 'flap');
        test.style.setProperty('--img', "url("+this.img+")");
    }

    //show the trailler
    show()
    {
        //define where we add the vid
        let start = document.getElementsByTagName("main")[0];

        //create a div to show a background 
        let cover = document.createElement('div');
        cover.classList.add('cover');
        
        //create the vide with the good attributes
        let new_span = document.createElement('video');
        new_span.classList.add('video');
        new_span.setAttribute("width" , screen.width);
        new_span.setAttribute("height" , screen.width * 0.75);
        new_span.setAttribute("controls" , "");
        new_span.setAttribute("autoplay" , "");
        
        //setup the video's source
        let new_span2 = document.createElement('source');
        new_span2.setAttribute("src" , this.vid);
        
        //create the button to exit the video
        let out_button = document.createElement('button');
        let new_content = document.createTextNode("Exit");
        out_button.classList.add('exit');
        out_button.appendChild(new_content);
        out_button.addEventListener("click", function()
        {
            let tmp = document.getElementsByClassName("cover")[0];
            tmp.remove();
        });
        
        //merge each elem
        new_span.appendChild(new_span2);
        cover.appendChild(out_button);
        cover.appendChild(new_span);
        start.appendChild(cover);
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
        if (++global_index >= all_img.length)
            global_index = 0;
        all_img[global_index].gen_card();
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
    global_index -= nb_card * 2;
    if (global_index < 0)
        global_index += all_img.length;
    onLoadHandler();
}

//avance
function up()
{
    if (global_index > all_img.length)
        global_index = 0;
    onLoadHandler();
}


//variables globales
let global_index = 0;
let size_all = screen.width;
let nb_card = 0;
while (size_all >= 320 && nb_card < 5)
{
    size_all -= 320;
    nb_card++;
}
size_all = screen.width;
for (let i = 0; i < nb_card; i++)
{
    size_all -= 280;
}
let space = size_all / (nb_card + 1);

//Setup function using in html
document.body.onload = function() {onLoadHandler ()};
document.getElementById("b1").onclick = function() {up ()};
document.getElementById("b2").onclick = function() {down ()};

//import and setup all datas from json file
import myJson from '../test.json' assert {type: 'json'};

let all_img = [];
for (let elem of myJson.collection)
    all_img.push(new Card(elem.Title, elem.Plot, elem.Real, elem.Cast, elem.Date, elem.Metascore, elem.Boxoffice, elem.img, elem.video));