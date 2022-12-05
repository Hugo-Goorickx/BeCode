/*
*/

//first exercice
    //select two li
const place_ol = document.querySelector('ol');
let end = place_ol.children[place_ol.children.length - 1];
let start = place_ol.children[0];

    //move end before start
place_ol.insertBefore(end, start);

//second exercise
    //select two sections
const all_sect = document.querySelectorAll('section');
const sect2 = all_sect[1];
const sect3 = all_sect[2];

    //init two h2 to switch
let sect2_h2 = sect2.querySelector('h2');
let sect3_h2 = sect3.querySelector('h2');

    //make deep copy
var sect2_h2_cop = sect2_h2.cloneNode(true);
var sect3_h2_cop = sect3_h2.cloneNode(true);

    //switch the nodes
sect3_h2.parentNode.replaceChild(sect2_h2_cop, sect3_h2);
sect2_h2.parentNode.replaceChild(sect3_h2_cop, sect2_h2);

//third exercise
    //remove section 3
sect3.remove();