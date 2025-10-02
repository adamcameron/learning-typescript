import {
  AuthenticationService,
  SuccessfulDirectoryServiceAdapter,
  FailingDirectoryServiceAdapter,
  AuthenticationException,
} from '@/lt-31/method'
import { describe, expect, it, vi } from 'vitest'

describe('Testing method decoration', () => {
  it('logs successful authentication', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {})

    const authService = new AuthenticationService(
      new SuccessfulDirectoryServiceAdapter()
    )
    expect(authService.authenticate('user1', 'password1')).toBe(true)
    expect(consoleSpy).toHaveBeenCalledWith('Authenticating user user1')
    expect(consoleSpy).toHaveBeenCalledWith(
      'User user1 authenticated successfully'
    )
  })

  it('logs failed authentication', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {})

    const authService = new AuthenticationService(
      new FailingDirectoryServiceAdapter()
    )
    expect(() => {
      authService.authenticate('user1', 'password1')
    }).toThrowError(AuthenticationException)
    expect(consoleSpy).toHaveBeenCalledWith('Authenticating user user1')
    expect(consoleSpy).toHaveBeenCalledWith(
      'Authentication failed for user user1: Error: Authentication failed for user user1'
    )
  })
})
