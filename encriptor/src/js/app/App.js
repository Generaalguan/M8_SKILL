class App {
    api;
    decryptor;
    encryptor;
    cleaner;
    renderer;
    main;

    constructor() {
        this.decryptor = new Decryptor();
        this.encryptor = new Encryptor();   
        this.cleaner = new Cleaner();
        this.renderer = new Renderer();
        this.api = new Api();
        //elke class wordt aangeroepen
        this.api.getData("/src/data/data.json").then((data) => {
            this.main = new Main(data, this);// na dat je de achte data binnen hebt, geef deze dan verder aan de class main
        });
    }

    encrypt = (textToEncrypt) => {
        const encrypted = this.encryptor.encrypt(textToEncrypt);
        this.main.changeEncrypter(encrypted);
    }   // encypt functie wordt uitgeroepen die krijgt textToEncrypt mee dan geeft het de encrypted text mee aan de main

    decrypt = (textToDecrypt) => {
        const decrypted = this.decryptor.decrypt(textToDecrypt);
        this.main.changeDecrypter(decrypted);
    }   // decypt functie wordt uitgeroepen die krijgt textToDecrypt mee dan geeft het de decrypted text mee aan de main



}