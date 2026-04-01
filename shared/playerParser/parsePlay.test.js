import { test } from "node:test"
import assert from "node:assert/strict"
import fieldingOutcome from "./parsePlay.js"

test("6-3 groundout", () => {
  assert.deepEqual(fieldingOutcome("63"), {
    putout: 3,
    assists: [6],
    strikeout: false
  })
})
test("K strikeout", () => {
  assert.deepEqual(fieldingOutcome("K"), {
    putout: 2,
    assists: [],
    strikeout: true
  })
})
test("Unassisted putout", () => {
  assert.deepEqual(fieldingOutcome("3"), {
    putout: 3,
    assists: [],
    strikeout: false
  })
})
test("6-4-3 double play", () => {
  assert.deepEqual(fieldingOutcome("643"), {
    putout: 3,
    assists: [6,4],
    strikeout: false
  })
})