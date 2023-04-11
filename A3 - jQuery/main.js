var a = 0;

$(document).ready(function () {
    /*$("#btnTeste").click(function () { 
        if(a == 0){
            $("#teste").hide();
            ++a;
        }else {
            $("#teste").show();
            --a;
        }
    });*/
        
    var v1 = $("#val1");
    var v2 = $("#val2");

    $("#bSomar").click(function () {
        var res = parseFloat(v1.val()) + parseFloat(v2.val());
        $("#resultado").html(res);
    });
    
    $("#bSubt").click(function () { 
        var res = parseFloat(v1.val()) - parseFloat(v2.val());            
        $("#resultado").html(res);
        if(res < 0){
            $("#resultado").css("color" , "red");
        }
        else{
            $("#resultado").css("color" , "black");
        }
    });
    

    
});