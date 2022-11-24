function ex27()
{
    let n = prompt("number repeat: ");
    let sum = 0;
    for (let i = 0; i < n; i++)
        sum += +prompt("number: ");
    console.log(sum);
}