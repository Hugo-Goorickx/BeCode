function ex23()
{
    let i = 0;
    while (++i <= 100)
        if (!(i % 2))
            console.log("Num: " + i);
    i = 0;
    for(; i <= 100; i += 2)
        console.log("Num: " + i);
}
