import { MockInstance } from 'vitest'

export const toHaveLogEntry = function (
  this: { isNot: boolean },
  received: MockInstance,
  expected: RegExp
) {
  const receivedEntries = received.mock.calls.map(
    (entries: string[]) => entries[0]
  )

  return {
    message: () =>
      `Expected ${JSON.stringify(receivedEntries)} ${this.isNot ? 'not ' : ''}to contain ${String(expected)}`,
    pass: matchSingle(receivedEntries, expected),
  }
}

export const toHaveLogSequence = function (
  this: { isNot: boolean },
  received: MockInstance,
  expected: RegExp[]
) {
  const receivedEntries = received.mock.calls.map(
    (entries: string[]) => entries[0]
  )

  const logLines: string = JSON.stringify(receivedEntries)
  const notText: string = this.isNot ? 'not ' : ''
  const regexes: string = JSON.stringify(
    expected.map((regexp: RegExp) => String(regexp))
  )

  return {
    message: () =>
      `Expected ${logLines} to ${notText}contain each of ${regexes} in order`,
    pass: expected.every((expectedEntry: RegExp) =>
      matchSingle(receivedEntries, expectedEntry)
    ),
  }
}

const matchSingle = function (entries: string[], expected: RegExp): boolean {
  const working: string[] = [...entries]
  while (working.length > 0) {
    const logEntry: string = working.shift() as string
    if (logEntry.match(expected)) {
      return true
    }
  }
  return false
}
