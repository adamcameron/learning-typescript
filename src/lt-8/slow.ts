async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function mySlowFunction(): Promise<void> {
  console.log('Starting slow function...')
  await sleep(2000)
  console.log('Slow function finished.')
}
