function ex26()
{
    let days =["monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let numDay = document.getElementById("ex26").value;
    while (numDay < 1 || numDay > 7)
        numDay = prompt("number between 1 and 7:");
    console.log(days[numDay - 1]);
}
