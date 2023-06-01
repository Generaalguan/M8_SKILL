class Header {
    HTMLelement;
    view;
    headinHTMLElement;
    headingtext;
    constructor(view, text) {//de header krijgt view en text binnen,
        this.view = view;
        this.HTMLelement = document.createElement("header");//de htmlelement is de aangemaakte header element, 
        this.HTMLelement.classList = ("view__header");//die krijgt de class view__header binnen
        this.view.main.app.renderer.render(this.HTMLelement, view.HTMLelement);//deze wordt gerenderd door renderer zijn render functie, de header wordt gerenderd in view zijn htmlelement

        this.headingtext = text;//de headingtext is de inkomende text
        this.headinHTMLElement = document.createElement("h1");//de headingHtmlElement is de aangemaakte h1 element,
        this.headinHTMLElement.classList = ("view__heading");//die krijgt de class view__heading,
        this.headinHTMLElement.innerText = this.headingtext;//de tekst die op het scherm komen is de headingtext
        this.view.main.app.renderer.render(this.headinHTMLElement, this.HTMLelement)//de renderer zijn render functie wordt uitgevoer die zet de headingHTMLElement(h1) in deze htmlelement (header) 


    }
}
