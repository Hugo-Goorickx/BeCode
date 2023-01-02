import { Formulaire } from "./Formulaire.js";

export function convertDayByDay(listTmp, stock, tmpGlobal)
{
    let compteur = 0,
        totalTemp = 0,
        actuelle = "",
        meteo =[],
        weather = [0, 0, 0, 0 ,0, 0, 0, 0, 0],
        weatherName = ["clear sky", "few clouds", "scattered clouds", "broken clouds" ,"shower rain", "rain", "thunderstorm", "snow", "mist"];
    for (let elem of listTmp)
    {
        if (!actuelle || actuelle == elem.date && listTmp.indexOf(elem) < listTmp.length - 1)
        {
            actuelle = elem.date;
            totalTemp+=elem.degre;
            compteur++;
            meteo.push(elem.weather);
        }
        else
        {
            for (let elem of meteo)
                for (let i = 0; i < weather.length; i++)
                    if (elem == weatherName[i])
                        weather[i]++;
            let tmpVar = 0;
            for (let elem of weather)
                if (tmpVar < elem)
                    tmpVar = elem;
            tmpGlobal.push(new Formulaire(actuelle, ((totalTemp/compteur).toFixed(2)), stock.city.name, weatherName[weather.indexOf(tmpVar)]));
            compteur = 1;
            totalTemp = elem.degre;
            actuelle = elem.date;
            meteo = [];
            weather = [0, 0, 0, 0 ,0, 0, 0, 0, 0];
        }
    }
}