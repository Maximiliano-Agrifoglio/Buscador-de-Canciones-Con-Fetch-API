import * as UI from './interfaz.js'; 
import API from './api.js';


UI.FormularioBuscar.addEventListener('submit', BuscarCancion);

function BuscarCancion(e) {
    e.preventDefault();

    //obtener datos del formulario.
    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    if (artista === '' || cancion === '') {
        //El usuario dejo al menos un campo vacio,mostrar error!. 
        UI.DivMensajes.textContent = 'Error.... todos los campos son obligatorios';
        UI.DivMensajes.classList.add('error');
        
        setTimeout(() => {
            UI.DivMensajes.textContent = '';
            UI.DivMensajes.classList.remove('error');
        }, 3000);

        return;
    }

    //consultar la api!
    const busqueda = new API(artista, cancion);
   
    busqueda.consultarAPI();
};
