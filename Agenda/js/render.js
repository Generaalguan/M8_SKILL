class Renderer {    // dit is de klasse van de renderer

    constructor() {

    }

    render(placeToRender, whatToRender) {   //dit is de render functie, deze functie  heeft een placeToRenden en een whatToRender,
        document.querySelector(placeToRender).appendChild(whatToRender);    //hij gooit via de querySelector de whatToRender op in de where to render
    }
}