const NUMERO_MAXIMO=4;
const NUMERO_MINIMO=1;

const numeroAleatorioMaquina1=parseInt(Math.floor((Math.random() * (NUMERO_MAXIMO - NUMERO_MINIMO + 1)) + NUMERO_MINIMO));
//const numeroAleatorioMaquina2=parseInt(Math.floor((Math.random() * (NUMERO_MAXIMO - NUMERO_MINIMO + 1)) + NUMERO_MINIMO));

const rutaBase="../img/imagen";

("src", `${rutaBase}${numeroAleatorioMaquina1}.jpeg`);
/*const rutaImagen1="../img/imagen1.jpg";
const rutaImagen2="../img/imagen2.jpg";
const rutaImagen3="../img/imagen3.jpg";
const rutaImagen4="../img/imagen4.jpg";*/

console.log(numeroAleatorioMaquina1,numeroAleatorioMaquina2)

function cambiaFoto(e){
switch(numeroAleatorioMaquina1){
    case 1: 
        if(e.target.getAttribute("src")==rutaImagen1){
            switch (numeroAleatorioMaquina2) {
                case 2:e.target.setAttribute("src", rutaImagen2);  
                break;                                    
                case 3:e.target.setAttribute("src", rutaImagen3);
                break;
                case 4:e.target.setAttribute("src", rutaImagen4);
                break;
                }
            
            }
        
        break;
    case 2:
        if(e.target.getAttribute("src")==rutaImagen2){
            switch (numeroAleatorioMaquina2) {
                case 1:e.target.setAttribute("src", rutaImagen1); 
                break;                                     
                case 3:e.target.setAttribute("src", rutaImagen3);
                break;
                case 4:e.target.setAttribute("src", rutaImagen4);
                    
                    break;
            
               
            }
            
            }
        
    case 3:
        if(e.target.getAttribute("src")==rutaImagen3){
            switch (numeroAleatorioMaquina2) {
                case 1:e.target.setAttribute("src", rutaImagen1); 
                break;                                     
                case 2:e.target.setAttribute("src", rutaImagen2);
                break;
                case 4:e.target.setAttribute("src", rutaImagen4);
                    
                    break;
                 
              
            }
            
            }
        
        break;
    case 4:
        if(e.target.getAttribute("src")==rutaImagen4){
            switch (numeroAleatorioMaquina2) {
                case 1:e.target.setAttribute("src", rutaImagen1); 
                break;                                     
                case 2:e.target.setAttribute("src", rutaImagen2);
                break;
                case 3:e.target.setAttribute("src", rutaImagen3);
                    
                    break;
            
               
            }
            
            }
default: 
switch (numeroAleatorioMaquina2) {
    case 1:e.target.setAttribute("src", rutaImagen1);
    break;                                      
    case 2:e.target.setAttribute("src", rutaImagen2);
    break;
    case 3:e.target.setAttribute("src", rutaImagen3);
    break;
    case 4:e.target.setAttribute("src", rutaImagen4);
    break;
    
}
}

}


document.querySelector("img").addEventListener("mouseout",cambiaFoto);
document.querySelector("img").addEventListener("mouseover",cambiaFoto);
