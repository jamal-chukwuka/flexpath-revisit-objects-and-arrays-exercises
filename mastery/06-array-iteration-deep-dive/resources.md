# Targeted Remediation — Array Iteration Deep Dive

**Do not use before the cold attempt.** After you push your first attempt, review only the resources attached to demonstrated misses.

All links open in a new tab.

## Iteration choice, for...of, for...in, break, continue
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of" target="_blank" rel="noopener noreferrer">MDN — for...of</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in" target="_blank" rel="noopener noreferrer">MDN — for...in</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break" target="_blank" rel="noopener noreferrer">MDN — break</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue" target="_blank" rel="noopener noreferrer">MDN — continue</a>

## forEach and callback return semantics
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach" target="_blank" rel="noopener noreferrer">MDN — Array.prototype.forEach()</a>

## some / every
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some" target="_blank" rel="noopener noreferrer">MDN — some()</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every" target="_blank" rel="noopener noreferrer">MDN — every()</a>

## reduce / reduceRight
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce" target="_blank" rel="noopener noreferrer">MDN — reduce()</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight" target="_blank" rel="noopener noreferrer">MDN — reduceRight()</a>

## Searching
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes" target="_blank" rel="noopener noreferrer">MDN — includes()</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find" target="_blank" rel="noopener noreferrer">MDN — find()</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex" target="_blank" rel="noopener noreferrer">MDN — findIndex()</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex" target="_blank" rel="noopener noreferrer">MDN — findLastIndex()</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" target="_blank" rel="noopener noreferrer">MDN — filter()</a>

## Transforming
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map" target="_blank" rel="noopener noreferrer">MDN — map()</a>

## Sparse arrays
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays" target="_blank" rel="noopener noreferrer">MDN — sparse arrays</a>

## Explainer videos
Use only if the corresponding concept is weak after the cold attempt.

- <a href="https://www.youtube.com/watch?v=PojpwEbOQJg" target="_blank" rel="noopener noreferrer">Coding2GO — map(), filter(), reduce(), and forEach()</a>
- <a href="https://www.youtube.com/results?search_query=javascript+some+every+find+findindex+array+methods" target="_blank" rel="noopener noreferrer">YouTube — focused search: some/every/find/findIndex</a>
- <a href="https://www.youtube.com/results?search_query=javascript+reduce+accumulator+initial+value" target="_blank" rel="noopener noreferrer">YouTube — focused search: reduce accumulator and initial value</a>

## Diagnostic map
- Q1–4 / Exercise 6 → iteration choice and control flow
- Q5 / Exercise 2 → some/every
- Q6–7 / Exercise 3 → reduce
- Q8–9 / Exercises 1 & 4 → searching
- Q10 & 13 / Exercise 5 → map/filter and method selection
- Q11 → sparse arrays
- Q12 → callback return semantics
- Q15 → reduceRight/direction
