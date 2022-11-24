function ex26()
{
    let days =["monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let numDay = prompt("number between 1 and 7:");
    while (numDay < 1 || numDay > 7)
        numDay = prompt("number between 1 and 7:");
    console.log(days[numDay - 1]);
}
