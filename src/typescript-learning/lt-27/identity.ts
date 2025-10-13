export function identity<T>(arg: T): T {
  return arg
}

export interface I {} // eslint-disable-line @typescript-eslint/no-empty-object-type

export class C1 implements I {}

export class C2 implements I {}
