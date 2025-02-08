package ziweek.milipat.domain.document.repository

import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository
import ziweek.milipat.domain.document.entity.Document

@Repository
interface DocumentRepository : MongoRepository<Document, String> {

    fun findDocumentById(id: String): Document

    fun deleteDocumentById(id: String): Document
}