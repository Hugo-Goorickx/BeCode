function loadAPI()
{
    let inputName = document.getElementById("name").value; 
    let inputCountry = document.getElementById("country").value; 
    let tmp = [];
    const fetchName = (name, country) => fetch("https://api.agify.io/?name=" + name + "&country_id=" + country);
    
    fetchName(inputName, inputCountry)
        .then((response) => response.json())
        .then((json) => {
            let newDiv = document.createElement("div");
            newDiv.appendChild(document.createTextNode(inputName + " a " + json.age + "ans et compte " + json.count));
            document.body.appendChild(newDiv);
            tmp = JSON.parse(localStorage.getItem("Save"));
            if (!tmp)
                tmp = [];
            tmp.push(json);
            localStorage.setItem("Save", JSON.stringify(tmp));
            console.log(tmp);
        })
        .catch((error) => {
            console.log("There was an error!", error);
        });
}

document.getElementById("button").addEventListener("click", loadAPI);

let tmp = JSON.parse(localStorage.getItem("Save"));
if (tmp)
{
    for (let elem of tmp)
    {
        let newDiv = document.createElement("div");
        newDiv.appendChild(document.createTextNode(elem.name + " a " + elem.age + "ans et compte " + elem.count));
        document.body.appendChild(newDiv);
    }
}
