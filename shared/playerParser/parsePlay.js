const fieldingOutcome = (string) => {
  const play = {
    putout: null,
    assists: [],
    isOut: false,
    strikeout: false,
  }

  let chars = string.split("")

  if (chars.includes("K")) {
    play.strikeout = true
    chars = chars.filter((c) => c !== "K")
  }

  if (chars.length > 0) {
    play.isOut = true
    play.putout = parseInt(chars[chars.length - 1])
    play.assists = chars.slice(0, -1).map((c) => parseInt(c))
  }

  return play
}
fieldingOutcome("643")
fieldingOutcome("K")