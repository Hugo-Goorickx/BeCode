function tech_1(array_in)
{
    let array_out = [];
    for (let x = 0; x < array_in.length; x++)
        array_out.push(array_in[x]);
    return array_out;
}
function tech_2(array_in)
{
    return Object.values(array_in);
}
function ex34()
{
    let array1 = [1, 2, 3, 4, 5];
    console.log(tech_1(array1));
    document.getElementById("ex34out").innerHTML = tech_1(array1) + " " + tech_2(array1);
}