module.exports = function check(str, bracketsConfig) {
  let lengthStr = str.length;
  let lengthBrConf = bracketsConfig.length;
  let stack = [];
  
  for (let i = 0; i < lengthStr; i++) {
    for (let j = 0; j < lengthBrConf; j++) {
      let openingBracket = bracketsConfig[j][0];
      let closingBracket = bracketsConfig[j][1];
      let lengthStack = stack.length;

      if (str[i] === openingBracket && i !== lengthStr - 1) {
        stack.push(str[i]);
      } else if (str[i] === closingBracket && stack[lengthStack - 1] === openingBracket) { // 
        stack.pop();
      } else if (str[i] === closingBracket && (lengthStack === 0 || stack[lengthStack - 1] !== openingBracket)){
        return false;
      }
    }
  }
  if (stack.length > 0) {return false}
  return true;
}
