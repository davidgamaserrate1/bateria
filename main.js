const prefixo_id_som = '#som_tecla_'

function tocaSom (idTecla){   
     document.querySelector(idTecla).play() ;
}
const teclas = document.querySelectorAll('.tecla')
let indexCount = 0

while (indexCount < 9){
    let teclaNome=prefixo_id_som + ( teclas[indexCount].className.split(' ')[1].split('_')[1].toString() )        
    teclas[indexCount].onclick = function(){        
        tocaSom(teclaNome);
    }
    
    indexCount++;

}
