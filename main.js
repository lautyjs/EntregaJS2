
let cantidad = parseInt(prompt("cantidad de empleados"))
let empleados = [];
//Horas refiere a la cantidad de horas de trabajo que hizo el empleado en el mes
function creaEmpleado (nombre, sueldo, horas, sueldoFinal){

let empleado = {
nombre: nombre,
sueldo: sueldo,
horas : horas,
sueldoFinal : sueldo*horas
}
    empleados [empleados.length] = empleado ;
}



for(i=0;i < cantidad;i++){
    creaEmpleado (
        prompt("Indique el nombre del empleado"),
        parseInt(prompt("Indique el valor de la hora del empleado")),
        parseInt(prompt("Indique la cantidad de horas que trabajo en el mes")),
    );
}
 
//Suma de sueldos empleados

const TotalSueldo = empleados.reduce((acumulador, empleados) => acumulador + empleados.sueldoFinal, 0)
const prueba =  (empleados.map((el) => el.sueldoFinal))
const mayorSueldo =  Math.max.apply(null, prueba)
const empleadoSueldoMayor = (empleados.filter((el) => el.sueldoFinal == mayorSueldo))
const nombreMayor = (empleadoSueldoMayor.map((el) => el.nombre))


alert("El total de los sueldos es: " + TotalSueldo)
alert("El empleado de mayor sueldo es: " + nombreMayor)
console.log(mayorSueldo)
console.log(empleados)
console.log(prueba)
console.log(empleadoSueldoMayor)