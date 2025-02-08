package ziweek.milipat.domain.comment.api

import org.springframework.graphql.data.method.annotation.Argument
import org.springframework.graphql.data.method.annotation.MutationMapping
import org.springframework.graphql.data.method.annotation.QueryMapping
import org.springframework.stereotype.Controller
import ziweek.milipat.domain.comment.dto.CommentResDto
import ziweek.milipat.domain.comment.dto.CreateCommentReqDto
import ziweek.milipat.domain.comment.dto.UpdateCommentReqDto
import ziweek.milipat.domain.comment.entity.Comment
import ziweek.milipat.domain.comment.service.CommentService

@Controller
class CommentResolver(
    private val commentService: CommentService
) {

    @MutationMapping
    fun createComment(
        @Argument(name = "createCommentInput") createCommentReqDto: CreateCommentReqDto
    ): CommentResDto {
        return commentService.createComment(createCommentReqDto).toResDto()
    }

    @QueryMapping
    fun getCommentById(
        @Argument id: String
    ): CommentResDto {
        return commentService.getCommentById(id)!!.toResDto()
    }

    @QueryMapping
    fun getCommentsByUserId(
        @Argument id: String
    ): List<CommentResDto> {
        return commentService.getCommentsByUserId(id).map { comment: Comment -> comment.toResDto() }
    }

    @MutationMapping
    fun updateComment(
        @Argument(name = "updateCommentInput") updateCommentReqDto: UpdateCommentReqDto
    ): CommentResDto {
        return commentService.updateComment(updateCommentReqDto).toResDto()
    }

    @MutationMapping
    fun deleteComment(
        @Argument id: String
    ) {
        commentService.deleteComment(id)
    }
}