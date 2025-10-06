/* node:coverage ignore file */
import * as http from 'http'
import 'url'

const server = http.createServer((request, response) => {
  const fullUrl = new URL(`http://localhost${request.url}`)

  if (fullUrl.pathname === '/quick') {
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.end('OK')
    return
  }
  if (fullUrl.pathname === '/slow') {
    const delayValue: string = fullUrl.searchParams.get('delay') ?? ''
    const delay: number = parseInt(delayValue || '0', 10)

    setTimeout(() => {
      response.writeHead(200, { 'Content-Type': 'text/plain' })
      response.end(`OK after ${delay}ms`)
    }, delay)
    return
  }
  if (fullUrl.pathname === '/bad') {
    setTimeout(() => {
      response.writeHead(500, { 'Content-Type': 'text/plain' })
      response.end('Internal Server Error')
    }, 100)
    return
  }
  response.writeHead(404, { 'Content-Type': 'text/plain' })
  response.end('Page not found')
})

const port = 3000
server.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
