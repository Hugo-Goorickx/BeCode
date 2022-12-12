let times = -1;
let input = document.getElementById('inputEx1');
let output= "prout"
function prompt()
{
    if (++times < output.length)
        input.value += output[times];
    else
    {
        input.value = "";
        times = -1;
    }
    setTimeout(prompt, 1000);
}

setTimeout(prompt, 1000);