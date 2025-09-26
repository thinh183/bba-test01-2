// let playerName = "Mario";
// let currentLives = 3;
// const LEVEL_1_COINS = 25;
// const LEVEL_2_COINS = 30;
// const LEVEL_3_COINS = 45;
// const totalCoins = LEVEL_1_COINS + LEVEL_2_COINS + LEVEL_3_COINS;
// const numberOfLevels = 3;
// const averageCoins = totalCoins / numberOfLevels;
// const remainderCoins = totalCoins % 3;
// console.log(`Giá trị trung bình coin: ${averageCoins}`);
// console.log(`Số coin dư khi chia cho 3: ${remainderCoins}`);
//2
let powerUp = 'Mushroom';
let effect = '';
if (powerUp === 'Mushroom') {
    effect = 'Mario becomes Super!';
} else if (powerUp === 'flower') {
    effect = "Mario can shoot fireballs!";
} else if (powerUp === 'star') {
    effect = "Mario is invincible!";
}
console.log(effect);
