package ziweek.milipat.domain.order.dto

import java.time.LocalDate

data class OrderResDto(
    val id: Long?,
    val title: String,
    val author: String,
    val publishedAt: LocalDate,
    val fileUrl: String,
    val fileSize: Int
)