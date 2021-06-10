
/* Multiplicacion sin el signo * */

const multiplicacion = ( a, b) => {

    const signo = Math.abs( b ) === b ? true : false;
    let res = 0;

    for( let i=0; i<Math.abs(b); i++){
        res += signo ? a : -a;
    }

    return res;
}

console.log( multiplicacion(-3, 3) );


/* Palabra palindrome  */

const palabra  = "Luz azul";

const palindroma = ( palabra ) => {

    const textFormat = palabra.toLowerCase().replace(/[.|,]/g, "").replace(/ /g, "");
    const arrayInverso = textFormat.split("").reverse();

    if( arrayInverso.join("") === textFormat){
        return true;
    }

    return false;

}

console.log( palindroma(palabra) );

