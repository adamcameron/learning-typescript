export function hasLengthViaGeneric<T extends HasLength>(arg: T): T {
  return arg
}

export function hasLengthViaInterface(arg: HasLength): HasLength {
  return arg
}

export function hasLengthViaGenericExplicitKey<T extends { length: number }>(
  arg: T
): T {
  return arg
}

export function hasLengthViaGenericProvidedKey<T, Key extends keyof T>(
  arg: T,
  key: Key
): T {
  void key
  return arg
}

export interface HasLength {
  length: number
}

export class Forty2 implements HasLength {
  public readonly length: number = 42
}

// has same shape as a HasLength but doesn't explicitly implement it
export class Twenty4 {
  public readonly length: number = 24
}
