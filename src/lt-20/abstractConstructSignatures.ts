export abstract class Greeting {
  abstract greet(): string
}

export class MaoriGreeting extends Greeting {
  greet(): string {
    return 'Kia ora!'
  }
}

export class IrishGreeting extends Greeting {
  greet(): string {
    return 'Dia duit ann!'
  }
}

export class PolishGreeting {
  greet(): string {
    return 'Cześć!'
  }
}

export class Greeter {
  static greet(ctor: new () => Greeting) {
    return new ctor()
  }
}
