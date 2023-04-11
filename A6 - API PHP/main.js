function readAll(){
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            content = "<table border='1'>";
            content += "<tr>";
            content += " <th>ID</th>";
            content += " <th>Nome</th>";
            content += " <th>Preço</th>";
            content += "</tr>";

            objJS = JSON.parse(this.responseText); // converte objeto JSON em objeto JS
            produtos = objJS.produtos; // produtos -> definido no PHP

            produtos.forEach(prod => {
                content += "<tr>";
                content += " <td>" + prod.id + "</td>";
                content += " <td>" + prod.nome + "</td>";
                content += " <td>" + prod.preco + "</td>";
                content += "</tr>";
            });
            content += "</table>";
            $("#divProdutos").html(content);
        }
    }

    xhttp.open("GET", "server.php?read_all", true);
    xhttp.send();
}

