module.exports = function check(str, bracketsConfig) {
  console.log(str);
  let brackets = new Map();
  let closedBrackets = new Array;
  let stack = new Array();

  bracketsConfig.forEach(element => {
  brackets.set(element[1], element[0]);
  closedBrackets.push(element[1]);
  });

  for (i = 0; i < str.length; i++) {
      console.log('step ' + (i + 1));
      let current = str[i];
      
      console.log(stack[stack.length-1]);
      if (closedBrackets.includes(current) && (stack[stack.length-1] === brackets.get(current)))
      {
        console.log("str_17_running");
        stack.pop();
      }

      // else if (closedBrackets.includes(current)) {
      //     if ((brackets.get(current) !== stack[stack.length-1]) && (brackets.get(current) !== current))
      //     return false;
      // }
       else {
          stack.push(current);
      }
      console.log("step " + (i + 1) + ' ended');
      console.log(); 
  }
  return stack.length === 0;
}
