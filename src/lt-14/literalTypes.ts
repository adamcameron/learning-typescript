export type NzGreeting = "G'day"
export type GeneralGreeting = 'Hi' | 'Hello' | 'Howdy' | NzGreeting

export interface Person {
  firstName: string
  lastName: string
  dob: Date
}

export type SupportedLanguages = 'EN' | 'MI' | 'IE'

export function translate(s: string, language: SupportedLanguages) {
  return `${s} translated into ${language}`
}
