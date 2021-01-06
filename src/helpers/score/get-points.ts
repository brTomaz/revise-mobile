export default function getPoints(tries: number) {
  switch (tries) {
    case 1:
      return 5
    case 2:
      return 4
    case 3:
      return 3
    case 4:
      return 2
    default:
      return 1
  }
}
