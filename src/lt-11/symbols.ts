export function getNewSymbol(): symbol {
  return Symbol()
}

export function getNewSymbolFor(key: string): symbol {
  return Symbol.for(key)
}

/* eslint-disable @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-explicit-any */
export function callsSymbolConstructor(): any {
  // prettier-ignore
  return new (Symbol as any)() //
}
/* eslint-enable */

export class SomeClass {
  private stringName: string = 'StringNameOfClass';

  [Symbol.toStringTag] = this.stringName

  toString() {
    return 'StringRepresentationOfObject'
  }

  [Symbol.toPrimitive](hint: string) {
    if (hint === 'number') {
      return 42
    }
    if (hint === 'string') {
      return 'forty-two'
    }
    return 'default'
  }

  *[Symbol.iterator]() {
    let index: number = 0

    while (index < this.stringName.length) {
      yield this.stringName.charAt(index++)
    }
  }
}

export function returnsObjectWithToStringTagSymbol(): SomeClass {
  return new SomeClass()
}

export function returnsObjectWithToPrimitiveSymbol(): SomeClass {
  return new SomeClass()
}

export function getObjectWithSecretProperties(s1: symbol, s2: symbol) {
  return {
    publicProp: 'public value',
    [s1]: () => `first secret value (${s1.description})`,
    [s2]: () => `second secret value (${s2.description})`,
  }
}

export function returnsObjectWithIteratorSymbol(): SomeClass {
  return new SomeClass()
}
