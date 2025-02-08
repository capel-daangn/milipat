package ziweek.milipat.domain.document.api

import org.springframework.graphql.data.method.annotation.Argument
import org.springframework.graphql.data.method.annotation.MutationMapping
import org.springframework.graphql.data.method.annotation.QueryMapping
import org.springframework.stereotype.Controller
import ziweek.milipat.domain.document.dto.CreateDocumentReqDto
import ziweek.milipat.domain.document.dto.DocumentResDto
import ziweek.milipat.domain.document.dto.UpdateDocumentReqDto
import ziweek.milipat.domain.document.service.DocumentService

@Controller
class DocumentResolver(
    private val documentService: DocumentService
) {

    @QueryMapping
    fun getDocumentById(
        @Argument id: String
    ): DocumentResDto {
        return documentService.getDocumentById(id).toResDto()
    }

    @MutationMapping
    fun createDocument(
        @Argument(name = "createDocumentInput") createDocumentReqDto: CreateDocumentReqDto
    ): DocumentResDto {
        return documentService.createDocument(createDocumentReqDto).toResDto()
    }

    @MutationMapping
    fun updateDocument(
        @Argument(name = "updateDocumentInput") updateDocumentReqDto: UpdateDocumentReqDto
    ): DocumentResDto {
        return documentService.updateDocument(updateDocumentReqDto).toResDto()
    }

    @MutationMapping
    fun deleteDocumentById(
        @Argument id: String
    ) {
        return documentService.deleteDocumentById(id)
    }
}