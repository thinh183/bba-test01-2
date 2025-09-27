// bài 1
function createCharacters() {
    const characters = [
        { name: 'Mario', level: 10, health: 400 },
        { name: 'Luigi', level: 15, health: 800 },
        { name: 'Peach', level: 20, health: 1200 },
    ];
    console.log("Characters ban đầu:", characters);
    const charactersPowerUp = characters.map(character => {
        return {
            name: character.name.toUpperCase(),
            level: character.level * 2,
            health: character.health * 3
        };
    });
    console.log("Characters sau PowerUp:", charactersPowerUp);
    const possibleWinners = charactersPowerUp.filter(character => character.health > 1000);


    console.log("Những người có health > 1000:", possibleWinners);
}
createCharacters();
//2
function printLeaderboard() {
  const players = [
    { name: 'Mario', score: 1000 },
    { name: 'Luigi', score: 900 },
    { name: 'Peach', score: 850 },
    { name: 'Yoshi', score: 800 },
    { name: 'Thịnh', score: 100 }
  ];
  players.sort((a, b) => b.score - a.score);
  for (let i = 0; i < players.length; i++) {
    let medal = '';
    if (i === 0) medal = '🥇';
    else if (i === 1) medal = '🥈';
    else if (i === 2) medal = '🥉';
    console.log(`${i + 1}. ${medal} ${players[i].name} – ${players[i].score} pts`);
  }
}
printLeaderboard();

