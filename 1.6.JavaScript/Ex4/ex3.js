/* 
Return a random num between 1 and 10
If you want change it you can modif 10
*/
function rand10()
{
    return Math.floor(Math.random() * 10) + 1;
}
/*
Gen a array with only randoms values
*/
function mutliRand(n)
{
    let array_out = [];
    for (let i = 0; i < n; i++)
        array_out.push(rand10());
    return array_out;
}
function ex43()
{
    console.log(mutliRand(prompt("how many numbers :")));
}