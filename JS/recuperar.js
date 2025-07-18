alert("TU ID ES PERSONAL, NO SE LA COMPARTAS A NADIE");

const usuarios2 = [];
usuarios2.push({idPersonal: 13200613, usuario: "Ana", contraseña: "abc" });
usuarios2.push({ idPersonal: 200613, usuario: "Luis", contraseña: "123" });

//PARTE DE APRETAR EL BOTON PARA RECUPERAR CUENTA
document.getElementById("recuperarBtn").addEventListener("click", function() {
  const id = prompt("Ingrese el ID del usuario a buscar:");

//SI FALLA VUELVE A INTENTAR
  if (!id) return;

// BUSCAR USUARIO EN EL ARRAY
  const user = usuarios2.find(usuario =>
    usuario.idPersonal === parseInt(id)
  );

// Muestra el resultado
  const resultado = document.getElementById("resultado");

  if (user) {
    resultado.innerText = `Usuario: ${user.usuario} Contraseña: ${user.contraseña}`;
    resultado.classList.remove("oculto");
  } else {
    resultado.innerText = "Usuario no encontrado";
    resultado.classList.remove("oculto");
  }
});