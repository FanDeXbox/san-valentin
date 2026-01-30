/* General */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #fff0f5;
  overflow-x: hidden;
}

/* Carta inicial */
#carta {
  position: fixed;
  top:0; left:0;
  width:100%;
  height:100%;
  background: #ffe4e1;
  display:flex;
  justify-content:center;
  align-items:center;
  z-index:1000;
}
.carta-inner { text-align:center; }
.carta-inner button {
  margin-top:20px;
  padding:10px 20px;
  font-size:16px;
  cursor:pointer;
}

/* Revista */
#revista { display:none; padding:20px; background:#fff0f5; min-height:100vh; box-sizing:border-box; }
.contenido-revista {
  display:flex; flex-direction:column; gap:30px; max-width:900px; margin:0 auto;
}
.tickets { display:flex; justify-content:space-around; gap:20px; flex-wrap:wrap; }
.ticket { background:#ffccd5; padding:15px; border-radius:10px; text-align:center; width:150px; }
.carrusel { display:flex; justify-content:center; overflow:hidden; border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.2); }
.carrusel img { display:none; }
.carrusel img.activo { display:block; }
.mensaje { font-size:18px; line-height:1.5; text-align:center; }

/* Corazones */
.corazones { position:absolute; width:100%; height:100%; overflow:hidden; z-index:10; }

/* Velas */
.velas { display:flex; justify-content:center; margin:20px 0; }
.vela { width:10px; height:40px; background:orange; margin:0 5px; border-radius:5px; animation:parpadear 1s infinite alternate; }
@keyframes parpadear { 0%{background:orange;} 100%{background:yellow;} }




