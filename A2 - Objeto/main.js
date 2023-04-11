function validar() {

    var val = document.getElementById('fVal').value;
    var info = document.getElementById('pInfo');
    if (val == "") {
        info.innerHTML = 'Valor em branco';
        return false;
    }
    else  {
        if(isNaN(val)) {
        info.innerHTML = 'O valor deve ser um número';
        return false;
        }
        else {
            if (!(val > 0 && val <= 10)) {
                info.innerHTML = 'O valor deve ser entre 1 e 10';
                return false;
            }
        }
    }

    return true;
}


function lerObjeto() {

    var carro = {
        modelo : 'Opala' , 
        ano: 1980
    };

    var pessoa = {
        nome: 'Fulano',
        idade: 30,
        altura: 1.7,
        temFilhos: true,
        endereco: null,
        veiculo: carro,
        filhos : [ {nome: 'Beltrano', idade: 8}, 
                   {nome: 'Ciclano', idade: 12} ],
        formacao : [2003, 2011, 2017],
        imprimir : function() {
            texto = this.nome + ' - ' + this.idade + ' -  Carro: ' + this.veiculo.modelo;
            return texto;
        }
    };

    document.getElementById('objeto').innerHTML = pessoa.imprimir();
}
