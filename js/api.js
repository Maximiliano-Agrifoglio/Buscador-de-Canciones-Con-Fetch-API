import * as UI from './interfaz.js';


 class API{
    constructor(artista,cancion){
        this.artista = artista; 
        this.cancion = cancion;
    }

    consultarAPI(){
        
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;
        
        fetch(url)
           .then(respuesta => respuesta.json() )
           .then(resultado => {

            
            if (resultado.lyrics) {
               const {lyrics} = resultado;
               UI.DivResultado.textContent = lyrics;
               UI.HeadingResultado.textContent = `Letra de la cancion: ${this.cancion} de ${this.artista}`; 
            } else {
                UI.DivMensajes.textContent = `la canción no existe prueba con otra busqueda`;
                UI.DivMensajes.classList.add('error');

                setTimeout(() => {
                    UI.DivMensajes.textContent = '';
                    UI.DivMensajes.classList.remove('error');
                }, 3000);
            }
               
        });
    };
};
export default API;