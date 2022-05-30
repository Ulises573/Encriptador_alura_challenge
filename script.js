const inputTexto = document.querySelector(".input-text");

const mensaje = document.querySelector(".input-text-area");

const texto1= document.getElementById('texto1')

const texto2= document.getElementById('texto2')


const muñeco= document.getElementById('muñeco')

const copy1= document.getElementById('copy1')

function btnencriptar(){

    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    muñeco.style.display= "none"
    texto1.style.display= "none"
    texto2.style.display= "none"
    copy1.style.display= "block"
}

function encriptar(StringParaEncriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    StringParaEncriptar = StringParaEncriptar.toLowerCase();
    for (let i = 0; i< matrizCodigo.length; i++){
        if  (StringParaEncriptar.includes(matrizCodigo[i][0])){
            StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigo[i][0],
            matrizCodigo[i][1]);
    }

} 
 return StringParaEncriptar;

}

function btnDesencriptar(){

    const textoEncriptado = desencriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    muñeco.style.display= "none"
    texto1.style.display= "none"
    texto2.style.display= "none"
    copy1.style.display= "block"
}

function desencriptar(StringParaDesencriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    StringParaDesencriptar = StringParaDesencriptar.toLowerCase();
    for (let i = 0; i< matrizCodigo.length; i++){
        if  (StringParaDesencriptar.includes(matrizCodigo[i][1])){
            StringParaDesencriptar = StringParaDesencriptar.replaceAll(matrizCodigo[i][1],
            matrizCodigo[i][0]);
    }

} 
 return StringParaDesencriptar; 
}

function copiar(){

    var contenido= document.querySelector("#texto-encriptado")
    contenido.select();
    document.execCommand("copy");
    alert("texto copiado")
    
}