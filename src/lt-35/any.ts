export type WritableValueObject = Record<string, any> // eslint-disable-line @typescript-eslint/no-explicit-any
export type ValueObject = Readonly<WritableValueObject>

type keyValue = [string, any] // eslint-disable-line @typescript-eslint/no-explicit-any

export function toValueObject(...kv: keyValue[]): ValueObject {
  const vo: WritableValueObject = kv.reduce(
    (valueObject: WritableValueObject, kv: keyValue): ValueObject => {
      valueObject[kv[0]] = kv[1] // eslint-disable-line @typescript-eslint/no-unsafe-assignment
      return valueObject
    },
    {} as WritableValueObject
  )
  return vo
}
