package ziweek.milipat.domain.comment.dto

data class CommentResDto(
    val id: String?,
    val userId: String,
    val title: String,
    val description: String
)