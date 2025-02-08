package ziweek.milipat.domain.comment.entity

import org.springframework.data.mongodb.core.mapping.Document
import ziweek.milipat.domain.comment.dto.CommentResDto

@Document
data class Comment(
    var id: String? = null,
    val userId: String,
    val title: String,
    val description: String,
) {
    fun toResDto(): CommentResDto {
        return CommentResDto(
            id = this.id,
            userId = this.userId,
            title = this.title,
            description = this.description,
        )
    }
}