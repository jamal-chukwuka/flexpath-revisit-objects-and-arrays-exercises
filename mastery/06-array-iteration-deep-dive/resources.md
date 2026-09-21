# Targeted Remediation — Array Iteration Deep Dive

**Do not use before the cold attempt is committed and pushed.** This is a routing table, not a reading list. Review only the resource attached to evidence of a specific weakness.

All links open in a new tab.

## iteration:control-flow
Use for conceptual Q1–3 or Exercise 6 misses.
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of" target="_blank" rel="noopener noreferrer">MDN — for...of</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in" target="_blank" rel="noopener noreferrer">MDN — for...in</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break" target="_blank" rel="noopener noreferrer">MDN — break</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue" target="_blank" rel="noopener noreferrer">MDN — continue</a>

## callback:return-semantics
Use for Q4 or Q12 misses.
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach" target="_blank" rel="noopener noreferrer">MDN — forEach()</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map" target="_blank" rel="noopener noreferrer">MDN — map()</a>

## predicate:some-every
Use for Q5 or Exercise 2 misses.
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some" target="_blank" rel="noopener noreferrer">MDN — some()</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every" target="_blank" rel="noopener noreferrer">MDN — every()</a>
- <a href="https://www.youtube.com/results?search_query=javascript+some+every+array+methods" target="_blank" rel="noopener noreferrer">YouTube — focused explainer search: some/every</a>

## reduction:accumulator
Use for Q6–7 or Exercise 3 misses.
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce" target="_blank" rel="noopener noreferrer">MDN — reduce()</a>
- <a href="https://www.youtube.com/results?search_query=javascript+reduce+accumulator+initial+value" target="_blank" rel="noopener noreferrer">YouTube — focused explainer search: accumulator + initial value</a>

## reduction:direction
Use for Q15 misses.
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight" target="_blank" rel="noopener noreferrer">MDN — reduceRight()</a>

## search:first-match / search:index
Use for Q8–9 or Exercises 1/4 misses.
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes" target="_blank" rel="noopener noreferrer">MDN — includes()</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find" target="_blank" rel="noopener noreferrer">MDN — find()</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex" target="_blank" rel="noopener noreferrer">MDN — findIndex()</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex" target="_blank" rel="noopener noreferrer">MDN — findLastIndex()</a>
- <a href="https://www.youtube.com/results?search_query=javascript+find+findindex+array+methods" target="_blank" rel="noopener noreferrer">YouTube — focused explainer search: find/findIndex</a>

## selection-transformation:composition
Use for Q10/Q13 or Exercise 5 misses.
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" target="_blank" rel="noopener noreferrer">MDN — filter()</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map" target="_blank" rel="noopener noreferrer">MDN — map()</a>
- <a href="https://www.youtube.com/watch?v=PojpwEbOQJg" target="_blank" rel="noopener noreferrer">Coding2GO — map(), filter(), reduce(), and forEach()</a>

## sparse-array:iteration
Use for Q11 misses.
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays" target="_blank" rel="noopener noreferrer">MDN — sparse arrays</a>

## Evidence interpretation

Do not collapse these results into one percentage.

- **concept correct + code correct** → advance this subskill; schedule later transfer/retention.
- **concept correct + code miss** → execution remediation, then a new implementation context.
- **concept miss + code correct** → conceptual remediation; production evidence remains preserved.
- **both miss** → smallest targeted repair, then a fresh verification problem.
- **immediate repair succeeds** → remediation verified, **not retention**.
- **later different-context success** → transfer evidence.
- **delayed cold success** → retention evidence.

Do not modify an earlier cold attempt to make the history look cleaner. The commit history is part of the evidence.
