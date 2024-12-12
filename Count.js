// "Bean counting
// You can get the Nth character, or letter, from a string by writing "string"[N].
// The returned value will be a string containing only one character (for example,
// "b"). The first character has position 0, which causes the last one to be found at
// position string.length - 1. In other words, a two-character string has length
// 2, and its characters have positions 0 and 1.
// Write a function countBs that takes a string as its only argument and returns
// a number that indicates how many uppercase “B” characters there are in the
// string.
// Next, write a function called countChar that behaves like countBs, except
// it takes a second argument that indicates the character that is to be counted
// (rather than counting only uppercase “B” characters). Rewrite countBs to
// make use of this new function."

function CountBs(string) {
    const result = charCount(string, "B");
    console.log(`Input: ${string}`);
    console.log(`Result: ${result}`);
    console.log(`Type of result: ${typeof result}`);
   return result === undefined ? 0 : result;
}

function charCount(string, char) {
    const parts = string.split(char);
    console.log(`Parts: ${parts}`); 
    const count = parts.length - 1;
    // const count = parts.filter(parts => parts !== "").lenght;
    console.log(`Count: ${count}`);
    console.log(`Type of count: ${typeof count}`)
    return count;

}

console.log(CountBs("Mazda"));
console.log(charCount("Mazda", "a"));
console.log(CountBs(""));
console.log(CountBs("BB")); 