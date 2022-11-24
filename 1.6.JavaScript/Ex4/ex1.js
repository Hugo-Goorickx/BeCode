function calcSurface (long, larg)
{
    return long * larg;
}
function ex41()
{
    console.log(calcSurface(prompt("longueur: "), prompt("largeur: ")));
}