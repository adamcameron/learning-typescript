import { lapToConsole } from './lap'

export async function failingCall() {
  lapToConsole('Start')

  const response = fetch('http://localhost:3000/bad')
    .then(async (response: Response) => {
      lapToConsole('In first then')
      if (response.ok) {
        lapToConsole('Should not get this')
        return
      }
      lapToConsole(`Response status: [${response.status}]`)
      throw new Error(`Bad response: ${String(await response.text())}`)
    })
    .catch((error: Error) => {
      lapToConsole(`Error caught: [${error.message}]`)
    })
  lapToConsole('After thens')
  return response
}
