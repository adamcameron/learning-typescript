export function takesAndReturnsStringArray(a: Array<string>): string[] {
  return [...a].reverse()
}

export function arrayToReadonly(a: string[]): readonly string[] {
  return a
}
