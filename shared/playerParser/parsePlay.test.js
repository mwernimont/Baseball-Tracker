test("6-3 groundout", () => {
  expect(fieldingOutcome("63")).toEqual({
    putout: 3,
    assists: [6],
    isOut: true,
    strikeout: false
  })
})