package ziweek.milipat.domain.account.exception

class AccountNotFoundException(
    override val message: String = "Account not found"
) : RuntimeException(message)