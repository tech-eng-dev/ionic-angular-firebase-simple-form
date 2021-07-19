import Mexp from 'math-expression-evaluator';

export const isValidPolynomial = (exp: string) => {
  try {
    const value = Mexp.eval(exp);
    if (typeof value === 'number') {
      return true;
    } else  {
      return false;
    }
  } catch (error) {
    return false;
  }
};

export const isAlphaNumeric = (exp: string) => {
  const regExp = /^[A-Za-z0-9]+$/;
  return exp.match(regExp);
};

export const findDuplicates = (arr: string[]) => {
  return arr.filter((item, index) => arr.indexOf(item) !== index);
};
