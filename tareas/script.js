function agregartarea(){
  const tareaInput=document.getElementById("nueva-tarea");
  const tareaTexto=tareaInput.value.trim();
  const categoriaSelect = document.getElementById("categoria-select");



  if (tareaTexto === ""){
    alert ("Por favor, escribe una tarea");
    return;
  }

  const nuevaTarea = document.createElement("li");

  nuevaTarea.innerHTML = `
      ${tareaTexto}
      <button class="eliminar" onclick="eliminarTarea(this)">Eliminar</button>
      <button class="pendiente" onclick="pendienteTarea(this)">Pendiente</button>
      <select class="categoria" onclick="CategoriasTarea(this)">Categorias</select>
  `;


nuevaTarea.addEventListener("click", function(){
  nuevaTarea.classList.toggle("completada");
}
);
document.getElementById("lista-tareas").appendChild(nuevaTarea);


tareaInput.value="";
}
function eliminarTarea(boton){
  const tarea = boton.parentElement;
  tarea.renove();
}