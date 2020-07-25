function sumarComoMad(){

    inputContenido = document.getElementById("input").value

    if(!isNaN(inputContenido)){

        document.getElementById("respuesta").innerHTML  = "XDDD"

        contador = 1
        resultado = 0
        while(contador <= inputContenido){
            resultado += contador
            contador ++
        }

        document.getElementById("respuesta").innerHTML  = resultado

    }else{

        alert("El input no es un numero ::)")
    }

    
}

document.write(`<textarea id = "input"  rows="3" cols="50"> ::) </textarea>
                <input onclick = "sumarComoMad()" type="submit" value="sumar">
                <div id=respuesta></div>`)