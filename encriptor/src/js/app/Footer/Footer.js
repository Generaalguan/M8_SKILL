
class Footer {
    HTMLelement;
    view;
    buttonHtmlElement;
    buttonText;

    constructor(view, text) {//de footer krijgt view en text binnen,
        this.view = view;
        this.HTMLelement = document.createElement("footer");//de htmlelement is de aangemaakte footer element, 
        this.HTMLelement.classList = ("view__footer");//die krijgt de class view__footer binnen
        this.view.main.app.renderer.render(this.HTMLelement, view.HTMLelement);//deze wordt gerenderd door renderer zijn render functie, deze htmlElement(footer) wordt gerenderd in view zijn htmlelement(main)

        this.buttonText = text;//de buttontext is de inkomende text
        this.buttonHtmlElement = document.createElement("button");//de buttonHtmlElement is de aangemaakte button element,
        this.buttonHtmlElement.classList = "view__button";//die krijgt de class view__button,
        this.buttonHtmlElement.innerText = this.buttonText;//de tekst die op het scherm komt is de buttontext
        this.view.main.app.renderer.render(this.buttonHtmlElement, this.HTMLelement);//de renderer zijn render functie wordt uitgevoer die zet de buttonHTMLElement(button) in deze htmlelement (footer) 

        this.buttonHtmlElement.onclick = this.buttonClicked;//als deze buttonHTMLElment op geclickt is voer de functie buttonClicked uit


    }

    buttonClicked = () => {//
        this.view.getDataFromBody();//die voert de view zijn get data from body uit
    }




}