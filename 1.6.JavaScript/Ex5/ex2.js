/*
This function will return the distance between two points
He needs two parameters to work
*/            
function askTvSerie(name_in, prod_year_in, cast_in)
{
    let TvSerie = {
        name: name_in,
        prod_year: prod_year_in,
        cast: cast_in
        };
    return (TvSerie);
}
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
function randomizeCast(SerieTV)
{
    SerieTV["cast"] = pickLearner(SerieTV["cast"], SerieTV["cast"].length);
    return SerieTV;
}
function ex52()
{
    let SerieTV = askTvSerie("Hugo", 2001, ["moi", "ma mere", "ma copine"]);
    SerieTV = randomizeCast(SerieTV);
    console.log("Name: " + SerieTV["name"] + "\n" + "Prod year: " + SerieTV["prod_year"] + "\n" + "Casting: " + SerieTV["cast"]);
}