let tbl = document.getElementById('tbBody'); // axios
let tabela = document.getElementById('tabela')
let divStatus = document.getElementById('status');


function ler() {
    //tbl.innerHTML = "";
    xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            obj = JSON.parse(this.responseText);
            obj.forEach(prod => {
                if(document.getElementById('p'.prod.id) == null) {
                    index = tabela.rows.length;
                    row = tabela.insertRow(-1);
                    row.id = 'p'.prod.id;
                    cellID  = row.insertCell(0);
                    cellNOME = row.insertCell(1);
                    cellPRECO = row.insertCell(2);
                    cellQNTD = row.insertCell(3);
                    cellEXCLUIR = row.insertCell(4);
                    cellID.innerHTML = prod.id;
                    cellNOME.innerHTML = prod.nome;
                    cellPRECO.innerHTML = prod.preco;
                    cellQNTD.innerHTML = prod.quantidade;
                    cellEXCLUIR.innerHTML = "<button onclick='excluir(" + prod.id + ")'>Excluir</button>";

                }
            });
            divStatus.innerHTML = "";
                /*tbl.innerHTML += "<tr>" +
                    "<th scope='row'>" + produto.id + "</th>" +
                    "<td scope='row'>" + produto.nome + "</td>" +
                    "<td scope='row'>" + produto.preco + "</td>" +
                    "<td scope='row'>" + produto.quantidade + "</td>" +
                    "</tr>"; axios*/ 
        
        }
        if(this.readyState == 4 && this.status != 200) {
            divStatus.innerHTML = this.responseText;
        }
    };

    xhttp.open('GET', 'http://localhost:8001/produtos', true);
    xhttp.send();

}
/* Usando Axios
axios.get('http://localhost:8001/produtos').then(response => {
    response.data.forEach(element => {
        tbl.innerHTML += "<tr>" +
            "<th scope='row'>" + element.id + "</th>" +
            "<td scope='row'>" + element.nome + "</td>" +
            "<td scope='row'>" + element.preco + "</td>" +
            "<td scope='row'>" + element.quantidade + "</td>" +
            "</tr>"
    });
}); */