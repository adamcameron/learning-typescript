import { describe, it, expect } from 'vitest'

describe('tests of waiter stub web server', () => {
  const baseUrl = 'http://localhost:3000'

  it('responds immediately on the /quick endpoint', async () => {
    const start = Date.now()
    const response = await fetch(`${baseUrl}/quick`)
    const end = Date.now()
    const latency = end - start
    expect(response.status).toBe(200)
    const text = await response.text()
    expect(text).toEqual('OK')
    expect(latency).toBeLessThan(100)
  })

  it('responds after a delay on the /slow endpoint', async () => {
    const delay = 1000
    const start = Date.now()
    const response = await fetch(`${baseUrl}/slow?delay=${delay}`)
    const end = Date.now()
    const latency = end - start
    expect(response.status).toBe(200)
    const text = await response.text()
    expect(text).toBe(`OK after ${delay}ms`)
    expect(latency).toBeGreaterThanOrEqual(delay)
  })

  it('returns a 500 for /bad', async () => {
    const response = await fetch(`${baseUrl}/bad`)
    expect(response.status).toBe(500)
    const text = await response.text()
    expect(text).toBe('Internal Server Error')
  })

  it('returns a 404 for anything else', async () => {
    const response = await fetch(`${baseUrl}/not-found`)
    expect(response.status).toBe(404)
  })
})
