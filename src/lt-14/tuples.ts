/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-return */
export function returnsStringNumberTupleFromArgs(
  key: any,
  value: any
): [string, number] {
  return [key, value]
}

export function returnsReadonlyTuple(
  key: string,
  value: string
): readonly [string, string] {
  return [key, value]
}

export function returnsThreeElementTuple(
  value: number,
  en: string,
  mi: string
): [number, string, string] {
  return [value, en, mi]
}

export function returnAllArgs(
  value: number,
  en: string,
  ...others: string[]
): [number, string, ...string[]] {
  return [value, en, ...others]
}

export function returnsWithOptionalThirdElement(
  value: number,
  en: string,
  mi?: string
): [number, string, string?] {
  return typeof mi == 'string' ? [value, en, mi] : [value, en]
}

export type TranslationsTuple = [number: number, english: string, maori: string]

export function returnsTupleWithNamedElements(
  value: number,
  en: string,
  mi: string
): TranslationsTuple {
  return [value, en, mi]
}

export type DoubleString = [string, string]
export type DoubleNumber = [number, number]

export function takesTwoStringsOrNumbers(
  pair: DoubleString | DoubleNumber
): [string | number, string | number] {
  return pair
}
