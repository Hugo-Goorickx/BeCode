import { inputHTML } from "./logoWeather.js";

let inputHTMLName = [
    "scattered clouds",
    "broken clouds",
    "shower rain",
    "rain",
    "thunderstorm",
    "snow",
    "few clouds",
    "clear sky",
    "mist"
]

export class Formulaire
{
    constructor(date, degre, city, weather)
    {
        this.date = date;
        this.degre = degre;
        this.city = city;
        this.weather = weather;
        this.logoWeather = inputHTML[inputHTMLName.indexOf(this.weather)];
    }

    affCard()
    {
        let htmlCode = `<div class='box'>
                            ${this.logoWeather}
                            <div class='wave -one'></div>
                            <div class='wave -two'></div>
                            <div class='wave -three'></div>
                            <div class="weathercon"><i class='fas fa-sun' style='color: #d36326;'></i></div>
                            <div class="info">
                                <h2 class="location">${this.city}</h2>
                                <p class="date">${this.date}</p>
                                <p class="date">${this.weather}</p>
                                <h1 class="temp">${this.degre} &deg;C</h1>
                            </div>
                        </div>`;
        return htmlCode;
    }
}