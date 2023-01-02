export function genWeather(tmpGlobal)
{
    let innerHTML = "";
    for (let elem of tmpGlobal)
        innerHTML += elem.affCard();
    tmpGlobal = [];
    document.getElementById("allMeteo").innerHTML += '<div class="oneCity">' + innerHTML + '</div>';
}