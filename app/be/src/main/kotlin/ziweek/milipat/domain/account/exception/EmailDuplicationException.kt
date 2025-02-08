package ziweek.milipat.domain.account.exception

class EmailDuplicationException(
    override val message: String = "Email duplication"
) : RuntimeException(message) {
}