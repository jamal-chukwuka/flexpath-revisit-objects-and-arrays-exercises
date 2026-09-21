/**
 * Return the index of the FIRST reading greater than threshold.
 * Return -1 when no reading exceeds threshold.
 * Do not mutate readings.
 */
export default function firstReadingAbove(readings, threshold) {
  // Write your solution here.
  indexofFirst = readings.findIndex((book) => book > threshold);

  if(indexofFirst < 0 ){
    return -1
  } else {
    return indexofFirst;
  }

  
}
