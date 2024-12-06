let general = 1
let preferencial = 2
let vip = 3

let efectivo = 1
let credito = 2

let nGeneral = "General"
let nPreferencial = "Preferencial"
let nVip = "VIP"
let nombreLocalidad
let precioLocalidad

let generalPrecio = 50000
let preferencialPrecio = 150000
let vipPrecio = 300000

let servicio = 5000

let numeroAleatorioEfectivo = Math.floor(Math.random() * 90000) + 10000;


alert (` Bienvenido al portal donde podras comprar las boletas al "CONCIERTO DEL SIGlO" `)

let localidadSeleccionada = parseInt(prompt(`¿Que localidad deseas? tenemos las siguienes
    ${general} = Localidad General con un precio de $${generalPrecio}
    ${preferencial} = Localidad Preferencial con un precio de $${preferencialPrecio}
    ${vip} = Localidad VIP con un precio de $${vipPrecio}`))

if (localidadSeleccionada === general){
    nombreLocalidad = nGeneral
    precioLocalidad = generalPrecio
    alert (`Has seleccionado la localidad "General"`)
}else if (localidadSeleccionada === preferencial){
   nombreLocalidad = nPreferencial
   precioLocalidad = preferencialPrecio
    alert (`has seleccionado la localidad "Preferencial"`)
}else if (localidadSeleccionada === vip){
    nombreLocalidad = nVip
    precioLocalidad = vipPrecio
    alert (`Has seleccionado la localidad "VIP"`)
} else {
    alert("selecciona una opcion valida")
}

let cantidadBoletas = parseInt(prompt(`¿Cuantas Boletas deseas llevar? Minimo 1 Maximo 5`))

let subtotal = cantidadBoletas * precioLocalidad
let impuesto = 0.10
let stotal = Math.round (subtotal * ( 1 + impuesto))
let total = stotal + servicio


if (cantidadBoletas < 1 || cantidadBoletas > 5){
    alert ("Selecciona un numero de Boletas Correcto")
} else {
    alert(`!Tenemos tu pedido!
        Localidad = ${nombreLocalidad}
        Cantidad de boletas = ${cantidadBoletas}
        Total a pagar = ${subtotal}
        
!Recuerda que aplicaremos el impuesto del 10% sobre el precio actual!`)
}

alert (`El total a pagar es 
    $${total} con impuesto y coste de servicio aplicado
Coste de servicio $5000 `)

let metodoDePago = parseInt(prompt(`¿Que metodo de pago deseas seleccionar?
    ${efectivo} = Pago en efectivo 
    ${credito} = Pago Tarjeta de credito`))


    if (metodoDePago === efectivo){
        alert(`Tenemos tu pedido, hacercate a la ventanilla y paga con este numero de referencia = ${numeroAleatorioEfectivo}`)
    }else if (metodoDePago === credito) {
        parseInt(prompt(`para pagar con tu tarjeta de credito ingresa el numero que tienes en la parte posterior`))
        alert (`¡Pago confirmado! Numero de referencia = ${numeroAleatorioEfectivo}`)
    } else {
        alert("Selecciona una opcon valida")
    }


    alert (`Te esperamos pronto en "EL CONCIERTO DEL SIGLO" `)