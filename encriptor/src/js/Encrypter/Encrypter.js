class Encryptor {
/*
de encrypt functie heeft een lege string, 
de functie krijgt een stuk tekst binnen dat die moet encrypten,
de tekst die die binnen krijgt veranderd in hoofd letters,
de functie loopt door de woord heen(letter voor letter),
de letter waar je nu bent moet je checken welke letter het is, (als het een A is verander in een D)
als die letter of symbol niet kan vinden doe er dan niks mee,
de tekst die je net hebt geencrypt doe plaats dat in de lege string

*/


    encrypt(stringToEncrypt) {
        let encryptedString = [];
        stringToEncrypt = stringToEncrypt.toUpperCase();
        
        for (let i = 0; i < stringToEncrypt.length; i++) {
            switch (stringToEncrypt[i]) {
                case "A":
                    encryptedString.push("D");
                    break;
                case "B":
                    encryptedString.push("E");
                    break;
                case "C":
                    encryptedString.push("F");
                    break;
                case "D":
                    encryptedString.push("G");
                    break;
                case "E":
                    encryptedString.push("H");
                    break;
                case "F":
                    encryptedString.push("I");
                    break;
                case "G":
                    encryptedString.push("J");
                    break;
                case "H":
                    encryptedString.push("K");
                    break;
                case "I":
                    encryptedString.push("L");
                    break;
                case "J":
                    encryptedString.push("M");
                    break;
                case "K":
                    encryptedString.push("N");
                    break;
                case "L":
                    encryptedString.push("O");
                    break;
                case "M":
                    encryptedString.push("P");
                    break;
                case "N":
                    encryptedString.push("Q");
                    break;
                case "O":
                    encryptedString.push("R");
                    break;
                case "P":
                    encryptedString.push("S");
                    break;
                case "Q":
                    encryptedString.push("T");
                    break;
                case "R":
                    encryptedString.push("U");
                    break;
                case "S":
                    encryptedString.push("V");
                    break;
                case "T":
                    encryptedString.push("W");
                    break;
                case "U":
                    encryptedString.push("X");
                    break;
                case "V":
                    encryptedString.push("Y");
                    break;
                case "W":
                    encryptedString.push("Z");
                    break;
                case "X":
                    encryptedString.push("A");
                    break;
                case "Y":
                    encryptedString.push("B");
                    break;
                case "Z":
                    encryptedString.push("C");
                    break;
                default:
                    encryptedString.push(stringToEncrypt[i]);
                    break


            }
        }
        encryptedString = encryptedString.join("");
        return encryptedString;
    }
}