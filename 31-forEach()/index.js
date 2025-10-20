// forEach() = method used to iterate over the elements of the array & apply a specified  function (callback ) to each element
// array.forEach(callback);

const nums = [1, 2, 3, 4, 5];
const doubles = nums.forEach((element , index , array)=>array[index]=element*9);
nums.forEach(display);

function triple(element, index, array) {
  array[index] = element * 3;
}
function double(element, index, array) {
  array[index] = element * 2;
}
function display(element) {
  console.log(element);
}
