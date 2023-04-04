//Para AJAX funcionar tem que rodar em server local -> XAMPP

function ler() {
    var http = new XMLHttpRequest();

    http.onreadystatechange = function(){
        if(this.readyState == 1 ){
            $("#divResposta").html('Solicitação enviada');
        }
        if(this.readyState == 4 ){
            if(this.status == 200) {
            $("#divResposta").html(this.responseText);
            }
            if(this.status == 404) {
                $("#divResposta").html('Página não encontrada');
            }
        }
    }

    http.open('GET', 'informacao.txt', true);
    http.send();
}

function gerar() {

    var http = new XMLHttpRequest();

    http.onreadystatechange = function(){
        if(this.readyState == 1 ){
            $("#divNumeros").html('Solicitação enviada');
        }
        if(this.readyState == 4 ){
            if(this.status == 200) {
            $("#divNumeros").html('Resposta OK' + '<br>' + this.responseText);
            }
            if(this.status == 404) {
                $("#divNumeros").html('Página não encontrada');
            }
        }
    }

    url = 'numeros.php?numero=' + $("#txtNumero").val();
    http.open('GET', url , true);
    http.send();

}