function not_young()
{
    let date = new Date(document.getElementById("ex2_input").valueAsNumber);
    let today = new Date();
    document.getElementById("ex2_output").textContent = (today.getTime() - date.getTime())/(1000 * 60 * 60 * 24);
}

setInterval(not_young, 1000);