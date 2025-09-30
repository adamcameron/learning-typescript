import {
  Greeting,
  Greeter,
  MaoriGreeting,
  IrishGreeting,
  PolishGreeting,
} from '@/lt-13/abstractConstructSignatures'
import { describe, it, expect } from 'vitest'

describe('Tests of Abstract Construct Signatures', () => {
  it('does a "structural check" on the Greeting type', () => {
    const maoriGreeting: Greeting = Greeter.greet(MaoriGreeting)
    expect(maoriGreeting.greet()).toEqual('Kia ora!')

    const irishGreeting: Greeting = Greeter.greet(IrishGreeting)
    expect(irishGreeting.greet()).toEqual('Dia duit ann!')

    // this still works because TS's "structural check" is more of a duck-type check
    const polishGreeting: Greeting = Greeter.greet(PolishGreeting) // this doesn't extend Greeting, but doesn't fail!
    expect(polishGreeting.greet()).toEqual('Cześć!')
  })
})
