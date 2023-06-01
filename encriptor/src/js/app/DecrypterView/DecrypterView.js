class DecryptorView {
    header;
    body;
    footer;
    HTMLelement;
    main;
    type;
 

    constructor(main, object){//de decrypter view krijgt de main en een object binnen
        this.main = main;
        this.type = "DECRYPT";//de type is encrypt

        this.HTMLelement = document.createElement("article");// de htmlelement is een article, 
        this.HTMLelement.classList = ("view");//  de class die hij krijgt is view
        this.HTMLelement.classList.add("view--right")//  het krijgt een extra class view--right

        this.main.app.renderer.render(this.HTMLelement, (this.main.HTMLelement));// deze wordt gerenderd door renderer zijn render functie, daar wordt deze htmlelement gerenderd in de main zijn htmlelement

        this.header = new Header(this, "Decryptor");// er wordt een header aan gemaakt, die krijgt de decrypterView en de tekst"encryptor " mee
        this.body = new Body(this, object);// er wordt een body aan gemaakt, die krijgt de decrypterView en een object mee
        this.footer = new Footer(this, "start decrypting");// er wordt een footer aan gemaakt, die krijgt de decrypterView en de tekst"start decrypting " mee
    }

    getDataFromBody = () =>{//
        this.main.cipher(this.body.text, this.type);// er is een functie getdatafrombody, die geeft aan de main zijn cipher functie: de text van de body mee, en geeft ook de type mee

    }

    changeBody = (decryptedText) => {//
        this.body.changeBody(decryptedText);// er is een functie changeBody, die krijgt de decrypted text mee, die geeft het verder aan body zijn changeBody functie

    }


}