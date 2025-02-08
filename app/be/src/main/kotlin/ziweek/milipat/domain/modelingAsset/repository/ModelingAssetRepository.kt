package ziweek.milipat.domain.modelingAsset.repository

import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository
import ziweek.milipat.domain.modelingAsset.entity.ModelingAsset

@Repository
interface ModelingAssetRepository : MongoRepository<ModelingAsset, String> {
    fun findModelingAssetById(id: String): ModelingAsset
}