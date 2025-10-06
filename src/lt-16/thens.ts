import { lapToConsole } from './lap'

export async function logSomeThens() {
  lapToConsole('Start')

  const response = fetch('http://localhost:3000/slow?delay=1000')
    .then(() => {
      lapToConsole('In first then')
    })
    .then(() => {
      lapToConsole('In second then')
    })
  lapToConsole('After fetch')
  response
    .then(() => {
      lapToConsole('In third then')
    })
    .then(() => {
      lapToConsole('In fourth then')
    })
    .catch(() => {
      lapToConsole('In catch (should not see this)')
    })
  lapToConsole('After thens')
  return response
}
