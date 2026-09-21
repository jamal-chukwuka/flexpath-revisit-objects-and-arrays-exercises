/**
 * TASK: Add value to the end of the SAME array and return that array.
 *
 * STARTING POINT:
 * - `items` is the array you are given. The test runner supplies it.
 * - `value` is the value you are given to add.
 * - Do NOT create your own starter array or hard-code test data.
 *
 * CONSTRAINTS:
 * - Modify the existing `items` array rather than replacing it with a new array.
 * - Keep the function name, parameters, and export unchanged.
 * - Choose the JavaScript operation yourself.
 */
function appendValue(items, value) {
  // Write your solution here.
  items.push(value);
  return items;
}
export default appendValue;
