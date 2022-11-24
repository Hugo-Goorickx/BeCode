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
    let array_test2 = [100, 101, 102];
    console.log(moyenne(array_test1));
    console.log(moyenne(array_test2));
}