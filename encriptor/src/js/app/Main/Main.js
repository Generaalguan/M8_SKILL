class Main {
    encryptorView;
    decryptorView;
    data;
    HTMLelement;
    app;

    constructor(data, app) { //de main krijgt de data en app binnen
        this.data = data;
        this.app = app;

        this.HTMLelement = document.createElement("main");  //de htmlelement = een aangemaakte main

        this.HTMLelement.classList = ("main");  //die krijgt de class main mee 
        this.app.renderer.render(this.HTMLelement, document.querySelector("body"));//         renderer zijn render functie wordt aangeroepen en renderd de htmlelement in de body

        this.encryptorView = new EncryptorView(this, this.data.encrypt); //er wordt een encryptorView aangemaakt, die krijgt de main en de correcte data binnen
        this.decryptorView = new DecryptorView(this, this.data.decrypt); //er wordt een decryptorView aangemaakt, die krijgt de main en de correcte data binnen
    }

    cipher = (textToCipher, type) => {  // deze functie zorgt ervoor dat ald de type die die binnenkrijgt "ENCRYPT" is dan gaat hij encrypten als hij dat niet krijgt dan gaat hij decrypten
        if (type === "ENCRYPT") {
        this.app.encrypt(textToCipher);
        }
        else{
            this.app.decrypt(textToCipher);
        }

    }

    changeEncrypter = (encryptedText) => {  // deze functie krijgt de encryptedText mee, die geeft hij verder aan de encrypterView zijn changeBody functie
        this.encryptorView.changeBody(encryptedText);

    } 

    changeDecrypter = (decryptedText) => {  // deze functie krijgt de decryptedText mee, die geeft hij verder aan de decrypterView zijn changeBody functie
        this.decryptorView.changeBody(decryptedText);
    }

}