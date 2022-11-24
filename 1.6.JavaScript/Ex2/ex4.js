function ex24()
{
    let i = 0;
    while (++i <= 100)
    {
        if (!(i % 2))
            console.log("Num: " + (i / 2));
        else
            console.log("Num: " + (i * 3));
    }
}
