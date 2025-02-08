package ziweek.milipat.domain.document.dto

import ziweek.milipat.domain.document.entity.Document
import java.time.LocalDate

class UpdateDocumentReqDto(
    var id: String,
    val title: String,
    val author: String,
    val publishedAt: LocalDate,
    val fileUrl: String,
    val fileSize: Int
) {
    fun toEntity(): Document {
        return Document(
            id = this.id,
            title = this.title,
            author = this.author,
            publishedAt = this.publishedAt,
            fileUrl = this.fileUrl,
            fileSize = this.fileSize
        )
    }
}