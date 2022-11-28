function rand(x)
{
    return Math.floor(Math.random() * x) + 1;
}

function gen_rec()
{
    let tmp;
    let x = 100000000;
    let rec_array = [];
    for (let i = 0; i < 1000; i++)
    {
        tmp = new Rectangle(rand(x),rand(x),rand(x),rand(x));
        rec_array.push(tmp);
    }
    return (rec_array);
}

function detect_col(all_rec, i, sum)
{
    let now_rec = all_rec[i];

    for (let x = i + 1; x < all_rec.length; x++)
    {
        if (now_rec.collides(all_rec[x]))
        {
            sum++;
            // console.log("rectangle " + i + " est en collision avec le rectangle " + x);
        }
    }
    if (i + 1 >= all_rec.length)
    {
        console.log(sum);
        return sum;
    }
    return detect_col(all_rec, ++i,sum);
}

function ex63()
{
    document.getElementById("ex63out").innerHTML = "Vos rectangles ont genere " + detect_col(gen_rec(), 0, 0) + " collisions";
}