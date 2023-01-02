import { initButton } from "./initButton.js";
import { catchData } from "./catchData.js";

let tmpGlobal = [],
    input = document.getElementById('allCity');
    

initButton(input);

document.getElementById("genForm").addEventListener('click', function(){
    catchData(tmpGlobal, input);
    tmpGlobal = [];
});