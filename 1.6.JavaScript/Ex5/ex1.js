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
function ex51()
{
    let serieTV = askTvSerie("Hugo", 2001, ["moi", "ma mere", "ma copine"]);
    console.log("Name: " + serieTV["name"] + "\n" + "Prod year: " + serieTV["prod_year"] + "\n" + "Casting: " + serieTV["cast"]);
}