class Header {
    HTMLelement;
    view;
    headinHTMLElement;
    headingtext;
    constructor(view, text) {
        this.view = view;
        this.HTMLelement = document.createElement("header");
        this.HTMLelement.classList = ("view__header")
        this.view.main.app.renderer.render(this.HTMLelement, view.HTMLelement)

        this.headingtext = text;
        this.headinHTMLElement = document.createElement("h1");
        this.headinHTMLElement.classList = ("view__heading");
        this.headinHTMLElement.innerText = this.headingtext;
        this.view.main.app.renderer.render(this.headinHTMLElement, this.HTMLelement)

    }
}
/*
de header krijgt view en text binnen,

de htmlelement is de aangemaakte header element, 
die krijgt de class view__header binnen
deze wordt gerenderd door renderer zijn render functie, de header wordt gerenderd in view zijn htmlelement

de headingHtmlElement is de aangemaakte h1 element,
die krijgt de class view__heading,
de tekst die die binnen krijgt is de text die j ebinnen krijgt
de renderer zijn render functie wordt uitgevoer die zet de headingHTMLElement(h1) in deze htmlelement (header) 



*/