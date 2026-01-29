// Carta interactiva
const carta = document.getElementById('carta');
const continuar = document.getElementById('continuar');
const revista = document.getElementById('revista');
const musica = document.getElementById('musica');

continuar.addEventListener('click', () => {
  carta.classList.add('hidden');
  carta.classList.remove('visible');
  revista.classList.remove('hidden');
  musica.play();
});

// Carrusel de fotos
let index = 0;
const fotos = document.querySelectorAll('.carrusel img');

setInterval(() => {
  fotos[index].classList.remove('activo');
  index = (index + 1) % fotos.length;
  fotos[index].classList.add('activo');
}, 3000);

