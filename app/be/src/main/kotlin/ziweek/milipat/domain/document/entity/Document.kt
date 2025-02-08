package ziweek.milipat.domain.document.entity

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import ziweek.milipat.domain.document.dto.DocumentResDto
import java.time.LocalDate


@Entity
data class Document(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: String? = null,
    val title: String,
    val author: String,
    val publishedAt: LocalDate,
    val fileUrl: String,
    val fileSize: Int
) {
    fun toResDto(): DocumentResDto {
        return DocumentResDto(
            id = this.id,
            title = this.title,
            author = this.author,
            publishedAt = this.publishedAt,
            fileUrl = this.fileUrl,
            fileSize = this.fileSize
        )
    }
}