function tryFetch()
{
    fetch("ex1.json")
        .then((response) => response.json())
        .then((json) => 
        {
            let posDiv = document.getElementById("positionList");
            let newList = document.createElement("ul");
            let newElem;
            for (let elem of json.collection)
            {
                newElem = document.createElement("li");
                newElem.appendChild(document.createTextNode(elem.content));
                newList.appendChild(newElem);
                console.log(elem.content);
            }
            posDiv.appendChild(newList);
        })
        .catch((error) => {
            console.log("There was an error!", error);
        });
}


document.getElementById('tryFetch').addEventListener("click", tryFetch);