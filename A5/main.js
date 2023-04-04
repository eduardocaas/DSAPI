function gerarObjeto(){

    var pessoa = {
        nome: "Fulano",
        idade: 30,
        altura: 1.85,
        aluno: true,
        formaturas: [2004, 2010, 2016],
        cursos: ["Técnico", "Graduação"],
        cnh: { numero: "123456" , categoria: "B"},
        filhos : [
            { nome: "Beltrano", idade: 10},
            { nome: "Ciclano", idade: 12}
        ],
        endereco: null 
    }

    $("#dadosJSON").html(JSON.stringify(pessoa));

}

function lerJSON() { 

    var http = new XMLHttpRequest();

    http.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            var dados = JSON.parse(this.responseText);
            texto = "Nome: " + dados.nome + "<br>";
            texto += "Idade: " + dados.idade + "<br>";
            texto += "Categoria CNH: " + dados.cnh.categoria + "<br>";
            texto += "Filho: <br>"; 
            dados.filhos.forEach(filho => {
                texto += "Nome: " + filho.nome + " - Idade: " + filho.idade + "<br>";
            });
            $("#resposta").html(texto);
        }
    }

    http.open("GET", "JSONfile.json", true);
    http.send();
 }