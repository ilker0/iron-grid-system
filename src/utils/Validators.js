const PROPS_VALUES = {
  TAGS: ['div', 'section', 'aside', 'nav', 'header', 'main', 'footer'],
  FLEX: ['start', 'end', 'center', 'between', 'around'],
  BREAKPOINTS: ['sm', 'md', 'lg', 'xl'],
};

export const ArrayValidator = function (val, key) {
  return PROPS_VALUES[key].includes(val);
};

export const ObjectOrNumberValidator = function (val, key) {
  if (typeof val !== 'number' || typeof val !== 'object') {
    return false;
  }

  if (typeof val === 'object') {
    let result = true;

    Object.keys(val).forEach((item) => {
      if (!PROPS_VALUES[key].includes(item)) {
        result = false;
      }
    });

    return result;
  }
};
