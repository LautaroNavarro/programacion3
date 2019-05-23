function reverse(string){
    return string.split("").reverse().join("");
}


function chequear_palindromo(form){
    let cadena = form.elements[0].value;
    debugger;
    if (cadena.length % 2 == 0) {
        let result = cadena.substr(0, cadena.length / 2) == reverse(cadena.substr(cadena.length/2, cadena.length))
    }else{
        let result = cadena.substr(0, ((cadena.length - 1) / 2 )) == reverse(cadena.substr(((cadena.length + 1) / 2 ), cadena.length))
    }
    if (result){
        alert("PALINDROMO!");
    }else{
        alert("NO PALINDROMO!");
    }
}
