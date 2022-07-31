const NUMERO_MAXIMO=4;
const NUMERO_MINIMO=1;
const rutaBase="../img/imagen";

function cambiaFoto(){
    const numeroAleatorioMaquina1=parseInt(Math.floor((Math.random() * (NUMERO_MAXIMO - NUMERO_MINIMO + 1)) + NUMERO_MINIMO));
    document.querySelector("img").setAttribute("src", `${rutaBase}${numeroAleatorioMaquina1}.jpg`)
}


document.querySelector("img").addEventListener("click",cambiaFoto);
