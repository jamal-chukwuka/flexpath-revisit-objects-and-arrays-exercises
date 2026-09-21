/**
 * TASK: Return a NEW array containing every order whose status equals status.
 *
 * STARTING POINT:
 * - `orders` is the array you are given. The test runner supplies it.
 * - `status` is the value used to decide which orders belong in the result.
 * - Do NOT create your own starter array or hard-code orders.
 *
 * CONSTRAINTS:
 * - The returned array must be a different array from `orders`.
 * - Do not mutate `orders`.
 * - Keep the function name, parameters, and export unchanged.
 * - Choose the array operation yourself.
 */
function ordersWithStatus(orders, status) {
  // Write your solution here.
  return orders.filter((order) => order.status === status);
}
export default ordersWithStatus;
