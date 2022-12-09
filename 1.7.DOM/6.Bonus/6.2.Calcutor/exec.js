let all_calc = [];
let index = -1;
let tmp_index = -1;

//fonction qui évalue le chiffre et renvoie la sortie
function calculer() 
{ 
    let a = document.getElementById("output").value 
    let b = eval(a) 
    all_calc.push(b);
    tmp_index = 0;
    index++;
    document.getElementById("output").value = b 
} 
//fonction qui affiche la valeur
function afficher(val) 
{ 
    document.getElementById("output").value+=val 
} 
//fonction qui efface l'écran 
function effacer() 
{ 
    document.getElementById("output").value = "" 
}

//background de la calculatrice
let back_calc = document.createElement('div');
back_calc.classList.add('gcalc');

//calculatrice
let calc = document.createElement('div');
calc.classList.add('calcul');

//Output
let input = document.createElement('input');
input.classList.add('div1');
input.id = "output";

//Les buttons
function gen_but(div, addClass, fct, txt)
{
    let input = document.createElement('button');
    input.classList.add(div);
    input.classList.add(addClass);
    input.setAttribute("onclick", fct);
    let tmp_content =document.createTextNode(txt);
    input.appendChild(tmp_content);
    return (input);
}

calc.append(gen_but('div2', 'num', "afficher('7')", '7'), gen_but('div3', 'num', "afficher('8')", '8'), gen_but('div4', 'num', "afficher('9')", '9'));
calc.append(gen_but('div5', 'op', "afficher('/')", '/'), gen_but('div6', 'num', "afficher('4')", '4'), gen_but('div7', 'num', "afficher('5')", '5'));
calc.append(gen_but('div8', 'num', "afficher('6')", '6'), gen_but('div9', 'op', "afficher('*')", '*'), gen_but('div10', 'num', "afficher('1')", '1'));
calc.append(gen_but('div11', 'num', "afficher('2')", '2'), gen_but('div12', 'num', "afficher('3')", '3'), gen_but('div13', 'op', "afficher('-')", '-'));
calc.append(gen_but('div14', 'num', "afficher('0')", '0'), gen_but('div15', 'num', "afficher('.')", '.'), gen_but('div16', 'op', "afficher('+')", '+'));
calc.append(gen_but('div17', 'result', "calculer()", '='), gen_but('div18', 'reset', "effacer()", 'C'), input);

let main = document.getElementsByTagName("main")[0];
console.log(main);
main.appendChild(back_calc);
main.appendChild(calc);



////////////////////////////////

function add(inside)
{
    let input = inside.key;
    switch (input) {
        case '1':
            afficher('1');
        break;
        case '2':
            afficher('2');
        break;
        case '3':
            afficher('3');
        break;
        case '4':
            afficher('4');
        break;
        case '5':
            afficher('5');
        break;
        case '6':
            afficher('6');
        break;
        case '7':
            afficher('7');
        break;
        case '8':
            afficher('8');
        break;
        case '9':
            afficher('9');
        break;
        case '0':
            afficher('0');
        break;
        case '/':
            afficher('/');
        break;
        case '*':
            afficher('*');
        break;
        case '-':
            afficher('-');
        break;
        case '+':
            afficher('+');
        break;
        case '.':
            afficher('.');
        break;
        case 'Enter':
            calculer();
        break;
        case 'ArrowUp':
            console.log(index - tmp_index + " " + tmp_index + " " + index);

            if (index - tmp_index >= 0)
            {
                effacer();
                afficher(all_calc[index - tmp_index]);
                if (tmp_index < index)
                    tmp_index++;
            }
        break;
        case 'ArrowDown':
            console.log(index - tmp_index + " " + tmp_index + " " + index);
            if (tmp_index >= 0 && index >= tmp_index)
            {
                effacer();
                afficher(all_calc[index - tmp_index--]);

            }
        break;
        case 'Backspace':
            effacer();
        break;
        default:
            console.log(input);
        break;
    }
}

document.body.addEventListener("keyup", add);