function ex21()
{
    let age = document.getElementById("ex21").value;
    if (age >= 18)
    {
        console.log("Vous etes adulte");
        document.getElementById("ex21out").innerHTML = "Vous etes adulte";
    }
    else
    {
        console.log("Vous n'etes pas adulte");
        document.getElementById("ex21out").innerHTML = "Vous etes adulte";
    }
}
