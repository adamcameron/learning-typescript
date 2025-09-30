type NullableString = string | null
type NullableNumber = number | null

export class Numeric {
  public asNumeric: NullableNumber = null
  public asString: NullableString = null

  constructor()
  constructor(s: string)
  constructor(n: number)
  constructor(s: string, n: number)
  constructor(p1?: string | number, p2?: number) {
    if (typeof p1 === 'number' && p2 === undefined) {
      this.asNumeric = p1
      return
    }
    this.asString = (p1 as string) || null
    this.asNumeric = p2 || null
  }
}
