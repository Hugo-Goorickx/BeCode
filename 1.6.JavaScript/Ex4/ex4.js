function pickLearner(inputAr, n)
{
    let array_out = [];
    let rand;
    if (n > inputAr.length || n <= 0)
        return null;
    for (let i = 0; i < n; i++)
    {
        rand = inputAr[Math.floor(Math.random() * inputAr.length)];
        while (array_out.includes(rand))
            rand = inputAr[Math.floor(Math.random() * inputAr.length)];
        array_out.push(rand);
    }
    return array_out;
}

function ex44()
{
    let var_test = ["Arno Volts" ,"Aurélien Mariaule" ,"Aurore Lemaire" ,"Benjamin Porsont" ,"Céline Verreydt" ,"Corentin Miserque" ,"Dominique Coppée" ,"Edouard 	de Romrée de Vichenet" ,"Hugo Goorickx ","Jofrey Houyoux" ,"Jonathan Manes" ,"jonathan bajoux" ,"Laura Wilhelmi" ,"Lysie Soyez" ,"Marnie Benalia" ,"Mathilde 	Cornelis" ,"Milo Bonnet" ,"Nadim El Nakadi" ,"Nathalie Vanden Abeele" ,"Nathalie Goffette" ,"Nour Everaert" ,"Pierre Mauriello" ,"Quentin Bource ","Virginie Dourson"]
    console.log(pickLearner(var_test, 2))
}