const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const guessTheNumber = () => {
  let tries = 5;
  readline.question(`Welkom! Wat is je naam?`, (name) => {
      // ask player name
      if (name) {
        console.log(`Hey ${name}!`)
        playGame(name, tries);
      } else {
        console.log(`Even opnieuw hoor.`)
        guessTheNumber();
      }
    }
  )
  const playGame = (name, tries) => {
      readline.question(`Voer het laagste getal in: (groter dan 0): `, (playerNumMin) => {
        if(playerNumMin >= 0) {
          readline.question(`Voer het hoogste getal in. Dit getal moet groter dan ${playerNumMin} zijn: `, (playerNumMax) => {
            if(playerNumMax > playerNumMin) {
              readline.question(`Kies een nummer tussen ${playerNumMin} en ${playerNumMax}: `, (playerNum) => {
              if (playerNum >= playerNumMin && playerNum <= playerNumMax) {
                if(tries > 0) {
                  let randomNum = parseInt(playerNumMin, 10) + (Math.round(Math.random() * playerNumMax));
                  console.log(playerNumMin);
                  if (playerNum == randomNum) {
                    console.log(`${name}, je hebt goed gegokt en bent een winnaar! Het spel is nu klaar.`);
                    readline.close();
                  } else {
                    tries--;
                    console.log(`Helaas, ${name}! Het winnende getal was ${randomNum}. Je mag het nog ${tries} keer proberen.`)
                    //playGame(name, tries);
                    return
                  }
                } else {
                  console.log(`Je hebt helaas geen pogingen meer! Het spel is nu klaar.`);
                  readline.close();
                }
              }
            })
          } else {
            console.log(`Het getal moet wel groter dan ${playerNumMin} zijn. Opnieuw!`);
            playGame(name, tries);
          }
          })
        } else {
          console.log(`Een getal groter dan 0 graag!`);
          playGame(name, tries);
        }
      })
  }
}
guessTheNumber();

/*
*/
