export function throwAnError(message: string): never {
  throw new Error(message)
}

export function throwsAnErrorIfItIsBad(message: string): boolean | never {
  if (message.toLowerCase().indexOf('bad') !== -1) {
    throw new Error(message)
  }
  return false
}

export function returnsStringsOrNumbers(
  value: string | number
): string | number {
  if (typeof value === 'string') {
    const valueToReturn = value + ''
    return valueToReturn
  }
  if (typeof value === 'number') {
    const valueToReturn = value * 1
    return valueToReturn
  }
  const valueToReturn = value // hints const valueToReturn: never
  //valueToReturn.push('still') //  Property 'push' does not exist on type 'never'.
  return valueToReturn
}
