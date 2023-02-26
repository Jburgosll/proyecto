class Sinciclo{
    suma(){
        console.warn(`suma de dos numeros siempre y cuando el primer numero sea mayor `);
        let num1=123,num2=65,suma=0
        if(num1 > num2){
            suma=num1+num2
            console.log(`${num1} es mayor que ${num2}`);
            console.log(`${num1} + ${num2} = ${suma}`);
        }else{
            console.log(`${num1} no es mayor que ${num2}`);
        }
    }
    operaciones(){
        console.warn(`realizar una operacion segun el operador(+,-,*,/,%)`);
        let num1=100
        let num2=35
        let suma=0,resta=0,multiplicacion=0,division=0,residuo=0
        let ops="+",opr="-",opm="*",opd="/",opre="%"
        suma = num1+num2
        resta = num1-num2
        multiplicacion = num1*num2
        division = num1/num2
        residuo = num1%num2 
        console.log(num1,ops,num2,"=",suma)
        console.log(num1,opr,num2,"=",resta)
        console.log(num1,opm,num2,"=",multiplicacion)
        console.log(num1,opd,num2,"=",division)
        console.log(num1,opre,num2,"=",residuo)
    }
    numeroMayor(){
        console.warn(`presentar el numero mayor`);
        let num1=1000,num2=8099
        console.log(`${num1}     ${num2}`)
        if(num1 > num2){
            console.log(`el mayor es ${num1}`)
        }else{
            console.log(`el mayor es ${num2}`)
        }
    }
    presentarnombre(){
        console.warn(`presntra un nombre`);
        let nombre = "andrea"
        console.log(nombre)
    }
    precioconIVA(){
        console.warn(`presental el precio total a pagar considerando el iva que es el 12%`);
        let precio=2345,iva=0,total=0
        if(precio > 0){
            iva=precio*0.12;total=precio+iva
            console.log(`precio = ${precio} y el valor a pagar incuyendo el iva es de = ${total}`)
        }
    }
    copararNombres(){
        console.warn(`verificar si dos nombres son iguales o diferentes`);
        let nombre1="Juan",nombre2="juan"
        if(nombre1==nombre2){
            console.log(`${nombre1} es igual que ${nombre2}`)
        }else{
            console.log(`${nombre1} no es igual a ${nombre2}`);
        }

    }
    PrimeroMedioUltimo(){
        console.warn(`Presentar el primero el medio y el ultimo valor de un arreglo`);
        let arreglo = [10, 20,50, 60, 70, 90, 100];
        let primero = arreglo[0];
        let medio = arreglo[Math.trunc(arreglo.length / 2)];
        let ultimo = arreglo[arreglo.length - 1];
        console.log(` ARREGLO: ${arreglo}`);
        console.log(`el primero es ${primero} el medio es ${medio} y el ultimo es ${ultimo}`);
    }
    vuelto(){
        console.warn(`Calcular el vuelto de un a compra dado el costo y el pago`);
        let costo=90,pago=100,vuelto=0
        vuelto=pago-costo
        console.log(`El vuelto de su compra es ${vuelto}`);
    }
}
let sinciclo = new Sinciclo()
sinciclo.suma()
sinciclo.operaciones()
sinciclo.numeroMayor()
sinciclo.presentarnombre()
sinciclo.precioconIVA()
sinciclo.copararNombres()
sinciclo.PrimeroMedioUltimo()
sinciclo.vuelto()