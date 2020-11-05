var valor1 = 0;
var valor2 = 0;
var operation = 0;
var display = document.getElementById("display-frame");
display.value = 0;
const teclasNumericas = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const teclasLimpeza = ['C', 'AC'];
const teclasOperacao = [ 'divide-by', 'times', 'minus', 'plus', 'dot', 'equals'];


function tecla(valor) {
    if(valor == 'signal-change'){
        display.value = Number(display.value) * -1;  
    }
    if (teclasNumericas.indexOf(valor) > -1) {
        if(display.value.length > 7){
            return
        };
        if (display.value == valor1 || display.value == 0) {
            display.value = valor;
        } else {
            display.value = display.value + valor;
        }
    }
    if (teclasLimpeza.indexOf(valor) > -1) {
        if (valor == 'C') {
            if (operation != 0) {
                display.value = valor1;
                operation = 0;
            } else {
                display.value = 0;
                valor1 = 0;
            }
        }
        if (valor == 'AC') {
            display.value = 0;
            clearall();
        }
    }
    if (teclasOperacao.indexOf(valor) > -1) {
        if (operation != 0) {
            valor2 = display.value;
            let solve = String(solveOperation());
            if(solve.length > 7){
                display.value = 'ERR'
                clearall();                
            }else{
                display.value = solve;
            }
            valor1 = display.value;
        } else {
            valor1 = display.value;
            display.value = 0;
        }
        operation = valor;
    }
}

function solveOperation() {
    valor1 = Number(valor1);
    valor2 = Number(valor2);
    switch (operation) {
        case 'divide-by':{
            return valor1 / valor2;
        } 
        case 'times':{
            return valor1 * valor2;
        } 
        case 'minus':{
            return valor1 - valor2;
        }  
        case 'plus':{
            return valor1 + valor2; 
        } 
    }
}

function clearall(){
    valor1 = 0;
    valor2 = 0;
    operation = 0;
}