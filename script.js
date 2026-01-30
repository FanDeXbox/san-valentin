document.addEventListener('DOMContentLoaded', () => {
  const carta = document.getElementById('carta');
  const continuar = document.getElementById('continuar');
  const revista = document.getElementById('revista');
  const musica = document.getElementById('musica');

  continuar.addEventListener('click', () => {
    carta.style.display = 'none';
    revista.style.display = 'block';

    if(musica){
      musica.play().catch(()=>console.log("Música bloqueada, pero la página funciona"));
    }
  });

  // Carrusel
  const fotos = document.querySelectorAll('.carrusel img');
  let index = 0;
  if(fotos.length > 0){
    fotos[index].classList.add('activo');
    setInterval(() => {
      fotos[index].classList.remove('activo');
      index = (index + 1) % fotos.length;
      fotos[index].classList.add('activo');
    }, 3000);
  }

  // Corazones flotando
  function crearCorazon(){
    const corazon = document.createElement('div');
    corazon.innerText="❤️";
    corazon.style.position='absolute';
    corazon.style.fontSize=`${Math.random()*30+15}px`;
    corazon.style.left=`${Math.random()*window.innerWidth}px`;
    corazon.style.top=`${window.innerHeight}px`;
    corazon.style.opacity=1;
    document.querySelector('.corazones').appendChild(corazon);

    let velocidad = Math.random()*2+1;
    const anim = setInterval(()=>{
      let top = parseFloat(corazon.style.top);
      corazon.style.top=`${top - velocidad}px`;
      corazon.style.opacity-=0.01;
      if(corazon.style.opacity<=0){
        clearInterval(anim);
        corazon.remove();
      }
    },20);
  }
  setInterval(crearCorazon,500);
});


