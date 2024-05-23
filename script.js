function isPalindrome(string) {
    let minusculo = string.toLowerCase().replace();
    let texto = string.length;
  
    for (i = 0; i < texto; i++) {
      if (minusculo[i] !== minusculo[texto - 1 - i]) {
        return false;
      }
      return true;
    }
  }
  isPalindrome("Radar");
  
  function arrayMaxMin(array) {
    let max = 0;
    let min = 0;
  
    for (let i = 0; i < array.length; i++) {
      let current = array[i];
  
      if (current > array[max]) {
        max = i;
      }
      if (current < array[min]) {
        min = i;
      }
      return (arrayMaxMin(max, min));
    }
  }
  
  console.log(arrayMaxMin[(3, 5, 6, 2, 1, 4)]);