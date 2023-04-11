<?php 

    header("Content-type: application/json");

    $user = "root";
    $password = "";
    $db = "loja";
    $site = "localhost";

    $conn = mysqli_connect($site, $user, $password, $db);

    if($conn){
        if(isset($_REQUEST['read_all'])){
            $sql = "SELECT * FROM produto ORDER BY preco DESC";
            $query = mysqli_query($conn, $sql);
            $result = array();
            while($row = mysqli_fetch_assoc($query)){
                $result[] = $row;
            }
        echo '{ "produtos" : ' . json_encode($result) . ' }';
        }

        if(isset($_REQUEST['insert'])){
            $nome = $_GET['nome'];
            $preco = $_GET['preco'];
            $sql = "INSERT INTO produto(nome, preco)
                    VALUES ('$nome' , $preco)";
            mysqli_query($conn, $sql);
            $result = mysqli_insert_id($conn);
            if($result > 0){
                echo '{ "resposta": " ok" , "id: ' . $result . ' }';
            }
            else {
                echo '{ "resposta": " erro" }'; 
            }
        }

        mysqli_close($conn);

    }

    ?>