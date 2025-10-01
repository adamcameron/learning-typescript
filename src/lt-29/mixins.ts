export class Name {
  constructor(
    public firstName: string,
    public lastName: string
  ) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`
  }
}

type Constructor = new (...args: any[]) => {} // eslint-disable-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-empty-object-type

function applyFlattening<TBase extends Constructor>(Base: TBase) {
  return class Flattener extends Base {
    flatten(): string {
      return Object.entries(this).reduce(
        (
          flattened: string,
          [_ /* eslint-disable-line @typescript-eslint/no-unused-vars*/, value]
        ): string => {
          return flattened + String(value)
        },
        ''
      )
    }
  }
}
export const FlattenableName = applyFlattening(Name)

type NameConstructor = new (
  ...args: any[] // eslint-disable-line @typescript-eslint/no-explicit-any
) => {
  firstName: string
  lastName: string
}

function applyNameFlattening<TBase extends NameConstructor>(Base: TBase) {
  return class NameFlattener extends Base {
    flatten(): string {
      return this.firstName + this.lastName
    }
  }
}
export const FlattenableDualName = applyNameFlattening(Name)

export class ShortName {
  constructor(public firstName: string) {}
}
//export const FlattenableShortName = applyNameFlattening(ShortName) // Argument of type 'typeof ShortName' is not assignable to parameter of type 'NameConstructor'.

function applyArrayifier<TBase extends Constructor>(Base: TBase) {
  return class Arrayifier extends Base {
    arrayify(): string[] {
      return Object.entries(this).reduce(
        (
          arrayified: string[],
          [_ /* eslint-disable-line @typescript-eslint/no-unused-vars*/, value]
        ): string[] => {
          return arrayified.concat(String(value).split(''))
        },
        []
      )
    }
  }
}

export const ArrayableFlattenableName = applyArrayifier(FlattenableName)
