class Ciclos{
    nombre(){
        console.warn(`presntra un nombre 5 veces`);
        let nombre="juan",c=1
        for(c=1;c<=5;c++){
            console.log(`${nombre}`)
        }
    }
    multiplosde3(){
        console.warn(`multiplos de 3 del 3 al 21`);
        let c=3
        for(c=3;c<=21;c++){
            if(c%3==0){
                console.log(`${c} es multiplo de 3`)
            }
        }
    }
    multiplode3(){
        console.warn(`multiplos de 3 del 21 al 3`);
        let c=21
        for(c=21;c>=3;c--){
            if(c%3==0){
                console.log(`${c} es multiplo de 3`)
            }
        }
    }
    presentarcaracteres(){
        console.warn(`Dado diez numeros en un arreglo presentar los que tengan menos de 5 caracteres`)
        let numeros=[23,56789,567,12345,54,54321,90909,765,2345,56] , i
        console.log(` ARREGLO: ${numeros}`);
        for ( i = 0; i < numeros.length; i++) {
            if (numeros[i].toString().length < 5) {
              console.log(`pos->${i}   Elemento:${numeros[i]}`);
            }
        }
    }
    presentarNumeros(){
        console.warn(`Dado un arreglo presentar sus elementos`);
        let numeros = [100,5,80,25,7]
        let longitud = numeros.length,c=0
        console.log(` ARREGLO: ${numeros}` )
        while(c < longitud){
                console.log(`pos->${c}   Elemento:${numeros[c]}`)
            c=c+1
        }
    }
    menoresa10(){
        console.warn(`Dado un arreglo de numeros presentar los menores a 10`);
        let numeros = [19,50,8,2,7]
        let longitud = numeros.length,c=0
        console.log(` ARREGLO: ${numeros}`)
        while(c < longitud){
            if (numeros[c] < 10){
                console.log(`pos->${c}   Elemento:${numeros[c]} `)
            }
            c=c+1
        }
    }
    presentarImparesSumaPAres(){
        console.warn(`Dado un arreglo de numeros presentar los impares y al final la suma de los pares`);
        let numeros = [12,7,34,200,35]
        let longitud = numeros.length,c=0,suma=0
        console.log(` ARREGLO: ${numeros}`)
        while(c < longitud){
            if (numeros[c]%2==0){
                suma=suma+numeros[c]
            }else{
                console.log(`${numeros[c]} es impar`)
            }
            c=c+1
        }
        console.log(`suma de los pares = ${suma}`)
    }
    TablaDeMultiplicar(){
        console.warn(`Presentar la tabla de multiplicar de cualquier numero del 1 al 12`);
        let num=9,c=1,multi=0
        for(c=1;c<=12;c++){
            multi=c*num
            console.log(`${num} * ${c} = ${multi}`);
        }
    }
    MultiplicarPorSuma(){
        console.warn(`Realizar la multiplicacion de dos numeros por medio de sumas sucesivas`);
        let num1=2,num2=5,suma=0,c=0
        console.log(` NUMEROS: (${num1}-${num2})`);
        for(c=0;c<num2;c++){
            suma=suma+num1
            console.log(`${suma-num1}+${num1}=${suma}`);
        }
        console.log(`la multiplicacion de (${num1}*${num2}) = ${suma}`);

    }
    DividirPorResta(){
        console.warn(`Realizar la division de dos numeros por medio de restas sucesivas`)
        let dividiendo=5,divisor=2
        let residuo=0,c=0,resta=dividiendo
        console.log(` NUMEROS: (${dividiendo}-${divisor})`);
        while(resta-divisor>=0){
            resta=resta-divisor
            console.log(`${resta+divisor} - ${divisor} = ${resta}`);
            residuo=dividiendo%divisor
            c=c+1
        }
        console.log(`el cociente es ${c} y el residuo es ${residuo}`)



    }
    factorial(){
        console.warn(`Calcular el factorial de un numero`);
        let num=5,c=1,acu=num
        console.log(` NUMERO: ${num}`);
        while(num > c){
            num=num-1
            acu=acu*num
        }
        console.log(`Su factorial es= ${acu}`);
    }
    exponente(){
        console.warn(`Calcular el exponente de un numero`);
        let num=4,exponente=3,c=0,acu=num
        console.log(` NUMERO:${num}  EXPONENTE:${exponente}`);
        for(c=0;c<=exponente;c++){
            acu=acu*num
            c=c+1
        }
        console.log(`${num} elevado a ${exponente} = ${acu}`);
    }
    fibonacci(){
        console.warn(`Calcular la serie de fibonacci dado un numero`);
        let a=0,b=1,c=1,cont=3,n=8
        console.log(a,b,c);
        while(cont < n){
            a=b
            b=c
            c = a+b
            console.log(c);
            cont=cont+1
        }
    }
    invertirnumero(){
        console.warn(`Dado un numero invertirlo`);
        let digito = 0,num=12345
        console.log(`NUMERO:${num}`);
        while(num > 0){
            digito = num % 10;
            num = Math.floor(num / 10);
            console.log(digito)
        }
    }
    DivisoresNumeros(){
        console.warn(`Presentar los divisores de un numero`);
        let num = 8,c=1
        console.log(` NUMERO: ${num}`);
        for(c=1;c<num;c++){
            if(num % c == 0){
                console.log(`${c} en divisible para ${num}`);
            }
        }
    }
    NumeroPerfecto(){
        console.warn(`Presentar si un numero es perfecto o no`);
        let divisor =1,num=6,r=0,acu=0
        console.log(` numero: ${num}`);
        while(divisor<num){
            r=num%divisor
            if(r==0){
                acu=acu+divisor
            }
            divisor=divisor+1
        }
        if(acu==num){
            console.log(`${num} es perfecto`);
        }else{
            console.log(`${num} no es perfecto`);
        }
    }
    NumeroPrimo(){
        console.warn(`Verfificar si un numero es primo o no`);
        let num=5,divisor=2,primo=1,r
        console.log(` NUMERO:${num}`);
        while(divisor<num && primo==1 ){
            r=num%divisor
            if(r==0){
                primo=0
            }else{
                divisor=divisor+1
            }
        }
        if(primo==1){
            console.log(`${num} es primo`);
        }else{
            console.log(`${num} no es primo`);
        }
    }
}
let ciclo = new Ciclos()
ciclo.nombre()
ciclo.multiplosde3()
ciclo.multiplode3()
ciclo.presentarcaracteres()
ciclo.presentarNumeros()
ciclo.menoresa10()
ciclo.presentarImparesSumaPAres()
ciclo.TablaDeMultiplicar()
ciclo.MultiplicarPorSuma()
ciclo.DividirPorResta()
ciclo.factorial()
ciclo.exponente()
ciclo.fibonacci()
ciclo.invertirnumero()
ciclo.DivisoresNumeros()
ciclo.NumeroPerfecto()
ciclo.NumeroPrimo()