type interpolateParamItem = string | number;
const templateMatcher: RegExp = /{([^{}]*)}/g;

const interpolateString = function (expr: string, params?: interpolateParamItem[]): string {
  let result: string = expr;

  if (params) {
    result = expr.replace(templateMatcher, (_: string, b: string) => {
      const idx = +b;
      if (params[idx] !== undefined) {
        return params[idx].toString();
      }

      return '';
    });
  }

  return result;
};

export { interpolateString };
