let fechas = [];
let edadPromedio = 0;

function ingresarFecha() {
  let seguirIngresando = true;
  while (seguirIngresando) {
    let fechaNacimiento = prompt(
      "Ingresa tu fecha de nacimiento en formato YYYY-MM-DD (o escribe 'salir' para finalizar):"
    );
    if (
      fechaNacimiento !== null &&
      fechaNacimiento !== "" &&
      fechaNacimiento.toLowerCase() !== "salir"
    ) {
      fechas.push(new Date(fechaNacimiento));
    } else {
      seguirIngresando = false;
    }
  }
  actualizarEdadPromedio();
}

function actualizarEdadPromedio() {
  let sumEdades = 0;
  for (let i = 0; i < fechas.length; i++) {
    let edad = calcularEdad(fechas[i]);
    sumEdades += edad;
  }
  if (fechas.length > 0) {
    edadPromedio = sumEdades / fechas.length;
    mostrarEdadPromedio();
  } else {
    alert("No se han ingresado fechas de nacimiento.");
  }
}

function calcularEdad(fecha) {
  let hoy = new Date();
  let edad = hoy.getFullYear() - fecha.getFullYear();
  let mes = hoy.getMonth() - fecha.getMonth();
  if (mes < 0 || (mes === 0 && hoy.getDate() < fecha.getDate())) {
    edad--;
  }
  return edad;
}

function mostrarEdadPromedio() {
  let mensaje =
    "La edad promedio de las personas registradas es " +
    edadPromedio.toFixed(2) +
    " años.";
  alert(mensaje);
  document.getElementById("edadPromedio").innerHTML = mensaje;
}
