import {
  FlattenableName,
  FlattenableDualName,
  ArrayableFlattenableName,
} from '@/typescript-learning/lt-29/mixins'
import { describe, expect, it } from 'vitest'

describe('Tests of mixins', () => {
  it('can use a mixin to add behavior', () => {
    const flattenableName: InstanceType<typeof FlattenableName> =
      new FlattenableName('Zachary', 'Lynch')
    expect(flattenableName.fullName).toEqual('Zachary Lynch')

    const flattenedName: string = flattenableName.flatten()

    expect(flattenedName).toEqual('ZacharyLynch')
  })

  it('can use more tuned constructor signature', () => {
    const flattenableName: InstanceType<typeof FlattenableDualName> =
      new FlattenableDualName('Joe', 'Lynch')
    expect(flattenableName.fullName).toEqual('Joe Lynch')

    const flattenedName: string = flattenableName.flatten()

    expect(flattenedName).toEqual('JoeLynch')
  })

  it('can apply multiple mixins', () => {
    const transformableName: InstanceType<typeof ArrayableFlattenableName> =
      new ArrayableFlattenableName('Zachary', 'Lynch')
    expect(transformableName.fullName).toEqual('Zachary Lynch')

    const flattenedName: string = transformableName.flatten()
    expect(flattenedName).toEqual('ZacharyLynch')

    const arrayifiedName: string[] = transformableName.arrayify()
    expect(arrayifiedName).toEqual('ZacharyLynch'.split(''))
  })
})
