import { convertDayByDay } from "./convertDayByDay.js";
import { genWeather } from "./genWeather.js";
import { Formulaire } from "./Formulaire.js";


export async function catchData(tmpGlobal, input)
{
    let city,
        listCity = JSON.parse(localStorage.getItem("allCity"));

    
    if (document.getElementById('allCity').value == 'default' && !document.getElementById('ville').value)
    {
        window.alert("il manque la ville");
        return;
    }
    if (document.getElementById('allCity').value == 'default')
    {
        let x = 0;
        city = document.getElementById('ville').value;
        for (let elem of listCity)
        {
            if (elem == city)
            {
                x = 1;
                break;
            }
        }
        if (!x)
        {
            listCity.push(city);
            localStorage.setItem('allCity', JSON.stringify(listCity));
        }
    }
    else
        city = document.getElementById('allCity').value;
    document.getElementById('ville').value = '';
    if (listCity)
    {
        input.innerHTML = '<option value="default">default</option>';
        for (let elem of listCity)
            input.innerHTML += `<option value="${elem}">${elem}</option>`;
    }
    const response = await fetch(
    	`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=18e2a500fc89261ec307dc715194695d&units=metric`,
        {
     	    method: 'GET'
    	});
    let stock = await response.json();
    let listTmp = [];
    for (let elem of stock.list)
        listTmp.push(new Formulaire(elem.dt_txt.split(" ")[0], elem.main.temp, stock.city.name, elem.weather[0].description));
    convertDayByDay(listTmp, stock, tmpGlobal);
    genWeather(tmpGlobal);
}