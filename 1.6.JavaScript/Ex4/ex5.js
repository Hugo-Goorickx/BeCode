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
    console.log(calcDistance([1, 1], [2, 2]));
    console.log(calcDistance([1, 1], [3, 1]));
    console.log(calcDistance([4, 1], [1, 1]));
    console.log(calcDistance([-2, 2], [2, -2]));
}