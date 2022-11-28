/*
This function will return the distance between two points
He needs two parameters to work
*/            
function calcDistance(a, b)
{
    return Math.sqrt(Math.pow((a[0] - b[0]), 2) + Math.pow((a[1] - b[1]), 2)).toFixed(2);
}

function ex45()
{
    let x1=document.getElementById("ex44a").value;
    let y1=document.getElementById("ex44b").value;
    let y2=document.getElementById("ex44c").value;
    let x2=document.getElementById("ex44d").value;
    let result = calcDistance([x1, y1], [x2, y2]);
    console.log(result);
    document.getElementById("ex45out").innerHTML = result;
}