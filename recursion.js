/** product: calculate the product of an array of numbers. */

const product = (nums, i = 0) => {
  if (i === nums.length) return 1;
  return nums[i] * product(nums, i + 1);
};

/** longest: return the length of the longest word in an array of words. */

const longest = (words, i = 0, longestSoFar = 0) => {
  if (i === words.length) return longestSoFar;
  longestSoFar = Math.max(words[i].length, longestSoFar);
  return longest(words, i + 1, longestSoFar);
};
/** everyOther: return a string with every other letter. */

const everyOther = (str, i = 0, newStr = "") => {
  if (i >= str.length) return newStr;
  newStr += str[i];

  return everyOther(str, i + 2, newStr);
};
/** isPalindrome: checks whether a string is a palindrome or not. */

/** findIndex: return the index of val in arr (or -1 if val is not present). */

/** revString: return a copy of a string, but in reverse. */

/** gatherStrings: given an object, return an array of all of the string values. */

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

module.exports = {
  product,
  longest,
  everyOther,
  // isPalindrome,
  // findIndex,
  // revString,
  // gatherStrings,
  // binarySearch,
};
