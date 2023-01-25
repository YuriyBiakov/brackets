module.exports = function check(str, bracketsConfig) {
  let brackets = new Map();
  let closedBrackets = new Array;
  let stack = new Array();

  bracketsConfig.forEach(element => {
  brackets.set(element[1], element[0]);
  closedBrackets.push(element[1]);
  });

  function isClosedBr (el) { 
      return (closedBrackets.indexOf(el) > -1)
  }
  console.log(brackets);
  console.log(closedBrackets);

  for (i = 0; i < str.length; i++) {
      console.log('step ' + (i + 1));
      let current = str[i];
      
      console.log(current + ' is closed: ' + isClosedBr(current));
      
      if (isClosedBr(current)) {
          console.log(brackets.get(current));
          console.log("**");
          console.log(stack[stack.length-1]);

          if (brackets.get(current) !== stack.pop())
          return false;
      }
       else {
          stack.push(current);
          console.log('element pushed. Stack: ' + stack);
      }
      console.log("step " + (i + 1) + ' ended');
      console.log(); 
  }
  return stack.length === 0;
}
