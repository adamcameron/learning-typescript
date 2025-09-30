export interface MyClassExpressionInterface {
  getValue(): string
}

export class ClassFactory {
  static getClass(): new (value: string) => MyClassExpressionInterface {
    return class {
      constructor(private value: string) {}

      getValue(): string {
        return this.value
      }
    }
  }
}

export class ObjectFactory {
  static getObject(value: string): MyClassExpressionInterface {
    return new (class {
      constructor(private value: string) {}

      getValue(): string {
        return this.value
      }
    })(value)
  }
}
