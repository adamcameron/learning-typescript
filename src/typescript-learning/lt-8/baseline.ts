import process from 'node:process'

export function getNodeVersion(): string {
  return process.version
}
