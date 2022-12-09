/*
*/

/**
 * Ex1
 */
let ex1_input = document.getElementById('firstname');
let ex1_output = document.getElementById('display-firstname');

function add_char()
{
    ex1_output.innerText = ex1_input.value;
}

ex1_input.addEventListener('keyup', add_char);

/**
 * Ex2
 */
let ex2_input = document.getElementById('age');
let ex2_output = document.getElementById('a-hard-truth');

function verif_age()
{
    ex2_output.style.visibility = 'hidden';
    if (ex2_input.value >= 18)
        ex2_output.style.visibility = 'visible';
}

ex2_input.addEventListener('keyup', verif_age);

/**
 * Ex3
 */
let ex3_input1 = document.getElementById('pwd');
let ex3_input2 = document.getElementById('pwd-confirm');

function check_password()
{
    document.getElementsByTagName('section')[3].style.backgroundColor = '#FF0000';
    if (ex3_input1.value == ex3_input2.value && ex3_input1.value.length >= 6)
        document.getElementsByTagName('section')[3].style.backgroundColor = '#00FF00';
}

ex3_input2.addEventListener('keyup', check_password);

/**
 * Ex4
 */

let ex4_input = document.getElementById('toggle-darkmode');

function change_background()
{
    document.body.style.backgroundColor = "#FFFFFF";
    document.body.style.color = "#000000";
    if (ex4_input.value == 'dark')
    {
        document.body.style.backgroundColor = "#000000";
        document.body.style.color = "#FFFFFF";
    }
}

ex4_input.addEventListener('change', change_background);