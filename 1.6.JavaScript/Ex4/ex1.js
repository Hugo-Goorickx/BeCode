function calcSurface (long, larg)
{
    return long * larg;
}
function ex41()
{
    console.log(calcSurface(document.getElementById("ex41a").value, document.getElementById("ex41b").value));
}