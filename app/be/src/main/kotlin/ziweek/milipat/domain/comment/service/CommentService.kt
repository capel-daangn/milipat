package ziweek.milipat.domain.comment.service

import org.springframework.stereotype.Service
import ziweek.milipat.domain.comment.dto.CreateCommentReqDto
import ziweek.milipat.domain.comment.dto.UpdateCommentReqDto
import ziweek.milipat.domain.comment.entity.Comment
import ziweek.milipat.domain.comment.repository.CommentRepository

@Service
class CommentService(
    private val commentRepository: CommentRepository
) {

    fun createComment(createMyAccountReqDto: CreateCommentReqDto): Comment {
        return commentRepository.save(createMyAccountReqDto.toEntity())
    }

    fun getCommentById(id: String): Comment? {
        return commentRepository.findCommentById(id)
    }

    fun getCommentsByUserId(userId: String): List<Comment> {
        return commentRepository.findCommentsByUserId(userId)
    }


    fun updateComment(updateCommentReqDto: UpdateCommentReqDto): Comment {
        return commentRepository.save(updateCommentReqDto.toEntity())
    }

    fun deleteComment(id: String) {
        return commentRepository.deleteById(id)
    }
}