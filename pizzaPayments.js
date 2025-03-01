const MICHAELS_SHARE = 2 / 3
const MICHAELS_MINIMUM = 5
const KATES_MAXIMUM = 10

const roundToCents = value => Math.round(value * 100) / 100

const michaelsTotal = costs => {
  if (costs < MICHAELS_MINIMUM) return costs
  return Math.max(costs - KATES_MAXIMUM, costs * MICHAELS_SHARE )
}

const michaelPays = costs => roundToCents(michaelsTotal(costs))