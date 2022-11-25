function ex24()
{
    let i = 0;
    while (++i <= 100)
    {
        if (!(i % 2))
        {
            document.getElementById("ex24out").innerHTML = "Num: " + (i / 2);
            console.log("Num: " + (i / 2));
        }
        else
        {
            document.getElementById("ex24out").innerHTML = "Num: " + (i * 3);
            console.log("Num: " + (i * 3));
        }
    }
}
