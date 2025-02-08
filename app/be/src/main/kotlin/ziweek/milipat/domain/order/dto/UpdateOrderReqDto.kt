package ziweek.milipat.domain.order.dto

import ziweek.milipat.domain.order.entity.Order
import java.time.LocalDate

class UpdateOrderReqDto(
    var id: Long,
    val title: String,
    val author: String,
    val publishedAt: LocalDate,
    val fileUrl: String,
    val fileSize: Int
) {
    fun toEntity(): Order {
        return Order(
            id = this.id,
            title = this.title,
            author = this.author,
            publishedAt = this.publishedAt,
            fileUrl = this.fileUrl,
            fileSize = this.fileSize
        )
    }
}