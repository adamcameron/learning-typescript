export function throwsError(message: string) {
  throw new Error(message)
}

export class MyError extends Error {}

export function throwsMyError(message: string) {
  throw new MyError(message)
}

export class MyDetailedError extends Error {
  detail: string
  constructor(message: string, detail: string) {
    super(message)
    this.detail = detail
  }
}

export function throwsMyDetailedError(message: string, detail: string) {
  throw new MyDetailedError(message, detail)
}

export function throwsString(s: string) {
  throw s // eslint-disable-line @typescript-eslint/only-throw-error
}

export function throwsSyntaxError(s: string) {
  throw new SyntaxError(s)
}

export function throwsErrorWithCause(
  causeMessage: string,
  errorMessage: string
) {
  throw new Error(errorMessage, { cause: new Error(causeMessage) })
}
