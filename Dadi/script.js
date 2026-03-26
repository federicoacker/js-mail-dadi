const computerDieNumber = Math.floor(Math.random() * 6) + 1; //Numero a caso da 1 a 6 
const myDieNumber = Math.floor(Math.random() * 6) + 1; //Numero a caso da 1 a 6

console.log(`Hai tirato ${myDieNumber}, il computer ha tirato ${computerDieNumber}`); //Stampo quanto è stato tirato

if(myDieNumber > computerDieNumber){ //Se il mio numero è più grande
    console.log("Hai vinto tu!"); //Vinco io
}
else if(myDieNumber < computerDieNumber){ //Altrimenti se il mio numero è più piccolo
    console.log("Ha vinto il computer!"); //Vince il computer
}
else { //Altrimenti sono uguali
    console.log("E' un pareggio!"); //Ed è un pareggio
}