export function create<T>(c: { new (): T }): T {
  return new c()
}

export function createSomeObject<I extends SomeInterface>(c: new () => I): I {
  return new c()
}

/*
export function createSomeObjectUsingInterface(
  c: SomeInterface
): SomeInterface {
  return new c() // This expression is not constructable. Type 'SomeInterface' has no construct signatures.
}
*/
export class C {}

export interface SomeInterface {} // eslint-disable-line @typescript-eslint/no-empty-object-type
export class SomeClass implements SomeInterface {}
