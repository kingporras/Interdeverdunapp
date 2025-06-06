
console.log('Inter de Verdun site loaded');

function guardarConvocatoria() {
  const contenido = document.getElementById('convocatoriaInput').value;
  alert('Convocatoria guardada (demo):\n' + contenido);
}

function votarMVP() {
  const nombre = document.getElementById('nombreMVP').value;
  document.getElementById('mvpResultado').innerText = 'Voto registrado para: ' + nombre;
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log("Service Worker registrado con éxito."))
    .catch(err => console.error("Error al registrar el Service Worker:", err));
}
