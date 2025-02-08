package ziweek.milipat.domain.comment.dto

import ziweek.milipat.domain.comment.entity.Comment

class UpdateCommentReqDto(
    val id: String,
    val userId: String,
    val title: String,
    val description: String
) {
    fun toEntity(): Comment {
        return Comment(
            id = this.id,
            userId = this.userId,
            title = this.title,
            description = this.description,
        )
    }
}