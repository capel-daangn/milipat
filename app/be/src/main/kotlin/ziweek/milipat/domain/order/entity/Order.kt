package ziweek.milipat.domain.order.entity

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import ziweek.milipat.domain.order.dto.OrderResDto
import java.time.LocalDate


@Entity
data class Order(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? = null,
    val title: String,
    val author: String,
    val publishedAt: LocalDate,
    val fileUrl: String,
    val fileSize: Int
) {
    fun toResDto(): OrderResDto {
        return OrderResDto(
            id = this.id,
            title = this.title,
            author = this.author,
            publishedAt = this.publishedAt,
            fileUrl = this.fileUrl,
            fileSize = this.fileSize
        )
    }
}