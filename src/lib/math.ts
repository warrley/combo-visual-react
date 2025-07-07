
// Funções matemáticas para cálculos combinatórios
export const factorial = (n: number): number => {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
};

export const combination = (n: number, r: number): number => {
  if (r > n || r < 0) return 0;
  return factorial(n) / (factorial(r) * factorial(n - r));
};

export const arrangement = (n: number, r: number): number => {
  if (r > n || r < 0) return 0;
  return factorial(n) / factorial(n - r);
};

export const generatePascalTriangle = (rows: number): number[][] => {
  const triangle: number[][] = [];
  for (let i = 0; i <= rows; i++) {
    const row: number[] = [];
    for (let j = 0; j <= i; j++) {
      row.push(combination(i, j));
    }
    triangle.push(row);
  }
  return triangle;
};

export const expandBinomial = (n: number): Array<{coefficient: number, aPower: number, bPower: number}> => {
  const terms = [];
  for (let k = 0; k <= n; k++) {
    terms.push({
      coefficient: combination(n, k),
      aPower: n - k,
      bPower: k
    });
  }
  return terms;
};
