function findPairsDivisibleBy17() {
    let count = 0;
    for (let i = 1; 1 <= 100; i++) {
        for (let j = 1; 1 <= 100; j++) {
            if ((i + j) % 17 === 0) {
                count++;
            }
        }
    }
    return count
}
console.log(`Tổng cộng: ${findPairsDivisibleBy17()} cặp`)