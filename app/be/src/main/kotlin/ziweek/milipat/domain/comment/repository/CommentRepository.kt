package ziweek.milipat.domain.comment.repository

import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository
import ziweek.milipat.domain.comment.entity.Comment

@Repository
interface CommentRepository : MongoRepository<Comment, String> {

    fun findCommentById(id: String): Comment

    fun findCommentsByUserId(userId: String): List<Comment>
}