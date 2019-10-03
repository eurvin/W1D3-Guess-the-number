const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const guessTheNumber = () => {
  personalDetails()
}

const personalDetails = () => {
  readline.question(`Welkom! Wat is je naam?`, (name) => {
      // ask player name
      if (name) {
        console.log(`Hey ${name}!` + "\n" + "Het spel gaat beginnen!")
        playGame(name);
      } else {
        console.log(`Even opnieuw hoor.`)
        guessTheNumber();
      }
    }
  )
}

const playGame = (name) => {
  setRange(name);
}

const setRange = (name) => {
  readline.question(`Voer het laagste getal in: (groter dan 0): `, (playerNumMin) => {
    if(playerNumMin >= 0) {
      readline.question(`Voer het hoogste getal in. Dit getal moet groter dan ${playerNumMin} zijn: `, (playerNumMax) => {
        if(playerNumMax > playerNumMin) {
          let tries = 4;
          guessNum(name, playerNumMin, playerNumMax, tries);
        } else {
          console.log(`Het getal moet wel groter dan ${playerNumMin} zijn. Opnieuw!`);
          playGame(name);
        }
      })
    } else {
      console.log(`Een getal groter dan 0 graag!`);
      playGame(name);
    }
  })
}

const guessNum = (name, playerNumMin, playerNumMax, tries) => {

  readline.question(`Kies een getal tussen ${playerNumMin} en ${playerNumMax}: `, (playerNum) => {
    console.log(name, playerNumMin, playerNumMax, tries);
    if(tries > 0) {
      if (playerNum >= playerNumMin && playerNum <= playerNumMax) {
        let randomNum = parseInt(playerNumMin, 10) + (Math.round(Math.random() * playerNumMax));
        if (playerNum == randomNum) {
          console.log(`${name}, je hebt goed gegokt en bent een winnaar! Het spel is nu klaar.`);
          readline.close();
        } else {
          console.log(`Helaas, ${name}! Het winnende getal was ${randomNum}. Je mag het nog ${tries} keer proberen.`);
          tries--;
          guessNum(name, playerNumMin, playerNumMax, tries);
        }
      } else {
        console.log(`Ongeldig getal. Het getal was niet tussen ${playerNumMin} en ${playerNumMax}. Dit kost je helaas wel een beurt `);
        tries--;
        guessNum(name, playerNumMin, playerNumMax, tries);
      }
    } else {
      console.log(`Je hebt helaas geen pogingen meer! Het spel is nu klaar.`);
      readline.close();
    }
  })
}

guessTheNumber();
