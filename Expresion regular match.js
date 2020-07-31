function plates(str){
    let resultados =[]
    let expresion = /[A-Z]{3}[0-9]{3}/g;
     resultados = str.match(expresion);  
     if(resultados===null){
        return resultados = []
      }
      return resultados
    }
    
    plates("Iba en un AAA123 y después en un BBB987");





//    Verdadera solución
//     function plates(str) {
//         var matches = str.match(/[A-Z]{3}\d{3}/g);
//        return matches ? matches : [];
//       }