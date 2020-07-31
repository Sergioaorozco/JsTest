function transform (array, func) {
    let list = array.length;
      for ( let i = 0; i < list; i++){
      func(array[i]);
      }
    }
    let result = [] ;
     transform ([1,2,3], function (value) {
      result.push(value * 2);
       });
    
    console.log(result);