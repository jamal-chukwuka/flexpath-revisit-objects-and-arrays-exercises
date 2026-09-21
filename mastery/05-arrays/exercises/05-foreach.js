/**
 * TASK: Call visit(item) exactly once for every item, in order.
 *
 * STARTING POINT:
 * - `items` is the array you are given. The test runner supplies it.
 * - `visit` is a function you are given; call it with each item.
 * - Do NOT create your own starter array or hard-code items.
 *
 * CONSTRAINTS:
 * - This exercise is about performing a side effect for each element.
 * - Do not build or return a transformed collection.
 * - Keep the function name, parameters, and export unchanged.
 * - Choose the iteration approach yourself.
 */
function visitEach(items, visit) {
    return items.forEach((item) => visit(item));
}
export default visitEach;
