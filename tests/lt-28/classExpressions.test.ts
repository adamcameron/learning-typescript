import {
  ClassFactory,
  ObjectFactory,
  MyClassExpressionInterface,
} from '@/lt-28/classExpressions'
import { describe, it, expect } from 'vitest'

describe('Tests of class expressions', () => {
  it('can be used to create objects', () => {
    const c = ClassFactory.getClass()
    const o = new c('TEST_VALUE')

    expect(o.getValue()).toEqual('TEST_VALUE')
  })

  it('is an instance of... Function..?', () => {
    const c = ClassFactory.getClass()
    expect(c).toBeInstanceOf(Function)
  })

  it('creates objects of some type', () => {
    const c = ClassFactory.getClass()
    const o = new c('TEST_VALUE')

    expect(o).toBeInstanceOf(Object)
    expect(typeof o).toEqual('object')
  })

  it('can be used as a type check', () => {
    const c = ClassFactory.getClass()
    const o: InstanceType<typeof c> = new c('TEST_VALUE')

    expect(typeof o).toEqual('object')
    expect(o).toBeInstanceOf(c)
  })

  it('can be used immediately to create an object', () => {
    const o: MyClassExpressionInterface = ObjectFactory.getObject('TEST_VALUE')

    expect(o.getValue()).toEqual('TEST_VALUE')
  })
})
