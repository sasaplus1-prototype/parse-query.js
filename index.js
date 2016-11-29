'use strict';

var toString = Object.prototype.toString;

/**
 * parse query string
 *
 * @param {String} text
 * @throws {TypeError}
 * @return {Object}
 */
function parseQuery(text) {
  var result, params, i, len, key, value;

  if (typeof text !== 'string' && toString.call(text) !== '[object String]') {
    throw new TypeError('text must be a String');
  }

  result = {};
  params = text.split('&');

  for (i = 0, len = params.length; i < len; ++i) {
    if (/=/.exec(params[i]) === null) {
      continue;
    }

    key = RegExp.leftContext;
    value = RegExp.rightContext;

    result[key] || (result[key] = []);
    result[key].push(
      decodeURIComponent(value) || null
    );
  }

  return result;
}

module.exports = parseQuery;
