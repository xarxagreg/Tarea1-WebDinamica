
function añadeFila(){
  
     document.querySelector("tbody").insertRow().innerHTML = '<td>Celda nueva</td><td>Celda nueva</td><td>Celda nueva</td><td>Celda nueva</td>';
  }

  
document.querySelector("button").addEventListener("click",añadeFila);

const DOM=document.querySelector("tbody")
console.log(DOM)
