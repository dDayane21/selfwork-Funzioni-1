function giocoDadi(tiriDado) {
     let utente1 = 0;
     let utente2 = 0;

for (let i = 0; i < tiriDado; i++) {
    let lancioUtente1 = Math.floor(Math.random() * (6 + 1 - 1) +1);
    let lancioUtente2 = Math.floor(Math.random() * (6 + 1 - 1) +1);

    utente1 = utente1 + lancioUtente1;
    utente2 = utente2 + lancioUtente2;
}

if (utente1 > utente2) {
    return `utente1 vince con ${utente1} punti`;
  } else if (utente2 > utente1) {
    return `utente2 vince con ${utente2} punti`;
  } else {
    return `pareggio con ${utente1} punti`;
}
}

let tiriDado = Number(prompt(`quanti tiri per giocatore`));
let esitoPartita = giocoDadi(tiriDado);

console.log(esitoPartita);