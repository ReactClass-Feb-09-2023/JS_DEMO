/**
 * @param {number} x desc x
 * @param {number} y desc y
 * @param {number} z desc z
 * @returns sum of all args (x+y+z)
 */
const foo = (x, y, z) => {
  if (typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number')
    throw new Error(`${typeof x} received, expecting number`)
  return x + y + z
}

// JS DOCS

// foo('3', 3, 3)

try {
  foo('3', 3, 3)
} catch (error) {
  console.error(error)
  // do something else.
} finally {
  // run common code that runs regardless of what foo does
}
