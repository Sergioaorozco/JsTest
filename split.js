function split (value){
    let result = []
    result = value.split(/[-+*]/)
    
    return result
    }
    split("partir-la-cadena")
    split("Hola+Mundo")
    split("este-es+otro*ejemplo")
    