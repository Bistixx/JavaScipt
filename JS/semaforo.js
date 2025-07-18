function semaforo(estado) {
  const estadoElemento = document.getElementById("estado");

  switch (estado) {
    case 'rojo':
      estadoElemento.innerText = "Detenerse";
      break;
    case 'amarillo':
      estadoElemento.innerText = "Precaución";
      break;
    case 'verde':
      estadoElemento.innerText = "Avanzar";
      break;
    default:
      estadoElemento.innerText = "Estado desconocido";
  }
}