export class Holder {
  public doer: Doer | null = null

  public static chanceYerArm(gimme: boolean): Holder | null {
    // flip a coin: heads they get a new Holder
    return gimme ? new Holder() : null
  }
}

export class Doer {
  do(thing: string): string {
    return `[${thing}] done`
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FunctionLibraryObject = Record<string, (...args: any[]) => any>

export type VO = Record<string, any> // eslint-disable-line @typescript-eslint/no-explicit-any
