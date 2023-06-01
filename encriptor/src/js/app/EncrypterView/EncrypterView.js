class EncryptorView {
    header;
    body;
    footer;
    HTMLelement;
    main;
    type;
 

    constructor(main, object) {
        this.main = main;
        this.type = "ENCRYPT";

        this.HTMLelement = document.createElement("article");
        this.HTMLelement.classList = ("view");
        this.HTMLelement.classList.add("view--left")

        this.main.app.renderer.render(this.HTMLelement, this.main.HTMLelement);

        this.header = new Header(this, "Encryptor");
        this.body = new Body(this, object);
        this.footer = new Footer(this, "start encrypting")
    }

    getDataFromBody = () =>{
        this.main.cipher(this.body.text, this.type);
    }

    changeBody = (encryptedText) => {
        this.body.changeBody(encryptedText);
    }
}

/*
 de encrypter view krijgt de main en een object binnen,
 de type is encrypt

 de htmlelement is een article, 
 de class die hij krijgt is view
 het krijgt een extra class view--left
 deze wordt gerenderd door renderer zijn render functie, daar wordt deze htmlelement gerenderd in de main zijn htmlelement
 
 er wordt een header aan gemaakt, die krijgt de encrypterView en de tekst"encryptor " mee
 er wordt een body aan gemaakt, die krijgt de encrypterView en een object mee
 er wordt een footer aan gemaakt, die krijgt de encrypterView en de tekst"start encrypting " mee

 er is een functie getdatafrombody, die geeft aan de main zijn cipher functie: de text van de body mee, en geeft ook de type mee
 er is een functie changeBody, die krijgt de encrypted text mee, die geeft het verder aan body zijn changeBody functie

*/