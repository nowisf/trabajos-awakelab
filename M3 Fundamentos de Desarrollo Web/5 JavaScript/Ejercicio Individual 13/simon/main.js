function insertarP (texto){
    document.write(`<p>${texto}<p>`)
}

variable1 = 5
variable2 = 9

insertarP(`variable1 = ${variable1}`)
insertarP(`variable2 = ${variable2}`)

contenidoAlerta = "El numero mayor es "

if(variable1 > variable2){

    contenidoAlerta += `el contenido en la variable1, osea ${variable1}.`
}else if(variable1 < variable2){

    contenidoAlerta += `el contenido en la variable2, osea ${variable2}.`
}else if(variable1 == variable2){

    contenidoAlerta += contenidoAlerta += `Ninguno, ya que las variables son iguales.`
}

contenidoAlerta += "\n"

if(variable1 <= 0 || variable2 <= 0){
    contenidoAlerta += "Almenos uno de los valores es menor o igual que cero."
}else{
    contenidoAlerta += "Ninguno de los valores es menor o igual que cero."
}

contenidoAlerta += "\n"

if(variable1+1 >= variable2){
    contenidoAlerta += "Si a variable1 se le suma 1 iguala o supera en valor a variable 2."
}else{
    contenidoAlerta += "Si a variable1 se le suma 1 no  igualara ni superara en valor a variable 2."
}

alert(contenidoAlerta)

