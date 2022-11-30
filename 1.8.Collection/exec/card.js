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
    let tmp1 = [all_img[where_are_we][0], all_img[where_are_we][1], all_img[where_are_we][2], all_img[where_are_we][3], all_img[where_are_we][4]];
    let div = ['div1', 'div2', 'div3', 'div4', 'div5'];
    let tmp = document.querySelectorAll('.container');

    for(let i = 0; i < tmp.length;i++)
        tmp[i].remove();
    
    for(let i = 0; i < 5;i++)
        tmp1[i].gen_card();
    
    tmp = document.querySelectorAll('.container');
    for(let i = 0; i<tmp.length;i++)
        tmp[i].classList.add(div[i]);
}

//recule
function down()
{
    if (--where_are_we < 0)
        where_are_we = 1;
    onLoadHandler();
}

//avance
function up()
{
    if (++where_are_we > 1)
        where_are_we = 0;
    onLoadHandler();
}

//variables globales
let img1 = new Card("1", "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.", "James Cameron", "Leonardo DiCaprio, Kate Winslet, Billy Zane", "19 Dec 1997", "75", "$659,363,944", "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg");
let img2 = new Card("The Avengers", "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.", "Joss Whedon", "Robert Downey Jr., Chris Evans, Scarlett Johansson", "04 May 2012", "69", "$623,357,910", "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg");
let img3 = new Card("The Avengers", "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.", "Joss Whedon", "Robert Downey Jr., Chris Evans, Scarlett Johansson", "04 May 2012", "69", "$623,357,910", "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg");
let img4 = new Card("2", "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.", "James Cameron", "Leonardo DiCaprio, Kate Winslet, Billy Zane", "19 Dec 1997", "75", "$659,363,944", "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg");
let img5 = new Card("The Avengers", "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.", "Joss Whedon", "Robert Downey Jr., Chris Evans, Scarlett Johansson", "04 May 2012", "69", "$623,357,910", "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg");
let img6 = new Card("The Avengers", "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.", "Joss Whedon", "Robert Downey Jr., Chris Evans, Scarlett Johansson", "04 May 2012", "69", "$623,357,910", "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg");
let img7 = new Card("3", "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.", "James Cameron", "Leonardo DiCaprio, Kate Winslet, Billy Zane", "19 Dec 1997", "75", "$659,363,944", "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg");
let img8 = new Card("The Avengers", "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.", "Joss Whedon", "Robert Downey Jr., Chris Evans, Scarlett Johansson", "04 May 2012", "69", "$623,357,910", "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg");
let img9 = new Card("The Avengers", "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.", "Joss Whedon", "Robert Downey Jr., Chris Evans, Scarlett Johansson", "04 May 2012", "69", "$623,357,910", "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg");
let img10 = new Card("The Avengers", "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.", "Joss Whedon", "Robert Downey Jr., Chris Evans, Scarlett Johansson", "04 May 2012", "69", "$623,357,910", "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg");
let all_img = [[img1, img2, img3, img4, img5], [img6, img7, img8, img9, img10]]
let where_are_we = 0;

