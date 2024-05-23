function isPalindrome(string) {
  let minusculo = string.replace(/\s/g, "").toLowerCase();
  let texto = minusculo.length;

  for (i = 0; i < texto; i++) {
    if (minusculo[i] !== minusculo[texto - 1 - i]) {
      return false;
    }
  }
  return true;
}
isPalindrome("A sacada da casa");

function arrayMaxMin(array) {
  let max = array[0];
  let min = array[0];

  for (let i = 0; i < array.length; i++) {
    let current = array[i];

    if (current > max) {
      max = array[i];
    } else if (current < min) {
      min = array[i];
    }
  }
  return [min, max];
}

console.log(arrayMaxMin[3, 5, 6, 2, 1, 4]);
