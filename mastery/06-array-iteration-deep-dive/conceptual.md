# Cold Conceptual Retrieval — Array Iteration Deep Dive

Answer without notes or documentation. Short, precise answers are better than essays.

1. Why is a traditional indexed `for` loop often a weaker default for array iteration than a purpose-built array method? Give two concrete failure/readability reasons.

2. Explain the difference between `for...of` and `for...in`. What does each iterate over, and which is normally appropriate for array values?

3. What do `break` and `continue` do? Why can neither be used to stop a `forEach` early in the same way?

4. Predict the result and explain why:
   ```js
   const values = [2, 4, 6];
   const result = values.forEach(n => n * 2);
   ```
   What is `result`? What happened to `values`?

5. Distinguish `some` from `every`. Include what each returns and when each can stop examining the array.

6. Explain the accumulator in `reduce`. What are the roles of the accumulator, current value, and initial value?

7. When can omitting an initial value from `reduce` create a problem? Describe the empty-array case.

8. Distinguish `find`, `findIndex`, and `filter` by return value and number of matches represented.

9. You only need to know whether an array contains the primitive value `"admin"`. Why might `includes` communicate intent better than `find`?

10. What does `map` promise about the relationship between input elements and output elements? Contrast that with `filter`.

11. What does it mean for an array to be sparse? Why should you be cautious about assuming every iteration mechanism handles empty slots identically?

12. A callback returns a value inside `forEach`. Where does that returned value go? Contrast this with the role of callback return values in `map`, `filter`, and `some`.

13. Choose the most expressive tool and justify it:
    - total all invoice amounts;
    - determine whether any user is suspended;
    - determine whether all submissions are complete;
    - retrieve the first overdue invoice;
    - retrieve the position of the first overdue invoice;
    - create an array containing only overdue invoices;
    - create an array of invoice IDs.

14. When would a loop with `break` or `continue` be clearer than chaining array methods? Give one realistic example.

15. Explain `reduce` versus `reduceRight`. When would direction change the result?