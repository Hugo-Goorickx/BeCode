function sum(array_num)
{
    let sum = 0;
    for (let x = 0; x < array_num.length; x++)
        sum += array_num[x];      
    return sum;
}

function ex32()
{
    let array_test1 = [1, 2, 3, 4, 5];
    console.log(sum(array_test1));
    document.getElementById("ex32out").innerHTML = sum(array_test1);
}