export function returnsString(s: string): string {
  return s
}

export function fromNumberUsingToString(n: number): string {
  return n.toString()
}

export function fromNumberUsingStringConstructor(n: number): string {
  return String(n)
}

export function fromObjectUsingUnionTypeParameter(
  o:
    | string
    | number
    | boolean
    | bigint
    | object
    | Array<any> // eslint-disable-line -- doesn't like "any"
    | null
    | undefined
    | [string, number, boolean, bigint, object, null, undefined]
    | Function // eslint-disable-line -- doesn't like lack of function signature
    | symbol
) {
  return o?.toString() // eslint-disable-line -- doesn't like that this could toString an object with default handling
}

export function inverse(o: string | number): string | number {
  if (typeof o === 'string') {
    return o.split('').reverse().join('')
  }
  return -o
}
