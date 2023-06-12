function distanceFromHqInBlocks(someValue) {
    return Math.abs([42 - someValue])
  }

  function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264
  }

  function distanceTravelledInFeet(start, destination) {
    return 264 * Math.abs(destination - start)
  }

  function calculatesFarePrice (start, destination) {
    const feet = distanceTravelledInFeet(start, destination)
    if (feet < 400) {
        return 0
    }
    else if (feet < 2000) {
        return (feet - 400) * (2 / 100)
    } else if (feet >= 2500) {
        return `cannot travel that far`
    }
    else {
        return 25
    }
}
  