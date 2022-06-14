
// const getImagenPromesa = () => new Promise(resolve => resolve('http://dfgadfgkk.com'))

// getImagenPromesa().then(console.log)

const getImagen = async()=>{

try {
    const apiKey = 'fTVuUCrZD6B3yCFOCoOyJP7tHbmN3a2k'
    const respuesta  = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data} = await respuesta.json();
    const {url} = data.images.original;
    const img = document.createElement ('img');
    img.src = url
    document.body.append (img)
} catch (error) {
    //manejo del error
    console.error(error)
}

}
getImagen()
