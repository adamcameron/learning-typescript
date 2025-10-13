export class DefiniteAssignmentAssertionExample {
  private s!: string // without ! we get "Property 's' has no initializer and is not definitely assigned in the constructor"

  setStringValue(v: string) {
    this.s = v
  }

  double() {
    return this.s + this.s
  }
}

export class NonNullAssertionExample {
  private s: string | null = null
  private a: string[] = []

  setStringValue(v: string) {
    this.s = v
  }

  double() {
    return this.s! + this.s // without !, we get " Object is possibly 'null'"
  }

  setArrayValue(a: string[]) {
    this.a = a
  }

  findInArray(s: string): string {
    return this.a.find((el) => el === s)! // without the ! we'd get "Type 'string | undefined' is not assignable to type 'string'"
  }
}
