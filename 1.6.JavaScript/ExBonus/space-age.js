function ageSpace(time, planet)
{
    while (time <= 0)
        time = prompt("Donnez un age superieur a 0");
    let planets= [["Mercury", "Venus", "Earth", "Mars", "Jupiter"], [0.2408467, 0.61519726, 1, 1.8808158, 11.862615]];
    let orbital_period = planets[1][planets[0].indexOf(planet)];
    let time_earth = 31536000;
    let time_planet = time_earth * orbital_period;
    return time / time_planet;
}
function bonusEx1()
{
    let time = document.getElementById("exbonus1a").value;
    let planet = document.getElementById("exbonus1b").value;
    let result = ageSpace(time, planet);
    console.log(result);
    document.getElementById("bonusex1out").innerHTML = result;

}