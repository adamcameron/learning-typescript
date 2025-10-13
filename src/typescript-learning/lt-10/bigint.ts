export type numeric = number | bigint

export function add(x: numeric, y: numeric): numeric {
  if (typeof x === 'number' && typeof y === 'number') {
    return x + y
  }
  if (typeof x === 'bigint' && typeof y === 'bigint') {
    return x + y
  }

  return BigInt(x) + BigInt(y)
}
