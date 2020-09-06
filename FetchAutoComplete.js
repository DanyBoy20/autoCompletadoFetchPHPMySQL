// AÑADIMOS UN ESCUCHADOR DE EVENTO DE TIPO "KEYUP" (PRESIONAR UNA TECLA) A NUESTRO ELEMENTO INPUT
const nombre = document.getElementById("nombre");
const lista = document.getElementById("lista");
const mensaje = document.getElementById('mensaje');

addEventListener("load", () => {
  nombre.addEventListener("keyup", (event) => {
    identificador(event);
  });
});

const identificador = (event) => {
  let entrada = event.target;
  let caracteresMinimos = 0;

  if (entrada.value.length < caracteresMinimos) {
    return;
  } else {
    fetch(`FetchAutoComplete.php?id=${entrada.value}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        lista.innerHTML = "";
        const fragment = document.createDocumentFragment();
        for (const elementos of res) {
          const option = document.createElement("OPTION");
          option.setAttribute("value", elementos.contactFirstName);
          fragment.append(option);
        }
        lista.appendChild(fragment);
      })
      .catch((error) => {
        lista.innerHTML = "";
      });
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const datos = new FormData(form);
  // const datos = new FormData();
  // datos.append("fileInput", fileInput.files[0]); // si deseamos subir archivos
  fetch('FetchAutoCompleteRecibir.php', { // hacemos fetch y lo enviamos
      method: 'POST',
      body: datos
  })
  .then(res => res.json()) // obtenemos la respuesta si todo fue exitoso
  .then(data=>console.log(data)) // es la respuesta que viene del servidor
  .catch(console.error)
})
