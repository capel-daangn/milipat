package ziweek.milipat.domain.comment.exception

class CommentNotFoundException(
    override val message: String = "Account not found"
) : RuntimeException(message)