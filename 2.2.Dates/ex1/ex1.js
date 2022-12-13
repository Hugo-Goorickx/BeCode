function show(num)
{
    let date1 = new Date(new Date() + 'GMT+0'+ num +':00');
    let anchorage = document.getElementById(num);
    anchorage.textContent = date1.getHours() + ":" + date1.getMinutes() + ":" + date1.getSeconds() + " " + date1.getDate() + "/" + date1.getMonth() + "/" + date1.getFullYear();
}

function ex1()
{
    show("9");
    show("3");
    show("0");
    show("1");
}
setInterval(ex1, 1000);
/**
 * 
 anchorage 9
 Saint-Petersburg 3
 Reykjavik 0 
 bx 1
 */