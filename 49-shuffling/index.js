//Fisher - Yates algorithm for shuffling

const cards = ["A", 1, 3, 5, 2, 4, 6, 7, 8, 9, 0, "c", "j", "k", "q"];
shuffle(cards);
console.log(cards);

function shuffle(array) {
  for (let i = array.length-1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    [array[i], array[random]] = [array[random], array[i]];
  }
}
