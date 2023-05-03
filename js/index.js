

const Controlador = {
    //funcion para realizar la petición
    obtenerAlbumInfo: function () {
        axios({
            method: 'GET',
            url: 'data/discography.json',
        })
            //Una vez los reciba, los envia a la función mostrarTickets() de la vista
            .then(function (response) {
                Vista.mostrarAlbumInfo(response.data);
            })
            //Si hay un error, guarda el mensaje y los envia a la vista para mostrar el error
            .catch(function (error) {
                console.log(error)
                Vista.mostrarMensajeError(error);
            })
    }

}

/* La vista recibe los datos del controlador del resultado de la peticion 
        .then(function(response){
            Vista.mostrartickets(response.data);
            const li = document.createElement('li');
            li.classList.add('album__track')
        })
*/
const Vista = {
    mostrarAlbumInfo: function (datos) {
        const paginaGrilla = document.getElementById('paginaGrilla');
        datos.forEach(element => {
            const album = document.createElement('div');
            const tracks = element.tracks;
            var contador = 1;

            let tracksList = "<ul class='album-tracks'>";
            tracks.forEach(track => {
              tracksList += `<li class ="album__track"> ${contador++}. ${track}</li>`;
            });
            tracksList += "</ul>";
          
            album.classList.add('album')

            album.innerHTML = `
            <div class="album-titulo">
                <h1 class="album__titulo">${element.name} </h1>
            </div>
            <div class="album-tipo">
                <p class="album__tipo"><i class="fa-solid fa-record-vinyl"></i> ${element.type}</p>
            </div>
            <div class="album-fecha">
                <p class="album__fecha"><i class="fa-solid fa-calendar-days"></i> ${element.releaseDate}</p>
            </div>
            <div class="album-pais">
                <p class="album__pais"><i class="fa-solid fa-globe"></i> ${element.country}</p>
            </div>
            <div class="album-cover">
            <img src=" ${element.coverArt} " alt="" class="album__cover">
            </div>  
            <div class="album-contenido">
                <p class="album__contenido">${element.content}</p>
            </div>
            <div class="tracks-titulo">
                <h3 class="titulo">Tracklist</h3>
            </div>
            ${tracksList}
        `;

            paginaGrilla.appendChild(album);


        });
    },

    mostrarMensajeError(mensaje) {
        alert(mensaje);
    }
}

document.addEventListener('DOMContentLoaded', function () {
     Controlador.obtenerAlbumInfo();
})




 /*
axios.get('discography.json')
    .then(response => {
        const data = response.data;


        const info = data[0];
        const id = info._id;
        const name = info.name;
        const type = info.type;
        const releaseDate = info.releaseDate;
        const country = info.country;
        const coverArt = info.coverArt;
        const content = info.content;
        const tracks = info.tracks
        const video = info.video;
        const spotify = info.spotifyLink;

        console.log(id);
        console.log(name);
        console.log(type);
        console.log(releaseDate);
        console.log(country);
        console.log(coverArt);
        console.log(content);
        console.log(tracks);
        console.log(video);
        console.log(spotify);

       
        data.forEach(element => {
            const releaseDate  = element.releasedate;
            const spotify = element.spotifyLink;
            const video = element.video;
            const coverArt = element.coverArt;
            const type = element.type;
            const id = element._id;
            const content = element.content;
            const country = element.country;
            const name = element.name;
            const tracks = element.tracks
            console.log("------------------------------INICIO------------------------------")
            console.log("release date:", releaseDate);
            console.log("spotify:",spotify);
            console.log("video:",video);
            console.log("coverArt:",coverArt);
            console.log("type:",type);
            console.log("id: ",id);
            console.log("contenido: ",content);
            console.log("pais: ",country);
            console.log("nombre: ",name);
            tracks.forEach(track =>{
                console.log("cancion: ",track)
            });
            console.log("------------------------------FIN------------------------------")
        });
       
    })
    .catch(error => {
        // Ha ocurrido un error al cargar el archivo .json
        console.log(error);
    });
 */