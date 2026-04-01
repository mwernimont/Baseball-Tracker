#!/usr/bin/env node

const collectRunners = (baseState) => {
  return Object.entries(baseState)
    .filter(([key, value]) => value !== null)
    .map(([key, value]) => value)
}

const advanceRunners = (playType, baseState, playContext, batterId) => {
  const result = {
    bases: {
      first: null,
      second: null,
      third: null,
    },
    scored: []
  }

  if (playType === "homerun") {
    result.scored.push(...collectRunners(baseState), batterId)
  }

  if(playType === "triple"){
    result.scored.push(...collectRunners(baseState))
    result.bases.third = batterId;
  }

  if(playType === "double"){
    // Check current base state
    Object.entries(baseState).filter(([key, value]) => value !== null).forEach(([key, value]) => {
       if(key === "second"){
        result.scored.push(value)
       }
       if(key === "third"){
        result.scored.push(value)
       }
    })
    //Check for context & update
    if(playContext && playContext.first){
        if(playContext.first === "scored"){
            result.scored.push(baseState.first)
        } else {
            result.bases[playContext.first] = baseState.first
        }
    }
    //Place batter on second
    result.bases.second = batterId;
  }

  return result
}

advanceRunners("double", {first: 3, second: null, third: 4}, {first: "scored"}, 7)

export default advanceRunners;