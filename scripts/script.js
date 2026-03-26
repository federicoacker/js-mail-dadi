// DICHIARAZIONE COSTANTI
const mailList = [
    "ciaociao@gmail.com",
    "giangiovangiangiacomo@gmail.com",
    "test123@gmail.com",
    "ciaone@yahoo.com",
    "helloWorld@hotmail.com",
    "javaScript@libero.it"
];
//Parte bonus, regex per controllare che si tratti di una mail effettiva
const regex = /.+[@]+(\bgmail\.com\b|\bhotmail\.com\b|\byahoo\.com\b|\blibero\.it\b|proton\.me\b)/; // Scritto un po' per volta su regex101 per testare che funzionasse
// controlla se la mail inviata è nel formato "qualsiasicosavuoi@gmail.com/hotmail.com/yahoo.com/libero.it/proton.me"


// DICHIARAZIONE VARIABILI
let submittedMail = ""; // Mail inserita dall'utente
let mailFound = false; // Flag booleana per sapere se la mail inserita è nella lista



// FINCHE' NON INSERISCE UNA MAIL,CONTINUA A CHIEDERE
while (submittedMail === "" || !regex.test(submittedMail)) {
    submittedMail = prompt("Inserisci la tua mail per vedere se sei sulla lista degli invitati");
    if(!regex.test(submittedMail)){
        const errorMessage = // Creo un messaggio di errore con template literal. Problema, mi conserva gli spazi dell'indentazione nella console
        `La mail inserita non è nel formato giusto.
        Sono accettati solo:
        @gmail.com
        @hotmail.com
        @yahoo.com
        @libero.it
        @proton.me`;
        const cleanedMessage = errorMessage.replace(/^ +/gm, ''); //Soluzione, uso una regex per trovare gli spazi e poi replace per eliminarli
        console.error(cleanedMessage); //Stampo il messaggio di errore
    }
}

// CONTROLLA SE LA MAIL INSERITA E' NELLA MAIL LIST
for (let i = 0; i < mailList.length && !mailFound; i++) //Il ciclo for scorre tutta la lista fino alla fine o finché non viene trovata la mail
{
    if (submittedMail === mailList[i]) { //Se trovi la mail inserita dall'utente, dentro la mailList
        mailFound = true; //Metti la flag a true, questo ci farà uscire dal ciclo
    }
}
if (mailFound) { //Se la flag è a true
    console.log("Sei invitato alla festa"); //Stampa il messaggio corrispondente
} else { //Altrimenti
    console.log("Non sei invitato alla festa"); //Stampa il messaggio corrispondente
}

