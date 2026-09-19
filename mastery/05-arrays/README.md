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
