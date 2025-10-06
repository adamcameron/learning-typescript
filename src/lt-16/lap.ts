let startTime: number | undefined

export const reset = function () {
  startTime = new Date().valueOf()
}

export const lapToConsole = function (message: string) {
  if (startTime === undefined) {
    reset()
  }
  const elapsed = new Date().valueOf() - (startTime ?? 0)
  console.log(`(${elapsed}ms) ${message}`)
}
