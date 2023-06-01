class AgendaApp {
    api;    // het heeft een api 
    switcher;   //het heeft een switcher
    month = 0;  //het heeft een maand die begint bij 0


    constructor() {
        this.api = new Api(); // hij voert de api uit
        this.switcher = new Switcher(this); // hij voer de switcher uit, die krijgt de agenadApp mee

        this.api.getData().then(result => { //de data die je van de API krijgt wordt verneomt naar result
            this.switcher.loadAgenda(result[this.month]);   //de switcher ziijn loadAgenda() functie krijgt de maand binnen

        });

    }

    switchMonths = (sign) => {
        switch (sign) {
            case "+":
                this.month = this.month + 1;
                break;  // als er een + symbool tevoorschijn komt dan kijgt de month +1
            case "-":
                this.month = this.month - 1;
                break;  // als er een  symbool tevoorschijn komt dan kijgt de month -1
        }
        if (this.month === 12) {
            this.month = 0;
        }   //als de maand op nummer 12(die bestaat niet) staat dan gaat die terug naar de eerste maand
        if (this.month === -1) {
            this.month = 11;
        }   //als de maand onder de de eerste maand is dan gaat die terug naar de laatste maand

        this.switcher.loadAgenda(this.api.data[this.month]) //hier wordt de switcher zijn loadAgenda() uitgevoerd die geeft dan ook de api zijn maand mee
    }



}

class Api {
    data = [];  // er is een data nodig

    async getData() {   // hier staat er dat de getdata() functie a synchrome moet gaan
        await fetch("../data/data.json").then(Response => { // de api class wacht eerst op de response van da data.json
            return Response.json(); // hier wordt de verkeerde data terug gestuurd
        }).then(data => {
            this.data = data.months;    //de correcte data wordt opgehaald
        })
        return this.data;
    }

}

class Agenda {
    header; //er is een header nodig
    renderer;   //er is een renderer nodig
    month;  //er is een monrh nodig
    data;   // heeft de data nodig
    htmlElement;    // is een htmlelement nodig
    agendaApp;  //heeft de agendaApp nodig

    constructor(incommingData, incommingApp) {  //er komt Data en AgendaApp binnen
        this.data = incommingData;  //deze data is de incommingData
        this.agendaApp = incommingApp;  //deze agendaApp is de incommingapp

        this.htmlElement = document.createElement("article");   //de htmlElement is een article, deze krijgt de class = agenda
        this.htmlElement.classList = "agenda";


        this.renderer = new Renderer(); // de render wordt hier aangemaakt
        this.renderer.render("body", this.htmlElement); //de renderer zijn render functie wordt uitgeroepen, deze krijgt de body binnen als de placetorender en krijgt de htmlelement binnen als what to render
        this.header = new Header(this, this.data.name, this.agendaApp); // de haeder wordt aan gemaakt, deze krijgt de agenda, data.name en de agenda binnen
        this.month = new Month(this, this.data.days);   // de month wordt aan gemaakt, deze krijgt de agenda en de data. days binnen


    }

    render(placeToRender, whatToRender) {   //dit is de render functie, deze functie  heeft een placeToRenden en een whatToRender,
        this.renderer.render(placeToRender, whatToRender)   //deze voert de renderer zijn render() functie uit en gooit de whatToRender op in de whereToRender
    }
}

class Header {  
    htmlElement;    // het heeft een htmlElement
    nameOfMonth;    // het heeft de naam van de maand
    agenda; // heet heeft de agenda nodig
    rightButton;    // het heeft een right button
    leftButton; // het heeft een leftbutton
    agendaApp;  // heet heeft de agendaApp

    constructor(incommingAgenda, incommingName, incommingApp) { //er komt een agenda binnen, er komt de naam van de maand binnen, er komt een app binnen
        this.agenda = incommingAgenda;  // deze agenda is de de binnenkomende agenda
        this.nameOfMonth = incommingName;   // deze nameOfMonth is de binnenkomende name
        this.agendaApp = incommingApp   // deze agendaApp is de binnenkomde app 

        this.htmlElement = document.createElement("header");    //de htmlelement = header met de class agenda__header
        this.htmlElement.classList = "agenda__header";

        this.text = document.createElement("h2");   //deze tekst is een h2 met de naam van de maand als text
        this.text.innerText = this.nameOfMonth;

        this.agenda.render(".agenda", this.htmlElement);    // de agenda zijn render functie wordt uitgevoerd, deze krijgt agenda = wheretorenden en htmlelement binnen = whatToRender


        this.leftButton = new Button("previous", "<", "agenda--left", this, this.agendaApp);    //er wordt een button gemaakt die geeft "previous", "<", "agenda--left", krijgt de header en de agendaApp mee
        this.agenda.render(".agenda__header", this.text);   // de agenda zijn render wordt uitgevoerd, de placeToRender = agenda__header, whatToRender = deze text
        this.rightButton = new Button("next", ">", "agenda--right", this, this.agendaApp);  //er wordt een button gemaakt die geeft "next", ">", "agenda--Right", krijgt de header en de agendaApp mee
    }

