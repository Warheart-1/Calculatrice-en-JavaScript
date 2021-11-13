var number1, number2, resultat, operator, option1, resultath;
var test = false;
var test2 = false;

function autorepeat() {
    if (test === true) {
      send();
    }
}
  
function numberadd(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;

    if(number1 > 1000){
       document.getElementById("number1").classList.add("red");
    }else 
        document.getElementById("number1").classList.remove("red");

    if (number2 > 1000){
        document.getElementById("number2").classList.add("red");
    }else 
        document.getElementById("number2").classList.remove("red");
    
test2 = true;
}

function add(){
    option1 = 1;
    autorepeat();
}

function moins(){
    option1 = 2;
    autorepeat();
}

function times(){
    option1 = 3;
    autorepeat();
}

function divise(){
    option1 = 4;
    autorepeat();
}

function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    if(test2 == false){
        document.getElementById("result_operator").innerHTML = "<p>Veuillez ressaisir les valeurs d'entrées/sorties.</p>";
        console.log(test, test2);
        } else 
            if(option1 == 1){
                resultat = (parseFloat(number1) + parseFloat(number2));
                operator = "+";
            }
            else if(option1 == 2){
                resultat = (parseFloat(number1) - parseFloat(number2));
                operator = "-";
            }
            else if(option1 == 3){
                resultat = (parseFloat(number1) * parseFloat(number2));
                operator = "*";
            }
            else if(option1 == 4){
                resultat = (parseFloat(number1) / parseFloat(number2));
                operator = "/";
            }
            if(test2 == false){
                document.getElementById("result_operator").innerHTML = "<p>Veuillez ressaisir les valeurs d'entrées/sorties.</p>";
                }
                else if (isNaN(number1 || number2)){
                    document.getElementById("result_operator").innerHTML = "<p>Veuillez ressaisir les valeurs d'entrées/sorties.</p>";
                }
                else
                    document.getElementById("result_operator").innerHTML = "<p>" + number1 + " " + operator + " " + number2 + " = <span>" + resultat + " </span></p>";
                    test = true;
                    history();
}

function reset(){
    document.location.reload(false);
}

function history(){
    if (sessionStorage.getItem('Autosave')){
        resultat.value = sessionStorage.getItem('Autosave');
    }
    sessionStorage.setItem('Autosave', resultat.value);
    console.log(resultat);
}