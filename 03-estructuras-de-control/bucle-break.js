//factorial-break
let numero = 0;
let factorial = 1;
bucleFactorial: while (true){
    numero++;
    if (true){
        factorial = factorial * numero;
    }
    if (factorial ===  3628800) {
        console.log(factorial);
        break bucleFactorial;
    }
}
