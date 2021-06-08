// HTML ELEMENT REFERENCES
const name = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const number = document.getElementById('telefono')

// EVENTS
document.getElementById('btn_enviar').addEventListener('click', funcionQueSeEjecutaCuandoDanClickEnEnviar)

// FUNCTIONS
async function funcionQueSeEjecutaCuandoDanClickEnEnviar() {
    const apiUrl = 'http://www.raydelto.org/agenda.php'
    await fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify({
            apellido: apellido.value,
            telefono: Number(telefono.value),
            nombre: nombre.value
        })
    });
    alert('Mensaje enviado correctamente');
    clear()
}

var contenido= document.querySelector('#contenido')
function obtener(){
fetch('http://www.raydelto.org/agenda.php')
.then(respuesta=>respuesta.json())
.then(datos=>{
tabla(datos)
})
}

function tabla(datos){
contenido.innerHTML='';
for(let valor of datos){
contenido.innerHTML+=`
<tr>
<td>${valor.nombre}</td>
<td>${valor.apellido}</td>
<td>${valor.telefono}</td>
</tr>
`
}
}

function limpiar(){
name.value=""
apellido.value=""
number.value=""
contenido.innerHTML=""
}

function clear(){
name.value=""
apellido.value=""
number.value=""
}