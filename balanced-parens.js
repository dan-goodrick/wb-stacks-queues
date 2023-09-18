import Stack from './src/stack.js';

function areParensBalanced(expr) {
  const parens = new Stack();

  for (const char of expr) {
    if (char === '(') {
      parens.push(char);
    } else if (char === ')') {
      if (parens.isEmpty()) {
        return false;
      }

      parens.pop();
    }
  }

  return parens.isEmpty();
}

const result = areParensBalanced('((3+4)-(1+2))/(1+1)');
console.log('is ((3+4)-(1+2))/(1+1) balanced?', result); // true
