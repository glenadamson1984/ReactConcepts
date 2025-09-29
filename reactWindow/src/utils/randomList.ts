export const words = [
  "Apple",
  "Banana",
  "Cat",
  "Dog",
  "Elephant",
  "Fox",
  "Guitar",
  "Hat",
  "Ice Cream",
  "Jelly",
  "Kite",
  "Lion",
  "Monkey",
  "Notebook",
  "Orange",
  "Pizza",
  "Queen",
  "Robot",
  "Sun",
  "Tiger",
  "Umbrella",
  "Violin",
  "Whale",
  "Xylophone",
  "Yacht",
  "Zebra",
];

export function generateRandomList(count: number): string[] {
  return Array.from({ length: count }, () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  });
}
