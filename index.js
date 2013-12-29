
/**
 * Array#filter.
 *
 * @param {Array} arr
 * @param {Function} fn
 * @param {Object=} self
 * @return {Array}
 */

module.exports = function (arr, fn, self) {
  if (arr.filter) return arr.filter(fn);
  if (void 0 === arr || null === arr) throw new TypeError;
  if ('function' != typeof fn) throw new TypeError;
  var ret = [];
  for (var i = 0; i < arr.length; i++) {
    if (!hasOwn.call(arr, i)) continue;
    if (fn.call(self, arr[i], i, arr)) ret.push(arr[i]);
  }
  return ret;
};

var hasOwn = Object.prototype.hasOwnProperty;
