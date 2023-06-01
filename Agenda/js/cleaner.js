class Cleaner{

    clean(whereToClean) {   //de functie clean() heeft een where to clean nodig
        document.querySelector(whereToClean).innerHTML = "";    //door te checken waar die moet de functie clean() moet gebruiken, deze leegt het de where to clean
    }
}