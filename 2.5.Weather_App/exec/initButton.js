export function initButton(input)
{
    let listCity = JSON.parse(localStorage.getItem("allCity"));
    input.innerHTML += "<option value='default'>default</option>";
    
    if (listCity)
        for (let elem of listCity)
            input.innerHTML += `<option value="${elem}">${elem}</option>`;
    else
        listCity = [];
}