interface Logger {
  log(message: string): void
}

const defaultLogger: Logger = console

export class AuthenticationService {
  constructor(private directoryServiceAdapter: DirectoryServiceAdapter) {}

  @logAuth()
  authenticate(userName: string, password: string): boolean {
    const result: boolean = this.directoryServiceAdapter.authenticate(
      userName,
      password
    )
    if (!result) {
      throw new AuthenticationException(
        `Authentication failed for user ${userName}`
      )
    }
    return result
  }
}

export class AuthenticationException extends Error {}

interface DirectoryServiceAdapter {
  authenticate(userName: string, password: string): boolean
}

export class SuccessfulDirectoryServiceAdapter
  implements DirectoryServiceAdapter
{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  authenticate(userName: string, password: string): boolean {
    return true
  }
}

export class FailingDirectoryServiceAdapter implements DirectoryServiceAdapter {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  authenticate(userName: string, password: string): boolean {
    return false
  }
}

function logAuth(logger: Logger = defaultLogger) {
  return function (
    originalMethod: (
      this: AuthenticationService,
      userName: string,
      password: string
    ) => boolean,
    context: ClassMethodDecoratorContext<
      AuthenticationService,
      (userName: string, password: string) => boolean
    >
  ) {
    void context
    function replacementMethod(
      this: AuthenticationService,
      userName: string,
      password: string
    ) {
      logger.log(`Authenticating user ${userName}`)
      try {
        const result = originalMethod.call(this, userName, password)
        logger.log(`User ${userName} authenticated successfully`)
        return result
      } catch (e) {
        logger.log(`Authentication failed for user ${userName}: ${String(e)}`)
        throw e
      }
    }
    return replacementMethod
  }
}
