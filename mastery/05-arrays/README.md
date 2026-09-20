# Section 5 — Arrays Mastery Pilot

This folder pilots the intermediate ThirdStreet mastery format.

## Evidence preservation

Your original cold retrieval remains in `mastery-drill.js`. Do not edit it yet. Commit `a37946e` is the baseline evidence snapshot.

## Workflow

1. Keep `mastery-drill.js` unchanged.
2. Complete `conceptual.md` cold.
3. Complete each file in `exercises/` without docs, AI, or prior answers.
4. Run `node mastery/05-arrays/tests/run-tests.js`.
5. Do not repair failed exercises from the test output.
6. Commit and push the untouched attempt.
7. Failures are mapped to the smallest concept gap and then to targeted remediation.

The tests report the failed contract, not the implementation or answer.

## How to work the coding files

The function parameters are the inputs. **Do not create a second starter array or object unless the prompt explicitly tells you to.** The test runner will create the input data and pass it into your function when you run the pilot.

For each exercise:

1. Open the exercise file and read the comment above the function.
2. Treat the parameters already inside the function signature as the data you have been given.
3. Write your implementation only inside that function. You may create local variables when your own reasoning requires them, but do not replace the supplied function, rename its parameters, change `module.exports`, or add hard-coded test data.
4. Decide for yourself which JavaScript operation or array method satisfies the contract. The instructions intentionally tell you the required behavior, not the implementation.
5. Do not open `tests/run-tests.js`, the solution folder, course material, MDN, Mochi, AI, or earlier answers while completing the cold attempt.
6. Complete all six coding files before running the test command. Do not test each exercise individually during the cold attempt.
7. Run the pilot once using the command below. Treat the resulting PASS/FAIL output as diagnostic evidence, not as permission to repair the code.
8. Whether everything passes or not, commit and push the untouched first attempt before reviewing resources or making corrections.

If a prompt says to mutate, preserve, return, copy, find, filter, transform, or visit something, those words describe the **observable result** your function must produce. You are responsible for choosing how to achieve that result.

## Coding exercises

- `exercises/01-mutation.js` — mutate an existing array deliberately.
- `exercises/02-find.js` — return one matching element.
- `exercises/03-filter.js` — return every matching element.
- `exercises/04-map.js` — transform every element.
- `exercises/05-foreach.js` — perform a side effect once per element.
- `exercises/06-shallow-copy.js` — reason about outer copies and nested references.

## Run the pilot

```bash
node mastery/05-arrays/tests/run-tests.js
```

No extra package is required; the pilot uses Node's built-in `assert` module.

These files are intentionally separable so a later Monaco-based output tool can render the same exercise package rather than replace it.
