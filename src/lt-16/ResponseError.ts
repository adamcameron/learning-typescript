export class ResponseError extends Error {
  constructor(private _response: Response) {
    super()
  }

  get response(): Response {
    return this._response
  }
}
