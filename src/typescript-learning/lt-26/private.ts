export class SomePrivacy {
  private viaTs: string = 'shhh!'
  #viaJs: string = 'SHHH!!!!'

  spill(): [string, string] {
    return [this.viaTs, this.#viaJs]
  }
}
