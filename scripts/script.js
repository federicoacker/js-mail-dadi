/* Crea una lista di email di invitati ad una festa.
Chiedi all utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
Nota: 
Non è necessario provvedere alla validazione delle email, però se volete è una feature ben accetta.
 */


// DICHIARAZIONE VARIABILI
const mailList = [
    "ciaociao@gmail.com",
    "giangiovangiangiacomo@gmail.com",
    "test123@gmail.com",
    "ciaone@yahoo.com",
    "helloWorld@hotmail.com",
    "javaScript@libero.it"
]
const regex = /.+[@]+(\bgmail\.com\b|\bhotmail\.com\b|\byahoo\.com\b|\blibero\.it\b|proton\.me\b)/; // In via di sviluppo, scritto un po' per volta su regex101 per testare che funzionasse
// controlla se la mail inviata è nel formato "qualsiasicosavuoi@gmail.com/hotmail.com/yahoo.com/libero.it/proton.me"

let submittedMail = "";

while (submittedMail === "" || !regex.test(submittedMail)) {
    submittedMail = prompt("Inserisci la tua mail per vedere se sei sulla lista degli invitati");
}
//Facciamo un Sort della mailList
for (let i = 0; i < mailList.length; i++) {
    let minIndex = i; // Assumiamo che l'elemento corrente sia il più "piccolo", ovvero sia in ordine alfabetico precedente rispetto a quello che andremo a controllare
    for (let j = i + 1; j < mailList.length; j++) { //For interno, controlliamo, da j = i + 1, tutti i valori a destra del nostro minIndex (che parte da 0 e viene aggiornato ad i ad ogni ciclo)
        if (mailList[j].toLowerCase() < mailList[minIndex].toLowerCase()) { //Se mailList[j] viene alfabeticamente prima di mailList[minIndex]
            minIndex = j; //Allora abbiamo trovato il nostro nuovo minIndex e ripetiamo il ciclo fino ad esaurimento di j
        }
    }
    // Adesso, usciti dal for interno, controlliamo se minIndex è cambiato
    if (minIndex !== i) { //Se minIndex è cambiato e non è più uguale a i
        const savedMail = mailList[i]; //Allora salviamo mailList[i] in una variabile temporanea
        mailList[i] = mailList[minIndex]; //Cambiamo di posto mailList[i] con mailList[minIndex] in modo che sia effettivamente nell'ordine giusto
        mailList[minIndex] = savedMail; //Mettiamo al posto del vecchio mailList[minIndex] il savedMail che era la nostra variabile temporanea, così di fatto abbiamo scambiato di posto i due valori che non erano in ordine
    }
}
//Alla fine di questo ciclo abbiamo per lo meno, un'array che è in ordine alfabetico crescente

//Adesso lavoriamo alla logica per fare il controllo, avendo un array ordinato, ci piacerebbe non controllare tutto l'array, ma controllare usando il search binario

//Quindi in maniera logica:
//Il search binario funziona che prendo l'array ordinato che ho, vado a controllare il valore nel mezzo
//Se non è quello che sto cercando, controllo: il valore che abbiamo guardato era più piccolo o più grande di quello che stiamo cercando?
//Se più piccolo controllo nella metà di destra dell'array (in maniera ricorsiva)
//Se più grande controllo nella metà di sinistra dell'array (in maniera ricorsiva)
//Funzione per implementare un binarySearch:
function binarySearchStringArray(
    arrayToSearch, //Gli fornisco l'array in cui cercare (che è stato già ordinato dal nostro sort di prima)
    searchTerm, //Gli fornisco ciò per cui sta cercando
    low = 0, //Gli fornisco il boundary inferiore per il "subarray", di default 0
    high = arrayToSearch.length - 1 //Gli fornisco il boundary superiore per il "subarray", di default è l'ultimo indice dell'array
) {
    if (low > high) { // Primo caso, se per un motivo qualsiasi (dovuto alla recursion) dovesse capitarmi che low è > high allora l'elemento non è stato trovato
        return -1; // Ritorno -1 per avvisare che l'elemento non c'è
    }

    const halfIndex = Math.floor((low + high) / 2); // Calcolo l'indice alla metà del mio "subArray", all'inizio il subArray sarà l'intero Array

    if (searchTerm === arrayToSearch[halfIndex]) { //Se la posizione a metà del subArray, contiene un elemento proprio identico al mio search Term
        return halfIndex; //Allora restituisco l'indice 
    } else if (arrayToSearch[halfIndex] > searchTerm) { //Altrimenti se, l'elemento in posizione halfIndex, viene alfabeticamente dopo il mio searchTerm, vuol dire che dovrò considerare la metà dell'array di sinsitra
        return binarySearchStringArray(arrayToSearch, searchTerm, low, halfIndex - 1); //Ritorno di nuovo la funzione, passandogli stavolta come low sempre lo stesso di prima, cioè 0 nella prima recursione, ma come high, halfIndex + 1, sto in pratica andando a guardare nel subarray di sinistra
    } else { //Altrimenti, l'elemento in posizione halfIndex viene alfabeticamente prima del mio searchTerm, quindi devo andare a guardare nel subarray di destra
        return binarySearchStringArray(arrayToSearch, searchTerm, halfIndex + 1, high);//Ritorno di nuovo la funzione, passandogli stavolta come high sempre lo stesso di prima, cioè la fine dell'array nella prima recursione, ma come low, halfIndex + 1, sto in pratica andando a guardare nel subarray di destra
    }
}

//A questo punto, facciamo un veloce controllo per assicurarci che la mail inserita dall'utente sia nella lista mail
if(binarySearchStringArray(mailList, submittedMail) !== -1){
    console.log("Sei invitato alla festa");
}else{
    console.log("Non sei invitato alla festa");
}