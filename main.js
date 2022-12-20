const prefixo_id_som = '#som_tecla_';
const tecla_ativacao_enter = 'Enter';
const tecla_ativacao_space = 'Space';

function tocaSom (idTecla){   
    const teclaSom = document.querySelector(idTecla);
    console.log(teclaSom)
    teclaSom === null || teclaSom === undefined ? alert('Tecla não encotrada') : teclaSom.play() ;
}

const teclas = document.querySelectorAll('.tecla')

let indexCount = 0

function tecla_ativa (index) {
    teclas[index].classList.add('ativa')
}

while (indexCount < teclas.length)
{
    let tecla = teclas[indexCount]
    console.log('tecla ' + tecla)

    let teclaNome = prefixo_id_som + teclas[indexCount]
                                        .className
                                        .split(' ')[1]
                                        .split('_')[1]
                                        .toString()                                        

    teclas[indexCount].onclick = () =>tocaSom(teclaNome) ;

    tecla.onkeydown = (e)=>{        
        e.key === tecla_ativacao_enter|| e.key === tecla_ativacao_space ? tecla.classList.add('ativa')  : null
    }

    tecla.onkeyup = (e)=>{
        e.key === tecla_ativacao_enter || e.key === tecla_ativacao_space ? tecla.classList.remove('ativa') : null
    }

    indexCount++;
}
