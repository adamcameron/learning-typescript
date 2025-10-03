abstract class Shape {}
export class Circle extends Shape {}
export class Square extends Shape {}
export class Triangle extends Shape {}

abstract class Colour {}
export class Red extends Colour {}
export class Green extends Colour {}
export class Blue extends Colour {}

export function asColouredShapeTuple<
  T extends Shape = Circle,
  U extends Colour = Red,
>(p1?: T, p2?: U): [T, U] {
  if (p1 instanceof Colour && p2 === undefined) {
    return [new Circle() as T, p1 as unknown as U]
  }

  p1 = p1 ?? (new Circle() as T)
  p2 = p2 ?? (new Red() as U)

  return [p1, p2]
}
