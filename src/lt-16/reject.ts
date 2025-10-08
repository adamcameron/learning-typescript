import { lapToConsole } from '../shared/lap'
import { ResponseError } from '../shared/ResponseError'

export async function willBeRejected() {
  lapToConsole('Start')

  const response = fetch('http://localhost:3000/bad').then(
    (response: Response) => {
      lapToConsole('In first then')
      if (response.ok) {
        lapToConsole('Should not get this')
        return
      }
      lapToConsole(`Response status: [${response.status}]`)
      return Promise.reject(new ResponseError(response))
    }
  )
  lapToConsole('After thens')
  return response
}

export async function willBeRejectedWithoutException() {
  lapToConsole('Start')

  const response = fetch('http://localhost:3000/bad').then(
    (response: Response) => {
      lapToConsole('In first then')
      if (response.ok) {
        lapToConsole('Should not get this')
        return
      }
      return Promise.reject(response) // eslint-disable-line @typescript-eslint/prefer-promise-reject-errors
    }
  )
  lapToConsole('After thens')
  return response
}
