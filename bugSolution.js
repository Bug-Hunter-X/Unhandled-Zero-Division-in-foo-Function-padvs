function foo(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  } else if (a === 0) {
    return 0;
  }
  return a / b; 
}