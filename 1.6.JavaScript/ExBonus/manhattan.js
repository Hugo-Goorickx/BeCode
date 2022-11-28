function boucle(a, b)
{
    let x = 0;
    while (a != b)
    {
        if (a < b)
            a++;
        else
            b++;
        x++;
    }
    return x;
}

function manhattan(xa, ya, xb, yb)
{
    let result = boucle(xa, xb) + boucle(ya, yb);
    console.log(result);
    document.getElementById("bonusex2out").innerHTML = result;

}

function bonusEx2()
{
    let xa=document.getElementById("exbonus2a").value;
    let ya=document.getElementById("exbonus2b").value;
    let yb=document.getElementById("exbonus2c").value;
    let xb=document.getElementById("exbonus2d").value;
    manhattan(xa, ya, xb, yb);
}