    render(placeToRender, whatToRender) {   // de render() functie wordt uit gevoerd, het krijgt de place- whatToRender 
        this.agenda.render(placeToRender, whatToRender) // het voert de render functie van de agenda uit, met de placeToRender en whatToRender
    }
}

class Button {
    htmlElement;
    innerText;
    extraClass;
    header;
    switcher;
    agendaApp;
    type;

    constructor(incommingType, incommingText, incommingClass, incommingHeader, incommingApp) {  //je krijgt een type, text, class, header en app binnen
        this.innerText = incommingText; //de innertext is de innertext die hij binnenkrijgt
        this.extraClass = incommingClass;   //de extraclass is de class die hij binnenkrijgt
        this.header = incommingHeader;  //de innert is de innertext die hij binnenkrijgt
        this.agendaApp = incommingApp;  //de agendap is de App die hij binnenkrijgt
        this.type = incommingType;  //de type is de type die hij binnenkrijgt

        this.htmlElement = document.createElement("button") // de htmlelement maakt een button, met de class agenda__button, daar voeg je de extraClass aan, de text is de innertext
        this.htmlElement.classList = "agenda__button";
        this.htmlElement.classList.add(this.extraClass);
        this.htmlElement.innerText = this.innerText;

        this.render();  //voert de render() functie uit

        this.htmlElement.onclick = this.buttonOnclicked;    // als op de htmlelement gekilckt wordt dan wordt de buttonOnClicked functie uit gevoerd
    }

    buttonOnclicked = () => {
        if (this.type === "previous") { // als de type die geklickt wordt de type previous heeft dan geef je aan de agendaApps switchMonths een - mee
            this.agendaApp.switchMonths("-");
            return;
        }
        this.agendaApp.switchMonths("+");// anders geef je de agendaApps switchMonths een + mee
    }

    render() {
        this.header.render("header", this.htmlElement); // de header zijn rende() functie wordt uitgevoerd en krijgt de placetorender en de wheretorender mee
    }
}

class Switcher {
    loadAgenda;
    agenda;
    agendaApp;
    cleaner;


    constructor(incommingApp) {
        this.agendaApp = incommingApp;  // de agendaApp is de agendaApp die binnen komt
        this.cleaner = new Cleaner();   // de cleaner class wordt gemaakt en uigevoerd

    }

    loadAgenda = (data) => {
        this.cleaner.clean("body"); // de cleaner zijn clean() functie krijgt de body binnen
        this.agenda = new Agenda(data, this.agendaApp); //er wordt een nieuwe agenda aangemaakt het krijgt data en de agendaApp binnen
    }


}

class Month {
    htmlElement
    days = [];
    agenda;
    numberOfDays;

    constructor(incommingAgenda, incommingDays) {   //je krijgt de agenda en dagen binnen
        this.numberOfDays = incommingDays;  // de numberOfDays id de dagen die je binnenkrijgt
        this.agenda = incommingAgenda;  // de agenda is de agenda die je binnen krijgt

        this.htmlElement = document.createElement("ul");    //de htmleelement maakt een een ul aan met de class agenda__month
        this.htmlElement.classList = "agenda__month";
        this.agenda.render(".agenda", this.htmlElement);    // de agenda zijn render functie  wordt uitgevoerd, die krijgt de placetorender en whattorender mee

        for (let i = 1; i <= this.numberOfDays; i++) {
            this.days.push(new Day(this, i));   //voor elke dag in de maand wordt een niewe dag gepusht in de variable die maakt dan elke keer een niewe day class aan
        }

    }

    renderDays(placeToRender, whatToRender) {
        this.agenda.render(placeToRender, whatToRender);    // de agenda zijn render functie wordt uitgevoerd met whertorender  en whattorender
    }
}

class Day {
    htmlElement;
    month;
    dayNumber;

    constructor(incommingmonth, incommingDaysNumber) {  // je krijgt de month binnen en de aantaldagen
        this.month = incommingmonth;    // de month is de month die binnen komt
        this.dayNumber = incommingDaysNumber;   // de dayNumber is de aantaldagen die binnen komt

        this.htmlElement = document.createElement("li");    //de htmlelement maakt een li aan, deze heeft een class agenda_day en de text is de dayNumber
        this.htmlElement.classList = "agenda__day"; 
        this.htmlElement.innerText = this.dayNumber;

        this.month.renderDays(".agenda__month", this.htmlElement);  // de maand zijn renderDays wordt uitgevoert, en krijgt de whereToRender en de whatToRender



    }
}



