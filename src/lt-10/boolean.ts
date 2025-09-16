export type boolable =
  | string
  | number
  | bigint
  | boolean
  | Boolean // eslint-disable-line @typescript-eslint/no-wrapper-object-types
  | Array<any> // eslint-disable-line @typescript-eslint/no-explicit-any
  | null
  | undefined
  | object
  | symbol

export function isBooleanValue(b1: boolable, b2: boolean): boolean {
  return Boolean(b1) == b2
}
