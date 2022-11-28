function calcSurface (long, larg)
{
    return long * larg;
}
function ex41()
{
    let result = calcSurface(document.getElementById("ex41a").value, document.getElementById("ex41b").value);
    console.log(result);
    document.getElementById("ex41out").innerHTML = result;
}