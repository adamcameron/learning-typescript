export enum MaoriColour {
  Whero = 'red',
  Kākāriki = 'green',
  Kikorangi = 'blue',
  //Karaka = 'orange', //if uncommented, see below
}

export function handlesRgbOnly(value: MaoriColour): string {
  switch (value) {
    case MaoriColour.Whero:
      return 'red'
    case MaoriColour.Kākāriki:
      return 'green'
    case MaoriColour.Kikorangi:
      return 'blue'
    default:
      const exhaustivenessCheck: never = value // Type 'MaoriColour.Karaka' is not assignable to type 'never'
      assertNever(exhaustivenessCheck)
  }
}

function assertNever(value: never): never {
  throw new Error(`Unexpected value: ${JSON.stringify(value)}`)
}
