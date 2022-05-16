function fibonacci(index: number): number {
  if (index === 0) {
    return 0;
  }

  if (index === 1) {
    return 1;
  }

  return fibonacci(index - 2) + fibonacci(index - 1);
}

export default fibonacci;

console.log(fibonacci(6));
