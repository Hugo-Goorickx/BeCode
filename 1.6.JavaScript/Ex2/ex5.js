function ex25()
{
    let i = document.getElementById("ex25").value;
    while (i != 42)
        i = prompt("Your favorite number:");
    console.log("cool");
    document.getElementById("ex25out").innerHTML = "Cool";
}