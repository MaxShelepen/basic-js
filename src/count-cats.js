module.exports = function countCats(matrix) {
  let counter = 0;
    [].concat(...matrix).map(el => el === '^^' ? counter += 1 : null);
  return counter;

};