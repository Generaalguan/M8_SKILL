class EncryptorView {
    header;
    body;
    footer;
    HTMLelement;
    main;
    type;
 

    constructor(main, object) {// de encrypter view krijgt de main en een object binnen,
        this.main = main;
        this.type = "ENCRYPT";// de type is encrypt

        this.HTMLelement = document.createElement("article");// de htmlelement is een article, 
        this.HTMLelement.classList = ("view");// de htmlelement krijgt de class view
        this.HTMLelement.classList.add("view--left");// het krijgt een extra class view--left

        this.main.app.renderer.render(this.HTMLelement, this.main.HTMLelement);// deze wordt gerenderd door renderer zijn render functie, daar wordt deze htmlelement gerenderd in de main zijn htmlelement

        this.header = new Header(this, "Encryptor");// er wordt een header aan gemaakt, die krijgt de encrypterView en de tekst"encryptor " mee
        this.body = new Body(this, object);// er wordt een body aan gemaakt, die krijgt de encrypterView en een object mee
        this.footer = new Footer(this, "start encrypting")// er wordt een footer aan gemaakt, die krijgt de encrypterView en de tekst"start encrypting " mee
    }

    getDataFromBody = () =>{
        this.main.cipher(this.body.text, this.type);// er is een functie getdatafrombody, die geeft aan de main zijn cipher functie: de text van de body mee, en geeft ook de type mee

    }

    changeBody = (encryptedText) => {
        this.body.changeBody(encryptedText);// er is een functie changeBody, die krijgt de encrypted text mee, die geeft het verder aan body zijn changeBody functie

    }
}

