interface Logger {
  log(message: string): void
}

const defaultLogger: Logger = console

export class Person {
  @logCalls(defaultLogger)
  accessor firstName: string

  @logCalls(defaultLogger)
  accessor lastName: string

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`
  }
}

function logCalls(logger: Logger = defaultLogger) {
  return function <This, Return>(
    target: ClassAccessorDecoratorTarget<This, Return>,
    context: ClassAccessorDecoratorContext<This, Return>
  ) {
    const result: ClassAccessorDecoratorResult<This, Return> = {
      get(this: This) {
        logger.log(`[${String(context.name)}] getter called`)
        return target.get.call(this)
      },
      set(this: This, value) {
        logger.log(
          `[${String(context.name)}] setter called with value [${String(value)}]`
        )
        target.set.call(this, value)
      },
    }

    return result
  }
}
