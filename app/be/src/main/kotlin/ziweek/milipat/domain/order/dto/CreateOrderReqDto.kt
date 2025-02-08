package ziweek.milipat.domain.order.dto

import ziweek.milipat.domain.order.entity.Order
import java.time.LocalDate

data class CreateOrderReqDto(
    var id: Long? = null,
    val title: String,
    val author: String,
    val publishedAt: LocalDate,
    val fileUrl: String,
    val fileSize: Int
) {
    fun toEntity(): Order {
        return Order(
            title = this.title,
            author = this.author,
            publishedAt = this.publishedAt,
            fileUrl = this.fileUrl,
            fileSize = this.fileSize
        )
    }
}