export const format = (value) => {
  return value
    .toLowerCase() // convert to lowercase
    .replace(/đ+/g, 'd') // replace đ character to d in VietNamese case
    .normalize('NFKD') // split accented characters into their base characters and diacritical marks
    .replace(/[\u0300-\u036f]/g, '') // remove all the accents in unicode https://www.compart.com/en/unicode/block/U+0300, which happen to be all in the \u03xx UNICODE block.
    .trim() // trim leading or trailing whitespace
    .replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
    .replace(/-+/g, ''); // remove consecutive hyphens
};
