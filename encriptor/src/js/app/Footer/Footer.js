
class Footer {
    HTMLelement;
    view;
    buttonHtmlElement;
    buttonText;

    constructor(view, text) {
        this.view = view;
        this.HTMLelement = document.createElement("footer");
        this.HTMLelement.classList = ("view__footer");
        this.view.main.app.renderer.render(this.HTMLelement, view.HTMLelement);

        this.buttonText = text;
        this.buttonHtmlElement = document.createElement("button");
        this.buttonHtmlElement.classList = "view__button";
        this.buttonHtmlElement.innerText = this.buttonText;
        this.view.main.app.renderer.render(this.buttonHtmlElement, this.HTMLelement);

        this.buttonHtmlElement.onclick = this.buttonClicked;


    }

    buttonClicked = () => {
        this.view.getDataFromBody();
    }

/*
de footer krijgt view en text binnen,

de htmlelement is de aangemaakte footer element, 
die krijgt de class view__footer binnen
deze wordt gerenderd door renderer zijn render functie, deze htmlElement(footer) wordt gerenderd in view zijn htmlelement(main)

de buttonHtmlElement is de aangemaakte button element,
die krijgt de class view__button,
de tekst die de buttonHTMLelement binnen krijgt is de text die je binnen krijgt
de renderer zijn render functie wordt uitgevoer die zet de buttonHTMLElement(button) in deze htmlelement (footer) 

als deze buttonHTMLElment op geclickt is voer de functie buttonClicked uit
die voert de view zijn get data from body uit


*/


}