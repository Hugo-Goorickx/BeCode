function computeChange(prix, recu)
{
    let dif = recu - prix;
    let monnaie = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];

    let out = [];
    for (var elem of monnaie)
    {
        while (dif >= elem)
        {
            out.push(elem);
            dif = (dif - elem).toFixed(2);
        }
    }
    return out;
}

function bonusEx3()
{
    let prix = document.getElementById("exbonus3a").value;
    let recu = document.getElementById("exbonus3b").value;
    console.log(computeChange(prix, recu));
}