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

      if (str[i] === closingBracket && lastElement === openingBracket) {
        stack.pop();
      } else if (str[i] === openingBracket || (str[i] === openingBracket && i < lengthStr - 1)) {
        stack.push(str[i]);
      } else if ((str[i] === closingBracket && lastElement !== openingBracket) || (str[i] === openingBracket && i === lengthStr - 1)) {
        return false;
      }
    }
  }
  return true;
}
