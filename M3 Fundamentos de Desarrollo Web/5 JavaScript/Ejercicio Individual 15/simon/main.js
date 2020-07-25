pantalla = document.getElementById("pantalla")
pantalla.innerText = "0"

document.onkeydown = function(evt) {

    if (loUltimoQueSePresionoFueLaPantalla){
        evt = evt || window.event;
        var charCode = evt.keyCode || evt.which;
        var charStr = String.fromCharCode(charCode);

        if(!isNaN(charStr)){

            if(ingresandoSiguienteNumero){
                pasarAlValorSecundario()
            }
        
            if (pantalla.innerText != "0"){
                pantalla.innerText += charStr
            }else{
                pantalla.innerText = charStr
            }

        }else if(charCode === 8){
            pantalla.innerText = ""
        }else if(charStr == "%" || charStr == "/" || charStr == "*" || charStr == "x" || charStr == "X" || charStr == "+" || charStr == "-" || charStr == "=" || charStr == "."){
            switch(charStr){
                case "%":
                    restoFuncion()
                    break;
                case "/":
                    divisionFuncion()
                    break;
                case "*":
                    porFuncion()
                    break;
                case "x":
                    porFuncion()
                    break;
                case "X":
                    porFuncion()
                    break;
                case "+":
                    masFuncion()
                    break;
                case "-":
                    menosFuncion()
                    break;
                case "=":
                    igualFuncion()
                    break;
                case ".":
                    puntoFuncion()
                    break;
            }   
        }
    }
};


function pantallaFuncion(){

    if(ingresandoSiguienteNumero){
        pasarAlValorSecundario()
    }

    loUltimoQueSePresionoFueLaPantalla = true
}

function delFuncion(){

    if(ingresandoSiguienteNumero){
        pasarAlValorSecundario()
    }

    pantalla.innerText = "0"

    loUltimoQueSePresionoFueLaPantalla = false
    operacion = null
    valorSecundario = null
    ingresandoSiguienteNumero = false
}

function ceroFuncion(){

    if(ingresandoSiguienteNumero){
        pasarAlValorSecundario()
    }

    if (pantalla.innerText != "0"){
        pantalla.innerText += "0"
    }
    loUltimoQueSePresionoFueLaPantalla = false
}

function unoFuncion(){

    if(ingresandoSiguienteNumero){
        pasarAlValorSecundario()
    }

    if (pantalla.innerText != "0"){
        pantalla.innerText += "1"
    }else{
        pantalla.innerText = "1"
    }

    loUltimoQueSePresionoFueLaPantalla = false
}

function dosFuncion(){

    if(ingresandoSiguienteNumero){
        pasarAlValorSecundario()
    }

    if (pantalla.innerText != "0"){
        pantalla.innerText += "2"
    }else{
        pantalla.innerText = "2"
    }
    loUltimoQueSePresionoFueLaPantalla = false
}

function tresFuncion(){

    if(ingresandoSiguienteNumero){
        pasarAlValorSecundario()
    }

    if (pantalla.innerText != "0"){
        pantalla.innerText += "3"
    }else{
        pantalla.innerText = "3"
    }
    loUltimoQueSePresionoFueLaPantalla = false
}

function cuatroFuncion(){

    if(ingresandoSiguienteNumero){
        pasarAlValorSecundario()
    }

    if (pantalla.innerText != "0"){
        pantalla.innerText += "4"
    }else{
        pantalla.innerText = "4"
    }
    loUltimoQueSePresionoFueLaPantalla = false
}

function cincoFuncion(){

    if(ingresandoSiguienteNumero){
        pasarAlValorSecundario()
    }

    if (pantalla.innerText != "0"){
        pantalla.innerText += "5"
    }else{
        pantalla.innerText = "5"
    }
    loUltimoQueSePresionoFueLaPantalla = false
}

function seisFuncion(){

    if(ingresandoSiguienteNumero){
        pasarAlValorSecundario()
    }

    if (pantalla.innerText != "0"){
        pantalla.innerText += "6"
    }else{
        pantalla.innerText = "6"
    }
    loUltimoQueSePresionoFueLaPantalla = false
}

function sieteFuncion(){

    if(ingresandoSiguienteNumero){
        pasarAlValorSecundario()
    }

    if (pantalla.innerText != "0"){
        pantalla.innerText += "7"
    }else{
        pantalla.innerText = "7"
    }
    loUltimoQueSePresionoFueLaPantalla = false
}

function ochoFuncion(){

    if(ingresandoSiguienteNumero){
        pasarAlValorSecundario()
    }

    if (pantalla.innerText != "0"){
        pantalla.innerText += "8"
    }else{
        pantalla.innerText = "8"
    }
    loUltimoQueSePresionoFueLaPantalla = false
}

function nueveFuncion(){

    if(ingresandoSiguienteNumero){
        pasarAlValorSecundario()
    }

    if (pantalla.innerText != "0"){
        pantalla.innerText += "9"
    }else{
        pantalla.innerText = "9"
    }
    loUltimoQueSePresionoFueLaPantalla = false
}

function puntoFuncion(){
    if(pantalla.innerText == ""){
        pantalla.innerText += "0"
    }
    pantalla.innerText += "."
    loUltimoQueSePresionoFueLaPantalla = false
}

function pendienteParaPasarAlValorSecundario(){

    ingresandoSiguienteNumero = true

    igualFuncion()
    

}

function pasarAlValorSecundario(){

    valorPantalla = pantalla.innerText

    valorSecundario = parseInt(valorPantalla)
    
    pantalla.innerText = "0"

    ingresandoSiguienteNumero = false
    

}

function igualFuncion(){

    switch(operacion){
        case null:
            break;

        case "+":
            pantalla.innerText = parseInt(pantalla.innerText) + valorSecundario
            valorSecundario = null
            break;

        case "-":
            pantalla.innerText =valorSecundario - parseInt(pantalla.innerText)
            valorSecundario = null
            break;

        case "*":
            pantalla.innerText =valorSecundario * parseInt(pantalla.innerText)
            valorSecundario = null
            break;

        case "/":
            pantalla.innerText =valorSecundario / parseInt(pantalla.innerText)
            valorSecundario = null
            break;
        
        case "%":
            pantalla.innerText =valorSecundario % parseInt(pantalla.innerText)
            valorSecundario = null
            break;

        

    }

    operacion = null
    ingresandoSiguienteNumero = true
}

function masFuncion(){

    pendienteParaPasarAlValorSecundario()

    operacion = "+"
}

function menosFuncion(){

    pendienteParaPasarAlValorSecundario()

    operacion = "-"
}

function porFuncion(){

    pendienteParaPasarAlValorSecundario()

    operacion = "*"
}

function divisionFuncion(){

    pendienteParaPasarAlValorSecundario()

    operacion = "/"
}

function restoFuncion(){

    pendienteParaPasarAlValorSecundario()

    operacion = "%"
}

loUltimoQueSePresionoFueLaPantalla = false

operacion = null

valorSecundario = null

ingresandoSiguienteNumero = false