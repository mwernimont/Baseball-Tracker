import { test } from "node:test"
import assert from "node:assert/strict"
import advanceRunners from "./advanceRunners.js"

test("homerun", () => {
  assert.deepEqual(advanceRunners("homerun", {first: 2, second: null, third: 4}, null, 6), {
    bases: {
      first: null,
      second: null,
      third: null,
    },
    scored: [2,4,6]
  })
})
test("triple", () => {
  assert.deepEqual(advanceRunners("triple", {first: 2, second: null, third: 4}, null, 6), {
    bases: {
      first: null,
      second: null,
      third: 6,
    },
    scored: [2,4]
  })
})
test("double", () => {
  assert.deepEqual(advanceRunners("double", {first: 2, second: null, third: 4}, {first: "scored"}, 6), {
    bases: {
      first: null,
      second: 6,
      third: null,
    },
    scored: [4,2]
  })
})
test("double stop at third", () => {
  assert.deepEqual(advanceRunners("double", {first: 2, second: null, third: 4}, {first: "third"}, 6), {
    bases: {
      first: null,
      second: 6,
      third: 2,
    },
    scored: [4]
  })
})