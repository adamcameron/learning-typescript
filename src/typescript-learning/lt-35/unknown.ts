export type WritableValueObject = Record<string, unknown>
export type ValueObject = Readonly<WritableValueObject>

type keyValue = [string, unknown]

export function toValueObject(...kv: keyValue[]): ValueObject {
  const vo: WritableValueObject = kv.reduce(
    (valueObject: WritableValueObject, kv: keyValue): ValueObject => {
      valueObject[kv[0]] = kv[1]
      return valueObject
    },
    {} as WritableValueObject
  )
  return vo
}

export function getValueForKey(vo: ValueObject, key: string): unknown {
  return vo[key]
}

export function returnsAsUnknown(o: unknown): unknown {
  return o
}

export class SomeClass {
  someMethod(someValue: unknown): unknown {
    return someValue
  }

  static isValid(value: unknown): value is SomeClass {
    return value instanceof SomeClass
  }
}

export class SomeError extends Error {}

export function throwSomeError(message: string): never {
  throw new SomeError(message)
}
