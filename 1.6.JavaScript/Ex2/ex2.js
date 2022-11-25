function ex22()
{
    let min = document.getElementById("ex22a").value;
    let max = document.getElementById("ex22b").value;
    if (min > max)
    {
        console.log("Min doit etre plus petit que max...");
        document.getElementById("ex22out").innerHTML = "Min doit etre plus petit que max...";

    }
    else
    {
        let current = prompt("current: ");
        if (min <= current && current <= max)
        {
            console.log("C'est bon");
           document.getElementById("ex22out").innerHTML = "C'est bon";
            
        }
        else
        {
            console.log("C'est pas bon");
            document.getElementById("ex22out").innerHTML = "C'est pas bon";

        }
    }
}
