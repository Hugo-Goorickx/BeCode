function ex27()
{
    // let n = document.getElementById("ex27").value;
    let n = prompt("number: ");
    let sum = 0;
    for (let i = 0; i < n; i++)
        sum += +prompt("number: ");
    console.log(sum);
}