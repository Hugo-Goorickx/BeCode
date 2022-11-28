function moyenne(array_num)
{
    let moy = 0;
    for (let x = 0; x < array_num.length; x++)
        moy += array_num[x];  
    moy /= array_num.length;
    return moy;
}

function ex33()
{
    let array_test1 = [1, 2, 3, 4, 5];
    console.log(moyenne(array_test1));
    document.getElementById("ex33out").innerHTML = moyenne(array_test1);
}