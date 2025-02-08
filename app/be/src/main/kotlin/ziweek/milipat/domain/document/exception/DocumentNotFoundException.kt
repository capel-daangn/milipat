package ziweek.milipat.domain.document.exception

class DocumentNotFoundException(
    override val message: String = "Document not found"
) : RuntimeException(message) {
}