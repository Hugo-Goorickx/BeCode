function ex22()
{
    let min = prompt("min: ");
    let max = prompt("max: ");
    if (min > max)
        console.log("Min doit etre plus petit que max...");
    else
    {
        let current = prompt("current: ");
        if (min <= current && current <= max)
            console.log("C'est bon");
        else
            console.log("C'est pas bon");
    }
}
