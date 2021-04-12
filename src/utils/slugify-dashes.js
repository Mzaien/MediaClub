/**
 * This module is used in both React and Node so it should use CommonJS to avoid Node support issues
 */
module.exports = function (text = "") {
  return text.toLowerCase().split(" ").join("-")
}
