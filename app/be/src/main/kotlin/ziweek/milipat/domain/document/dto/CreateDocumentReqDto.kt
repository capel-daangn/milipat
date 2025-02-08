package ziweek.milipat.domain.document.dto

import ziweek.milipat.domain.document.entity.Document
import java.time.LocalDate

data class CreateDocumentReqDto(
    var id: String? = null,
    val title: String,
    val author: String,
    val publishedAt: LocalDate,
    val fileUrl: String,
    val fileSize: Int
) {
    fun toEntity(): Document {
        return Document(
            title = this.title,
            author = this.author,
            publishedAt = this.publishedAt,
            fileUrl = this.fileUrl,
            fileSize = this.fileSize
        )
    }
}