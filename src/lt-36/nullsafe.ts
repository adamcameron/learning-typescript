export class Holder {
  public doer: Doer | null = null

  public static chanceYerArm(): Holder | null {
    // flip a coin: heads they get a new Holder
    return Math.random() > 0.5 ? new Holder() : null
  }
}

export class Doer {
  do(thing: string): string {
    return `[${thing}] done`
  }
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export type FunctionLibraryObject = Record<string, Function>

export type VO = Record<string, any> // eslint-disable-line @typescript-eslint/no-explicit-any
