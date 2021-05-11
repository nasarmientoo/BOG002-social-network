import { saveCoords } from "../model/coords.js"
export const renderTimeline = () => {
  const html = `
      <section id="muro">

      <header>
        <img class="icon-profile" src="static/images/icons/icon-profile.png">
        <img id="icon-settings" class="icon-settings" src="static/images/icons/icon-settings.png">
        <input type="text" maxlength="100" autocomplete="off">
        <img id=icon-lupa src="static/images/icons/icon-lupa.png">
      </header>
      <input type = "text" id = "text_lat" placeholder = "latitud"></input>
      <input type = "text" id = "text_lng" placeholder = "longitud"></input>
      <button id = "addCoords">Agregar</button>
      <div id="map"></div>

      <footer>
        <img class="icon-profile" src="static/images/icons/icon-profile.png">
        <img id="icon-settings" class="icon-settings" src="static/images/icons/icon-settings.png">
      </footer>

    </section>`;

  const div = document.createElement('div');
  div.innerHTML = html;

  return div;
};

export function afterRenderTimeLine() {

 const addBtn = document.querySelector('#addCoords');
 addBtn.addEventListener('click', (e) =>{

 })
  
}
