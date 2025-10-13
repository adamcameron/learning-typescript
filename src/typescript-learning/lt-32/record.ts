export type numbers = 'one' | 'two' | 'three' | 'four'

export interface MaoriNumber {
  value: number
  name: string
}

export type MaoriNumbers = Record<numbers, MaoriNumber>
