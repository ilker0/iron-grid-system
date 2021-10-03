export const ClassMatch = function (key, item) {
  let classes = '';

  if (typeof item === 'object') {
    Object.keys(item).forEach((obKey) => {
      classes += `${key}-${obKey}-${item[obKey]} `;
    });
  } else {
    classes = `${key}-${item}`;
  }

  return classes;
};
