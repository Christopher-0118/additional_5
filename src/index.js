module.exports = function check(str, bracketsConfig) {
  let lengthStr = str.length;
  let lengthBrConf = bracketsConfig.length;
  let stack = [];
  stack.push(str[0]);
  
  for (let i = 1; i < lengthStr; i++) {
    for (let j = 0; j < lengthBrConf; j++) {
      let openingBracket = bracketsConfig[j][0];
      let closingBracket = bracketsConfig[j][1];
      let lengthStack = stack.length;
      let lastElement = stack[lengthStack - 1];

      //___it's a closing bracket  and  the last element in this stack is correct opening bracket
      if (str[i] === closingBracket && lastElement === openingBracket) { // 
        stack.pop();
      // ________it's an opening bracket and it isn't the last in this string
      } else if (str[i] === openingBracket && i < lengthStr - 1) { 
        stack.push(str[i]);  
      // _________it's closing bracket, but it isn't correct bracket______________it's an opening bracket, but it is the last in this string
      } else if ((str[i] === closingBracket && lastElement !== openingBracket) || (str[i] === openingBracket && i === lengthStr - 1)) {
        return false;
      } 
    }
  }
  return true;
}
