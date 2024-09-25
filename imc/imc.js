const calcular = document.querySelector('#calcular');

function imc () {
    const nome = document.querySelector('#nome').value;
    const altura = document.querySelector('#altura').value;
    const peso = document.querySelector('#peso').value;
    const resultado = document.querySelector('#resultado');

    if (nome == '' || altura == '' || peso == '') {
        resultado.textContent = ('campo vazio');
    } 


    const valorimc = (peso / (altura * altura)).toFixed(1);
    let classificacao = valorimc

    
    switch (true) {

        case (valorimc < 18.5) :
            classificacao = 'abaixo do ideal';
        break;

            case (valorimc <= 24.9):
                classificacao = 'peso ideal'
            break;
            
                case (valorimc <= 29.9) :
                    classificacao = 'sobrepeso'
                break;

                    case (valorimc <= 34.9) :
                        classificacao = 'obesidade I'
                    break;

                        case (valorimc <= 39.9) :
                            classificacao = 'obesidade II'
                        break;

                            default:
                                classificacao = 'obesidade III';
    };


    resultado.textContent = `${nome} seu IMC é de: ${valorimc} e você está classificado com: ${classificacao}`;
}

calcular.addEventListener('click', imc )






