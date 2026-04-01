const fieldingOutcome = (string) => {
  const play = {
    putout: null,
    assists: [],
    strikeout: false,
  }

  let chars = string.split("")

  if (chars.includes("K")) {
  play.strikeout = true
  play.putout = 2
} else if (chars.length > 0) {
  play.putout = parseInt(chars[chars.length - 1])
  play.assists = chars.slice(0, -1).map((c) => parseInt(c))
}

  return play
}

export default fieldingOutcome;