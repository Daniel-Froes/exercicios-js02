let nave ={
    velocidade: 0,
    aumentar: function(acelerar){
        this.velocidade += acelerar;
    }
}

function cadastroNave(){
    nave.name = prompt('Informe o nome da nave:');
    nave.type = prompt('Informe o tipo da nave:')
    nave.VelMaxima = Number (prompt('Informe a velocidade maxima da nave (Km/s)'))
}

function acelerate(){
    let acelerar = Number (prompt("Quanto voce quer acelerar? (Km/s)"))
    nave.aumentar(acelerar)
    if(nave.velocidade > nave.VelMaxima){
        alert('VELOCIDADE MAXIMA ULTRAPASSADA!' + '\n Velocidade da nave: ' + nave.velocidade + "Km/s\n" + "Velocidade maxima da nave" + nave.VelMaxima + "Km/s");
    }
}

function stop(){
    alert("Nome:" + nave.name + "\nTipo:" + nave.type + "\nVelocidade da nave:" + nave.VelMaxima)
    nave.velocidade = 0;
}
function menu(){
    let opcoes;
    do{
        opcoes = prompt('Voce deseja:\n 1 - Acelerar\n 2 - Parar')
        switch(opcoes){
            case "1":
                acelerate()
                break;
            case "2":
                stop()
                break;
            default:
                alert("Opção invalida")
        }
    }while(opcoes != "2")
}

cadastroNave()
menu()