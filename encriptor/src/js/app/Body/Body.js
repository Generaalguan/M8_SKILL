class Body {
    HTMLelement;
    view;
    inputHTMLElement;
    text;
    constructor(view, object) {
        this.view = view;

        this.HTMLelement = document.createElement("section");
        this.HTMLelement.classList = ("view__body");
        this.view.main.app.renderer.render(this.HTMLelement, view.HTMLelement)

        this.inputHTMLElement = document.createElement("textarea");
        this.inputHTMLElement.classList = "view__input";
        this.inputHTMLElement.placeholder = object.placeholder;
        this.inputHTMLElement.value = object.value;
        this.text = object.value;

        this.inputHTMLElement.oninput = this.typed;

        this.view.main.app.renderer.render(this.inputHTMLElement, this.HTMLelement)

    }

    typed = (event) => {
        this.text = event.target.value;
    }

    changeBody = (newText) => {
        this.inputHTMLElement.value = newText;
    }

    /*
    de body krijgt view en een object binnen

    de HTMLElement is een section
    die krijgt de class view__body 
    de renderer zijn render functie wordt uitgevoerd die zet deze htmlelement in die van de view

    de inputHTMLElement = een textarea
    met de class view__input
    de placeholder is de object zijn placeholder
    de value is de object zijn value
    de tekst is de object zijn value

    de inputHTMLElement op input voert de typed functie uit
    de renderer zijn render functie wordt uitgevoerd die zet deze inputHTMLElement in de htmlelement

    de typed functie die krijgt een event binnen
    deze tekst is de event zijn target value

    de changeBody functie krijgt een newTekxt binnen
    de inputHTMLElement zijn value is de newTekst

    
    
    */


}