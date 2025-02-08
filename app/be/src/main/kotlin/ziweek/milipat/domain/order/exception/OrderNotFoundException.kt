package ziweek.milipat.domain.order.exception

class OrderNotFoundException(
    override val message: String = "Document not found"
) : RuntimeException(message) {
}