package ziweek.milipat.domain.document.dto

import java.time.LocalDate

data class DocumentResDto(
    val id: String?,
    val title: String,
    val author: String,
    val publishedAt: LocalDate,
    val fileUrl: String,
    val fileSize: Int
)