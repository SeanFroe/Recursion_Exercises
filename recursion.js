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

const isPalindrome = (str, idx = 0) => {
  let leftIdx = idx;
  let rightIdx = str.length - idx - 1;
  if (leftIdx >= rightIdx) return true;
  if (str[leftIdx] !== str[rightIdx]) return false;
  return isPalindrome(str, idx + 1);
};
/** findIndex: return the index of val in arr (or -1 if val is not present). */
const findIndex = (arr, val, i = 0) => {
  if (i === arr.length) return -1;
  if (arr[i] === val) return i;
  return findIndex(arr, val, i + 1);
};
/** revString: return a copy of a string, but in reverse. */
const revString = (str, i = 0, newStr = "") => {
  if (newStr.length === str.length) return newStr;
  newStr += str[str.length - 1 - i];
  return revString(str, i + 1, newStr);
};

/** gatherStrings: given an object, return an array of all of the string values. */
const gatherStrings = (obj) => {
  const stringArr = [];
  for (const key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object")
      stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
};
/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

const binarySearch = (arr, val, left = 0, right = arr.length) => {
  if (left > right) {
    return -1;
  }
  let middle = Math.floor((right + left) / 2);
  if (arr[middle] === val) {
    return middle;
  }
  if (arr[middle] > val) {
    return binarySearch(arr, val, left, middle - 1);
  }
  return binarySearch(arr, val, middle + 1, right);
};

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
