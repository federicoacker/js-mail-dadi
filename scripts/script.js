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
const regex = /./; // In via di sviluppo

let submittedMail = "";

while (submittedMail === "" || !regex.test(submittedMail)) {
    submittedMail = prompt("Inserisci la tua mail per vedere se sei sulla lista degli invitati");
}
//Facciamo un Sort della mailList
for (let i = 0; i < mailList.length; i++) {
    let minIndex = i ; // Assumiamo che l'elemento corrente sia il più "piccolo", ovvero abbia la prima lettera più "piccola" rispetto a quelli che vengono dopo di lui
    for (let j = i + 1; j < mailList.length; j++) { //For interno, controlliamo, da j = 1, tutti i valori a destra del nostro minIndex (che parte da 0 e viene aggiornato ad i ad ogni ciclo)
        if (mailList[j][0].toLowerCase() < mailList[minIndex][0].toLowerCase()) { //Se la prima lettera, di mailList[j] viene alfabeticamente prima della prima lettera di mailList[minIndex]
            minIndex = j; //Allora abbiamo trovato il nostro nuovo minIndex e ripetiamo il ciclo fino ad esaurimento di j
        }
    }
    // Adesso, usciti dal for interno, controlliamo se minIndex è cambiato
    if (minIndex !== i){ //Se minIndex è cambiato e non è più uguale a i
        const savedMail = mailList[i]; //Allora salviamo mailList[i] in una variabile temporanea
        mailList[i] = mailList[minIndex]; //Cambiamo di posto mailList[i] con mailList[minIndex] in modo che sia effettivamente nell'ordine giusto
        mailList[minIndex] = savedMail; //Mettiamo al posto del vecchio mailList[minIndex] il savedMail che era la nostra variabile temporanea, così di fatto abbiamo scambiato di posto i due valori che non erano in ordine
    }
}
//Alla fine di questo ciclo abbiamo per lo meno, un'array che è in ordine alfabetico crescente, almeno per le prime lettere

console.log(mailList);
