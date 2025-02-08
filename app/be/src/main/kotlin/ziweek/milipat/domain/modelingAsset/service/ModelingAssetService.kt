package ziweek.milipat.domain.modelingAsset.service

import org.springframework.stereotype.Service
import ziweek.milipat.domain.modelingAsset.dto.CreateModelingAssetReqDto
import ziweek.milipat.domain.modelingAsset.dto.UpdateModelingAssetReqDto
import ziweek.milipat.domain.modelingAsset.entity.ModelingAsset
import ziweek.milipat.domain.modelingAsset.repository.ModelingAssetRepository

@Service
class ModelingAssetService(
    private val modelingAssetRepository: ModelingAssetRepository
) {
    fun createModelingAsset(createModelingAssetReqDto: CreateModelingAssetReqDto): ModelingAsset {
        return modelingAssetRepository.save(createModelingAssetReqDto.toEntity())
    }

    fun getModelingAssetById(id: String): ModelingAsset {
        return modelingAssetRepository.findModelingAssetById(id)
    }

    fun updateModelingAsset(updateModelingAssetReqDto: UpdateModelingAssetReqDto): ModelingAsset {
        return modelingAssetRepository.save(updateModelingAssetReqDto.toEntity())
    }

    fun deleteModelingAssetById(id: String) {
        return modelingAssetRepository.deleteById(id)
    }
}