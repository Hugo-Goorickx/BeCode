function factorial(a)
{
    if (a < 0)
    {
        if (a < -1)
            return (a * factorial(a + 1));
        return (-1);
    }
    else if (a > 0)
    {
        if (a > 1)
            return (a * factorial(a - 1));
        return (1);
    }
    return (1);
}
function ex46()
{
    console.log(factorial(document.getElementById("ex45").value));
}