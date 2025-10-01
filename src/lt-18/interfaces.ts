export interface HasFullName {
  getFullName(): string
}

export interface LooseObject {
  [key: string]: any // eslint-disable-line @typescript-eslint/no-explicit-any
}

export class Name {
  private _firstName: string | null = null
  private _lastName: string | null = null

  get firstName(): string {
    return this._firstName!
  }

  get lastName(): string {
    return this._lastName!
  }

  setFromFullName(name: HasFullName) {
    const fullName: string = name.getFullName()
    const names: string[] = fullName.split(' ')
    this._firstName = names[0]
    this._lastName = names[1]
  }

  setFromNames(names: HasFirstName & HasLastName) {
    this._firstName = names.firstName
    this._lastName = names.lastName
  }
}

export interface HasFirstName {
  firstName: string
}

export interface HasLastName {
  lastName: string
}

export interface Numeric<Type> {
  value: Type
}

export interface Person {
  name: string
}

export interface Person {
  readonly dob: Date
}

export interface PersonWithOptionalDob {
  name: string
  dob?: Date
}

export interface StringFormatter {
  (input: string): string
}

export class FormattablePerson {
  constructor(private name: string) {}

  format(formatter: StringFormatter): string {
    return formatter(this.name)
  }
}

export interface Logger {
  (message: string): string
  level: string
  setLevel(level: string): void
}

export function getLogger(): Logger {
  // prettier-ignore
  const logger = function (message: string) { // parameter type is checked
    return `[${logger.level}] ${message}` // returntype is checked
  }

  // presence of level and setLevel is checked
  logger.level = 'info' // type of value is checked

  // prettier-ignore
  logger.setLevel = (level: string) => { // type of parameter is checked
    logger.level = level
  }
  return logger // return type is inferred from the function implementing everything in the interface
}
