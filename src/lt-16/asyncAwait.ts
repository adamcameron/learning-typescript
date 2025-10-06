export function justFetches() {
  return fetch('http://localhost:3000/slow?delay=1000')
}
