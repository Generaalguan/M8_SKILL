class App {
    api;
    decryptor;
    encryptor;
    cleaner;
    renderer;
    main;

    constructor() {
        this.decryptor = new Decryptor();//de Decrypter class wordt aangeroepen
        this.encryptor = new Encryptor();//de Encrypter class wordt aangeroepen
        this.cleaner = new Cleaner();//de Cleaner class wordt aangeroepen
        this.renderer = new Renderer();//de Renderer class wordt aangeroepen
        this.api = new Api();//de Api class wordt aangeroepen
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