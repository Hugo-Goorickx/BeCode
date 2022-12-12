let times2 = 0;
let input2 = document.getElementById('inputEx2');
function prompt()
{
    if (++times2 % 60 == 0)
    {
        input2.value = times2 / 60 + " minute(s) has passed";
        console.log(times2 / 60 + " minute(s) has passed")

    }
    else
    {
        input2.value = times2 % 60 + " second(s) has passed " + Math.floor(times2 / 60) + " minute(s) has passed";
        console.log(times2 % 60 + " second(s) has passed " + Math.floor(times2 / 60) + " minute(s) has passed");

    }
}

setInterval(prompt, 1000);