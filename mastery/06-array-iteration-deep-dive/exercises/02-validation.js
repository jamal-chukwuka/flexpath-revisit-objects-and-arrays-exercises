/**
 * Return:
 * {
 *   hasBlocked: boolean,   // true if ANY task has status "blocked"
 *   allAssigned: boolean   // true if EVERY task has a non-empty assignee string
 * }
 *
 * Do not mutate tasks.
 */
export default function taskValidation(tasks) {
    return tasks.forin((task) => task.hasBlocked == "blocked" && task.allAssigned != "");
}
