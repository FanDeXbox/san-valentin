// --- Carta interactiva ---
const carta = document.getElementById('carta');
const continuar = document.getElementById('continuar');
const revista = document.getElementById('revista');
const musica = document.getElementById('musica');

continuar.addEventListener('click', () => {
  carta.classList.add('hidden');
  carta.classList.remove('visible');
  revista.classList.remove('hidden');

  // Play música solo después del click, GitHub permite esto
  if (musica) {
    musica.play().catch(() => {
      console.log("El navegador bloqueó la música, pero la página funciona");
    });
  }
});

// --- Carrusel de fotos ---
let index = 0;
const fotos = document.querySelectorAll('.carrusel img');

if(fotos.length > 0){
  fotos[index].classList.add('activo');
  setInterval(() => {
    fotos[index].classList.remove('activo');
    index = (index + 1) % fotos.length;
    fotos[index].classList.add('activo');
  }, 3000);
}

// --- Corazones flotando ---
function crearCorazon() {
  const corazon = document.createElement('div');
  corazon.innerText = "❤️";
  corazon.style.position = 'absolute';
  corazon.style.fontSize = `${Math.random() * 30 + 10}px`;
  corazon.style.left = `${Math.random() * window.innerWidth}px`;
  corazon.style.top = `${window.innerHeight}px`;
  corazon.style.opacity = 1;
  document.querySelector('.corazones').appendChild(corazon);

  let velocidad = Math.random() * 2 + 1;
  const anim = setInterval(() => {
    let top = parseFloat(corazon.style.top);
    corazon.style.top = `${top - velocidad}px`;
    corazon.style.opacity -= 0.01;
    if(corazon.style.opacity <= 0){
      clearInterval(anim);
      corazon.remove();
    }
  }, 20);
}

// Crear corazones cada 500ms
setInterval(crearCorazon, 500);

