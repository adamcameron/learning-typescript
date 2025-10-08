export interface OptionallyTranslatedNumber {
  value: number
  en?: string
  mi?: string
  ie?: string
}

export type RequiredTranslatedNumber = Required<OptionallyTranslatedNumber>

export function makesNumber(
  values: Required<OptionallyTranslatedNumber>
): RequiredTranslatedNumber {
  return { ...values }
}
