function sleep(time)
{
    const start = Date.now();
    let now = Date.now();
    while (now - start < time)
        now = Date.now();
}

function ex23()
{
    let i = 0;
    while (++i <= 100)
    {
        if (!(i % 2))
        {
            document.getElementById("ex23out").innerHTML = "Num: " + i;
            console.log("Num: " + i);
        }
    }
    for(i = 0; i <= 100; i += 2)
    {
        document.getElementById("ex23out").innerHTML = "Num: " + i;
        console.log("Num: " + i);
    }
}


