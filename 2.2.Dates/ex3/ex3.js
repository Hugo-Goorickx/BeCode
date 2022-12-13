function addTime(e)
{
    if ((e.key >= '0' && e.key <= '9') || e.key == "Enter")
    {
        let date = document.getElementById("ex3_input").value * (1000 * 60 * 60);
        let date1 = new Date();
        date1.setTime(date1.getTime() + date);
        document.getElementById("ex3_output").textContent = date1.getHours() + ":" + date1.getMinutes() + ":" + date1.getSeconds() + " " + date1.getDate() + "/" + date1.getMonth() + "/" + date1.getFullYear();
    }
}
document.getElementById("ex3_input").addEventListener('keydown', addTime);
