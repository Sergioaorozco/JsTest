function fizzBuzz (num) {
    if ((num/num)*3 === 3) {
    return "fizz"
    } else if ((num/num)* 5 === 5) {
    return "buzz"
    } else if ( (num/num)*3 === 3 && (num/num)*5 === 5) {
    return "fizzbuzz"
    } else {
    return num
    }
    }
    
    fizBuzz(50)