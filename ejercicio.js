var totalPuntos = 1230;
var amigos = ["Mike","Lucas","Dustin","Eleven","Max"];
var artefactos = 3;
var puntosArtefactosPorAmigo = [0,0,0,0,0]
var sumaTotal = 0;
var porcentaje = 0;
for(var i = 0; i<amigos.length;i++){
    for(var j = 0; j < artefactos; j++){
        do{
            var artefacto = prompt("Digite los puntos"+
            " del artefacto "+(j+1)+" recolectado por "+
            amigos[i]);
            artefacto = parseInt(artefacto)
        }while(artefacto < 1 || artefacto > 100)
        
        puntosArtefactosPorAmigo[i] += artefacto;

        //alert("el total de puntos va en "+
        //puntosArtefactosPorAmigo[i]);
    }
}

for(var k = 0; k < puntosArtefactosPorAmigo.length; k++){
    document.write("<h3>Los puntos que recogió "+
    amigos[k]+" fueron en total "
    + puntosArtefactosPorAmigo[k])
}

for(var i=0; i<puntosArtefactosPorAmigo.length;i++){
           sumaTotal += puntosArtefactosPorAmigo[i];
}

           porcentaje=sumaTotal*100 / totalPuntos;
           
            
          document.write("<h3>El porcentaje del total de puntos es: " + porcentaje + "%");