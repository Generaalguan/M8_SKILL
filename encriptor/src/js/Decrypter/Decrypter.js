class Decryptor {

    /*
de decrypt functie heeft een lege string, 
de functie krijgt een stuk tekst binnen dat die moet decrypten,
de tekst die die binnen krijgt veranderd in hoofd letters,
de functie loopt door de woord heen(letter voor letter),
de letter waar je nu bent moet je checken welke letter het is, (als het een A is verander in een D)
als die letter of symbol niet kan vinden doe er dan niks mee,
de tekst die je net hebt decrypt doe plaats dat in de lege string

*/

    decrypt(stringToDecrypt) {
        let decryptedString = [];
        stringToDecrypt = stringToDecrypt.toUpperCase()

        for (let i = 0; i < stringToDecrypt.length; i++) {
            switch (stringToDecrypt[i]) {
                case "D":
                    decryptedString.push("A");
                    break;
                case "E":
                    decryptedString.push("B");
                    break;
                case "F":
                    decryptedString.push("C");
                    break;
                case "G":
                    decryptedString.push("D");
                    break;
                case "H":
                    decryptedString.push("E");
                    break;
                case "I":
                    decryptedString.push("F");
                    break;
                case "J":
                    decryptedString.push("G");
                    break;
                case "K":
                    decryptedString.push("H");
                    break;
                case "L":
                    decryptedString.push("I");
                    break;
                case "M":
                    decryptedString.push("J");
                    break;
                case "N":
                    decryptedString.push("K");
                    break;
                case "O":
                    decryptedString.push("L");
                    break;
                case "P":
                    decryptedString.push("M");
                    break;
                case "Q":
                    decryptedString.push("N");
                    break;
                case "R":
                    decryptedString.push("O");
                    break;
                case "S":
                    decryptedString.push("P");
                    break;
                case "T":
                    decryptedString.push("TQ");
                    break;
                case "U":
                    decryptedString.push("R");
                    break;
                case "V":
                    decryptedString.push("S");
                    break;
                case "W":
                    decryptedString.push("T");
                    break;
                case "X":
                    decryptedString.push("U");
                    break;
                case "Y":
                    decryptedString.push("V");
                    break;
                case "Z":
                    decryptedString.push("W");
                    break;
                case "A":
                    decryptedString.push("X");
                    break;
                case "B":
                    decryptedString.push("Y");
                    break;
                case "C":
                    decryptedString.push("Z");
                    break;
                default:
                    decryptedString.push(stringToDecrypt[i]);

            }
        }
        decryptedString = decryptedString.join("");
        return decryptedString;
    }

}