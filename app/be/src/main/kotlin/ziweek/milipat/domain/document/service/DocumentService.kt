package ziweek.milipat.domain.document.service

import org.springframework.stereotype.Service
import ziweek.milipat.domain.document.dto.CreateDocumentReqDto
import ziweek.milipat.domain.document.dto.UpdateDocumentReqDto
import ziweek.milipat.domain.document.entity.Document
import ziweek.milipat.domain.document.repository.DocumentRepository

@Service
class DocumentService(
    private val documentRepository: DocumentRepository
) {

    fun createDocument(createDocumentReqDto: CreateDocumentReqDto): Document {
        return documentRepository.save(createDocumentReqDto.toEntity())
    }

    fun getDocumentById(id: String): Document {
        return documentRepository.findDocumentById(id)
    }

    fun updateDocument(updateDocumentReqDto: UpdateDocumentReqDto): Document {
        return documentRepository.save(updateDocumentReqDto.toEntity())

    }

    fun deleteDocumentById(id: String) {
        return documentRepository.deleteById(id)
    }
}