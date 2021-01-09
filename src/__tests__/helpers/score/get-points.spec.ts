import { getPoints } from '@/helpers'

describe('getPoints', () => {
  it('should return the points according to the number of tries', () => {
    const pointsForOneTry = getPoints(1)
    const pointsForTwoTries = getPoints(2)
    const pointsForThreeTries = getPoints(3)
    const pointsForFourTries = getPoints(4)
    const pointsForFiveTries = getPoints(5)

    expect(pointsForOneTry).toBe(5)
    expect(pointsForTwoTries).toBe(4)
    expect(pointsForThreeTries).toBe(3)
    expect(pointsForFourTries).toBe(2)
    expect(pointsForFiveTries).toBe(1)
  })

  it('should return 0 if the number of tries passed is outside the accepted range', () => {
    expect(getPoints(0)).toEqual(0)
    expect(getPoints(6)).toEqual(0)
  })
})
