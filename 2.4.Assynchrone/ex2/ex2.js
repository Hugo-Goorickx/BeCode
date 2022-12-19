function loadAPI()
{
    let input = document.getElementById("name").value; 

    const fetchName = (name) => fetch("https://api.agify.io/?name=" + name);
    
    fetchName(input)
        .then((response) => response.json())
        .then((json) => {
            let newDiv = document.createElement("div");
            newDiv.appendChild(document.createTextNode(input + " a " + json.age + " et compte " + json.count));
            document.body.appendChild(newDiv);
        })
        .catch((error) => {
            console.log("There was an error!", error);
        });
}

document.getElementById("button").addEventListener("click", loadAPI);