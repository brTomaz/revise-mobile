export default function sleep(duration = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration)
  })
}
