function datosN(){
    var seleccionarD=document.querySelector('input[name="operacion"]:checked').value;
    var nume1= parseFloat(document.getElementById("numero1").value); 
    var nume2= parseFloat(document.getElementById("numero2").value); 
   

    document.registro.respuesta.value=operaciones(seleccionarD,nume1,nume2);

}


function operaciones(selec,n1,n2){

    if(selec==1){
        return n1+n2;
    }
    else if(selec==2){
        return n1-n2;

    }

    else if(selec==3){
        return n1*n2;
    }

    else if(selec==4){
        if(n2==0){
            return "No existe la división para 0 Ingrese otro número";

        }
        return n1/n2;

    }
    else{
        return "No ha escogido ninguna opción";
    }

}

