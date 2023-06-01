class Body {
    HTMLelement;
    view;
    inputHTMLElement;
    text;
    constructor(view, object) {//    de body krijgt view en een object binnen
        this.view = view;

        this.HTMLelement = document.createElement("section");//    de HTMLElement is een section
        this.HTMLelement.classList = ("view__body");//    die krijgt de class view__body 
        this.view.main.app.renderer.render(this.HTMLelement, view.HTMLelement);//    de renderer zijn render functie wordt uitgevoerd die zet deze htmlelement in die van de view

        this.inputHTMLElement = document.createElement("textarea");//    de inputHTMLElement = een textarea
        this.inputHTMLElement.classList = "view__input";//    met de class view__input
        this.inputHTMLElement.placeholder = object.placeholder;//    de placeholder is de object zijn placeholder
        this.inputHTMLElement.value = object.value;//    de value is de object zijn value
        this.text = object.value;//    de tekst is de object zijn value

        this.inputHTMLElement.oninput = this.typed;//    de inputHTMLElement op input voert de typed functie uit

        this.view.main.app.renderer.render(this.inputHTMLElement, this.HTMLelement)//    de renderer zijn render functie wordt uitgevoerd die zet deze inputHTMLElement in de htmlelement


    }

    typed = (event) => {//    de typed functie die krijgt een event binnen

        this.text = event.target.value;//    deze tekst is de event zijn target value

    }

    changeBody = (newText) => {//    de changeBody functie krijgt een newTekxt binnen

        this.inputHTMLElement.value = newText;//    de inputHTMLElement zijn value is de newTekst

    }



}